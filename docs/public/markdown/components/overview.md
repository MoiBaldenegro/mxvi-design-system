---
title: Components overview
---

# Components overview

This section defines the intended contracts for reusable MXNI components. It is a design specification, not yet a published component library.

## Component principles

1. Components consume design tokens.
2. Components expose semantic states.
3. Components support keyboard interaction.
4. Components do not hardcode product-specific brand colors.
5. Variants should solve real use cases, not create arbitrary customization.
6. Composition is preferred over a large number of configuration props.

## State model

Interactive components should consider:

- Default
- Hover
- Focus-visible
- Active / pressed
- Disabled
- Loading
- Error / invalid
- Selected (when applicable)

## Naming

Use clear names such as `Button`, `TextField`, `Card`, `Badge`, `Dialog`, and `Toast`. Keep implementation-specific names out of design documentation unless they are part of the public API.

## Component maturity

Every component should be marked:
- **Proposed:** documented, not implemented.
- **Experimental:** implemented but API may change.
- **Stable:** reviewed, tested, and safe to reuse.
- **Deprecated:** replacement and removal timeline documented.