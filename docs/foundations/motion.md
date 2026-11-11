---
title: Motion
---

# Movimiento

## Una sola curva

```css
--transition-default: .28s cubic-bezier(.2, .8, .2, 1);
```

Todas las transiciones de interfaz (color, borde, sombra, transform,
opacidad) usan esta duración y esta curva: entrada rápida y frenado suave.

## Movimientos del sistema

| Movimiento | Detalle |
|---|---|
| Subrayado de navegación | Barra de 2px que crece de 0 a 100 % del ancho del enlace |
| Elevación de tarjeta de marca | Sube 4px, `contrast(1.4)`; el logo gira de su ángulo a 2° y escala ×1.12 |
| Elevación de tarjeta de proyecto | Sube 2px; la flecha ↗ se mueve 2px arriba y a la derecha |
| Flecha de enlace de tarjeta | Aparece (opacidad 0 → 1) y se desplaza 2px |
| Lupa de búsqueda | Con foco escala ×1.12; con texto y foco "escanea": ciclo de 1.6s con ±3px y ±10° |
| Panel del menú móvil | Fundido + desplazamiento de 8px hacia abajo |
| Resplandor del hero | Flota 6px arriba y abajo en un ciclo de 10s |
| Banda de logo | Las letras suben 4px y escalan ×1.04 |

## Reglas

- Los movimientos son cortos (2–8px) y nunca bloquean la tarea.
- Sin rebotes ni efectos elásticos.
- Con `prefers-reduced-motion: reduce` todas las animaciones y transiciones
  se vuelven instantáneas, sin desplazamientos (incluidas en `base.css` y
  `components.css`).
- Nada parpadea ni destella.
