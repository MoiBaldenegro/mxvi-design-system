---
title: Web — Resumen
---

# Web

Guía de MXVI para productos que corren en un navegador: sitios de marca,
landing pages, documentación y aplicaciones web. Una aplicación web abierta en
un teléfono también sigue esta guía, usando su layout compacto.

## Tipos de producto web

| Tipo | Prioridad | Expresión MXVI |
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

**Look (idéntico a moisesbaldenegro.com)**

- Fondo `#070716`, superficie `#101018`; bordes 1px blanco al 8 % y al 15 %.
- Texto `#ffffff`, secundario `#b8b8c5`.
- Acento único ciruela `#B37AC2` (hover `#C396CF`); nunca como relleno.
- **Esquinas rectas en todo** (radio 0).
- Geist Pixel para títulos, navegación, títulos de tarjeta y tags; Geist Sans
  para texto e interfaz; Geist Mono para código y metadatos.
- Atmósfera de héroes: degradado `#3C1F44` → `#150A18` → `#05050b` con grano
  de puntos y glow `rgba(108,56,122,.35)`.
- Espaciado en múltiplos de `14px`.
- Transición única `.28s cubic-bezier(.2,.8,.2,1)`.
- Detalle completo: [ADN visual](/catalog/visual-dna) y
  [Catálogo](/catalog/).

**Reglas web**

1. Usa `mxvi.css` y los componentes `.mx-*` del [catálogo](/catalog/); los
   valores salen de los [tokens](/implementation/css-tokens).
2. Diseña mobile-first con los cortes del sitio: 600, 768, 900, 970 y
   1200px ([layout](/platforms/web/layout)).
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
- Poner texto largo en Geist Mono o Geist Pixel.
- Redondear esquinas.
- Ocultar contenido esencial detrás de hover o de animaciones.
