---
title: MXNI instructions for AI agents
---

# MXNI instructions for AI agents

This document is the compact behavioral contract for AI systems generating MXNI interfaces, graphics, or implementation code.

## Brand

MXNI is a balanced futuristic technology identity: technical, modular, expressive, and legible.

## Visual constraints

- Default dark background: `#09070D`.
- Surface: `#15111C`.
- Elevated surface: `#211A2B`.
- Primary brand: `#A83FE0`.
- Secondary accent: `#E044C5`.
- Technical/interaction accent: `#24CDE0`.
- Limited highlight: `#B5F52D`.
- Display font: Manrope.
- Technical font: JetBrains Mono.
- Radius scale: 2, 6, 10 px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64 px.

## Composition

Prefer modular grids, controlled rectangular geometry, clear hierarchy, and negative space. Use subtle technical textures and localized glow. Avoid generic cyberpunk, excessive neon, random circuit patterns, rainbow gradients, and decorative noise.

## Product adaptation

Keep foundations consistent. Adapt density, navigation, semantic colors, and composition to the product's task. Do not force a marketing layout into a functional application.

## Accessibility

Target WCAG 2.2 AA. Use semantic HTML, keyboard navigation, visible focus, reduced motion, accessible labels, and non-color status cues.

## Platforms

Identify the target platform before designing or coding and follow its guide:

- Web (browser sites and web apps): `platforms/web/` or `/llms-web.txt`.
- Desktop (installed Windows, macOS or Linux apps): `platforms/desktop/` or `/llms-desktop.txt`.
- Mobile (installed iOS or Android apps): `platforms/mobile/` or `/llms-mobile.txt`.

Foundations and tokens are the same everywhere; layout, navigation, input,
component sizing and OS conventions follow the platform guide. A website opened
on a phone follows the web guide.

## Implementation rules

1. Read the relevant docs before coding.
2. Reuse existing tokens and components.
3. Do not invent new core tokens.
4. If a gap exists, propose an extension and document it.
5. Do not replace real content with decorative placeholders.
6. Report deviations and explain why they are needed.

## Output checklist

Before finishing, report:
- target platform (web, desktop or mobile);
- tokens used;
- components/patterns reused;
- responsive or adaptive behavior for that platform;
- accessibility considerations;
- deviations or proposed additions.