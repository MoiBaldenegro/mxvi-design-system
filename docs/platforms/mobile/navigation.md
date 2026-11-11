---
title: Móvil — Navegación
---

# Móvil: navegación

Aplica los patrones de [Navigation](/components/navigation) con las
convenciones de iOS y Android.

## Estructura

| Patrón | Uso en móvil |
|---|---|
| Barra inferior (tab bar / navigation bar) | Destinos principales, de 3 a 5, siempre visibles. Ícono + etiqueta. |
| Pila de navegación | Cada pantalla de detalle se apila sobre la anterior y se vuelve con "atrás". |
| Barra superior | Título de la pantalla, botón atrás y una o dos acciones. |
| Hoja inferior (bottom sheet) | Acciones o detalles secundarios sin salir de la pantalla. |
| Pestañas superiores / segmentos | Vistas hermanas dentro de una pantalla. |
| Riel o panel lateral | Navegación principal en tabletas y plegables abiertos. |

## Reglas

1. La barra inferior no cambia entre pantallas principales; cambiar de destino
   conserva el estado de cada uno.
2. El destino activo se marca con ícono relleno o barra de acento **y** etiqueta,
   no solo con color.
3. "Atrás" siempre funciona: el botón de la barra superior, el gesto de
   deslizar desde el borde en iOS y el botón o gesto del sistema en Android.
4. No escondas destinos principales en un menú hamburguesa si caben en la barra
   inferior.
5. Los enlaces profundos (deep links) abren la pantalla correcta con un "atrás"
   que tenga sentido.
6. Las acciones destructivas o irreversibles no se colocan junto a las de
   navegación.

## Diferencias entre iOS y Android

| Aspecto | iOS | Android |
|---|---|---|
| Atrás | Botón en la barra superior y gesto desde el borde izquierdo | Botón o gesto del sistema; también en la barra superior |
| Título de pantalla | Título grande que se reduce al hacer scroll | Barra superior con título alineado a la izquierda |
| Acción principal | En la barra superior o en la parte inferior del contenido | Botón de acción flotante (FAB) cuando hay una acción dominante |
| Barra inferior | Tab bar | Navigation bar |

Usa la convención de cada plataforma aunque el diseño visual (colores,
tipografía, geometría) sea el mismo MXVI.

## Logo

- El logo aparece en la pantalla de inicio (splash), en "Acerca de" y en el
  ícono de la app; no en cada barra superior.
- Usa el [SVG oficial](/brand/logo) con sus colores originales y su zona libre.
