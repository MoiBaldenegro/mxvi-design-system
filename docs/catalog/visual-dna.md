---
title: ADN visual
---

# ADN visual

Estos son los rasgos que hacen que una interfaz se vea MXNI. Si un producto
cumple todos, se ve como [moisesbaldenegro.com](https://moisesbaldenegro.com)
aunque esté hecho en otra tecnología. Si rompe uno, deja de verse MXNI.

## 1. Noche índigo, no negro puro

- Fondo de página `#070716`: casi negro con un tinte índigo.
- Superficies de tarjetas `#101018`, apenas más claras que el fondo.
- Nunca uses `#000000` ni grises neutros para fondos.

## 2. Líneas finas en lugar de cajas pesadas

- Los contenedores se separan con bordes de **1px blanco al 8 %**
  (`rgba(255,255,255,.08)`); los que necesitan más presencia usan **15 %**.
- No hay rellenos de color en las tarjetas ni divisores gruesos.

## 3. Esquinas rectas en todo

- **Radio 0** en tarjetas, botones, campos, tags, imágenes, menús e incluso en
  la barra de desplazamiento. Es la regla más reconocible del sistema.

## 4. Un solo acento: ciruela

- El acento es `#B37AC2` (hover `#C396CF`). Se usa en bordes activos, tags,
  enlaces, el anillo de foco, el subrayado de la navegación y los marcadores.
- El acento ocupa poco espacio: es una señal, no un fondo.
- El azul `#0071e3` existe solo como CTA de las tarjetas promocionales.

## 5. Tres caras de Geist

| Cara | Uso |
|---|---|
| **Geist Pixel (Circle)** | Títulos h1 y h2, enlaces de la navbar, títulos de tarjeta, tags, kicker, búsqueda, etiquetas de columna del footer. Siempre en peso 400, sin negrita sintética. |
| **Geist Sans** | Todo el texto de lectura e interfaz; títulos h3 en 600–800. |
| **Geist Mono** | Código, handles (`@usuario`), metadatos pequeños, barra inferior del footer, ubicación. |

Los títulos de tarjetas y las etiquetas van en **MAYÚSCULAS** con
`letter-spacing: 0.08em`.

## 6. Atmósfera morada en los héroes

- Los bloques principales (hero, header de artículo, perfil, footer, banda de
  logo) llevan un degradado radial que va de `#3C1F44` (ciruela profundo) a
  `#150A18` y `#05050b`.
- Encima, un **grano de puntos** de 1px cada 14px al 3 % de blanco.
- Un **resplandor** radial `rgba(108,56,122,.35)` flota en una esquina.

## 7. Bento de marcas

- El hero es una cuadrícula Bento de 12 columnas con filas de 95px y
  separación de 14px.
- Cada tarjeta de marca tiene el color de su tecnología, un título pequeño en
  mayúsculas arriba a la izquierda y el **logo gigante, rotado y recortado**
  saliendo por la esquina inferior derecha.

## 8. Profundidad sutil

- Tarjetas en reposo: sombra suave con un brillo interior de 1px arriba
  (`inset 0 1px 0 rgba(255,255,255,.05)`).
- Al pasar el mouse: borde de acento o más fuerte, sombra mayor y, en
  tarjetas grandes, elevación de 2–4px.
- El glow morado aparece solo en acciones principales (hover del botón de
  acento) y en el foco de la búsqueda.

## 9. Un ritmo: múltiplos de 14

- La unidad base es **14px**. Separaciones y paddings son múltiplos: 3.5, 7,
  10.5, 14, 21, 28, 35, 42, 56, 70px.
- El contenido vive en un contenedor de `min(1500px, 95%)` centrado.

## 10. Movimiento con una sola curva

- Todas las transiciones duran **0.28s** con `cubic-bezier(.2,.8,.2,1)`.
- Los movimientos son cortos: subrayados que crecen, flechas que se desplazan
  2px, tarjetas que suben 4px.
- Con "reducir movimiento" todo se vuelve instantáneo.

## Señales de que algo NO es MXNI

- Esquinas redondeadas.
- Botones rellenos de morado o degradados en botones.
- Fondos negro puro o grises neutros.
- Títulos en una fuente que no sea Geist Pixel.
- Bordes grises opacos en lugar de blanco translúcido.
- Varias fuentes de acento compitiendo (cian, verde, rosa) fuera de las
  tarjetas de marca.
- Sombras de colores en reposo.
