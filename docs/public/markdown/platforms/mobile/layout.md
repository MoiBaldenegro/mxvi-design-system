---
title: Móvil — Layout y pantallas
---

# Móvil: layout y pantallas

## Unidades

**Propuesta:** los tokens de MXNI se escriben en px y en móvil se interpretan
como unidades independientes de la densidad: `1 px = 1 pt` en iOS y
`1 px = 1 dp` en Android. El texto en Android usa `sp` para respetar la escala
de fuente del usuario.

| Token | iOS | Android |
|---|---|---|
| `--gap-card` (14 px) | 14 pt | 14 dp |
| `--radius-square` (0) | 0 | 0 |
| Body (16 px) | 16 pt | 16 sp |

## Tamaños de pantalla

| Clase | Ancho aproximado | Layout |
|---|---|---|
| Teléfono | `< 600 pt/dp` | Una columna; navegación inferior. |
| Teléfono grande / plegable abierto | `600–839 dp` | Una o dos columnas; navegación inferior o lateral. |
| Tableta | `≥ 840 dp` o iPad | Dos o tres paneles (lista + detalle); navegación lateral. |

Estos rangos se alinean con las clases de tamaño de iOS y las clases de
tamaño de ventana de Android; consulta la documentación de cada plataforma
para los valores exactos.

## Márgenes y espaciado

- Márgenes laterales de `14` (`--gap-card`) en teléfonos y `21` (× 1.5) en
  tabletas.
- Separación entre secciones de `28` a `42` (× 2 a × 3).
- Separación entre elementos táctiles de al menos `7` (× 0.5).

## Áreas seguras

- El contenido interactivo y el texto nunca quedan debajo del notch, la isla
  dinámica, la barra de estado, la barra de inicio de iOS ni la barra de
  gestos de Android.
- Los fondos sí pueden extenderse bajo esas zonas (de borde a borde).
- La barra de estado usa contenido claro sobre el fondo oscuro de MXNI.

## Orientación

- Los teléfonos funcionan al menos en vertical; si la app soporta horizontal,
  el layout se reorganiza, no solo se estira.
- Las tabletas soportan ambas orientaciones.
- Al rotar o cambiar de tamaño (pantalla dividida, plegables) se conserva el
  estado: scroll, texto escrito y selección.

## Zona del pulgar

```text
┌─────────────────────┐
│  Difícil de alcanzar │  ← títulos, información, acciones poco frecuentes
│                     │
│  Alcanzable         │  ← contenido y acciones secundarias
│                     │
│  Fácil (pulgar)     │  ← navegación y acciones principales
└─────────────────────┘
```

Coloca la navegación principal y la acción principal en el tercio inferior.

## Tipografía en móvil

| Rol | Tamaño sugerido |
|---|---|
| Título de pantalla | `28–34` |
| Título de sección | `20–22` |
| Body | `16` (mínimo `14` en contenido secundario) |
| Label / metadatos | `12` (nunca menos) |

- Las tallas Display (`48–64`) solo en pantallas de bienvenida o portadas.
- El texto debe crecer con Dynamic Type (iOS) o la escala de fuente (Android)
  sin cortarse: permite varias líneas y evita alturas fijas.

## Densidad

Móvil usa densidad equilibrada: la pantalla es pequeña, pero los dedos no. Una
fila de lista mide al menos `48` de alto; las filas con dos líneas, `64` a `72`.
