# Spectre UI Astro Execution Todo

Active phase: **Phase 7 is implemented and prepared for release. Human
review, version bump, commit, tag, and publish remain with Bradley Potts.**

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

## Phase 3 — Token-Gated Expansion (Complete)

All four Phase 3 recipes are live in `@phcdevworks/spectre-ui` ^1.7.0, and
`SpAlert`, `SpAvatar`, `SpSpinner`, and `SpTag` are delivered. Run
`npm run check` before release handoff.

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
- [x] Move 2.6.0 changes from `CHANGELOG.md [Unreleased]` into the release
  heading.
- [x] Hand off to Bradley Potts for version bump, commit, tag, and publish.

---

## Phase 4 — Token-Gated Expansion (Complete)

All five Phase 4 recipes are live in `@phcdevworks/spectre-ui` ^1.9.0 and
`@phcdevworks/spectre-tokens` ^2.9.0, and `SpNav`, `SpToast`, `SpTooltip`,
`SpDropdown`, and `SpModal` are delivered. Run `npm run check` before release
handoff.

| Family   | Required token group | Upstream status |
| -------- | -------------------- | --------------- |
| nav      | component.nav        | Shipped         |
| toast    | component.toast      | Shipped         |
| tooltip  | component.tooltip    | Shipped         |
| dropdown | component.dropdown   | Shipped         |
| modal    | component.modal      | Shipped         |

### Phase 4 Components

- [x] `SpNav`
  - `src/components/SpNav.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-nav.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpNav.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

- [x] `SpToast`
  - `src/components/SpToast.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-toast.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpToast.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

- [x] `SpTooltip`
  - `src/components/SpTooltip.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-tooltip.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpTooltip.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

- [x] `SpDropdown`
  - `src/components/SpDropdown.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-dropdown.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpDropdown.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

- [x] `SpModal`
  - `src/components/SpModal.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-modal.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpModal.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

### Phase 4 Release

- [x] Bump `peerDependencies["@phcdevworks/spectre-tokens"]` to `^2.9.0` and
  `peerDependencies["@phcdevworks/spectre-ui"]` to `^1.9.0` in `package.json`
  and `astro-adapter.contract.json`.
- [x] Move Phase 4 changes from `CHANGELOG.md [Unreleased]` into the release
  heading.
- [x] Prepare version bump for Bradley Potts review, commit, tag, and publish.

---

## Phase 5 — Layout Components: Prepared for release

`@phcdevworks/spectre-ui` v2.1.0 ships the layout recipes
(`getContainerClasses`, `getStackClasses`, `getSectionClasses`). All three
components are implemented and `npm run check` passes.

### Components

- [x] `SpContainer`
  - `src/components/SpContainer.astro` calling `getContainerClasses`, recipe
    re-export in `src/recipes/index.ts`, export in `src/index.ts`, entrypoint
    in `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-container.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.

- [x] `SpStack`
  - `src/components/SpStack.astro` calling `getStackClasses`, with a
    `direction` prop (`vertical` | `horizontal`). Same delivery pattern as
    above, `tests/sp-stack.test.ts`.

- [x] `SpSection`
  - `src/components/SpSection.astro` calling `getSectionClasses`. Same
    delivery pattern as above, `tests/sp-section.test.ts`.

### Release

- [x] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.1.0` and
  `peerDependencies["@phcdevworks/spectre-tokens"]` to `^3.0.0`, in both
  `package.json` and `astro-adapter.contract.json`.
- [x] Move changes from `CHANGELOG.md [Unreleased]` into the release heading.
- [x] Prepare version bump for Bradley Potts review, commit, tag, and publish.

---

## Phase 6 — Grid Component (v1): Implemented, prepared for release

`@phcdevworks/spectre-ui` ^2.2.0 ships the Grid recipe (`getGridClasses`).
`SpGrid` is implemented; run `npm run check` before release handoff.

### Components

- [x] `SpGrid`
  - `src/components/SpGrid.astro` calling `getGridClasses`, with `columns`
    (`1 | 2 | 3 | 4 | 6 | 12`) and `gap` (`sm | md | lg`) props mapped
    directly to the upstream recipe options — no adapter-local interpretation
    of column count or breakpoint behavior. Recipe re-export in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-grid.test.ts`, SSR coverage in `tests/rendering.test.ts`, prop
    table and usage in `README.md`.

