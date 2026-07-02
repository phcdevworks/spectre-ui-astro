# CLAUDE.md - Spectre UI Astro

## Project Identity

**Package:** `@phcdevworks/spectre-ui-astro` **Layer:** L3b — Astro adapter
**Human owner:** Bradley Potts **Primary AI developer:** Claude Code
(claude-sonnet-4-6)

This file is the authoritative implementation guide for Claude Code operating in
this repository. Shared agent roles, package boundaries, validation rules, and
PR requirements live in `AGENTS.md`.

## Multi-Agent Team

`AGENTS.md` is the shared guide for agent roles, edit boundaries, package
ownership, validation, and PR requirements. Claude Code remains the lead
implementation authority for Astro adapter source changes and architecture.
Resolve implementation conflicts by referencing this file together with
`AGENTS.md`, `src/index.ts`, `package.json`, and
`scripts/validate-package-contract.ts`.

## Commit Policy

Claude Code does not create git commits in this repository. Prepare changes, run
validation, and leave staging, committing, tagging, and publishing to human
review.

## Pull Request Creation

Follow the shared PR requirements in `AGENTS.md`. Claude Code prepares validated
changes for human review; Bradley Potts handles final commit, merge, tag, and
release authority.

## The One Rule That Overrides Everything

This package is a thin Astro adapter over `@phcdevworks/spectre-ui` (L2)
recipes, which themselves consume `@phcdevworks/spectre-tokens` (L1). Never
duplicate token values, CSS, Tailwind helpers, or recipe/class-generation logic
here. Every visual decision must resolve to an upstream recipe function call —
if a styling need cannot be met by calling an existing `@phcdevworks/spectre-ui`
recipe, the fix belongs upstream, not in this repository.

## Implementation Workflow

```bash
npm install               # install dependencies
npm run build             # tsup + types + component copy + package contract validation
npm run typecheck         # tsc --noEmit
npm run lint              # eslint .
npm test                  # vitest run
npm run check             # full validation gate via ci:verify
npm run ci:verify         # lint + build + typecheck + test
```

Run `npm run check` before every handoff touching `src/`, `tests/`, `scripts/`,
package exports, examples, or docs.

## File Structure

```text
src/
  components/
    SpAlert.astro
    SpAvatar.astro
    SpBadge.astro
    SpButton.astro
    SpCard.astro
    SpDropdown.astro
    SpIconBox.astro
    SpInput.astro
    SpModal.astro
    SpNav.astro
    SpPricingCard.astro
    SpRating.astro
    SpSpinner.astro
    SpTag.astro
    SpTestimonial.astro
    SpToast.astro
    SpTooltip.astro
    sp-input.shared.ts
    sp-interactive.shared.ts
  recipes/
    index.ts
  index.ts

tests/
  exports.test.ts
  rendering.test.ts
  docs-examples.test.ts
  upstream-parity.test.ts
  smoke.test.ts
  sp-*.test.ts

scripts/
  copy-components.ts
  validate-package-contract.ts
  validate-readme-contract.ts
  propose-version.ts

examples/
dist/
```

## Edit Permissions

Follow the shared edit-permission table in `AGENTS.md`. For Claude Code, the
important operational rule is that `src/index.ts`, `package.json` exports,
`src/components/*.astro`, `src/recipes/index.ts`, `tests/`, `examples/`,
`spectre.manifest.json`, `astro-adapter.contract.json`, and
`scripts/validate-package-contract.ts` are contract-facing surfaces. Keep them
synchronized whenever adapter behavior changes.

## Key Scripts Reference

| Script                    | What it validates                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| `npm run build`           | tsup bundle, type declarations, component copy, package contract, README contract                   |
| `npm run lint`            | ESLint across the package                                                                           |
| `npm run typecheck`       | `tsc --noEmit`                                                                                      |
| `npm test`                | Vitest suite (exports, rendering, component, docs-examples, upstream-parity, smoke)                 |
| `npm run ci:verify`       | lint -> build -> typecheck -> test                                                                  |
| `npm run check:ecosystem` | `spectre.manifest.json` validity and ecosystem dependency check via `@phcdevworks/spectre-manifest` |
| `npm run check`           | `ci:verify` + `check:ecosystem` — the full validation gate                                          |
| `npm run release:propose` | proposes the next version based on `CHANGELOG.md [Unreleased]` classification                       |

## Component Patterns

Every interactive Astro component follows the established adapter pattern:

