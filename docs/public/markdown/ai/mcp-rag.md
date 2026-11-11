---
title: MCP and RAG integration
---

# MCP and RAG integration

## Static reference first

The initial platform is static and works without a database, API, or hosted vector store. Public raw Markdown endpoints can be fetched by compatible tools and agents.

## MCP option

A future MCP server may expose tools such as:
- `search_mxvi_docs(query)`
- `get_mxvi_document(path)`
- `get_mxvi_tokens()`
- `get_mxvi_component(name)` — returns the catalog page (visual spec + HTML) of a component.
- `get_mxvi_visual_dna()` — returns `catalog/visual-dna.md`.

The server should read from the same versioned Markdown and token sources. It must not maintain a divergent copy.

## RAG option

For larger documentation sets:
1. Split Markdown by headings and semantic sections.
2. Preserve file path, heading, version, and last-updated metadata.
3. Embed chunks and store metadata.
4. Retrieve relevant chunks for a task.
5. Include source paths in model context.
6. Re-index after each release.

## Security

Public design documentation can be indexed publicly. Never add secrets, private product roadmaps, customer data, credentials, or internal security details to public Markdown.