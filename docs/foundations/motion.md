---
title: Motion
---

# Motion

## Principles

Motion should explain state, hierarchy, and cause/effect. It should not delay tasks or distract from content.

## Timing

| Token | Duration | Use |
|---|---:|---|
| Fast | 120 ms | Small feedback |
| Base | 180 ms | Hover and focus transitions |
| Slow | 280 ms | Panels and menus |
| Emphasis | 400 ms | Large, intentional transitions |

Use ease-out for entering elements and ease-in for leaving elements. Avoid spring or bounce effects unless they communicate a meaningful physical interaction.

## Rules

- Provide immediate feedback for actions.
- Do not animate large areas unnecessarily.
- Respect `prefers-reduced-motion`.
- Never use flashing or rapid strobing.
- Avoid parallax that interferes with reading.