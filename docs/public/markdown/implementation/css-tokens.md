---
title: CSS tokens
---

# Tokens CSS

La fuente de verdad es [`/mxvi/tokens.css`](/mxvi/tokens.css). Sus nombres y
valores son **idénticos** a `src/styles/tokens.css` de moisesbaldenegro.com,
para que ambos se puedan comparar y sincronizar 1:1.

```html
<link rel="stylesheet" href="/mxvi/mxvi.css">   <!-- incluye los tokens -->
<!-- o solo los tokens: -->
<link rel="stylesheet" href="/mxvi/tokens.css">
```

## Tokens principales

| Grupo | Token | Valor |
|---|---|---|
| Fondo | `--color-background` | `#070716` |
| | `--color-surface` | `#101018` |
| Texto | `--color-text` | `#ffffff` |
| | `--color-text-secondary` | `#b8b8c5` |
| Borde | `--color-border` | `rgba(255,255,255,.08)` |
| | `--color-border-strong` | `rgba(255,255,255,.15)` |
| Acento | `--color-accent` | `#B37AC2` |
| | `--color-accent-hover` | `#C396CF` |
| Atmósfera | `--color-hero-top` | `#3C1F44` |
| | `--color-hero-mid` | `#150A18` |
| | `--color-hero-bottom` | `#05050b` |
| | `--color-glow` | `rgba(108,56,122,.35)` |
| | `--color-navbar` | `rgba(8,8,18,.75)` |
| Logo | `--color-logo-purple` | `#6C387A` |
| | `--color-logo-orange` | `#F7941D` |
| Handle | `--color-username-bg` / `-border` / `-text` | `#081a28` / `rgba(0,195,255,.35)` / `#5fd6ff` |
| | `--color-verified` | `#0a6f9e` |
| Promo | `--color-promo-cta` / `-cta-hover` / `-link` | `#0071e3` / `#0077ed` / `#2997ff` |
| | `--color-promo-{youtube,mfinance,new-relic,tomatesoft}` | `#0e0e10`, `#0d1a1d`, `#0e0b22`, `#0b0909` |
| | `--gap-promo` | `10px` |
| Marcas | `--color-marca-*` | ver [tarjeta de marca](/catalog/molecules/brand-tile#colores-de-marca) |
| Scrollbar | `--color-scrollbar-thumb` / `-track` | `#6C387A` / `#090912` |
| Radio | `--radius-square` | `0` |
| Espaciado | `--gap-card` | `14px` |
| | `--space-mxvi-band` | `clamp(32px, 5vw, 64px)` |
| Layout | `--container-max` | `1500px` |
| | `--header-height` | `64px` |
| | `--video-max-width` | `640px` |
| Sombra | `--shadow-card` | `0 25px 80px rgba(0,0,0,.35)` |
| | `--shadow-card-rest` | `inset 0 1px 0 rgba(255,255,255,.05), 0 18px 40px rgba(0,0,0,.28)` |
| | `--shadow-card-hover` | `inset 0 1px 0 rgba(255,255,255,.233), 0 25px 60px rgba(0,0,0,.38)` |
| | `--shadow-username` | `0 0 35px rgba(0,170,255,.15)` |
| Movimiento | `--transition-default` | `.28s cubic-bezier(.2,.8,.2,1)` |
| Tipografía | `--font-sans` | Geist |
| | `--font-mono` | Geist Mono |
| | `--font-display` | Geist Pixel (Circle) |
| Banda de logo | `--opacity-logo-band` / `-hover` | `.62` / `1` |

## Reglas

- Patrón de nombres: `--grupo-nombre` en kebab-case.
- Todo color, espacio, radio, sombra, fuente y transición sale de un token;
  no escribas valores sueltos en los componentes.
- Los espaciados se expresan como múltiplos: `calc(var(--gap-card) * 1.5)`.
- Si un producto necesita un token nuevo, agrégalo con el mismo patrón y
  documéntalo; no cambies el valor de un token existente en un solo producto.
- Para mapear los tokens a plataformas nativas, ver
  [Usar en cualquier tecnología](/catalog/install#otras-tecnologias-mapa-de-tokens).
