---
title: Color
---

# Color

Paleta real de [moisesbaldenegro.com](https://moisesbaldenegro.com). Los
nombres son los tokens de [`mxni/tokens.css`](/implementation/css-tokens).

## Base

<div class="mxni-swatch-grid">
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#070716"></div><div class="mxni-swatch__meta"><b>Fondo</b><code>--color-background · #070716</code>Página: noche índigo</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#101018"></div><div class="mxni-swatch__meta"><b>Superficie</b><code>--color-surface · #101018</code>Tarjetas, campos, paneles</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#ffffff"></div><div class="mxni-swatch__meta"><b>Texto</b><code>--color-text · #ffffff</code>Texto principal</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#b8b8c5"></div><div class="mxni-swatch__meta"><b>Texto secundario</b><code>--color-text-secondary · #b8b8c5</code>Metadatos, descripciones</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#070716;box-shadow:inset 0 0 0 6px rgba(255,255,255,.08)"></div><div class="mxni-swatch__meta"><b>Borde</b><code>--color-border · rgba(255,255,255,.08)</code>Hairline por defecto</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#070716;box-shadow:inset 0 0 0 6px rgba(255,255,255,.15)"></div><div class="mxni-swatch__meta"><b>Borde fuerte</b><code>--color-border-strong · rgba(255,255,255,.15)</code>Navbar, botones, hover</div></div>
</div>

## Acento

Un solo acento: **ciruela**. Se usa en poca superficie: bordes activos,
tags, enlaces, foco, subrayados, marcadores y cifras.

<div class="mxni-swatch-grid">
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#B37AC2"></div><div class="mxni-swatch__meta"><b>Acento</b><code>--color-accent · #B37AC2</code>Señal principal</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#C396CF"></div><div class="mxni-swatch__meta"><b>Acento hover</b><code>--color-accent-hover · #C396CF</code>Hover y énfasis</div></div>
</div>

## Atmósfera

Degradado y resplandor de los bloques principales (hero, header de artículo,
perfil, footer, banda de logo) y fondo de la navbar.

<div class="mxni-swatch-grid">
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#3C1F44"></div><div class="mxni-swatch__meta"><b>Hero arriba</b><code>--color-hero-top · #3C1F44</code></div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#150A18"></div><div class="mxni-swatch__meta"><b>Hero medio</b><code>--color-hero-mid · #150A18</code></div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:#05050b"></div><div class="mxni-swatch__meta"><b>Hero abajo</b><code>--color-hero-bottom · #05050b</code></div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:rgba(108,56,122,.35)"></div><div class="mxni-swatch__meta"><b>Glow</b><code>--color-glow · rgba(108,56,122,.35)</code>Resplandor y halo de foco</div></div>
  <div class="mxni-swatch"><div class="mxni-swatch__color" style="background:rgba(8,8,18,.75)"></div><div class="mxni-swatch__meta"><b>Navbar</b><code>--color-navbar · rgba(8,8,18,.75)</code>+ blur 18px</div></div>
</div>

Degradado de referencia:

```css
background:
  radial-gradient(color-mix(in srgb, #fff 3%, transparent) 1px, transparent 1px),
  radial-gradient(circle at top right, #3C1F44 0%, #150A18 35%, #05050b 100%);
background-size: 14px 14px, auto;
```

## Colores con un solo uso

| Color | Token | Único uso permitido |
|---|---|---|
| `#6C387A` · `#F7941D` | `--color-logo-purple`, `--color-logo-orange` | El logo MXNI |
| `#5fd6ff` sobre `#081a28` | `--color-username-text`, `--color-username-bg` | El handle `@usuario` |
| `#0a6f9e` | `--color-verified` | La marca de verificado |
| `#0071e3` / `#2997ff` | `--color-promo-cta`, `--color-promo-link` | Acciones de las tarjetas promocionales |
| Colores de marca | `--color-marca-*` | Fondo de las [tarjetas de marca](/catalog/molecules/brand-tile#colores-de-marca) |
| `#6C387A` / `#090912` | `--color-scrollbar-*` | La barra de desplazamiento |

## Colores semánticos

El sitio todavía no usa estados de éxito, advertencia o error. **Propuesta**
para cuando un producto los necesite (con contraste AA sobre `#101018`):

| Estado | Valor |
|---|---|
| Éxito | `#39C98A` |
| Advertencia | `#F3B64B` |
| Error | `#F05B72` |
| Información | `#5fd6ff` |

Acompáñalos siempre con texto o ícono; el color nunca es la única señal.

## Proporciones

- 85–90 % fondo y superficies oscuras.
- 8–12 % texto y líneas.
- 2–5 % acento.
- Las tarjetas de marca y las promocionales son la única excepción con
  bloques de color sólido.

## Contraste

| Combinación | Contraste |
|---|---|
| `#ffffff` sobre `#070716` | 19.98 : 1 |
| `#b8b8c5` sobre `#101018` | 9.65 : 1 |
| `#B37AC2` sobre `#070716` | 6.17 : 1 |
| `#B37AC2` sobre `#101018` | 5.84 : 1 |
| `#C396CF` sobre `#101018` | 7.74 : 1 |
| `#ffffff` sobre `#0071e3` (CTA) | 4.70 : 1 |

Verifica cualquier combinación nueva contra WCAG 2.2 AA (4.5 : 1 en texto
normal, 3 : 1 en texto grande y gráficos).

## Reglas

- Nunca uses negro puro ni grises neutros como fondo.
- El acento no se usa como fondo de botones ni de bloques grandes.
- Los bordes son siempre blancos translúcidos, nunca grises opacos.
- No agregues acentos nuevos (cian, verde, rosa) fuera de sus usos únicos.
