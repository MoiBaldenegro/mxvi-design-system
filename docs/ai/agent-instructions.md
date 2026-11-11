---
title: MXVI instructions for AI agents
---

# MXVI instructions for AI agents

This document is the compact behavioral contract for AI systems generating
MXVI interfaces, graphics, or implementation code. The goal: anything you
build must look **identical to moisesbaldenegro.com**, in any technology.

## Read first

1. [Visual DNA](/catalog/visual-dna) (`catalog/visual-dna.md`) — the traits
   that make something look MXVI.
2. [Component catalog](/catalog/) (`catalog/`) — every component with its
   exact visual spec and reference markup.
3. The guide for the target platform: `platforms/web/`,
   `platforms/desktop/` or `platforms/mobile/`.

A ready-to-paste prompt is in [Master prompt](/catalog/master-prompt).

## Look (non-negotiable)

- Page background `#070716` (indigo night). Surfaces `#101018`. Never pure
  black or neutral grey backgrounds.
- Text `#ffffff`; secondary text `#b8b8c5`.
- Borders: 1px `rgba(255,255,255,.08)`; strong borders 1px
  `rgba(255,255,255,.15)`.
- Single accent: plum `#B37AC2` (hover `#C396CF`) for active borders, tags,
  links, focus, underlines and markers. Never as a button or block fill.
- **Square corners everywhere** (`border-radius: 0`).
- Typography (Geist family):
  - Geist Pixel (Circle), weight 400, no synthetic bold: h1, h2, navbar
    links, card titles, tags, kicker, search input.
  - Geist Sans: body and UI; h3 at 600–800.
  - Geist Mono: code, `@handles`, small metadata, footer bottom bar.
  - Labels and brand-tile titles: UPPERCASE, `letter-spacing: .08em`.
- Hero atmosphere: radial gradient `#3C1F44` → `#150A18` → `#05050b`, a 1px
  dot grain every 14px at 3 % white, and a glow `rgba(108,56,122,.35)`.
- Spacing unit 14px (`--gap-card`) and its multiples; container
  `min(1500px, 95%)`.
- Shadows: rest `inset 0 1px 0 rgba(255,255,255,.05), 0 18px 40px rgba(0,0,0,.28)`;
  hover `inset 0 1px 0 rgba(255,255,255,.233), 0 25px 60px rgba(0,0,0,.38)`.
- Transitions: `.28s cubic-bezier(.2,.8,.2,1)`; honor reduced motion.

## Implementation

- Web: link `/mxvi/mxvi.css` and use the `.mx-*` classes from the catalog.
  The HTML in the catalog is canonical; framework tabs only adapt syntax.
- Other technologies: reproduce the exact values from the catalog specs and
  [Use in any technology](/catalog/install).
- Prefer an existing catalog component over a new one. Compose bigger pieces
  from atoms and molecules.
- Do not invent tokens. If something is missing, propose a documented
  addition.
- Do not replace real content with decorative placeholders.

## Accessibility

Target WCAG 2.2 AA: semantic HTML, keyboard navigation, visible focus (2px
`#B37AC2` ring, 2px offset), reduced motion, accessible names, non-color
status cues.

## Platforms

Identify the target platform before designing or coding and follow its guide:

- Web (browser sites and web apps): `platforms/web/` or `/llms-web.txt`.
- Desktop (installed Windows, macOS or Linux apps): `platforms/desktop/` or `/llms-desktop.txt`.
- Mobile (installed iOS or Android apps): `platforms/mobile/` or `/llms-mobile.txt`.

The look is the same everywhere; layout, navigation, input, component sizing
and OS conventions follow the platform guide. A website opened on a phone
follows the web guide.

## Output checklist

Before finishing, report:
- target platform (web, desktop or mobile);
- catalog components used;
- tokens used;
- responsive or adaptive behavior for that platform;
- accessibility considerations;
- deviations or proposed additions.
