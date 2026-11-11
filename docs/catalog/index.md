---
title: Catálogo de componentes
---

# Catálogo de componentes

Este catálogo es el **look real de MXVI**, extraído pieza por pieza de
[moisesbaldenegro.com](https://moisesbaldenegro.com). Cualquier producto que
use estos componentes, o que reproduzca sus especificaciones, debe verse
idéntico a ese sitio.

El catálogo es de **diseño**, no de una tecnología. Cada componente se describe
de tres formas:

1. **Especificación visual:** colores, medidas, tipografía, bordes, sombras,
   estados y comportamiento responsive en valores exactos. Con esto se puede
   reproducir en cualquier medio (web, escritorio, móvil, Figma, SwiftUI,
   Flutter...).
2. **Vista previa en vivo:** renderizada con la hoja de estilos real.
3. **Código de referencia:** el mismo marcado en HTML, React, Vue, Svelte,
   Angular y Astro. El HTML con clases `mx-` es la fuente canónica; las demás
   pestañas solo adaptan la sintaxis.

## Empieza aquí

| Página | Para qué |
|---|---|
| [ADN visual](/catalog/visual-dna) | Los rasgos que hacen que algo se vea MXVI. Léelo primero. |
| [Prompt maestro](/catalog/master-prompt) | Instrucción lista para que un agente genere un producto idéntico de un solo prompt. |
| [Usar en cualquier tecnología](/catalog/install) | Cómo cargar `mxvi.css` en web y cómo mapear los tokens a plataformas nativas. |

## Niveles

Los componentes están organizados como *atomic design*. Puedes usar cada
pieza pequeña por separado o los bloques grandes completos: por ejemplo, el
footer entero o solo su lista de redes sociales; el hero Bento completo o una
sola tarjeta de marca.

### Átomos

Las piezas mínimas. No se dividen más.

| Componente | Clases |
|---|---|
| [Botones](/catalog/atoms/buttons) | `.mx-button` y variantes `--accent`, `--surface`, `--quiet`, `--sm`, `--cta`, `--cta-outline` |
| [Tipografía y enlaces](/catalog/atoms/typography) | `.mx-heading`, `.mx-label`, `.mx-text`, `.mx-meta`, `.mx-link` |
| [Tags, chips y badges](/catalog/atoms/tags) | `.mx-tag`, `.mx-chip`, `.mx-kicker`, `.mx-badge`, `.mx-handle`, `.mx-verified` |
| [Campos y botón de ícono](/catalog/atoms/inputs) | `.mx-input`, `.mx-select`, `.mx-field`, `.mx-form-row`, `.mx-icon-button` |
| [Logo, imágenes y divisor](/catalog/atoms/media) | `.mx-logo`, `.mx-media`, `.mx-thumb`, `.mx-photo`, `.mx-divider` |

### Moléculas

Combinaciones pequeñas de átomos con un propósito.

| Componente | Clases |
|---|---|
| [Barra de búsqueda](/catalog/molecules/search) | `.mx-search` |
| [Navegación y listas de enlaces](/catalog/molecules/navigation) | `.mx-nav-links`, `.mx-link-list`, `.mx-social-link`, `.mx-tag-list`, `.mx-pagination`, `.mx-segmented` |
| [Tarjetas](/catalog/molecules/cards) | `.mx-card`, `.mx-article-card`, `.mx-project-card`, `.mx-group-card`, `.mx-entry-list`, `.mx-stat`, `.mx-card__title`, `.mx-facts` |
| [Tarjeta de marca y perfil](/catalog/molecules/brand-tile) | `.mx-brand-tile`, `.mx-profile-card` |
| [Bloques de contenido](/catalog/molecules/content) | `.mx-callout`, `.mx-quote`, `.mx-notice`, `.mx-alert`, `.mx-status`, `.mx-table`, `.mx-code`, `.mx-timeline-item` |
| [Fila de resultado](/catalog/molecules/result-row) | `.mx-result-row`, `.mx-result-list` |

### Organismos

Secciones completas, listas para usar tal cual.

| Componente | Clases |
|---|---|
| [Navbar](/catalog/organisms/navbar) | `.mx-navbar` |
| [Footer](/catalog/organisms/footer) | `.mx-footer`, `.mx-footer-brand`, `.mx-footer-bar` |
| [Hero Bento](/catalog/organisms/hero-bento) | `.mx-hero`, `.mx-bento` |
| [Perfil (whoami)](/catalog/organisms/profile) | `.mx-profile-hero`, `.mx-stats`, `.mx-timeline`, `.mx-card-grid` |
| [Artículo](/catalog/organisms/article) | `.mx-post-hero`, `.mx-prose`, `.mx-article-list` |
| [Promociones y banda de logo](/catalog/organisms/promo) | `.mx-promo-grid`, `.mx-promo-tile`, `.mx-logo-band` |

### Plantillas

Páginas completas armadas con los organismos:
[Plantillas de página](/catalog/templates).

## Archivos

| Archivo | Contenido |
|---|---|
| [`/mxvi/mxvi.css`](/mxvi/mxvi.css) | Todo en un archivo: fuentes, tokens, base y componentes. |
| [`/mxvi/tokens.css`](/mxvi/tokens.css) | Solo los tokens (variables CSS). |
| [`/mxvi/components.css`](/mxvi/components.css) | Solo los componentes. |
| [`/mxvi/base.css`](/mxvi/base.css) | Reset y estilos globales de página. |
| [`/mxvi/mxvi.js`](/mxvi/mxvi.js) | Comportamientos opcionales: menú móvil, limpiar búsqueda, copiar código. |
| `/mxvi/fonts/` | Geist, Geist Mono y Geist Pixel (licencia SIL OFL 1.1). |
| [`/mxvi/assets/sprite.svg`](/mxvi/assets/sprite.svg) | Íconos y logos de marca usados por las tarjetas y las redes sociales. |
| [`/mxvi/assets/logo.svg`](/mxvi/assets/logo.svg) | Logo oficial MXVI. |

Los paquetes descargables de cada plataforma incluyen la carpeta `mxvi/`
completa.
