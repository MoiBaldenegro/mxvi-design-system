---
title: AI context strategy
---

# AI context strategy

## Goal

Make MXNI documentation retrievable by humans, agents, IDE assistants, and language models without requiring the entire website to be copied into every prompt.

## Published resources

| Resource | Purpose |
|---|---|
| `/llms.txt` | Discovery index with links to important docs |
| `/llms-full.txt` | Consolidated text context |
| `/llms-web.txt`, `/llms-desktop.txt`, `/llms-mobile.txt` | Core rules plus one complete platform guide, in one file |
| `/downloads/mxni-{web,desktop,mobile}-markdown.zip` | Platform bundle for local projects, with its own `AGENTS.md` and the official logo SVGs |
| `/markdown/...` | Individual raw Markdown files |
| `/downloads/mxni-design-system-markdown.zip` | Offline documentation bundle |
| `/ai/agent-instructions.md` | Short implementation contract |

## Recommended model workflow

1. Start with `llms.txt`.
2. Read `ai/agent-instructions.md`.
3. Identify the target platform and load its context (`/llms-<platform>.txt`) or its guide under `platforms/<platform>/`.
4. Retrieve only the relevant foundation, guideline, or component documents.
5. For large tasks, use the platform context or `llms-full.txt` as broad context, then verify details against the individual canonical Markdown pages.
6. Cite the exact page paths in implementation notes.

## Two ways to consume the documentation

**Online (fetch).** Give the agent a URL: the platform context
(`/llms-web.txt`, `/llms-desktop.txt`, `/llms-mobile.txt`) for broad work, or
a single raw page under `/markdown/` for a narrow task. Every page on the site
links to its raw Markdown.

**Local (download).** Download the platform zip, unzip it into the project
(for example `docs/mxni/`) and point the project's agent instructions to
`docs/mxni/AGENTS.md`. Links that start with `/` inside the Markdown map to
files in that folder.

## Context efficiency

Do not automatically send the full bundle to every model call. Use the index and retrieve the smallest relevant set of documents. This reduces token usage and lowers the chance of irrelevant context.

## Stability

Keep URLs stable. Avoid renaming canonical documents without redirects or an updated index. Generated AI resources must be rebuilt from the Markdown source during CI.