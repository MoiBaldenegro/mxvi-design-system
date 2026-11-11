---
title: Escritorio — Componentes
---

# Escritorio: componentes

Los contratos de [Components](/components/overview) aplican igual. Esta página
explica cómo adaptarlos a escritorio.

## Botones

- Alturas: `32` (pequeño, el más común en barras de herramientas), `40`
  (mediano, en formularios y diálogos) y `48 px` (grande, solo en pantallas de
  bienvenida o acciones muy destacadas).
- En diálogos, el orden de los botones sigue la convención del sistema: en
  macOS la acción principal va a la derecha; en Windows, la acción principal
  suele ir primero (a la izquierda del grupo, alineado a la derecha).
- `Enter` ejecuta la acción principal y `Escape` cancela.
- Los botones de solo ícono en barras de herramientas tienen tooltip con el
  nombre y el atajo.

## Campos

- Alto de `32 px` en interfaces compactas y `40 px` en formularios.
- Etiquetas visibles; en formularios anchos pueden ir a la izquierda del campo.
- Valida al salir del campo o al enviar, no en cada tecla.
- Permite copiar, pegar, deshacer y seleccionar texto como en el resto del
  sistema.

## Listas, tablas y árboles

- Selección con clic, `Shift + clic` (rango) y `Ctrl/⌘ + clic` (múltiple).
- Navegación con flechas, `Home`, `End`, `Page Up/Down`.
- Columnas redimensionables y ordenables cuando haya muchos datos.
- Fila seleccionada: `--color-surface` + barra izquierda de 3px `#B37AC2`.
- Números con cifras tabulares; IDs y rutas en Geist Mono.

## Paneles e inspectores

- Usa paneles en lugar de modales para editar propiedades o ver detalles.
- Los paneles se pueden ocultar, redimensionar y recuerdan su estado.

## Feedback

- **Notificaciones del sistema:** solo para eventos que el usuario necesita
  aunque la app esté en segundo plano (descarga terminada, mensaje nuevo).
- **Toasts dentro de la app:** feedback breve; nunca información esencial.
- **Diálogos:** para decisiones que bloquean el trabajo (guardar antes de
  cerrar, borrar). Título, acciones explícitas, `Escape` para cancelar.
- **Progreso:** en la barra de estado o en el propio elemento; la app sigue
  respondiendo durante tareas largas. Si la plataforma lo permite, muestra
  también el progreso en el ícono de la barra de tareas o el Dock.

## Tooltips

- Aparecen al hacer hover o foco, tras un retraso breve (unos `500 ms`).
- Contienen el nombre del control y su atajo.
- Nunca son la única forma de obtener información esencial.

## Menús

- Alto de opción de `28–32 px`.
- Separadores entre grupos; atajos alineados a la derecha.
- Las opciones deshabilitadas se muestran atenuadas, no ocultas, para que el
  usuario sepa que existen.
