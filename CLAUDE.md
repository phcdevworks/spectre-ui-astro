# CLAUDE.md - Spectre UI Astro

## Project Identity

**Package:** `@phcdevworks/spectre-ui-astro` **Layer:** L4 of the Spectre design
suite - Astro adapter **Human owner:** Bradley Potts **Primary AI developer:** Claude Code
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
    SpBadge.astro
    SpButton.astro
    SpCard.astro
    SpIconBox.astro
    SpInput.astro
    SpPricingCard.astro
    SpRating.astro
    SpTestimonial.astro
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

Follow the shared edit-permission table in `AGENTS.md`. For Claude Code, the
important operational rule is that `src/index.ts`, `package.json` exports,
`src/components/*.astro`, `src/recipes/index.ts`, `tests/`, `examples/`, and
`scripts/validate-package-contract.ts` are contract-facing surfaces. Keep them
synchronized whenever adapter behavior changes.

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

## Roadmap Priorities

The adapter foundation (Phases 1 and 2) is complete. Work items from
`ROADMAP.md` and `TODO.md` in order:

- Add `SpAlert`, `SpAvatar`, `SpSpinner`, and `SpTag` components (Phase 3 —
  all four recipes available in `@phcdevworks/spectre-ui` ^1.7.0).
- Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^1.7.0` when the
  first Phase 3 component ships.
- Watch `@phcdevworks/spectre-tokens` and `@phcdevworks/spectre-ui` for Phase 4
  token-gated families (nav, toast, tooltip, dropdown, modal).
