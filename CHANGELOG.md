# Changelog

All notable changes to ForgeStack will be documented in this file.

## [2026-02-07] - Portal: Templates, Brand Guide, About & Careers

### Added

#### ForgeStack Portal (forgestack.dev)
- **Templates** – New section and page for project templates (e.g. `npx create-forge my-app --template react`) to start fast.
- **Brand Guide** – Dedicated page for ForgeStack branding and usage.
- **Extensions** – **LintForge** added to extensions list ([Open VSX](https://open-vsx.org/extension/Yaghobieh/lintforge)).
- **About Us** – New page with mission, why we built ForgeStack, and team (John Yaghobieh – main developer, with LinkedIn and GitHub links).
- **Careers** – New page (coming soon).
- **Footer** – John Yaghobieh with link to [LinkedIn](https://www.linkedin.com/in/john-yaghobieh-4baa93107/).

### Changed

#### ForgeStack Portal
- Hero CLI callout updated to emphasize using templates to start fast.

---

## [2026-01-28] - Portal Improvements

### Added

#### Portal
- **LinesOfCode Component** - New component to display lines of code with colored indicator
  - Green (<100 lines), Yellow (<200), Orange (<500), Red (>500)
  - Shows in documentation headers for component size at a glance

### Changed

#### Portal
- **BearDocContent** - Added `linesOfCode` display in documentation headers
- **BEAR_DOCS** - Added `linesOfCode` property to documentation pages (Button, Modal, Drawer, Tooltip, Input, Calendar)

---

## [2026-01-20] - Kiln CLI & Bear Story Files

### Added

#### Kiln (`@forgedevstack/kiln`)
- **CLI Tool** - Run `kiln dev` to start a development server for component stories
  - Automatically discovers `.kiln.tsx`, `.story.tsx`, `.stories.tsx` files
  - Hot module reload for instant updates
  - Configurable port via `kiln.config.json`
  - Dark theme with cyan/teal accent color
  - Tree-like sidebar navigation for components and stories
  - Breakpoint preview buttons (Mobile, Tablet, Desktop, Full)
  - Props controls with editable inputs
  - Code display with copy button
  - Props documentation table

#### Bear (`@forgedevstack/bear`)
- **Kiln Integration** - Added `npm run kiln` command
  - Story files for Avatar, Badge, Button, Card, Modal, Tabs
  - `kiln.config.json` for configuration
  - Stories excluded from build (only for development)
- **Updated Lotso-style Logo** - Improved full-body pink bear with:
  - Characteristic Lotso angry eyebrows
  - Brown eyes with highlights
  - Cream-colored belly and paws
  - Purple gradient nose
  - Sitting position with arms and legs
- **Type Refactoring** - All component types moved to dedicated `.types.ts` files
  - 20+ components now have separate type definitions
  - Clean exports with `export type {}` syntax

---

## [2026-01-20] - Bear UI Library Enhancements

### Changed

#### Bear (`@forgedevstack/bear`)
- **New Lotso-style Logo** - Cute pink teddy bear inspired by Lotso from Toy Story
  - Pink/raspberry fur gradient with soft shadows
  - Rosy cheeks and heart-shaped nose
  - Friendly animated sparkle option
- **Brand Color Update** - Changed from amber to pink (#ec4899) to match new logo

### Added

#### Bear (`@forgedevstack/bear`)
- **MultiSelect Component** - Select multiple options with tags
  - Searchable options list
  - Tag-style selected items with remove buttons
  - Max selections limit
  - Validation and error states
- **Autocomplete Component** - Text input with search suggestions
  - Keyboard navigation (arrow keys, Enter, Escape)
  - Free solo mode for custom values
  - Option descriptions
  - Loading state
- **DataTable Component** - Flexible data table with styling
  - Custom column definitions with accessors and cell renderers
  - Sortable columns with direction indicator
  - Striped and bordered variants
  - Sticky header with scrollable body
  - Loading and empty states
  - Clickable rows
- **Carousel Component** - Sliding content with touch support
  - Auto-play with pause on hover
  - Touch/swipe gesture support
  - Navigation dots and arrows
  - Multiple slides per view
  - Loop mode
- **Accordion Component** - Collapsible content panels
  - Single or multiple open items
  - Animated expand/collapse
  - Disabled state support
- **Tabs Component** - Tabbed interface
  - Line, Pills, and Enclosed variants
  - Disabled tabs support
  - Icon support
- **Avatar Component** - User profile images
  - Initials fallback
  - Status indicator (online/offline/away/busy)
  - Circle, rounded, and square variants
  - AvatarGroup for stacking
- **Progress Component** - Progress bar
  - Multiple colors (success, warning, danger, info)
  - Striped and animated variants
  - Indeterminate loading state
  - Label inside or outside

#### Portal
- Added documentation pages for MultiSelect, Autocomplete, and DataTable
- Live interactive previews for all new components
- **Full-body Bear logo** - Updated to show cute Lotso-style full body teddy bear with arms, legs, belly

---

## [2026-01-20] - Kiln Enhancements & Portal Font Update

### Changed

#### Portal
- **New Developer Font** - Switched to IBM Plex Sans for a cleaner, more technical look
  - Smaller base font size (14px) for developer mode feel
  - Thinner scrollbars (6px)
  - Darker, more subdued color palette
  - Updated to IBM Plex Mono and Fira Code for code blocks

#### Kiln (`@forgedevstack/kiln`)
- **Improved Logo** - Clean, minimal furnace icon with animated flame
- **Controls Panel** - Like Storybook, now shows editable controls for story args
  - Text inputs for string props
  - Number inputs for number props
  - Checkboxes for boolean props
  - Live updates to component preview
- **Docs Tab** - Props documentation table showing:
  - Prop name, type, default value, current value
  - Component description from story group
- **Tab Navigation** - Canvas | Controls | Docs | Code toggle in toolbar
- **Smaller, Tighter UI** - More compact layout with smaller fonts

---

## [2026-01-20] - Portal Updates & New Packages

### Added

#### Portal
- **Mobile Navigation** - Full mobile/tablet responsive support
  - Slide-out drawer for package navigation on mobile
  - Mobile docs dropdown for documentation sections
  - Hamburger menu in navbar
  - All docs layouts (Harbor, Synapse, Grid Table, Anvil) now work on mobile/tablet
  
- **Ember Documentation** - Full docs for the new UI component library
  - Overview, Installation, Theme Provider
  - Button, Card, Grid, Flex, Container, Badge, Spinner, Icons
  - Hooks documentation (useMediaQuery, useDisclosure, useClickOutside)
  - API Reference

- **Spark Documentation** - Added to package listing (docs coming soon)

### New Packages

#### Ember (`@forgedevstack/ember`) - UI Component Library
Beautiful, accessible React UI components. Tailwind-powered, zero config required.

**Features:**
- Theme Provider with hooks (useEmber, useEmberTheme, useEmberMode)
- Light/Dark mode with system preference detection
- Components: Button, Card, Grid, Flex, Container, Badge, Spinner, Icon
- Hooks: useMediaQuery, useIsMobile, useDisclosure, useClickOutside
- Full TypeScript support
- Mobile-first responsive design
- Bundled Tailwind with `ember-` prefix

#### Spark (`@forgedevstack/spark`) - Component Documentation Tool
Lightweight Storybook alternative for documenting and showcasing components.

**Features:**
- Zero-config setup with `spark init`
- `spark.config.json` for customization
- Story file format (.story.tsx, .stories.tsx)
- Live preview canvas with background options
- Code snippets display
- Dark/Light theme toggle
- Search and sidebar navigation
- Minimal bundle size (~15KB)

---

## [2026-01-19] - Anvil Enhancements

### Changed
- Renamed `cn` utility to `styleForge` for better branding
- Updated Anvil brand color to pink (#EC4899)
- New Anvil logo (curly braces with wrench)
- Added framework examples for all utilities (React, Vue, Svelte, Solid, Angular, Vanilla)

### Fixed
- Array, Object, String, Function, Clone utilities now show examples for all frameworks
- Documentation standardized to match Harbor's data-driven pattern

---

## [2026-01-18] - Grid Table & Synapse

### Added
- Grid Table data-driven documentation
- Synapse data-driven documentation
- DevTools documentation with keyboard shortcuts
- Middleware cards with descriptions

---

## [2026-01-17] - Documentation System

### Added
- Data-driven documentation pattern (following Harbor's approach)
- All routes centralized in App.tsx
- Consistent sidebar styling across packages
- Package-specific brand colors in sidebar

---

## Previous Releases

See individual package changelogs for earlier history.

