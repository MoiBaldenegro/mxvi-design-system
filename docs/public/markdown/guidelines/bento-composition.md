---
title: Bento composition
---

# Bento composition

## Definition

Bento is a modular composition made from rectangular content regions with varied spans. MXNI uses it to express systems, modules, and structured information.

## Rules

- Start with a grid, not arbitrary card placement.
- Establish a clear primary block.
- Use size variation to communicate importance.
- Keep gutters consistent.
- Align edges where possible.
- Maintain a logical reading order in the DOM.
- Reflow modules on smaller screens; do not merely shrink the desktop grid.
- Avoid decorative cards that contain no information or purpose.

## Suggested grid

Desktop: 12 columns with 95px rows and 14px gaps. ≤ 1200px: 6 columns. ≤ 768px: single column. See the [Hero Bento](/catalog/organisms/hero-bento) organism for the reference implementation.

## Common failure modes

- Every card has equal visual weight.
- Too many accent colors compete.
- Content is cropped to fit a shape.
- Reading order differs from visual order.
- Layout depends on fixed pixel dimensions.