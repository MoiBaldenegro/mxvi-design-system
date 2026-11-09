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
| `/markdown/...` | Individual raw Markdown files |
| `/downloads/mxni-design-system-markdown.zip` | Offline documentation bundle |
| `/ai/agent-instructions.md` | Short implementation contract |

## Recommended model workflow

1. Start with `llms.txt`.
2. Read `ai/agent-instructions.md`.
3. Retrieve only the relevant foundation, guideline, or component documents.
4. For large tasks, use `llms-full.txt` as broad context, then verify details against the individual canonical Markdown pages.
5. Cite the exact page paths in implementation notes.

## Context efficiency

Do not automatically send the full bundle to every model call. Use the index and retrieve the smallest relevant set of documents. This reduces token usage and lowers the chance of irrelevant context.

## Stability

Keep URLs stable. Avoid renaming canonical documents without redirects or an updated index. Generated AI resources must be rebuilt from the Markdown source during CI.