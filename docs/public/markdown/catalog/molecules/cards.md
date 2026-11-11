---
title: Tarjetas
---

# Tarjetas

**Nivel:** molécula · **Clases:** `.mx-card`, `.mx-article-card`,
`.mx-project-card`, `.mx-group-card`, `.mx-entry-list`, `.mx-stat`,
`.mx-card__title`, `.mx-facts`

Todas las tarjetas comparten la misma base: fondo `#101018`, borde de 1px
blanco al 8 %, **esquinas rectas** y sombra suave con brillo interior.

## Tarjeta base

```html preview
<div class="mx-card mx-card--interactive" style="max-width:420px">
  <p class="mx-text">Contenido de la tarjeta.</p>
</div>
```

<div class="mx-spec">

| Propiedad | Valor |
|---|---|
| Fondo | `#101018` |
| Borde | 1px `rgba(255,255,255,.08)`, radio 0 |
| Padding | 21px (1.5 × 14) |
| Sombra en reposo | `inset 0 1px 0 rgba(255,255,255,.05), 0 18px 40px rgba(0,0,0,.28)` (`--flat`: sin sombra) |
| Hover (`--interactive`) | borde `rgba(255,255,255,.15)`; sombra `inset 0 1px 0 rgba(255,255,255,.233), 0 25px 60px rgba(0,0,0,.38)` |

</div>

## Tarjeta de artículo

Portada 16:9, título en Geist Pixel, autor y tiempo de lectura, descripción y
tags. La imagen y el título forman un solo enlace.

```html preview
<article class="mx-article-card" style="max-width:680px">
  <a class="mx-article-card__link" href="#">
    <img class="mx-media mx-article-card__image" src="/mxvi/assets/examples/entry-01.webp" alt="" width="1376" height="768" loading="lazy">
    <h3 class="mx-article-card__title">Autenticación de APIs: Estrategias, Tokens y Buenas Prácticas</h3>
  </a>
  <p class="mx-meta">Por Moisés Baldenegro Melendez • 6 min de lectura</p>
  <p class="mx-article-card__description">Una guía técnica sobre los mecanismos de autenticación y autorización en arquitecturas backend modernas.</p>
  <ul class="mx-tag-list">
    <li class="mx-tag">#api</li>
    <li class="mx-tag">#seguridad</li>
    <li class="mx-tag">#jwt</li>
  </ul>
</article>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Contenedor | `#101018`, borde 1px blanco 8 %, padding 24px 28px (18px 20px en ≤ 768px); sin sombra en reposo |
| Hover | borde `#B37AC2` + sombra de hover |
| Imagen | 16:9, borde 1px blanco 8 %, margen vertical 14px |
| Título | Geist Pixel 1.35rem (1.15rem en ≤ 768px), interlineado 1.3; hover `#C396CF` |
| Meta | Geist Sans .9rem `#b8b8c5` |
| Descripción | Geist Sans 1rem `#ffffff`, interlineado 1.55 |
| Tags | [`.mx-tag`](/catalog/atoms/tags), separados 8px |

</div>

## Tarjeta de proyecto

Toda la tarjeta es clicable a través del enlace del título; la flecha ↗ se
desplaza al pasar el mouse.

```html preview wide
<ul class="mx-card-grid">
  <li class="mx-card mx-project-card">
    <h3 class="mx-project-card__name"><a class="mx-project-card__link" href="#">Raúl<span class="mx-visually-hidden"> (sitio externo)</span></a><span class="mx-project-card__arrow" aria-hidden="true">↗</span></h3>
    <p class="mx-project-card__description">Framework HTTP/MVC educativo para Node.js en TypeScript, sin dependencias.</p>
  </li>
  <li class="mx-card mx-project-card">
    <h3 class="mx-project-card__name"><a class="mx-project-card__link" href="#">mouter-router<span class="mx-visually-hidden"> (sitio externo)</span></a><span class="mx-project-card__arrow" aria-hidden="true">↗</span></h3>
    <p class="mx-project-card__description">Librería de routing ligera y tipada para React, publicada en npm.</p>
  </li>
  <li class="mx-card mx-project-card">
    <h3 class="mx-project-card__name"><a class="mx-project-card__link" href="#">MFinance<span class="mx-visually-hidden"> (sitio externo)</span></a><span class="mx-project-card__arrow" aria-hidden="true">↗</span></h3>
    <p class="mx-project-card__description">App de finanzas personales con Tauri v2, Rust y React.</p>
  </li>
</ul>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Título | Geist Sans 1.15rem 700 `#ffffff`; hover `#C396CF` |
| Flecha ↗ | `#C396CF` 600; en hover se mueve 2px arriba y a la derecha |
| Descripción | .95rem `#b8b8c5`, interlineado 1.6 |
| Hover | borde blanco 15 %, sombra de hover, la tarjeta sube 2px |
| Separación interna | 10.5px |

