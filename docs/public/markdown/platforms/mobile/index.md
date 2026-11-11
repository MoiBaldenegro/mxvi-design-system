---
title: Móvil — Resumen
---

# Móvil

Guía de MXNI para aplicaciones instaladas en teléfonos y tabletas iOS o
Android, nativas (SwiftUI, UIKit, Jetpack Compose) o multiplataforma (React
Native, Flutter u otras). Un sitio web abierto en un teléfono sigue la guía
[Web](/platforms/web/) con su layout Compact.

La marca es la misma; la forma de usarla cambia: pantalla pequeña, uso con una
mano, interacción táctil y convenciones fuertes de cada sistema operativo.

## Tipos de producto móvil

| Tipo | Prioridad | Expresión MXNI |
|---|---|---|
| App de uso frecuente | Tareas rápidas y repetidas | Funcional, navegación inferior estable |
| App de contenido / media | Consumir y descubrir | Expresiva, imágenes grandes, alto contraste |
| App de herramientas o datos | Consultar y actuar | Equilibrada, listas y tarjetas claras |
| Compañera de un producto de escritorio | Revisar y aprobar | Subconjunto de funciones, simple |

## Páginas de esta guía

1. [Layout y pantallas](/platforms/mobile/layout)
2. [Navegación](/platforms/mobile/navigation)
3. [Componentes en móvil](/platforms/mobile/components)
4. [Interacción y accesibilidad](/platforms/mobile/interaction)
5. [Checklist de revisión](/platforms/mobile/checklist)

## Contrato para agentes (móvil)

Este bloque es suficiente para trabajos pequeños. Para trabajos grandes, lee la
guía completa o `/llms-mobile.txt`.

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

**Reglas móviles**

1. **Propuesta:** `1 px` de los tokens equivale a `1 pt` en iOS y `1 dp` en
   Android.
2. Objetivos táctiles mínimos de `44 × 44 pt` (iOS) y `48 × 48 dp` (Android).
3. Respeta las áreas seguras (notch, isla dinámica, barra de inicio, barra de
   gestos) y la barra de estado.
4. Navegación principal en la parte inferior (3 a 5 destinos) y pilas de
   navegación con "atrás" del sistema funcionando.
5. Acciones principales al alcance del pulgar.
6. Ningún gesto es la única forma de hacer algo; siempre hay un control visible.
7. No existe hover: toda la información y feedback funcionan con toque.
8. Soporta el tamaño de texto del sistema (Dynamic Type / escala de fuente).
9. Respeta movimiento reducido y lectores de pantalla (VoiceOver, TalkBack).
10. Reporta tokens usados, comportamiento en distintos tamaños y orientaciones,
    accesibilidad y desviaciones.

## Qué no hacer

- Encoger la versión de escritorio o la web de marketing.
- Ignorar las convenciones de iOS o Android para "verse igual" en ambas.
- Poner acciones críticas solo en la parte superior de pantallas grandes.
- Usar texto menor a `12 pt/sp` o controles menores al mínimo táctil.
- Llenar la pantalla de glow y acentos: en pantallas pequeñas saturan rápido.
