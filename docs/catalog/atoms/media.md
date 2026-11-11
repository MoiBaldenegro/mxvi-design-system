---
title: Logo, imágenes y divisor
---

# Logo, imágenes y divisor

**Nivel:** átomo · **Clases:** `.mx-logo`, `.mx-media`, `.mx-thumb`,
`.mx-photo`, `.mx-divider`

## Logo

```html preview
<div class="mx-row">
  <a class="mx-logo" href="#"><img src="/mxvi/assets/logo.svg" alt="Inicio" width="72" height="25"></a>
  <a class="mx-logo mx-logo--lg" href="#"><img src="/mxvi/assets/logo.svg" alt="Inicio" width="96" height="34"></a>
</div>
```

- Navbar: 72px de ancho. Footer: 96px (`--lg`).
- Siempre el [SVG oficial](/brand/logo) con sus colores originales; el logo
  enlaza al inicio.

## Imagen 16:9 y 4:3

```html preview
<img class="mx-media" src="/mxvi/assets/examples/entry-01.webp" alt="" width="1376" height="768" style="max-width:520px">
```

<div class="mx-spec">

| Clase | Proporción | Ajuste | Borde | Uso |
|---|---|---|---|---|
| `.mx-media` | 16:9 | `object-fit: cover` | 1px blanco 8 % | Portadas de artículo |
| `.mx-media--4x3` | 4:3 | `cover` | 1px blanco 8 % | Imagen del header de artículo |
| `.mx-thumb` | 16:9, 112px de ancho | `cover` | 1px blanco 8 % | Filas de resultados |

</div>

## Miniatura

```html preview
<img class="mx-thumb" src="/mxvi/assets/examples/entry-01.webp" alt="" width="112" height="63">
```

## Foto enmarcada

Foto cuadrada con un marco de acento separado de la imagen y resplandor.

```html preview
<div style="width:220px;padding:14px;box-shadow:0 0 70px var(--color-glow)">
  <img class="mx-photo" src="/mxvi/assets/examples/moises-hero.jpg" alt="Retrato de Moisés Baldenegro" width="952" height="960">
</div>
```

<div class="mx-spec">

| Propiedad | Valor |
|---|---|
| Proporción | 1:1, `object-position: center top` |
| Marco | `outline: 2px solid #B37AC2`, separado 7px |
| Sombra | `0 25px 80px rgba(0,0,0,.35)` |
| Halo del contenedor | `0 0 70px rgba(108,56,122,.35)` |

</div>

## Divisor

```html preview
<p class="mx-text">Antes</p>
<hr class="mx-divider">
<p class="mx-text">Después</p>
<hr class="mx-divider mx-divider--strong">
```

- 1px blanco 8 % (`--strong`: 15 %), margen vertical 14px.
