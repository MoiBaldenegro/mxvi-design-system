# Instructions for AI agents — MXNI Design System

You are working with the MXNI Design System. Treat this file and the documentation under `docs/` as the design contract.

## Required behavior

1. Read `docs/ai/agent-instructions.md` before creating or modifying user-facing UI.
2. Read the relevant foundation and component documents before implementation.
3. Reuse existing tokens. Do not invent near-duplicate colors, spacing values, radii, shadows, or typography.
4. Keep the MXNI visual language: dark, technical, modular, balanced, expressive, and legible.
5. Do not make every element neon. Purple is the primary brand signal; cyan and magenta are accents; lime is a limited signal color.
6. Distinguish brand identity from product semantics. Product-specific status colors must not replace the core brand palette.
7. Preserve accessibility: keyboard operation, visible focus, semantic HTML, adequate contrast, reduced-motion support, and non-color status cues.
8. If a required token or component does not exist, propose a documented addition rather than silently creating one.
9. When changing a token, update the canonical documentation and any implementation package that consumes it.
10. Do not claim a design is MXNI-compliant unless you can identify the tokens and rules used.

## Source-of-truth priority

1. `docs/foundations/` — global design decisions.
2. `docs/components/` — component contracts.
3. `docs/guidelines/` — usage and composition rules.
4. `docs/brand/` — brand expression and assets.
5. `docs/implementation/` — technical implementation.

If documents conflict, report the conflict and prefer the more specific component rule for that component while flagging the foundation document for reconciliation.

## Output expectations

When implementing UI, state:
- which MXNI tokens were used;
- which documented components or patterns were reused;
- any deviation and why it was necessary;
- any new token/component that needs documentation.

For content-only or backend tasks, do not force visual styling where it is irrelevant.