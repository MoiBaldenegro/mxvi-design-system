---
title: Buttons
---

# Buttons

::: tip Look concreto
Esta página define el **contrato** (propósito, estados y reglas). El aspecto
exacto, con medidas, colores y código, está en el
[catálogo de componentes](/catalog/atoms/buttons).
:::

## Purpose

Buttons trigger an action. Use links for navigation.

## Variants

| Variant | Catalog class | Purpose |
|---|---|---|
| Accent (primary) | `.mx-button--accent` | Main action in a context |
| Outline (secondary) | `.mx-button` | Supporting action, links with icons |
| Surface | `.mx-button--surface` | Page navigation (next, pagination) |
| Quiet | `.mx-button--quiet` | Low-emphasis action inside cards |
| Small mono | `.mx-button--sm` | Utility actions in bars |
| CTA | `.mx-button--cta`, `--cta-outline` | Promotional sections only |

Destructive actions are not defined yet. **Proposal:** outline button with the
proposed danger color `#F05B72` on border and text, plus an explicit label.

## Rules

- Prefer one primary button per action group.
- Label actions with verbs.
- Use a visible focus state.
- Disabled buttons must remain understandable; explain unavailable actions when necessary.
- Loading state must prevent duplicate submission and communicate progress.
- Destructive actions should use explicit language and confirmation when impact is significant.

## Sizing

Padding defines the size (see the catalog specs); corners are always square. Ensure touch targets reach 44 × 44 px on touch devices.

## Do not

- Use a button only for decoration.
- Use color alone to distinguish destructive actions.
- Place multiple competing primary actions side by side.