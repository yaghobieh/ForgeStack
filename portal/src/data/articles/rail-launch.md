> **Repository:** [github.com/yaghobieh/rail](https://github.com/yaghobieh/rail) · **Documentation & demos:** [railjs.com](https://railjs.com) · **Interactive Studio:** [railjs.com/studio](https://railjs.com/studio) · **npm:** [@forgedevstack/rail](https://www.npmjs.com/package/@forgedevstack/rail)

There is a peculiar pride in shipping something you *felt* before you could *name* it: the conviction that carousels in real products deserve better than brittle hacks, copy-pasted snippets, and "good enough" sliders that break the moment you need accessibility, touch, or a second row of thumbnails.

Today we're **proud to open-source Rail** — a **modular carousel engine for React** — and to place it squarely in the **ForgeStack** ecosystem alongside **Bear**, our UI kit, and the rest of the tools we actually build with.

This is not a humble brag. It's an invitation: **the code is yours**, the docs are live, and the playground is waiting.

## Why Rail exists (the short, loud version)

Modern interfaces *move*. Hero strips, onboarding tours, story-style sequences, image galleries, and data-heavy carousels are not edge cases — they are the spine of how users scan and decide. Yet the developer experience around "a slider that doesn't embarrass you in production" has lagged behind the rest of the React stack.

**Rail exists because we refused to accept that trade-off.**

We wanted:

- **Physics that feel intentional** — snap, momentum, loop, and responsive breakpoints without sacrificing control.
- **Modularity that scales** — navigation, pagination, autoplay, keyboard, thumbs, virtual slides, and dozens of other concerns as **opt-in modules**, not a monolithic bundle you fight in tree-shaking purgatory.
- **Effects that belong in product UI** — fade, cube, coverflow, Story Mode, and more, when marketing and product actually ask for them.
- **Accessibility as a first-class module**, not a footnote.

Rail is our answer: **opinionated where it matters, composable everywhere else**.

## Part of ForgeStack — and built to sit next to Bear

Rail is **not an island**. It is the **motion layer** in the same story as **Bear** — our React component library for interfaces that need to look and behave like serious software.

- **Bear** gives you structure: buttons, cards, typography, layout, inputs, overlays — the vocabulary of the UI.
- **Rail** gives that UI **motion and narrative**: the carousel in the hero, the gallery beside the form, the story strip above the fold.

We use the same design discipline: **TypeScript-first**, **explicit APIs**, and a path from "demo pretty" to "production boring" (in the best sense — boring because it *works*).

If you already reach for Bear when you start a ForgeStack-flavored app, Rail is the natural companion when the design says *swipe*, *slide*, or *tell a sequence*.

**Bear:** [github.com/yaghobieh/bear](https://github.com/yaghobieh/bear) · [bearui.com](https://bearui.com)

**ForgeStack hub:** [github.com/yaghobieh/ForgeStack](https://github.com/yaghobieh/ForgeStack)

## The portal, the API surface, and Rail Studio

We didn't stop at the package. The **Rail Portal** is the public home for narrative, examples, and deep reference:

- **Site:** [railjs.com](https://railjs.com)
- **Portal source (fork, deploy, theme):** [github.com/yaghobieh/rail-portal](https://github.com/yaghobieh/rail-portal)

Inside the portal, **Rail Studio** is where pride meets play: tweak presets, spacing, effects, and navigation, then **copy production-ready JSX**. No ceremony — just a tight loop between imagination and code.

**Open Studio directly:** [railjs.com/studio](https://railjs.com/studio)

## A taste of the API

Install:

```bash
npm install @forgedevstack/rail
```

Minimal usage (modules are explicit — you only pay for what you import):

```tsx
import { Rail, RailSlide, Navigation, Pagination } from '@forgedevstack/rail';
import '@forgedevstack/rail/styles.css';

export function HeroCarousel() {
  return (
    <Rail
      slidesPerView={1}
      spaceBetween={24}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <RailSlide>Slide 1</RailSlide>
      <RailSlide>Slide 2</RailSlide>
      <RailSlide>Slide 3</RailSlide>
    </Rail>
  );
}
```

The real story is in the **module matrix** — virtual slides for huge lists, thumbs for galleries, autoplay with sane pause rules, and effects when the brand demands drama. That's all documented on [railjs.com](https://railjs.com).

## What we're asking of you

If Rail solves even **one** carousel you were dreading, we've earned the star. If it doesn't yet, **open an issue** — we ship in the open because the next great default behavior probably has your name on the report.

- **Star the repo:** [github.com/yaghobieh/rail](https://github.com/yaghobieh/rail)
- **Try the Studio:** [railjs.com/studio](https://railjs.com/studio)
- **Read the docs:** [railjs.com](https://railjs.com)

*Rail is MIT licensed. Built with conviction, documented with care, released with pride.*
