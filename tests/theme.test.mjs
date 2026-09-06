import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { compileScript, compileStyle, parse } from '@vue/compiler-sfc'

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

function component(name) {
  const { descriptor, errors } = parse(read(`components/${name}.vue`))
  assert.deepEqual(errors, [])
  const script = compileScript(descriptor, { id: 'test' })
  // These components have no imports. Evaluate Vue's compiled runtime props.
  return Function(script.content.replace('export default', 'return'))()
}

test('NumberHeading accepts supported variants as strings', () => {
  const { props } = component('number-heading')
  assert.equal(props.variant.type, String)
  for (const value of ['large', 'inline'])
    assert.equal(props.variant.validator(value), true)
  assert.equal(props.variant.validator('unknown'), false)
  assert.equal(props.no, Number)
})

test('Label defines defaults and validates color choices', () => {
  const { props } = component('label')
  assert.equal(props.color.default, 'success')
  assert.equal(props.outline.default, true)
  for (const value of ['success', 'attention', 'annotation'])
    assert.equal(props.color.validator(value), true)
  assert.equal(props.color.validator('unknown'), false)
})

test('Label compiles explicit foreground and background colors without UnoCSS', () => {
  const { descriptor } = parse(read('components/label.vue'))
  const { code, errors } = compileStyle({
    source: descriptor.styles[0].content,
    filename: 'label.vue',
    id: 'data-v-test',
    scoped: true,
  })
  assert.deepEqual(errors, [])
  assert.match(code, /color: var\(--label-color\)/)
  for (const color of ['success', 'attention', 'annotation'])
    assert.ok(code.includes(`--label-color: var(--slidev-theme-${color})`))
  assert.match(code, /\.label-outline[^}]+background-color: transparent/s)
  assert.match(code, /\.label-fill[^}]+color: var\(--slidev-theme-anti\)/s)
})

test('SlideNote stays in the lower safe area as a single line', () => {
  const { descriptor, errors } = parse(read('components/slide-note.vue'))
  assert.deepEqual(errors, [])
  const { code, errors: styleErrors } = compileStyle({
    source: descriptor.styles[0].content,
    filename: 'slide-note.vue',
    id: 'data-v-test',
    scoped: true,
  })
  assert.deepEqual(styleErrors, [])
  assert.match(code, /position: absolute/)
  assert.match(code, /text-align: left/)
  assert.match(code, /white-space: nowrap/)
})

test('UnoCSS color literals are valid hex colors and token references exist', () => {
  const config = read('uno.config.ts')
  const tokens = read('styles/tokens.css') + read('styles/layout.css')
  const values = [...config.matchAll(/"[\w-]+":\s*"([^"]+)"/g)]
  assert.ok(values.length > 0)
  for (const [, value] of values) {
    if (value.startsWith('var(')) {
      const token = value.slice(4, -1)
      assert.ok(tokens.includes(`${token}:`), `Missing token: ${token}`)
    } else {
      assert.match(value, /^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i)
    }
  }
})
