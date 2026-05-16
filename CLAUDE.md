# CLAUDE.md — Spectre UI Astro

## Project Identity

**Package:** `@phcdevworks/spectre-ui-astro`
**Layer:** L3 of the Spectre design suite — Astro adapter
**Human owner:** Bradley Potts (brad.potts@coastdigitalgroup.com)
**Primary AI developer:** Claude Code (claude-sonnet-4-6)

This file is the authoritative guide for Claude Code. Read it before touching any source file.

## Multi-Agent Collaboration

This repository follows the Spectre AI factory model:

| Agent | Role | Guide |
|-------|------|-------|
| Claude Code (`claude-sonnet-4-6`) | Primary AI developer — implementation lead | This file (`CLAUDE.md`) |
| OpenAI Codex | Documentation, releases, production stabilization, repo hygiene, config standardization, contract review, and docs parity | [`CODEX.md`](CODEX.md), [`.codex/`](.codex/README.md) |
| GitHub Copilot | General development assistance | [`.github/copilot-instructions.md`](.github/copilot-instructions.md) |
| Google Jules | Automated maintenance for small fixes, dependency updates, and micro-updates | Future `JULES.md` or task prompt |

**Authority order:** Bradley Potts > [`AGENTS.md`](AGENTS.md) > this file (`CLAUDE.md`) > [`CODEX.md`](CODEX.md) > Copilot/Jules task guidance > local conventions.

[`AGENTS.md`](AGENTS.md) is the shared cross-agent guide — rules there apply to
all agents. Read it when rules overlap or conflict. Codex uses
[`.codex/`](.codex/README.md) for its release and change-review workflows;
Claude Code does not need to edit those files.

Codex reviews Claude Code's changes for contract drift, dependency
classification, SSR safety, documentation parity, and release readiness. Claude
Code owns implementation; Codex owns release checks and repo-hygiene support.
Copilot assists without ownership. Jules, when configured, stays within bounded
maintenance prompts.

## Commit Policy

Claude Code does not create git commits in this repository. Prepare changes,
run all validation, and leave staging, committing, tagging, and pushing to
human review.

## Spectre layer hierarchy (read-only upstream)

| Layer | Package | Owns |
|-------|---------|------|
| L1 | `@phcdevworks/spectre-tokens` | Design values and token contracts |
| L2 | `@phcdevworks/spectre-ui` | CSS, utilities, Tailwind helpers, class recipes |
| L3 | `@phcdevworks/spectre-ui-astro` | Astro-native component delivery (this repo) |

This repo is L3. It binds the L2 contract for Astro. It does not redefine anything from L1 or L2.

## Non-negotiable rules

1. `@phcdevworks/spectre-ui` is the single source of truth for recipe logic, class generation, and styling contracts. Never reimplement upstream recipes locally.
2. No token definitions in this repo — that belongs to L1.
3. No package-owned CSS files or local `<style>` blocks — that belongs to L2.
4. No Tailwind preset or theme generation here.
5. Keep Astro components thin: they wrap upstream recipes and handle Astro-specific ergonomics only.
6. Preserve SSR safety — no unstable IDs, no nondeterministic output.
7. Keep the public export surface intentional, minimal, and in sync with `package.json` exports.
8. `@phcdevworks/spectre-ui` and `astro` are `peerDependencies`, never `dependencies`.
9. `SpInput` requires an explicit `id` when `label`, `helperText`, or `errorMessage` is used — this is an SSR invariant.
10. The example app is a validation surface, not a parallel contract. Do not track example lockfiles or use `npm ci` against `file:..` local links.

## Thin adapter decision checklist

Before adding any code to this package, answer these questions:

**Does this belong upstream?**
- Is it a styling behavior, visual variant, or recipe option? → Fix in `@phcdevworks/spectre-ui`, not here.
- Is it a design value, color, spacing, or token meaning? → Fix in `@phcdevworks/spectre-tokens`, not here.
- Is it a CSS utility, Tailwind helper, or class recipe? → Fix in `@phcdevworks/spectre-ui`, not here.

**Does this belong here?**
- Is it an Astro slot structure or named slot API? → OK here.
- Is it an SSR constraint or Astro-specific render invariant? → OK here.
- Is it Astro prop typing, component packaging, or entrypoint wiring? → OK here.
- Is it an adapter-level ergonomic (like `as` prop or `resolveInteractiveAttrs`)? → OK here.

**Warning signs that code does not belong here:**
- You are computing CSS class strings from scratch instead of calling an upstream recipe function.
- You are defining a color, spacing value, or design token.
- You are writing a `<style>` block or stylesheet.
- You are re-implementing recipe logic that already exists in `@phcdevworks/spectre-ui`.
- You are adding a visual variant that does not exist upstream.

**When upstream is missing something you need:**
1. Check whether the behavior already exists in `@phcdevworks/spectre-ui` under a different name.
2. If genuinely missing, open an issue or PR in `@phcdevworks/spectre-ui` first.
3. Add a temporary adapter-level workaround only if waiting for upstream would block critical delivery.
4. Mark any workaround with a comment referencing the upstream gap and remove it when upstream ships the fix.

## Essential commands

```bash
npm install               # install deps
npm run build             # tsup + copy Astro components + validate package contract
npm run typecheck         # tsc --noEmit
npm run lint              # eslint .
npm test                  # vitest run (98 tests across 11 files)
npm run ci:verify         # lint + build + typecheck + test (full pre-merge check)
```

Always run `npm run ci:verify` before opening a PR or tagging a release.

## File structure

