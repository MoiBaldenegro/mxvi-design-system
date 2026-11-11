---
title: Thumbnails
---

# Thumbnails

## Purpose

An MXNI thumbnail is a finished, ready-to-upload image built from one real photograph. The photograph is the required input and stays the hero of the composition; MXNI provides the art direction around it.

## Inputs

| Input | Required | Default | Notes |
|---|---|---|---|
| Photograph | Yes | — | Sharp, with the subject's face visible. Short side of at least 720 px. |
| Title | No | None | 2–4 words, up to 24 characters. Without a title, the thumbnail has no text. |
| Accent family | No | Technical | See [Accent families](#accent-families). |

If the photograph is too blurry, too small, or does not show the subject clearly, request another one instead of reconstructing it.

## Output

- Dimensions: 1280 × 720 px (16:9).
- Format: JPG or PNG, sRGB, fully opaque.
- File size: under 2 MB for broad platform compatibility.
- One finished image: no variants collage, mockup, or YouTube interface around it.

## Preserving the photograph

The person in the photograph must remain recognizably the same person.

- Do not alter facial features, face shape, skin tone, age, hair, expression, or body proportions.
- Keep relevant hands, gestures, and held objects complete and unobstructed.
- Correct exposure and color temperature before applying any effect.
- Do not cover the face or eyes with text, geometry, glow, or effects.
- Do not add people, objects, or claims that are not in the photograph or the brief.

## Composition

Measurements refer to the 1280 × 720 px canvas.

| Zone | Rule |
|---|---|
| Subject | 40–50% of the canvas width, anchored to the left or right. May bleed off the bottom and side edges. |
| Face | 35–55% of the canvas height, with the eyes in the upper third. |
| Title | The side opposite the subject, inside the safe margin. |
| Safe margin | 64 px for text and key details. Only the subject and background may bleed past it. |
| Duration badge | Keep the bottom-right 192 × 96 px free of text and faces. The platform overlays the video length there. |

Place the subject on the side that makes them look or point toward the title. Keep one focal point: the face first, the title second, and accents last.

## Background and treatment

- Darken and simplify the original background, or replace it with `#070716` when it is distracting.
- Separate the subject with a soft rim light in the family's primary accent.
- Use one localized gradient glow behind the subject, following [Geometry and effects](/foundations/geometry-effects).
- Limit structure to a discreet dot grain or one or two rectangular modules with square corners, near the edges.
- Keep decoration behind the subject and away from the title.

## Accent families

| Family | Primary accent | Secondary accent |
|---|---|---|
| Technical (default) | Plum `#B37AC2` | Logo orange `#F7941D` |
| Intelligence | Plum `#B37AC2` | Handle cyan `#5fd6ff` |
| Experimental | Logo orange `#F7941D` | Plum `#B37AC2` |

**Proposal:** these families extend the website palette (plum accent, logo
orange and handle cyan) for thumbnails; validate them on real thumbnails.
The secondary accent stays small and never matches the primary in intensity.

## Title

- Font: Geist Sans, weight 800, sentence case, left-aligned, tight line height.
- Size: 104–144 px, in up to 3 lines (see [Proposed addition](#proposed-addition)).
- Color: `--color-text` `#ffffff`. Highlight at most one word with an accent color, and only if it stays legible.
- Darken the area behind the title until the text reaches at least 4.5:1 contrast.
- Use the title exactly as provided. Do not invent, translate, or add words.
- Image models can misspell text. If that happens, generate the thumbnail without a title and set it afterwards in Geist Sans.

## Logo

Do not generate or imitate the MXNI logo. When a logo is needed, composite the official SVG afterwards in a corner away from the duration badge, keeping clear space equal to the height of the letter M.

## Generation prompt template

Attach the photograph and paste the prompt. It works as is; edit the first two lines to add a title or change the family.

```text
TITLE: none
ACCENT FAMILY: Technical

Create a finished MXNI YouTube thumbnail from the attached photograph.

OUTPUT
One complete, fully opaque 1280x720 image (16:9). The photograph is
the hero of the composition. Do not return an overlay, a template, a
mockup, or several variants.

PRESERVE THE PERSON
Keep the person recognizably identical to the photograph: same facial
features, face shape, skin tone, age, hair, expression, and body
proportions. Keep relevant hands, gestures, and held objects complete.
Correct exposure and color temperature naturally. Nothing may cover
the face or eyes.

COMPOSITION
Crop and place the subject on the left or right, occupying 40-50% of
the width, with the face filling 35-55% of the image height and the
eyes in the upper third. The subject may bleed off the bottom and
side edges. Choose the side that makes them look toward the opposite
side. Keep the opposite side calm for the title. Keep a 64 px margin
for text and key details. Keep the bottom-right 192x96 px free of
text and faces. It must read clearly at 168x94 px.

BRAND DIRECTION
Dark, technical, modular, and precise. Darken and simplify the
original background, or replace it with near-black indigo #070716 if it is
distracting. Separate the subject with a soft rim light in the
primary accent. Add one localized gradient glow behind the subject.
Add at most a discreet dot grain and one or two square-cornered
rectangular modules near the edges, always behind the subject.

ACCENT FAMILY
Technical: primary #B37AC2 plum, small secondary #F7941D orange.
Intelligence: primary #B37AC2 plum, small secondary #5fd6ff cyan.
Experimental: primary #F7941D orange, small secondary #B37AC2 plum.
Use only the family selected above. The secondary accent must stay
clearly weaker than the primary.

TITLE
If TITLE is "none", render no text of any kind.
Otherwise, render the TITLE exactly once, spelled exactly as given,
on the side opposite the subject: very large and heavy geometric
sans-serif in the style of Geist ExtraBold, sentence case,
left-aligned, up to 3 lines, color #ffffff, on a background dark
enough for strong contrast. Add no other words.

DO NOT INCLUDE
Changes to the person's identity, additional people, invented text,
logos, watermarks, YouTube interface elements, play buttons, arrows,
emoji, rainbow gradients, generic cyberpunk styling, random circuit
patterns, video-game HUD elements, or glow on every element.
```

## Quality checklist

- [ ] The result is a finished, opaque 1280 × 720 px image under 2 MB.
- [ ] The person is recognizably the same as in the photograph.
- [ ] Face, eyes, and relevant hands are unobstructed.
- [ ] The title matches the brief exactly, or there is no text if none was given.
- [ ] Title contrast reaches at least 4.5:1.
- [ ] The bottom-right duration badge area is clear.
- [ ] Face and title remain legible at 168 × 94 px.
- [ ] Only one accent family is used, with a clear primary accent.
- [ ] There is no generated logo or unintended symbol.

## Proposed addition

The Display token (48–64 px) would shrink to about 8 px at the smallest thumbnail size, so this guideline proposes a media-specific extension:

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `thumbnail-title` | 104–144 px | 800 | Title on a 1280 × 720 px thumbnail |

All other values reuse existing MXNI colors, spacing, and radius tokens.
