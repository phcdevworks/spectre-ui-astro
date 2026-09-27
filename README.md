# @phcdevworks/spectre-ui-astro

`@phcdevworks/spectre-ui-astro` is the Astro integration for the Spectre system.
It brings Spectre's design contracts and interface components into Astro
applications through a native, server-rendering-friendly API.

Maintained by [PHCDevworks](https://go.phcdev.co). It depends on
`@phcdevworks/spectre-ui` for its CSS and recipe contracts, so Astro
applications consume Spectre's design system through typed components instead of
hand-rolling markup or styling against the recipes directly.

## Repository Snapshot

| Field                  | Value                           |
| ---------------------- | ------------------------------- |
| Project team           | `project-design`                |
| Repository role        | Spectre L3b Astro adapter       |
| Package/artifact       | `@phcdevworks/spectre-ui-astro` |
| Current version/status | 4.9.0                           |

## Standard Workflow

1. Read [AGENTS.md](AGENTS.md), then the agent-specific guide for the task.
2. Check [TODO.md](TODO.md) and [ROADMAP.md](ROADMAP.md) for current scope.
3. Make the smallest repo-local change that satisfies the task.
4. Run `npm run check` when validation is required or practical.
5. Update docs and [CHANGELOG.md](CHANGELOG.md) only when behavior, public
   contracts, or release-relevant metadata changed.

## Documentation Map

| Guide       | Path                         |
| ----------- | ---------------------------- |
| Agent rules | [AGENTS.md](AGENTS.md)       |
| Claude Code | [CLAUDE.md](CLAUDE.md)       |
| Codex       | [CODEX.md](CODEX.md)         |
| Copilot     | [COPILOT.md](COPILOT.md)     |
| Jules       | [JULES.md](JULES.md)         |
| Roadmap     | [ROADMAP.md](ROADMAP.md)     |
| Todo        | [TODO.md](TODO.md)           |
| Changelog   | [CHANGELOG.md](CHANGELOG.md) |
| Security    | [SECURITY.md](SECURITY.md)   |

[![npm version](https://img.shields.io/npm/v/@phcdevworks/spectre-ui-astro)](https://www.npmjs.com/package/@phcdevworks/spectre-ui-astro)
[![CI](https://github.com/phcdevworks/spectre-ui-astro/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/phcdevworks/spectre-ui-astro/actions/workflows/ci.yml)
[![License](https://img.shields.io/npm/l/@phcdevworks/spectre-ui-astro)](LICENSE)
[![Node](https://img.shields.io/node/v/@phcdevworks/spectre-ui-astro)](https://nodejs.org)

Astro-native components for the
[Spectre UI](https://github.com/phcdevworks/spectre-ui) design system. Drop
Spectre components into any Astro project — SSR, SSG, or hybrid — without
writing CSS, redefining tokens, or reimplementing recipe logic.

[Contributing](CONTRIBUTING.md) | [Code of Conduct](CODE_OF_CONDUCT.md) |
[Changelog](CHANGELOG.md) | [Roadmap](ROADMAP.md) |
[Security Policy](SECURITY.md)

## What Astro Developers Get

- **Forty-seven ready-to-use Astro components** — alerts, avatars, badges,
  buttons, cards, app shell layout, forms, navigation, overlays, feedback,
  pricing, ratings, and testimonials
- **SSR-safe by default** — deterministic markup, no client-side JavaScript,
  stable accessibility wiring
- **Thin wrapper pattern** — styling comes entirely from
  `@phcdevworks/spectre-ui`; this package adds Astro slots, typed props, and
  framework ergonomics
- **Re-exported recipe helpers** — use the same class functions the components
  use, directly from your Astro frontmatter or TypeScript

## What This Package Owns

- Astro-native component delivery for Spectre UI recipes and classes
- Astro-friendly, SSR-safe component interfaces and composition patterns
- Type-safe framework bindings for the upstream Spectre UI contract
- Adapter-level ergonomics that make `@phcdevworks/spectre-ui` straightforward
  to consume in Astro projects
- A reference implementation for future Spectre framework adapters

Golden rule: bind the upstream Spectre UI contract for Astro, do not redefine
it.

## What This Package Does Not Own

- Design values or token meaning —
  [`@phcdevworks/spectre-tokens`](https://github.com/phcdevworks/spectre-tokens)
- Core CSS, utilities, or class recipe logic —
  [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui)
- Local styling systems that diverge from the shared Spectre contract

## When To Use This Package

Use `@phcdevworks/spectre-ui-astro` when:

- you are building an Astro project and want Spectre UI components as
  first-class Astro components
- you need SSR-safe, type-safe component interfaces that bind the upstream
  `@phcdevworks/spectre-ui` recipe contract without reimplementing it
- you want to compose with Spectre's shared recipe helpers from TypeScript in an
  Astro project

## When Not To Use This Package

Do not use this package when:

- you are using a different framework (React, Vue, Svelte, etc.) — this package
  is Astro-only
- you want to define custom tokens or override Spectre's design values — that
  belongs in `@phcdevworks/spectre-tokens`
- you want to add or change class recipes or CSS utilities — that belongs in
  `@phcdevworks/spectre-ui`
- you need a framework-agnostic styling contract — consume
  `@phcdevworks/spectre-ui` directly

## Installation

```bash
npm install @phcdevworks/spectre-ui-astro @phcdevworks/spectre-ui
```

`@phcdevworks/spectre-ui` is a required peer dependency. It owns the CSS, class
recipes, and design system behavior that powers every component in this package.
Install this package inside an Astro project; `astro` is also a peer dependency
supplied by the consuming app.

Spectre no longer ships a Tailwind CSS integration. Use the precompiled
`@phcdevworks/spectre-ui` CSS entry points and recipe helpers shown below.

If your project works with Spectre design tokens directly:

```bash
npm install @phcdevworks/spectre-tokens
```

## CSS Setup

This package ships no CSS. Add the Spectre UI stylesheet once in your Astro
layout:

```astro
---
// src/layouts/BaseLayout.astro
import '@phcdevworks/spectre-ui/index.css'

interface Props {
  title?: string
}
const { title = 'My Astro site' } = Astro.props
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

All Spectre components pick up the stylesheet through the layout. Do not import
it per-component — CSS ownership stays with `@phcdevworks/spectre-ui`.

## Quick Start

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import {
  SpAccordion,
  SpAccordionItem,
  SpAlert,
  SpAvatar,
  SpBadge,
  SpButton,
  SpBreadcrumb,
  SpCard,
  SpCardBleed,
  SpCarousel,
  SpCarouselIndicator,
  SpCarouselSlide,
  SpCheckbox,
  SpChoiceCard,
  SpContainer,
  SpDatepicker,
  SpDay,
  SpDisplay,
  SpDropdown,
  SpDropdownDivider,
  SpDropdownHeader,
  SpDropdownItem,
  SpDropdownMenu,
  SpExternalAuthButton,
  SpFieldset,
  SpFileInput,
  SpFooter,
  SpFooterChip,
  SpFooterDivider,
  SpFooterHeading,
  SpFooterLink,
  SpFooterLinks,
  SpFooterText,
  SpGrid,
  SpHeading,
  SpIconBox,
  SpInput,
  SpInputGroup,
  SpInputGroupAddon,
  SpLabel,
  SpLead,
  SpListGroup,
  SpListGroupItem,
  SpModal,
  SpNav,
  SpNavItem,
  SpNavLinks,
  SpOffcanvas,
  SpPagination,
  SpPopover,
  SpPricingCard,
  SpProgress,
  SpProse,
  SpRadio,
  SpRange,
  SpRating,
  SpSection,
  SpSelect,
  SpSidebar,
  SpSidebarGroup,
  SpSidebarHeader,
  SpSidebarLink,
  SpSidebarToggle,
  SpSpinner,
  SpStack,
  SpStepper,
  SpSwitch,
  SpTableRow,
  SpTabPanel,
  SpTable,
  SpTabs,
  SpTag,
  SpTestimonial,
  SpText,
  SpTextarea,
  SpToast,
  SpTooltip
} from '@phcdevworks/spectre-ui-astro'
---

<BaseLayout title="My page">
  <SpCard variant="elevated">
    <SpIconBox variant="primary" size="md">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l7 4v12l-7 4-7-4V6l7-4z" fill="currentColor" />
      </svg>
    </SpIconBox>

    <SpBadge variant="success" size="sm">Stable</SpBadge>
    <h2>Build faster with Spectre</h2>
    <SpButton variant="primary" size="lg">Get started</SpButton>
  </SpCard>

  <SpInput
    id="email"
    label="Email"
    name="email"
    type="email"
    placeholder="you@example.com"
    helperText="We will never share your email."
  />

  <SpPricingCard featured>
    <h3 slot="header">Pro</h3>
    <span slot="price">$29/mo</span>
    <span slot="description">For growing teams.</span>
    <SpButton variant="primary" fullWidth>Choose plan</SpButton>
  </SpPricingCard>
</BaseLayout>
```

## Components

All components are SSR-safe. Styling comes from the upstream Spectre UI
stylesheet — this package adds no local CSS. Every component accepts a `class`
prop for additional classes and spreads unknown props onto the root element.
`SpSidebar` is the one exception to "no client-side JavaScript": it owns the
toggle/backdrop-close interaction for its off-canvas drawer behavior, rendering
closed by default with no layout shift on hydration.

---

### SpButton

| Prop         | Type                                         | Default    | Description                                                                                                  |
| ------------ | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ |
| `variant`    | `ButtonVariant`                              | —          | Visual style: `"primary"` `"secondary"` `"ghost"` `"inverse"`                                                |
| `size`       | `ButtonSize`                                 | —          | Size: `"sm"` `"md"` `"lg"`                                                                                   |
| `as`         | `"button" \| "a" \| "span" \| "div" \| "li"` | `"button"` | Rendered element                                                                                             |
| `href`       | `string`                                     | —          | URL when `as="a"`                                                                                            |
| `type`       | `"button" \| "submit" \| "reset"`            | `"button"` | Button type (button elements only)                                                                           |
| `disabled`   | `boolean`                                    | —          | Disables the element; suppresses navigation on anchors                                                       |
| `loading`    | `boolean`                                    | —          | Loading state; implies `disabled`                                                                            |
| `fullWidth`  | `boolean`                                    | —          | Stretches to fill its container                                                                              |
| `iconOnly`   | `boolean`                                    | —          | Removes text padding for icon-only buttons                                                                   |
| `pill`       | `boolean`                                    | —          | Fully rounded corners                                                                                        |
| `compact`    | `boolean`                                    | —          | Shrinks the visible box below the min touch target; an invisible `::after` preserves the accessible hit area |
| `hovered`    | `boolean`                                    | —          | Force-applies hover styling                                                                                  |
| `focused`    | `boolean`                                    | —          | Force-applies focus styling                                                                                  |
| `active`     | `boolean`                                    | —          | Force-applies active styling                                                                                 |
| `aria-label` | `string`                                     | —          | Accessible label                                                                                             |
| `tabindex`   | `number`                                     | —          | Tab index override                                                                                           |
| `class`      | `string`                                     | —          | Additional CSS classes                                                                                       |

```astro
<SpButton variant="primary" size="lg">Get started</SpButton>
<SpButton variant="ghost" as="a" href="/docs">Read docs</SpButton>
<SpButton variant="primary" type="submit">Save</SpButton>
<SpButton variant="primary" loading>Saving…</SpButton>
<SpButton variant="secondary" as="a" href="/item" disabled>Unavailable</SpButton>
```

---

### SpCard

| Prop          | Type                                                                         | Default   | Description                                                           |
| ------------- | ---------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------- |
| `variant`     | `CardVariant`                                                                | —         | Visual style: `"elevated"` `"outline"` `"flat"` `"ghost"`             |
| `as`          | `"div" \| "section" \| "article" \| "aside" \| "a" \| "button" \| "li" \| …` | `"div"`   | Rendered element                                                      |
| `interactive` | `boolean`                                                                    | —         | Adds hover/focus styles; adds `role="button"` for non-native elements |
| `padded`      | `boolean \| "sm" \| "md" \| "lg"`                                            | —         | Applies inner padding                                                 |
| `accent`      | `CardAccentEdge`                                                             | —         | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"`           |
| `accentColor` | `CardAccentColor`                                                            | `"brand"` | Rail color, used when `accent` is set                                 |
| `fullHeight`  | `boolean`                                                                    | —         | Stretches to full container height                                    |
| `disabled`    | `boolean`                                                                    | —         | Disables the card; suppresses navigation on anchors                   |
| `loading`     | `boolean`                                                                    | —         | Loading state                                                         |
| `href`        | `string`                                                                     | —         | URL when `as="a"`                                                     |
| `aria-label`  | `string`                                                                     | —         | Accessible label                                                      |
| `class`       | `string`                                                                     | —         | Additional CSS classes                                                |

```astro
<SpCard variant="elevated">
  <h2>Card title</h2>
  <p>Card content goes here.</p>
</SpCard>

<!-- Semantic article markup -->
<SpCard variant="outline" as="article">
  <h2>Blog post title</h2>
</SpCard>

<!-- Linked card -->
<SpCard variant="elevated" as="a" href="/post/1" interactive aria-label="Read post">
  <h2>Clickable card</h2>
</SpCard>

<!-- Accent rail -->
<SpCard variant="outline" accent="left" accentColor="success">
  <h2>Highlighted card</h2>
</SpCard>
```

The default slot renders any child content.

`SpCard` does not have a dedicated bleed slot. For a child (media, a flush
internal surface) that should run through the card's padding on one or more
edges, style it directly with the re-exported `getCardBleedClasses` helper:

```astro
---
import { SpCard, getCardBleedClasses } from '@phcdevworks/spectre-ui-astro'

const bleedClass = getCardBleedClasses({ edges: 'top', padded: 'md' })
---

<SpCard padded="md">
  <img class={bleedClass} src="/media/hero.jpg" alt="" />
  <p>Card body content, still padded normally.</p>
</SpCard>
```

---

### SpContainer

| Prop         | Type                                                   | Default | Description                                                            |
| ------------ | ------------------------------------------------------ | ------- | ---------------------------------------------------------------------- |
| `maxWidth`   | `ContainerMaxWidth`                                    | —       | `"prose"` bounds content to a readable line length; `"wide"` widens it |
| `padding`    | `ContainerPadding`                                     | —       | Inline padding step: `"sm"` `"md"` `"lg"`; omission keeps the default  |
| `as`         | `"div" \| "section" \| "main" \| "article" \| "aside"` | `"div"` | Rendered element                                                       |
| `id`         | `string`                                               | —       | Element id                                                             |
| `aria-label` | `string`                                               | —       | Accessible label                                                       |
| `class`      | `string`                                               | —       | Additional CSS classes                                                 |

```astro
<SpContainer>
  <p>Centered, max-width content.</p>
</SpContainer>

<SpContainer as="main" aria-label="Main content">
  <p>Semantic main wrapper.</p>
</SpContainer>

<SpContainer maxWidth="prose">
  <p>Bounded to a readable line length.</p>
</SpContainer>
```

The default slot renders any child content.

---

### SpStack

| Prop         | Type                                          | Default      | Description                                       |
| ------------ | --------------------------------------------- | ------------ | ------------------------------------------------- |
| `direction`  | `StackDirection`                              | `"vertical"` | `"vertical"` \| `"horizontal"`                    |
| `basis`      | `StackBasis`                                  | —            | `"sidebar"` gives the stack a fixed sidebar width |
| `align`      | `StackAlign`                                  | `"center"`   | `"center"` \| `"stretch"` cross-axis alignment    |
| `gap`        | `StackGap`                                    | `"md"`       | `"sm"` \| `"md"` \| `"lg"` spacing between items  |
| `as`         | `"div" \| "section" \| "ul" \| "ol" \| "nav"` | `"div"`      | Rendered element                                  |
| `id`         | `string`                                      | —            | Element id                                        |
| `aria-label` | `string`                                      | —            | Accessible label                                  |
| `class`      | `string`                                      | —            | Additional CSS classes                            |

```astro
<SpStack>
  <p>Item one</p>
  <p>Item two</p>
</SpStack>

<SpStack direction="horizontal" as="nav" aria-label="Primary">
  <a href="/">Home</a>
  <a href="/about">About</a>
</SpStack>

<SpStack direction="horizontal" basis="sidebar">
  <p>Fixed-width sidebar-shaped flex child.</p>
</SpStack>

<SpStack direction="horizontal" align="stretch">
  <SpSidebar>...</SpSidebar>
  <main>Stretches to match the sidebar's height.</main>
</SpStack>

<SpStack gap="lg">
  <p>Item one</p>
  <p>Item two</p>
</SpStack>
```

The default slot renders any child content.

---

### SpSection

| Prop         | Type                                                   | Default     | Description                                                            |
| ------------ | ------------------------------------------------------ | ----------- | ---------------------------------------------------------------------- |
| `spacing`    | `SectionSpacing`                                       | —           | Block padding step: `"sm"` `"md"` `"lg"`; omission keeps the default   |
| `gap`        | `SectionGap`                                           | —           | Stacks direct children with the section gap step: `"sm"` `"md"` `"lg"` |
| `as`         | `"section" \| "div" \| "article" \| "aside" \| "main"` | `"section"` | Rendered element                                                       |
| `id`         | `string`                                               | —           | Element id                                                             |
| `aria-label` | `string`                                               | —           | Accessible label                                                       |
| `class`      | `string`                                               | —           | Additional CSS classes                                                 |

```astro
<SpSection aria-label="Features">
  <SpContainer>
    <h2>Features</h2>
  </SpContainer>
</SpSection>
```

The default slot renders any child content.

---

### SpText

| Prop        | Type                                                            | Default | Description                                                                          |
| ----------- | --------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------ |
| `as`        | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "span"` | `"p"`   | Rendered element                                                                     |
| `size`      | `TextSize`                                                      | —       | Upstream type scale                                                                  |
| `variant`   | `TextVariant`                                                   | —       | Upstream color role, including `"onInverse"`/`"onInverseMuted"` for on-dark surfaces |
| `family`    | `TextFamily`                                                    | —       | Upstream font family                                                                 |
| `transform` | `TextTransform`                                                 | —       | `"none"` \| `"uppercase"` \| `"lowercase"` \| `"capitalize"`                         |
| `id`        | `string`                                                        | —       | Element id                                                                           |
| `class`     | `string`                                                        | —       | Additional CSS classes                                                               |

```astro
<SpText as="h2" size="2xl" variant="brand">Section heading</SpText>
<SpText variant="muted">Supporting copy.</SpText>
<SpText as="span" transform="uppercase" size="sm">Eyebrow label</SpText>
```

The default slot renders any child content. `SpText` maps directly to
`getTextClasses` — there is no separate `SpHeading` component; use the `as` prop
to render any heading level or `p`/`span`.

---

### SpSidebar

| Prop          | Type                        | Default            | Description                                                                                       |
| ------------- | --------------------------- | ------------------ | ------------------------------------------------------------------------------------------------- |
| `bordered`    | `boolean`                   | —                  | Applies a right border                                                                            |
| `as`          | `"aside" \| "div" \| "nav"` | `"aside"`          | Rendered element for the sidebar itself                                                           |
| `id`          | `string`                    | —                  | Element ID for the sidebar                                                                        |
| `aria-label`  | `string`                    | —                  | Accessible label for the sidebar                                                                  |
| `toggleLabel` | `string`                    | `"Toggle sidebar"` | Accessible label for the hamburger toggle button                                                  |
| `hideToggle`  | `boolean`                   | `false`            | Suppresses the built-in toggle button, e.g. when placing `SpSidebarToggle` inside `SpNav` instead |
| `class`       | `string`                    | —                  | Additional CSS classes for the sidebar                                                            |

`SpSidebar` is the first adapter component to own interactive state. It renders
a wrapper element with `data-sidebar-open="false"` (closed by default,
SSR-safe), a hamburger toggle button, a backdrop element
(`getSidebarBackdropClasses`), and the sidebar element itself
(`getSidebarClasses`). Below `breakpoints.md` (768px), upstream
`@phcdevworks/spectre-ui` CSS renders the sidebar off-canvas; toggling the
button or tapping the backdrop flips `data-sidebar-open`, which upstream CSS
reacts to. Above `breakpoints.md`, the sidebar docks inline and the toggle has
no visible effect, matching the upstream CSS contract.

To integrate the hamburger toggle into a top `SpNav` bar instead of leaving it
next to the off-canvas sidebar, pass `hideToggle` to `SpSidebar` and render
`SpSidebarToggle` inside `SpNav`, pointing its `for` prop at the sidebar's `id`:

```astro
<SpNav bordered sticky fullWidth>
  <SpSidebarToggle for="docs-sidebar" />
</SpNav>

<SpSidebar id="docs-sidebar" hideToggle bordered aria-label="Primary">
  ...
</SpSidebar>
```

Both buttons (the built-in one and `SpSidebarToggle`) share the same
`.sp-sidebar-toggle` styling, so they always match the current theme via
`--sp-component-sidebar-toggle-*` tokens.

Build sidebar nav groups in the default slot using `SpSidebarLink` for each link
and the re-exported `getSidebarHeaderClasses` helper for section headers, since
section headers are consumer-driven.

```astro
---
import { SpSidebar, SpSidebarLink, getSidebarHeaderClasses } from '@phcdevworks/spectre-ui-astro'

const headerClass = getSidebarHeaderClasses()
---

<SpSidebar bordered aria-label="Primary">
  <span class={headerClass}>Guides</span>
  <SpSidebarLink href="/" active>Home</SpSidebarLink>
  <SpSidebarLink href="/about">About</SpSidebarLink>
  <SpSidebarLink href="/about/team" level="child">Team</SpSidebarLink>
</SpSidebar>
```

---

### SpSidebarLink

| Prop         | Type               | Default    | Description                                               |
| ------------ | ------------------ | ---------- | --------------------------------------------------------- |
| `href`       | `string`           | —          | Link target; suppressed when `disabled`                   |
| `active`     | `boolean`          | `false`    | Marks the link current (`aria-current="page"`)            |
| `disabled`   | `boolean`          | `false`    | Suppresses `href`, sets `aria-disabled` and `tabindex=-1` |
| `hovered`    | `boolean`          | `false`    | Forces hover-state classes                                |
| `focused`    | `boolean`          | `false`    | Forces focus-state classes                                |
| `level`      | `SidebarLinkLevel` | `"parent"` | `"parent"` \| `"child"` — indents nested links            |
| `id`         | `string`           | —          | Element id                                                |
| `title`      | `string`           | —          | Native title attribute                                    |
| `aria-label` | `string`           | —          | Accessible label                                          |
| `class`      | `string`           | —          | Additional CSS classes                                    |

`SpSidebarLink` renders a single `<a>`, backed by `getSidebarLinkClasses`. The
`level` option indents nested links under a section header.

---

### SpSidebarToggle

| Prop    | Type     | Default            | Description                                  |
| ------- | -------- | ------------------ | -------------------------------------------- |
| `for`   | `string` | —                  | Required `id` of the `SpSidebar` to control  |
| `label` | `string` | `"Toggle sidebar"` | Accessible label for the toggle button       |
| `class` | `string` | —                  | Additional CSS classes for the toggle button |

`SpSidebarToggle` renders a button that can live outside `SpSidebar`, such as
inside `SpNav`. Its `for` prop must match the target sidebar's `id`. The sidebar
wiring binds again after Astro client-side navigation so newly swapped sidebar
shells remain interactive.

---

### SpGrid

| Prop               | Type                                  | Default | Description                                                                                                                                                                |
| ------------------ | ------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columns`          | `GridColumns`                         | `1`     | `1` \| `2` \| `3` \| `4` \| `6` \| `12`                                                                                                                                    |
| `gap`              | `GridGap`                             | `"md"`  | `"sm"` \| `"md"` \| `"lg"`                                                                                                                                                 |
| `columnGap`        | `GridGap`                             | —       | Column-axis gap override                                                                                                                                                   |
| `rowGap`           | `GridGap`                             | —       | Row-axis gap override                                                                                                                                                      |
| `span`             | `GridSpan \| GridSpanOptions`         | —       | Column span for a grid item: a single value or `{ base?, md?, lg? }` per breakpoint                                                                                        |
| `offset`           | `GridOffset \| GridOffsetOptions`     | —       | Column offset for a grid item: `0`-`11` or `{ base?, md?, lg? }`                                                                                                           |
| `colStart`         | `GridColStart \| GridColStartOptions` | —       | Explicit starting column line for a grid item: `1`-`12` or `{ base?, md?, lg? }`                                                                                           |
| `rowSpan`          | `GridSpan \| GridSpanOptions`         | —       | Row span for a grid item, same shape as `span`                                                                                                                             |
| `rowOffset`        | `GridOffset \| GridOffsetOptions`     | —       | Row offset for a grid item, same shape as `offset`                                                                                                                         |
| `order`            | `GridOrder \| GridOrderOptions`       | —       | Visual order for a grid item: `"first"` \| `"last"` \| `"none"` \| `1`-`12`, or per breakpoint                                                                             |
| `align`            | `GridAlign`                           | —       | `"start"` \| `"center"` \| `"end"` \| `"baseline"` \| `"stretch"` cross-axis cell alignment                                                                                |
| `leadingTracks`    | `GridLeadingTracksOptions`            | —       | `{ weight }` — proportional leading-track sizing without hand-rolled `grid-template-columns`                                                                               |
| `fixedTracks`      | `GridFixedTracksOptions`              | —       | `{ count }` — fixed track count for custom track layouts                                                                                                                   |
| `explicitTemplate` | `GridExplicitTemplateOptions`         | —       | `{ template, weight? }` — named asymmetric column template (`"edge-fluid-edge"` \| `"label-fluid-fluid"`); mutually exclusive with `columns`/`leadingTracks`/`fixedTracks` |
| `as`               | `"div" \| "section" \| "ul" \| "ol"`  | `"div"` | Rendered element                                                                                                                                                           |
| `id`               | `string`                              | —       | Element id                                                                                                                                                                 |
| `aria-label`       | `string`                              | —       | Accessible label                                                                                                                                                           |
| `class`            | `string`                              | —       | Additional CSS classes                                                                                                                                                     |

```astro
<SpGrid columns={3} gap="lg">
  <SpCard>One</SpCard>
  <SpCard>Two</SpCard>
  <SpCard>Three</SpCard>
</SpGrid>

<SpGrid columns={12} gap="lg">
  <SpCard span={{ base: 'full', md: 6, lg: 4 }}>One</SpCard>
  <SpCard span={{ base: 'full', md: 6, lg: 8 }}>Two</SpCard>
</SpGrid>

<SpGrid leadingTracks={{ weight: 2 }} fixedTracks={{ count: 2 }} gap="lg">
  <SpCard offset={2} rowSpan={2}>Leads two fixed trailing tracks</SpCard>
  <SpCard order="last">Second track</SpCard>
</SpGrid>

<SpGrid explicitTemplate={{ template: "edge-fluid-edge" }} gap="md">
  <SpIconBox>Logo</SpIconBox>
  <SpNav>Nav links</SpNav>
  <SpButton>CTA</SpButton>
</SpGrid>

<SpGrid columns={3} align="center">
  <SpCard>One</SpCard>
  <SpCard>Two, taller content</SpCard>
  <SpCard>Three</SpCard>
</SpGrid>
```

The default slot renders any child content. `span`, `offset`, `rowSpan`,
`rowOffset`, and `order` are set on individual grid items (not the `SpGrid`
wrapper) and each accepts either a single value or a per-breakpoint
`{ base?, md?, lg? }` object; they map directly to the matching `getGridClasses`
option of the same name. `leadingTracks`, `fixedTracks`, and `explicitTemplate`
are set on the `SpGrid` wrapper itself and map to `getGridClasses`'s options of
the same name. `explicitTemplate` selects a named, finite asymmetric column
shape (`"edge-fluid-edge"` for a logo/nav/CTA row, `"label-fluid-fluid"` for a
fixed leading label column plus two differently-weighted fluid columns) for
layouts that `columns`/`span`/ `leadingTracks`/`fixedTracks` cannot express, and
is mutually exclusive with those column-sizing options.

---

### SpInput

`SpInput` renders a labeled input group: wrapper, optional label, input,
optional helper text, and optional error message.

`SpInput` requires an explicit `id` whenever `label`, `helperText`, or
`errorMessage` is present. This is an SSR invariant — without a stable `id`, the
`for`/`aria-describedby` associations would be nondeterministic. The component
throws at render time if the requirement is violated.

| Prop           | Type                                 | Default | Description                                                                |
| -------------- | ------------------------------------ | ------- | -------------------------------------------------------------------------- |
| `id`           | `string`                             | —       | **Required** when using `label`, `helperText`, or `errorMessage`           |
| `label`        | `string`                             | —       | Renders a `<label>` associated with the input                              |
| `helperText`   | `string`                             | —       | Renders helper text below the input                                        |
| `errorMessage` | `string`                             | —       | Renders an error message; suppresses `helperText`                          |
| `state`        | `InputState`                         | —       | `"default"` `"success"` `"error"` `"disabled"` `"loading"`                 |
| `size`         | `InputSize`                          | —       | Size: `"sm"` `"md"` `"lg"`                                                 |
| `fullWidth`    | `boolean`                            | —       | Stretches input to fill its container                                      |
| `pill`         | `boolean`                            | —       | Fully rounded corners                                                      |
| `disabled`     | `boolean`                            | —       | Disables the input                                                         |
| `loading`      | `boolean`                            | —       | Loading state                                                              |
| `as`           | `"div" \| "form" \| "fieldset" \| …` | `"div"` | Rendered wrapper element                                                   |
| `class`        | `string`                             | —       | Additional CSS classes on the `<input>` element                            |
| `…rest`        | —                                    | —       | Any HTML input attribute (`type`, `name`, `placeholder`, `required`, etc.) |

```astro
<!-- Standalone — no label, no id required -->
<SpInput type="search" placeholder="Search…" />

<!-- Labeled with helper text — id required -->
<SpInput
  id="email"
  label="Email"
  name="email"
  type="email"
  placeholder="you@example.com"
  helperText="We will never share your email."
/>

<!-- Validation error — errorMessage suppresses helperText -->
<SpInput
  id="password"
  label="Password"
  type="password"
  state="error"
  errorMessage="Password must be at least 8 characters."
/>

<!-- Disabled field -->
<SpInput
  id="api-key"
  label="API Key"
  value="••••••••"
  state="disabled"
  disabled
/>

<!-- Pill shape, small size -->
<SpInput id="search-pill" label="Search" size="sm" pill placeholder="Search…" />
```

---

### SpLabel

`SpLabel` renders a standalone `<label>`. Association with a form control is the
consumer's responsibility, the same as plain HTML — pass `htmlFor` matching the
control's `id`.

| Prop               | Type      | Default | Description                      |
| ------------------ | --------- | ------- | -------------------------------- |
| `disabled`         | `boolean` | —       | Disabled styling                 |
| `required`         | `boolean` | —       | Required-field styling           |
| `htmlFor`          | `string`  | —       | Renders the `for` attribute      |
| `id`               | `string`  | —       | Element ID                       |
| `aria-label`       | `string`  | —       | Accessible label                 |
| `aria-describedby` | `string`  | —       | Associates a description element |
| `class`            | `string`  | —       | Additional CSS classes           |

```astro
<SpLabel htmlFor="email">Email</SpLabel>
<SpInput id="email" type="email" />

<SpLabel htmlFor="agree" required>I agree to the terms</SpLabel>
```

---

### SpFieldset

`SpFieldset` renders a `<fieldset>` with an optional `<legend>`. The legend only
renders when `legend` is provided and non-empty.

| Prop               | Type      | Default | Description                                |
| ------------------ | --------- | ------- | ------------------------------------------ |
| `disabled`         | `boolean` | —       | Disables every control inside the fieldset |
| `legend`           | `string`  | —       | Renders a `<legend>` with the recipe class |
| `name`             | `string`  | —       | Form field group name                      |
| `form`             | `string`  | —       | Associates with a `<form>` by ID           |
| `id`               | `string`  | —       | Element ID                                 |
| `aria-label`       | `string`  | —       | Accessible label                           |
| `aria-describedby` | `string`  | —       | Associates a description element           |
| `class`            | `string`  | —       | Additional CSS classes                     |

```astro
<SpFieldset legend="Contact details">
  <SpLabel htmlFor="name">Name</SpLabel>
  <SpInput id="name" name="name" />
</SpFieldset>

<SpFieldset disabled legend="Read-only section">
  <SpInput id="readonly-field" value="Locked" disabled />
</SpFieldset>
```

---

### SpCheckbox

`SpCheckbox` renders a native `<input type="checkbox">`.

| Prop               | Type      | Default | Description                      |
| ------------------ | --------- | ------- | -------------------------------- |
| `checked`          | `boolean` | —       | Checked state                    |
| `disabled`         | `boolean` | —       | Disables the checkbox            |
| `id`               | `string`  | —       | Element ID                       |
| `name`             | `string`  | —       | Form field name                  |
| `value`            | `string`  | —       | Form field value                 |
| `required`         | `boolean` | —       | Marks the field required         |
| `form`             | `string`  | —       | Associates with a `<form>` by ID |
| `aria-label`       | `string`  | —       | Accessible label                 |
| `aria-describedby` | `string`  | —       | Associates a description element |
| `class`            | `string`  | —       | Additional CSS classes           |

```astro
<SpLabel htmlFor="agree">I agree to the terms</SpLabel>
<SpCheckbox id="agree" name="terms" />

<SpCheckbox id="newsletter" name="subscribe" checked />
<SpCheckbox id="locked" disabled />
```

---

### SpRadio

`SpRadio` renders a native `<input type="radio">`.

| Prop               | Type      | Default | Description                             |
| ------------------ | --------- | ------- | --------------------------------------- |
| `checked`          | `boolean` | —       | Checked state                           |
| `disabled`         | `boolean` | —       | Disables the radio                      |
| `id`               | `string`  | —       | Element ID                              |
| `name`             | `string`  | —       | Form field name — shared across a group |
| `value`            | `string`  | —       | Form field value                        |
| `required`         | `boolean` | —       | Marks the field required                |
| `form`             | `string`  | —       | Associates with a `<form>` by ID        |
| `aria-label`       | `string`  | —       | Accessible label                        |
| `aria-describedby` | `string`  | —       | Associates a description element        |
| `class`            | `string`  | —       | Additional CSS classes                  |

```astro
<SpLabel htmlFor="plan-pro">Pro</SpLabel>
<SpRadio id="plan-pro" name="plan" value="pro" checked />

<SpLabel htmlFor="plan-free">Free</SpLabel>
<SpRadio id="plan-free" name="plan" value="free" />
```

---

### SpSelect

`SpSelect` renders a native `<select>`. Pass `<option>` elements as children.

| Prop               | Type      | Default | Description                      |
| ------------------ | --------- | ------- | -------------------------------- |
| `disabled`         | `boolean` | —       | Disables the select              |
| `focused`          | `boolean` | —       | Applies focus styling            |
| `id`               | `string`  | —       | Element ID                       |
| `name`             | `string`  | —       | Form field name                  |
| `value`            | `string`  | —       | Selected value                   |
| `required`         | `boolean` | —       | Marks the field required         |
| `multiple`         | `boolean` | —       | Allows multiple selection        |
| `form`             | `string`  | —       | Associates with a `<form>` by ID |
| `aria-label`       | `string`  | —       | Accessible label                 |
| `aria-describedby` | `string`  | —       | Associates a description element |
| `class`            | `string`  | —       | Additional CSS classes           |

```astro
<SpLabel htmlFor="country">Country</SpLabel>
<SpSelect id="country" name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
</SpSelect>
```

---

### SpTextarea

`SpTextarea` renders a native `<textarea>`.

| Prop               | Type      | Default | Description                      |
| ------------------ | --------- | ------- | -------------------------------- |
| `disabled`         | `boolean` | —       | Disables the textarea            |
| `focused`          | `boolean` | —       | Applies focus styling            |
| `id`               | `string`  | —       | Element ID                       |
| `name`             | `string`  | —       | Form field name                  |
| `value`            | `string`  | —       | Default text content             |
| `placeholder`      | `string`  | —       | Placeholder text                 |
| `rows`             | `number`  | —       | Visible row count                |
| `required`         | `boolean` | —       | Marks the field required         |
| `readonly`         | `boolean` | —       | Prevents editing                 |
| `form`             | `string`  | —       | Associates with a `<form>` by ID |
| `aria-label`       | `string`  | —       | Accessible label                 |
| `aria-describedby` | `string`  | —       | Associates a description element |
| `class`            | `string`  | —       | Additional CSS classes           |

```astro
<SpLabel htmlFor="bio">Bio</SpLabel>
<SpTextarea id="bio" name="bio" rows={4} placeholder="Tell us about yourself" />
```

---

### SpAlert

| Prop               | Type                                         | Default     | Description                                                                     |
| ------------------ | -------------------------------------------- | ----------- | ------------------------------------------------------------------------------- |
| `variant`          | `AlertVariant`                               | `"info"`    | Visual style: `"info"` `"success"` `"warning"` `"danger"` `"neutral"` `"brand"` |
| `size`             | `AlertSize`                                  | `"md"`      | Size: `"sm"` `"md"` `"lg"`                                                      |
| `as`               | `"div" \| "section" \| "aside" \| "article"` | `"div"`     | Rendered element                                                                |
| `dismissed`        | `boolean`                                    | —           | Applies dismissed state styling                                                 |
| `dismissible`      | `boolean`                                    | —           | Reserves and renders a dismiss control                                          |
| `dismissLabel`     | `string`                                     | `"Dismiss"` | Accessible label for the dismiss control                                        |
| `interactive`      | `boolean`                                    | —           | Adds hover/focus styles and `tabindex="0"`                                      |
| `fullWidth`        | `boolean`                                    | —           | Stretches to full width                                                         |
| `disabled`         | `boolean`                                    | —           | Disables the alert                                                              |
| `loading`          | `boolean`                                    | —           | Loading state (also sets disabled behavior)                                     |
| `id`               | `string`                                     | —           | Element ID                                                                      |
| `aria-label`       | `string`                                     | —           | Accessible label                                                                |
| `aria-describedby` | `string`                                     | —           | Associates a description element                                                |
| `class`            | `string`                                     | —           | Additional CSS classes                                                          |

```astro
<SpAlert variant="success">Your changes have been saved.</SpAlert>
<SpAlert variant="warning" size="sm">Session expires soon.</SpAlert>
<SpAlert variant="danger" dismissed>This alert has been dismissed.</SpAlert>
<SpAlert variant="brand" dismissible><span slot="icon">i</span>New feature available.</SpAlert>
<SpAlert variant="info" as="aside" aria-label="Info notice">Read the docs.</SpAlert>
```

---

### SpAvatar

| Prop          | Type                                             | Default    | Description                              |
| ------------- | ------------------------------------------------ | ---------- | ---------------------------------------- |
| `shape`       | `AvatarShape`                                    | `"circle"` | Shape: `"circle"` `"square"`             |
| `size`        | `AvatarSize`                                     | `"md"`     | Size: `"xs"` `"sm"` `"md"` `"lg"` `"xl"` |
| `as`          | `"div" \| "span" \| "figure" \| "a" \| "button"` | `"div"`    | Rendered element                         |
| `interactive` | `boolean`                                        | —          | Adds hover/focus styles                  |
| `disabled`    | `boolean`                                        | —          | Disables the avatar                      |
| `loading`     | `boolean`                                        | —          | Loading state                            |
| `fullWidth`   | `boolean`                                        | —          | Stretches to full width                  |
| `placeholder` | `boolean`                                        | —          | Applies placeholder styling              |
| `href`        | `string`                                         | —          | URL when `as="a"`                        |
| `aria-label`  | `string`                                         | —          | Accessible label                         |
| `class`       | `string`                                         | —          | Additional CSS classes                   |

```astro
<SpAvatar size="lg">
  <img src="/avatars/jane.jpg" alt="Jane Doe" />
</SpAvatar>

<SpAvatar shape="square" size="sm" placeholder>
  JD
</SpAvatar>

<SpAvatar as="a" href="/profile" interactive>
  <img src="/avatars/jane.jpg" alt="View profile" />
</SpAvatar>
```

---

### SpBadge

| Prop              | Type                                                             | Default   | Description                                                                       |
| ----------------- | ---------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------- |
| `variant`         | `BadgeVariant`                                                   | —         | Visual style: `"primary"` `"success"` `"warning"` `"danger"` `"info"` `"inverse"` |
| `size`            | `BadgeSize`                                                      | —         | Size: `"sm"` `"md"` `"lg"`                                                        |
| `as`              | `"span" \| "div" \| "a" \| "button" \| "li" \| "time" \| "mark"` | `"span"`  | Rendered element                                                                  |
| `interactive`     | `boolean`                                                        | —         | Adds hover/focus styles                                                           |
| `fullWidth`       | `boolean`                                                        | —         | Stretches to full width                                                           |
| `dot`             | `boolean`                                                        | —         | Text-free notification dot (e.g. overlaid on an avatar)                           |
| `accentRail`      | `BadgeAccentRailEdge`                                            | —         | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"`                       |
| `accentRailColor` | `BadgeAccentRailColor`                                           | `"brand"` | Rail color, used when `accentRail` is set                                         |
| `disabled`        | `boolean`                                                        | —         | Disables the badge                                                                |
| `loading`         | `boolean`                                                        | —         | Loading state                                                                     |
| `href`            | `string`                                                         | —         | URL when `as="a"`                                                                 |
| `datetime`        | `string`                                                         | —         | Datetime value when `as="time"`                                                   |
| `aria-label`      | `string`                                                         | —         | Accessible label                                                                  |
| `class`           | `string`                                                         | —         | Additional CSS classes                                                            |

```astro
<SpBadge variant="success">Active</SpBadge>
<SpBadge variant="warning" size="sm">Beta</SpBadge>
<SpBadge variant="primary" as="a" href="/changelog" interactive>New</SpBadge>
<SpBadge variant="danger" as="time" datetime="2025-01-01">Jan 2025</SpBadge>
<SpBadge accentRail="left" accentRailColor="success">Verified</SpBadge>
```

`accentRail`/`accentRailColor` are named distinctly from `variant` because
`variant="accent"` already names badge's single-tone brand-accent fill; the rail
is an unrelated, additive edge decoration.

---

### SpIconBox

| Prop          | Type                                                | Default  | Description                                                     |
| ------------- | --------------------------------------------------- | -------- | --------------------------------------------------------------- |
| `variant`     | `IconBoxVariant`                                    | —        | Color: `"primary"` `"success"` `"warning"` `"danger"` `"info"`  |
| `size`        | `IconBoxSize`                                       | —        | Size: `"sm"` `"md"` `"lg"`                                      |
| `as`          | `"span" \| "div" \| "i" \| "a" \| "button" \| "li"` | `"span"` | Rendered element                                                |
| `pill`        | `boolean`                                           | —        | Fully rounded corners                                           |
| `interactive` | `boolean`                                           | —        | Adds hover/focus styles                                         |
| `disabled`    | `boolean`                                           | —        | Disables the icon box                                           |
| `loading`     | `boolean`                                           | —        | Loading state                                                   |
| `href`        | `string`                                            | —        | URL when `as="a"`                                               |
| `aria-label`  | `string`                                            | —        | Accessible label (use when the icon conveys standalone meaning) |
| `class`       | `string`                                            | —        | Additional CSS classes                                          |

```astro
<!-- Decorative icon — mark the icon aria-hidden -->
<SpIconBox variant="primary" size="md">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l7 4v12l-7 4-7-4V6l7-4z" fill="currentColor" />
  </svg>
</SpIconBox>

<!-- Standalone meaning — label the component -->
<SpIconBox variant="success" size="sm" aria-label="Success">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M20 6 9 17l-5-5" />
  </svg>
</SpIconBox>
```

Use `aria-hidden="true"` on the icon when surrounding context already describes
it. Use `aria-label` on the component when the icon box conveys standalone
meaning.

---

### SpPricingCard

Named slots map to the structural sections of the pricing card. Slot wrappers
render only when their slot is populated — empty slots produce no markup.

| Prop          | Type                                   | Default   | Description                                                 |
| ------------- | -------------------------------------- | --------- | ----------------------------------------------------------- |
| `featured`    | `boolean`                              | —         | Highlights the card as the recommended tier                 |
| `fullHeight`  | `boolean`                              | —         | Stretches to full container height                          |
| `accent`      | `PricingCardAccentEdge`                | —         | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"` |
| `accentColor` | `PricingCardAccentColor`               | `"brand"` | Rail color, used when `accent` is set                       |
| `interactive` | `boolean`                              | —         | Adds hover/focus styles                                     |
| `disabled`    | `boolean`                              | —         | Disables the card                                           |
| `loading`     | `boolean`                              | —         | Loading state                                               |
| `as`          | `"div" \| "section" \| "article" \| …` | `"div"`   | Rendered element                                            |
| `class`       | `string`                               | —         | Additional CSS classes                                      |

| Slot          | Description                    |
| ------------- | ------------------------------ |
| `header`      | Plan name or heading           |
| `badge`       | Tag or label (e.g., "Popular") |
| `price`       | Price string or element        |
| `description` | Short plan description         |
| _(default)_   | Feature list or body content   |
| `footer`      | CTA button or footer action    |

```astro
<SpPricingCard featured>
  <h3 slot="header">Pro</h3>
  <span slot="badge">Popular</span>
  <span slot="price">$29/mo</span>
  <span slot="description">For growing teams and businesses.</span>
  <ul>
    <li>Unlimited projects</li>
    <li>Advanced analytics</li>
    <li>Priority support</li>
  </ul>
  <SpButton slot="footer" variant="primary" fullWidth>Choose Pro</SpButton>
</SpPricingCard>
```

---

### SpRating

Renders a star rating. Stars are built from `value`/`max`. Provide a custom star
SVG via the `star-icon` slot. The star container is `aria-hidden="true"` —
always pass `aria-label` for screen readers.

| Prop          | Type                                | Default | Description                                   |
| ------------- | ----------------------------------- | ------- | --------------------------------------------- |
| `value`       | `number`                            | `0`     | Number of filled stars                        |
| `max`         | `number`                            | `5`     | Total star count                              |
| `size`        | `RatingSize`                        | —       | Size                                          |
| `interactive` | `boolean`                           | —       | Adds hover/focus styles                       |
| `disabled`    | `boolean`                           | —       | Disables the rating                           |
| `loading`     | `boolean`                           | —       | Loading state                                 |
| `fullWidth`   | `boolean`                           | —       | Stretches to fill container                   |
| `pill`        | `boolean`                           | —       | Fully rounded corners                         |
| `as`          | `"div" \| "span" \| "section" \| …` | `"div"` | Rendered element                              |
| `aria-label`  | `string`                            | —       | Screen-reader description of the rating value |
| `class`       | `string`                            | —       | Additional CSS classes                        |

| Slot        | Description                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `star-icon` | Custom star icon. Rendered once per star; filled/empty styling comes from the star wrapper class. Defaults to `★`. |
| _(default)_ | Optional text shown after the stars (e.g., "4.8 out of 5")                                                         |

```astro
<!-- Basic rating -->
<SpRating value={4} max={5} aria-label="4 out of 5 stars" />

<!-- With visible text -->
<SpRating value={4} max={5} aria-label="4 out of 5 stars">
  4.0 out of 5
</SpRating>

<!-- Custom star icon -->
<SpRating value={3} max={5} aria-label="3 out of 5">
  <svg slot="star-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3 6.5 7 1-5 4.9 1.2 7L12 18l-6.2 3.4 1.2-7L2 9.5l7-1z" fill="currentColor" />
  </svg>
</SpRating>
```

---

### SpTestimonial

Named slots map to the structural sections of the testimonial. Slot wrappers
render only when their slot is populated.

| Prop          | Type                                                   | Default      | Description                                                 |
| ------------- | ------------------------------------------------------ | ------------ | ----------------------------------------------------------- |
| `variant`     | `"elevated" \| "flat" \| "outline" \| "ghost"`         | `"elevated"` | Visual style                                                |
| `fullHeight`  | `boolean`                                              | —            | Stretches to full container height                          |
| `accent`      | `TestimonialAccentEdge`                                | —            | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"` |
| `accentColor` | `TestimonialAccentColor`                               | `"brand"`    | Rail color, used when `accent` is set                       |
| `interactive` | `boolean`                                              | —            | Adds hover/focus styles                                     |
| `disabled`    | `boolean`                                              | —            | Disables the testimonial                                    |
| `loading`     | `boolean`                                              | —            | Loading state                                               |
| `as`          | `"div" \| "section" \| "article" \| "blockquote" \| …` | `"div"`      | Rendered element                                            |
| `class`       | `string`                                               | —            | Additional CSS classes                                      |

| Slot           | Description                     |
| -------------- | ------------------------------- |
| `quote`        | Quotation text                  |
| `author-image` | Author avatar or image element  |
| `author-name`  | Author display name             |
| `author-title` | Author job title or affiliation |

```astro
<SpTestimonial as="blockquote">
  <p slot="quote">
    "Spectre UI cut our Astro prototype time in half."
  </p>
  <img
    slot="author-image"
    src="/avatars/jane.jpg"
    alt="Jane Doe"
    width="40"
    height="40"
  />
  <span slot="author-name">Jane Doe</span>
  <span slot="author-title">Frontend Lead at Acme Corp</span>
</SpTestimonial>
```

---

### SpSpinner

A non-interactive status indicator. Renders as `<div role="status">` with a
default `aria-label` of `"Loading"`.

| Prop         | Type             | Default     | Description                                                                                                         |
| ------------ | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `variant`    | `SpinnerVariant` | —           | Color variant: `"primary"` `"secondary"` `"success"` `"warning"` `"danger"` `"info"` `"neutral"` `"accent"` `"cta"` |
| `size`       | `SpinnerSize`    | `"md"`      | Size: `"sm"` `"md"` `"lg"`                                                                                          |
| `disabled`   | `boolean`        | —           | Disabled state                                                                                                      |
| `loading`    | `boolean`        | —           | Loading state (also sets disabled behavior)                                                                         |
| `aria-label` | `string`         | `"Loading"` | Accessible label for the spinner                                                                                    |
| `id`         | `string`         | —           | Element ID                                                                                                          |
| `class`      | `string`         | —           | Additional CSS classes                                                                                              |

```astro
<SpSpinner />
<SpSpinner variant="primary" size="lg" />
<SpSpinner loading aria-label="Saving changes" />
```

---

### SpTag

| Prop               | Type                                         | Default     | Description                                                                                                                                          |
| ------------------ | -------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`          | `TagVariant`                                 | `"default"` | Visual style: `"default"` `"primary"` `"secondary"` `"success"` `"warning"` `"danger"` `"info"` `"neutral"` `"accent"` `"cta"` `"outline"` `"ghost"` |
| `size`             | `TagSize`                                    | —           | Size: `"sm"` `"md"` `"lg"`                                                                                                                           |
| `as`               | `"span" \| "div" \| "li" \| "a" \| "button"` | `"span"`    | Rendered element                                                                                                                                     |
| `dismissible`      | `boolean`                                    | —           | Applies dismissible styling                                                                                                                          |
| `selected`         | `boolean`                                    | —           | Applies selected state and `aria-pressed`                                                                                                            |
| `interactive`      | `boolean`                                    | —           | Adds hover/focus styles and `tabindex="0"`                                                                                                           |
| `fullWidth`        | `boolean`                                    | —           | Stretches to full width                                                                                                                              |
| `disabled`         | `boolean`                                    | —           | Disables the tag                                                                                                                                     |
| `loading`          | `boolean`                                    | —           | Loading state (also sets disabled behavior)                                                                                                          |
| `href`             | `string`                                     | —           | URL when `as="a"`                                                                                                                                    |
| `id`               | `string`                                     | —           | Element ID                                                                                                                                           |
| `aria-label`       | `string`                                     | —           | Accessible label                                                                                                                                     |
| `aria-describedby` | `string`                                     | —           | Associates a description element                                                                                                                     |
| `class`            | `string`                                     | —           | Additional CSS classes                                                                                                                               |

```astro
<SpTag>Default</SpTag>
<SpTag variant="primary" size="sm">New</SpTag>
<SpTag variant="success" selected>Active</SpTag>
<SpTag variant="info" dismissible>Removable</SpTag>
<SpTag as="a" href="/docs" variant="neutral" interactive>Docs</SpTag>
<SpTag as="button" variant="primary" disabled>Unavailable</SpTag>
```

---

### SpDropdown

| Prop        | Type             | Default | Description                                                                                                                                                                       |
| ----------- | ---------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fullWidth` | `boolean`        | —       | Stretches to full width                                                                                                                                                           |
| `mega`      | `boolean`        | —       | Anchors the menu to the nearest positioned ancestor (e.g. `SpNav`) instead of this trigger wrapper, for wide-menu panels that span the nav row rather than tracking trigger width |
| `viewport`  | `boolean`        | —       | Breaks the menu out to the full browser viewport width instead of tracking the trigger or nearest positioned ancestor. Takes precedence over `mega` when both are set on the menu |
| `as`        | `"div" \| "nav"` | `"div"` | Rendered element                                                                                                                                                                  |
| `id`        | `string`         | —       | Element ID                                                                                                                                                                        |
| `class`     | `string`         | —       | Additional CSS classes                                                                                                                                                            |

`SpDropdown` renders the dropdown container only. Build the menu and items in
the default slot using the re-exported `getDropdownMenuClasses` and
`getDropdownItemClasses` helpers, since open/closed state and per-item
active/disabled/hover/focus state are consumer-driven. Pair `mega` (or
`viewport`) here with the matching option on the `getDropdownMenuClasses` call
that styles the menu panel — `SpNavItem`'s `mega`/`viewport` props do this
pairing for you in dropdown mode. `getDropdownMenuClasses` also accepts
`accent`/`accentColor` for an optional decorative rail on the menu panel.

```astro
---
import { SpDropdown, getDropdownMenuClasses, getDropdownItemClasses } from '@phcdevworks/spectre-ui-astro'

const menuClass = getDropdownMenuClasses({ placement: 'bottom-start', open: true })
const itemClass = getDropdownItemClasses()
const activeItemClass = getDropdownItemClasses({ active: true })
---

<SpDropdown>
  <button>Options</button>
  <div class={menuClass} role="menu">
    <a class={activeItemClass} href="/profile" role="menuitem">Profile</a>
    <a class={itemClass} href="/settings" role="menuitem">Settings</a>
  </div>
</SpDropdown>
```

---

### SpFooter

| Prop          | Type                             | Default    | Description                                                 |
| ------------- | -------------------------------- | ---------- | ----------------------------------------------------------- |
| `bordered`    | `boolean`                        | —          | Applies a top border                                        |
| `fullWidth`   | `boolean`                        | —          | Stretches to full width                                     |
| `accent`      | `FooterAccentEdge`               | —          | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"` |
| `accentColor` | `FooterAccentColor`              | `"brand"`  | Rail color, used when `accent` is set                       |
| `as`          | `"footer" \| "div" \| "section"` | `"footer"` | Rendered element                                            |
| `id`          | `string`                         | —          | Element ID                                                  |
| `aria-label`  | `string`                         | —          | Accessible label                                            |
| `class`       | `string`                         | —          | Additional CSS classes                                      |

```astro
<SpFooter bordered>
  <p>&copy; 2026 PHCDevworks</p>
</SpFooter>
```

The default slot renders any child content.

Build footer content in the default slot using `SpFooterLink` and `SpFooterChip`
for interactive elements, and the re-exported `getFooterHeadingClasses`,
`getFooterTextClasses`, `getFooterMutedClasses`, `getFooterLinksClasses`, and
`getFooterDividerClasses` helpers for the surrounding structure, since section
headings and link lists are consumer-driven — the same pattern as `SpNav`'s
`getNavLinksClasses` and `SpSidebar`'s `getSidebarHeaderClasses`.

```astro
---
import {
  SpFooter,
  SpFooterLink,
  SpFooterChip,
  getFooterHeadingClasses,
  getFooterTextClasses,
  getFooterMutedClasses,
  getFooterLinksClasses,
  getFooterDividerClasses,
} from '@phcdevworks/spectre-ui-astro'

const headingClass = getFooterHeadingClasses()
const linksClass = getFooterLinksClasses()
---

<SpFooter bordered>
  <p class={getFooterTextClasses()}>&copy; 2026 PHCDevworks</p>
  <p class={getFooterMutedClasses()}>All rights reserved.</p>
  <hr class={getFooterDividerClasses()} />
  <div>
    <span class={headingClass}>Product</span>
    <nav class={linksClass}>
      <SpFooterLink href="/" active>Home</SpFooterLink>
      <SpFooterLink href="/docs">Docs</SpFooterLink>
    </nav>
  </div>
  <SpFooterChip>Beta</SpFooterChip>
</SpFooter>
```

---

### SpFooterLink

| Prop         | Type      | Default | Description                                               |
| ------------ | --------- | ------- | --------------------------------------------------------- |
| `href`       | `string`  | —       | Link target; suppressed when `disabled`                   |
| `active`     | `boolean` | `false` | Marks the link current (`aria-current="page"`)            |
| `disabled`   | `boolean` | `false` | Suppresses `href`, sets `aria-disabled` and `tabindex=-1` |
| `hovered`    | `boolean` | `false` | Forces hover-state classes                                |
| `focused`    | `boolean` | `false` | Forces focus-state classes                                |
| `id`         | `string`  | —       | Element id                                                |
| `title`      | `string`  | —       | Native title attribute                                    |
| `aria-label` | `string`  | —       | Accessible label                                          |
| `class`      | `string`  | —       | Additional CSS classes                                    |

`SpFooterLink` renders a single `<a>`, backed by `getFooterLinkClasses`.

---

### SpFooterChip

| Prop         | Type      | Default | Description                    |
| ------------ | --------- | ------- | ------------------------------ |
| `disabled`   | `boolean` | `false` | Applies disabled-state classes |
| `hovered`    | `boolean` | `false` | Forces hover-state classes     |
| `focused`    | `boolean` | `false` | Forces focus-state classes     |
| `id`         | `string`  | —       | Element id                     |
| `title`      | `string`  | —       | Native title attribute         |
| `aria-label` | `string`  | —       | Accessible label               |
| `class`      | `string`  | —       | Additional CSS classes         |

`SpFooterChip` renders a single `<span>`, backed by `getFooterChipClasses`.

---

### SpModal

| Prop               | Type                 | Default   | Description                                                              |
| ------------------ | -------------------- | --------- | ------------------------------------------------------------------------ |
| `open`             | `boolean`            | —         | Applies open styling to the overlay and modal, and toggles `aria-hidden` |
| `fullWidth`        | `boolean`            | —         | Stretches the modal to full width                                        |
| `accent`           | `ModalAccentEdge`    | —         | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"`              |
| `accentColor`      | `ModalAccentColor`   | `"brand"` | Rail color, used when `accent` is set                                    |
| `as`               | `"div" \| "section"` | `"div"`   | Rendered element for the modal                                           |
| `id`               | `string`             | —         | Element ID for the modal                                                 |
| `aria-label`       | `string`             | —         | Accessible label for the modal                                           |
| `aria-labelledby`  | `string`             | —         | Associates a title element                                               |
| `aria-describedby` | `string`             | —         | Associates a description element                                         |
| `class`            | `string`             | —         | Additional CSS classes for the modal                                     |

`SpModal` renders an overlay element (`getModalOverlayClasses`) wrapping the
modal element (`getModalClasses`), with `role="dialog"` and `aria-modal="true"`.
Toggling `open` is consumer-driven (no client-side JS is included).

```astro
<SpModal open aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm deletion</h2>
  <p>This action cannot be undone.</p>
</SpModal>
```

---

### SpNav

| Prop          | Type                                      | Default   | Description                                                 |
| ------------- | ----------------------------------------- | --------- | ----------------------------------------------------------- |
| `bordered`    | `boolean`                                 | —         | Applies a border                                            |
| `sticky`      | `boolean`                                 | —         | Applies sticky positioning                                  |
| `fullWidth`   | `boolean`                                 | —         | Stretches to full width                                     |
| `align`       | `NavAlign`                                | —         | Aligns content: `"start"`, `"center"`, or `"end"`           |
| `accent`      | `NavAccentEdge`                           | —         | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"` |
| `accentColor` | `NavAccentColor`                          | `"brand"` | Rail color, used when `accent` is set                       |
| `as`          | `"nav" \| "div" \| "header" \| "section"` | `"nav"`   | Rendered element                                            |
| `id`          | `string`                                  | —         | Element ID                                                  |
| `aria-label`  | `string`                                  | —         | Accessible label for the nav landmark                       |
| `class`       | `string`                                  | —         | Additional CSS classes                                      |

`SpNav` renders the nav container only. Build links in the default slot using
the re-exported `getNavLinksClasses` and `getNavLinkClasses` helpers, since
per-link active/disabled/hover/focus state is consumer-driven.

```astro
---
import { SpNav, getNavLinksClasses, getNavLinkClasses } from '@phcdevworks/spectre-ui-astro'

const linksClass = getNavLinksClasses()
const activeLinkClass = getNavLinkClasses({ active: true })
const linkClass = getNavLinkClasses()
---

<SpNav bordered sticky align="center" aria-label="Main">
  <div class={linksClass}>
    <a class={activeLinkClass} href="/" aria-current="page">Home</a>
    <a class={linkClass} href="/about">About</a>
  </div>
</SpNav>
```

---

### SpNavItem

| Prop                  | Type                  | Default          | Description                                                                                                                                           |
| --------------------- | --------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dropdown`            | `boolean`             | —                | Renders a dropdown trigger + menu instead of a plain link                                                                                             |
| `href`                | `string`              | —                | Link target when `dropdown` is not set                                                                                                                |
| `label`               | `string`              | —                | Trigger/link text when no content is projected                                                                                                        |
| `open`                | `boolean`             | —                | Applies open styling to the menu (dropdown mode only)                                                                                                 |
| `active`              | `boolean`             | —                | Current-page link styling; adds `aria-current="page"` in link mode                                                                                    |
| `disabled`            | `boolean`             | —                | Disabled styling; suppresses `href` in link mode and disables the trigger in dropdown mode                                                            |
| `hovered` / `focused` | `boolean`             | —                | Force the matching interaction-state classes (docs and previews)                                                                                      |
| `placement`           | `DropdownPlacement`   | `"bottom-start"` | Menu position (dropdown mode only)                                                                                                                    |
| `mega`                | `boolean`             | —                | Wide-menu mode (dropdown mode only): anchors the menu to the nearest positioned ancestor and spans its full width instead of tracking trigger width   |
| `viewport`            | `boolean`             | —                | Full-viewport-width mode (dropdown mode only): breaks the menu out to the full browser viewport width. Takes precedence over `mega` when both are set |
| `accent`              | `DropdownAccentEdge`  | —                | Decorative rail edge on the menu panel (dropdown mode only): `"top"` `"right"` `"bottom"` `"left"`                                                    |
| `accentColor`         | `DropdownAccentColor` | `"brand"`        | Rail color, used when `accent` is set                                                                                                                 |
| `id`                  | `string`              | —                | Element ID                                                                                                                                            |
| `title`               | `string`              | —                | Title attribute                                                                                                                                       |
| `aria-label`          | `string`              | —                | Accessible label for the link or trigger button                                                                                                       |
| `class`               | `string`              | —                | Additional CSS classes                                                                                                                                |

Place `SpNavItem` inside `SpNav` alongside plain links. In link mode it renders
an `<a>` styled with `getNavLinkClasses`. In dropdown mode it renders a
`getDropdownClasses` wrapper around a `getNavLinkClasses`-styled trigger
`<button>` (`data-sp-nav-item-trigger`, `aria-haspopup`, `aria-expanded`) and a
`getDropdownMenuClasses` menu panel (`data-sp-nav-item-menu`) that receives the
default slot. `mega` and `viewport` are forwarded to both calls, matching
upstream's paired `mega`/`viewport` contract; `accent`/`accentColor` are
forwarded to the menu panel only. Toggling `open` and wiring
click/outside-click/escape behavior is consumer-driven — no client-side JS is
included; use `@phcdevworks/spectre-components`'s `sp-nav-item` if you want that
behavior built in. Use a `trigger` named slot to project custom trigger content
instead of `label`.

```astro
---
import { SpNav, SpNavItem } from '@phcdevworks/spectre-ui-astro'
---

<SpNav aria-label="Main">
  <SpNavItem href="/">Home</SpNavItem>
  <SpNavItem dropdown label="Products" open placement="bottom-end">
    <a href="/products/a">Product A</a>
    <a href="/products/b">Product B</a>
  </SpNavItem>
  <SpNavItem dropdown mega label="Solutions" open>
    <SpGrid columns={3} gap="lg">
      <a href="/solutions/a">Solution A</a>
      <a href="/solutions/b">Solution B</a>
      <a href="/solutions/c">Solution C</a>
    </SpGrid>
  </SpNavItem>
</SpNav>
```

---

### SpToast

| Prop          | Type                         | Default   | Description                                                 |
| ------------- | ---------------------------- | --------- | ----------------------------------------------------------- |
| `variant`     | `ToastVariant`               | `"info"`  | Visual style: `"info"` `"success"` `"warning"` `"danger"`   |
| `dismissed`   | `boolean`                    | —         | Applies dismissed state styling                             |
| `fullWidth`   | `boolean`                    | —         | Stretches to full width                                     |
| `accent`      | `ToastAccentEdge`            | —         | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"` |
| `accentColor` | `ToastAccentColor`           | `"brand"` | Rail color, used when `accent` is set                       |
| `as`          | `"div" \| "li" \| "section"` | `"div"`   | Rendered element                                            |
| `id`          | `string`                     | —         | Element ID                                                  |
| `aria-label`  | `string`                     | —         | Accessible label                                            |
| `class`       | `string`                     | —         | Additional CSS classes                                      |

`SpToast` renders `role="status"`, `aria-live="polite"`, and
`aria-atomic="true"` by default. Pass content to a named `icon` slot to wrap it
in `getToastIconClasses` styling; the wrapper is only rendered when the slot is
used.

```astro
<SpToast variant="success">Changes saved.</SpToast>
<SpToast variant="danger">
  <Fragment slot="icon"><svg aria-hidden="true">...</svg></Fragment>
  Something went wrong.
</SpToast>
```

---

### SpTooltip

| Prop          | Type                 | Default     | Description                                                 |
| ------------- | -------------------- | ----------- | ----------------------------------------------------------- |
| `placement`   | `TooltipPlacement`   | `"top"`     | Placement: `"top"` `"bottom"` `"left"` `"right"`            |
| `visible`     | `boolean`            | —           | Applies visible state styling                               |
| `accent`      | `TooltipAccentEdge`  | —           | Decorative rail edge: `"top"` `"right"` `"bottom"` `"left"` |
| `accentColor` | `TooltipAccentColor` | `"brand"`   | Rail color, used when `accent` is set                       |
| `as`          | `"div" \| "span"`    | `"div"`     | Rendered element                                            |
| `id`          | `string`             | —           | Element ID                                                  |
| `role`        | `string`             | `"tooltip"` | ARIA role                                                   |
| `class`       | `string`             | —           | Additional CSS classes                                      |

```astro
<SpTooltip placement="bottom" visible>Save your changes</SpTooltip>
```

---

### SpTabs

`SpTabs` renders a deterministic tab list from `tabs`; pair each definition with
an `SpTabPanel` using the same `id`. Selection is controlled by `activeId`.

```astro
<SpTabs tabs={[{ id: 'overview', label: 'Overview' }, { id: 'activity', label: 'Activity' }]} activeId="overview">
  <SpTabPanel id="overview" active>Overview content</SpTabPanel>
  <SpTabPanel id="activity">Activity content</SpTabPanel>
</SpTabs>
```

### SpTabPanel

`SpTabPanel` renders a `role="tabpanel"` associated with the matching tab
button. Pass `active` to expose it and `disabled` to keep it hidden.

### SpAccordion

`SpAccordion` applies the upstream group recipe. Use `flush` for edge-to-edge
composition and place `SpAccordionItem` children in its default slot.

### SpAccordionItem

`SpAccordionItem` uses native `<details>`/`<summary>` markup, with `header` and
optional `icon` slots plus the default panel slot. `open` sets the initial
expanded state without client JavaScript.

### SpBreadcrumb

Pass an `items` array of `{ label, href?, current? }`. Current items receive
`aria-current="page"`; setting `separator` uses the custom-separator recipe.

### SpListGroup

`SpListGroup` forwards `flush`, `horizontal`, `accent`, and `accentColor` and
accepts `div`, `ul`, `ol`, or `nav` through `as`.

### SpListGroupItem

`SpListGroupItem` supports `div`, `li`, `a`, and `button` roots and forwards
interactive, active, selected, disabled, hover, and focus states. Named
`heading` and `text` slots receive the matching sub-recipe classes.

### SpOffcanvas

`SpOffcanvas` renders a controlled backdrop and dialog panel. Use `open` and
`placement`, with named `header`/`footer` slots and the default body slot.

### SpCarousel

`SpCarousel` provides the root, viewport, optional previous/next controls,
indicator wrapper, and caption. Compose slides and indicators with the
re-exported `getCarouselSlideClasses` and `getCarouselIndicatorClasses`.

### SpTable

`SpTable` renders a responsive wrapper and semantic `<table>`, forwarding
`size`, `striped`, `hoverable`, and `bordered`. Use `getTableRowClasses` for
contextual or selected rows.

### SpPagination

`SpPagination` renders page ranges from `page`, `total`, and `siblings`. Set
`hrefTemplate` with a `{page}` placeholder for crawlable links.

### SpStepper

`SpStepper` renders an ordered list from `steps` and derives `done`, `active`,
and `pending` states from the zero-based `current` index. A step-level `state`
overrides the derived state.

### SpHeading

`SpHeading` applies the `typography.heading` preset through `level`
(`"h1"`–`"h6"`, default `"h2"`). The element follows `level` unless `as` is set,
so the document outline and the visual scale can differ.

```astro
<SpHeading level="h4" as="h2">Section title styled as h4</SpHeading>
```

### SpDisplay

`SpDisplay` applies the marketing-scale `typography.display` preset through
`level` (`1`–`6`, default `1`). It renders `h{level}` unless `as` is set.

### SpLead

`SpLead` renders an introductory `<p>` (or `div`/`span` through `as`) with the
`typography.lead` preset.

### SpProse

`SpProse` wraps long-form or CMS-authored HTML in the upstream prose recipe. Use
`as` for `div`, `article`, `section`, `main`, or `aside`.

### SpSwitch

`SpSwitch` renders `<input type="checkbox" role="switch">` and forwards `size`,
`checked`, `disabled`, and `focused`. Native `:checked` and `:disabled` drive
state without script.

```astro
<SpLabel htmlFor="alerts">Email alerts</SpLabel>
<SpSwitch id="alerts" name="alerts" checked />
```

### SpChoiceCard

`SpChoiceCard` renders a whole-card `<label>` around a native radio (default) or
checkbox (`type="checkbox"`), so the entire card is the hit target. Pass `name`,
`value`, `checked`, and `disabled` for the input; `selected`, `hovered`, and
`focused` force the matching recipe states. Card content goes in the default
slot.

```astro
<SpChoiceCard name="shipping" value="express" checked>
  <strong>Express</strong> — arrives tomorrow
</SpChoiceCard>
```

### SpFileInput

`SpFileInput` renders `<input type="file">` and forwards `size`, `state`,
`fullWidth`, `disabled`, and `focused`. `state="invalid"` also sets
`aria-invalid="true"`. Native `accept`, `multiple`, and `capture` pass through.

### SpRange

`SpRange` renders `<input type="range">` with `min` (default `0`), `max`
(default `100`), `step`, and `value`. When `value` is set it also mirrors the
fill percentage into the upstream-owned `--sp-component-range-value` property so
WebKit/Blink paint the filled track; update that property from client script if
the slider changes after render.

### SpInputGroup

`SpInputGroup` renders a `role="group"` wrapper that fuses inputs, selects, file
inputs, buttons, and addons into one control. Pair it with `SpInputGroupAddon`
for static text or icons.

```astro
<SpInputGroup aria-label="Price">
  <SpInputGroupAddon>$</SpInputGroupAddon>
  <SpInput name="price" />
  <SpButton>Apply</SpButton>
</SpInputGroup>
```

### SpInputGroupAddon

`SpInputGroupAddon` renders a `span` (or `div`/`label` through `as`) with the
input-group addon recipe.

### SpExternalAuthButton

`SpExternalAuthButton` renders the neutral, mode-aware third-party sign-in
button. Provider logos go in the `icon` slot; the recipe encodes no brand color.
It supports `button` and `a` roots and forwards `fullWidth`, `disabled`,
`loading`, `hovered`, `focused`, and `active`.

```astro
<SpExternalAuthButton as="a" href="/auth/provider" fullWidth>
  <svg slot="icon" aria-hidden="true"><!-- provider logo --></svg>
  Continue with Provider
</SpExternalAuthButton>
```

### SpPopover

`SpPopover` renders a titled, interactive overlay (`role="dialog"` by default).
Place it inside a `position: relative` trigger wrapper and control visibility
with `open`; `placement` accepts `top`, `bottom`, `left`, or `right`. Use
`title` or the `header` slot for the header, the default slot for the body, and
`arrow={false}` to omit the pointer. With an `id`, the header is wired to
`aria-labelledby`.

### SpProgress

`SpProgress` renders a `role="progressbar"` track and bar. Pass `value` (with
optional `min`/`max`) for a determinate bar; omit it or set `indeterminate` for
the animated sweep. `label` renders the upstream label above the track and, with
an `id`, labels the bar through `aria-labelledby`. `variant` and `size` forward
to the bar and track recipes.

```astro
<SpProgress id="upload" label="Uploading" value={40} variant="success" />
```

### SpDay

`SpDay` renders a single calendar day cell (a `button` by default, or `a`,
`span`, `div`, or `td`) and forwards `selected`, `today`, `outsideMonth`,
`disabled`, `hovered`, and `focused`. Buttons expose `aria-pressed`; `today`
adds `aria-current="date"`.

### SpDatepicker

`SpDatepicker` renders a deterministic month grid for `year` and `month`
(`1`–`12`). ISO `YYYY-MM-DD` strings drive `selected`, `today`, `min`, `max`,
and `disabledDates`, so SSR output never depends on the server clock. Use
`weekStartsOn` (`0` or `1`), `showOutsideDays`, and `locale` to adjust the grid,
and the `previous`/`next` slots for navigation controls. Each day renders
through `SpDay` with a `data-date` attribute and a full-date `aria-label`.

```astro
<SpDatepicker id="due" year={2026} month={9} selected="2026-09-15" today="2026-09-27">
  <SpButton slot="previous" variant="ghost" size="sm" aria-label="Previous month">‹</SpButton>
  <SpButton slot="next" variant="ghost" size="sm" aria-label="Next month">›</SpButton>
</SpDatepicker>
```

### Composition parts

These part components apply the sub-part recipes that
`@phcdevworks/spectre-components` applies to marked children at runtime. In
Astro the parts are explicit components, so SSR output carries the classes with
no client script.

### SpCardBleed

`SpCardBleed` runs media or a full-width band flush through an `SpCard`'s
padding. `edges` takes one edge, an array of edges, or `"all"`; `padded` must
match the parent card's padding step.

```astro
<SpCard padded="lg">
  <SpCardBleed edges={["top", "left", "right"]} padded="lg" as="figure">
    <img src="/cover.jpg" alt="" />
  </SpCardBleed>
  <p>Card body</p>
</SpCard>
```

### SpDropdownMenu

`SpDropdownMenu` renders the menu panel inside `SpDropdown` and forwards `open`,
`placement`, `mega`, `viewport`, `accent`, and `accentColor`.

```astro
<SpDropdown>
  <SpButton variant="secondary">Options</SpButton>
  <SpDropdownMenu open aria-label="Options">
    <SpDropdownHeader>Account</SpDropdownHeader>
    <SpDropdownItem href="/settings">Settings</SpDropdownItem>
    <SpDropdownDivider />
    <SpDropdownItem disabled>Archive</SpDropdownItem>
  </SpDropdownMenu>
</SpDropdown>
```

### SpDropdownItem

`SpDropdownItem` renders an `a` when `href` is set and a `button` otherwise
(override with `as`). It forwards `active`, `selected`, `disabled`, `hovered`,
and `focused`. Disabled links drop their `href`; selected links get
`aria-current="page"`.

### SpDropdownHeader

`SpDropdownHeader` labels a group of dropdown items (`div` by default).

### SpDropdownDivider

`SpDropdownDivider` renders an `<hr>` between dropdown item groups.

### SpFooterHeading

`SpFooterHeading` renders a footer column heading (`h2` by default; use `as` to
match the document outline).

### SpFooterText

`SpFooterText` renders footer body text in a `p`. Set `muted` for the muted
recipe (for example, copyright lines).

### SpFooterLinks

`SpFooterLinks` renders the footer link list (`ul` by default). Place
`SpFooterLink` items inside `li` elements.

```astro
<SpFooter>
  <SpFooterHeading>Company</SpFooterHeading>
  <SpFooterLinks aria-label="Company">
    <li><SpFooterLink href="/about">About</SpFooterLink></li>
  </SpFooterLinks>
  <SpFooterDivider />
  <SpFooterText muted>© PHCDevworks</SpFooterText>
</SpFooter>
```

### SpFooterDivider

`SpFooterDivider` renders an `<hr>` between footer rows.

### SpNavLinks

`SpNavLinks` groups the links inside `SpNav` (`div` or `ul`).

### SpSidebarGroup

`SpSidebarGroup` renders a collapsible native `<details>` group with a styled
`<summary>`. Pass `label` or use the `summary` slot, and `open` for the initial
state.

```astro
<SpSidebar>
  <SpSidebarHeader>Docs</SpSidebarHeader>
  <SpSidebarGroup label="Guides" open>
    <SpSidebarLink href="/guides/intro">Intro</SpSidebarLink>
  </SpSidebarGroup>
</SpSidebar>
```

### SpSidebarHeader

`SpSidebarHeader` renders a sidebar section header (`div` by default).

### SpTableRow

`SpTableRow` renders a `<tr>` for `SpTable` and forwards the contextual
`variant` (`neutral`, `info`, `success`, `warning`, `danger`) and `selected`,
which also sets `aria-selected`.

### SpCarouselSlide

`SpCarouselSlide` renders a carousel slide with `role="group"` and
`aria-roledescription="slide"`. Mark the visible slide `active` and label each
slide (for example, `"1 of 3"`).

### SpCarouselIndicator

`SpCarouselIndicator` renders an indicator button for `SpCarousel`'s
`indicators` slot. `aria-label` is required; `active` adds `aria-current="true"`
and `target` sets `aria-controls`.

```astro
<SpCarousel aria-label="Highlights">
  <SpCarouselSlide id="slide-1" active aria-label="1 of 2">First</SpCarouselSlide>
  <SpCarouselSlide id="slide-2" aria-label="2 of 2">Second</SpCarouselSlide>
  <Fragment slot="indicators">
    <SpCarouselIndicator active target="slide-1" aria-label="Go to slide 1" />
    <SpCarouselIndicator target="slide-2" aria-label="Go to slide 2" />
  </Fragment>
</SpCarousel>
```

---

## Polymorphic Rendering (`as` prop)

Most components accept an `as` prop to change the rendered HTML element without
changing component behavior or styling.

```astro
<!-- SpButton: renders <button> by default -->
<SpButton variant="primary">Submit</SpButton>

<!-- SpButton: renders <a> with all button styling -->
<SpButton variant="primary" as="a" href="/get-started">Get started</SpButton>

<!-- SpCard: semantic article markup -->
<SpCard variant="elevated" as="article">
  <h2>Article title</h2>
</SpCard>

<!-- SpBadge: inline time element -->
<SpBadge variant="primary" as="time" datetime="2026-01-01">Jan 2026</SpBadge>
```

**Disabled navigation:** When `disabled` is set on an anchor (`as="a"`), the
`href` is suppressed so the element is not keyboard-navigable.
`aria-disabled="true"` is always set alongside `disabled`.

**Button type:** When `as="button"` (the default for `SpButton`), `type`
defaults to `"button"` to prevent accidental form submission. Pass
`type="submit"` explicitly when needed.

**Non-native interactive elements:** Setting `interactive={true}` on a `div` or
`span` adds `role="button"` and `tabindex="0"` automatically. Use this only when
a native `button` or `a` is genuinely impractical.

## SSR And Static Site Behavior

`@phcdevworks/spectre-ui-astro` works in all Astro output modes: `"static"`,
`"server"`, and `"hybrid"`.

**No client-side JavaScript.** Every component renders entirely at build time or
in the server step. No hydration directives are needed or used. Interactive
styles (hover, focus, active) are driven by CSS from `@phcdevworks/spectre-ui`.

**Deterministic markup.** All IDs, class names, and attributes are computed from
explicit props. Every render of the same props produces identical HTML — safe
for SSR streaming and static generation.

**`SpInput` explicit `id` requirement.** When any of `label`, `helperText`, or
`errorMessage` are passed, an explicit `id` prop is required. Without it, the
component throws during render to prevent nondeterministic
`for`/`aria-describedby` wiring in server-rendered and statically generated
output.

```astro
<!-- id is required whenever label, helperText, or errorMessage is set -->
<SpInput id="email" label="Email" name="email" />
```

Omitting `id` when `label` is set throws at render time with a clear error
message. This applies in both SSR and static builds.

**CSS in SSR.** Import the Spectre UI stylesheet in your Astro layout once.
Astro handles CSS bundling and injection in both SSR and static builds — no
runtime style injection occurs from this package.

## Recipe Helpers

The package re-exports class recipe functions from `@phcdevworks/spectre-ui`.
Use these when you need Spectre-aligned class names outside of the Astro
components — in layout markup, in headless patterns, or when mapping over
dynamic data.

```astro
---
// Using getButtonClasses to style plain anchor tags in a nav
import { getButtonClasses } from '@phcdevworks/spectre-ui-astro'

const navClass = getButtonClasses({ variant: 'ghost', size: 'sm' })
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]
---

<nav>
  {links.map(link => (
    <a class={navClass} href={link.href}>{link.label}</a>
  ))}
</nav>
```

| Helper                                | For                                               |
| ------------------------------------- | ------------------------------------------------- |
| `getAccordion*Classes`                | Accordion root and item structure                 |
| `getAlertClasses`                     | Alert class generation                            |
| `getAlertIconClasses`                 | Alert icon wrapper                                |
| `getAlertDismissClasses`              | Alert dismiss control                             |
| `getAvatarClasses`                    | Avatar class generation                           |
| `getButtonClasses`                    | Button class generation                           |
| `getBreadcrumb*Classes`               | Breadcrumb root and item structure                |
| `getCardClasses`                      | Card class generation                             |
| `getCardBleedClasses`                 | Full-bleed child composition inside a padded card |
| `getCarousel*Classes`                 | Carousel root, slides, controls, and indicators   |
| `getChoiceCardClasses`                | Whole-card radio/checkbox option                  |
| `getBadgeClasses`                     | Badge class generation                            |
| `getContainerClasses`                 | Container class generation                        |
| `getDatepicker*Classes`               | Datepicker panel, header, grid, and weekdays      |
| `getDayClasses`                       | Calendar day cell                                 |
| `getDisplayClasses`                   | Display (hero) typography                         |
| `getDropdownClasses`                  | Dropdown root classes                             |
| `getDropdownMenuClasses`              | Dropdown menu container                           |
| `getDropdownItemClasses`              | Individual dropdown item                          |
| `getDropdownHeaderClasses`            | Dropdown menu section header                      |
| `getDropdownDividerClasses`           | Dropdown menu divider                             |
| `getExternalAuthButton*Classes`       | Third-party sign-in button and icon slot          |
| `getFileInputClasses`                 | Native file input                                 |
| `getFooterClasses`                    | Footer class generation                           |
| `getHeadingClasses`                   | Heading typography presets                        |
| `getIconBoxClasses`                   | Icon box class generation                         |
| `getInputClasses`                     | Input class generation                            |
| `getInputGroup*Classes`               | Input group wrapper and addon                     |
| `getLeadClasses`                      | Lead paragraph typography                         |
| `getListGroup*Classes`                | List-group root and item structure                |
| `getModalClasses`                     | Modal root classes                                |
| `getModalOverlayClasses`              | Modal overlay/backdrop classes                    |
| `getNavClasses`                       | Nav root classes                                  |
| `getNavLinksClasses`                  | Nav links container                               |
| `getNavLinkClasses`                   | Individual nav link                               |
| `getOffcanvas*Classes`                | Offcanvas panel and backdrop structure            |
| `getPagination*Classes`               | Pagination root, items, and ellipsis              |
| `getPopover*Classes`                  | Popover root, header, body, and arrow             |
| `getPricingCardClasses`               | Pricing card root classes                         |
| `getPricingCardBadgeClasses`          | Pricing card badge wrapper                        |
| `getPricingCardPriceContainerClasses` | Pricing card price container                      |
| `getPricingCardPriceClasses`          | Pricing card price element                        |
| `getPricingCardDescriptionClasses`    | Pricing card description                          |
| `getProgress*Classes`                 | Progress track, bar, and label                    |
| `getProseClasses`                     | Long-form prose content                           |
| `getRangeClasses`                     | Native range slider                               |
| `getRatingClasses`                    | Rating root classes                               |
| `getRatingStarsClasses`               | Rating star container                             |
| `getRatingStarClasses`                | Individual star element                           |
| `getRatingTextClasses`                | Rating text element                               |
| `getSectionClasses`                   | Section class generation                          |
| `getSidebarClasses`                   | Sidebar root classes                              |
| `getSidebarGroupClasses`              | Collapsible sidebar group                         |
| `getSidebarGroupSummaryClasses`       | Sidebar group summary                             |
| `getSidebarLinkClasses`               | Individual sidebar link                           |
| `getSidebarHeaderClasses`             | Sidebar section header                            |
| `getSidebarBackdropClasses`           | Sidebar off-canvas backdrop                       |
| `getSidebarToggleClasses`             | Sidebar toggle button classes                     |
| `getStackClasses`                     | Stack class generation                            |
| `getStepper*Classes`                  | Stepper root, steps, indicators, and labels       |
| `getSwitchClasses`                    | Toggle switch                                     |
| `getTable*Classes`                    | Table wrapper, table, and row classes             |
| `getTabs*Classes`                     | Tabs root, list, items, and panels                |
| `getTestimonialClasses`               | Testimonial root classes                          |
| `getTestimonialQuoteClasses`          | Quote wrapper                                     |
| `getTestimonialAuthorClasses`         | Author section wrapper                            |
| `getTestimonialAuthorInfoClasses`     | Author info wrapper                               |
| `getTestimonialAuthorNameClasses`     | Author name element                               |
| `getTestimonialAuthorTitleClasses`    | Author title element                              |
| `getTextClasses`                      | Typography class generation                       |
| `getToastClasses`                     | Toast root classes                                |
| `getToastIconClasses`                 | Toast icon wrapper                                |
| `getTooltipClasses`                   | Tooltip class generation                          |

Recipe option and variant types are also re-exported: `AlertRecipeOptions`,
`AlertVariant`, `AlertSize`, `AvatarRecipeOptions`, `AvatarShape`, `AvatarSize`,
`BadgeRecipeOptions`, `BadgeVariant`, `BadgeSize`, `ButtonRecipeOptions`,
`ButtonVariant`, `ButtonSize`, `CardRecipeOptions`, `CardVariant`,
`ContainerRecipeOptions`, `ContainerMaxWidth`, `DropdownRecipeOptions`,
`DropdownMenuRecipeOptions`, `DropdownItemRecipeOptions`, `DropdownPlacement`,
`FooterRecipeOptions`, `IconBoxRecipeOptions`, `IconBoxVariant`, `IconBoxSize`,
`InputRecipeOptions`, `InputState`, `InputSize`, `ModalRecipeOptions`,
`ModalOverlayRecipeOptions`, `NavRecipeOptions`, `NavAlign`,
`NavLinkRecipeOptions`, `PricingCardRecipeOptions`, `RatingRecipeOptions`,
`SectionRecipeOptions`, `SidebarRecipeOptions`, `SidebarLinkRecipeOptions`,
`SidebarLinkLevel`, `StackRecipeOptions`, `StackDirection`, `StackBasis`,
`StackAlign`, `StackGap`, `TestimonialRecipeOptions`, `TextRecipeOptions`,
`TextSize`, `TextVariant`, `TextFamily`, `TextTransform`, `ToastRecipeOptions`,
`ToastIconRecipeOptions`, `ToastVariant`, `TooltipRecipeOptions`,
`TooltipPlacement`, `GridRecipeOptions`, `GridAlign`, `GridColumns`, `GridGap`,
`GridSpan`, `GridSpanOptions`.

The corresponding accordion, breadcrumb, carousel, choice-card, datepicker, day,
display, external-auth-button, file-input, heading, input-group, list-group,
offcanvas, pagination, popover, progress, prose, range, stepper, switch, table,
and tabs recipe option, variant, size, placement, orientation, state, and accent
types are also re-exported, as are the container padding, section spacing/gap,
card padding, and grid column-start types. Every public `get*Classes` helper
from `@phcdevworks/spectre-ui` is re-exported; the upstream parity test fails if
one is missed.

## Package Exports

### Root imports

```ts
import {
  SpAccordion,
  SpAccordionItem,
  SpAlert,
  SpAvatar,
  SpBadge,
  SpButton,
  SpBreadcrumb,
  SpCard,
  SpCarousel,
  SpCheckbox,
  SpContainer,
  SpDropdown,
  SpFieldset,
  SpFooter,
  SpGrid,
  SpIconBox,
  SpInput,
  SpLabel,
  SpListGroup,
  SpListGroupItem,
  SpModal,
  SpNav,
  SpOffcanvas,
  SpPagination,
  SpPricingCard,
  SpRadio,
  SpRating,
  SpSection,
  SpSelect,
  SpSidebar,
  SpSidebarToggle,
  SpSpinner,
  SpStack,
  SpStepper,
  SpTabPanel,
  SpTable,
  SpTabs,
  SpTag,
  SpTestimonial,
  SpText,
  SpTextarea,
  SpToast,
  SpTooltip
} from '@phcdevworks/spectre-ui-astro'

import {
  getButtonClasses,
  getBadgeClasses,
  getCardClasses
  // …all recipe helpers and types
} from '@phcdevworks/spectre-ui-astro'
```

### Direct component entry points

```ts
import SpAccordion from '@phcdevworks/spectre-ui-astro/components/SpAccordion.astro'
import SpAccordionItem from '@phcdevworks/spectre-ui-astro/components/SpAccordionItem.astro'
import SpAlert from '@phcdevworks/spectre-ui-astro/components/SpAlert.astro'
import SpAvatar from '@phcdevworks/spectre-ui-astro/components/SpAvatar.astro'
import SpBadge from '@phcdevworks/spectre-ui-astro/components/SpBadge.astro'
import SpButton from '@phcdevworks/spectre-ui-astro/components/SpButton.astro'
import SpBreadcrumb from '@phcdevworks/spectre-ui-astro/components/SpBreadcrumb.astro'
import SpCard from '@phcdevworks/spectre-ui-astro/components/SpCard.astro'
import SpCardBleed from '@phcdevworks/spectre-ui-astro/components/SpCardBleed.astro'
import SpCarousel from '@phcdevworks/spectre-ui-astro/components/SpCarousel.astro'
import SpCarouselIndicator from '@phcdevworks/spectre-ui-astro/components/SpCarouselIndicator.astro'
import SpCarouselSlide from '@phcdevworks/spectre-ui-astro/components/SpCarouselSlide.astro'
import SpCheckbox from '@phcdevworks/spectre-ui-astro/components/SpCheckbox.astro'
import SpChoiceCard from '@phcdevworks/spectre-ui-astro/components/SpChoiceCard.astro'
import SpContainer from '@phcdevworks/spectre-ui-astro/components/SpContainer.astro'
import SpDatepicker from '@phcdevworks/spectre-ui-astro/components/SpDatepicker.astro'
import SpDay from '@phcdevworks/spectre-ui-astro/components/SpDay.astro'
import SpDisplay from '@phcdevworks/spectre-ui-astro/components/SpDisplay.astro'
import SpDropdown from '@phcdevworks/spectre-ui-astro/components/SpDropdown.astro'
import SpDropdownDivider from '@phcdevworks/spectre-ui-astro/components/SpDropdownDivider.astro'
import SpDropdownHeader from '@phcdevworks/spectre-ui-astro/components/SpDropdownHeader.astro'
import SpDropdownItem from '@phcdevworks/spectre-ui-astro/components/SpDropdownItem.astro'
import SpDropdownMenu from '@phcdevworks/spectre-ui-astro/components/SpDropdownMenu.astro'
import SpExternalAuthButton from '@phcdevworks/spectre-ui-astro/components/SpExternalAuthButton.astro'
import SpFieldset from '@phcdevworks/spectre-ui-astro/components/SpFieldset.astro'
import SpFileInput from '@phcdevworks/spectre-ui-astro/components/SpFileInput.astro'
import SpFooter from '@phcdevworks/spectre-ui-astro/components/SpFooter.astro'
import SpFooterChip from '@phcdevworks/spectre-ui-astro/components/SpFooterChip.astro'
import SpFooterDivider from '@phcdevworks/spectre-ui-astro/components/SpFooterDivider.astro'
import SpFooterHeading from '@phcdevworks/spectre-ui-astro/components/SpFooterHeading.astro'
import SpFooterLink from '@phcdevworks/spectre-ui-astro/components/SpFooterLink.astro'
import SpFooterLinks from '@phcdevworks/spectre-ui-astro/components/SpFooterLinks.astro'
import SpFooterText from '@phcdevworks/spectre-ui-astro/components/SpFooterText.astro'
import SpGrid from '@phcdevworks/spectre-ui-astro/components/SpGrid.astro'
import SpHeading from '@phcdevworks/spectre-ui-astro/components/SpHeading.astro'
import SpIconBox from '@phcdevworks/spectre-ui-astro/components/SpIconBox.astro'
import SpInput from '@phcdevworks/spectre-ui-astro/components/SpInput.astro'
import SpInputGroup from '@phcdevworks/spectre-ui-astro/components/SpInputGroup.astro'
import SpInputGroupAddon from '@phcdevworks/spectre-ui-astro/components/SpInputGroupAddon.astro'
import SpLabel from '@phcdevworks/spectre-ui-astro/components/SpLabel.astro'
import SpLead from '@phcdevworks/spectre-ui-astro/components/SpLead.astro'
import SpListGroup from '@phcdevworks/spectre-ui-astro/components/SpListGroup.astro'
import SpListGroupItem from '@phcdevworks/spectre-ui-astro/components/SpListGroupItem.astro'
import SpModal from '@phcdevworks/spectre-ui-astro/components/SpModal.astro'
import SpNav from '@phcdevworks/spectre-ui-astro/components/SpNav.astro'
import SpNavItem from '@phcdevworks/spectre-ui-astro/components/SpNavItem.astro'
import SpNavLinks from '@phcdevworks/spectre-ui-astro/components/SpNavLinks.astro'
import SpOffcanvas from '@phcdevworks/spectre-ui-astro/components/SpOffcanvas.astro'
import SpPagination from '@phcdevworks/spectre-ui-astro/components/SpPagination.astro'
import SpPopover from '@phcdevworks/spectre-ui-astro/components/SpPopover.astro'
import SpPricingCard from '@phcdevworks/spectre-ui-astro/components/SpPricingCard.astro'
import SpProgress from '@phcdevworks/spectre-ui-astro/components/SpProgress.astro'
import SpProse from '@phcdevworks/spectre-ui-astro/components/SpProse.astro'
import SpRadio from '@phcdevworks/spectre-ui-astro/components/SpRadio.astro'
import SpRange from '@phcdevworks/spectre-ui-astro/components/SpRange.astro'
import SpRating from '@phcdevworks/spectre-ui-astro/components/SpRating.astro'
import SpSection from '@phcdevworks/spectre-ui-astro/components/SpSection.astro'
import SpSelect from '@phcdevworks/spectre-ui-astro/components/SpSelect.astro'
import SpSidebar from '@phcdevworks/spectre-ui-astro/components/SpSidebar.astro'
import SpSidebarGroup from '@phcdevworks/spectre-ui-astro/components/SpSidebarGroup.astro'
import SpSidebarHeader from '@phcdevworks/spectre-ui-astro/components/SpSidebarHeader.astro'
import SpSidebarLink from '@phcdevworks/spectre-ui-astro/components/SpSidebarLink.astro'
import SpSidebarToggle from '@phcdevworks/spectre-ui-astro/components/SpSidebarToggle.astro'
import SpSpinner from '@phcdevworks/spectre-ui-astro/components/SpSpinner.astro'
import SpStack from '@phcdevworks/spectre-ui-astro/components/SpStack.astro'
import SpStepper from '@phcdevworks/spectre-ui-astro/components/SpStepper.astro'
import SpSwitch from '@phcdevworks/spectre-ui-astro/components/SpSwitch.astro'
import SpTableRow from '@phcdevworks/spectre-ui-astro/components/SpTableRow.astro'
import SpTabPanel from '@phcdevworks/spectre-ui-astro/components/SpTabPanel.astro'
import SpTable from '@phcdevworks/spectre-ui-astro/components/SpTable.astro'
import SpTabs from '@phcdevworks/spectre-ui-astro/components/SpTabs.astro'
import SpTag from '@phcdevworks/spectre-ui-astro/components/SpTag.astro'
import SpTestimonial from '@phcdevworks/spectre-ui-astro/components/SpTestimonial.astro'
import SpText from '@phcdevworks/spectre-ui-astro/components/SpText.astro'
import SpTextarea from '@phcdevworks/spectre-ui-astro/components/SpTextarea.astro'
import SpToast from '@phcdevworks/spectre-ui-astro/components/SpToast.astro'
import SpTooltip from '@phcdevworks/spectre-ui-astro/components/SpTooltip.astro'
```

The adapter does not export a CSS helper or path. Import the stylesheet directly
from `@phcdevworks/spectre-ui/index.css`.

## Component Family Stability

Each component family is classified by its support status in this adapter.

| Family               | Status     | Notes                                                              |
| -------------------- | ---------- | ------------------------------------------------------------------ |
| accordion            | **stable** | Native details semantics, slot, state, and SSR coverage            |
| alert                | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| avatar               | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| badge                | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| breadcrumb           | **stable** | Item, current-page, separator, and SSR coverage                    |
| button               | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| card                 | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| carousel             | **stable** | Shell, controls, slot, ARIA, and SSR coverage                      |
| checkbox             | **stable** | Full prop, ARIA, and SSR coverage                                  |
| choice-card          | **stable** | Label-wrapped radio/checkbox, forced state, slot, and SSR coverage |
| container            | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| datepicker           | **stable** | Deterministic month grid, locale, bounds, ARIA, and SSR coverage   |
| day                  | **stable** | Selected/today/outside/disabled state, ARIA, and SSR coverage      |
| display              | **stable** | Level, element override, slot, and SSR coverage                    |
| dropdown             | **stable** | Full prop, slot, and SSR coverage                                  |
| external-auth-button | **stable** | Icon slot, loading/disabled, link mode, ARIA, and SSR coverage     |
| fieldset             | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| file-input           | **stable** | Size/state, native file attributes, ARIA, and SSR coverage         |
| footer               | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| grid                 | **stable** | Full prop, slot, and SSR coverage                                  |
| heading              | **stable** | Level, element override, slot, and SSR coverage                    |
| icon-box             | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| input                | **stable** | Full prop, ARIA, SSR, and explicit `id` invariant coverage         |
| input-group          | **stable** | Group role, addon, disabled, and SSR coverage                      |
| label                | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| lead                 | **stable** | Element override, slot, and SSR coverage                           |
| list-group           | **stable** | Root/item, interaction-state, slot, and SSR coverage               |
| modal                | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| nav                  | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| offcanvas            | **stable** | Controlled panel, backdrop, slot, ARIA, and SSR coverage           |
| pagination           | **stable** | Range, link-template, ARIA, and SSR coverage                       |
| popover              | **stable** | Placement/open, header/body/arrow, ARIA, and SSR coverage          |
| pricing-card         | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| progress             | **stable** | Determinate/indeterminate, label, ARIA, and SSR coverage           |
| prose                | **stable** | Element override, slot, and SSR coverage                           |
| radio                | **stable** | Full prop, ARIA, and SSR coverage                                  |
| range                | **stable** | Bounds, WebKit fill mirroring, ARIA, and SSR coverage              |
| rating               | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| section              | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| select               | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| sidebar              | **stable** | Full prop, slot, ARIA, and SSR coverage; owns toggle interaction   |
| spinner              | **stable** | Full prop, ARIA, and SSR coverage                                  |
| stack                | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| stepper              | **stable** | Derived/explicit state, ARIA, and SSR coverage                     |
| switch               | **stable** | Size/state, switch role, ARIA, and SSR coverage                    |
| table                | **stable** | Responsive wrapper, semantic table, and SSR coverage               |
| tabs                 | **stable** | Controlled selection, panel association, ARIA, and SSR coverage    |
| tag                  | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| testimonial          | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| text                 | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| textarea             | **stable** | Full prop, ARIA, and SSR coverage                                  |
| toast                | **stable** | Full prop, slot, ARIA, and SSR coverage                            |
| tooltip              | **stable** | Full prop, slot, ARIA, and SSR coverage                            |

**stable** — the component family is fully wired to upstream recipes, covered by
SSR and unit tests, and declared in `astro-adapter.contract.json`. Breaking
changes require a semver major bump.

**provisional** — a family that is partially implemented or pending full test
coverage. Not yet safe to depend on across minor releases.

**not yet supported** — families present in the upstream Spectre UI surface that
this adapter has not yet bound.

The machine-readable classification lives in `astro-adapter.contract.json` under
`componentFamilies`.

## Relationship To The Rest Of Spectre

| Package                                                                        | Owns                                                       |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [`@phcdevworks/spectre-tokens`](https://github.com/phcdevworks/spectre-tokens) | Design values, semantic token meaning, and token contracts |
| [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui)         | CSS, utilities, and type-safe class recipes                |
| `@phcdevworks/spectre-components`                                              | Framework-agnostic Lit web component behavior              |
| `@phcdevworks/spectre-ui-astro`                                                | Astro-native adapter delivery and framework ergonomics     |

Tokens define meaning. UI defines the styling contract. Components define
framework-agnostic custom element behavior. This package defines Astro delivery
and consumes the upstream UI contract directly.

## Development

### Setup

```bash
git clone https://github.com/phcdevworks/spectre-ui-astro.git
cd spectre-ui-astro
npm install
```

### Common commands

| Command             | Purpose                                               |
| ------------------- | ----------------------------------------------------- |
| `npm run check`     | Full pre-merge check: lint → build → typecheck → test |
| `npm run ci:verify` | Underlying verification sequence                      |
| `npm run build`     | Build the distributable package                       |
| `npm run typecheck` | Type-check without emitting                           |
| `npm test`          | Run the Vitest test suite                             |
| `npm run lint`      | Run ESLint                                            |
| `npm run dev`       | Watch mode for development                            |

Run `npm run check` before opening any pull request. It is the single gate used
by CI.

This project requires Node.js `^22.13.0 || >=24.0.0`.

### Key source areas

- `src/components/` — Astro component implementations
- `src/recipes/` — re-exported recipe bindings from `@phcdevworks/spectre-ui`
- `src/index.ts` — package exports
- `tests/` — unit, SSR, and contract tests
- `examples/` — demo Astro app for manual validation (not a contract authority;
  see `examples/README.md`)
- `scripts/` — packaging and contract validation scripts

### Troubleshooting

**`npm run build` fails with a missing recipe or type** The upstream
`@phcdevworks/spectre-ui` peer dependency must be installed. Run `npm install`
from the repo root. If a recipe or type is missing from upstream, do not add it
locally — open an issue in `@phcdevworks/spectre-ui` first.

**Tests fail after pulling upstream changes** Run `npm install` to sync
installed peer versions, then re-run `npm test`. If `exports.test.ts` fails, the
public contract has drifted — check `src/index.ts` and `package.json` exports
against the test expectations.

**`SpInput` renders without accessible label associations** `SpInput` requires
an explicit `id` prop whenever `label`, `helperText`, or `errorMessage` is
passed. Without it, the component throws at render time to prevent broken
accessibility wiring.

**Example app fails to build** Run `npm install` from within `examples/` (not
`npm ci`) because the example depends on the parent package through a local
`file:..` link. Do not commit an example `package-lock.json` as a CI contract.

## Validation

Run the full validation gate before any pull request:

```bash
npm run check
```

This runs: lint → build → typecheck → tests. All steps must pass.

## AI And Automation Boundaries

Claude Code (`claude-sonnet-4-6`) is the primary development agent for this
repository. Codex handles releases, including cutting tagged releases and GitHub
Releases, and production stabilization. Jules handles small automated fixes and
micro-updates. GitHub Copilot provides development support.

Codex, Copilot, and Jules have commit, push, and tag authority in this
repository. Claude Code has no git access and hands validated work to Codex or
the human maintainer. Publishing to npm remains the human maintainer's sole
authority. See [AGENTS.md](AGENTS.md) for the full commit policy and
release-authority grant.

**Protected from automated change:** SSR rendering invariants, the thin-adapter
rule (no local CSS, no token redefinition, no recipe reimplementation), and the
public export surface. See [AGENTS.md](AGENTS.md) for full agent governance and
boundary rules.

## Contributing

PHCDevworks maintains this package as part of the Spectre suite.

When contributing:

- keep Astro components aligned with the upstream `@phcdevworks/spectre-ui`
  contract
- do not redefine tokens, CSS behavior, or recipe logic in this package
- keep the adapter SSR-friendly, type-safe, and framework-appropriate
- run `npm run check` before opening a pull request — it runs lint, build,
  typecheck, and tests in one step

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

## License

MIT © PHCDevworks. See [LICENSE](LICENSE).
