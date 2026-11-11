---
title: Web — Layout y responsive
---

# Web: layout y responsive

## Contenedor y cortes

Todo el contenido vive en un contenedor de `min(1500px, 95%)` centrado: el
margen lateral es el 2.5 % del ancho de la ventana. Los cortes son los de
[Spacing & layout](/foundations/spacing-layout):

| Ancho | Qué cambia |
|---|---|
| ≤ 599px | Footer en 1 columna |
| ≤ 768px | Bento en 1 columna, header de artículo apilado, promos en 1 columna, paddings de página 32px / 48px |
| ≥ 769px | Línea de tiempo con línea vertical |
| ≥ 900px | Cuadrículas de tarjetas a 3 columnas, cifras a 4, footer completo, perfil en 2 columnas |
| ≤ 969px | Navbar con menú ☰ |
| ≤ 1200px | Bento a 6 columnas |

## Mobile-first

1. Diseña primero el layout de una sola columna.
2. Agrega columnas en los cortes de arriba.
3. Mantén el mismo orden de lectura en todos los tamaños; el orden visual no
   debe contradecir el orden del HTML.
4. Nunca debe aparecer scroll horizontal en la página. Las tablas anchas hacen
   scroll dentro de su propio contenedor.

## Ritmo vertical

| Bloque | Espaciado |
|---|---|
| Página de listado (`.mx-page`) | 48px arriba, 64px abajo (32px / 48px en ≤ 768px) |
| Entre secciones (`.mx-stack`) | 28px |
| Título de sección → contenido (`.mx-section`) | 21px |
| Entre tarjetas | 14px |
| Contenido → footer | 70px |

## Composición Bento

El [hero Bento](/catalog/organisms/hero-bento) es la firma de la portada:

- 12 columnas, filas de 95px, separación 14px.
- La tarjeta de perfil va primero (5 × 6); el resto mezcla tarjetas anchas
  y cuadradas.
- 6 columnas en ≤ 1200px y 1 en ≤ 768px, mostrando solo las tarjetas
  marcadas para móvil.

## Tipografía en web

- Carga `mxvi.css` (incluye Geist, Geist Mono y Geist Pixel autoalojadas, con
  `font-display: swap`).
- Texto de interfaz a 1rem; cuerpo de artículo de 17 a 19px con interlineado
  1.7.
- Títulos en Geist Pixel; ver la escala completa en
  [Typography](/foundations/typography).

## Imágenes y media

- Usa `width` y `height` (o `aspect-ratio`) para evitar saltos de layout.
- Sirve tamaños adecuados con `srcset`/`sizes`.
- Carga diferida (`loading="lazy"`) para imágenes fuera de la primera pantalla.
- El logo siempre es el [SVG oficial](/brand/logo).
