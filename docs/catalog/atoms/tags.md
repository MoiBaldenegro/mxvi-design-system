---
title: Tags, chips y badges
---

# Tags, chips y badges

**Nivel:** átomo · **Clases:** `.mx-tag`, `.mx-chip`, `.mx-kicker`,
`.mx-badge`, `.mx-handle`, `.mx-verified`

Etiquetas pequeñas, todas con esquinas rectas. Cada una tiene un papel
distinto; no las intercambies.

```html preview
<div class="mx-row">
  <span class="mx-tag">#arquitectura</span>
  <span class="mx-tag mx-tag--sm">#backend</span>
  <span class="mx-chip">Node.js</span>
  <span class="mx-kicker">#arquitectura</span>
  <span class="mx-badge">sep 2023 – presente</span>
  <span class="mx-badge mx-badge--muted">1 año 2 meses</span>
  <span class="mx-handle">@moibaldenegro <span class="mx-verified"><span aria-hidden="true">✓</span><span class="mx-visually-hidden">Verificado</span></span></span>
</div>
```

## Especificación visual

<div class="mx-spec">

| Átomo | Uso | Fuente | Color de texto | Borde | Fondo | Padding |
|---|---|---|---|---|---|---|
| Tag `.mx-tag` | Temas de un artículo (`#tema`) | Geist Pixel .85rem | `#B37AC2` | 1px blanco 8 % | — | 4px 12px |
| Tag pequeño `--sm` | Tags en filas de resultados | Geist Pixel .78rem | `#B37AC2` | 1px blanco 8 % | — | 3px 10px |
| Chip `.mx-chip` | Tecnologías y habilidades | Geist Sans .85rem | `#b8b8c5` | 1px blanco 15 % | `#070716` | 3.5px 10.5px |
| Kicker `.mx-kicker` | Categoría sobre un título | Geist Pixel .8rem, MAYÚSCULAS, `.08em` | `#C396CF` | 1px `#B37AC2` | acento al 12 % | 4px 14px |
| Badge `.mx-badge` | Periodo, estado | Geist Sans .85rem 600 | `#ffffff` | 1px `#B37AC2` (o blanco 15 % en `--muted`) | — | 3.5px 10.5px |
| Handle `.mx-handle` | `@usuario` | Geist Mono .8rem 600 | `#5fd6ff` | 1px `rgba(0,195,255,.35)` | `#081a28` + halo `0 0 35px rgba(0,170,255,.15)` | 5px 12px |
| Verificado `.mx-verified` | Dentro del handle | 0.6rem | `#ffffff` | — | `#0a6f9e` | cuadro de 16×16px |

</div>

## Reglas

- Los tags pueden ser enlaces (`<a class="mx-tag">`); al pasar el mouse el
  borde cambia a `#B37AC2`.
- Agrupa varios con [`.mx-tag-list` o `.mx-chip-list`](/catalog/molecules/navigation#lista-de-tags).
- El check del handle lleva un texto oculto ("Verificado") para lectores de
  pantalla.
- El cian del handle es exclusivo de la identidad del usuario: no lo uses en
  otros elementos.
