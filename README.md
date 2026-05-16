# @phcdevworks/spectre-ui-astro

[![npm version](https://img.shields.io/npm/v/@phcdevworks/spectre-ui-astro)](https://www.npmjs.com/package/@phcdevworks/spectre-ui-astro)
[![CI](https://github.com/phcdevworks/spectre-ui-astro/actions/workflows/ci.yml/badge.svg)](https://github.com/phcdevworks/spectre-ui-astro/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/phcdevworks/spectre-ui-astro)](LICENSE)

`@phcdevworks/spectre-ui-astro` is the Astro adapter package of the Spectre
system for Astro applications that consume the core Spectre UI contract.

Maintained by PHCDevworks, it provides Astro-native components that wrap the
logic, styling contracts, and class recipes defined in
[`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui). It stays
strictly downstream of the core Spectre layers, keeps framework delivery
separate from design ownership, and serves as the reference adapter pattern for
future Spectre framework adapters.

[Contributing](CONTRIBUTING.md) | [Changelog](CHANGELOG.md) |
[Security Policy](SECURITY.md)

## Key capabilities

- Provides Astro-native components built on top of the `@phcdevworks/spectre-ui`
  recipe and class contract
- Keeps Astro delivery SSR-friendly and type-safe without redefining tokens or
  core styling logic
- Re-exports shared recipe helpers so Astro consumers can compose with the same
  styling API used downstream
- Keeps framework ergonomics aligned with the upstream Spectre UI contract
  instead of introducing adapter drift
- Establishes the reference adapter pattern for future Spectre framework
  packages

## Installation

```bash
npm install @phcdevworks/spectre-ui-astro @phcdevworks/spectre-ui
```

`@phcdevworks/spectre-ui` is a required peer dependency because this adapter
binds its upstream recipes, classes, and CSS contract for Astro rather than
redefining them locally.

If your project consumes Spectre tokens directly, install
[`@phcdevworks/spectre-tokens`](https://github.com/phcdevworks/spectre-tokens)
as well.

## Quick start

### Astro component usage

Import Astro-native components from the package root:

```astro
---
import { SpBadge, SpButton, SpCard, SpInput } from '@phcdevworks/spectre-ui-astro'
---
```

### CSS import

This package does not ship its own CSS. Import the canonical Spectre UI
stylesheet from `@phcdevworks/spectre-ui` in your Astro layout or page:

```astro
---
import '@phcdevworks/spectre-ui/index.css'
---
```

### Astro-native component example

```astro
---
import '@phcdevworks/spectre-ui/index.css'
import {
  SpBadge,
  SpButton,
  SpCard,
  SpIconBox,
  SpInput,
  SpPricingCard
} from '@phcdevworks/spectre-ui-astro'
---

<section>
  <SpCard variant="elevated">
    <div>
      <SpIconBox variant="primary" size="md">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 4v12l-7 4-7-4V6l7-4z" fill="currentColor" />
        </svg>
      </SpIconBox>

      <div>
        <SpBadge variant="success" size="sm">Stable contract</SpBadge>
        <h2>Build Astro interfaces on the Spectre UI layer</h2>
        <p>
          Compose Astro-native components while keeping styling behavior aligned
          with the shared Spectre recipe contract.
        </p>
        <SpButton variant="primary" size="lg">Get started</SpButton>
      </div>
    </div>
  </SpCard>

  <SpPricingCard featured>
    <div slot="header">Pro</div>
    <div slot="price">$29/mo</div>
    <div slot="description">Astro delivery on top of the core Spectre UI layer.</div>
    <SpButton variant="primary" fullWidth>Choose plan</SpButton>
  </SpPricingCard>

  <SpInput
    id="email"
    label="Email"
    name="email"
    type="email"
    placeholder="you@example.com"
    helperText="We will use this for product updates."
  />
</section>
```

The README examples intentionally avoid adapter-owned layout or utility styling.
For page-level composition, import the canonical Spectre UI CSS and add any
application-specific layout styles in your app rather than this package.

`SpInput` requires an explicit `id` whenever you pass `label`, `helperText`, or
`errorMessage`, so Astro can render stable SSR markup and preserve the
associated accessibility wiring.

## What this package owns

- Astro-native component delivery for Spectre UI recipes and classes
- Astro-friendly, SSR-safe component interfaces and composition patterns
- Type-safe framework bindings for the upstream Spectre UI contract
- Adapter-level ergonomics that make `@phcdevworks/spectre-ui` straightforward
  to consume in Astro projects
- A reference implementation for future Spectre framework adapters

Golden rule: bind the upstream Spectre UI contract for Astro, do not redefine
it.

## What this package does not own

- Design values or token meaning. That belongs to
  [`@phcdevworks/spectre-tokens`](https://github.com/phcdevworks/spectre-tokens).
- Core CSS, utilities, Tailwind helpers, or class recipe logic. That belongs to
  [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui).
- Local styling systems that diverge from the shared Spectre contract. This
  package consumes upstream styling behavior rather than replacing it.

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

## Package exports / API surface

### Root package

`@phcdevworks/spectre-ui-astro` exports:

- `SpBadge`
- `SpButton`
- `SpCard`
- `SpIconBox`
- `SpInput`
- `SpPricingCard`
- `SpRating`
- `SpTestimonial`

The root package also re-exports shared recipe helpers and related TypeScript
option and variant types from `@phcdevworks/spectre-ui`, including:

- `getBadgeClasses`
- `getButtonClasses`
- `getCardClasses`
- `getIconBoxClasses`
- `getInputClasses`
- `getPricingCardClasses`
- `getPricingCardBadgeClasses`
- `getPricingCardPriceContainerClasses`
- `getPricingCardPriceClasses`
- `getPricingCardDescriptionClasses`
- `getRatingClasses`
- `getRatingStarsClasses`
- `getRatingStarClasses`
- `getRatingTextClasses`
- `getTestimonialClasses`
- `getTestimonialQuoteClasses`
- `getTestimonialAuthorClasses`
- `getTestimonialAuthorInfoClasses`
- `getTestimonialAuthorNameClasses`
- `getTestimonialAuthorTitleClasses`

The adapter does not export a `SPECTRE_UI_CSS` helper. Import the canonical
stylesheet directly from `@phcdevworks/spectre-ui/index.css` so CSS ownership
stays with the upstream UI package.

### Component entry points

- `@phcdevworks/spectre-ui-astro/components/SpBadge.astro`
- `@phcdevworks/spectre-ui-astro/components/SpButton.astro`
- `@phcdevworks/spectre-ui-astro/components/SpCard.astro`
- `@phcdevworks/spectre-ui-astro/components/SpIconBox.astro`
- `@phcdevworks/spectre-ui-astro/components/SpInput.astro`
- `@phcdevworks/spectre-ui-astro/components/SpPricingCard.astro`
- `@phcdevworks/spectre-ui-astro/components/SpRating.astro`
- `@phcdevworks/spectre-ui-astro/components/SpTestimonial.astro`

## Relationship to the rest of Spectre

Spectre keeps responsibilities separate:

- [`@phcdevworks/spectre-tokens`](https://github.com/phcdevworks/spectre-tokens)
  defines design values, semantic meaning, and token contracts
- [`@phcdevworks/spectre-ui`](https://github.com/phcdevworks/spectre-ui) turns
  those tokens into reusable CSS, utilities, Tailwind helpers, and type-safe
  class recipes
- `@phcdevworks/spectre-ui-astro` binds that upstream UI contract into
  Astro-native components and framework ergonomics

That separation keeps design ownership centralized, keeps styling logic shared,
and lets framework adapters stay thin and consistent.

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
| `npm run ci:verify` | Full pre-merge check: lint → build → typecheck → test |
| `npm run build` | Build the distributable package |
| `npm run typecheck` | Type-check without emitting |
| `npm test` | Run the Vitest test suite |
| `npm run lint` | Run ESLint |
| `npm run dev` | Watch mode for development |

Run `npm run ci:verify` before opening any pull request. It runs lint, build,
typecheck, and tests in sequence and is the single gate used by CI.

This project requires Node.js `^22.13.0 || >=24.0.0`.

### Key source areas

- `src/components/` — Astro component implementations
- `src/recipes/` — re-exported recipe bindings from `@phcdevworks/spectre-ui`
- `src/index.ts` — package exports
- `tests/` — unit, SSR, and contract tests
- `examples/` — demo Astro app for manual validation
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

**`SpInput` SSR renders without accessible label associations**
`SpInput` requires an explicit `id` prop whenever `label`, `helperText`, or
`errorMessage` is passed. Without it, the component throws at render time to
prevent broken accessibility wiring.

**Example app fails to build**
Run `npm install` from within `examples/` (not `npm ci`) because the example
depends on the parent package through a local `file:..` link. Do not commit an
example `package-lock.json` as a CI contract.

## Contributing

PHCDevworks maintains this package as part of the Spectre suite.

When contributing:

- keep Astro components aligned with the upstream `@phcdevworks/spectre-ui`
  contract
- do not redefine tokens, CSS behavior, or recipe logic in this package
- keep the adapter SSR-friendly, type-safe, and framework-appropriate
- run `npm run ci:verify` before opening a pull request — it runs lint, build,
  typecheck, and tests in one step

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

## License

MIT © PHCDevworks. See [LICENSE](LICENSE).
