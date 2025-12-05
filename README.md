# @phcdevworks/spectre-ui-astro

Astro integration layer for the Spectre design system.

## Overview

`@phcdevworks/spectre-ui-astro` provides ergonomic Astro components (`<SpButton>`, `<SpCard>`, `<SpInput>`, etc.) that wrap [@phcdevworks/spectre-ui](https://github.com/phcdevworks/spectre-ui)'s design system. This package is a thin integration layer that:

- ✅ Uses Spectre UI's `.sp-*` classes and recipes internally
- ✅ Does not reimplement design logic
- ✅ Provides fully typed components
- ✅ Is SSR-safe and framework-agnostic (pure Astro components)
- ✅ Consumes all styling from `@phcdevworks/spectre-ui`

## Installation

```bash
npm install @phcdevworks/spectre-ui-astro @phcdevworks/spectre-ui
```

## Usage

### 1. Import CSS

You **must** import Spectre UI's CSS files in your Astro project. Add these imports to your layout or page:

```astro
---
// src/layouts/Layout.astro
import "@phcdevworks/spectre-ui/dist/base.css";
import "@phcdevworks/spectre-ui/dist/components.css";
import "@phcdevworks/spectre-ui/dist/utilities.css";
---
```

### 2. Use Components

```astro
---
import { SpButton, SpCard, SpInput } from "@phcdevworks/spectre-ui-astro";
---

<SpButton variant="primary" size="lg">
  Get Started
</SpButton>

<SpCard variant="elevated">
  <h2>Card Title</h2>
  <p>Card content goes here.</p>
</SpCard>

<SpInput
  label="Email"
  type="email"
  name="email"
  placeholder="Enter your email"
  required
/>
```

## Components

### SpButton

A flexible button component that supports multiple variants, sizes, and element types.

**Props:**

- `variant`: `"primary"` | `"secondary"` | `"ghost"` | `"success"` | `"danger"` (default: `"primary"`)
- `size`: `"sm"` | `"md"` | `"lg"` (default: `"md"`)
- `as`: `"button"` | `"a"` | `"span"` (default: `"button"`)
- `type`: `"button"` | `"submit"` | `"reset"` (default: `"button"`, only for `as="button"`)
- `href`: string (only for `as="a"`)
- `target`: `"_blank"` | `"_self"` | `"_parent"` | `"_top"` (only for `as="a"`)
- `disabled`: boolean (default: `false`)
- `loading`: boolean (default: `false`)
- `fullWidth`: boolean (default: `false`, forces width: 100%)
- `class`: string (additional CSS classes)
- Standard HTML attributes: `id`, `name`, `value`, `aria-label`, etc.

**Examples:**

```astro
<!-- Primary button -->
<SpButton variant="primary" size="lg">
  Submit
</SpButton>

<!-- Button as link -->
<SpButton as="a" href="/about" variant="secondary">
  Learn More
</SpButton>

<!-- Loading state -->
<SpButton loading>
  Processing...
</SpButton>

<!-- Disabled button -->
<SpButton disabled>
  Unavailable
</SpButton>
```

### SpCard

A simple structural wrapper that applies card classes.

**Props:**

- `variant`: `"base"` | `"elevated"` | `"flat"` (default: `"base"`)
- `as`: `"div"` | `"section"` | `"article"` (default: `"div"`)
- `class`: string (additional CSS classes)
- Standard HTML attributes: `id`, `role`, `aria-label`, etc.

**Examples:**

```astro
<!-- Basic card -->
<SpCard>
  <h3>Card Title</h3>
  <p>Card content.</p>
</SpCard>

<!-- Elevated card as article -->
<SpCard variant="elevated" as="article">
  <header>
    <h2>Article Title</h2>
  </header>
  <p>Article content.</p>
</SpCard>
```

### SpInput

A comprehensive input component with label, error, and helper text support.

**Props:**

- `state`: `"default"` | `"error"` | `"success"` (default: `"default"`)
- `type`: `"text"` | `"email"` | `"password"` | `"number"` | `"tel"` | `"url"` | `"search"` | `"date"` | `"time"` | `"datetime-local"` (default: `"text"`)
- `label`: string (input label)
- `errorMessage`: string (error message to display when `state="error"`)
- `helperText`: string (helper text below input)
- `id`: string (auto-generated if not provided)
- `name`: string
- `value`: string
- `placeholder`: string
- `required`: boolean (default: `false`)
- `disabled`: boolean (default: `false`)
- `readonly`: boolean (default: `false`)
- `class`: string (additional CSS classes)
- Standard input attributes: `min`, `max`, `step`, `pattern`, `maxlength`, `minlength`, etc.

**Examples:**

```astro
<!-- Basic input -->
<SpInput
  label="Username"
  name="username"
  placeholder="Enter username"
  required
/>

<!-- Email input with helper text -->
<SpInput
  label="Email"
  type="email"
  name="email"
  helperText="We'll never share your email."
/>

<!-- Input with error state -->
<SpInput
  label="Password"
  type="password"
  name="password"
  state="error"
  errorMessage="Password must be at least 8 characters."
/>

<!-- Input with success state -->
<SpInput
  label="Username"
  name="username"
  value="john_doe"
  state="success"
/>
```

## TypeScript Support

All components are fully typed. Import types as needed:

```typescript
import type {
  SpButtonProps,
  SpButtonVariant,
  SpButtonSize,
  SpCardProps,
  SpCardVariant,
  SpInputProps,
  SpInputState,
} from "@phcdevworks/spectre-ui-astro";
```

## CSS Path Constants

The package exports constants for Spectre UI CSS paths:

```typescript
import { SPECTRE_CSS_PATHS } from "@phcdevworks/spectre-ui-astro";

// SPECTRE_CSS_PATHS.base → "@phcdevworks/spectre-ui/dist/base.css"
// SPECTRE_CSS_PATHS.components → "@phcdevworks/spectre-ui/dist/components.css"
// SPECTRE_CSS_PATHS.utilities → "@phcdevworks/spectre-ui/dist/utilities.css"
```

## Design Principles

This package follows strict design principles:

1. **No style reimplementation**: All styling comes from `@phcdevworks/spectre-ui`
2. **Thin wrappers**: Components are minimal wrappers around Spectre CSS classes and recipes
3. **Framework-agnostic**: Pure Astro components, no React/Vue/Svelte dependencies
4. **Type-safe**: Comprehensive TypeScript types for all props
5. **SSR-safe**: All components work with Astro's SSR

## Requirements

- **Astro**: ^4.0.0 || ^5.0.0
- **@phcdevworks/spectre-ui**: ^0.0.1

## Contributing

Contributions are welcome! Please see the [contributing guidelines](CONTRIBUTING.md).

## License

MIT © PHCDevworks
