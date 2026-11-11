---
title: Cards and panels
---

# Cards and panels

::: tip Look concreto
Esta página define el **contrato** (propósito, estados y reglas). El aspecto
exacto, con medidas, colores y código, está en el
[catálogo de componentes](/catalog/molecules/cards).
:::

## Purpose

Cards group related information. Panels provide a larger structural region.

## Surface hierarchy

- Base: `--color-background` (`#070716`)
- Surface: `--color-surface` (`#101018`)
- Strong border on hover: `--color-border-strong`

## Rules

- Use borders to define structure.
- Use elevation sparingly.
- Avoid nesting cards inside cards without a clear information hierarchy.
- Keep card actions predictable.
- A clickable card must have an accessible name and keyboard behavior.
- Do not make an entire card clickable if it contains multiple independent actions without careful interaction design.

## Bento cards

Bento cards may vary in span and height. Keep consistent gutters, alignment, and responsive order.