```
src/
  components/
    SpBadge.astro           # badge component
    SpButton.astro          # button component
    SpCard.astro            # card component
    SpIconBox.astro         # icon box component
    SpInput.astro           # input component
    SpPricingCard.astro     # pricing card component (named slots)
    SpRating.astro          # rating component (star rendering)
    SpTestimonial.astro     # testimonial component (named slots)
    sp-input.shared.ts      # SpInput accessibility logic + types
    sp-interactive.shared.ts  # shared interactive attribute resolution
  recipes/
    index.ts                # re-exports all upstream recipe helpers and types
  index.ts                  # public package exports (components + recipes)

tests/
  exports.test.ts           # package contract, export surface, peer dep checks
  rendering.test.ts         # SSR rendering integration tests
  docs-examples.test.ts     # README/example alignment checks
  sp-badge.test.ts          # SpBadge unit tests
  sp-button.test.ts         # SpButton unit tests
  sp-card.test.ts           # SpCard unit tests
  sp-icon-box.test.ts       # SpIconBox unit tests
  sp-input.test.ts          # SpInput unit tests
  sp-pricing-card.test.ts   # SpPricingCard unit tests
  sp-rating.test.ts         # SpRating unit tests
  sp-testimonial.test.ts    # SpTestimonial unit tests

scripts/
  copy-components.ts        # copies .astro files from src/ to dist/
  validate-package-contract.ts  # post-build contract assertions

examples/                   # demo Astro app (not a CI dependency)
dist/                       # generated build output (gitignored)
```

## Shared utilities

### `sp-interactive.shared.ts`

`resolveInteractiveAttrs({ Tag, isDisabled, href, type, tabindex, interactive })` — resolves `finalType`, `finalHref`, `finalTabIndex` for any component that supports polymorphic rendering. Used by all interactive components.

Key behaviors:
- `finalType` is set only when `Tag === "button"` (defaults to `"button"`)
- `finalHref` is suppressed when `isDisabled` (prevents disabled anchor navigation)
- `finalTabIndex` is `-1` for non-button disabled/loading elements; `0` for interactive non-native elements

### `sp-input.shared.ts`

`resolveSpInputAccessibility({ id, label, helperText, errorMessage })` — validates the SSR id requirement and returns stable `helperId`, `errorId`, `describedBy`. Throws if `id` is missing when associations are present.

## Component patterns

Every interactive component follows the same structure:

1. Import recipe function + types from `@phcdevworks/spectre-ui`
2. Import `resolveInteractiveAttrs` from `./sp-interactive.shared`
3. Declare a local `SpXxxElement` type union and `SpXxxProps` interface extending the upstream recipe options
4. Use `[key: string]: unknown` (not `any`) in the props interface for pass-through attributes
5. Destructure known recipe + adapter props; capture rest with `...rest`
6. Resolve disabled state: `const isXxxDisabled = disabled || loading`
7. Call the recipe function to get classes
8. Call `resolveInteractiveAttrs` for interactive attribute resolution
9. Render the polymorphic `<Tag>` with ARIA attributes, spreading `{...rest}` last

`SpInput` differs — it renders a wrapper + label + input + helper/error text rather than a single polymorphic element.

## Adding a new component

1. Add the `.astro` file under `src/components/` following the existing pattern
2. Export from `src/index.ts`
3. Add the component entrypoint to `package.json` exports
4. Re-export upstream recipe helpers and types in `src/recipes/index.ts`
5. Add a test file under `tests/`
6. Add SSR rendering coverage in `tests/rendering.test.ts`
7. Verify the example app if needed
8. Update `README.md` exports and component entry points sections
9. Add a `CHANGELOG.md` entry under `[Unreleased]`
10. Run `npm run ci:verify`

## Testing strategy

- `exports.test.ts` — validates the full package surface (no drift between source, package.json, and dist)
- `rendering.test.ts` — SSR integration tests via `AstroContainer`, checks classes + ARIA + interactive behavior
- `sp-*.test.ts` — per-component unit tests for prop forwarding, DOM leakage prevention, tabindex guarding, slot behavior
- `docs-examples.test.ts` — ensures README and examples stay aligned with the contract (no stale naming, SpInput `id` requirement, no local CSS)

Tests use `AstroContainer.create()` in `beforeAll`. All tests must remain green before any merge.

## Code standards

- TypeScript strict, ESM only
- `[key: string]: unknown` for pass-through prop index signatures (never `any`)
- No comments unless the why is non-obvious
- No local CSS, no local tokens, no upstream recipe reimplementation
- Props consumed by the adapter (recipe options + adapter ergonomics) must not leak to the DOM — destructure them explicitly and spread only `...rest`

## Release workflow

1. Update `CHANGELOG.md` — move `[Unreleased]` items under a new version heading
2. Bump version in `package.json`
3. Run `npm run ci:verify`
4. Hand off to human for review, commit, tag, and `npm publish`

## Upstream-first policy

If a styling behavior, recipe option, or shared type is missing, prefer fixing it in `@phcdevworks/spectre-ui` first. Only add local adapter behavior when the need is genuinely Astro-specific. Document any temporary adapter-only workarounds clearly.

## Roadmap priorities (from ROADMAP.md / TODO.md)

**P0 — Contract Integrity:**
- Add `astro-adapter.contract.json` as a machine-readable contract anchor
- Harden root export and component entrypoint parity validation from the manifest
- Add stable upstream UI family parity checks
- Enforce thin-adapter invariants (no local CSS, no token redefinition)

**P1 — Downstream Safety:**
- Built-package Astro consumer smoke coverage
- README contract parity validation
- Clarify example boundary rules

Work P0 items before expanding the component surface.
