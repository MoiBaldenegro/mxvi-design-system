---
title: Botones
---

# Botones

**Nivel:** átomo · **Clase base:** `.mx-button`

Botones y enlaces con forma de botón. Todos tienen **esquinas rectas**, texto
Geist Sans en peso 600 y bordes finos; ninguno tiene relleno de color salvo el
CTA azul de las secciones promocionales.

## Variantes

| Variante | Clase | Cuándo usarla |
|---|---|---|
| Contorno | `.mx-button` | Acciones secundarias y enlaces con ícono (redes sociales). |
| Acento | `.mx-button--accent` | La acción principal de una sección ("Descargar CV"). Una por bloque. |
| Superficie | `.mx-button--surface` | Navegación entre páginas ("Siguiente artículo", paginación). |
| Discreto | `.mx-button--quiet` | Acciones secundarias dentro de tarjetas ("Limpiar búsqueda"); texto compacto de 0.8333rem (13.33px). |
| Pequeño mono | `.mx-button--sm` | Utilidades en barras ("Volver arriba"). |
| CTA | `.mx-button--cta` | Llamada a la acción sobre secciones promocionales. |
| CTA contorno | `.mx-button--cta-outline` | Acción secundaria junto a un CTA. |

```html preview
<div class="mx-row">
  <a class="mx-button" href="#">
    <svg class="mx-button__icon" aria-hidden="true" focusable="false"><use href="/mxvi/assets/sprite.svg#github"/></svg>
    GitHub
  </a>
  <a class="mx-button mx-button--accent" href="#">Descargar CV <span aria-hidden="true">↓</span></a>
  <a class="mx-button mx-button--surface" href="#">Siguiente artículo</a>
  <button class="mx-button mx-button--quiet" type="button">Limpiar búsqueda</button>
  <a class="mx-button mx-button--sm" href="#">Volver arriba <span aria-hidden="true">↑</span></a>
</div>
```

```html preview
<div class="mx-row">
  <a class="mx-button mx-button--cta" href="#">Ver en YouTube</a>
  <a class="mx-button mx-button--cta-outline" href="#">Sobre mí</a>
</div>
```

## Especificación visual

<div class="mx-spec">

| Propiedad | Contorno | Acento | Superficie | CTA |
|---|---|---|---|---|
| Fondo | transparente | `#070716` | `#101018` | `#0071e3` |
| Borde | 1px `rgba(255,255,255,.15)` | **2px** `#B37AC2` | 1px `rgba(255,255,255,.08)` | 1px `#0071e3` |
| Texto | `#fff`, 600 | `#fff`, 600 | `#fff`, 400 | `#fff`, 400, 15px |
| Padding | 7px 14px | 10.5px 21px | 14px | 8px 18px |
| Radio | 0 | 0 | 0 | 0 |
| Hover | borde `#B37AC2`, fondo `#101018` | borde `#C396CF` + glow `0 0 21px rgba(108,56,122,.35)` | borde `#B37AC2` | fondo `#0077ed` |
| Foco | anillo 2px `#B37AC2`, separación 2px | igual | igual | igual |
| Transición | `.28s cubic-bezier(.2,.8,.2,1)` | igual | igual | igual |

</div>

- Ícono: `1.1em`, `currentColor`, separado del texto por `7px`.
- Las flechas (`↓`, `↑`, `↗`) van en un `<span aria-hidden="true">`.
- El CTA azul solo vive sobre las tarjetas promocionales: no es el color de
  acción del resto del sistema.

## Reglas

- Usa `<a>` si navega y `<button>` si ejecuta una acción.
- Una sola variante **Acento** por bloque.
- Sin esquinas redondeadas, sin degradados y sin sombras en reposo.
- En pantallas táctiles el área tocable debe llegar a 44 × 44 px (agrega
  padding vertical si hace falta).
