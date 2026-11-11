---
layout: home
title: MXVI Design System
titleTemplate: One identity. Multiple products.
hero:
  name: MXVI
  text: Design System
  tagline: El look de moisesbaldenegro.com convertido en sistema. Componentes reales, especificaciones exactas y contexto listo para agentes de IA.
  actions:
    - theme: brand
      text: Ver catálogo
      link: /catalog/
    - theme: alt
      text: ADN visual
      link: /catalog/visual-dna
    - theme: alt
      text: Prompt maestro
      link: /catalog/master-prompt
    - theme: alt
      text: Descargar Markdown
      link: /downloads/mxvi-design-system-markdown.zip
  image:
    src: /brand/mxvi-hero.svg
    alt: MXVI Design System visual identity
features:
  - title: Catálogo
    details: Átomos, moléculas, organismos y plantillas con su especificación visual exacta, vista previa y código.
    link: /catalog/
    linkText: Ver componentes
  - title: Plataformas
    details: Guías específicas para web, escritorio y móvil, con contexto listo para agentes de IA.
    link: /platforms/
    linkText: Elegir plataforma
  - title: Foundations
    details: Colores, tipografía, geometría, espaciado, motion y accesibilidad.
    link: /foundations/colors
    linkText: Explorar foundations
  - title: Components
    details: Contratos y reglas para componentes de interfaz reutilizables.
    link: /components/overview
    linkText: Ver componentes
  - title: Guidelines
    details: Composición Bento, expresión por producto y reglas editoriales.
    link: /guidelines/overview
    linkText: Consultar guidelines
  - title: AI-ready
    details: Markdown crudo, llms.txt, contexto consolidado e instrucciones para agentes.
    link: /ai/context-strategy
    linkText: Integrar con IA
  - title: Implementation
    details: Tokens CSS, integración React y gobernanza de versiones.
    link: /implementation/overview
    linkText: Implementar
  - title: Portable documentation
    details: Descarga la documentación completa en Markdown para trabajar offline.
    link: /llms.txt
    linkText: Recursos descargables
---

<div class="mxvi-callout">

**Estado:** v1.1. El look, los tokens y el catálogo se extrajeron de [moisesbaldenegro.com](https://moisesbaldenegro.com), que es la referencia viva del sistema. Las decisiones marcadas como **Propuesta** todavía no existen en el sitio y deben validarse.

</div>

## La idea

MXVI es el lenguaje visual de un ecosistema de productos. Cualquier producto
que lo use debe verse como moisesbaldenegro.com: noche índigo, líneas finas,
esquinas rectas, un acento ciruela y tipografía Geist Pixel.

**Technical. Modular. Expressive.**

Para usarlo en web basta una hoja de estilos:

```html
<link rel="stylesheet" href="https://moibaldenegro.github.io/mxvi-design-system/mxvi/mxvi.css">
```

En cualquier otra tecnología, reproduce los valores del [catálogo](/catalog/).

## Recursos rápidos

**Por plataforma** — guía, contexto para un LLM (fetch) y Markdown descargable
para tu proyecto:

| Plataforma | Guía | Para un LLM | Para un proyecto local |
|---|---|---|---|
| Web | [Guía web](/platforms/web/) | [llms-web.txt](/llms-web.txt) | [mxvi-web-markdown.zip](/downloads/mxvi-web-markdown.zip) |
| Escritorio | [Guía de escritorio](/platforms/desktop/) | [llms-desktop.txt](/llms-desktop.txt) | [mxvi-desktop-markdown.zip](/downloads/mxvi-desktop-markdown.zip) |
| Móvil | [Guía móvil](/platforms/mobile/) | [llms-mobile.txt](/llms-mobile.txt) | [mxvi-mobile-markdown.zip](/downloads/mxvi-mobile-markdown.zip) |

**Todo el sistema:**

- [Catálogo de componentes](/catalog/) · [ADN visual](/catalog/visual-dna) · [Prompt maestro](/catalog/master-prompt)
- [Hoja de estilos: mxvi.css](/mxvi/mxvi.css)
- [Índice para modelos: llms.txt](/llms.txt)
- [Documentación consolidada: llms-full.txt](/llms-full.txt)
- [Instrucciones para agentes](/ai/agent-instructions.md)
- [Descargar todos los Markdown](/downloads/mxvi-design-system-markdown.zip)
- [Ver tokens CSS](/implementation/css-tokens)