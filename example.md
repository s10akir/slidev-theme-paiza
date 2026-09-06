---
theme: ./
layout: cover
transition: fade-out
mdc: true
themeConfig:
  service: career
---

# slidev-theme-paiza

サブタイトル

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  cover：表紙。themeConfig.service でサービス配色を指定。
</div>

---
layout: intro
---

# 見出し

本文

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  intro：導入。見出しと本文を縦方向の中央に配置。
</div>

---
layout: toc
---

# 目次

<NumberHeading :no="1" text="項目" />
<NumberHeading :no="2" text="項目" />
<NumberHeading :no="3" text="項目" />

<div class="absolute bottom-10 right-14 text-sm leading-tight text-left opacity-70" style="left: calc(25% + 3.5rem)">
  toc：目次。左の帯と右の本文領域で構成。
</div>

---
layout: section
---

# 章見出し

本文

<div class="absolute bottom-10 right-14 text-sm leading-tight text-left opacity-70" style="left: calc(25% + 3.5rem)">
  section：章扉。左にサービスカラーの帯を配置。
</div>

---
layout: default
---

# 見出し

本文。**強調**、[下線]{.underline}、`code`、[リンク](https://sli.dev)。

## 小見出し

本文。

### 小見出し

本文。

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  default：サービスカラーの枠。強調は primary 色、下線はマーカー風。
</div>

---
layout: default
---

# 箇条書き

- 項目1
  - 項目1.1
  - 項目1.2
- 項目2
- 項目3

---
layout: default
---

# 番号付きリスト

1. 項目1
2. 項目2
3. 項目3

---
layout: quote
---

# 引用文

出典

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  quote：引用。見出しを大きく、続く段落を出典として表示。
</div>

---
layout: two-cols
---

# 左見出し

左本文。

- 項目1
- 項目2

::right::

# 右見出し

右本文。

- 項目1
- 項目2

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  two-cols：左右2列。右列は ::right:: で指定。
</div>

---
layout: statement
---

# 見出し

本文

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  statement：主張。大きな見出しを中央揃え。lead も同じ表示。
</div>

---
layout: fact
---

# 100

単位・説明

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  fact：数値を大きく表示。続く段落はキャプション。
</div>

---
layout: two-cols-header
---

# 共通見出し

::left::

## 左見出し

左本文。

::right::

## 右見出し

右本文。

::bottom::

下部本文。

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  two-cols-header：共通見出しと2列。::left:: / ::right:: / ::bottom:: で配置。
</div>

---
layout: default
---

# コード

```ts
type Item = {
  id: number
  text: string
}

const items: Item[] = [
  { id: 1, text: '項目1' },
  { id: 2, text: '項目2' },
]
```

本文中の `items`。

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  コード：薄い背景と枠線。インラインコードは角丸の背景付き。
</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80
---

# 見出し

本文。

<div class="absolute bottom-10 left-14 text-sm leading-tight text-left opacity-70" style="right: calc(50% + 3.5rem)">
  image-right：右半分に画像。image でURL、backgroundSize で画像のサイズを指定。
</div>

---
layout: center
---

# 見出し

本文

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  center：見出しと本文を縦横の中央に配置。
</div>

---
layout: default
---

# 表

| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 項目1 | 本文 | 100 |
| 項目2 | 本文 | 200 |
| 項目3 | 本文 | 300 |

---
layout: default
---

# Label

<Label>success</Label>
<Label color="attention">attention</Label>
<Label color="annotation">annotation</Label>

<br>

<Label :outline="false">success</Label>
<Label color="attention" :outline="false">attention</Label>
<Label color="annotation" :outline="false">annotation</Label>

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  Label：color で3色を指定。上段は outline=true、下段は outline=false。
</div>

---
layout: default
---

# NumberHeading

<NumberHeading :no="1" text="見出し" />
<NumberHeading :no="2" text="見出し" variant="large" />
<NumberHeading :no="3" text="見出し" variant="inline" underline />

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  NumberHeading：no と text を指定。上から標準・large・inline。最下段は underline 付き。
</div>

---
layout: full
---

<div class="h-full grid grid-cols-3 text-center">
  <div class="bg-b-safe flex flex-col justify-center p-8">
    <h2>見出し1</h2>
    <p>本文</p>
  </div>
  <div class="bg-b-attention flex flex-col justify-center p-8">
    <h2>見出し2</h2>
    <p>本文</p>
  </div>
  <div class="bg-b-information flex flex-col justify-center p-8">
    <h2>見出し3</h2>
    <p>本文</p>
  </div>
</div>

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  full：枠・余白なし。この例は3列グリッドと背景色の組み合わせ。
</div>

---
layout: end
class: text-center
---

# slidev-theme-paiza

本文

<div class="absolute bottom-10 left-14 right-14 text-sm leading-tight text-left opacity-70">
  end：サービスカラー背景の終了ページ。強調は白文字。
</div>
