# @phcdevworks/spectre-ui-astro

## Repository Snapshot

| Field | Value |
|-------|-------|
| Project team | `project-design` |
| Repository role | Spectre L3b Astro adapter |
| Package/artifact | `@phcdevworks/spectre-ui-astro` |
| Current version/status | 2.7.0 |

## Standard Workflow

1. Read [AGENTS.md](AGENTS.md), then the agent-specific guide for the task.
2. Check [TODO.md](TODO.md) and [ROADMAP.md](ROADMAP.md) for current scope.
3. Make the smallest repo-local change that satisfies the task.
4. Run `npm run check` when validation is required or practical.
5. Update docs and [CHANGELOG.md](CHANGELOG.md) only when behavior, public
   contracts, or release-relevant metadata changed.

## Documentation Map

| Guide | Path |
|-------|------|
| Agent rules | [AGENTS.md](AGENTS.md) |
| Claude Code | [CLAUDE.md](CLAUDE.md) |
| Codex | [CODEX.md](CODEX.md) |
| Copilot | [COPILOT.md](COPILOT.md) |
| Jules | [JULES.md](JULES.md) |
| Roadmap | [ROADMAP.md](ROADMAP.md) |
| Todo | [TODO.md](TODO.md) |
| Changelog | [CHANGELOG.md](CHANGELOG.md) |
| Security | [SECURITY.md](SECURITY.md) |

