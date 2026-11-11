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

Every interactive element shows a **2px `#B37AC2` outline with a 2px
offset** on `:focus-visible` (global rule in `mxvi/base.css`). Inside clipped
containers (brand tiles) the offset is negative (`-4px`) so the ring stays
visible. Do not remove the focus indicator without replacing it.

## Built into the system

- "Skip to content" link as the first focusable element (`.mx-skip-link`).
- `.mx-visually-hidden` for accessible names and "(external site)" hints.
- Global reduced-motion rule: animations and transitions become instant.
- Contrast of the core palette is verified in [Color](/foundations/colors#contraste).
- Icon buttons are 44 × 44px; decorative icons use `aria-hidden="true"`.

## Validation

Use automated checks (for example axe) and manual keyboard/screen-reader testing. Automated tools do not prove full accessibility.