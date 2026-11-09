---
title: Implementation overview
---

# Implementation overview

## Source of truth

This repository documents the initial design contract. A future published token package may be generated from structured token data.

## Recommended layers

1. **Design tokens:** color, typography, spacing, radius, effects, motion.
2. **Primitive components:** button, field, surface, text, icon.
3. **Composite components:** navigation, cards, dialogs, forms.
4. **Patterns:** dashboards, Bento layouts, editorial layouts.
5. **Product layer:** product-specific composition and semantic extensions.

## Technology neutrality

The visual rules are framework-agnostic. CSS variables are the baseline implementation. React examples are optional adapters, not the definition of the system.

## Adoption

A product adopts MXNI by:
- importing the core tokens;
- using documented type and spacing scales;
- mapping its components to MXNI component contracts;
- documenting product-specific extensions;
- testing accessibility and responsive behavior.