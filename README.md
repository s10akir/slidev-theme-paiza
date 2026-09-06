# slidev-theme-paiza

[![NPM version](https://img.shields.io/npm/v/slidev-theme-paiza?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-paiza)

paizaのサービスカラーを使用するSlidevテーマです。

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>paiza</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

Built-in Slidev layouts, restyled:

- `cover` — service-color title slide with an oversized logo watermark
- `intro` — introduce the talk
- `default` — basic content
- `center` — centered content
- `section` — section divider
- `statement` — prominent statement
- `fact` — prominent number / fact
- `quote` — quotation
- `full` — no frame, full canvas
- `two-cols` / `two-cols-header` — columns
- `image` / `image-left` / `image-right`
- `end` — closing slide

`iframe`, `iframe-left`, `iframe-right`, and `none` fall through to Slidev built-ins.

Theme extras:

- `toc` — table of contents
- `lead` — alias of `statement`

## Components

### Label

```html
<Label>success</Label>
<Label color="attention" :outline="false">注意</Label>
```

- `color`: `success`（既定） / `attention` / `annotation`
- `outline`: `true`（既定）で枠、`false`で塗り

### NumberHeading

```html
<NumberHeading :no="1" text="見出し" />
<NumberHeading :no="2" text="大きい見出し" variant="large" />
<NumberHeading :no="3" text="本文サイズ" variant="inline" underline />
```

`no` は数値、`text` は文字列。`variant` 省略時は標準サイズです。

### SlideNote

```html
<SlideNote>このスライドについての補足</SlideNote>
```

スライド下端の余白に、短い補足や出典を表示します。中央揃えのレイアウトでも
左揃えを維持します。1行表示を前提としているため、長い説明は本文か発表者ノートを使用してください。

## Theme configuration

```yaml
themeConfig:
  service: career
  header: ENGINEERING LT
```

`service`: `top` / `career`（既定） / `student` / `en_try` / `learning`。
テーマ配色はライト背景を前提としています。

フレーム左上には、スライド全体のfrontmatterに指定した`title`をそのまま表示します。
表紙では本文のタイトルと重複するため表示しません。`header`はタイトルの右側に添える
短い任意テキストで、表紙にも表示されます。

## Structure

- `styles/tokens.css`: 色・共通余白・枠線の値。
- `styles/layout.css`: 共通の文字装飾とレイアウト規則。
- `layouts/`: 各レイアウトの構造と固有の装飾。
- `uno.config.ts`: UnoCSSの色名とCSS変数・固定色の対応。
- `example.md`: レイアウトとコンポーネントの表示確認用デッキ。

共通の余白・枠線はCSS変数、各レイアウト固有の余白は個別のスタイルで定義しています。
`text-noitice` は `text-notice` の別名です。

### Verification

```sh
npm run check
```

コンポーネントpropsと色定義の検証後、サンプルをビルドします。
表示の確認には `npm run dev`、出力の確認には `npm run screenshot` / `npm run export` を使います。
画像・PDF出力にはSlidevのブラウザ実行環境が必要です。

表示確認用デッキには、表、リスト、コード、Label全種、NumberHeading全種、
終了ページの強調を含みます。配色は `themeConfig.service` で切り替えられます。
サンプルの外部画像とWebフォントはネットワークに依存します。

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
