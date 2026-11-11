---
title: Escritorio — Interacción y accesibilidad
---

# Escritorio: interacción y accesibilidad

Complementa [Accessibility](/foundations/accessibility). El objetivo es el
equivalente a WCAG 2.2 AA usando las APIs de accesibilidad del sistema
operativo (UI Automation en Windows, NSAccessibility en macOS, AT-SPI en
Linux). Si la app usa tecnologías web (Electron, Tauri), las reglas de HTML
semántico de la guía [Web](/platforms/web/interaction) también aplican.

## Métodos de entrada

| Entrada | Reglas |
|---|---|
| Teclado | Todo es operable sin mouse. Orden de foco lógico, foco visible, atajos para acciones frecuentes. |
| Mouse / trackpad | Hover para feedback y tooltips; clic derecho para menús contextuales; arrastrar y soltar donde tenga sentido. |
| Táctil (laptops 2 en 1) | Controles de al menos `32 px` de alto con espacio entre ellos; ninguna acción depende de hover o clic derecho. |
| Lector de pantalla | Cada control tiene nombre, rol y estado expuestos al sistema. |

## Foco

- Anillo de foco visible en todos los controles, incluidos los personalizados.
- Anillo de 2px `#B37AC2` con 2px de separación; el glow
  no basta por sí solo.
- `Tab` recorre las regiones (sidebar, contenido, inspector); las flechas se
  mueven dentro de listas, árboles y grupos.
- `F6` (Windows/Linux) o un atajo equivalente cambia entre paneles.

## Arrastrar y soltar

- Siempre existe una alternativa con teclado o menú (por ejemplo "Mover a…").
- Muestra la zona de destino con `--color-surface` y borde `#B37AC2`.

## Preferencias del sistema

- **Movimiento reducido:** desactiva animaciones no esenciales.
- **Alto contraste / colores forzados:** los bordes, el foco y los estados
  siguen visibles.
- **Escala de texto y de pantalla:** el layout no se rompe a 150 % ni a 200 %.
- **Tema:** MXVI es oscuro por defecto. Si la app ofrece tema claro, sigue la
  preferencia del sistema como valor inicial.

## Movimiento

- Transición única `.28s cubic-bezier(.2,.8,.2,1)` de [Motion](/foundations/motion).
- Paneles y menús usan la misma transición; en escritorio se esperan
  respuestas inmediatas.

## Rendimiento y estado

- La interfaz nunca se congela: las tareas largas corren en segundo plano con
  progreso y opción de cancelar.
- Guarda el trabajo automáticamente o avisa antes de perder cambios.
- Recupera la sesión tras un cierre inesperado cuando sea posible.

## Validación

- Recorrido completo solo con teclado.
- Prueba con el lector de pantalla del sistema (Narrator o NVDA en Windows,
  VoiceOver en macOS, Orca en Linux).
- Prueba con escala de pantalla 100 %, 150 % y 200 %, y con alto contraste.
