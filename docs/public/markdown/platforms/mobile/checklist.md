---
title: Móvil — Checklist
---

# Móvil: checklist de revisión

Usa esta lista antes de dar por terminada una interfaz móvil. Los agentes de
IA deben reportar cada punto.

## Marca y tokens

- [ ] Colores, tipografía, espaciado y radios salen de los tokens MXVI
      (px → pt/dp).
- [ ] Los acentos se usan con moderación (5–10 % de la composición).
- [ ] El logo es el SVG oficial con sus colores originales.

## Layout

- [ ] Respeta las áreas seguras y la barra de estado.
- [ ] Funciona en teléfono pequeño, teléfono grande y tableta.
- [ ] Conserva el estado al rotar o cambiar de tamaño.
- [ ] Navegación y acción principal están en la zona del pulgar.

## Navegación

- [ ] La barra inferior tiene de 3 a 5 destinos con ícono y etiqueta.
- [ ] "Atrás" funciona con botón y con el gesto o botón del sistema.
- [ ] Se siguen las convenciones de iOS y de Android en cada versión.
- [ ] Los enlaces profundos llevan a la pantalla correcta.

## Interacción y accesibilidad

- [ ] Objetivos táctiles de `44 pt` (iOS) / `48 dp` (Android).
- [ ] Ningún gesto es la única forma de hacer algo.
- [ ] No hay información solo disponible con hover.
- [ ] El texto crece con la configuración del sistema sin cortarse.
- [ ] Contraste AA verificado; el color no es la única señal.
- [ ] Probado con VoiceOver y TalkBack.
- [ ] Se respeta "Reducir movimiento".

## Robustez

- [ ] Estados sin conexión y de carga definidos.
- [ ] No se pierde lo escrito al salir y volver a la app.

## Reporte del agente

- Plataforma: **móvil** (iOS, Android o ambos; nativo o multiplataforma).
- Tokens usados.
- Componentes y patrones reutilizados.
- Comportamiento en tamaños y orientaciones.
- Consideraciones de accesibilidad.
- Desviaciones o adiciones propuestas.
