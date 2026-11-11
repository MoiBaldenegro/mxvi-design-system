---
title: Logo
---

# Logo

## Firma principal

La firma es el logotipo MXVI oficial, sin elementos añadidos: no se coloca
guion bajo, cursor ni otro signo después del logo.

## Variantes

| Variante | Archivo | Uso |
| --- | --- | --- |
| **Oficial** | [`/brand/mxvi-logo.svg`](/brand/mxvi-logo.svg) | Morado `#6C387A` y naranja `#F7941D`. Archivo maestro; es el que usa este sitio. |
| **Primary** | [`/brand/mxvi-logo-white.svg`](/brand/mxvi-logo-white.svg) | MXVI en blanco sobre fondo oscuro. |
| **Purple** | [`/brand/mxvi-logo-purple.svg`](/brand/mxvi-logo-purple.svg) | MXVI en morado sobre fondos claros o neutros. |
| **Monochrome** | [`/brand/mxvi-logo-mono.svg`](/brand/mxvi-logo-mono.svg) | Una sola tinta (`currentColor`) para impresión o bajo contraste de marca. |

<div class="logo-preview">
  <img src="/brand/mxvi-logo.svg" alt="Logo MXVI oficial" />
</div>

El logotipo se usa siempre con sus colores originales. Las variantes de una
sola tinta quedan para casos donde el color no es posible (impresión, sellos,
fondos que lo exijan).

## Construcción

- Lienzo del logo: `2048 × 716` (proporción ≈ 2.86 : 1).
- Cuatro letras: **M**, **X**, **V** e **I**. La M y la X en morado; la V en
  naranja; la I en naranja con el triángulo morado superior.
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