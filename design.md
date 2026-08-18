---
version: "alpha"
name: "Echo Lab · Field Acoustic of Space — Zone 04"
description: "Echo Lab, acoustic research. The rate at which a structure diffuses sound, mapped across a dormant chamber."
colors:
  primary: "#D89B3F"
  secondary: "#8FCBB9"
  tertiary: "#1C4A43"
  neutral: "#A9BBB5"
  background: "#111917"
  surface: "#D89B3F"
  text-primary: "#EFE9DC"
  text-secondary: "#8A9E97"
  border: "#8FCBB9"
  accent: "#D89B3F"
typography:
  display-lg:
    fontFamily: "Instrument Serif"
    fontSize: "156.74px"
    fontWeight: 400
    lineHeight: "141.066px"
    letterSpacing: "-0.025em"
    textTransform: "lowercase"
  body-md:
    fontFamily: "Archivo"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  label-md:
    fontFamily: "DM Mono"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "1.2px"
    textTransform: "uppercase"
rounded:
  full: "9999px"
spacing:
  base: "4.8px"
  sm: "0.96px"
  md: "1px"
  lg: "1.28px"
  xl: "2.88px"
  gap: "3px"
  card-padding: "24px"
  section-padding: "24px"
components:
  button-primary:
    backgroundColor: "#0F1614"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "20px"
  card:
    rounded: "0px"
    padding: "16px"
---

## Overview

- **Composition cues:**
  - Layout: Grid
  - Content Width: Full Bleed
  - Framing: Glassy
  - Grid: Strong

## Colors

The color system uses light mode with #D89B3F as the main accent and #A9BBB5 as the neutral foundation.

