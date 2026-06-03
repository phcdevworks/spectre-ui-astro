# Spectre UI Astro Execution Todo

This todo list is aligned to the current repository and the roadmap in
`ROADMAP.md`. It is intentionally scoped to Astro adapter contract hardening,
upstream parity, package export clarity, downstream consumer safety, and release
readiness.

## Phase 1 - Foundation: Completed

The adapter foundation is in place. The package already publishes Astro-native
components backed by upstream `@phcdevworks/spectre-ui` recipes and validates
the current package shape through the main check path.

### P0: Adapter Contract Baseline

- [x] Ship Astro-native components for the stable adapter surface
  - `SpBadge`, `SpButton`, `SpCard`, `SpIconBox`, `SpInput`, `SpPricingCard`,
    `SpRating`, and `SpTestimonial` are exposed from the package root and direct
    component entrypoints.

- [x] Keep styling downstream of `@phcdevworks/spectre-ui`
  - Components call upstream recipe helpers instead of owning local token
    values, CSS utilities, Tailwind helpers, or recipe logic.

- [x] Preserve SSR-safe component behavior
  - Rendering tests cover Astro output, ARIA behavior, disabled states, slot
    rendering, and the explicit `SpInput` id invariant.

- [x] Validate the current package contract during build
  - `scripts/validate-package-contract.ts` runs after build and checks package
    entrypoints, generated files, and public export expectations.

### P1: Documentation and Example Baseline

- [x] Document consumer installation and usage in `README.md`
  - The README covers peer dependencies, the required upstream CSS import, root
    imports, direct component entrypoints, component props, and recipe helper
    re-exports.

- [x] Keep contributor workflow documented
  - `CONTRIBUTING.md` describes setup, package structure, adapter
    responsibilities, contract-impacting changes, and the full validation gate.

- [x] Maintain an Astro example app as a validation surface
  - `examples/` demonstrates downstream consumption without becoming the public
    contract authority.

### P2: Agent and Release Baseline

- [x] Establish shared AI/developer guidance
  - `AGENTS.md` owns the shared mission, agent roster, edit boundaries,
    validation command, PR requirements, and package ownership rules.

- [x] Keep role files scoped by agent
  - `CLAUDE.md`, `CODEX.md`, `JULES.md`, and `COPILOT.md` now point back to
    `AGENTS.md` for shared rules and contain only role-specific workflows.

---

## Phase 2 - Mature Adapter Operations

All items below are forward-looking. This phase starts from the stable adapter
baseline and focuses on machine-readable contract authority, parity validation,
downstream package safety, and controlled release handoff.

### P0: Contract Integrity

- [x] Add a single adapter contract manifest
  - File targets: `astro-adapter.contract.json`, validation scripts under
    `scripts/`, and contract-facing README references.
  - Acceptance criteria: one machine-readable file declares root exports,
    component entrypoints, stable helper/type re-exports, peer dependency
    expectations, and intentionally unsupported local CSS helper shortcuts if
    relevant.

- [x] Harden root export parity
  - File targets: `src/index.ts`, `package.json`, `astro-adapter.contract.json`,
    and export validation scripts.
  - Acceptance criteria: CI fails if root exports drift from the declared
    contract manifest, package metadata, built output, or documented public API.

- [x] Harden component entrypoint parity
  - File targets: `src/components/*.astro`, `package.json`,
    `astro-adapter.contract.json`, and export validation scripts.
  - Acceptance criteria: CI fails if declared component entrypoints are missing,
    undocumented, or inconsistent with the declared public contract.

- [x] Add stable upstream UI family parity checks
  - File targets: adapter parity tests under `tests/`, `src/components/`,
    `src/recipes/`, and `astro-adapter.contract.json`.
  - Acceptance criteria: stable supported Astro component families are declared
    explicitly, and validation fails if support silently drifts from the
    upstream UI surface this package claims to bind.

- [x] Enforce thin-adapter invariants
  - File targets: validation scripts under `scripts/`, targeted tests under
    `tests/`, `README.md`, and `CONTRIBUTING.md` if guidance changes.
  - Acceptance criteria: validation protects against local CSS ownership drift,
    token meaning redefinition, and upstream recipe/style reinterpretation.

### P1: Downstream Safety

- [x] Add built-package Astro consumer smoke tests
  - File targets: smoke tests under `tests/` and package build/test scripts if
    needed.
  - Acceptance criteria: tests exercise root package component imports, direct
    component entrypoint imports, documented helper/type re-exports, and
    expected built runtime and type artifacts.

- [x] Add README contract parity validation
  - File targets: `README.md`, parity validation scripts under `scripts/`,
    `package.json`, and `astro-adapter.contract.json`.
  - Acceptance criteria: CI fails if README contract-facing sections drift from
    declared root exports, component entrypoints, helper/type re-exports, peer
    dependency expectations, or upstream CSS import guidance.

