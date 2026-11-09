---
title: CSS tokens
---

# CSS tokens

The following CSS is the initial canonical token set. Copy it into a shared stylesheet or package and keep it synchronized with this document.

```css
:root {
  /* Brand */
  --mxni-primary: #A83FE0;
  --mxni-secondary: #E044C5;
  --mxni-cyan: #24CDE0;
  --mxni-lime: #B5F52D;

  /* Backgrounds */
  --mxni-bg: #09070D;
  --mxni-surface: #15111C;
  --mxni-elevated: #211A2B;

  /* Structure */
  --mxni-border: #382C42;

  /* Text */
  --mxni-text: #F7F4FA;
  --mxni-text-secondary: #B7AABD;
  --mxni-text-muted: #81768A;

  /* Semantic */
  --mxni-success: #39C98A;
  --mxni-warning: #F3B64B;
  --mxni-danger: #F05B72;
  --mxni-info: #24CDE0;

  /* Typography */
  --mxni-font-display: "Manrope", sans-serif;
  --mxni-font-mono: "JetBrains Mono", monospace;

  /* Spacing */
  --mxni-space-1: 4px;
  --mxni-space-2: 8px;
  --mxni-space-3: 12px;
  --mxni-space-4: 16px;
  --mxni-space-6: 24px;
  --mxni-space-8: 32px;
  --mxni-space-12: 48px;
  --mxni-space-16: 64px;

  /* Radius */
  --mxni-radius-sm: 2px;
  --mxni-radius-md: 6px;
  --mxni-radius-lg: 10px;
  --mxni-radius-pill: 999px;

  /* Effects */
  --mxni-glow-purple: 0 0 24px rgb(168 63 224 / 20%);
  --mxni-shadow: 0 8px 32px rgb(0 0 0 / 35%);

  /* Motion */
  --mxni-motion-fast: 120ms;
  --mxni-motion-base: 180ms;
  --mxni-motion-slow: 280ms;
}
```

## Naming

Use `--mxni-{category}-{name}`. Do not use unexplained abbreviations. Prefer semantic aliases in product themes instead of changing core tokens.