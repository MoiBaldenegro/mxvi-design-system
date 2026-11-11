---
title: Geometry and effects
---

# Geometría y efectos

## Esquinas: siempre rectas

```css
--radius-square: 0;
```

Es la regla más reconocible de MXVI. Radio **0** en tarjetas, botones,
campos, tags, chips, imágenes, menús, diálogos, marcadores e incluso la barra
de desplazamiento. Las únicas formas redondas son las que vienen dentro de un
logo o ícono.

## Bordes

| Token | Valor | Uso |
|---|---|---|
| `--color-border` | 1px `rgba(255,255,255,.08)` | Tarjetas, campos, tags, divisores |
| `--color-border-strong` | 1px `rgba(255,255,255,.15)` | Navbar, footer, botones de contorno, hover de tarjetas |
| Acento | 1–2px `#B37AC2` | Estados activos, botón principal (2px), badges, kicker |
| Barra de acento | 3–4px `#B37AC2` a la izquierda | Callouts (3px) y citas (4px) |

## Sombras

| Token | Valor | Uso |
|---|---|---|
| `--shadow-card-rest` | `inset 0 1px 0 rgba(255,255,255,.05), 0 18px 40px rgba(0,0,0,.28)` | Tarjetas en reposo |
| `--shadow-card-hover` | `inset 0 1px 0 rgba(255,255,255,.233), 0 25px 60px rgba(0,0,0,.38)` | Tarjetas en hover |
| `--shadow-card` | `0 25px 80px rgba(0,0,0,.35)` | Bloques grandes (perfil, header de artículo, fotos) |
| `--shadow-username` | `0 0 35px rgba(0,170,255,.15)` | Halo del handle |

El brillo `inset` de 1px arriba es lo que da relieve a las superficies sobre
el fondo oscuro.

## Glow

`--color-glow: rgba(108,56,122,.35)`. Aparece en:

- Hover del botón principal: `box-shadow: 0 0 21px var(--color-glow)`.
- Foco de la búsqueda: `box-shadow: 0 0 0 4px var(--color-glow)`.
- Resplandores radiales de los héroes y el footer.
- Halo de fotos e imágenes destacadas (`0 0 48–70px`).
- Sombra de texto de los títulos display (`0 0 32px`).

Nunca en reposo sobre tarjetas comunes.

## Degradados

| Nombre | Definición | Dónde |
|---|---|---|
| Atmósfera hero | radial desde arriba a la derecha: `#3C1F44` 0 % → `#150A18` 35 % → `#05050b` 100 % | Hero Bento |
| Panel de perfil | lineal 160°: `#3C1F44` → `#150A18` 70 % | Encabezado de perfil |
| Header de artículo | lineal 160°: `#3C1F44` → `#150A18` 45 % → `#05050b` + brillo radial del acento al 22 % | Header de artículo |
| Footer | glow radial arriba + lineal `#070716` → `#05050b` | Footer |
| Banda de logo | lineal horizontal `#150A18` → `#3C1F44` → `#150A18` + glow central | Banda de logo |
| Línea de acento | lineal 90°: `#B37AC2` → transparente al 70 % | Borde inferior del header de artículo |
| Brillo superior de tarjeta de marca | lineal 180°: blanco 8 % → transparente al 45 % | Tarjetas de marca |

## Textura

Grano de puntos sobre las atmósferas:

```css
background-image: radial-gradient(color-mix(in srgb, #fff 3%, transparent) 1px, transparent 1px);
background-size: 14px 14px;
```

## Máscaras

- Foto de la tarjeta de perfil: se desvanece de opaca (50 %) a transparente
  (92 %) hacia abajo.
- Imágenes promocionales: aparecen de transparente a opaca en el 22 %
  superior.
