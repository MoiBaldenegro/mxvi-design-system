---
title: Campos y botón de ícono
---

# Campos y botón de ícono

**Nivel:** átomo · **Clases:** `.mx-input`, `.mx-icon-button`

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
