---
title: Web — Resumen
---

# Web

Guía de MXNI para productos que corren en un navegador: sitios de marca,
landing pages, documentación y aplicaciones web. Una aplicación web abierta en
un teléfono también sigue esta guía, usando su layout compacto.

## Tipos de producto web

| Tipo | Prioridad | Expresión MXNI |
|---|---|---|
| Sitio de marca / landing | Historia y conversión | Espaciosa, editorial, composición Bento |
| Documentación | Encontrar y entender | Estructurada, legible, técnica |
| Aplicación web | Completar tareas | Funcional, densidad equilibrada |
| Dashboard | Monitorear y decidir | Densidad equilibrada o compacta, datos primero |

## Páginas de esta guía

1. [Layout y responsive](/platforms/web/layout)
2. [Navegación](/platforms/web/navigation)
3. [Componentes en web](/platforms/web/components)
4. [Interacción y accesibilidad](/platforms/web/interaction)
5. [Checklist de revisión](/platforms/web/checklist)

## Contrato para agentes (web)

Este bloque es suficiente para trabajos pequeños. Para trabajos grandes, lee la
guía completa o `/llms-web.txt`.

**Tokens**

- Fondo `#09070D` (`--mxni-bg`), superficie `#15111C` (`--mxni-surface`),
  elevada `#211A2B` (`--mxni-elevated`), borde `#382C42` (`--mxni-border`).
- Texto `#F7F4FA`, secundario `#B7AABD`, atenuado `#81768A`.
- Marca `#A83FE0`; acentos magenta `#E044C5`, cian `#24CDE0`, lima `#B5F52D`
  (limitado a datos y estados).
- Semánticos: éxito `#39C98A`, advertencia `#F3B64B`, peligro `#F05B72`,
  info `#24CDE0`.
- Manrope para interfaz y títulos; JetBrains Mono para código y metadatos.
- Espaciado `4, 8, 12, 16, 24, 32, 48, 64 px`; radios `2, 6, 10 px` y `999 px`
  solo para pills.
- Movimiento `120 / 180 / 280 / 400 ms`.

**Reglas web**

1. Implementa con los tokens CSS `--mxni-*` de
   [CSS tokens](/implementation/css-tokens); no copies valores sueltos.
2. Diseña mobile-first con los breakpoints Compact `< 640`, Medium
   `640–1023`, Wide `1024–1439` y XL `≥ 1440 px`.
3. HTML semántico: `<a>` para navegar, `<button>` para acciones, encabezados en
   orden y landmarks (`header`, `nav`, `main`, `footer`).
4. Todo funciona con teclado y tiene foco visible (`:focus-visible`).
5. El hover es una mejora; nada depende solo de hover.
6. Objetivos táctiles de al menos `44 × 44 px` en layouts compactos.
7. Respeta `prefers-reduced-motion`.
8. El estado navegable (páginas, filtros, pestañas relevantes) vive en la URL.
9. Objetivo: WCAG 2.2 AA.
10. Reporta tokens usados, comportamiento responsive, accesibilidad y
    desviaciones.

## Qué no hacer

- Forzar un layout de marketing en una aplicación funcional.
- Usar todos los acentos con la misma intensidad.
- Reconstruir el logo con una fuente: usa el [SVG oficial](/brand/logo).
- Poner texto largo en JetBrains Mono.
- Ocultar contenido esencial detrás de hover o de animaciones.
