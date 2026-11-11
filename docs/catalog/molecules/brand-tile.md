---
title: Tarjeta de marca y perfil
---

# Tarjeta de marca y tarjeta de perfil

**Nivel:** molécula · **Clases:** `.mx-brand-tile`, `.mx-profile-card`

Son las piezas del [hero Bento](/catalog/organisms/hero-bento). Se pueden usar
solas o dentro de la cuadrícula.

## Tarjeta de marca

Color de fondo de la marca, título pequeño en mayúsculas y el logo **gigante,
rotado y recortado** saliendo por la esquina inferior derecha. Si tiene enlace,
toda la tarjeta es clicable y aparece una flecha ↗ al pasar el mouse.

```html preview wide
<div class="mx-card-grid">
  <article class="mx-brand-tile" data-brand="rust">
    <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">Rust</p></header>
    <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 224 224"><use href="/mxvi/assets/sprite.svg#rust"/></svg></div>
    <a class="mx-brand-tile__link" href="#"><span class="mx-visually-hidden">Rust</span><span class="mx-brand-tile__arrow" aria-hidden="true">↗</span></a>
  </article>
  <article class="mx-brand-tile" data-brand="react">
    <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">React</p></header>
    <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 569 512"><use href="/mxvi/assets/sprite.svg#react"/></svg></div>
  </article>
  <article class="mx-brand-tile" data-brand="typescript">
    <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">TypeScript</p></header>
    <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 256 256"><use href="/mxvi/assets/sprite.svg#typescript"/></svg></div>
  </article>
</div>
```

Tarjeta rica: con contenido en lugar de logo (por ejemplo, estadísticas).

```html preview
<article class="mx-brand-tile" data-brand="htb" style="max-width:520px;min-height:240px">
  <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">Hack The Box</p></header>
  <div class="mx-brand-tile__body"><p style="margin:0">Rango: Hacker · 42 máquinas</p></div>
  <div class="mx-brand-tile__icon" style="opacity:.16"><svg aria-hidden="true" focusable="false" viewBox="0 0 1024 791.27002"><use href="/mxvi/assets/sprite.svg#htb"/></svg></div>
</article>
```

### Especificación visual

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Fondo | color de la marca (`data-brand`), ver tabla de abajo |
| Borde | 1px blanco 8 %, radio 0, sombra de reposo |
| Brillo superior | degradado de blanco 8 % a transparente en el 45 % superior |
| Glow inferior | círculo radial de 180px en la esquina inferior derecha (−45px fuera) |
| Título | Geist Pixel .95rem MAYÚSCULAS `.08em`, a 18px arriba y 22px a la izquierda (.8rem y 14px en ≤ 1200px) |
| Logo | 115px de ancho por defecto, rotado −8°, escalado ×3, anclado a 4px de la derecha y 32px del borde inferior; desborda y se recorta |
| Hover | la tarjeta sube 4px, sombra de hover, `contrast(1.4)`; el logo gira a 2° y escala ×1.12 |
| Flecha ↗ | 1.25rem, arriba a la derecha (16px), aparece con hover o foco |
| Alto mínimo | 190px fuera de la cuadrícula; dentro, lo define la fila |

</div>

Ajustes por tarjeta: `--icon-width`, `--icon-rotation` y `--icon-scale`
(por ejemplo `style="--icon-width:240px; --icon-scale:7"` para logos grandes).

### Colores de marca

<div class="mxvi-swatch-grid">
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#0E6C82"></div><div class="mxvi-swatch__meta"><b>react</b><code>#0E6C82</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#B74D05"></div><div class="mxvi-swatch__meta"><b>html</b><code>#B74D05</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#08783A"></div><div class="mxvi-swatch__meta"><b>node</b><code>#08783A</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#091223"></div><div class="mxvi-swatch__meta"><b>github</b><code>#091223</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#B61111"></div><div class="mxvi-swatch__meta"><b>youtube</b><code>#B61111</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#A33A16"></div><div class="mxvi-swatch__meta"><b>rust</b><code>#A33A16</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#215BC7"></div><div class="mxvi-swatch__meta"><b>typescript</b><code>#215BC7</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#6C387A"></div><div class="mxvi-swatch__meta"><b>css</b><code>#6C387A</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#232F3E"></div><div class="mxvi-swatch__meta"><b>aws</b><code>#232F3E</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#5C2A1C"></div><div class="mxvi-swatch__meta"><b>claude-code</b><code>#5C2A1C</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#3A0D18"></div><div class="mxvi-swatch__meta"><b>nestjs</b><code>#3A0D18</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#A8470C"></div><div class="mxvi-swatch__meta"><b>cloudflare</b><code>#A8470C</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#B4532F"></div><div class="mxvi-swatch__meta"><b>claude</b><code>#B4532F</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#3D2B1F"></div><div class="mxvi-swatch__meta"><b>bun</b><code>#3D2B1F</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#1A2332"></div><div class="mxvi-swatch__meta"><b>htb</b><code>#1A2332</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#252A31"></div><div class="mxvi-swatch__meta"><b>bash</b><code>#252A31</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#241A5C"></div><div class="mxvi-swatch__meta"><b>webassembly</b><code>#241A5C</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#2E1039"></div><div class="mxvi-swatch__meta"><b>astro</b><code>#2E1039</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#101114"></div><div class="mxvi-swatch__meta"><b>opencode</b><code>#101114</code></div></div>
  <div class="mxvi-swatch"><div class="mxvi-swatch__color" style="background:#0F2C36"></div><div class="mxvi-swatch__meta"><b>tauri</b><code>#0F2C36</code></div></div>
</div>

Los colores están oscurecidos para que el título blanco tenga contraste de al
menos 4.5:1. Para una marca nueva, elige un tono que cumpla ese contraste y
agrégalo como `--color-marca-<nombre>`.

## Tarjeta de perfil

Foto que se desvanece hacia el fondo, handle cian, nombre en Geist Pixel y
descripción.

```html preview
<section class="mx-profile-card" style="max-width:480px">
  <div class="mx-profile-card__image"><img src="/mxvi/assets/examples/moises-hero.jpg" alt="Moisés Baldenegro Melendez" width="952" height="960"></div>
  <div class="mx-profile-card__content">
    <span class="mx-handle">@moibaldenegro <span class="mx-verified"><span aria-hidden="true">✓</span><span class="mx-visually-hidden">Verificado</span></span></span>
    <h1 class="mx-profile-card__name">Moisés Baldenegro Melendez</h1>
    <p class="mx-profile-card__description">Senior Software Engineer • Systems Architect • Node.js • NestJS • TypeScript • Rust</p>
  </div>
</section>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Contenedor | `#101018`, borde 1px blanco 8 %, sombra `0 25px 80px rgba(0,0,0,.35)`; alto mínimo 560px |
| Foto | cuadrada, ocupa la parte superior; máscara de opaca al 50 % a transparente al 92 % |
| Contenido | abajo y centrado, padding 28px 28px 18px |
| Handle | [`.mx-handle`](/catalog/atoms/tags), 10px sobre el nombre |
| Nombre | Geist Pixel `min(2.4rem, 6.8cqi)` (escala con el ancho de la tarjeta), interlineado 1, `letter-spacing: -1px` |
| Descripción | .95rem `#b8b8c5`, interlineado 1.55, 14px bajo el nombre |

</div>
