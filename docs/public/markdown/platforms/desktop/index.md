---
title: Escritorio — Resumen
---

# Escritorio

Guía de MXVI para aplicaciones instaladas en Windows, macOS o Linux, ya sean
nativas o construidas con tecnologías web empaquetadas (Electron, Tauri u
otras). La interfaz es la misma marca, pero el usuario espera que la aplicación
se comporte como una aplicación de su sistema operativo.

## Tipos de producto de escritorio

| Tipo | Prioridad | Expresión MXVI |
|---|---|---|
| Herramienta de productividad | Completar tareas rápido | Funcional, densidad equilibrada o compacta |
| Editor / IDE / herramienta técnica | Trabajo prolongado y preciso | Compacta, paneles, mucha información visible |
| Utilidad pequeña | Una tarea concreta | Ventana pequeña, clara y directa |
| Cliente de un servicio (chat, música, etc.) | Uso frecuente y continuo | Equilibrada, navegación estable |

## Páginas de esta guía

1. [Layout y ventanas](/platforms/desktop/layout)
2. [Navegación](/platforms/desktop/navigation)
3. [Componentes en escritorio](/platforms/desktop/components)
4. [Interacción y accesibilidad](/platforms/desktop/interaction)
5. [Checklist de revisión](/platforms/desktop/checklist)

## Contrato para agentes (escritorio)

Este bloque es suficiente para trabajos pequeños. Para trabajos grandes, lee la
guía completa o `/llms-desktop.txt`.

**Look (idéntico a moisesbaldenegro.com)**

- Fondo `#070716`, superficie `#101018`; bordes 1px blanco al 8 % y al 15 %.
- Texto `#ffffff`, secundario `#b8b8c5`.
- Acento único ciruela `#B37AC2` (hover `#C396CF`); nunca como relleno.
- **Esquinas rectas en todo** (radio 0).
- Geist Pixel para títulos, navegación, títulos de tarjeta y tags; Geist Sans
  para texto e interfaz; Geist Mono para código y metadatos.
- Atmósfera de héroes: degradado `#3C1F44` → `#150A18` → `#05050b` con grano
  de puntos y glow `rgba(108,56,122,.35)`.
- Espaciado en múltiplos de `14px`.
- Transición única `.28s cubic-bezier(.2,.8,.2,1)`.
- Detalle completo: [ADN visual](/catalog/visual-dna) y
  [Catálogo](/catalog/).

**Reglas de escritorio**

1. Los valores en px de los tokens son px independientes de la densidad; el
   sistema operativo los escala según la configuración de pantalla.
2. La ventana es redimensionable: define un tamaño mínimo y adapta el layout
   con los mismos breakpoints de [Spacing & layout](/foundations/spacing-layout).
3. Respeta las convenciones del sistema operativo: controles de ventana,
   barra de menús, atajos (`Ctrl` en Windows/Linux, `⌘` en macOS) y menús
   contextuales.
4. Todo es operable con teclado; las acciones frecuentes tienen atajo.
5. El puntero es preciso: los controles pueden ser más compactos (mínimo
   `32 px` de alto), pero el hover nunca es la única vía.
6. Usa paneles y sidebars persistentes en lugar de pantallas que se reemplazan.
7. Recuerda el estado: tamaño y posición de la ventana, paneles abiertos,
   última vista.
8. Respeta las preferencias del sistema: movimiento reducido, alto contraste y
   escala de texto.
9. Objetivo de accesibilidad: el equivalente a WCAG 2.2 AA, usando las APIs de
   accesibilidad del sistema operativo.
10. Reporta tokens usados, comportamiento al redimensionar, atajos,
    accesibilidad y desviaciones.

## Qué no hacer

- Llevar a escritorio una landing page o un layout de marketing.
- Dibujar controles de ventana que imiten los de otro sistema operativo.
- Bloquear la aplicación entera durante tareas largas.
- Usar diálogos modales para todo; prefiere paneles e inspectores.
- Depender de hover o de tooltips para información esencial.
