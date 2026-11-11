# Instructions for AI agents — MXNI Design System

You are working with the MXNI Design System. Treat this file and the documentation under `docs/` as the design contract.

## Required behavior

1. Read `docs/ai/agent-instructions.md` and `docs/catalog/visual-dna.md` before creating or modifying user-facing UI. Everything must look identical to moisesbaldenegro.com.
2. Identify the target platform and read its guide: `docs/platforms/web/`, `docs/platforms/desktop/` or `docs/platforms/mobile/`.
3. Use the concrete components in `docs/catalog/` (atoms, molecules, organisms, templates) and the real stylesheet in `mxni/` before creating anything new.
4. Reuse existing tokens. Do not invent near-duplicate colors, spacing values, radii, shadows, or typography.
5. Keep the MXNI look: indigo night background `#070716`, hairline borders, square corners, a single plum accent `#B37AC2` and Geist Pixel titles.
6. Do not add accents outside their single documented uses (logo colors, handle cyan, promo blue, brand tiles).
7. Distinguish brand identity from product semantics. Product-specific status colors must not replace the core brand palette.
8. Preserve accessibility: keyboard operation, visible focus, semantic HTML, adequate contrast, reduced-motion support, and non-color status cues.
9. If a required token or component does not exist, propose a documented addition rather than silently creating one.
10. When changing a token, update the canonical documentation and any implementation package that consumes it.
11. Do not claim a design is MXNI-compliant unless you can identify the tokens and rules used.

## Source-of-truth priority

1. `mxni/tokens.css` and `docs/catalog/` — the real look (values and components).
2. `docs/foundations/` — global design decisions.
3. `docs/platforms/` — platform-specific application (web, desktop, mobile).
4. `docs/components/` — component contracts.
5. `docs/guidelines/` — usage and composition rules.
6. `docs/brand/` — brand expression and assets.
7. `docs/implementation/` — technical implementation.

If documents conflict, report the conflict and prefer the more specific component rule for that component while flagging the foundation document for reconciliation.

## Output expectations

When implementing UI, state:
- which catalog components were used;
- which MXNI tokens were used;
- which documented components or patterns were reused;
- any deviation and why it was necessary;
- any new token/component that needs documentation.

For content-only or backend tasks, do not force visual styling where it is irrelevant.