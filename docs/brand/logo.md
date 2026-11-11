---
title: Logo
---

# Logo

## Firma principal

La firma escrita es `MXNI_`. El guion bajo funciona como cursor, señal técnica y cierre visual.

## Variantes

| Variante | Archivo | Uso |
| --- | --- | --- |
| **Oficial** | [`/brand/mxni-logo.svg`](/brand/mxni-logo.svg) | Morado `#6C387A` y naranja `#F7941D`. Archivo maestro. |
| **Primary** | [`/brand/mxni-logo-white.svg`](/brand/mxni-logo-white.svg) | MXNI en blanco sobre fondo oscuro. |
| **Purple** | [`/brand/mxni-logo-purple.svg`](/brand/mxni-logo-purple.svg) | MXNI en morado sobre fondos claros o neutros. |
| **Monochrome** | [`/brand/mxni-logo-mono.svg`](/brand/mxni-logo-mono.svg) | Una sola tinta (`currentColor`) para impresión o bajo contraste de marca. |
| **Wordmark** | [`/brand/mxni-wordmark.svg`](/brand/mxni-wordmark.svg) | MXNI_ con el cursor/acento magenta. |

<div class="logo-preview">
  <img src="/brand/mxni-logo.svg" alt="Logo MXNI oficial" />
</div>

## Construcción

- Lienzo del logo: `2048 × 716` (proporción ≈ 2.86 : 1).
- Cuatro piezas: **M** y **X** en morado; la **V** naranja y la **I** (naranja con
  el triángulo morado superior) forman juntas la **N** de MXNI.
- Las piezas se superponen: M en `x = 0`, X en `x = 574`, V en `x = 1025`,
  I en `x = 1858`. No separarlas ni redistribuirlas.

## Reglas

- No estirar, inclinar ni rotar el logotipo.
- No alterar la relación entre letras.
- No añadir sombras o glow permanentes al archivo maestro.
- No colocar sobre fondos que comprometan contraste.
- Mantener una zona libre mínima equivalente a la altura de la letra M.
- No reconstruir el logo con una fuente distinta si existe un SVG oficial.

## Origen

Los SVG de `public/brand/` son los vectores oficiales, tomados del sprite de
moibaldenegro.com (`mxvi-m`, `mxvi-x`, `mxvi-v`, `mxvi-i`) y compuestos con
las posiciones del logotipo maestro. Si el logo cambia, actualizar primero el
sprite del sitio y regenerar estas variantes.