---
title: Fila de resultado
---

# Fila de resultado

**Nivel:** molécula · **Clases:** `.mx-result-row`, `.mx-result-list`

Filas compactas para resultados de búsqueda y artículos recomendados:
miniatura, título enlazado (toda la fila es clicable), metadatos y, opcional,
descripción y tags. Las filas se separan con líneas finas, sin cajas.

```html preview wide
<ul class="mx-result-list">
  <li class="mx-result-row">
    <img class="mx-thumb" src="/mxvi/assets/examples/entry-01.webp" alt="" width="112" height="63">
    <div class="mx-result-row__body">
      <a class="mx-result-row__link" href="#">Autenticación de APIs: Estrategias, Tokens y Buenas Prácticas</a>
      <p class="mx-result-row__meta">Por Moisés Baldenegro Melendez • 6 min</p>
      <p class="mx-result-row__description">Una guía técnica sobre los mecanismos de autenticación y autorización en arquitecturas backend modernas: JWT, OAuth 2.0 y API Keys.</p>
      <ul class="mx-tag-list"><li class="mx-tag mx-tag--sm">#api</li><li class="mx-tag mx-tag--sm">#seguridad</li></ul>
    </div>
  </li>
  <li class="mx-result-row">
    <img class="mx-thumb" src="/mxvi/assets/examples/entry-01.webp" alt="" width="112" height="63">
    <div class="mx-result-row__body">
      <a class="mx-result-row__link" href="#">Principios del diseño de software</a>
      <p class="mx-result-row__meta">Por Moisés Baldenegro Melendez • 9 min</p>
    </div>
  </li>
</ul>
```

<div class="mx-spec">

| Parte | Valor |
|---|---|
| Fila | padding 16px 12px (12px 6px en ≤ 768px), línea inferior 1px blanco 8 % (no en la última) |
| Hover | fondo `#101018` |
| Miniatura | 112px, 16:9; se oculta en ≤ 768px |
| Título | Geist Sans 1.05rem `#ffffff`, interlineado 1.35; subrayado en hover |
| Meta | .85rem `#b8b8c5`, 4px arriba |
| Descripción | .95rem, máximo 2 líneas (se corta con "…") |
| Tags | [`.mx-tag--sm`](/catalog/atoms/tags), 6px arriba |

</div>

- El `::after` del enlace cubre toda la fila: no pongas otros enlaces dentro.
