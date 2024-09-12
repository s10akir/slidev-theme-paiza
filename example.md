---
theme: ./
transition: fade-out
mdc: true
---

# slidev-theme-paiza

slidev custom theme for paiza engineers

---
layout: intro
---

# What is slidev-theme-paiza?

`slidev-theme-paiza` は [paiza のイメージに合わせてデザインした]{.underline}、Slidevのカスタムテーマです :twemoji-sun

---

# COLOR SCHEME

- [■]{style="color: var(--slidev-theme-black)" } --slidev-theme-black
- [■]{style="color: var(--slidev-theme-white)" } --slidev-theme-white
- [■]{style="color: var(--slidev-theme-blue)" } --slidev-theme-blue
- [■]{style="color: var(--slidev-theme-yellow)"} --slidev-theme-yellow

<twemoji-light-bulb/> front matterやpackage.jsonで同名の変数を定義することで、[これらを変更することもできます]{.underline}。

:br

```yaml
---
# 例: これがデフォルト値
themeConfig:
  white: "#fbf5f3"
  black: "#333"
  blue: "#3297ae"
  yellow: "#ffcc85"
---
```

---

# TYPOGRAPHY

## 平家物語

祇園精舍の鐘の声、[諸行無常の響きあり]{.underline}。[娑羅双樹](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%82%BD%E3%82%A6%E3%82%B8%E3%83%A5)の花の色、盛者必衰の理をあらはす。

驕れる人も久しからず、ただ `春の夜の夢` のごとし。

**猛き者もつひにはほろびぬ**、ひとへに風の前の塵に同じ。

:br

```markdown
祇園精舍の鐘の声、[諸行無常の響きあり]{.underline}。[娑羅双樹](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%82%BD%E3%82%A6%E3%82%B8%E3%83%A5)の花の色、盛者必衰の理をあらはす。

驕れる人も久しからず、ただ `春の夜の夢` のごとし。

**猛き者もつひにはほろびぬ**、ひとへに風の前の塵に同じ。
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
class: "text-center"
---

# 異能を伸ばせ。

