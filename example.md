---
theme: ./
transition: fade-out
mdc: true
# aspectRatio: 4/3
themeConfig:
  service: career
---

# slidev-theme-paiza

slidev custom theme for paiza engineers

---
layout: lead
---

# What is slidev-theme-paiza?

slidev-theme-paiza は [paiza のイメージに合わせてデザインした]{.underline}、  
Slidevのカスタムテーマです :twemoji-sun

---
layout: intro
---

# COLOR SCHEME

<twemoji-light-bulb/> 実際の変数名やクラス名は設定ファイルを参照してください。

:br

```
.
├── styles
│   ├── layout.css
└── uno.config.ts
```

---

# Base Colors

名前の付いた基本色です。

- [■]{.text-normal} normal
- [■]{.text-anti} anti
- [■]{.text-success} success
- [■]{.text-attention} attention
- [■]{.text-annotation} annotation

---

# Service Colors

paizaのサービスカラーです。

::div{.grid.grid-cols-3}

:::div
総合Top

- [■]{.text-top-primary} top-primary
- [■]{.text-top-secondary} top-secondary

:::

:::div
Career

- [■]{.text-career-primary} career-primary
- [■]{.text-career-secondary} career-secondary
- [■]{.text-career-global} career-global

:::

:::div
Student

- [■]{.text-student-primary} student-primary
- [■]{.text-student-secondary} student-secondary
- [■]{.text-student-global} student-global

:::

:::div
EN:TRY

- [■]{.text-en_try-primary} en_try-primary
- [■]{.text-en_try-secondary} en_try-secondary
- [■]{.text-en_try-global} en_try-global

:::

:::div
Learning

- [■]{.text-learning-primary} learning-primary
- [■]{.text-learning-secondary} learning-secondary
- [■]{.text-learning-global} learning-global

:::
::

---

# BG Colors

主に背景色に使う想定の淡い色です。

- [■]{.text-b-normal} b-normal
- [■]{.text-b-accent} b-accent
- [■]{.text-b-infomation} b-information
- [■]{.text-b-form} b-form
- [■]{.text-b-disabled} b-disabled
- [■]{.text-b-error} b-error
- [■]{.text-b-attention} b-attention
- [■]{.text-b-safe} b-safe

---

# TIPS

<twemoji-light-bulb/> front matterで[サービスイメージに合わせたカラースキーマに設定することもできます]{.underline}。

:br

```yaml
---
# 例:
themeConfig:
  # top | career | student | en_try | learning
  # デフォルトはcareer
  service: learning
---
```

:br

<twemoji-light-bulb/> front matterやpackage.jsonで同名の変数を定義することで[これらを変更することもできます]{.underline}。

:br

```yaml
---
# 例:
themeConfig:
  normal: "#fbf5f3"
---
```

---
layout: intro
---

# TYPOGRAPHY

---

## 平家物語

祇園精舍の鐘の声、[諸行無常の響きあり]{.underline}。[娑羅双樹](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%82%BD%E3%82%A6%E3%82%B8%E3%83%A5)の花の色、盛者必衰の理をあらはす。

驕れる人も久しからず、ただ `春の夜の夢` のごとし。

**猛き者もつひにはほろびぬ**、ひとへに風の前の塵に同じ。

:br

```markdown
## 平家物語

祇園精舍の鐘の声、[諸行無常の響きあり]{.underline}。[娑羅双樹](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%82%BD%E3%82%A6%E3%82%B8%E3%83%A5)の花の色、盛者必衰の理をあらはす。

驕れる人も久しからず、ただ `春の夜の夢` のごとし。

**猛き者もつひにはほろびぬ**、ひとへに風の前の塵に同じ。
```

---
layout: intro
---

# COMPONENT

---

# Label

badgeのようなコンポーネントです。

<Label>OK</Label>
<Label :outline="false">OK</Label>
<Label color="attention">必須</Label>
<Label color="attention" :outline="false">必須</Label>
<Label color="annotation" :outline="true">通過ランク：S</Label>
<Label color="annotation" :outline="false">通過ランク：S</Label>

:br

```html
<Label>OK</Label>
<Label color="attention">必須</Label>
<Label :outline="false">OK</Label>
<Label color="attention" :outline="false">必須</Label>
<Label color="annotation" :outline="true">通過ランク：S</Label>
<Label color="annotation" :outline="false">通過ランク：S</Label>
```

---

# TRANSITION

<twemoji-light-bulb /> slidev標準のトランジションが利用できます。

[Animation | Slidev](https://sli.dev/guide/animations#slide-transitions)

:br

```yaml
---
transition: fade
---
```

---
layout: end
class: text-center
---

# 異能を伸ばせ