</div>

## Tarjeta de grupo

Título y una lista de chips (habilidades por área) o de entradas
(educación, certificaciones).

```html preview wide
<div class="mx-card-grid">
  <article class="mx-card mx-card--interactive mx-group-card">
    <h3 class="mx-group-card__title">Lenguajes y runtimes</h3>
    <ul class="mx-chip-list">
      <li class="mx-chip">Node.js</li>
      <li class="mx-chip">TypeScript</li>
      <li class="mx-chip">Python</li>
      <li class="mx-chip">Rust</li>
    </ul>
  </article>
  <article class="mx-card mx-card--interactive mx-group-card">
    <h3 class="mx-group-card__title mx-group-card__title--accent">Certificaciones</h3>
    <ul class="mx-entry-list">
      <li><strong class="mx-entry-list__name">Backend con Rust</strong><span class="mx-entry-list__meta">Alura Latam</span></li>
      <li><strong class="mx-entry-list__name">Administración de Servidores Linux</strong><span class="mx-entry-list__meta">Alura Latam</span></li>
    </ul>
  </article>
  <article class="mx-card mx-card--interactive mx-group-card">
    <h3 class="mx-group-card__title mx-group-card__title--accent">Idiomas</h3>
    <ul class="mx-entry-list">
      <li><strong class="mx-entry-list__name">Español</strong><span class="mx-entry-list__meta">Nativo</span></li>
      <li><strong class="mx-entry-list__name">Inglés</strong><span class="mx-entry-list__meta">Intermedio (B1–B2, técnico)</span></li>
    </ul>
  </article>
</div>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Título | Geist Sans 1.05rem 700 `#ffffff` (`--accent`: `#C396CF`) |
| Entrada | nombre 600 `#ffffff`; meta .9rem `#b8b8c5`; separadas por línea de 1px blanco 8 % y 14px de espacio |
| Separación título–contenido | 14px |

</div>

## Cifra destacada

```html preview wide
<ul class="mx-stats">
  <li class="mx-stat"><span class="mx-stat__value">+6</span><span class="mx-stat__label">años de experiencia</span></li>
  <li class="mx-stat"><span class="mx-stat__value">4</span><span class="mx-stat__label">roles en 4 organizaciones</span></li>
  <li class="mx-stat"><span class="mx-stat__value">Sep 2025</span><span class="mx-stat__label">sistema en producción</span></li>
  <li class="mx-stat"><span class="mx-stat__value">3</span><span class="mx-stat__label">certificaciones</span></li>
</ul>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Contenedor | `#101018`, borde 1px blanco 8 %, padding 21px 14px, centrado |
| Valor | Geist Sans 800 `clamp(1.75rem, 1.2rem + 1.6vw, 2.5rem)` en `#B37AC2` |
| Etiqueta | .9rem `#b8b8c5` |
| Grilla | 2 columnas; 4 desde 900px; separación 14px |

</div>

## Título de tarjeta

Encabezado de una tarjeta de sección, con un ícono opcional en el color de
acento.

```html preview
<section class="mx-card" style="max-width:520px">
  <h2 class="mx-card__title"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"/></svg>Datos del personaje</h2>
  <p class="mx-text mx-text--secondary">Contenido de la sección.</p>
</section>
```

- Geist Pixel 1.2rem `#ffffff`, ícono en `#B37AC2`, separación de 10px y
  margen inferior de 14px.

## Datos (clave y valor)

Cuadrícula de mosaicos pequeños para fichas: etiqueta arriba y valor abajo. Es
un `<dl>`; los mosaicos se separan con líneas de 1px.

```html preview
<dl class="mx-facts">
  <div class="mx-fact"><dt>Nivel</dt><dd>80</dd></div>
  <div class="mx-fact"><dt>Clase</dt><dd>Hunter</dd></div>
  <div class="mx-fact"><dt>Especialización</dt><dd>Beast Mastery</dd></div>
  <div class="mx-fact mx-fact--accent"><dt>Nivel de objeto</dt><dd>639</dd></div>
</dl>
```

- Columnas de 150px como mínimo; cada mosaico con fondo `#101018` y padding
  14px 16px.
- Etiqueta en Geist Pixel .72rem en mayúsculas `#b8b8c5`; valor en Geist Sans
  1.05rem 600 (`--accent`: `#C396CF`).
- Fuera de un `<dl>` usa `.mx-fact__label` y `.mx-fact__value`.
