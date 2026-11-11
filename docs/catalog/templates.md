---
title: Plantillas de página
---

# Plantillas de página

**Nivel:** plantilla. Estructuras completas armadas con los organismos del
catálogo. Toda página comparte el mismo esqueleto: navbar, `<main>` y footer.

## Esqueleto común

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#070716">
  <title>Título | Sitio</title>
  <link rel="stylesheet" href="/mxvi/mxvi.css">
  <script src="/mxvi/mxvi.js" defer></script>
</head>
<body>
  <a class="mx-skip-link" href="#contenido">Saltar al contenido</a>
  <header class="mx-navbar">…</header>          <!-- Organismo: Navbar -->
  <main id="contenido" tabindex="-1">
    …                                          <!-- Contenido de la plantilla -->
  </main>
  <footer class="mx-footer">…</footer>         <!-- Organismo: Footer -->
</body>
</html>
```

- `theme-color` igual al fondo (`#070716`).
- `<main>` ocupa el espacio libre para que el footer quede abajo.

## Portada

| Orden | Bloque | Organismo |
|---|---|---|
| 1 | Hero Bento con perfil y tarjetas de marca | [Hero Bento](/catalog/organisms/hero-bento) |
| 2 | Últimos artículos (`.mx-page` → `.mx-section`) | [Lista de artículos](/catalog/organisms/article#lista-de-articulos) |
| 3 | Banda de logo | [Banda de logo](/catalog/organisms/promo#banda-de-logo) |
| 4 | Tarjetas promocionales 2 × 2 | [Promociones](/catalog/organisms/promo#tarjetas-promocionales) |

```html
<main id="contenido">
  <section class="mx-hero">…<div class="mx-bento">…</div></section>
  <div class="mx-page"><section class="mx-section">… artículos …</section></div>
  <section class="mx-logo-band">…</section>
  <section class="mx-promo-grid">…</section>
</main>
```

## Perfil

| Orden | Bloque | Organismo |
|---|---|---|
| 1 | Encabezado con foto, redes y CV | [Encabezado de perfil](/catalog/organisms/profile#encabezado-de-perfil) |
| 2 | Cifras | [Cifras](/catalog/organisms/profile#cifras) |
| 3 | Experiencia | [Línea de tiempo](/catalog/organisms/profile#linea-de-tiempo) |
| 4 | Stack, proyectos, formación | [Cuadrícula de tarjetas](/catalog/organisms/profile#cuadricula-de-tarjetas) |
| 5 | Filosofía | [Cita](/catalog/molecules/content#cita) |

```html
<main id="contenido">
  <div class="mx-page mx-stack">
    <section class="mx-profile-hero">…</section>
    <ul class="mx-stats">…</ul>
    <section class="mx-section"><h2 class="mx-heading mx-heading--lg">Experiencia</h2><ol class="mx-timeline">…</ol></section>
    <section class="mx-section"><h2 class="mx-heading mx-heading--lg">Stack y habilidades</h2><div class="mx-card-grid">…</div></section>
    <section class="mx-section"><h2 class="mx-heading mx-heading--lg">Filosofía</h2><blockquote class="mx-quote">…</blockquote></section>
  </div>
</main>
```

## Artículo

```html
<main id="contenido">
  <div class="mx-page">
    <header class="mx-post-hero">…</header>
    <article class="mx-prose">…</article>
    <footer>… Siguiente artículo …</footer>
    <section>… Recomendados (mx-result-list) …</section>
  </div>
</main>
```

Ver [Artículo](/catalog/organisms/article).

## Búsqueda

```html
<main id="contenido">
  <div class="mx-page">
    <h1 class="mx-heading">Búsqueda</h1>
    <section class="mx-notice">… guía o "sin resultados" …</section>
    <ul class="mx-result-list">… filas …</ul>
    <nav class="mx-pagination">…</nav>
  </div>
</main>
```

Ver [Fila de resultado](/catalog/molecules/result-row) y
[Paginación](/catalog/molecules/navigation#paginacion).

## Página no encontrada

```html preview wide
<div class="mx-page" style="padding:0">
  <section class="mx-notice">
    <h1 class="mx-notice__title" style="font-size:1.75rem">Página no encontrada</h1>
    <p class="mx-notice__text">La página que buscas no existe o cambió de dirección.</p>
    <nav class="mx-notice__actions" aria-label="Enlaces de salida">
      <a class="mx-link" href="#">Volver al inicio</a>
      <a class="mx-link" href="#">Buscar artículos</a>
    </nav>
  </section>
</div>
```
