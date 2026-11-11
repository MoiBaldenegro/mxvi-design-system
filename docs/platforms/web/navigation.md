---
title: Web — Navegación
---

# Web: navegación

Aplica los patrones de [Navigation](/components/navigation) con las
convenciones del navegador.

## Estructura

| Patrón | Uso en web |
|---|---|
| Barra superior | Destinos principales del sitio o aplicación, logo y acciones globales (búsqueda, cuenta). |
| Sidebar | Secciones dentro de documentación o aplicaciones con muchas áreas. En Compact se convierte en un panel desplegable. |
| Pestañas | Vistas hermanas dentro de un mismo contexto. |
| Breadcrumbs | Ubicación dentro de jerarquías profundas (documentación, catálogos). |
| Paginación | Listas largas cuando el usuario necesita volver a un punto concreto. |

## Reglas

1. **La URL es parte de la navegación.** Cada página y cada estado que el usuario
   querría compartir o recargar (filtros, pestañas, búsqueda) tiene su propia URL.
2. Los botones "atrás" y "adelante" del navegador deben funcionar.
3. Usa `<a href>` para ir a otro lugar y `<button>` para ejecutar acciones.
4. Marca la ubicación actual visualmente y con `aria-current="page"`.
5. Agrupa la navegación principal en un `<nav>` con nombre accesible.
6. Agrega un enlace "Saltar al contenido" al inicio de la página.
7. Los menús no se abren solo con hover; deben abrirse con clic y teclado.

## Navegación en Compact

- Muestra el logo y un botón de menú con nombre accesible ("Menú") y
  `aria-expanded`.
- El menú abierto atrapa el foco mientras está abierto, se cierra con `Escape`
  y devuelve el foco al botón.
- Mantén visibles las acciones críticas (por ejemplo búsqueda) si caben.

## Logo

- El logo en la barra superior enlaza al inicio.
- Usa el SVG oficial con sus colores originales; respeta la zona libre de
  [Logo](/brand/logo).
