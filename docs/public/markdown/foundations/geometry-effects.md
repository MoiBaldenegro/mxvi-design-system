---
title: Geometry and effects
---

# Geometry and effects

## Radius

| Token | Value | Use |
|---|---:|---|
| `radius-sm` | 2 px | Tags, tight controls |
| `radius-md` | 6 px | Inputs, cards, buttons |
| `radius-lg` | 10 px | Large panels and media |
| `radius-pill` | 999 px | Pills only |

MXNI favors controlled corners over overly rounded, playful surfaces.

## Borders

Use `#382C42` for subtle structure on dark surfaces. Borders should clarify grouping without creating a visible grid around every element.

## Shadows

- Use deep black shadows for elevation.
- Use purple glow only for selected or highlighted elements.
- Avoid stacking multiple glow layers.
- Prefer a border or surface change over glow for focus and selection.

## Glow

Recommended starting effect:

```css
box-shadow: 0 0 24px rgb(168 63 224 / 20%);
```

Glow is decorative. It must not be the only indication of focus, selection, or state.

## Gradients

Use localized gradients from purple to magenta. Cyan may appear as a small terminal accent. Avoid broad rainbow gradients.