---
title: Accessibility
---

# Accessibility

Accessibility is a product requirement, not a visual variant.

## Minimum requirements

- WCAG 2.2 AA is the target for web products.
- Semantic HTML and meaningful heading order.
- Keyboard access for all interactive controls.
- Visible focus state with sufficient contrast.
- Form controls have labels and understandable errors.
- Images have appropriate alternative text.
- Color is never the only way to communicate meaning.
- Motion-sensitive users can reduce non-essential motion.
- Touch targets should be comfortably usable; aim for at least 44 × 44 CSS px where practical.

## Dark UI considerations

Dark interfaces can cause low-contrast text and controls. Test actual combinations; do not rely on visual intuition.

## Focus

Use a clearly visible outline or ring. Do not remove the browser focus indicator without replacing it.

## Validation

Use automated checks (for example axe) and manual keyboard/screen-reader testing. Automated tools do not prove full accessibility.