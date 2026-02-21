# Reddit-friendly post: Bear UI 1.0.9 (use this for r/reactjs, r/webdev, r/typescript)

**Repo (put this first in your actual Reddit post):** https://github.com/yaghobieh/bear

---

**Suggested title (pick one):**

- We shipped 13 new React components in our UI library (CodeEditor, Dock, Map, Masonry, etc.) – repo and changelog inside
- Open-source React component library update: 13 new components, Web Animations API hook, Carousel overhaul – repo in post
- Built a zero-dependency CodeEditor, macOS-style Dock, and Masonry layout for our React UI lib – source link inside

---

**Suggested post body (frontend-focused, repo first):**

Repo: https://github.com/yaghobieh/bear

We maintain an open-source React UI library (TypeScript, Tailwind, BEM). We just released 1.0.9 with a bunch of new stuff and wanted to share the frontend bits in case it’s useful or sparks discussion.

**New components (13 total):**

- **CodeEditor** – Syntax highlighting, line numbers, 14 languages, no Monaco/CodeMirror. We wanted something lighter for small code blocks and kept it zero-dependency.
- **Masonry** – Responsive columns with breakpoints and auto-balancing, also zero-dependency.
- **Cropper** – Image crop with aspect presets, zoom/rotation, rule-of-thirds grid, outputs data URL.
- **Map** – Leaflet-style use case but our own implementation: markers, popups, tile providers (OSM, CartoDB), controlled/uncontrolled viewport, dark mode.
- **Dock** – macOS-style dock (hover magnification, glassmorphism, badges). Pure CSS + React, no images.
- **Spotlight** – Cmd+K style command palette: grouped actions, search, arrow-key nav, theme via CSS variables.
- **Marquee** – Horizontal/vertical scroll, pause on hover, gradient fade edges.
- **Typewriter** – Typing/deleting text with cursor, multi-string loop, polymorphic tag.
- **GradientText** – Animated gradient text, 10 presets + custom colors/directions.
- **CountdownTimer** – Duration or target date, 4 variants (default, card, flip, minimal), onTick/onComplete.
- **Transition** – Declarative enter/leave with 11 presets (fade, slide, scale, flip, collapse, etc.).
- **Motion** – Framer-like API (initial/animate/exit, whileHover, whileTap, inView) without adding Framer as a dependency.
- **Watermark** – Text/image overlay with MutationObserver to re-apply if someone strips it from the DOM.

**Carousel changes:** Added fade/zoom/flip transitions, thumbnail/number/bar indicators, keyboard + drag, progress bar, and configurable duration. All optional so existing usage doesn’t break.

**New hooks:**

- **useAnimate** – Web Animations API with 25+ presets (fadeIn, slideIn, bounce, shake, etc.) and play/pause/reverse.
- **useResponsive** – Resolves objects like `{ base: 1, md: 2, lg: 4 }` to the current breakpoint value; good for responsive props.

**Other:** A **createSlots** helper for compound components (Radix-style slots). Types renamed from EmberSize/EmberVariant to BearSize/BearVariant with deprecated aliases so nothing breaks.

Everything is MIT, TypeScript-first, and theme-aware. If you have feedback on the API design (e.g. CodeEditor vs Monaco, or the Dock/Spotlight approach), we’re happy to discuss. Changelog and docs are in the repo.

---

**Before you post:**

1. Put the repo link at the very top of the post body (Rule 2).
2. Make sure you’ve been commenting and participating in that sub recently (Rule 1).
3. Reply to technical questions in the thread; that turns it into a discussion, not an ad.
4. If the sub has a “no self-promo” or “show your work” rule, read it and adjust (e.g. some allow “what I built” with repo once per week or in a dedicated thread).
