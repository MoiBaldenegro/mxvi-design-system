---
title: Implementation overview
---

# Implementation overview

## Source of truth

The look comes from [moisesbaldenegro.com](https://moisesbaldenegro.com). It is
packaged in `mxni/` and published at `/mxni/`:

| File | Content |
|---|---|
| `tokens.css` | Every token, with the same names and values as the website |
| `fonts.css` + `fonts/` | Geist, Geist Mono, Geist Pixel (SIL OFL 1.1) |
| `base.css` | Reset, page defaults, focus ring, skip link, reduced motion |
| `components.css` | Atoms, molecules and organisms (`.mx-*`) |
| `mxni.css` | All of the above in one file |
| `mxni.js` | Optional behaviors (mobile menu, search clear, code copy) |
| `assets/` | Official logo and icon sprite |

## Recommended layers

1. **Design tokens:** `tokens.css`.
2. **[Atoms](/catalog/#atomos):** buttons, typography, tags, inputs, media.
3. **[Molecules](/catalog/#moleculas):** search, navigation lists, cards, brand tiles, content blocks.
4. **[Organisms](/catalog/#organismos):** navbar, footer, hero Bento, profile, article, promo.
5. **[Templates](/catalog/templates):** home, profile, article, search, not found.
6. **Product layer:** product-specific composition and documented extensions.

## Technology neutrality

The visual rules are framework-agnostic. The canonical implementation is
HTML + `mxni.css`; every catalog page shows the same markup for React, Vue,
Svelte, Angular and Astro. For non-web technologies, the visual specs give
the exact values ([Use in any technology](/catalog/install)).

## Adoption

A product adopts MXNI by:
- linking `mxni.css` (or reproducing its values);
- composing pages from catalog components;
- checking the result against the [Visual DNA](/catalog/visual-dna);
- documenting product-specific extensions;
- testing accessibility and responsive behavior.