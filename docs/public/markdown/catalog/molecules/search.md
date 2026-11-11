---
title: Barra de búsqueda
---

# Barra de búsqueda

**Nivel:** molécula · **Clase:** `.mx-search` · **Compuesta por:** campo,
ícono de lupa y botón de limpiar

Escribe en el campo para ver el botón ×; con el foco y texto, la lupa
"escanea" en bucle.

```html preview
<search class="mx-search">
  <form class="mx-search__form" action="/search" method="get">
    <svg class="mx-search__icon" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="8.5" cy="8.5" r="7" />
      <path d="M13.5 13.5 19 19" />
    </svg>
    <input class="mx-search__input" type="search" name="q" enterkeyhint="search" placeholder="Buscar artículos…" aria-label="Buscar artículos">
    <button class="mx-search__clear" type="button" data-mx-clear aria-label="Limpiar búsqueda">×</button>
  </form>
</search>
```

Ancho completo (`.mx-search--block`), por ejemplo dentro del menú móvil:

```html preview
<search class="mx-search mx-search--block">
  <form class="mx-search__form" action="/search" method="get">
    <svg class="mx-search__icon" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="8.5" cy="8.5" r="7" />
      <path d="M13.5 13.5 19 19" />
    </svg>
    <input class="mx-search__input" type="search" name="q" placeholder="Buscar artículos…" aria-label="Buscar artículos">
    <button class="mx-search__clear" type="button" data-mx-clear aria-label="Limpiar búsqueda">×</button>
  </form>
</search>
```

## Especificación visual

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Campo | 240px de ancho (100 % en `--block` y en móvil), padding 10px 42px |
| Fondo y borde | `#101018`, 1px blanco 8 %, radio 0 |
| Texto | **Geist Pixel** .95rem `#ffffff`; placeholder `#b8b8c5` |
| Lupa | 16 × 16px a 16px del borde izquierdo, trazo 2px, `#b8b8c5` |
| Foco | borde `#B37AC2` + halo `0 0 0 4px rgba(108,56,122,.35)`; lupa `#B37AC2` y escala 1.12 |
| Con texto y foco | la lupa se mueve en bucle (1.6s): desplazamiento de 3px y rotación de ±10° |
| Con texto sin foco | lupa `#B37AC2` quieta |
| Botón × | 32 × 32px a 6px del borde derecho, `#b8b8c5`; hover `#B37AC2`; oculto sin texto |

</div>

## Comportamiento

- Es un formulario `GET` a `/search?q=`: funciona sin JavaScript.
- Con [`mxvi.js`](/catalog/install#comportamientos-js), la clase `is-filled`
  muestra el botón × y este vacía el campo.
- El landmark `<search>` y el `aria-label` del campo le dan nombre accesible;
  la lupa es decorativa.
- Con "reducir movimiento" la lupa no se anima.
