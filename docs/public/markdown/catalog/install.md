---
title: Usar en cualquier tecnología
---

# Usar en cualquier tecnología

MXVI es un **lenguaje visual**. En web se implementa con una hoja de estilos
sin dependencias; en cualquier otra tecnología se reproduce con los mismos
valores. No requiere ningún framework.

## Web: una sola hoja de estilos

```html
<link rel="stylesheet" href="https://moibaldenegro.github.io/mxvi-design-system/mxvi/mxvi.css">
<!-- Opcional: menú móvil, limpiar búsqueda y copiar código -->
<script src="https://moibaldenegro.github.io/mxvi-design-system/mxvi/mxvi.js" defer></script>
```

Puedes importar solo lo que uses, por ejemplo
`@import './mxvi/components/atoms/buttons.css';` después de `tokens.css`.

Para producción, descarga el paquete de la plataforma (incluye la carpeta
`mxvi/` con CSS, JS, fuentes y assets) y sírvelo desde tu propio dominio:

```text
mxvi/
├── mxvi.css          ← fuentes + tokens + base + componentes
├── tokens.css        ← solo variables
├── base.css          ← reset y estilos globales
├── components.css    ← índice de componentes (@import)
├── components/       ← un archivo por componente (≤ 100 líneas):
│   ├── atoms/        ← buttons, typography, tags, inputs, media
│   ├── molecules/    ← cards, search, navigation, brand-tile...
│   └── organisms/    ← navbar, footer, hero, post, prose, promo...
├── fonts.css         ← @font-face de Geist
├── mxvi.js           ← comportamientos opcionales
├── fonts/            ← Geist, Geist Mono, Geist Pixel (OFL 1.1)
└── assets/           ← logo.svg, sprite.svg
```

### Por framework

Las clases son CSS puro, así que funcionan igual en cualquier framework. Solo
cambia cómo se importa la hoja:

::: code-group

```html [HTML]
<link rel="stylesheet" href="/mxvi/mxvi.css">
<script src="/mxvi/mxvi.js" defer></script>
```

```tsx [React / Next.js]
// app/layout.tsx o main.tsx
import './mxvi/mxvi.css'

// En JSX usa className en lugar de class:
<a className="mx-button mx-button--accent" href="/cv.pdf">Descargar CV</a>
```

```ts [Vue / Nuxt]
// main.ts (Vue) o nuxt.config.ts → css: ['~/mxvi/mxvi.css']
import './mxvi/mxvi.css'
```

```svelte [Svelte / SvelteKit]
<!-- src/routes/+layout.svelte -->
<script>
  import '../mxvi/mxvi.css'
</script>
<slot />
```

```json [Angular]
// angular.json → projects.<app>.architect.build.options
"styles": ["src/mxvi/mxvi.css"]
```

```astro [Astro]
---
// src/layouts/Layout.astro
import '../mxvi/mxvi.css'
---
```

:::

### Comportamientos (JS)

`mxvi.js` es opcional y solo lee atributos `data-*`. Si tu framework maneja el
estado, reimplementa el mismo contrato:

| Componente | Contrato |
|---|---|
| Menú móvil de la navbar | Botón `[data-mx-menu-toggle]` dentro de `.mx-navbar`. Al abrir: `data-menu="open"` en la navbar y `aria-expanded="true"` en el botón. `Escape` cierra y devuelve el foco al botón. |
| Búsqueda | Clase `is-filled` en `.mx-search` cuando el input tiene texto; el botón `[data-mx-clear]` vacía el input y le da foco. |
| Copiar código | Botón `[data-mx-copy]` dentro de `.mx-code`: copia el `<pre>`, añade `is-copied` y muestra "Copiado" durante 2 s. |

Si renderizas contenido después de la carga (SPA), llama a
`window.MXVI.init(contenedor)`.

## Otras tecnologías: mapa de tokens

Para escritorio nativo, móvil o herramientas de diseño, reproduce estos
valores. **Propuesta:** `1px` equivale a `1pt` en iOS y `1dp` en Android.

| Token | Valor | SwiftUI | Jetpack Compose | Flutter |
|---|---|---|---|---|
| `--color-background` | `#070716` | `Color(hex: 0x070716)` | `Color(0xFF070716)` | `Color(0xFF070716)` |
| `--color-surface` | `#101018` | `Color(hex: 0x101018)` | `Color(0xFF101018)` | `Color(0xFF101018)` |
| `--color-text` | `#FFFFFF` | `.white` | `Color.White` | `Colors.white` |
| `--color-text-secondary` | `#B8B8C5` | `Color(hex: 0xB8B8C5)` | `Color(0xFFB8B8C5)` | `Color(0xFFB8B8C5)` |
| `--color-border` | blanco 8 % | `.white.opacity(0.08)` | `Color.White.copy(alpha = .08f)` | `Colors.white.withOpacity(.08)` |
| `--color-border-strong` | blanco 15 % | `.white.opacity(0.15)` | `Color.White.copy(alpha = .15f)` | `Colors.white.withOpacity(.15)` |
| `--color-accent` | `#B37AC2` | `Color(hex: 0xB37AC2)` | `Color(0xFFB37AC2)` | `Color(0xFFB37AC2)` |
| `--color-accent-hover` | `#C396CF` | `Color(hex: 0xC396CF)` | `Color(0xFFC396CF)` | `Color(0xFFC396CF)` |
| `--radius-square` | `0` | `RoundedRectangle(cornerRadius: 0)` | `RectangleShape` | `BorderRadius.zero` |
| `--gap-card` | `14` | `14` | `14.dp` | `14` |
| `--transition-default` | `0.28s` `cubic-bezier(.2,.8,.2,1)` | `.timingCurve(0.2, 0.8, 0.2, 1, duration: 0.28)` | `tween(280, easing = CubicBezierEasing(.2f, .8f, .2f, 1f))` | `Duration(milliseconds: 280)`, `Cubic(.2, .8, .2, 1)` |

Fuentes: usa los archivos de `mxvi/fonts/` (Geist, Geist Mono y Geist Pixel
Circle) registrándolos en la plataforma correspondiente.

La lista completa de tokens está en [Tokens CSS](/implementation/css-tokens).
