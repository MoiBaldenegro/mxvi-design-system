---
title: Hero Bento
---

# Hero Bento

**Nivel:** organismo · **Clases:** `.mx-hero`, `.mx-bento` · **Compuesto
por:** [tarjeta de perfil](/catalog/molecules/brand-tile#tarjeta-de-perfil) y
[tarjetas de marca](/catalog/molecules/brand-tile#tarjeta-de-marca)

El hero de la portada: atmósfera morada con grano de puntos y una cuadrícula
Bento de 12 columnas. Se puede usar entero, solo la atmósfera (`.mx-hero`)
con otro contenido, o solo la cuadrícula (`.mx-bento`).

```html preview flush wide
<section class="mx-hero">
  <div class="mx-hero__background"><div class="mx-hero__glow"></div></div>
  <div class="mx-bento">
    <section class="mx-profile-card" data-cols="5" data-rows="6">
      <div class="mx-profile-card__image"><img src="/mxvi/assets/examples/moises-hero.jpg" alt="Moisés Baldenegro Melendez" width="952" height="960"></div>
      <div class="mx-profile-card__content">
        <span class="mx-handle">@moibaldenegro <span class="mx-verified"><span aria-hidden="true">✓</span><span class="mx-visually-hidden">Verificado</span></span></span>
        <h1 class="mx-profile-card__name">Moisés Baldenegro Melendez</h1>
        <p class="mx-profile-card__description">Senior Software Engineer • Systems Architect • Node.js • NestJS • Rust</p>
      </div>
    </section>
    <article class="mx-brand-tile mx-brand-tile--rich" data-brand="htb" data-cols="5" data-rows="4">
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">Hack The Box</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 1024 791.27002"><use href="/mxvi/assets/sprite.svg#htb"/></svg></div>
      <div class="mx-brand-tile__body"><div class="mx-tile-stats"><ul class="mx-tile-stats__list"><li class="mx-tile-stats__item"><span class="mx-tile-stats__label">Nivel</span><span class="mx-tile-stats__value">Hacker</span></li><li class="mx-tile-stats__item"><span class="mx-tile-stats__label">Owns</span><span class="mx-tile-stats__value">42 user / 38 root</span></li></ul></div></div>
    </article>
    <article class="mx-brand-tile" data-brand="rust" data-cols="2" data-rows="2" data-hide-mobile>
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">Rust</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 224 224"><use href="/mxvi/assets/sprite.svg#rust"/></svg></div>
    </article>
    <article class="mx-brand-tile" data-brand="aws" data-cols="2" data-rows="2" data-hide-mobile>
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">AWS</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><use href="/mxvi/assets/sprite.svg#aws"/></svg></div>
    </article>
    <article class="mx-brand-tile" data-brand="cloudflare" data-cols="2" data-rows="2" data-hide-mobile>
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">Cloudflare</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 256 116"><use href="/mxvi/assets/sprite.svg#cloudflare-cloud"/></svg></div>
    </article>
    <article class="mx-brand-tile" data-brand="nestjs" data-cols="5" data-rows="2">
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">NestJS</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 264.6 255.6"><use href="/mxvi/assets/sprite.svg#nestjs"/></svg></div>
      <a class="mx-brand-tile__link" href="#"><span class="mx-visually-hidden">NestJS</span><span class="mx-brand-tile__arrow" aria-hidden="true">↗</span></a>
    </article>
    <article class="mx-brand-tile" data-brand="node" data-cols="4" data-rows="2">
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">Node JS</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 256 292"><use href="/mxvi/assets/sprite.svg#node"/></svg></div>
    </article>
    <article class="mx-brand-tile" data-brand="react" data-cols="2" data-rows="2" data-hide-mobile>
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">React</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 569 512"><use href="/mxvi/assets/sprite.svg#react"/></svg></div>
    </article>
    <article class="mx-brand-tile" data-brand="typescript" data-cols="4" data-rows="2">
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">TypeScript</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 256 256"><use href="/mxvi/assets/sprite.svg#typescript"/></svg></div>
    </article>
    <article class="mx-brand-tile" data-brand="github" data-cols="2" data-rows="2" data-hide-mobile>
      <header class="mx-brand-tile__header"><p class="mx-brand-tile__title">GitHub</p></header>
      <div class="mx-brand-tile__icon"><svg aria-hidden="true" focusable="false" viewBox="0 0 1024 1024"><use href="/mxvi/assets/sprite.svg#github"/></svg></div>
    </article>
  </div>
</section>
```

## Especificación visual

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Fondo (`.mx-hero__background`) | puntos de 1px blanco al 3 % cada 14px sobre un degradado radial desde arriba a la derecha: `#3C1F44` 0 % → `#150A18` 35 % → `#05050b` 100 % |
| Resplandor (`.mx-hero__glow`) | círculo de 900px, radial `rgba(108,56,122,.35)` a transparente, 200px fuera arriba y 300px a la derecha; flota 6px arriba y abajo en un ciclo de 10s (solo sin "reducir movimiento") |
| Cuadrícula | 12 columnas, filas de 95px, separación 14px, ancho `min(1500px, 95%)`, margen vertical 32px |
| Tamaños | `data-cols` (2, 3, 4, 5, 6, 12) y `data-rows` (2, 3, 4, 6) en cada tarjeta |
| ≤ 1200px | 6 columnas; filas de 140px como mínimo; cada tarjeta ocupa 1 columna y el perfil toda la fila (650px de alto mínimo, foto en banda 16:9) |
| ≤ 768px | 1 columna, filas de 190px como mínimo; las tarjetas con `data-hide-mobile` se ocultan |

</div>

## Composición

- La tarjeta de perfil va primero y es la más grande (5 × 6 en escritorio).
- Mezcla tamaños: una o dos tarjetas anchas por fila y el resto cuadradas.
- Las tarjetas de marca con enlace llevan la flecha ↗ y abren en otra pestaña.
- En móvil muestra solo las tarjetas más importantes.
