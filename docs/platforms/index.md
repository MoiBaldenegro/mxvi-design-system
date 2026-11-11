---
title: Plataformas
---

# Plataformas

MXVI es un solo sistema de diseño: los mismos fundamentos, tokens, componentes y
reglas de marca aplican en todas partes. Lo que cambia entre plataformas es
**cómo** se aplican: el espacio disponible, la forma de interactuar, los patrones
de navegación que el usuario espera y las convenciones del sistema operativo.

Cada plataforma tiene una guía completa y autocontenida. Algunas reglas se
repiten a propósito: así una persona o un agente de IA puede trabajar con una
sola guía sin tener que reconstruir el contexto desde otras páginas.

## Elige la plataforma

| Plataforma | Cuándo aplica | Guía | Para un LLM (fetch) | Para un proyecto local |
|---|---|---|---|---|
| **Web** | Sitios, landing pages, documentación y aplicaciones que corren en un navegador. | [Web](/platforms/web/) | [`/llms-web.txt`](/llms-web.txt) | [Descargar Markdown (.zip)](/downloads/mxvi-web-markdown.zip) |
| **Escritorio** | Aplicaciones instaladas en Windows, macOS o Linux (nativas, Electron, Tauri u otras). | [Escritorio](/platforms/desktop/) | [`/llms-desktop.txt`](/llms-desktop.txt) | [Descargar Markdown (.zip)](/downloads/mxvi-desktop-markdown.zip) |
| **Móvil** | Aplicaciones para teléfonos y tabletas iOS o Android (nativas o multiplataforma). | [Móvil](/platforms/mobile/) | [`/llms-mobile.txt`](/llms-mobile.txt) | [Descargar Markdown (.zip)](/downloads/mxvi-mobile-markdown.zip) |

Si un producto existe en varias plataformas, aplica la guía de cada una a su
versión correspondiente. Una aplicación web abierta en el navegador de un
teléfono sigue la guía **Web** (con su layout compacto); la guía **Móvil** es
para aplicaciones instaladas.

## Qué se comparte siempre

- Paleta de marca, colores semánticos y proporciones de uso ([Color](/foundations/colors)).
- Tipografías Geist Sans, Geist Mono y Geist Pixel, y la escala tipográfica ([Typography](/foundations/typography)).
- El [catálogo de componentes](/catalog/) y su [ADN visual](/catalog/visual-dna).
- Escala de espaciado `4–64 px` ([Spacing & layout](/foundations/spacing-layout)).
- Radios, bordes, sombras y glow ([Geometry & effects](/foundations/geometry-effects)).
- Duraciones y principios de movimiento ([Motion](/foundations/motion)).
- Requisitos de accesibilidad ([Accessibility](/foundations/accessibility)).
- Contratos y estados de los componentes ([Components](/components/overview)).
- Logo y firma de marca ([Logo](/brand/logo)).

## Qué cambia por plataforma

| Aspecto | Web | Escritorio | Móvil |
|---|---|---|---|
| Entrada principal | Puntero, teclado y táctil | Puntero preciso y teclado | Táctil y gestos |
| Unidad de diseño | CSS px | px del sistema (escalados por el SO) | pt (iOS) / dp (Android) |
| Layout | Responsivo por breakpoints | Ventanas redimensionables | Pantalla completa, orientación y áreas seguras |
| Navegación | URL, barra superior, sidebar, breadcrumbs | Sidebar, pestañas, menús, paleta de comandos | Barra inferior, pilas de navegación, gesto o botón "atrás" |
| Densidad típica | Espaciosa (marketing) o equilibrada (apps) | Equilibrada o compacta | Equilibrada, con objetivos táctiles grandes |
| Tamaño mínimo de control | 44 × 44 px en táctil | 32 px de alto con puntero | 44 pt (iOS) / 48 dp (Android) |
| Hover | Mejora opcional, nunca requisito | Disponible, nunca única vía | No existe |
| Convenciones a respetar | Navegador y estándares web | Sistema operativo (ventanas, menús, atajos) | Guías de iOS y Android |

## Cómo se usa con agentes de IA

Toda la documentación se puede leer aquí y consumir de dos formas.

### 1. En línea: el agente lee la documentación por fetch

1. Identifica la plataforma del trabajo (web, escritorio o móvil).
2. Pide al agente que lea el contexto de esa plataforma:
   `/llms-web.txt`, `/llms-desktop.txt` o `/llms-mobile.txt`. Cada archivo
   incluye las instrucciones para agentes, los fundamentos, los componentes y
   la guía completa de la plataforma en un solo documento.
3. Para trabajos pequeños, basta con el Markdown de la página **Resumen** de la
   plataforma (por ejemplo `/markdown/platforms/web/index.md`), que contiene un
   contrato compacto con los tokens y reglas clave.
4. Cada página de este sitio tiene su Markdown crudo en
   `/markdown/<ruta>.md`; el enlace está al inicio de la página.

Ejemplo de instrucción para el agente:

```text
Antes de escribir UI, lee https://moibaldenegro.github.io/mxvi-design-system/llms-web.txt
y sigue el design system MXVI. Reporta los tokens usados y cualquier desviación.
```

### 2. Local: la documentación vive dentro del proyecto

1. Descarga el `.zip` de la plataforma (tabla de arriba) y descomprímelo en el
   repositorio, por ejemplo en `docs/mxvi/`.
2. El paquete incluye un `AGENTS.md` que indica qué leer primero, los Markdown
   del núcleo común y los de la plataforma, y su `llms-<plataforma>.txt`.
3. Referencia la carpeta desde las instrucciones de tu agente (por ejemplo en
   el `AGENTS.md` o `CLAUDE.md` del proyecto):

```text
Para cualquier interfaz, sigue el design system MXVI en docs/mxvi/.
Empieza por docs/mxvi/AGENTS.md.
```

Los enlaces que empiezan con `/` dentro de los Markdown apuntan a archivos del
paquete: `/foundations/colors` corresponde a `foundations/colors.md`.

Pide siempre al agente que reporte la plataforma usada y cualquier desviación.

## Estado

Las guías de plataforma son una **propuesta v1.0**. Las decisiones marcadas
como **Propuesta** no existían en los fundamentos y deben validarse en
productos reales antes de considerarse estables.
