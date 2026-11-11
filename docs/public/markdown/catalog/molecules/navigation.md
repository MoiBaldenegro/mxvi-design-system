---
title: Navegación y listas de enlaces
---

# Navegación y listas de enlaces

**Nivel:** molécula · **Clases:** `.mx-nav-links`, `.mx-link-list`,
`.mx-social-link`, `.mx-tag-list`, `.mx-chip-list`, `.mx-pagination`

## Enlaces de navegación

Enlaces de la navbar. Al pasar el mouse crece un subrayado de acento de 2px;
en la página actual queda fijo.

```html preview
<nav aria-label="Principal">
  <ul class="mx-nav-links">
    <li><a class="mx-nav-link" href="#" aria-current="page">About</a></li>
    <li><a class="mx-nav-link" href="#">Arquitectura</a></li>
    <li><a class="mx-nav-link" href="#">Diseño de sistemas</a></li>
    <li><a class="mx-nav-link" href="#">@moibaldenegro</a></li>
  </ul>
</nav>
```

<div class="mx-spec">

| Propiedad | Valor |
|---|---|
| Fuente | Geist Pixel .95rem (.85rem en ≤ 969px), `#ffffff` |
| Separación | 42px (24px en ≤ 969px) |
| Hover | texto `#C396CF`; subrayado `#B37AC2` de 2px a 6px bajo el texto que crece de 0 a 100 % |
| Actual (`aria-current="page"`) | texto `#B37AC2`, subrayado completo |

</div>

## Lista de enlaces

Columna de enlaces del footer: discretos, en gris secundario.

```html preview
<div style="max-width:260px">
  <p class="mx-label" style="margin-bottom:14px">Navegación</p>
  <ul class="mx-link-list">
    <li><a class="mx-link mx-link--subtle" href="#">Inicio</a></li>
    <li><a class="mx-link mx-link--subtle" href="#">About</a></li>
    <li><a class="mx-link mx-link--subtle" href="#">Arquitectura</a></li>
    <li><a class="mx-link mx-link--subtle" href="#">Buscar artículos</a></li>
  </ul>
</div>
```

## Redes sociales

Lista con ícono de marca (del sprite) y nombre. Dos formas: lista vertical
(footer) o en fila con botones (perfil).

```html preview
<ul class="mx-link-list" style="max-width:260px">
  <li><a class="mx-link mx-link--subtle mx-social-link" href="#" rel="me noopener"><svg class="mx-social-link__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#github"/></svg>GitHub<span class="mx-visually-hidden"> (sitio externo)</span></a></li>
  <li><a class="mx-link mx-link--subtle mx-social-link" href="#" rel="me noopener"><svg class="mx-social-link__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#linkedin"/></svg>LinkedIn<span class="mx-visually-hidden"> (sitio externo)</span></a></li>
  <li><a class="mx-link mx-link--subtle mx-social-link" href="#" rel="me noopener"><svg class="mx-social-link__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#youtube"/></svg>YouTube<span class="mx-visually-hidden"> (sitio externo)</span></a></li>
  <li><a class="mx-link mx-link--subtle mx-social-link" href="#" rel="me noopener"><svg class="mx-social-link__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#x"/></svg>X<span class="mx-visually-hidden"> (sitio externo)</span></a></li>
</ul>
```

```html preview
<ul class="mx-social-list--inline">
  <li><a class="mx-button" href="#"><svg class="mx-button__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#github"/></svg>GitHub</a></li>
  <li><a class="mx-button" href="#"><svg class="mx-button__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#linkedin"/></svg>LinkedIn</a></li>
  <li><a class="mx-button" href="#"><svg class="mx-button__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#youtube"/></svg>YouTube</a></li>
</ul>
```

- Íconos de 1.1em; los logos de marca conservan sus colores del sprite.
- Separación entre elementos: 10.5px (vertical) o 10.5px (en fila).
- Los enlaces externos llevan el texto oculto "(sitio externo)".

## Lista de tags

```html preview
<ul class="mx-tag-list">
  <li><a class="mx-tag" href="#">#api</a></li>
  <li><a class="mx-tag" href="#">#seguridad</a></li>
  <li><a class="mx-tag" href="#">#autenticacion</a></li>
  <li><a class="mx-tag" href="#">#jwt</a></li>
</ul>
```

```html preview
<ul class="mx-chip-list">
  <li class="mx-chip">Node.js</li>
  <li class="mx-chip">TypeScript</li>
  <li class="mx-chip">Rust</li>
  <li class="mx-chip">WebAssembly</li>
</ul>
```

- Tags separados 8px; chips separados 7px. Ambos se ajustan en varias líneas.

## Paginación

```html preview
<nav class="mx-pagination" aria-label="Paginación">
  <button class="mx-button mx-button--surface" type="button" disabled>Anterior</button>
  <span class="mx-pagination__label">Página 1 de 3</span>
  <button class="mx-button mx-button--surface" type="button">Siguiente</button>
</nav>
```

- Botones de superficie compactos: padding 10px 18px y texto de 0.8333rem (13.33px); deshabilitado en `#b8b8c5`.
- Etiqueta central en .9rem `#b8b8c5`.