### Release

- [x] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.2.0`, in both
  `package.json` and `astro-adapter.contract.json`.
- [x] Move changes from `CHANGELOG.md [Unreleased]` into the release heading.
- [x] Prepare version bump for Bradley Potts review, commit, tag, and publish.

### Phase 6 — Grid Component (v2, deferred)

Matches upstream `spectre-ui` Phase 4c v2 scope. Only take on if upstream
ships v2 recipe options and a real downstream adapter need exists.

- [ ] Column span prop, once upstream supports it
- [ ] Column/row offset props, once upstream supports it
- [ ] Per-breakpoint column override prop, once upstream supports it

---

## Phase 7 — App Shell Layout: Implemented, prepared for release

`@phcdevworks/spectre-ui` v2.3.0 ships the Stack/Container option additions
and Sidebar/Footer recipes (tracked as "Phase 4d — App Shell Layout:
Stack/Container Options, Sidebar, Footer" in `spectre-ui/TODO.md`, done).
`@phcdevworks/spectre-tokens` v3.1.0 ships the backing `layout.sidebar.width`
and `layout.container.maxWidthProse` tokens. `peerDependencies` bumped to
`@phcdevworks/spectre-ui@^2.3.0` and `@phcdevworks/spectre-tokens@^3.1.0` in
both `package.json` and `astro-adapter.contract.json`. Run `npm run check`
before release handoff.

### Components and prop additions

- [x] Added `basis` prop to `SpStack` and `maxWidth` prop to `SpContainer`,
  mapping directly to the upstream recipe options (`StackBasis`,
  `ContainerMaxWidth`).

- [x] `SpSidebar`
  - `src/components/SpSidebar.astro` calling the upstream Sidebar recipe,
    same delivery pattern as `SpNav`: component file, recipe re-export,
    export in `src/index.ts`, entrypoint in `package.json`, contract entry
    in `astro-adapter.contract.json`, `tests/sp-sidebar.test.ts`, SSR
    coverage in `tests/rendering.test.ts`, prop table and usage in
    `README.md`.
  - **Decided: slide-out drawer on mobile.** Upstream `spectre-ui` owns the
    CSS contract only (off-canvas position, transition, backdrop, the
    `data-sidebar-open` data-attribute selector contract, confirmed against
    the published `spectre-ui` README). This package is the first in this
    adapter to own actual interactive state: `SpSidebar` renders its own
    wrapper element carrying `data-sidebar-open="false"` (SSR-safe, closed
    by default, no layout shift on hydration), a hamburger toggle button
    (`toggleLabel` prop for the accessible label), and the backdrop element
    (`getSidebarBackdropClasses`). An inline `<script>` block binds the
    click handler that flips the data-attribute and the backdrop-tap-to-close
    behavior, scoped per-instance via a `data-sidebar-bound` guard.
  - Decided against a separate hamburger trigger wired into `SpNav` usage —
    `SpSidebar` owns its own toggle directly, which keeps the interactive
    contract in one component instead of splitting it across two.

- [x] `SpFooter`
  - `src/components/SpFooter.astro` calling the upstream Footer recipe.
    Same delivery pattern as above, `tests/sp-footer.test.ts`.

### Release

- [x] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.3.0` and
  `peerDependencies["@phcdevworks/spectre-tokens"]` to `^3.1.0`, in both
  `package.json` and `astro-adapter.contract.json`.
- [x] Move changes from `CHANGELOG.md [Unreleased]` into the release heading.
- [x] Prepare release handoff for Bradley Potts review, commit, tag, and
  publish.

---

## Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.
