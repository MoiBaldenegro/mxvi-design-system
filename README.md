# MXNI Design System Documentation

Documentation platform for the MXNI visual ecosystem. Its look, tokens and
component catalog are extracted from [moisesbaldenegro.com](https://moisesbaldenegro.com):
any product that follows it should look identical to that site.

- `mxni/` — the real stylesheet package: `tokens.css`, `fonts.css`, `base.css`,
  `components.css` (`.mx-*` classes), `mxni.js`, Geist fonts (OFL 1.1) and assets.
  It is published as `/mxni/mxni.css` (fonts + tokens + base + components).
- `docs/catalog/` — atoms, molecules, organisms and templates, each with an exact
  visual spec, a live preview and reference code for HTML, React, Vue, Svelte,
  Angular and Astro.

It is designed for three audiences:

1. **People:** searchable, navigable documentation with visual examples.
2. **AI agents and language models:** stable raw Markdown, `llms.txt`, `llms-full.txt`, and agent instructions.
3. **Developers:** downloadable Markdown bundle, versioned tokens, implementation guidance, and GitHub Pages deployment.

## Stack

- VitePress + Vue 3 + TypeScript
- Markdown as the canonical documentation source
- CSS custom properties for design tokens
- Node.js scripts to publish AI-readable and downloadable documentation
- GitHub Actions + GitHub Pages

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- Git

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by VitePress.

## Validate and build

```bash
npm run docs:check
npm run build
npm run preview
```

The production site is generated in `docs/.vitepress/dist`.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `mxni-design-system`.
2. Push this project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Set **Build and deployment → Source** to **GitHub Actions**.
5. Push a commit. The workflow at `.github/workflows/deploy.yml` builds and deploys the site.
6. For a project repository, the default URL is:
   `https://YOUR-USER.github.io/mxni-design-system/`

The VitePress config derives the base path from `GITHUB_REPOSITORY` in GitHub Actions. For a user/organization site named `YOUR-USER.github.io`, the base path is `/`.

## AI and raw documentation endpoints

After deployment:

- `/llms.txt` — documentation index for language models.
- `/llms-full.txt` — consolidated documentation.
- `/markdown/` — raw Markdown files, preserving the docs structure.
- `/downloads/mxni-design-system-markdown.zip` — complete Markdown bundle.
- `/ai/agent-instructions.md` — instructions for agents using MXNI.

Use the full deployed URL when referencing these paths. Example:

```text
https://YOUR-USER.github.io/mxni-design-system/llms.txt
```

## Source of truth

Edit files under `docs/`. Do not edit generated files under `docs/public/markdown`, `docs/public/llms.txt`, or `docs/public/llms-full.txt`; the preparation script recreates them before development and production builds.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts
│   │   └── theme/
│   ├── brand/
│   ├── foundations/
│   ├── guidelines/
│   ├── implementation/
│   ├── components/
│   ├── ai/
│   ├── public/
│   └── index.md
├── scripts/
│   ├── prepare-docs.mjs
│   └── check-docs.mjs
├── AGENTS.md
├── package.json
└── README.md
```

## Current status and design decisions

This repository contains the initial MXNI Design System v1.0 proposal based on the supplied website reference and the agreed direction: **balanced, futuristic, minimal, modular, expressive**.

Color values, typefaces, spacing, radii, and component rules are initial design decisions. Validate them against the actual logo, production interfaces, accessibility requirements, and real content before declaring them stable.

## License

Choose and add a license before distributing this repository or its assets publicly.