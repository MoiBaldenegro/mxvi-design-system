---
title: Typography
---

# Tipografía

MXVI usa la familia **Geist** en tres caras, autoalojadas en `mxvi/fonts/`
(licencia SIL Open Font License 1.1).

## Familias

| Token | Cara | Uso |
|---|---|---|
| `--font-display` | **Geist Pixel (Circle)** | h1 y h2, enlaces de la navbar, títulos de tarjeta, tags, kicker, input de búsqueda, etiquetas de columna del footer |
| `--font-sans` | **Geist Sans** (variable 100–900) | Texto de lectura e interfaz, títulos h3, botones |
| `--font-mono` | **Geist Mono** (variable 100–900) | Código, handles (`@usuario`), fechas y metadatos pequeños, barra inferior del footer, ubicación |

Geist Pixel tiene **una sola cara (400)**. Nunca la pongas en negrita ni
cursiva: usa `font-weight: 400` y `font-synthesis: none`.

## Escala

| Rol | Cara | Tamaño | Peso | Interlineado |
|---|---|---|---|---|
| Display (título de artículo) | Pixel | `clamp(2.2rem, 4.5vw, 3.6rem)` | 400 | 1.15 |
| Nombre de perfil | Pixel | `clamp(2rem, 1.4rem + 2.4vw, 3.25rem)` | 400 | 1.1 |
| h1 de página | Pixel | 1.75rem | 400 | 1.2 |
| h2 de sección | Pixel | 1.75rem o `clamp(1.5rem, 1.2rem + 1vw, 2rem)` | 400 | 1.2 |
| Título de tarjeta de artículo | Pixel | 1.35rem | 400 | 1.3 |
| h3 de tarjeta | Sans | 1.05–1.15rem | 700 | 1.35 |
| Cifra destacada | Sans | `clamp(1.75rem, 1.2rem + 1.6vw, 2.5rem)` | 800 | 1.1 |
| Cita | Sans | `clamp(1.5rem, 1.1rem + 1.8vw, 2.5rem)` | 800 | 1.2 |
| Cuerpo de artículo | Sans | `clamp(1.0625rem, 1rem + .3vw, 1.1875rem)` (17→19px) | 400 | 1.7 |
| Texto de interfaz | Sans | 1rem | 400 | 1.55 |
| Navegación | Pixel | .95rem (.85rem en ≤ 969px) | 400 | normal |
| Metadatos | Sans | .85–.9rem | 400 | normal |
| Etiqueta / título de tarjeta de marca | Pixel | .85–.95rem, MAYÚSCULAS, `letter-spacing: .08em` | 400 | normal |
| Tag | Pixel | .78–.85rem | 400 | normal |
| Mono pequeño | Mono | .75–.8rem | 400–600 | normal |

## Reglas

- Títulos de sección en Geist Pixel; nunca en Sans ni Mono.
- Etiquetas y títulos de tarjetas de marca en MAYÚSCULAS con
  `letter-spacing: .08em`.
- Texto largo en Geist Sans, con interlineado de 1.55 a 1.7.
- Usa `text-wrap: balance` en títulos grandes y `pretty` en párrafos.
- Un solo `h1` por página.
- No uses Geist Mono para párrafos ni Geist Pixel para texto largo.

## Carga

```css
@import url('/mxvi/fonts.css');  /* o mxvi.css, que ya la incluye */
```

En otras plataformas registra los archivos de `mxvi/fonts/`:
`Geist-Variable.woff2`, `Geist-Italic-Variable.woff2`,
`GeistMono-Variable.woff2` y `GeistPixel-Circle.woff2`.
