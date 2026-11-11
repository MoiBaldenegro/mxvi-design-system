---
title: Escritorio — Navegación
---

# Escritorio: navegación

Aplica los patrones de [Navigation](/components/navigation) con las
convenciones de las aplicaciones de escritorio.

## Estructura

| Patrón | Uso en escritorio |
|---|---|
| Sidebar | Navegación principal entre áreas de la app. Persistente y colapsable. |
| Pestañas | Documentos o vistas abiertas a la vez (como un editor o navegador). Se pueden cerrar y reordenar. |
| Barra de menús | Acceso a todos los comandos. En macOS vive en la barra superior del sistema; en Windows/Linux, dentro de la ventana o en un menú de la aplicación. |
| Paleta de comandos | Búsqueda de comandos y destinos con el teclado (`Ctrl/⌘ + K` o `Ctrl/⌘ + Shift + P`). |
| Menú contextual | Acciones sobre el elemento con clic derecho; siempre duplicadas en otro lugar accesible. |
| Breadcrumbs | Rutas dentro de jerarquías (carpetas, proyectos). |

## Reglas

1. La navegación principal no cambia de lugar entre vistas.
2. Marca claramente la vista y el elemento seleccionados (superficie elevada +
   borde o barra de acento, no solo color).
3. Todo comando de un menú contextual existe también en la barra de menús, la
   paleta de comandos o la interfaz visible.
4. Las acciones frecuentes tienen atajo de teclado y el atajo se muestra junto
   al comando en menús y tooltips.
5. Historial: si la app tiene navegación entre vistas, soporta
   `Alt + ←/→` (Windows/Linux) o `⌘ + [ / ]` (macOS) para atrás y adelante.
6. Restaura la última vista al reabrir la aplicación.

## Atajos de teclado

Respeta los atajos estándar del sistema y no los reasignes:

| Acción | Windows / Linux | macOS |
|---|---|---|
| Nuevo | `Ctrl + N` | `⌘ + N` |
| Abrir | `Ctrl + O` | `⌘ + O` |
| Guardar | `Ctrl + S` | `⌘ + S` |
| Buscar | `Ctrl + F` | `⌘ + F` |
| Deshacer / rehacer | `Ctrl + Z` / `Ctrl + Y` o `Ctrl + Shift + Z` | `⌘ + Z` / `⌘ + Shift + Z` |
| Copiar / pegar | `Ctrl + C` / `Ctrl + V` | `⌘ + C` / `⌘ + V` |
| Preferencias | `Ctrl + ,` | `⌘ + ,` |
| Cerrar ventana o pestaña | `Ctrl + W` | `⌘ + W` |
| Salir | `Alt + F4` / `Ctrl + Q` | `⌘ + Q` |

Muestra los atajos en JetBrains Mono, en `--mxni-text-muted`, alineados a la
derecha en los menús.

## Logo

- El logo aparece en la pantalla de bienvenida, en "Acerca de" y en el ícono
  de la aplicación; no es necesario en la barra de cada ventana.
- Usa el [SVG oficial](/brand/logo) con sus colores originales.
