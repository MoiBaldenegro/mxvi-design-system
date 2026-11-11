---
layout: home
title: MXNI Design System
titleTemplate: One identity. Multiple products.
hero:
  name: MXNI
  text: Design System
  tagline: Un lenguaje visual para construir productos, experiencias y contenido con una identidad coherente.
  actions:
    - theme: brand
      text: Explorar fundamentos
      link: /foundations/colors
    - theme: alt
      text: Guía para agentes de IA
      link: /ai/agent-instructions
    - theme: alt
      text: Descargar Markdown
      link: /downloads/mxni-design-system-markdown.zip
  image:
    src: /brand/mxni-hero.svg
    alt: MXNI Design System visual identity
features:
  - icon: 🖥️
    title: Plataformas
    details: Guías específicas para web, escritorio y móvil, con contexto listo para agentes de IA.
    link: /platforms/
    linkText: Elegir plataforma
  - icon: 🎨
    title: Foundations
    details: Colores, tipografía, geometría, espaciado, motion y accesibilidad.
    link: /foundations/colors
    linkText: Explorar foundations
  - icon: 🧩
    title: Components
    details: Contratos y reglas para componentes de interfaz reutilizables.
    link: /components/overview
    linkText: Ver componentes
  - icon: 🧭
    title: Guidelines
    details: Composición Bento, expresión por producto y reglas editoriales.
    link: /guidelines/overview
    linkText: Consultar guidelines
  - icon: 🤖
    title: AI-ready
    details: Markdown crudo, llms.txt, contexto consolidado e instrucciones para agentes.
    link: /ai/context-strategy
    linkText: Integrar con IA
  - icon: ⚙️
    title: Implementation
    details: Tokens CSS, integración React y gobernanza de versiones.
    link: /implementation/overview
    linkText: Implementar
  - icon: 📦
    title: Portable documentation
    details: Descarga la documentación completa en Markdown para trabajar offline.
    link: /llms.txt
    linkText: Recursos descargables
---

<div class="mxni-callout">

**Estado:** propuesta inicial v1.0. Los tokens y reglas de esta documentación son la fuente de verdad inicial de MXNI. Las decisiones aún no validadas en productos reales deben tratarse como propuestas, no como estándares inmutables.

</div>

## La idea

MXNI es un sistema visual compartido por un ecosistema de productos. No busca que todos los productos se vean idénticos: busca que todos hablen el mismo lenguaje.

**Technical. Modular. Expressive.**

## Recursos rápidos

**Por plataforma** — guía, contexto para un LLM (fetch) y Markdown descargable
para tu proyecto:

| Plataforma | Guía | Para un LLM | Para un proyecto local |
|---|---|---|---|
| Web | [Guía web](/platforms/web/) | [llms-web.txt](/llms-web.txt) | [mxni-web-markdown.zip](/downloads/mxni-web-markdown.zip) |
| Escritorio | [Guía de escritorio](/platforms/desktop/) | [llms-desktop.txt](/llms-desktop.txt) | [mxni-desktop-markdown.zip](/downloads/mxni-desktop-markdown.zip) |
| Móvil | [Guía móvil](/platforms/mobile/) | [llms-mobile.txt](/llms-mobile.txt) | [mxni-mobile-markdown.zip](/downloads/mxni-mobile-markdown.zip) |

**Todo el sistema:**

- [Índice para modelos: llms.txt](/llms.txt)
- [Documentación consolidada: llms-full.txt](/llms-full.txt)
- [Instrucciones para agentes](/ai/agent-instructions.md)
- [Descargar todos los Markdown](/downloads/mxni-design-system-markdown.zip)
- [Ver tokens CSS](/implementation/css-tokens)