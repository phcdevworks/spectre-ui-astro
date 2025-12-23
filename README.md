# @phcdevworks/spectre-ui-astro

Astro integration layer for the Spectre design system.

> 📋 **[View Roadmap](https://github.com/phcdevworks/spectre-ui-astro/blob/main/ROADMAP.md)** | 🤝 **[Contributing Guide](CONTRIBUTING.md)** | 📝 **[Changelog](CHANGELOG.md)**

## Overview

`@phcdevworks/spectre-ui-astro` provides ergonomic Astro components (`<SpButton>`, `<SpCard>`, `<SpInput>`) that wrap [@phcdevworks/spectre-ui](https://github.com/phcdevworks/spectre-ui)'s design system. This package is a thin integration layer that consumes Spectre UI recipes and classes without duplicating styling logic.

- ✅ Uses Spectre UI's `.sp-*` classes and recipes internally
- ✅ Does not reimplement design logic
- ✅ Provides fully typed components with discriminated unions
- ✅ SSR-safe and framework-agnostic (pure Astro components)
- ✅ Consumes all styling from `@phcdevworks/spectre-ui`

## Installation

```bash
npm install @phcdevworks/spectre-ui-astro @phcdevworks/spectre-ui
```

## Usage

### 1. Import CSS

Import Spectre UI's CSS in your Astro layout:

```astro
---
// src/layouts/Layout.astro
import "@phcdevworks/spectre-ui/index.css";
---
```

### 2. Use components

```astro
---
import "@phcdevworks/spectre-ui/index.css";
import {
  SpBadge,
  SpButton,
  SpCard,
  SpIconBox,
  SpInput,
} from "@phcdevworks/spectre-ui-astro";
---

<SpButton variant="primary" size="lg">
  Get Started
</SpButton>

<SpCard variant="elevated">
  <div style="display: flex; align-items: center; gap: 0.75rem;">
    <SpIconBox variant="primary" size="md">
      <!-- Your icon SVG here -->
    </SpIconBox>
    <div>
      <h2>Card Title <SpBadge variant="success">New</SpBadge></h2>
      <p>Card content goes here.</p>
    </div>
  </div>
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

### Button variants

```astro
<SpButton variant="primary">Primary CTA</SpButton>
<SpButton variant="secondary">Secondary</SpButton>
<SpButton variant="ghost">Low-emphasis</SpButton>
<SpButton variant="danger">Destructive</SpButton>
```

All variants support full state coverage: `disabled`, `loading`, and sizes (`sm`, `md`, `lg`).

**Polymorphic rendering:**

```astro
<!-- Button element -->
<SpButton type="submit">Submit Form</SpButton>

<!-- Anchor element -->
<SpButton as="a" href="/about">Learn More</SpButton>

<!-- Span element -->
<SpButton as="span">Non-interactive</SpButton>
```

**Full props:**

- `variant`: `"primary"` | `"secondary"` | `"ghost"` | `"success"` | `"danger"` (default: `"primary"`)
- `size`: `"sm"` | `"md"` | `"lg"` (default: `"md"`)
- `as`: `"button"` | `"a"` | `"span"` (default: `"button"`)
- `type`: `"button"` | `"submit"` | `"reset"` (when `as="button"`)
- `href`, `target`: string (when `as="a"`)
- `disabled`, `loading`, `fullWidth`, `iconOnly`: boolean
- `class`: string (additional CSS classes)

### Input states

```astro
<SpInput label="Email" type="email" state="default" />
<SpInput label="Password" type="password" state="error" errorMessage="Required" />
<SpInput label="Username" value="john_doe" state="success" />
```

**Full props:**

- `state`: `"default"` | `"error"` | `"success"` | `"disabled"` (default: `"default"`)
- `type`: `"text"` | `"email"` | `"password"` | `"number"` | `"tel"` | `"url"` | `"search"` | `"date"` | `"time"` | `"datetime-local"` (default: `"text"`)
- `label`, `errorMessage`, `helperText`: string
- `id`: string (auto-generated if not provided)
- `name`, `value`, `placeholder`: string
- `required`, `disabled`, `readonly`: boolean
- `class`: string (additional CSS classes)
- Standard input attributes: `min`, `max`, `step`, `pattern`, `maxlength`, `minlength`

### Card variants

```astro
<SpCard variant="elevated">Default shadow</SpCard>
<SpCard variant="outline">Bordered</SpCard>
<SpCard variant="ghost">Transparent</SpCard>
```

**Semantic HTML:**

```astro
<SpCard as="article" variant="elevated">
  <h2>Article Title</h2>
  <p>Article content.</p>
</SpCard>
```

**Full props:**

- `variant`: `"elevated"` | `"flat"` | `"outline"` | `"ghost"` (default: `"elevated"`)
- `as`: `"div"` | `"section"` | `"article"` (default: `"div"`)
- `class`: string (additional CSS classes)

### Badge variants

```astro
<SpBadge variant="primary">Primary</SpBadge>
<SpBadge variant="success">Success</SpBadge>
<SpBadge variant="warning">Warning</SpBadge>
<SpBadge variant="danger">Danger</SpBadge>
```

**Full props:**

- `variant`: `"primary"` | `"success"` | `"warning"` | `"danger"` (default: `"primary"`)
- `size`: `"sm"` | `"md"` | `"lg"` (default: `"md"`)
- `class`: string (additional CSS classes)

### Icon Box

```astro
<SpIconBox variant="primary" size="md">
  <svg><!-- Your icon --></svg>
</SpIconBox>

<SpIconBox variant="success" size="lg">
  <svg><!-- Your icon --></svg>
</SpIconBox>
```

**Full props:**

- `variant`: `"primary"` | `"success"` | `"warning"` | `"danger"` | `"info"` (default: `"primary"`)
- `size`: `"sm"` | `"md"` | `"lg"` (default: `"md"`)
- `as`: `"div"` | `"span"` (default: `"span"`)
- `class`: string (additional CSS classes)

## TypeScript Support

Type definitions are bundled automatically:

```typescript
import type {
  BadgeVariant,
  BadgeSize,
  ButtonVariant,
  ButtonSize,
  CardVariant,
  IconBoxVariant,
  IconBoxSize,
  InputState,
  InputSize,
} from "@phcdevworks/spectre-ui-astro";
```

## CSS Import

Spectre UI provides a single bundled CSS file that includes all necessary styles:

```astro
---
import "@phcdevworks/spectre-ui/index.css";
---
```

Alternatively, you can use the exported constant:

```astro
---
import { SPECTRE_UI_CSS } from "@phcdevworks/spectre-ui-astro";
---
<link rel="stylesheet" href={SPECTRE_UI_CSS} />
```

This single import includes tokens, base styles, components, and utilities - everything needed for Spectre UI Astro components to work correctly.

## Design Principles

1. **Single source of truth** – All Spectre Astro components consume Spectre UI styles and recipes.
2. **No style duplication** – This package never re-encodes Spectre UI logic.
3. **Framework agnostic** – Pure Astro components that work with any bundler or runtime.
4. **Type-safe ergonomics** – Every component exports strict TypeScript types for confident usage.
5. **SSR-safe** – All components work with Astro's server-side rendering.

## Part of the Spectre Suite

- **Spectre Tokens** – Design-token foundation
- **Spectre UI** – Core styling layer
- **Spectre Blocks** – WordPress block library
- **Spectre Astro** – Astro integration (this package)
- **Spectre 11ty** – Eleventy integration

## Contributing

Issues and pull requests are welcome. If you are proposing component or type changes, update `src/` and include regenerated builds.

For detailed contribution guidelines, see **[CONTRIBUTING.md](CONTRIBUTING.md)**.

## License

MIT © PHCDevworks — See **[LICENSE](LICENSE)** for details.

---

## ❤️ Support Spectre

If Spectre UI Astro helps your workflow, consider sponsoring:

- [GitHub Sponsors](https://github.com/sponsors/phcdevworks)
- [Buy Me a Coffee](https://buymeacoffee.com/phcdevworks)
