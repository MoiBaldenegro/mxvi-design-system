---
title: Bloques de contenido
---

# Bloques de contenido

**Nivel:** molécula · **Clases:** `.mx-callout`, `.mx-quote`, `.mx-notice`,
`.mx-code`, `.mx-timeline-item`

## Callout

Nota destacada dentro de una tarjeta, con una barra de acento a la izquierda.

```html preview
<p class="mx-callout"><strong>Resultado:</strong> Sistema en producción en septiembre de 2025: optimizó procesos administrativos y aumentó márgenes.</p>
```

- Fondo `#070716` (más oscuro que la tarjeta), barra izquierda de 3px
  `#B37AC2`, padding 10.5px 14px, interlineado 1.6.
- El texto en `<strong>` va en `#C396CF`.

## Cita

Frase destacada (filosofía, testimonio).

```html preview
<blockquote class="mx-quote">
  <p class="mx-quote__text" lang="en">Deterministic Engineering in an Agentic World</p>
  <p class="mx-quote__caption">Uso la IA para construir software, pero con procesos verificables: specs primero, tests antes que el código y una feature a la vez.</p>
</blockquote>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Contenedor | `#101018`, borde 1px blanco 8 % con barra izquierda de **4px** `#B37AC2`, padding 28px 35px (21px en ≤ 768px) |
| Frase | Geist Sans 800 `clamp(1.5rem, 1.1rem + 1.8vw, 2.5rem)`, `letter-spacing: -.02em`; comillas “ ” en `#C396CF` |
| Texto | 1.1rem `#b8b8c5`, máximo 70 caracteres por línea |

</div>

## Aviso

Estado vacío, guía o página de error.

```html preview
<section class="mx-notice">
  <h2 class="mx-notice__title">Página no encontrada</h2>
  <p class="mx-notice__text">La página que buscas no existe o cambió de dirección.</p>
  <nav class="mx-notice__actions" aria-label="Enlaces de salida">
    <a class="mx-link" href="#">Volver al inicio</a>
    <a class="mx-link" href="#">Buscar artículos</a>
  </nav>
</section>
```

```html preview
<section class="mx-notice">
  <p class="mx-notice__text">No se encontraron resultados para 'kubernetes'.</p>
  <div class="mx-notice__actions"><button class="mx-button mx-button--quiet" type="button">Limpiar búsqueda</button></div>
</section>
```

- `#101018`, borde 1px blanco 8 %, padding 24px 28px.
- Título en Geist Pixel 1.35rem; texto `#b8b8c5`, interlineado 1.55.

## Bloque de código

Con botón para copiar arriba a la derecha (requiere
[`mxni.js`](/catalog/install#comportamientos-js) o tu propia implementación).

```html preview
<div class="mx-code">
  <pre><code>const { privateKey } = generateKeyPairSync('ed25519')
console.log(privateKey.export({ type: 'pkcs8', format: 'pem' }))</code></pre>
  <button class="mx-code__copy" type="button" data-mx-copy aria-label="Copiar código">⧉</button>
</div>
```

- `<pre>` en `#101018` con borde 1px blanco 8 %, padding 16px 20px, Geist Mono.
- Botón de 30 × 30px al 70 % de opacidad (100 % en hover, foco y móvil); al
  copiar muestra "Copiado" en `#B37AC2`.

## Elemento de línea de tiempo

Experiencia laboral: puesto, periodo, organización, logros y resultado. Se
apila dentro de la [línea de tiempo](/catalog/organisms/profile#linea-de-tiempo).

```html preview
<article class="mx-card mx-card--interactive mx-timeline-item">
  <header class="mx-timeline-item__head">
    <h3 class="mx-timeline-item__role">Líder de Desarrollo &amp; Arquitecto de Software</h3>
    <span class="mx-badge">sep 2023 – presente</span>
  </header>
  <p class="mx-timeline-item__org">Taquerías MG · Guadalajara, Jalisco</p>
  <ul class="mx-timeline-item__highlights">
    <li>Arquitectura backend de un ecosistema multiplataforma con Node.js, NestJS y TypeScript.</li>
    <li>Microservicios en Docker y serverless en Cloudflare Workers.</li>
  </ul>
  <p class="mx-callout"><strong>Resultado:</strong> Sistema en producción en septiembre de 2025.</p>
</article>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Puesto | Geist Sans 1.15rem 700 |
| Periodo | [`.mx-badge`](/catalog/atoms/tags) a la derecha |
| Organización | .95rem `#b8b8c5`, 4.7px arriba y 14px abajo |
| Logros | lista con viñetas `#B37AC2`, separación 7px, interlineado 1.6 |
| Resultado | [`.mx-callout`](#callout) |

</div>
