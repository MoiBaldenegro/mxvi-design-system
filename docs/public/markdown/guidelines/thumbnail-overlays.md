---
title: Thumbnail overlays
---

# Thumbnail overlays

## Purpose

MXNI thumbnail overlays are transparent graphic layers placed over or around an existing photograph. They are not complete thumbnail compositions.

## Canvas

- Target: 1280 × 720 px (16:9).
- Export: PNG with real alpha transparency.
- No simulated checkerboard transparency.
- No baked-in photograph.
- No generated title text unless a separate editorial asset explicitly requests it.

## Composition

- Keep the subject's face and important gestures unobstructed.
- Use decorative elements around edges and corners.
- Preserve negative space for title and subject.
- Use modular geometry, technical patterns, and localized lighting.
- The frame must support the photograph, not compete with it.

## Visual families

- Technical: purple + cyan.
- Intelligence: magenta + purple.
- Experimental: cyan + purple.

These are accent families; all remain grounded in the core palette.

## Generation prompt template

```text
Create a reusable MXNI YouTube thumbnail graphic overlay, not a complete thumbnail.

Canvas: 1280x720, 16:9.
Output: transparent PNG with real alpha channel.

Brand direction:
dark technical aesthetic, modular geometric composition,
near-black visual language, electric purple as primary accent,
magenta and cyan as restrained secondary accents.

Composition:
isolated decorative frame elements concentrated near the
outer edges and selected corners. Preserve large transparent
areas for a real photograph, face, and title to be added later.

Do not include:
people, faces, photographs, text, letters, logos, a solid
background, a fake transparency checkerboard, or a complete
thumbnail scene.

The result must be a reusable overlay asset, not a finished thumbnail.
```

## Quality checklist

- [ ] Alpha channel is actually transparent.
- [ ] No text or unintended symbols.
- [ ] Subject-safe areas are preserved.
- [ ] Composition remains legible at small thumbnail size.
- [ ] Colors follow MXNI palette.
- [ ] Export dimensions are 1280 × 720.