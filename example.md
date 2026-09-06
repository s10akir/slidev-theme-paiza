---
theme: ./
title: slidev-theme-paiza
layout: cover
transition: fade-out
mdc: true
themeConfig:
  service: career
---

# slidev-theme-paiza

サブタイトル

<SlideNote>
  cover：表紙。themeConfig.service でサービス配色を指定。
</SlideNote>

---
layout: intro
---

# 見出し

本文

<SlideNote>
  intro：導入。見出しと本文を縦方向の中央に配置。
</SlideNote>

---
layout: toc
---

# 目次

<NumberHeading :no="1" text="項目" />
<NumberHeading :no="2" text="項目" />
<NumberHeading :no="3" text="項目" />

<SlideNote>
  toc：目次。大きな見出しと番号付き項目で構成。
</SlideNote>

---
layout: section
---

# 章見出し

本文

<SlideNote>
  section：章扉。細身の大見出しを中央に配置。
</SlideNote>

---
layout: default
---

# 見出し

本文。**強調**、[下線]{.underline}、`code`、[リンク](https://sli.dev)。

## 小見出し

本文。

### 小見出し

本文。

<SlideNote>
  default：対角の細い枠。強調と下線にはサービスカラーを使用。
</SlideNote>

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

<SlideNote>
  quote：引用。見出しを大きく、続く段落を出典として表示。
</SlideNote>

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

<SlideNote>
  two-cols：左右2列。右列は ::right:: で指定。
</SlideNote>

---
layout: statement
---

# 見出し

本文

<SlideNote>
  statement：主張。大きな見出しを中央揃え。lead も同じ表示。
</SlideNote>

---
layout: fact
---

# 100

単位・説明

<SlideNote>
  fact：数値を大きく表示。続く段落はキャプション。
</SlideNote>

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

<SlideNote>
  two-cols-header：共通見出しと2列。::left:: / ::right:: / ::bottom:: で配置。
</SlideNote>

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

<SlideNote>
  コード：薄い背景と枠線。インラインコードは角丸の背景付き。
</SlideNote>

---
layout: image-right
image: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80
---

# 見出し

本文。

<SlideNote>
  image-right：右半分に画像を配置。image でURLを指定。
</SlideNote>

---
layout: center
---

# 見出し

本文

<SlideNote>
  center：見出しと本文を縦横の中央に配置。
</SlideNote>

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

<SlideNote>
  Label：color で3色を指定。上段は outline=true、下段は outline=false。
</SlideNote>

---
layout: default
---

# NumberHeading

<NumberHeading :no="1" text="見出し" />
<NumberHeading :no="2" text="見出し" variant="large" />
<NumberHeading :no="3" text="見出し" variant="inline" underline />

<SlideNote>
  NumberHeading：no と text を指定。上から標準・large・inline。最下段は underline 付き。
</SlideNote>

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

<SlideNote>
  full：枠・余白なし。この例は3列グリッドと背景色の組み合わせ。
</SlideNote>

---
layout: end
class: text-center
---

# slidev-theme-paiza

本文

<SlideNote>
  end：サービスカラー背景の終了ページ。大きな見出しを中央に配置。
</SlideNote>