- [x] Clarify example boundary rules
  - File targets: `README.md`, `examples/`, and example docs if present.
  - Acceptance criteria: examples remain aligned to the documented contract and
    do not become a parallel source of truth for unsupported behavior.

### P2: Release and Maintainer Clarity

- [x] Add a maintainer-facing contract coverage map
  - File targets: `CONTRIBUTING.md`.
  - Acceptance criteria: maintainers can quickly see which script or test
    enforces root exports, component entrypoints, upstream parity, thin-adapter
    invariants, README parity, and built-package smoke coverage.

- [x] Classify supported component families by stability
  - File targets: `astro-adapter.contract.json` and `README.md` if needed.
  - Acceptance criteria: stable, provisional, and not-yet-supported families are
    clear before further expansion.

- [x] Add semver proposal support for release handoff
  - File targets: release scripts and `CODEX.md`/`CLAUDE.md` release procedure
    references.
  - Acceptance criteria: release handoff can propose a version bump from the
    `CHANGELOG.md [Unreleased]` adapter contract classification while Bradley
    Potts keeps final version authority.

---

## Phase 3 - Component Family Expansion

Phase 3 binds the four upstream families currently declared as `notYetSupported`
in `astro-adapter.contract.json`. All four have recipes available in
`@phcdevworks/spectre-ui` ^1.7.0.

### P0: Bind the four ready families

Each family must follow the full delivery checklist: `.astro` component,
recipe/type re-exports, tests, README docs, stability table update, and
contract manifest update. Complete one family at a time and run `npm run check`
before moving to the next.

- [ ] Add `SpAlert` component
  - File targets: `src/components/SpAlert.astro`, `src/recipes/index.ts`,
    `src/index.ts`, `package.json`, `astro-adapter.contract.json`,
    `tests/sp-alert.test.ts`, `tests/rendering.test.ts`, `README.md`.
  - Acceptance criteria: `SpAlert` is exported from the package root and
    `./components/SpAlert.astro` entrypoint, covered by SSR and prop tests,
    documented in `README.md`, and classified as `stable` in the contract.

- [ ] Add `SpAvatar` component
  - File targets: `src/components/SpAvatar.astro`, `src/recipes/index.ts`,
    `src/index.ts`, `package.json`, `astro-adapter.contract.json`,
    `tests/sp-avatar.test.ts`, `tests/rendering.test.ts`, `README.md`.
  - Acceptance criteria: same as `SpAlert`.

- [ ] Add `SpSpinner` component
  - File targets: `src/components/SpSpinner.astro`, `src/recipes/index.ts`,
    `src/index.ts`, `package.json`, `astro-adapter.contract.json`,
    `tests/sp-spinner.test.ts`, `tests/rendering.test.ts`, `README.md`.
  - Acceptance criteria: same as `SpAlert`.

- [ ] Add `SpTag` component
  - File targets: `src/components/SpTag.astro`, `src/recipes/index.ts`,
    `src/index.ts`, `package.json`, `astro-adapter.contract.json`,
    `tests/sp-tag.test.ts`, `tests/rendering.test.ts`, `README.md`.
  - Acceptance criteria: same as `SpAlert`.

### P1: Peer dependency and release hygiene

- [ ] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^1.7.0`
  - File targets: `package.json`, `astro-adapter.contract.json`.
  - Acceptance criteria: the declared peer range matches the minimum version
    that ships all four bound recipe families.

- [ ] Update `CHANGELOG.md [Unreleased]` for the Phase 3 component additions
  - Acceptance criteria: each new component family is documented as an additive
    change before handoff to Bradley Potts for version bump and publish.

---

## Phase 4 - Token-Gated Expansion

Phase 4 is future work gated on `@phcdevworks/spectre-tokens` releasing
component-level tokens and `@phcdevworks/spectre-ui` publishing the
corresponding recipe families. Do not start Phase 4 work until the upstream
packages have published to npm.

Planned families: nav, toast, tooltip, dropdown, modal.

Track upstream readiness in `spectre-tokens` and `spectre-ui` before opening
any Phase 4 work items.

---

## Recommended Execution Order

1. Add `SpAlert`, `SpAvatar`, `SpSpinner`, `SpTag` one at a time.
2. Bump peer dependency range to `^1.7.0`.
3. Update `CHANGELOG.md [Unreleased]`.
4. Hand off to Bradley Potts for version bump, commit, tag, and publish.
5. Watch for upstream Phase 3 tokens + recipe wave before starting Phase 4.

## Explicitly Out of Scope

- Do not redefine token meaning here.
- Do not add CSS ownership here.
- Do not fork upstream recipe logic here.
- Do not expand framework responsibilities beyond Astro adapter delivery.
- Do not move Lit web component behavior into this package.
- Do not treat examples as independent published packages or contract
  authorities.
- Do not bind Phase 4 families before their recipes publish to npm.
