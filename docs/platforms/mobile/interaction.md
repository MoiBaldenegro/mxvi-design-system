---
title: Móvil — Interacción y accesibilidad
---

# Móvil: interacción y accesibilidad

Complementa [Accessibility](/foundations/accessibility). Los requisitos se
aplican con las APIs de accesibilidad de cada sistema (UIAccessibility en iOS,
la API de accesibilidad de Android) y se prueban con VoiceOver y TalkBack.

## Toque y gestos

| Interacción | Reglas |
|---|---|
| Toque | Objetivos de `44 × 44 pt` (iOS) / `48 × 48 dp` (Android) con separación de al menos `8`. |
| Toque largo | Atajo para menús contextuales o selección; nunca la única vía. |
| Deslizar (swipe) | Atajo para acciones en listas; la acción existe también en un control visible. |
| Gestos del sistema | No uses gestos que choquen con los del sistema (bordes de pantalla, barra de inicio). |
| Arrastrar | Con alternativa (botones "subir/bajar" o un menú "Mover"). |

## Sin hover

- Toda información de un tooltip debe estar visible o accesible con un toque.
- El estado presionado reemplaza al hover como feedback inmediato.

## Lectores de pantalla

- Cada control tiene etiqueta, rol y estado (seleccionado, deshabilitado,
  expandido).
- El orden de lectura sigue el orden visual.
- Agrupa elementos relacionados (por ejemplo una fila de lista) en un solo
  elemento accesible.
- Anuncia cambios importantes (errores, resultados) sin mover el foco sin
  motivo.

## Texto y contraste

- Soporta Dynamic Type (iOS) y la escala de fuente (Android) al menos hasta
  200 %, sin cortes ni solapamientos.
- Contraste AA en las combinaciones reales; revisa el texto secundario
  `#B7AABD` y atenuado `#81768A` sobre `--mxni-surface` y `--mxni-elevated`.
- El color nunca es la única señal: acompaña con ícono o texto.

## Movimiento

- Duraciones `120 / 180 / 280 / 400 ms` de [Motion](/foundations/motion);
  transiciones de pantalla con `Slow` (280 ms) o la transición nativa.
- Con "Reducir movimiento" activo, sustituye desplazamientos y escalas por
  fundidos o cambios inmediatos.

## Preferencias del sistema

- MXNI es oscuro por defecto. Si la app ofrece tema claro, sigue el modo del
  sistema como valor inicial.
- Respeta "Negritas", "Aumentar contraste" y "Reducir transparencia" cuando la
  plataforma los ofrezca.

## Conectividad y rendimiento

- Muestra estados claros sin conexión y conserva lo que el usuario escribió.
- Cachea lo necesario para que la app abra rápido.
- Las acciones de red muestran progreso y permiten reintentar.

## Validación

- Prueba con VoiceOver (iOS) y TalkBack (Android).
- Prueba con el texto del sistema al tamaño máximo.
- Prueba con una mano en un teléfono grande y en una tableta.
- Prueba en vertical y, si aplica, horizontal.