- **Primary (#D89B3F):** Main accent and emphasis color.
- **Secondary (#8FCBB9):** Supporting accent for secondary emphasis.
- **Tertiary (#1C4A43):** Reserved accent for supporting contrast moments.
- **Neutral (#A9BBB5):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #111917; Surface: #D89B3F; Text Primary: #EFE9DC; Text Secondary: #8A9E97; Border: #8FCBB9; Accent: #D89B3F

- **Gradients:** bg-gradient-to-r from-[#4E9B8A] to-[#D07B3C] via-[#E7C165], bg-gradient-to-br from-[#8FCBB9] to-[#D89B3F] via-[#4E9B8A]

## Typography

Typography pairs Instrument Serif for display hierarchy with Archivo for supporting content and interface copy.

- **Display (`display-lg`):** Instrument Serif, 156.74px, weight 400, line-height 141.066px, letter-spacing -0.025em, lowercase.
- **Body (`body-md`):** Archivo, 12px, weight 400, line-height 24px, letter-spacing 0.1em, uppercase.
- **Labels (`label-md`):** DM Mono, 12px, weight 400, line-height 16px, letter-spacing 1.2px, uppercase.

## Layout

Layout follows a grid composition with reusable spacing tokens. Preserve the grid, full bleed structural frame before changing ornament or component styling. Use 4.8px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a grid / full bleed composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Grid
- **Content width:** Full Bleed
- **Base unit:** 4.8px
- **Scale:** 0.96px, 1px, 1.28px, 2.88px, 4.8px, 5.26px, 8px, 12px
- **Section padding:** 24px, 28px, 32px, 43.88px
- **Card padding:** 24px, 32px, 45.34px
- **Gaps:** 3px, 12px, 16px, 20px

## Elevation & Depth

Depth is communicated through glass, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as glass first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Glass
- **Borders:** 1px #8FCBB9; 1px #D89B3F; 1px #E5E7EB; 1px #E7C165
- **Shadows:** rgba(0, 0, 0, 0.42) 0px 12px 28px 0px; rgba(216, 155, 63, 0.85) 0px 0px 12px 0px; rgba(216, 155, 63, 0.6) 0px 0px 24px 0px
- **Blur:** 12px

### Techniques
- **Gradient border shell:** Use a thin gradient border shell around the main card. Wrap the surface in an outer shell with 1px padding and a 9999px radius. Drive the shell with linear-gradient(to right bottom, rgb(143, 203, 185), rgb(78, 155, 138), rgb(216, 155, 63)) so the edge reads like premium depth instead of a flat stroke. Keep the actual stroke understated so the gradient shell remains the hero edge treatment. Inset the real content surface inside the wrapper with a slightly smaller radius so the gradient only appears as a hairline frame.

## Shapes

Shapes rely on a tight radius system anchored by 9999px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 9999px
- **Icon treatment:** Linear
- **Icon sets:** Solar

## Components

Anchor interactions to the detected button styles. Reuse the existing card surface recipe for content blocks.

### Buttons
- **Primary:** background #0F1614, text #8FCBB9, radius 9999px, padding 20px, border 0px solid rgb(229, 231, 235).

### Cards and Surfaces
- **Card surface:** radius 0px, padding 16px, shadow none.

### Iconography
- **Treatment:** Linear.
- **Sets:** Solar.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 4.8px rhythm.
- Do reuse the Glass surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 9999px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't mix unrelated shadow or blur recipes that break the current depth system.
- Don't exceed the detected moderate motion intensity without a deliberate reason.

## Motion

Motion feels controlled and interface-led across text, layout, and section transitions. Timing clusters around 400ms and 1100ms. Easing favors ease and 0. Scroll choreography uses GSAP ScrollTrigger for section reveals and pacing.

**Motion Level:** moderate

**Durations:** 400ms, 1100ms, 600ms, 11000ms, 7000ms, 500ms

**Easings:** ease, 0, 0.2, 1), cubic-bezier(0, linear

**Scroll Patterns:** gsap-scrolltrigger

## WebGL

Reconstruct the graphics as a full-bleed background field using webgl, dpr clamp, custom shaders. The effect should read as technical, meditative, and atmospheric: dot-matrix particle field with green on black and sparse spacing. Build it from dot particles + soft depth fade so the effect reads clearly. Animate it as slow breathing pulse. Interaction can react to the pointer, but only as a subtle drift. Preserve reduced motion + dom fallback.

**Id:** webgl

**Label:** WebGL

**Stack:** WebGL

**Insights:**
  - **Scene:**
    - **Value:** Full-bleed background field
  - **Effect:**
    - **Value:** Dot-matrix particle field
  - **Primitives:**
    - **Value:** Dot particles + soft depth fade
  - **Motion:**
    - **Value:** Slow breathing pulse
  - **Interaction:**
    - **Value:** Pointer-reactive drift
  - **Render:**
    - **Value:** WebGL, DPR clamp, custom shaders

**Techniques:** Dot matrix, Breathing pulse, Pointer parallax, Shader gradients, DOM fallback

**Code Evidence:**
  - **HTML reference:**
    - **Language:** html
    - **Snippet:**
      ```html
      <!-- Layer 1b: Rising foundry embers -->
      <canvas id="emberCanvas" class="fixed inset-0 z-[6] pointer-events-none w-full h-full"></canvas>

      <!-- Layer 1c: Swinging Bell Section Drawing -->
      ```
  - **JS reference:**
    - **Language:** js
    - **Snippet:**
      ```
      let rafFrozen = false;
      const animLoops = [];
      function loopSchedule(fn) {
          if (rafFrozen) { setTimeout(fn, 40); } else { requestAnimationFrame(fn); }
      }
      function loopStart(fn) { animLoops.push(fn); fn(); }

      let rafProbeFrames = 0;
      …
      ```
  - **Renderer setup:**
    - **Language:** js
    - **Snippet:**
      ```
      // Shared strike clock — drives the shader ring, the logo pulse and the CSS shock ring
      let lastStrikeMs = -1e9;

      const canvas = document.getElementById('modeCanvas');
      const gl = canvas.getContext('webgl');

      if (gl) {
          const vsSource = `
      …
      ```
  - **Animation loop:**
    - **Language:** js
    - **Snippet:**
      ```
      let rafFrozen = false;
      const animLoops = [];
      function loopSchedule(fn) {
          if (rafFrozen) { setTimeout(fn, 40); } else { requestAnimationFrame(fn); }
      }
      function loopStart(fn) { animLoops.push(fn); fn(); }

      let rafProbeFrames = 0;
      ```
