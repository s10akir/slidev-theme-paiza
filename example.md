---
theme: ./
layout: cover
transition: fade-out
mdc: true
themeConfig:
  service: career
---

# slidev-theme-paiza

レイアウト・色・コンポーネントのプレビュー

---
layout: intro
---

# layout: intro

発表の導入用。タイトルと説明を縦方向の中央に置く。

---
layout: section
---

# Colors

---

# Base colors

UnoCSS では `text-normal` のように使える。

- [■]{.text-normal} `normal`
- [■]{.text-anti} `anti`
- [■]{.text-success} `success`
- [■]{.text-attention} `attention`
- [■]{.text-annotation} `annotation`

---

# Service colors

`themeConfig.service` で primary / secondary が切り替わる。  
選択肢: `top` | `career` | `student` | `en_try` | `learning`（デフォルトは `career`）

::div{.grid.grid-cols-3}

:::div
top

- [■]{.text-top-primary} `top-primary`
- [■]{.text-top-secondary} `top-secondary`

:::

:::div
career

- [■]{.text-career-primary} `career-primary`
- [■]{.text-career-secondary} `career-secondary`
- [■]{.text-career-global} `career-global`

:::

:::div
student

- [■]{.text-student-primary} `student-primary`
- [■]{.text-student-secondary} `student-secondary`
- [■]{.text-student-global} `student-global`

:::

:::div
en_try

- [■]{.text-en_try-primary} `en_try-primary`
- [■]{.text-en_try-secondary} `en_try-secondary`
- [■]{.text-en_try-global} `en_try-global`

:::

:::div
learning

- [■]{.text-learning-primary} `learning-primary`
- [■]{.text-learning-secondary} `learning-secondary`
- [■]{.text-learning-global} `learning-global`

:::
::

---

# Background colors

薄い背景用。

- [■]{.text-b-normal} `b-normal`
- [■]{.text-b-accent} `b-accent`
- [■]{.text-b-information} `b-information`
- [■]{.text-b-form} `b-form`
- [■]{.text-b-disabled} `b-disabled`
- [■]{.text-b-error} `b-error`
- [■]{.text-b-attention} `b-attention`
- [■]{.text-b-safe} `b-safe`

---

# themeConfig

```yaml
---
themeConfig:
  service: learning
  # CSS 変数と同名のキーで上書きもできる
  normal: "#fbf5f3"
---
```

---
layout: section
---

# Typography

---

# Markdown

# h1
## h2
### h3

- **strong** は primary 色
- [underline]{.underline} はマーカー風
- インラインコードは `code`
- [リンク](https://sli.dev)

---
layout: section
---

# Layouts

---
layout: toc
---

# layout: toc

テーマ独自。目次用。

- `cover` / `intro` / `end`
- `section` / `default` / `center` / `full`
- `statement` (`lead` は alias) / `fact` / `quote`
- `two-cols` / `two-cols-header`
- `image` / `image-left` / `image-right`

`iframe*` と `none` は Slidev 本体のまま。

---
layout: default
---

# layout: default

指定なしのスライドはこれ。枠線付きの基本レイアウト。

---
layout: center
---

# layout: center

内容を画面中央に置く。

---
layout: statement
---

# layout: statement

主張・結論を中央に大きく出す。  
`layout: lead` は同じ見た目の alias。

---
layout: fact
---

# 100

`h1` が大きく、続く段落はキャプションになる。

---
layout: quote
---

# layout: quote

引用を大きく出す。続く段落は出典向け。

---
layout: full
---

# layout: full

枠線・余白なし。キャンバス全体を使う。

---
layout: two-cols
---

# layout: two-cols

左カラム（default slot）

::right::

# ::right::

右カラムは named slot

---
layout: two-cols-header
---

# layout: two-cols-header

見出しは両カラムにまたがる

::left::

`::left::`

::right::

`::right::`

---
layout: image-right
image: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80
---

# layout: image-right

```yaml
---
layout: image-right
image: /path/or/url
---
```

`image-left` は左右逆。`image` は全面。

---
layout: section
---

# Components

---

# Label

`color`: `success`（default）/ `attention` / `annotation`  
`outline`: `true`（default）で線、`false` で塗り

<Label>success</Label>
<Label :outline="false">success fill</Label>
<Label color="attention">attention</Label>
<Label color="attention" :outline="false">attention fill</Label>
<Label color="annotation">annotation</Label>
<Label color="annotation" :outline="false">annotation fill</Label>

```html
<Label>success</Label>
<Label color="attention" :outline="false">attention fill</Label>
```

---

# NumberHeading

`no` と `text`。`variant` は `large` | `inline`。

<NumberHeading :no="1" text="default" />
<NumberHeading :no="2" text="underline" underline />

```html
<NumberHeading :no="1" text="default" />
<NumberHeading :no="2" text="underline" underline />
```

---

# Transition

Slidev 本体の transition が使える。このデッキは `fade-out`。

```yaml
---
transition: fade-out
---
```

[Animation | Slidev](https://sli.dev/guide/animations#slide-transitions)

---
layout: end
class: text-center
---

# layout: end

終了スライド。cover と同じく primary の全面背景。
