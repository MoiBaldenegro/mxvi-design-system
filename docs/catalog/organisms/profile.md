---
title: Perfil (About)
---

# Perfil (About)

**Nivel:** organismo · **Clases:** `.mx-profile-hero`, `.mx-stats`,
`.mx-timeline`, `.mx-card-grid`, `.mx-section`

Las secciones de una página de perfil o "Acerca de": encabezado con foto,
cifras, línea de tiempo y cuadrículas de tarjetas.

## Encabezado de perfil

```html preview wide
<section class="mx-profile-hero" aria-labelledby="perfil-nombre">
  <div class="mx-profile-hero__media"><img class="mx-photo" src="/mxvi/assets/examples/moises-hero.jpg" alt="Retrato de Moisés Baldenegro" width="952" height="960"></div>
  <div class="mx-profile-hero__body">
    <span class="mx-handle">@moibaldenegro</span>
    <h1 class="mx-profile-hero__name" id="perfil-nombre">Moisés Baldenegro Melendez</h1>
    <p class="mx-profile-hero__headline">Senior Software Engineer | Backend &amp; Node.js Developer | Systems Architect</p>
    <p class="mx-profile-hero__location">Guadalajara, Jalisco, México</p>
    <p class="mx-profile-hero__summary">Ingeniero de Software Senior y Arquitecto de Sistemas con más de 6 años de experiencia en backend con Node.js, NestJS y TypeScript.</p>
    <p class="mx-profile-hero__focus">Senior Software Engineer • Systems Architect • Node.js • NestJS • TypeScript • Rust</p>
    <div class="mx-profile-hero__actions">
      <ul class="mx-social-list--inline">
        <li><a class="mx-button" href="#"><svg class="mx-button__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#github"/></svg>GitHub</a></li>
        <li><a class="mx-button" href="#"><svg class="mx-button__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#linkedin"/></svg>LinkedIn</a></li>
        <li><a class="mx-button" href="#"><svg class="mx-button__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#youtube"/></svg>YouTube</a></li>
      </ul>
      <a class="mx-button mx-button--accent" href="#" download>Descargar CV <span aria-hidden="true">↓</span></a>
    </div>
  </div>
</section>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Contenedor | degradado lineal a 160° de `#3C1F44` a `#150A18` (70 %), borde 1px blanco 8 % |
| Distribución | apilado y centrado; desde 900px, foto de 280px a la izquierda y texto alineado a la izquierda, separación 49px, padding 49px |
| Foto | [`.mx-photo`](/catalog/atoms/media#foto-enmarcada) con halo `0 0 70px rgba(108,56,122,.35)` |
| Nombre | Geist Pixel `clamp(2rem, 1.4rem + 2.4vw, 3.25rem)`, interlineado 1.1 |
| Titular | 1.15rem 600 `#ffffff` |
| Ubicación | .95rem `#b8b8c5` |
| Resumen | 1.05rem `#ffffff`, interlineado 1.7, máximo 68 caracteres |
| Enfoque | .9rem `#b8b8c5`, `letter-spacing: .02em` |
| Acciones | redes en [botones de contorno](/catalog/atoms/buttons) + [botón de acento](/catalog/atoms/buttons) |

</div>

## Cifras

```html preview wide
<ul class="mx-stats">
  <li class="mx-stat"><span class="mx-stat__value">+6</span><span class="mx-stat__label">años de experiencia</span></li>
  <li class="mx-stat"><span class="mx-stat__value">4</span><span class="mx-stat__label">roles en 4 organizaciones</span></li>
  <li class="mx-stat"><span class="mx-stat__value">Sep 2025</span><span class="mx-stat__label">sistema en producción</span></li>
  <li class="mx-stat"><span class="mx-stat__value">3</span><span class="mx-stat__label">certificaciones</span></li>
</ul>
```

- 2 columnas; 4 desde 900px. Detalle de cada cifra en
  [Tarjetas](/catalog/molecules/cards#cifra-destacada).

## Línea de tiempo

```html preview wide
<section class="mx-section" aria-labelledby="experiencia">
  <h2 class="mx-heading mx-heading--lg" id="experiencia">Experiencia</h2>
  <ol class="mx-timeline">
    <li class="mx-timeline-item">
      <article class="mx-card mx-card--interactive">
        <header class="mx-timeline-item__head"><h3 class="mx-timeline-item__role">Líder de Desarrollo &amp; Arquitecto de Software</h3><span class="mx-badge">sep 2023 – presente</span></header>
        <p class="mx-timeline-item__org">Taquerías MG · Guadalajara, Jalisco</p>
        <ul class="mx-timeline-item__highlights"><li>Arquitectura backend de un ecosistema multiplataforma.</li><li>Microservicios en Docker y serverless en Cloudflare Workers.</li></ul>
        <p class="mx-callout"><strong>Resultado:</strong> Sistema en producción en septiembre de 2025.</p>
      </article>
    </li>
    <li class="mx-timeline-item">
      <article class="mx-card mx-card--interactive">
        <header class="mx-timeline-item__head"><h3 class="mx-timeline-item__role">Desarrollador Web Multiplataforma</h3><span class="mx-badge mx-badge--muted">1 año 2 meses</span></header>
        <p class="mx-timeline-item__org">Kellogg's Company · Mazatlán, Sinaloa</p>
        <ul class="mx-timeline-item__highlights"><li>APIs RESTful con Python y Django conectadas a interfaces Angular.</li></ul>
      </article>
    </li>
  </ol>
</section>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Línea (desde 769px) | 2px blanco 15 % a la izquierda, contenido desplazado 28px |
| Marcador | cuadrado de 12px `#B37AC2` con un anillo del color de fondo de 4.7px; el primero añade glow `0 0 14px rgba(108,56,122,.35)` |
| Separación entre elementos | 21px |
| Tarjeta | [elemento de línea de tiempo](/catalog/molecules/content#elemento-de-linea-de-tiempo) |

</div>

## Cuadrícula de tarjetas

`.mx-card-grid`: una columna en teléfonos, tantas como quepan de 260px en
adelante y exactamente 3 desde 900px (`--2`: 2 columnas). Se usa para
habilidades, proyectos y credenciales; ver [Tarjetas](/catalog/molecules/cards).

```html preview wide
<section class="mx-section" aria-labelledby="stack">
  <h2 class="mx-heading mx-heading--lg" id="stack">Stack y habilidades</h2>
  <div class="mx-card-grid">
    <article class="mx-card mx-card--interactive mx-group-card"><h3 class="mx-group-card__title">Backend y arquitectura</h3><ul class="mx-chip-list"><li class="mx-chip">NestJS</li><li class="mx-chip">Clean Architecture</li><li class="mx-chip">DDD</li></ul></article>
    <article class="mx-card mx-card--interactive mx-group-card"><h3 class="mx-group-card__title">Bases de datos</h3><ul class="mx-chip-list"><li class="mx-chip">MongoDB</li><li class="mx-chip">PostgreSQL</li><li class="mx-chip">Redis</li></ul></article>
    <article class="mx-card mx-card--interactive mx-group-card"><h3 class="mx-group-card__title">Cloud y DevOps</h3><ul class="mx-chip-list"><li class="mx-chip">Docker</li><li class="mx-chip">AWS</li><li class="mx-chip">Cloudflare Workers</li></ul></article>
  </div>
</section>
```

## Secciones

- `.mx-section`: título + contenido con 21px de separación.
- `.mx-stack`: apila secciones con 28px de separación.
- La página de perfil completa está en [Plantillas](/catalog/templates#perfil).
