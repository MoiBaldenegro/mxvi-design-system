---
title: Spacing and layout
---

# Espaciado y layout

## Unidad base: 14px

Todo el espaciado sale de un token: `--gap-card: 14px`. Separaciones y
paddings son múltiplos de él.

| Múltiplo | Valor | Uso típico |
|---|---:|---|
| × 0.25 | 3.5px | Padding vertical de chips y badges |
| × 0.33 | 4.7px | Separación cifra–etiqueta |
| × 0.5 | 7px | Separación ícono–texto, entre chips |
| × 0.75 | 10.5px | Entre elementos de una lista, padding de chips |
| × 1 | 14px | Separación de tarjetas en cuadrículas, márgenes de títulos |
| × 1.5 | 21px | Padding de tarjetas, separación entre título y contenido de sección |
| × 2 | 28px | Separación entre secciones |
| × 2.5 | 35px | Padding de citas, separación de filas del footer |
| × 3 | 42px | Padding vertical de página (arriba) |
| × 4 | 56px | Padding vertical de página (abajo), padding superior del footer |
| × 5 | 70px | Separación entre el contenido y el footer |

Valores fijos que también usa el sitio: 24px 28px (padding de tarjetas de
artículo y avisos), 32px (header de artículo), 42px (separación entre enlaces
de la navbar), 48px / 64px (padding vertical de páginas de listado).

## Contenedor

```css
width: min(1500px, 95%);   /* --container-max */
margin-inline: auto;
```

Todas las secciones (navbar, contenido, footer) usan el mismo contenedor.
Las únicas excepciones de borde a borde son la banda de logo y las tarjetas
promocionales.

## Header

- Alto: 64px (`--header-height`), sticky.
- `scroll-padding-top` igual al alto del header, para que los anclajes no
  queden debajo.

## Breakpoints

Los cortes son los del sitio, mobile first:

| Corte | Qué cambia |
|---|---|
| ≥ 600px | Footer en 2 columnas |
| ≤ 768px | Bento en 1 columna, header de artículo apilado, promos en 1 columna, paddings reducidos |
| ≥ 769px | Línea de tiempo con línea vertical y marcadores |
| ≥ 900px | Cuadrículas de tarjetas a 3 columnas, cifras a 4, footer en marca + 3 columnas, perfil en 2 columnas |
| ≤ 969px / ≥ 970px | Navbar: menú ☰ en móvil, fila completa en escritorio |
| ≤ 1200px | Bento a 6 columnas |

## Cuadrículas

| Cuadrícula | Definición |
|---|---|
| Bento | 12 columnas, filas de 95px, separación 14px (6 columnas en ≤ 1200px, 1 en ≤ 768px) |
| Tarjetas | `repeat(auto-fit, minmax(min(100%, 260px), 1fr))`, 3 columnas fijas desde 900px |
| Cifras | 2 columnas, 4 desde 900px |
| Footer | 1 → 2 → `1.4fr + 3 × 1fr` |
| Promos | 2 columnas con 10px de separación, 1 en ≤ 768px |

## Densidad

- Las páginas de contenido son espaciosas: tarjetas en una columna con 14px
  entre ellas.
- Las secciones de perfil son equilibradas: cuadrículas de 3 columnas.
- El hero Bento es denso: 14px entre tarjetas de distintos tamaños.
