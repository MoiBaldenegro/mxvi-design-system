---
title: Escritorio — Layout y ventanas
---

# Escritorio: layout y ventanas

## Unidades

Los tokens de MXNI están en px. En escritorio se interpretan como px
independientes de la densidad: el sistema operativo los multiplica por la
escala de pantalla (por ejemplo 125 % o 200 % en Windows, Retina en macOS).
Diseña siempre a escala 100 % y verifica en 150 % y 200 %.

## Tamaño de ventana

La ventana se puede redimensionar; el layout responde a su ancho, no al de la
pantalla.

| Ancho de ventana | Breakpoint MXNI | Layout sugerido |
|---|---|---|
| `< 640 px` | Compact | Una columna; sidebar oculta tras un botón. Solo si la app lo permite. |
| `640–1023 px` | Medium | Sidebar colapsable (solo íconos) + contenido. |
| `1024–1439 px` | Wide | Sidebar + contenido; inspector opcional. |
| `≥ 1440 px` | XL | Sidebar + contenido + inspector visibles. |

**Propuesta:**

- Tamaño mínimo de ventana de `800 × 560 px` para aplicaciones completas; las
  utilidades pequeñas pueden definir el suyo.
- Tamaño inicial de `1280 × 800 px` o el 80 % de la pantalla, lo que sea menor.
- Guardar y restaurar tamaño, posición y estado de maximizado.

## Estructura de la ventana

```text
┌───────────────────────────────────────────────┐
│ Barra de título / barra de herramientas       │
├──────────┬──────────────────────┬─────────────┤
│ Sidebar  │ Contenido principal  │ Inspector   │
│          │                      │ (opcional)  │
├──────────┴──────────────────────┴─────────────┤
│ Barra de estado (opcional)                    │
└───────────────────────────────────────────────┘
```

- **Barra de título:** usa la nativa o una personalizada que respete la
  posición de los controles de ventana del sistema (izquierda en macOS,
  derecha en Windows) y siga siendo arrastrable.
- **Sidebar:** `--mxni-surface`, de `220` a `280 px`; colapsable a solo íconos
  (`56`–`64 px`).
- **Contenido:** `--mxni-bg`, con margen interno `space-6` o `space-8`.
- **Inspector:** `--mxni-surface`, de `280` a `360 px`, ocultable.
- **Barra de estado:** `24`–`28 px`, texto Label o Code, información
  secundaria (sincronización, versión, posición).

Los paneles redimensionables deben tener un divisor visible al hacer hover o
foco, y un tamaño mínimo para que el contenido no se rompa.

## Densidad

| Tipo | Densidad | Alto de fila en listas |
|---|---|---|
| Utilidad o cliente de servicio | Equilibrada | `40 px` |
| Herramienta de productividad | Equilibrada | `32–40 px` |
| Editor / IDE / herramientas técnicas | Compacta | `24–32 px` |

Compacta nunca significa apretada: mantén al menos `space-2` entre elementos
interactivos.

## Tipografía en escritorio

- Body de `14 px` en interfaces de trabajo; `16 px` en contenido de lectura.
- Labels de `12 px`; no bajes de `11 px`.
- Respeta la escala de texto del sistema operativo cuando la plataforma la
  ofrezca.

## Varias ventanas

- Si la app abre varias ventanas, cada una tiene un título claro.
- Los diálogos son ventanas hijas o modales dentro de la ventana, nunca
  ventanas sueltas que se pierdan detrás de otras.
