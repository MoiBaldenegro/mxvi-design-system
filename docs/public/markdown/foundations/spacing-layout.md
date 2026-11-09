---
title: Spacing and layout
---

# Spacing and layout

## Spacing scale

| Token | Value |
|---|---:|
| `space-1` | 4 px |
| `space-2` | 8 px |
| `space-3` | 12 px |
| `space-4` | 16 px |
| `space-6` | 24 px |
| `space-8` | 32 px |
| `space-12` | 48 px |
| `space-16` | 64 px |

Use the scale consistently. A one-off value is allowed only when a layout constraint justifies it and should be documented if reused.

## Grid

- Use a 12-column grid for desktop interfaces where useful.
- Use 4 or 6 columns on tablet layouts depending on content.
- Use 4 columns or a single-column flow on narrow mobile layouts.
- Use consistent gutters and alignment.
- Bento compositions may span multiple columns but must preserve a clear reading order.

## Responsive breakpoints

Suggested defaults (adapt to content, not device labels):

| Name | Width |
|---|---:|
| Compact | < 640 px |
| Medium | 640–1023 px |
| Wide | 1024–1439 px |
| XL | >= 1440 px |

## Density

Choose density based on task:
- Marketing/editorial: spacious.
- Dashboards: balanced.
- Data-heavy tools: compact, but never cramped.

Do not make every product use the same density.