# Bear UI 1.0.9: 13 New Components, Animation Hooks, and a macOS-Style Dock

**Source and repo:** [github.com/yaghobieh/bear](https://github.com/yaghobieh/bear)

Bear UI is an open-source React component library (TypeScript, Tailwind, BEM). Version 1.0.9 adds thirteen new components, two new hooks, a utility for compound component patterns, and major enhancements to the Carousel. Everything is TypeScript-first, zero or minimal dependencies, and theme-aware. Here is what changed and how we built it.

---

## The Headline Numbers

Thirteen new components. Two new hooks. One new utility. One heavily enhanced existing component. Two type renames with backward-compatible aliases. No breaking changes.

---

## New Components: The Practical Ones

Some of the new components solve problems that come up in almost every project but are surprisingly tedious to build from scratch.

**CodeEditor** is a syntax-highlighted code editor with line numbers, auto-indent, bracket closing, and tab handling. It supports fourteen languages including TypeScript, JavaScript, Python, HTML, CSS, JSON, SQL, and Shell. It has dark and light themes. It has zero dependencies. If you have ever pulled in Monaco or CodeMirror just to show a small editable code block, this is a lighter option.

**Cropper** gives you image cropping with aspect ratio presets, zoom, rotation, a grid overlay, and drag handles. It outputs the cropped image as a data URL. No external canvas library needed.

**Map** is an interactive map component with markers, zoom, and multiple tile providers including OpenStreetMap and CartoDB. Markers support labels, popups, icons, and colors. The viewport can be controlled or uncontrolled. It works with both light and dark themes.

**Masonry** handles responsive masonry layouts with configurable column breakpoints, gap, and auto-balancing. It has zero dependencies and responds to viewport changes.

**Watermark** overlays text or image watermarks on content. It supports multi-line text, rotation, opacity, and font customization. It includes tamper prevention via MutationObserver so the watermark re-renders if someone tries to remove it from the DOM.

---

## New Components: The UI Polish Ones

These are components that give an app personality and polish without much effort.

**Dock** is a macOS-style dock bar. Items magnify on hover with configurable distance. It can sit at the top, bottom, left, or right of the screen. Items support badges, active states, and tooltips. The bar uses glassmorphism for the backdrop.

**Spotlight** is a macOS-style search overlay triggered by Cmd+K (or any shortcut you set). It supports grouped actions with icons and descriptions, search highlighting, and full arrow-key navigation. You can provide a custom filter function. It is theme-aware through CSS variables.

**Marquee** scrolls content horizontally or vertically. It pauses on hover or click, supports gradient edge fading, and lets you configure speed and gap. Useful for partner logos, testimonials, or any repeating content strip.

**Typewriter** types and deletes text with configurable speed, a blinking cursor, and support for looping through multiple strings. It fires callbacks on completion and on each word. The rendered HTML tag is polymorphic so you can use it as a heading, paragraph, or span.

**GradientText** applies animated gradient fills to text. There are ten presets including sunset, ocean, neon, aurora, and midnight. You can also pass custom color arrays. The gradient direction and animation speed are configurable.

**CountdownTimer** counts down from a duration or to a target date. It comes in four visual variants: default, card, flip, and minimal. It fires callbacks on tick and on completion. You can pass a custom render function if the built-in layouts do not fit your design.

---

## New Components: The Animation Ones

**Transition** is a declarative enter and leave transition wrapper. It ships with eleven presets including fade, slide in each direction, scale, rotate, flip, and collapse. You can define custom enter and leave styles, choose whether to unmount on hide, and listen to lifecycle callbacks.

**Motion** is a Framer Motion-inspired animation component built without Framer Motion. It supports initial, animate, and exit states, whileHover and whileTap interactions, custom duration, delay, and easing, and an in-view trigger that starts the animation when the element scrolls into the viewport.

---

## Enhanced: Carousel

The existing Carousel got a significant upgrade. It now supports four transition types: slide, fade, zoom, and flip. Indicator styles expanded to include thumbnails, numbers, and bars alongside the original dots. There is a progress bar for auto-play, a slide counter, keyboard navigation with arrow keys, and mouse drag to navigate. You can customize the active color and transition duration. These are all opt-in props, so existing Carousel usage is unaffected.

---

## New Hooks

**useAnimate** gives you programmatic control over the Web Animations API. It ships with over twenty-five presets including fadeIn, slideInLeft, scaleIn, bounceIn, pulse, shake, swing, rubberBand, tada, wobble, and jello. You can also pass custom keyframes. The hook returns play, pause, cancel, and reverse controls, plus isPlaying and isFinished state.

**useResponsive** resolves responsive prop values based on the current viewport. You pass an object like `{ base: 1, md: 2, lg: 4 }` and the hook returns the correct value for the current breakpoint. There is also a `useResponsiveProps` variant for resolving multiple props at once. It supports base, sm, md, lg, xl, and 2xl breakpoints.

---

## New Utility: createSlots

createSlots enables composable slot-based component patterns similar to Radix UI. You define named sub-components with required and multiple slot configuration. Slots are distributed via context. This utility makes it straightforward to build compound components where the parent controls layout and children fill named regions.

---

## Type Renames

The old type names EmberSize and EmberVariant have been renamed to BearSize and BearVariant. Both old names are still exported as deprecated aliases, so nothing breaks. Update your imports when convenient.

---

## What This Means for Your Projects

If you use Bear UI, upgrading to 1.0.9 is a drop-in update. No breaking changes. You get thirteen new components you can start using immediately without adding external dependencies. The animation components (Transition, Motion, useAnimate) give you a way to add motion to your app without pulling in Framer Motion. The Dock and Spotlight components bring macOS-level polish. The CodeEditor and Map components handle use cases that usually require heavy third-party libraries.

All components follow the same Bear UI patterns: BEM class naming with the Bear prefix, theme-aware styling, TypeScript types in dedicated .types.ts files, constants in .const.ts files, and full dark mode support through the BearProvider.

---

## Getting Started

Install or update:

```
npm install @forgedevstack/bear@latest
```

Use any new component:

```jsx
import { Dock, Spotlight, CodeEditor, Masonry } from '@forgedevstack/bear';
```

Use the new hooks:

```jsx
import { useAnimate, useResponsive } from '@forgedevstack/bear';
```

Bear UI is MIT licensed. Source code: [github.com/yaghobieh/bear](https://github.com/yaghobieh/bear). Documentation and live examples are on the ForgeStack portal.
