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

- [ ] Add stable upstream UI family parity checks
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

- [ ] Add built-package Astro consumer smoke tests
  - File targets: smoke tests under `tests/` and package build/test scripts if
    needed.
  - Acceptance criteria: tests exercise root package component imports, direct
    component entrypoint imports, documented helper/type re-exports, and
    expected built runtime and type artifacts.

- [ ] Add README contract parity validation
  - File targets: `README.md`, parity validation scripts under `scripts/`,
    `package.json`, and `astro-adapter.contract.json`.
  - Acceptance criteria: CI fails if README contract-facing sections drift from
    declared root exports, component entrypoints, helper/type re-exports, peer
    dependency expectations, or upstream CSS import guidance.

- [ ] Clarify example boundary rules
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

## Recommended Execution Order

1. Add `astro-adapter.contract.json`.
2. Harden root exports.
3. Harden component entrypoints.
4. Add stable upstream parity checks.
5. Enforce thin-adapter invariants.
6. Add built-package Astro smoke tests.
7. Add README parity validation.
8. Clarify example boundaries.
9. Add maintainer coverage mapping.
10. Classify supported component families by stability.
11. Add semver proposal support after classification is dependable.

## Explicitly Out of Scope

- Do not redefine token meaning here.
- Do not add CSS ownership here.
- Do not fork upstream recipe logic here.
- Do not expand framework responsibilities beyond Astro adapter delivery.
- Do not move Lit web component behavior into this package.
- Do not treat examples as independent published packages or contract
  authorities.
