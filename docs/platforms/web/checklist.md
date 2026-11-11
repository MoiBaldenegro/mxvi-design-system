---
title: Web — Checklist
---

# Web: checklist de revisión

Usa esta lista antes de dar por terminada una interfaz web. Los agentes de IA
deben reportar cada punto.

## Marca y tokens

- [ ] Colores, tipografía, espaciado y radios salen de los tokens `--mxni-*`.
- [ ] Los acentos se usan con moderación (5–10 % de la composición).
- [ ] El logo es el SVG oficial con sus colores originales.
- [ ] No hay valores sueltos sin justificar.

## Layout

- [ ] Funciona en Compact (`< 640 px`), Medium, Wide y XL.
- [ ] No hay scroll horizontal en la página.
- [ ] El orden de lectura es el mismo en todos los tamaños.
- [ ] La densidad corresponde al tipo de producto.

## Navegación

- [ ] Cada página o estado compartible tiene URL.
- [ ] "Atrás" y "adelante" del navegador funcionan.
- [ ] La ubicación actual está marcada (`aria-current`).
- [ ] El menú compacto se abre y cierra con teclado y con `Escape`.

## Accesibilidad

- [ ] Todo es operable con teclado y el foco es visible.
- [ ] Encabezados en orden y landmarks presentes.
- [ ] Campos con etiqueta visible y errores asociados.
- [ ] El color nunca es la única señal de estado.
- [ ] Contraste AA verificado en las combinaciones reales.
- [ ] `prefers-reduced-motion` respetado.
- [ ] Objetivos táctiles de `44 × 44 px` en Compact.

## Reporte del agente

- Plataforma: **web**.
- Tokens usados.
- Componentes y patrones reutilizados.
- Comportamiento responsive.
- Consideraciones de accesibilidad.
- Desviaciones o adiciones propuestas.
