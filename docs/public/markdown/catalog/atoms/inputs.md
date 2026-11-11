---
title: Campos y botón de ícono
---

# Campos y botón de ícono

**Nivel:** átomo · **Clases:** `.mx-input`, `.mx-select`, `.mx-field`, `.mx-form-row`, `.mx-icon-button`

## Campo de texto

```html preview
<label class="mx-label" for="demo-email" style="display:block;margin-bottom:7px">Correo</label>
<input class="mx-input" id="demo-email" type="email" placeholder="tu@correo.com" autocomplete="email">
```

<div class="mx-spec">

| Propiedad | Valor |
|---|---|
| Fondo | `#101018` |
| Borde | 1px blanco 8 % |
| Radio | 0 |
| Texto | Geist Sans .95rem `#ffffff` |
| Placeholder | `#b8b8c5` |
| Padding | 10px 14px |
| Foco | borde `#B37AC2` + halo `0 0 0 4px rgba(108,56,122,.35)` + anillo de foco global |

</div>

- Siempre con etiqueta visible; el placeholder no la sustituye.
- Para buscar usa la molécula [Barra de búsqueda](/catalog/molecules/search),
  que añade la lupa animada y el botón de limpiar.

## Campo con etiqueta y error

Etiqueta, control y mensaje de error agrupados. El error se enlaza con
`aria-describedby` y el control marca `aria-invalid="true"`, que pinta el borde
en rojo.

```html preview
<form class="mx-form-row" novalidate>
  <div class="mx-field">
    <label class="mx-field__label" for="demo-realm">Reino</label>
    <input class="mx-input" id="demo-realm" value="Ragnaros">
  </div>
  <div class="mx-field">
    <label class="mx-field__label" for="demo-name">Nombre</label>
    <input class="mx-input" id="demo-name" aria-invalid="true" aria-describedby="demo-name-error">
    <p class="mx-field__error" id="demo-name-error">Escribe el nombre del personaje.</p>
  </div>
  <div class="mx-field">
    <label class="mx-field__label" for="demo-mode">Juego</label>
    <select class="mx-input mx-select" id="demo-mode"><option>Retail</option><option>Classic</option></select>
  </div>
  <button class="mx-button mx-button--accent" type="submit">Buscar</button>
</form>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Etiqueta | Geist Pixel .8rem, mayúsculas, `letter-spacing: .08em`, `#b8b8c5` |
| Separación | 7px entre etiqueta, control y error |
| Error | Geist Sans .85rem `#F05B72` (`--color-danger`); borde del control en el mismo color |
| Select | igual que `.mx-input`, flecha nativa clara (`color-scheme: dark`) |
| Fila (`.mx-form-row`) | flex que se ajusta; cada campo mide 160px como mínimo; los campos se alinean arriba (un error no desplaza a los demás) y los botones bajan la altura de la etiqueta |

</div>

## Botón de ícono

Botón cuadrado para acciones de un solo ícono: abrir el menú móvil, copiar
código.

```html preview
<div class="mx-row">
  <button class="mx-icon-button" type="button" aria-label="Abrir menú">☰</button>
  <button class="mx-icon-button" type="button" aria-label="Cerrar menú">✕</button>
  <button class="mx-icon-button mx-icon-button--sm" type="button" aria-label="Copiar código">⧉</button>
</div>
```

<div class="mx-spec">

| Propiedad | Normal | Pequeño (`--sm`) |
|---|---|---|
| Tamaño | 44 × 44px (2.75rem) | 30 × 30px |
| Borde | 1px blanco 8 % | 1px blanco 8 % |
| Fondo | transparente | transparente |
| Ícono | 1.25rem `#ffffff` | .9rem `#b8b8c5` |
| Hover | borde blanco 15 % | borde blanco 15 % |

</div>

- Todo botón de ícono necesita `aria-label`.
- En táctil usa el tamaño normal (44px).
