---
title: Web — Layout y responsive
---

# Web: layout y responsive

## Breakpoints

Usa los breakpoints de [Spacing & layout](/foundations/spacing-layout). Elige
el cambio de layout según el contenido, no según el nombre del dispositivo.

| Nombre | Ancho | Columnas | Margen lateral sugerido |
|---|---:|---|---|
| Compact | `< 640 px` | 4 o una sola columna | `space-4` (16 px) |
| Medium | `640–1023 px` | 4 o 6 | `space-6` (24 px) |
| Wide | `1024–1439 px` | 12 | `space-8` (32 px) |
| XL | `≥ 1440 px` | 12, con ancho máximo | `space-8` (32 px) o más |

**Propuesta:** limita el contenido a un contenedor de entre `1200` y
`1280 px` en Wide y XL para que las líneas y las tarjetas no se estiren.

## Mobile-first

1. Diseña primero el layout Compact en una sola columna.
2. Agrega columnas cuando el contenido lo pida.
3. Mantén el mismo orden de lectura en todos los tamaños; el orden visual no
   debe contradecir el orden del HTML.
4. Nunca debe aparecer scroll horizontal en la página. Las tablas anchas hacen
   scroll dentro de su propio contenedor.

## Densidad por tipo de producto

| Tipo | Densidad | Espaciado entre secciones |
|---|---|---|
| Marca / landing | Espaciosa | `space-12`–`space-16` |
| Documentación | Equilibrada | `space-8`–`space-12` |
| Aplicación web | Equilibrada | `space-6`–`space-8` |
| Dashboard / herramientas de datos | Compacta, nunca apretada | `space-4`–`space-6` |

## Composición Bento

Las composiciones [Bento](/guidelines/bento-composition) funcionan bien en
sitios de marca y dashboards:

- En Wide/XL las tarjetas pueden ocupar varias columnas y alturas distintas.
- En Medium reduce a 2 columnas; en Compact, a una sola.
- Conserva gutters constantes (`space-4` o `space-6`).
- La tarjeta más importante va primero en el orden del HTML.

## Tipografía en web

- Body de `16 px` por defecto; `14 px` solo en interfaces densas.
- Largo de línea de 60–80 caracteres en texto largo.
- Los títulos Display (`48–64 px`) se reducen en Compact (por ejemplo con
  `clamp()`), sin bajar de H1 (`36 px`) en el título principal.
- Carga Manrope y JetBrains Mono preferentemente self-hosted, con
  `font-display: swap`.

## Imágenes y media

- Usa `width` y `height` (o `aspect-ratio`) para evitar saltos de layout.
- Sirve tamaños adecuados con `srcset`/`sizes`.
- Carga diferida (`loading="lazy"`) para imágenes fuera de la primera pantalla.
- El logo siempre es el [SVG oficial](/brand/logo).
