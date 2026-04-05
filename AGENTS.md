# Spectre UI Astro Agent Guide

This repository is maintained by PHCDevworks and contains the Astro adapter for the Spectre system.

## Mission

Deliver the upstream `@phcdevworks/spectre-ui` contract through Astro-native components while keeping this package thin, SSR-friendly, type-safe, and strictly downstream of the core Spectre packages.

## Repository Role

This repository contains the Astro adapter for the Spectre system.

Within Spectre:

- `@phcdevworks/spectre-tokens`
  - Owns design values, semantic token meaning, and token contracts.
- `@phcdevworks/spectre-ui`
  - Owns CSS, utilities, Tailwind helpers, class recipes, and shared styling behavior.
- `@phcdevworks/spectre-ui-astro`
  - Owns Astro-native component delivery, framework ergonomics, slot structure, SSR-safe rendering, and adapter-level typing.

Core rule: adapters deliver upstream contracts in framework-native form. They do not redefine design ownership.

## Non-Negotiable Rules

1. Use `@phcdevworks/spectre-ui` as the source of truth for recipe logic, class generation, shared styling behavior, and adapter-facing styling contracts.
2. Do not introduce token definitions in this repository.
3. Do not introduce package-owned CSS, utilities, Tailwind helpers, or alternate styling systems here.
4. Do not re-implement upstream recipe logic when it already exists in `@phcdevworks/spectre-ui`.
5. Keep Astro components thin, framework-appropriate, and closely aligned with upstream contracts.
6. Preserve SSR safety. Avoid nondeterministic output, unstable IDs, and framework-hostile behavior.
7. Keep the public export surface intentional, minimal, and aligned with real Astro delivery needs.
8. Keep docs, tests, exports, and package metadata synchronized whenever public behavior changes.

## What This Repository Owns

This repository may own:

- Astro component wrappers over upstream Spectre UI recipes and classes
- Astro-specific prop ergonomics
- Slot APIs and semantic HTML choices appropriate for Astro
- SSR-safe accessibility wiring
- Adapter-focused tests
- Packaging logic required to publish Astro component entrypoints correctly
- Documentation specific to Astro installation, usage, and adapter behavior

## What This Repository Does Not Own

This repository must not own:

- Design token values or token semantics
- Core CSS files
- Tailwind preset or theme generation
- Shared class recipe logic
- Alternate design-system behavior that diverges from `@phcdevworks/spectre-ui`
- Adapter-specific visual variants that should exist upstream instead
- Local styling contracts that compete with or bypass upstream Spectre UI

## Upstream-First Policy

If a needed styling behavior, recipe option, shared type, or contract is missing:

1. Prefer fixing it in `@phcdevworks/spectre-ui`.
2. Only add local adapter behavior when the need is genuinely Astro-specific.
3. Keep any adapter-specific behavior additive and narrowly scoped to Astro ergonomics.
4. Do not patch around upstream gaps with local design logic unless the limitation is explicitly documented and temporary.

## SSR and Accessibility Rules

1. Prefer deterministic markup.
2. Do not generate unstable IDs for associated labels, helper text, or error states when explicit IDs are required.
3. Preserve semantic HTML for the rendered tag.
4. Keep disabled states safe for Astro SSR output and for non-button elements.
5. Ensure accessibility attributes stay aligned with the upstream contract and actual rendered behavior.
6. When a component requires an explicit `id` for safe accessible associations, enforce that requirement clearly in implementation, types, tests, and docs.

## Public API Discipline

1. Every root export in `src/index.ts` is part of the package contract unless explicitly marked internal.
2. Every documented export must exist in build output and package exports.
3. Every declared package export path in `package.json` must resolve to a real published file.
4. Component entrypoints under `components/*.astro` must stay aligned with actual source files.
5. Avoid broadening the API surface without a clear adapter-level reason.
6. Remove stale convenience exports when they no longer serve the adapter’s core responsibility.

## Dependency Policy

1. Treat `@phcdevworks/spectre-ui` as the required upstream package contract for consumers of this adapter.
2. Keep dependency classification honest:
   - `peerDependencies` for required upstream consumer contracts
   - `devDependencies` for local build, test, and packaging tooling
3. Do not duplicate upstream ownership through convenience dependencies that blur package boundaries.
4. Keep version ranges intentional and aligned with the actual supported upstream contract.

## Validation Requirements

Before merging or publishing changes, run:

```bash
npm ci
npm run build
npm run typecheck
npm test
