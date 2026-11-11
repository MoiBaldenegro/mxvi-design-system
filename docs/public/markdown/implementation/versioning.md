---
title: Versioning and contribution
---

# Versioning and contribution

## Versioning policy

Use semantic versioning for the design system:

- **Major:** breaking token or component contract changes.
- **Minor:** backward-compatible tokens, components, or guidelines.
- **Patch:** corrections, clarifications, and non-breaking refinements.

The documentation site and the `mxvi/` package communicate the design-system
version they implement. Current version: **1.1** (look extracted from
moisesbaldenegro.com).

## Synchronization with the website

moisesbaldenegro.com is the living reference. `mxvi/tokens.css` keeps the
same token names and values as the website's `src/styles/tokens.css`:

- A visual change on the website is ported to `mxvi/` and the catalog in the
  same release.
- A token change in the design system is applied to the website too, or
  documented as a pending divergence.

### Automatic check

`scripts/check-tokens-sync.mjs` compares `mxvi/tokens.css` with the website's
`src/styles/tokens.css` (read from the public repository on GitHub): every
website token must exist here with the same value. The only design-system-only
tokens allowed are listed in `DESIGN_SYSTEM_ONLY` (today, the logo colors).

- Runs in GitHub Actions (`.github/workflows/tokens-sync.yml`) on every push and
  pull request, daily, and on demand. A failure lists each missing or different
  token.
- Run it locally with `npm run tokens:check`, or against a local copy of the
  website with `node scripts/check-tokens-sync.mjs ../moibaldenegro.com/src/styles/tokens.css`.

The check covers tokens. Changes to component styles (paddings, layouts) still
need to be ported by hand to `mxvi/components.css` and the catalog.

## Change process

1. Open an issue or proposal explaining the problem.
2. Identify affected tokens, components, products, and docs.
3. Include before/after examples.
4. Check accessibility and responsive behavior.
5. Update canonical Markdown and implementation artifacts.
6. Review and merge.
7. Publish a release note.

## Deprecation

A deprecated token or component must include:
- reason for deprecation;
- replacement;
- migration example;
- earliest removal version.

## Definition of done

- Documentation updated.
- Examples verified.
- Accessibility considered.
- No duplicate token introduced.
- Build and documentation checks pass.