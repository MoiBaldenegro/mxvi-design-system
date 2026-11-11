---
title: Móvil — Componentes
---

# Móvil: componentes

Los contratos de [Components](/components/overview) aplican igual. Esta página
explica cómo adaptarlos a móvil. Cuando exista un control nativo con mejor
accesibilidad y comportamiento, úsalo y aplícale los tokens de MXNI.

## Botones

- Alto mínimo de `44 pt` (iOS) / `48 dp` (Android); el botón principal usa
  `48`–`56`.
- El botón principal de una pantalla puede ocupar todo el ancho (menos los
  márgenes) y vivir en la zona inferior.
- Un solo botón principal por pantalla.
- Estado presionado visible al tocar (cambio de superficie u opacidad), con
  duración `Fast` (120 ms).
- Radio `radius-md` (6) o `radius-lg` (10) en botones grandes.

## Campos

- Alto mínimo de `48`; texto de `16` para que se lea bien y, en web, para que
  iOS no haga zoom al enfocar.
- Usa el tipo de teclado correcto: correo, teléfono, número, URL, contraseña.
- Activa autocompletado y gestores de contraseñas del sistema.
- La pantalla hace scroll para que el campo enfocado y su error no queden
  debajo del teclado.
- Etiqueta siempre visible; el placeholder no la sustituye.

## Listas

- Filas de al menos `48` de alto; `64`–`72` con dos líneas.
- Toda la fila es el área táctil si lleva a un detalle.
- Las acciones por deslizamiento (swipe) son atajos; la misma acción existe en
  el detalle o en un menú.
- Divisores `--mxni-border` o separación por espacio, no ambos.

## Tarjetas

- Ocupan el ancho disponible menos los márgenes.
- Superficie `--mxni-surface`, borde `--mxni-border`, radio `radius-md` o
  `radius-lg`.
- Si toda la tarjeta es tocable, no lleva otras acciones dentro.

## Hojas inferiores y diálogos

- **Hoja inferior:** opciones y detalles secundarios. Tiene asa o botón de
  cerrar, se descarta deslizando hacia abajo y respeta el área segura inferior.
- **Diálogo / alerta:** solo para decisiones que bloquean (confirmar un
  borrado). Máximo dos o tres acciones con verbos claros.

## Feedback

- **Snackbar / toast:** mensajes breves en la parte inferior, sobre la barra de
  navegación. Pueden llevar una acción ("Deshacer").
- **Indicadores de carga:** esqueletos (skeletons) para contenido; spinner solo
  para acciones cortas.
- **Pull to refresh** en listas que se actualizan, con alternativa visible si la
  actualización es importante.
- **Notificaciones push:** solo con permiso y para información que el usuario
  quiere recibir.
- **Haptics:** con moderación y solo para confirmar acciones significativas.

## Íconos

- Íconos de `24` dentro de un área táctil de `44`/`48`.
- Los íconos solos llevan etiqueta accesible.
- En la barra inferior, ícono + etiqueta visible.