[![npm version](https://img.shields.io/npm/v/@phcdevworks/spectre-ui-astro)](https://www.npmjs.com/package/@phcdevworks/spectre-ui-astro)
[![CI](https://github.com/phcdevworks/spectre-ui-astro/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/phcdevworks/spectre-ui-astro/actions/workflows/ci.yml)
[![License](https://img.shields.io/npm/l/@phcdevworks/spectre-ui-astro)](LICENSE)
[![Node](https://img.shields.io/node/v/@phcdevworks/spectre-ui-astro)](https://nodejs.org)

Astro-native components for the [Spectre UI](https://github.com/phcdevworks/spectre-ui) design system. Drop Spectre components into any Astro project — SSR, SSG, or hybrid — without writing CSS, redefining tokens, or reimplementing recipe logic.

[Contributing](CONTRIBUTING.md) | [Code of Conduct](CODE_OF_CONDUCT.md) |
[Changelog](CHANGELOG.md) | [Roadmap](ROADMAP.md) |
[Security Policy](SECURITY.md)

## What Astro developers get

- **Ten ready-to-use Astro components** — alerts, avatars, badges, buttons, cards, icon boxes, inputs, pricing cards, ratings, and testimonials
- **SSR-safe by default** — deterministic markup, no client-side JavaScript, stable accessibility wiring
- **Thin wrapper pattern** — styling comes entirely from `@phcdevworks/spectre-ui`; this package adds Astro slots, typed props, and framework ergonomics
- **Re-exported recipe helpers** — use the same class functions the components use, directly from your Astro frontmatter or TypeScript

## Installation

```bash
npm install @phcdevworks/spectre-ui-astro @phcdevworks/spectre-ui
```

`@phcdevworks/spectre-ui` is a required peer dependency. It owns the CSS, class recipes, and design system behavior that powers every component in this package. Install this package inside an Astro project; `astro` is also a peer dependency supplied by the consuming app.

If your project works with Spectre design tokens directly:

```bash
npm install @phcdevworks/spectre-tokens
```

## CSS setup

This package ships no CSS. Add the Spectre UI stylesheet once in your Astro layout:

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

All Spectre components pick up the stylesheet through the layout. Do not import it per-component — CSS ownership stays with `@phcdevworks/spectre-ui`.

## Quick start

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import {
  SpBadge,
  SpButton,
  SpCard,
  SpIconBox,
  SpInput,
  SpPricingCard,
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

All components are SSR-safe and ship no client-side JavaScript. Styling comes from the upstream Spectre UI stylesheet — this package adds no local CSS. Every component accepts a `class` prop for additional classes and spreads unknown props onto the root element.

---

### SpButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ButtonVariant` | — | Visual style: `"primary"` `"secondary"` `"ghost"` |
| `size` | `ButtonSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"button" \| "a" \| "span" \| "div" \| "li"` | `"button"` | Rendered element |
| `href` | `string` | — | URL when `as="a"` |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Button type (button elements only) |
| `disabled` | `boolean` | — | Disables the element; suppresses navigation on anchors |
| `loading` | `boolean` | — | Loading state; implies `disabled` |
| `fullWidth` | `boolean` | — | Stretches to fill its container |
| `iconOnly` | `boolean` | — | Removes text padding for icon-only buttons |
| `pill` | `boolean` | — | Fully rounded corners |
| `hovered` | `boolean` | — | Force-applies hover styling |
| `focused` | `boolean` | — | Force-applies focus styling |
| `active` | `boolean` | — | Force-applies active styling |
| `aria-label` | `string` | — | Accessible label |
| `tabindex` | `number` | — | Tab index override |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpButton variant="primary" size="lg">Get started</SpButton>
<SpButton variant="ghost" as="a" href="/docs">Read docs</SpButton>
<SpButton variant="primary" type="submit">Save</SpButton>
<SpButton variant="primary" loading>Saving…</SpButton>
<SpButton variant="secondary" as="a" href="/item" disabled>Unavailable</SpButton>
```

---

### SpCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `CardVariant` | — | Visual style: `"elevated"` `"outline"` `"flat"` `"ghost"` |
| `as` | `"div" \| "section" \| "article" \| "aside" \| "a" \| "button" \| "li" \| …` | `"div"` | Rendered element |
| `interactive` | `boolean` | — | Adds hover/focus styles; adds `role="button"` for non-native elements |
| `padded` | `boolean` | — | Applies inner padding |
| `fullHeight` | `boolean` | — | Stretches to full container height |
| `disabled` | `boolean` | — | Disables the card; suppresses navigation on anchors |
| `loading` | `boolean` | — | Loading state |
| `href` | `string` | — | URL when `as="a"` |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

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
```

The default slot renders any child content.

---

### SpContainer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"div" \| "section" \| "main" \| "article" \| "aside"` | `"div"` | Rendered element |
| `id` | `string` | — | Element id |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpContainer>
  <p>Centered, max-width content.</p>
</SpContainer>

<SpContainer as="main" aria-label="Main content">
  <p>Semantic main wrapper.</p>
</SpContainer>
```

The default slot renders any child content.

---

### SpStack

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `StackDirection` | `"vertical"` | `"vertical"` \| `"horizontal"` |
| `as` | `"div" \| "section" \| "ul" \| "ol" \| "nav"` | `"div"` | Rendered element |
| `id` | `string` | — | Element id |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpStack>
  <p>Item one</p>
  <p>Item two</p>
</SpStack>

<SpStack direction="horizontal" as="nav" aria-label="Primary">
  <a href="/">Home</a>
  <a href="/about">About</a>
</SpStack>
```

The default slot renders any child content.

---

### SpSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"section" \| "div" \| "article" \| "aside" \| "main"` | `"section"` | Rendered element |
| `id` | `string` | — | Element id |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpSection aria-label="Features">
  <SpContainer>
    <h2>Features</h2>
  </SpContainer>
</SpSection>
```

The default slot renders any child content.

---

### SpGrid

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `GridColumns` | `1` | `1` \| `2` \| `3` \| `4` \| `6` \| `12` |
| `gap` | `GridGap` | `"md"` | `"sm"` \| `"md"` \| `"lg"` |
| `as` | `"div" \| "section" \| "ul" \| "ol"` | `"div"` | Rendered element |
| `id` | `string` | — | Element id |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpGrid columns={3} gap="lg">
  <SpCard>One</SpCard>
  <SpCard>Two</SpCard>
  <SpCard>Three</SpCard>
</SpGrid>
```

The default slot renders any child content.

---

### SpInput

`SpInput` renders a labeled input group: wrapper, optional label, input, optional helper text, and optional error message.

When `label`, `helperText`, or `errorMessage` is present, an explicit `id` is **required**. This is an SSR invariant — without a stable `id`, the `for`/`aria-describedby` associations would be nondeterministic. The component throws at render time if the requirement is violated.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | — | **Required** when using `label`, `helperText`, or `errorMessage` |
| `label` | `string` | — | Renders a `<label>` associated with the input |
| `helperText` | `string` | — | Renders helper text below the input |
| `errorMessage` | `string` | — | Renders an error message; suppresses `helperText` |
| `state` | `InputState` | — | `"default"` `"success"` `"error"` `"disabled"` `"loading"` |
| `size` | `InputSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `fullWidth` | `boolean` | — | Stretches input to fill its container |
| `pill` | `boolean` | — | Fully rounded corners |
| `disabled` | `boolean` | — | Disables the input |
| `loading` | `boolean` | — | Loading state |
| `as` | `"div" \| "form" \| "fieldset" \| …` | `"div"` | Rendered wrapper element |
| `class` | `string` | — | Additional CSS classes on the `<input>` element |
| `…rest` | — | — | Any HTML input attribute (`type`, `name`, `placeholder`, `required`, etc.) |

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

### SpAlert

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `AlertVariant` | `"info"` | Visual style: `"info"` `"success"` `"warning"` `"danger"` `"neutral"` |
| `size` | `AlertSize` | `"md"` | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"div" \| "section" \| "aside" \| "article"` | `"div"` | Rendered element |
| `dismissed` | `boolean` | — | Applies dismissed state styling |
| `interactive` | `boolean` | — | Adds hover/focus styles and `tabindex="0"` |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `disabled` | `boolean` | — | Disables the alert |
| `loading` | `boolean` | — | Loading state (also sets disabled behavior) |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpAlert variant="success">Your changes have been saved.</SpAlert>
<SpAlert variant="warning" size="sm">Session expires soon.</SpAlert>
<SpAlert variant="danger" dismissed>This alert has been dismissed.</SpAlert>
<SpAlert variant="info" as="aside" aria-label="Info notice">Read the docs.</SpAlert>
```

---

### SpAvatar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shape` | `AvatarShape` | `"circle"` | Shape: `"circle"` `"square"` |
| `size` | `AvatarSize` | `"md"` | Size: `"xs"` `"sm"` `"md"` `"lg"` `"xl"` |
| `as` | `"div" \| "span" \| "figure" \| "a" \| "button"` | `"div"` | Rendered element |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the avatar |
| `loading` | `boolean` | — | Loading state |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `placeholder` | `boolean` | — | Applies placeholder styling |
| `href` | `string` | — | URL when `as="a"` |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `BadgeVariant` | — | Visual style: `"primary"` `"success"` `"warning"` `"danger"` `"info"` |
| `size` | `BadgeSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"span" \| "div" \| "a" \| "button" \| "li" \| "time" \| "mark"` | `"span"` | Rendered element |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `disabled` | `boolean` | — | Disables the badge |
| `loading` | `boolean` | — | Loading state |
| `href` | `string` | — | URL when `as="a"` |
| `datetime` | `string` | — | Datetime value when `as="time"` |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpBadge variant="success">Active</SpBadge>
<SpBadge variant="warning" size="sm">Beta</SpBadge>
<SpBadge variant="primary" as="a" href="/changelog" interactive>New</SpBadge>
<SpBadge variant="danger" as="time" datetime="2025-01-01">Jan 2025</SpBadge>
```

---

### SpIconBox

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `IconBoxVariant` | — | Color: `"primary"` `"success"` `"warning"` `"danger"` `"info"` |
| `size` | `IconBoxSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"span" \| "div" \| "i" \| "a" \| "button" \| "li"` | `"span"` | Rendered element |
| `pill` | `boolean` | — | Fully rounded corners |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the icon box |
| `loading` | `boolean` | — | Loading state |
| `href` | `string` | — | URL when `as="a"` |
| `aria-label` | `string` | — | Accessible label (use when the icon conveys standalone meaning) |
| `class` | `string` | — | Additional CSS classes |

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

Use `aria-hidden="true"` on the icon when surrounding context already describes it. Use `aria-label` on the component when the icon box conveys standalone meaning.

---

### SpPricingCard

Named slots map to the structural sections of the pricing card. Slot wrappers render only when their slot is populated — empty slots produce no markup.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `featured` | `boolean` | — | Highlights the card as the recommended tier |
| `fullHeight` | `boolean` | — | Stretches to full container height |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the card |
| `loading` | `boolean` | — | Loading state |
| `as` | `"div" \| "section" \| "article" \| …` | `"div"` | Rendered element |
| `class` | `string` | — | Additional CSS classes |

| Slot | Description |
|------|-------------|
| `header` | Plan name or heading |
| `badge` | Tag or label (e.g., "Popular") |
| `price` | Price string or element |
| `description` | Short plan description |
| *(default)* | Feature list or body content |
| `footer` | CTA button or footer action |

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

Renders a star rating. Stars are built from `value`/`max`. Provide a custom star SVG via the `star-icon` slot. The star container is `aria-hidden="true"` — always pass `aria-label` for screen readers.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Number of filled stars |
| `max` | `number` | `5` | Total star count |
| `size` | `RatingSize` | — | Size |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the rating |
| `loading` | `boolean` | — | Loading state |
| `fullWidth` | `boolean` | — | Stretches to fill container |
| `pill` | `boolean` | — | Fully rounded corners |
| `as` | `"div" \| "span" \| "section" \| …` | `"div"` | Rendered element |
| `aria-label` | `string` | — | Screen-reader description of the rating value |
| `class` | `string` | — | Additional CSS classes |

| Slot | Description |
|------|-------------|
| `star-icon` | Custom star icon. Receives `isFilled` as a slot prop. Defaults to `★`. |
| *(default)* | Optional text shown after the stars (e.g., "4.8 out of 5") |

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

Named slots map to the structural sections of the testimonial. Slot wrappers render only when their slot is populated.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fullHeight` | `boolean` | — | Stretches to full container height |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the testimonial |
| `loading` | `boolean` | — | Loading state |
| `as` | `"div" \| "section" \| "article" \| "blockquote" \| …` | `"div"` | Rendered element |
| `class` | `string` | — | Additional CSS classes |

| Slot | Description |
|------|-------------|
| `quote` | Quotation text |
| `author-image` | Author avatar or image element |
| `author-name` | Author display name |
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

A non-interactive status indicator. Renders as `<div role="status">` with a default `aria-label` of `"Loading"`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `SpinnerVariant` | — | Color variant: `"primary"` `"secondary"` `"success"` `"warning"` `"danger"` `"info"` `"neutral"` `"accent"` `"cta"` |
| `size` | `SpinnerSize` | `"md"` | Size: `"sm"` `"md"` `"lg"` |
| `disabled` | `boolean` | — | Disabled state |
| `loading` | `boolean` | — | Loading state (also sets disabled behavior) |
| `aria-label` | `string` | `"Loading"` | Accessible label for the spinner |
| `id` | `string` | — | Element ID |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpSpinner />
<SpSpinner variant="primary" size="lg" />
<SpSpinner loading aria-label="Saving changes" />
```

---

### SpTag

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `TagVariant` | `"default"` | Visual style: `"default"` `"primary"` `"secondary"` `"success"` `"warning"` `"danger"` `"info"` `"neutral"` `"accent"` `"cta"` `"outline"` `"ghost"` |
| `size` | `TagSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"span" \| "div" \| "li" \| "a" \| "button"` | `"span"` | Rendered element |
| `dismissible` | `boolean` | — | Applies dismissible styling |
| `selected` | `boolean` | — | Applies selected state and `aria-pressed` |
| `interactive` | `boolean` | — | Adds hover/focus styles and `tabindex="0"` |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `disabled` | `boolean` | — | Disables the tag |
| `loading` | `boolean` | — | Loading state (also sets disabled behavior) |
| `href` | `string` | — | URL when `as="a"` |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes |

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fullWidth` | `boolean` | — | Stretches to full width |
| `as` | `"div" \| "nav"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `class` | `string` | — | Additional CSS classes |

`SpDropdown` renders the dropdown container only. Build the menu and items in the
default slot using the re-exported `getDropdownMenuClasses` and
`getDropdownItemClasses` helpers, since open/closed state and per-item
active/disabled/hover/focus state are consumer-driven.

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

### SpModal

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Applies open styling to the overlay and modal, and toggles `aria-hidden` |
| `fullWidth` | `boolean` | — | Stretches the modal to full width |
| `as` | `"div" \| "section"` | `"div"` | Rendered element for the modal |
| `id` | `string` | — | Element ID for the modal |
| `aria-label` | `string` | — | Accessible label for the modal |
| `aria-labelledby` | `string` | — | Associates a title element |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes for the modal |

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bordered` | `boolean` | — | Applies a border |
| `sticky` | `boolean` | — | Applies sticky positioning |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `as` | `"nav" \| "div" \| "header" \| "section"` | `"nav"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label for the nav landmark |
| `class` | `string` | — | Additional CSS classes |

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

<SpNav bordered sticky aria-label="Main">
  <div class={linksClass}>
    <a class={activeLinkClass} href="/" aria-current="page">Home</a>
    <a class={linkClass} href="/about">About</a>
  </div>
</SpNav>
```

---

### SpToast

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ToastVariant` | `"info"` | Visual style: `"info"` `"success"` `"warning"` `"danger"` |
| `dismissed` | `boolean` | — | Applies dismissed state styling |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `as` | `"div" \| "li" \| "section"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

`SpToast` renders `role="status"`, `aria-live="polite"`, and `aria-atomic="true"`
by default. Pass content to a named `icon` slot to wrap it in
`getToastIconClasses` styling; the wrapper is only rendered when the slot is
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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `TooltipPlacement` | `"top"` | Placement: `"top"` `"bottom"` `"left"` `"right"` |
| `visible` | `boolean` | — | Applies visible state styling |
| `as` | `"div" \| "span"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `role` | `string` | `"tooltip"` | ARIA role |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpTooltip placement="bottom" visible>Save your changes</SpTooltip>
```

---

## Polymorphic rendering (`as` prop)

Most components accept an `as` prop to change the rendered HTML element without changing component behavior or styling.

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

**Disabled navigation:** When `disabled` is set on an anchor (`as="a"`), the `href` is suppressed so the element is not keyboard-navigable. `aria-disabled="true"` is always set alongside `disabled`.

**Button type:** When `as="button"` (the default for `SpButton`), `type` defaults to `"button"` to prevent accidental form submission. Pass `type="submit"` explicitly when needed.

**Non-native interactive elements:** Setting `interactive={true}` on a `div` or `span` adds `role="button"` and `tabindex="0"` automatically. Use this only when a native `button` or `a` is genuinely impractical.

## SSR and static site behavior

`@phcdevworks/spectre-ui-astro` works in all Astro output modes: `"static"`, `"server"`, and `"hybrid"`.

**No client-side JavaScript.** Every component renders entirely at build time or in the server step. No hydration directives are needed or used. Interactive styles (hover, focus, active) are driven by CSS from `@phcdevworks/spectre-ui`.

**Deterministic markup.** All IDs, class names, and attributes are computed from explicit props. Every render of the same props produces identical HTML — safe for SSR streaming and static generation.

**`SpInput` explicit `id` requirement.** When any of `label`, `helperText`, or `errorMessage` are passed, an explicit `id` prop is required. Without it, the component throws during render to prevent nondeterministic `for`/`aria-describedby` wiring in server-rendered and statically generated output.

```astro
<!-- id is required whenever label, helperText, or errorMessage is set -->
<SpInput id="email" label="Email" name="email" />
```

Omitting `id` when `label` is set throws at render time with a clear error message. This applies in both SSR and static builds.

**CSS in SSR.** Import the Spectre UI stylesheet in your Astro layout once. Astro handles CSS bundling and injection in both SSR and static builds — no runtime style injection occurs from this package.

## Recipe helpers

The package re-exports class recipe functions from `@phcdevworks/spectre-ui`. Use these when you need Spectre-aligned class names outside of the Astro components — in layout markup, in headless patterns, or when mapping over dynamic data.

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

| Helper | For |
|--------|-----|
| `getAlertClasses` | Alert class generation |
| `getAvatarClasses` | Avatar class generation |
| `getButtonClasses` | Button class generation |
| `getCardClasses` | Card class generation |
| `getBadgeClasses` | Badge class generation |
| `getContainerClasses` | Container class generation |
| `getDropdownClasses` | Dropdown root classes |
| `getDropdownMenuClasses` | Dropdown menu container |
| `getDropdownItemClasses` | Individual dropdown item |
| `getIconBoxClasses` | Icon box class generation |
| `getInputClasses` | Input class generation |
| `getModalClasses` | Modal root classes |
| `getModalOverlayClasses` | Modal overlay/backdrop classes |
| `getNavClasses` | Nav root classes |
| `getNavLinksClasses` | Nav links container |
| `getNavLinkClasses` | Individual nav link |
| `getPricingCardClasses` | Pricing card root classes |
| `getPricingCardBadgeClasses` | Pricing card badge wrapper |
| `getPricingCardPriceContainerClasses` | Pricing card price container |
| `getPricingCardPriceClasses` | Pricing card price element |
| `getPricingCardDescriptionClasses` | Pricing card description |
| `getRatingClasses` | Rating root classes |
| `getRatingStarsClasses` | Rating star container |
| `getRatingStarClasses` | Individual star element |
| `getRatingTextClasses` | Rating text element |
| `getSectionClasses` | Section class generation |
| `getStackClasses` | Stack class generation |
| `getTestimonialClasses` | Testimonial root classes |
| `getTestimonialQuoteClasses` | Quote wrapper |
| `getTestimonialAuthorClasses` | Author section wrapper |
| `getTestimonialAuthorInfoClasses` | Author info wrapper |
| `getTestimonialAuthorNameClasses` | Author name element |
| `getTestimonialAuthorTitleClasses` | Author title element |
| `getToastClasses` | Toast root classes |
| `getToastIconClasses` | Toast icon wrapper |
| `getTooltipClasses` | Tooltip class generation |

Recipe option and variant types are also re-exported: `AlertRecipeOptions`, `AlertVariant`, `AlertSize`, `AvatarRecipeOptions`, `AvatarShape`, `AvatarSize`, `BadgeRecipeOptions`, `BadgeVariant`, `BadgeSize`, `ButtonRecipeOptions`, `ButtonVariant`, `ButtonSize`, `CardRecipeOptions`, `CardVariant`, `ContainerRecipeOptions`, `DropdownRecipeOptions`, `DropdownMenuRecipeOptions`, `DropdownItemRecipeOptions`, `DropdownPlacement`, `IconBoxRecipeOptions`, `IconBoxVariant`, `IconBoxSize`, `InputRecipeOptions`, `InputState`, `InputSize`, `ModalRecipeOptions`, `ModalOverlayRecipeOptions`, `NavRecipeOptions`, `NavLinkRecipeOptions`, `PricingCardRecipeOptions`, `RatingRecipeOptions`, `SectionRecipeOptions`, `StackRecipeOptions`, `StackDirection`, `TestimonialRecipeOptions`, `ToastRecipeOptions`, `ToastIconRecipeOptions`, `ToastVariant`, `TooltipRecipeOptions`, `TooltipPlacement`.

## What this package owns

- Astro-native component delivery for Spectre UI recipes and classes
- Astro-friendly, SSR-safe component interfaces and composition patterns
- Type-safe framework bindings for the upstream Spectre UI contract
- Adapter-level ergonomics that make `@phcdevworks/spectre-ui` straightforward
  to consume in Astro projects
- A reference implementation for future Spectre framework adapters

Golden rule: bind the upstream Spectre UI contract for Astro, do not redefine it.

## What this package does not own

- Design values or token meaning — [`@phcdevworks/spectre-tokens`](https://github.com/phcdevworks/spectre-tokens)
- Core CSS, utilities, Tailwind helpers, or class recipe logic — [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui)
- Local styling systems that diverge from the shared Spectre contract

## When to use this package

Use `@phcdevworks/spectre-ui-astro` when:

- you are building an Astro project and want Spectre UI components as
  first-class Astro components
- you need SSR-safe, type-safe component interfaces that bind the upstream
  `@phcdevworks/spectre-ui` recipe contract without reimplementing it
- you want to compose with Spectre's shared recipe helpers from TypeScript in an
  Astro project

## When not to use this package

Do not use this package when:

- you are using a different framework (React, Vue, Svelte, etc.) — this package
  is Astro-only
- you want to define custom tokens or override Spectre's design values — that
  belongs in `@phcdevworks/spectre-tokens`
- you want to add or change class recipes, CSS utilities, or Tailwind helpers —
  that belongs in `@phcdevworks/spectre-ui`
- you need a framework-agnostic styling contract — consume `@phcdevworks/spectre-ui`
  directly

## Package exports

### Root imports

```ts
import {
  SpAlert, SpAvatar, SpBadge, SpButton, SpCard, SpContainer, SpDropdown,
  SpGrid, SpIconBox, SpInput, SpModal, SpNav, SpPricingCard, SpRating, SpSection,
  SpSpinner, SpStack, SpTag, SpTestimonial, SpToast, SpTooltip,
} from '@phcdevworks/spectre-ui-astro'

import {
  getButtonClasses,
  getBadgeClasses,
  getCardClasses,
  // …all recipe helpers and types
} from '@phcdevworks/spectre-ui-astro'
```

### Direct component entry points

```ts
import SpAlert     from '@phcdevworks/spectre-ui-astro/components/SpAlert.astro'
import SpAvatar    from '@phcdevworks/spectre-ui-astro/components/SpAvatar.astro'
import SpBadge     from '@phcdevworks/spectre-ui-astro/components/SpBadge.astro'
import SpButton    from '@phcdevworks/spectre-ui-astro/components/SpButton.astro'
import SpCard      from '@phcdevworks/spectre-ui-astro/components/SpCard.astro'
import SpContainer from '@phcdevworks/spectre-ui-astro/components/SpContainer.astro'
import SpDropdown  from '@phcdevworks/spectre-ui-astro/components/SpDropdown.astro'
import SpGrid      from '@phcdevworks/spectre-ui-astro/components/SpGrid.astro'
import SpIconBox   from '@phcdevworks/spectre-ui-astro/components/SpIconBox.astro'
import SpInput     from '@phcdevworks/spectre-ui-astro/components/SpInput.astro'
import SpModal     from '@phcdevworks/spectre-ui-astro/components/SpModal.astro'
import SpNav       from '@phcdevworks/spectre-ui-astro/components/SpNav.astro'
import SpPricingCard  from '@phcdevworks/spectre-ui-astro/components/SpPricingCard.astro'
import SpRating    from '@phcdevworks/spectre-ui-astro/components/SpRating.astro'
import SpSection   from '@phcdevworks/spectre-ui-astro/components/SpSection.astro'
import SpSpinner   from '@phcdevworks/spectre-ui-astro/components/SpSpinner.astro'
import SpStack     from '@phcdevworks/spectre-ui-astro/components/SpStack.astro'
import SpTag       from '@phcdevworks/spectre-ui-astro/components/SpTag.astro'
import SpTestimonial from '@phcdevworks/spectre-ui-astro/components/SpTestimonial.astro'
import SpToast     from '@phcdevworks/spectre-ui-astro/components/SpToast.astro'
import SpTooltip   from '@phcdevworks/spectre-ui-astro/components/SpTooltip.astro'
```

The adapter does not export a CSS helper or path. Import the stylesheet directly from `@phcdevworks/spectre-ui/index.css`.

## Component family stability

Each component family is classified by its support status in this adapter.

| Family | Status | Notes |
|--------|--------|-------|
| alert | **stable** | Full prop, slot, ARIA, and SSR coverage |
| avatar | **stable** | Full prop, slot, ARIA, and SSR coverage |
| badge | **stable** | Full prop, slot, ARIA, and SSR coverage |
| button | **stable** | Full prop, slot, ARIA, and SSR coverage |
| card | **stable** | Full prop, slot, ARIA, and SSR coverage |
| container | **stable** | Full prop, slot, ARIA, and SSR coverage |
| dropdown | **stable** | Full prop, slot, and SSR coverage |
| grid | **stable** | Full prop, slot, and SSR coverage |
| icon-box | **stable** | Full prop, slot, ARIA, and SSR coverage |
| input | **stable** | Full prop, ARIA, SSR, and explicit `id` invariant coverage |
| modal | **stable** | Full prop, slot, ARIA, and SSR coverage |
| nav | **stable** | Full prop, slot, ARIA, and SSR coverage |
| pricing-card | **stable** | Full prop, slot, ARIA, and SSR coverage |
| rating | **stable** | Full prop, slot, ARIA, and SSR coverage |
| section | **stable** | Full prop, slot, ARIA, and SSR coverage |
| spinner | **stable** | Full prop, ARIA, and SSR coverage |
| stack | **stable** | Full prop, slot, ARIA, and SSR coverage |
| tag | **stable** | Full prop, slot, ARIA, and SSR coverage |
| testimonial | **stable** | Full prop, slot, ARIA, and SSR coverage |
| toast | **stable** | Full prop, slot, ARIA, and SSR coverage |
| tooltip | **stable** | Full prop, slot, ARIA, and SSR coverage |

**stable** — the component family is fully wired to upstream recipes, covered by SSR and unit tests, and declared in `astro-adapter.contract.json`. Breaking changes require a semver major bump.

**provisional** — a family that is partially implemented or pending full test coverage. Not yet safe to depend on across minor releases.

**not yet supported** — families present in the upstream Spectre UI surface that this adapter has not yet bound.

The machine-readable classification lives in `astro-adapter.contract.json` under `componentFamilies`.

## Relationship to the rest of Spectre

| Package | Owns |
|---------|------|
| [`@phcdevworks/spectre-tokens`](https://github.com/phcdevworks/spectre-tokens) | Design values, semantic token meaning, and token contracts |
| [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui) | CSS, utilities, Tailwind helpers, and type-safe class recipes |
| `@phcdevworks/spectre-components` | Framework-agnostic Lit web component behavior |
| `@phcdevworks/spectre-ui-astro` | Astro-native adapter delivery and framework ergonomics |

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

| Command | Purpose |
|---------|---------|
| `npm run check` | Full pre-merge check: lint → build → typecheck → test |
| `npm run ci:verify` | Underlying verification sequence |
| `npm run build` | Build the distributable package |
| `npm run typecheck` | Type-check without emitting |
| `npm test` | Run the Vitest test suite |
| `npm run lint` | Run ESLint |
| `npm run dev` | Watch mode for development |

Run `npm run check` before opening any pull request. It is the single gate used by CI.

This project requires Node.js `^22.13.0 || >=24.0.0`.

### Key source areas

- `src/components/` — Astro component implementations
- `src/recipes/` — re-exported recipe bindings from `@phcdevworks/spectre-ui`
- `src/index.ts` — package exports
- `tests/` — unit, SSR, and contract tests
- `examples/` — demo Astro app for manual validation (not a contract authority; see `examples/README.md`)
- `scripts/` — packaging and contract validation scripts

### Troubleshooting

**`npm run build` fails with a missing recipe or type**
The upstream `@phcdevworks/spectre-ui` peer dependency must be installed. Run
`npm install` from the repo root. If a recipe or type is missing from upstream,
do not add it locally — open an issue in `@phcdevworks/spectre-ui` first.

**Tests fail after pulling upstream changes**
Run `npm install` to sync installed peer versions, then re-run `npm test`. If
`exports.test.ts` fails, the public contract has drifted — check `src/index.ts`
and `package.json` exports against the test expectations.

**`SpInput` renders without accessible label associations**
`SpInput` requires an explicit `id` prop whenever `label`, `helperText`, or
`errorMessage` is passed. Without it, the component throws at render time to
prevent broken accessibility wiring.

**Example app fails to build**
Run `npm install` from within `examples/` (not `npm ci`) because the example
depends on the parent package through a local `file:..` link. Do not commit an
example `package-lock.json` as a CI contract.

## Validation

Run the full validation gate before any pull request:

```bash
npm run check
```

This runs: lint → build → typecheck → tests. All steps must pass.

## AI and automation boundaries

Claude Code (`claude-sonnet-4-6`) is the primary development agent for this
repository. Codex handles releases and production stabilization. Jules handles
small automated fixes and micro-updates. GitHub Copilot provides development
support.

Claude Code, Codex, and Copilot do not create git commits by default. Jules may
commit only bounded automated maintenance when the `JULES.md` scope and
validation gates pass. Release decisions, tags, and publishing remain with
Bradley Potts.

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
