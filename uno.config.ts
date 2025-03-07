import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      "normal":     "var(--slidev-theme-normal)",
      "anti":       "var(--slidev-theme-anti)",
      "success":    "var(--slidev-theme-success)",
      "attention":  "var(--slidev-theme-attention)",
      "annotation": "var(--slidev-theme-annotation)",
      "tertiary":   "var(--slidev-theme-tertiary)",

      "top-primary":        "var(--slidev-theme-top-primary)",
      "top-secondary":      "var(--slidev-theme-top-secondary)",
      "career-primary":     "var(--slidev-theme-career-primary)",
      "career-secondary":   "var(--slidev-theme-career-secondary)",
      "career-global":      "var(--slidev-theme-career-global)",
      "en_try-primary":     "var(--slidev-theme-en_try-primary)",
      "en_try-secondary":   "var(--slidev-theme-en_try-secondary)",
      "en_try-global":      "var(--slidev-theme-en_try-global)",
      "student-primary":    "var(--slidev-theme-student-primary)",
      "student-secondary":  "var(--slidev-theme-student-secondary)",
      "student-global":     "var(--slidev-theme-student-global)",
      "learning-primary":   "var(--slidev-theme-learning-primary)",
      "learning-secondary": "var(--slidev-theme-learning-secondary)",
      "learning-global":    "var(--slidev-theme-learning-global)",

      "b-normal":      "var(--slidev-theme-b-normal)",
      "b-accent":      "var(--slidev-theme-b-accent)",
      "b-information": "var(--slidev-theme-b-information)",
      "b-form":        "var(--slidev-theme-b-form)",
      "b-disabled":    "var(--slidev-theme-b-disabled)",
      "b-error":       "var(--slidev-theme-b-error)",
      "b-attention":   "var(--slidev-theme-b-attention)",
      "b-safe":        "var(--slidev-theme-b-safe)",
      
      /* ここから下はWIP */
      // button colors
      "button-cta": "#19B300",
      "button-cta-hover": "#1DCF00",
      "button-primary": "#0D7BD3",
      "button-primary-hover": "#0F7FFA",
      "button-tertiary": "#E2EEFF",
      "button-tertiary-hover": "EDF5FF",
      "button-neutral": "#BCCC0CB",
      "button-neutral-hover": "#DFE0E2",
      "color-danger": "#DA2F2F",
      "color-danger-hover": "#F3453F",
      "button-disabled": "#BCC0C8",

      // text colors
      "text-normal": "#333333",
      "text-anti": "#FFFFFF",
      "text-annotation": "#6E7687",
      "text-disabled": "#BCC0C8",
      "text-link": "0D6BD3",
      "text-link-hover": "#0F7FFA",
      "text-subtle-link": "#333333",
      "text-subtle-link-hover": "#6E7687",
      "text-noitice": "#DA2F2F",
      "text-attention": "#EA640A",
      "text-success": "#108924",
      "text-accent": "#FF253A",
      "text-info": "#008CBB",

      // background colors
      "bg-normal": "#FFFFFF",
      "bg-accent": "#F5F9FF",
      "bg-information": "F5F9FF",
      "bg-form": "#F5F9FF",
      "bg-disabled": "#D2D5DA",
      "bg-error": "#FEF9F9",
      "bg-attention": "#FFF3EB",
      "bg-safe": "#EBFFEE",

      // border color
      "border-outline": "#CCCCCC",
      "border-separator": "#DFE0E2",
      "border-error": "#DA2F2F",
      "border-info": "#008CBB",

      // form colors
      "form-bg-normal": "#FFFFFF",
      "form-bg-form": "#F5F9FF",
      "form-bg-error": "#FEF9F9",
      "form-focus-outline": "#0F7FFA",
      "form-border-error": "#DA2F2F",
      "form-border-outline": "#CCCCCC",
      "form-border-selected": "#BDD7F4",
      "form-text-normal": "#333333",
      "form-text-disabled": "#BCC0C8",
      "form-text-error": "#DA2F2F",
      "form-label-required": "#EA641C",
      "form-label-required-ok": "#108924",

      // focus color
      "focus-outline": "#0F7FFA",

      // badge colors
      "badge-new": "#FF253A",
      "badge-unread": "#0CAC26",
      "badge-attention": "#EA640A",

      // label colors
      "label-student-category": "#6E7687",
      "label-requirement": "#6E7687",
      "label-career": "#3D9FB7",
      "label-student": "#195C9A",
      "label-en_try": "#3C3C3C",

      // footer color
      // TODO

      // header color
      // TODO
    },
  },
});
