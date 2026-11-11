---
title: Prompt maestro
---

# Prompt maestro

Copia este bloque al inicio de cualquier tarea de interfaz. Contiene todo lo
necesario para que un agente de IA produzca algo que se vea idéntico a
[moisesbaldenegro.com](https://moisesbaldenegro.com), en cualquier tecnología.
Agrega al final lo que quieres construir.

```text
Diseña siguiendo el design system MXNI. El resultado debe verse idéntico a
moisesbaldenegro.com. Referencia completa:
https://moibaldenegro.github.io/mxvi-design-system/llms-web.txt

LOOK (obligatorio)
- Fondo #070716 (noche índigo). Superficies #101018. Nunca negro puro ni grises.
- Texto #ffffff; secundario #b8b8c5.
- Bordes 1px rgba(255,255,255,.08); bordes fuertes 1px rgba(255,255,255,.15).
- Acento único ciruela #B37AC2, hover #C396CF: bordes activos, tags, enlaces,
  foco, subrayados y marcadores. Nunca como fondo de botones.
- RADIO 0 EN TODO: tarjetas, botones, inputs, tags, imágenes, menús.
- Tipografía Geist:
  · Geist Pixel (Circle), peso 400, sin negrita: h1, h2, enlaces de navbar,
    títulos de tarjeta, tags, kicker, input de búsqueda.
  · Geist Sans: texto e interfaz; h3 en 600–800.
  · Geist Mono: código, @handles, metadatos, barra inferior del footer.
  · Etiquetas y títulos de tarjeta en MAYÚSCULAS con letter-spacing .08em.
- Héroes y footer: degradado radial #3C1F44 → #150A18 → #05050b, grano de
  puntos 1px cada 14px al 3% de blanco y resplandor rgba(108,56,122,.35).
- Unidad de espacio 14px; usa múltiplos (7, 14, 21, 28, 42, 56). Contenedor
  min(1500px, 95%) centrado.
- Sombras: reposo "inset 0 1px 0 rgba(255,255,255,.05), 0 18px 40px rgba(0,0,0,.28)";
  hover "inset 0 1px 0 rgba(255,255,255,.233), 0 25px 60px rgba(0,0,0,.38)".
- Transiciones: .28s cubic-bezier(.2,.8,.2,1). Respeta prefers-reduced-motion.

COMPONENTES
- Navbar sticky de vidrio: fondo rgba(8,8,18,.75) + blur 18px, alto 64px, borde
  inferior 15%. Logo MXNI a la izquierda, enlaces Geist Pixel 0.95rem con
  subrayado de acento de 2px que crece en hover y queda fijo en la página
  actual, búsqueda a la derecha.
- Botón principal: fondo #070716, borde 2px #B37AC2, texto blanco 600; en hover
  borde #C396CF y glow 0 0 21px rgba(108,56,122,.35). Botón secundario: borde
  1px blanco 15%, transparente.
- Tag: texto #B37AC2, borde 1px blanco 8%, padding 4px 12px, Geist Pixel .85rem.
- Tarjeta: fondo #101018, borde 1px blanco 8%, padding 21px o 24px 28px; en
  hover borde de acento.
- Foco: anillo 2px #B37AC2 con separación 2px.
- Footer: degradado + glow, 4 columnas (marca, navegación, últimos, redes) con
  títulos en mayúsculas Geist Pixel y barra inferior en Geist Mono .78rem.

IMPLEMENTACIÓN
- En web, usa la hoja oficial:
  https://moibaldenegro.github.io/mxvi-design-system/mxni/mxni.css
  y las clases .mx-* del catálogo:
  https://moibaldenegro.github.io/mxvi-design-system/catalog/
- En otras tecnologías, reproduce los valores exactos de arriba.
- Accesibilidad WCAG 2.2 AA: HTML semántico, teclado, foco visible, alt en
  imágenes, el color nunca es la única señal.
- Al terminar reporta: componentes del catálogo usados, tokens usados y
  cualquier desviación.

TAREA
<describe aquí lo que quieres construir>
```

## Variantes por plataforma

Cambia la primera URL por el contexto de la plataforma:

| Plataforma | Contexto |
|---|---|
| Web | `/llms-web.txt` |
| Escritorio | `/llms-desktop.txt` |
| Móvil | `/llms-mobile.txt` |

El look es el mismo en las tres; la guía de cada plataforma explica cómo
adaptar navegación, tamaños táctiles y convenciones del sistema operativo.

## Proyecto local

Si descargaste el paquete en tu proyecto (por ejemplo en `docs/mxni/`),
sustituye las URLs por rutas locales:

```text
Sigue el design system MXNI de docs/mxni/. Empieza por docs/mxni/AGENTS.md,
lee docs/mxni/catalog/visual-dna.md y usa docs/mxni/mxni/mxni.css.
```
