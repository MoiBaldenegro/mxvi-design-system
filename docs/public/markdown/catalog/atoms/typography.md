---
title: Tipografía y enlaces
---

# Tipografía y enlaces

**Nivel:** átomo · **Clases:** `.mx-heading`, `.mx-label`, `.mx-text`,
`.mx-meta`, `.mx-link`

## Títulos y etiquetas

```html preview
<h1 class="mx-heading mx-heading--display">Agilismo, diseño y fragilidad</h1>
<h2 class="mx-heading">Últimos artículos</h2>
<h2 class="mx-heading mx-heading--lg">Experiencia</h2>
<p class="mx-label">Navegación</p>
```

<div class="mx-spec">

| Elemento | Fuente | Tamaño | Interlineado | Otros |
|---|---|---|---|---|
| Display (`--display`) | Geist Pixel 400 | `clamp(2.2rem, 4.5vw, 3.6rem)` | 1.15 | `text-wrap: balance`; sombra `0 0 32px rgba(108,56,122,.35)` |
| Sección (`.mx-heading`) | Geist Pixel 400 | 1.75rem (28px) | 1.2 | margen inferior 14px |
| Sección grande (`--lg`) | Geist Pixel 400 | `clamp(1.5rem, 1.2rem + 1vw, 2rem)` | 1.2 | — |
| Subtítulo h3 | Geist Sans 700 | 1.05–1.35rem | 1.3–1.35 | — |
| Etiqueta (`.mx-label`) | Geist Pixel 400 | 0.85rem | normal | MAYÚSCULAS, `letter-spacing: .08em` |

</div>

- Geist Pixel tiene una sola cara: nunca la pongas en negrita ni cursiva
  (`font-synthesis: none`).
- Un solo `h1` por página.

## Texto y metadatos

```html preview
<p class="mx-text">Ingeniero de Software Senior y Arquitecto de Sistemas con más de 6 años de experiencia en backend.</p>
<p class="mx-text mx-text--secondary">Artículos en español sobre arquitectura de software y sistemas operativos.</p>
<p class="mx-text--lead">Artículos dedicados a la ingeniería de software aplicada y proyectos reales.</p>
<p class="mx-meta">Por Moisés Baldenegro Melendez • 6 min de lectura</p>
<p class="mx-meta mx-meta--mono">27 Octubre 2026 · 6 min</p>
<p class="mx-meta mx-meta--pill">Por Moisés Baldenegro Melendez • 4 min de lectura</p>
```

<div class="mx-spec">

| Clase | Fuente | Tamaño | Color | Interlineado |
|---|---|---|---|---|
| `.mx-text` | Geist Sans 400 | 1rem | `#ffffff` | 1.55 |
| `.mx-text--secondary` | Geist Sans 400 | 1rem | `#b8b8c5` | 1.55 |
| `.mx-text--lead` | Geist Sans 400, máximo 70ch | 1.2rem | `#b8b8c5` | 1.6 |
| `.mx-meta` | Geist Sans 400 | 0.9rem | `#b8b8c5` | normal |
| `.mx-meta--mono` | Geist Mono 400 | 0.75rem | `#b8b8c5` | normal |
| `.mx-meta--pill` | Geist Sans 400 | 0.9rem | `#b8b8c5` | borde 1px blanco 15 %, fondo superficie al 70 %, padding 6px 14px |

</div>

- Texto largo de artículo: ver [Artículo](/catalog/organisms/article)
  (`.mx-prose`, 17→19px, interlineado 1.7).

## Enlaces

```html preview
<div class="mx-row">
  <a class="mx-link" href="#">Volver al inicio</a>
  <a class="mx-link" href="#">Buscar artículos</a>
  <a class="mx-link mx-link--subtle" href="#">Arquitectura</a>
</div>
```

<div class="mx-spec">

| Clase | Color | Peso | Subrayado | Hover |
|---|---|---|---|---|
| `.mx-link` | `#B37AC2` | 600 | sí | `#C396CF` |
| `.mx-link--subtle` | `#b8b8c5` | 400 | no | `#C396CF` |

</div>
