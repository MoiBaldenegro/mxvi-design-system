---
title: Color
---

# Color

Los colores son decisiones iniciales de MXNI v1.0 y deben validarse en interfaces y contenido reales.

## Core palette

<div class="mxni-swatch-grid">
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#09070D"></div><div class="mxni-swatch__meta"><b>Void</b><code>#09070D</code>Background</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#15111C"></div><div class="mxni-swatch__meta"><b>Surface</b><code>#15111C</code>Containers</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#211A2B"></div><div class="mxni-swatch__meta"><b>Elevated</b><code>#211A2B</code>Raised surfaces</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#382C42"></div><div class="mxni-swatch__meta"><b>Border</b><code>#382C42</code>Dividers</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#A83FE0"></div><div class="mxni-swatch__meta"><b>Electric Purple</b><code>#A83FE0</code>Primary brand</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#E044C5"></div><div class="mxni-swatch__meta"><b>Neon Magenta</b><code>#E044C5</code>Expressive accent</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#24CDE0"></div><div class="mxni-swatch__meta"><b>Digital Cyan</b><code>#24CDE0</code>Interactive accent</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#B5F52D"></div><div class="mxni-swatch__meta"><b>Signal Lime</b><code>#B5F52D</code>Data highlight</div></div>
</div>

## Semantic colors

Semantic colors communicate meaning, not brand identity. Initial defaults:

| Token | Value | Meaning |
|---|---|---|
| Success | `#39C98A` | Successful operation |
| Warning | `#F3B64B` | Caution or pending |
| Danger | `#F05B72` | Error or destructive action |
| Info | `#24CDE0` | Neutral information |

Do not use lime as the only indicator of success or red as the only indicator of error. Include labels, icons, or text.

## Usage ratios

As a starting point for dark interfaces:

- 65–75% dark backgrounds and surfaces.
- 15–25% neutral text and structural elements.
- 5–10% brand and accent colors.

These are visual heuristics, not strict pixel quotas.

## Contrast

Check text and interactive states against their actual backgrounds. Normal text should target WCAG 2.2 AA contrast (4.5:1); large text and meaningful UI graphics should target at least 3:1 where applicable. Do not assume a brand color is accessible on every surface.

## Rules

- Purple is the primary brand signal.
- Magenta is expressive, not a default action color.
- Cyan highlights interaction and technical information.
- Lime is a limited highlight for data and status.
- Use neutral text for long reading.
- Never use all accents at equal intensity in one composition.