1. Import recipe functions and types from `@phcdevworks/spectre-ui`.
2. Import shared adapter helpers such as `resolveInteractiveAttrs` when needed.
3. Declare local element unions and prop interfaces that extend upstream recipe
   options.
4. Use `[key: string]: unknown` for pass-through attributes.
5. Destructure recipe and adapter props explicitly, then capture `...rest`.
6. Resolve disabled and loading state before rendering.
7. Call the upstream recipe function to get classes.
8. Render deterministic Astro markup with ARIA attributes and spread `...rest`
   last.

`SpInput` differs because it renders a wrapper, optional label, input, helper
text, and error text. When `label`, `helperText`, or `errorMessage` is present,
`SpInput` requires an explicit `id` so SSR output remains deterministic.

## Shared Utilities

`sp-interactive.shared.ts` exposes `resolveInteractiveAttrs`, which resolves
button type, href suppression, and tab index behavior for polymorphic
interactive components.

`sp-input.shared.ts` exposes `resolveSpInputAccessibility`, which enforces the
explicit `id` requirement and returns stable helper and error associations.

## Adding a New Component

1. Add the `.astro` file under `src/components/`.
2. Export it from `src/index.ts`.
3. Add the component entrypoint to `package.json` exports.
4. Re-export upstream recipe helpers and types from `src/recipes/index.ts` when
   the upstream package exposes them.
5. Add focused tests under `tests/`.
6. Add SSR rendering coverage in `tests/rendering.test.ts`.
7. Update examples if consumer usage changes.
8. Update `README.md` and `CHANGELOG.md [Unreleased]` for public behavior.
9. Run `npm run check`.

## Testing Strategy

- `exports.test.ts` guards package surface, export parity, and peer dependency
  expectations.
- `rendering.test.ts` verifies SSR rendering through `AstroContainer`.
- `sp-*.test.ts` files cover component-specific prop, slot, ARIA, disabled, and
  DOM leakage behavior.
- `docs-examples.test.ts` keeps README guidance and examples aligned with the
  adapter contract.
- `upstream-parity.test.ts` guards upstream UI family parity — fails if
  `@phcdevworks/spectre-ui` adds a recipe family not declared in the contract.
- `smoke.test.ts` guards built-package artifacts — verifies `dist/` exports,
  component entrypoints, and upstream helper pass-through after build.

## Code Standards

- Strict TypeScript and ESM only.
- `[key: string]: unknown` for pass-through prop index signatures.
- No comments unless the reason is non-obvious.
- Adapter-consumed props must not leak to the DOM.
- Keep framework-specific helper logic narrow and reusable only when the
  existing component pattern supports it.

## Release Procedure

1. Update `CHANGELOG.md` by moving `[Unreleased]` items under a version heading.
2. Bump `package.json`.
3. Run `npm run check`.
4. Hand off to Bradley Potts for review, commit, tag, and `npm publish`.

## What This Package Does Not Own

Shared ownership boundaries live in `AGENTS.md`. This package must not own
design token values or semantics (`@phcdevworks/spectre-tokens`), core CSS,
Tailwind preset/theme generation, or shared class recipe logic
(`@phcdevworks/spectre-ui`), or framework-agnostic Lit web component behavior
(`@phcdevworks/spectre-components`). If a need cannot be met by calling an
existing upstream recipe, escalate upstream rather than adding local styling
logic here.

## Gotchas

- `dist/` is fully regenerated by `npm run build`; never hand-edit it.
- `SpInput` requires an explicit `id` whenever `label`, `helperText`, or
  `errorMessage` is set — `resolveSpInputAccessibility` enforces this for
  deterministic SSR associations.
- `tests/upstream-parity.test.ts` fails if `@phcdevworks/spectre-ui` adds a new
  recipe family that is not yet declared in `astro-adapter.contract.json` — this
  is the earliest signal that a new component phase may be needed.
- `examples/` consumes this package via a local `file:..` dependency; do not add
  a tracked example `package-lock.json` or rely on `npm ci` for it.

## Roadmap Priorities

Phases 1 through 10 are complete and released (current version `3.4.1`; see
`package.json` and `CHANGELOG.md`). There is no open phase. The next phase opens
once either `@phcdevworks/spectre-ui` ships new recipe families beyond Phase 4
(nav, toast, tooltip, dropdown, modal), or `@phcdevworks/spectre-tokens`
publishes new component-level token groups that gate further families. Check
`ROADMAP.md` and `TODO.md` for current scope before starting new component work.
