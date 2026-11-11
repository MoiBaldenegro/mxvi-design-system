---
title: Web — Interacción y accesibilidad
---

# Web: interacción y accesibilidad

El objetivo para todo producto web es **WCAG 2.2 AA**. Esta página complementa
[Accessibility](/foundations/accessibility).

## Métodos de entrada

En web no sabes con qué interactúa el usuario: puede ser mouse, teclado,
táctil, lector de pantalla o una combinación. Diseña para todos.

| Entrada | Reglas |
|---|---|
| Teclado | Todo es alcanzable con `Tab`, en orden lógico. Foco visible con `:focus-visible`. Sin trampas de foco fuera de diálogos. |
| Mouse | El hover agrega información o feedback, pero nunca es la única forma de acceder a algo. |
| Táctil | Objetivos de al menos `44 × 44 px`, separación suficiente entre ellos y sin gestos obligatorios sin alternativa. |
| Lector de pantalla | HTML semántico, nombres accesibles, regiones `aria-live` para cambios dinámicos. |

## Foco

- Anillo de foco: 2px `#B37AC2` con 2px de separación (global en `base.css`).
- No uses el glow como único indicador de foco.
- Al abrir un diálogo, el foco entra en él; al cerrarlo, regresa al disparador.

## Movimiento

- Transición única `.28s cubic-bezier(.2,.8,.2,1)` de [Motion](/foundations/motion).
- Con `prefers-reduced-motion: reduce`, elimina o reduce animaciones no
  esenciales.
- Sin parallax que estorbe la lectura y sin destellos.

## Preferencias del usuario

- MXNI es oscuro por defecto. Si el producto ofrece tema claro, guarda la
  elección del usuario y respeta `prefers-color-scheme` como valor inicial.
- Respeta el zoom del navegador hasta 200 % sin perder contenido.
- Soporta `forced-colors` (modo de alto contraste de Windows): los bordes y el
  foco deben seguir visibles.

## Rendimiento

El rendimiento también es experiencia:

- Evita saltos de layout reservando espacio para imágenes y fuentes.
- No bloquees la primera pantalla con animaciones o scripts grandes.
- Muestra estados de carga en operaciones de más de un segundo.

## Validación

- Pruebas automáticas (por ejemplo axe) en cada cambio de UI.
- Recorrido manual con teclado.
- Prueba con un lector de pantalla (NVDA, VoiceOver o TalkBack según el
  público).
