---
title: Web — Componentes
---

# Web: componentes

Los contratos de [Components](/components/overview) aplican igual. Esta página
explica cómo implementarlos en web.

## Botones

- Alturas: `32` (pequeño), `40` (mediano) y `48 px` (grande).
- En Compact, los botones principales usan al menos `44 px` de alto o un área
  táctil equivalente.
- Usa `<button type="button">` o `type="submit"` dentro de formularios.
- Estado de carga: deshabilita el envío duplicado y anuncia el progreso
  (`aria-busy` o texto).
- Radio 0 (esquinas rectas). Variantes y specs en [Botones](/catalog/atoms/buttons).

## Campos

- Usa controles nativos (`<input>`, `<select>`, `<textarea>`) siempre que sea
  posible.
- Cada campo tiene `<label>` visible; el placeholder nunca lo sustituye.
- Usa el `type` y el `autocomplete` correctos (`email`, `tel`,
  `current-password`, etc.); en teléfonos esto abre el teclado adecuado.
- Los errores se asocian al campo con `aria-describedby` y no dependen solo del
  borde rojo.
- En Compact, el texto de los campos debe ser de al menos `16 px`.

## Tarjetas y paneles

- Superficie `--color-surface`, borde `--color-border`; ver [Tarjetas](/catalog/molecules/cards).
- Una tarjeta clicable entera usa un enlace con nombre accesible; si tiene
  varias acciones, no hagas clicable toda la tarjeta.
- En Compact, las tarjetas ocupan todo el ancho disponible.

## Feedback

- **Toasts:** en una región `aria-live`; nunca con información esencial.
- **Alertas:** en línea, con título o etiqueta de estado y `role="alert"` solo
  si requieren atención inmediata.
- **Diálogos:** usa `<dialog>` o un patrón equivalente con foco atrapado,
  `Escape` para cerrar y devolución del foco al disparador.
- **Progreso:** `<progress>` o `role="progressbar"` con valor si se conoce.

## Tablas y datos

- Usa `<table>` con encabezados `<th scope>` para datos tabulares.
- En Compact, la tabla hace scroll horizontal dentro de su contenedor o se
  transforma en una lista de tarjetas.
- Números en `font-variant-numeric: tabular-nums`; identificadores y versiones
  en Geist Mono.

## Íconos

- Íconos decorativos con `aria-hidden="true"`.
- Botones solo con ícono necesitan `aria-label`.
