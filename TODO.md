# Spectre UI Astro Execution Todo

Active phase: **Phase 3 — Component Family Expansion.**

---

## Phase 1 — Contract Integrity (Complete)

### P0: Contract Integrity / Must-Do

- [x] Add a single adapter contract manifest
  - File targets: `astro-adapter.contract.json`, export/parity validation
    scripts under `scripts/`, `README.md`
  - Acceptance criteria:
    - One machine-readable file declares the public adapter surface
    - The manifest includes root public exports, component entrypoints, stable
      helper/type re-exports, peer dependency expectations, and explicit
      unsupported local CSS helper shortcuts if relevant
    - Contract-facing validation reads from this manifest instead of scattered
      truth sources

- [x] Harden root export parity
  - File targets: `src/index.ts`, `package.json`, export validation scripts
    under `scripts/`, `astro-adapter.contract.json`
  - Acceptance criteria:
    - CI fails if root exports drift from the declared contract manifest,
      package metadata, or documented public API

- [x] Harden component entrypoint parity
  - File targets: component entrypoint files under `src/components/`,
    `package.json`, export validation scripts under `scripts/`,
    `astro-adapter.contract.json`
  - Acceptance criteria:
    - CI fails if declared component entrypoints are missing, undocumented, or
      inconsistent with the declared public contract

- [x] Add stable upstream UI family parity checks
  - File targets: adapter parity tests under `tests/`, `src/components/`,
    `src/recipes/`, `astro-adapter.contract.json`
  - Acceptance criteria:
    - Stable supported Astro component families are explicitly declared
    - Validation fails if supported families drift silently from the stable
      upstream UI surface this package claims to bind
    - Checks stay focused on stable supported families only

- [x] Enforce thin-adapter invariants
  - File targets: validation scripts under `scripts/`, targeted tests under
    `tests/`, `README.md`, `CONTRIBUTING.md` if needed
  - Acceptance criteria:
    - Validation protects the package against local CSS ownership drift, token
      meaning redefinition, and upstream recipe/style reinterpretation
    - The adapter remains a thin Astro binding over upstream Spectre layers

---

## Phase 2 — Downstream Safety (Complete)

### P1: Downstream Safety

- [x] Add built-package Astro consumer smoke tests
  - File targets: smoke tests under `tests/`, package build/test scripts if
    needed
  - Acceptance criteria:
    - Tests exercise root package Astro component imports, direct component
      entrypoint imports, and documented helper/type re-exports
    - Tests confirm expected built runtime and type artifacts exist

- [x] Add README contract parity validation
  - File targets: `README.md`, parity validation script under `scripts/`,
    `package.json`, `astro-adapter.contract.json`
  - Acceptance criteria:
    - CI fails if README contract-facing sections drift from declared root
      exports, component entrypoints, stable helper/type re-exports, peer
      dependency expectations, or required upstream CSS import guidance

- [x] Clarify example boundary rules
  - File targets: `README.md`, `examples/`, example docs if present
  - Acceptance criteria:
    - Examples remain aligned to the documented contract
    - Examples do not become a parallel source of truth for unsupported behavior

### P2: Later / Controlled Expansion

- [x] Add a maintainer-facing contract coverage map
  - File targets: `CONTRIBUTING.md`
  - Acceptance criteria:
    - Maintainers can quickly see which script or test enforces root exports,
      component entrypoints, upstream parity, thin-adapter invariants, README
      parity, and built-package smoke coverage

- [x] Classify supported component families by stability
  - File targets: `astro-adapter.contract.json`, `README.md` if needed
  - Acceptance criteria:
    - Stable, provisional, and not-yet-supported families are clear before
      further expansion

### Recommended Execution Order (Historical)

1. Add `astro-adapter.contract.json`
2. Harden root exports
3. Harden component entrypoints
4. Add stable upstream parity checks
5. Enforce thin-adapter invariants
6. Add built-package Astro smoke tests
7. Add README parity validation
8. Clarify example boundaries
9. Add maintainer coverage mapping
10. Expand only after parity stays clean

---

## Phase 3 — Active Now

All four Phase 3 recipes are live in `@phcdevworks/spectre-ui` ^1.7.0.
`SpAlert` and `SpAvatar` are delivered. `SpSpinner` and `SpTag` remain.
Add one component at a time. Run `npm run check` before moving to the next.

### Components

- [x] `SpAlert`
  - `src/components/SpAlert.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-alert.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpAlert.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

- [x] `SpAvatar`
  - `src/components/SpAvatar.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-avatar.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpAvatar.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

- [x] `SpSpinner`
  - `src/components/SpSpinner.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-spinner.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpSpinner.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

- [x] `SpTag`
  - `src/components/SpTag.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-tag.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpTag.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

### Release

- [x] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^1.7.0` in
  `package.json` and `astro-adapter.contract.json`.
- [x] Update `CHANGELOG.md [Unreleased]` for each new component family.
- [x] Hand off to Bradley Potts for version bump, commit, tag, and publish.

---

## Phase 4 — Gated on Upstream

Do not start until `@phcdevworks/spectre-tokens` publishes component-level
tokens and `@phcdevworks/spectre-ui` ships the corresponding recipes.

| Family   | Required token group        | Upstream status |
| -------- | --------------------------- | --------------- |
| nav      | component.nav               | Not yet shipped |
| toast    | component.toast             | Not yet shipped |
| tooltip  | component.tooltip           | Not yet shipped |
| dropdown | component.dropdown          | Not yet shipped |
| modal    | component.modal             | Not yet shipped |

Check `npm view @phcdevworks/spectre-ui version` and the `spectre-tokens`
changelog before opening any Phase 4 work.

---

## Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Phase 4 families before their upstream recipes publish to npm.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.
