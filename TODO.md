# Spectre UI Astro Execution Todo

Active phase: **Phase 10 is delivered and prepared for npm release as 3.3.0.
Human review, commit, tag, and publish remain with Bradley Potts.**

## Post-Phase-10: Recipe Option Forwarding Gap (Complete, Unreleased)

- [x] `SpSelect`/`SpTextarea` were only forwarding `disabled`/`focused` to
  `getSelectClasses`/`getTextareaClasses`, silently dropping `size`,
  `fullWidth`, `pill`, and the `state`/`loading` options added in
  `@phcdevworks/spectre-ui@2.7.0` (invalid/success/loading states). Fixed by
  forwarding the full `SelectRecipeOptions`/`TextareaRecipeOptions` surface,
  following the `SpInput`/`getInputClasses` pattern, plus `aria-invalid`/
  `aria-busy` wiring. Added `omitUndefined` helper
  (`src/components/sp-recipe-options.shared.ts`) to satisfy
  `exactOptionalPropertyTypes` when forwarding optional destructured props.
  - File targets: `src/components/SpSelect.astro`,
    `src/components/SpTextarea.astro`,
    `src/components/sp-recipe-options.shared.ts`, `tests/sp-select.test.ts`,
    `tests/sp-textarea.test.ts`
  - Acceptance criteria: full recipe option surface reaches the upstream
    recipe call; new tests cover size/shape classes, invalid/success state
    classes + `aria-invalid`, and loading class + `aria-busy`; `npm run check`
    passes.
- [x] `peerDependencies` were stale (`@phcdevworks/spectre-tokens@^3.2.0`,
  `@phcdevworks/spectre-ui@^2.6.0`) against the already-bumped
  `devDependencies` (`^3.3.1`/`^2.7.0`), meaning consumers installing per the
  published peer range were not guaranteed the token/recipe fixes. Bumped
  `package.json` peerDependencies, `astro-adapter.contract.json`
  peerDependencies/upstreamBinding, and `examples/package.json` to match.
- [x] `CLAUDE.md` claimed "current version `2.7.0`" (that's spectre-ui's
  version, not this package's) while `package.json`/`CHANGELOG.md` were
  already at `3.3.0`. Corrected the roadmap-priorities note.

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

## Phase 8 — Sidebar Toggle Z-Index Fix: Implemented, prepared for release

`@phcdevworks/spectre-ui` v2.4.0 ships two additive fixes (tracked as "App
Shell Hardening" in `spectre-ui/CHANGELOG.md`, released 2026-06-23):

- **Stack `align` option** (`center` | `stretch`) on `getStackClasses`, so a
  docked `SpSidebar` can stretch to match a taller main content column inside
  an `.sp-hstack` row. `.sp-hstack` still defaults to `center` for backward
  compatibility — callers must opt in.
- **`getSidebarToggleClasses`**, a new recipe wrapping `.sp-sidebar-toggle`
  with an explicit `--sp-component-sidebar-toggle-z-index` above the
  backdrop's z-index. Fixes a real bug found in `docs-phcdevworks-com`: the
  hamburger button could open the sidebar but not close it, because the
  backdrop's z-index sat above the toggle button once open.

Neither fix takes effect for Astro consumers until this package is updated —
`src/components/SpSidebar.astro` currently hardcodes the literal class string
`"sp-sidebar-toggle"` on the toggle `<button>` instead of calling the new
`getSidebarToggleClasses()`, and `SpStack`/`SpContainer` callers have no way to
pass `align: 'stretch'` through yet.

### Required changes

- [x] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.4.0` in
  `package.json` and `astro-adapter.contract.json`.

- [x] `SpSidebar`: import `getSidebarToggleClasses` from `@phcdevworks/spectre-ui`
  and apply it to the toggle `<button>` instead of the hardcoded
  `"sp-sidebar-toggle"` string in `src/components/SpSidebar.astro`.
  - Done when: the rendered toggle button class comes from the recipe
    function, not a literal string, and `tests/sp-sidebar.test.ts` asserts
    this (add a case if the existing test only checks for class presence by
    string match).

- [x] `SpStack`: add an `align` prop (`'center' | 'stretch'`) mapping directly
  to the new `getStackClasses({ align })` option, same delivery pattern as the
  existing `direction`/`basis` props. Default stays `center` to match
  upstream's backward-compatible default.
  - Done when: `tests/sp-stack.test.ts` covers both values, `README.md` prop
    table updated.

- [x] Update `astro-adapter.contract.json` and `README.md` for both changes.

- [x] Move changes from `CHANGELOG.md [Unreleased]` into the release heading
  (entries are drafted under `[Unreleased]`; moving to a version heading
  happens at release time per the release procedure).

- [x] Prepare release handoff for Bradley Potts review, commit, tag, and
  publish.

### Downstream unblock

Once published, `docs-phcdevworks-com` needs to bump its
`@phcdevworks/spectre-ui-astro` dependency range to cover this release to
actually receive the toggle z-index fix and use `SpStack`'s new `align="stretch"`
option for the sidebar/main-content row.

---

## Phase 9 — Sidebar Header/Indent and Full-Height Fix: Complete, pending release

Was blocked on `spectre-ui/TODO.md` Phase 5 P0 items, now published in
`@phcdevworks/spectre-ui@2.5.0`: `.sp-sidebar` full-height fix when docked
inline, `getSidebarHeaderClasses()` recipe, and the `level`
(`'parent' | 'child'`) option on `getSidebarLinkClasses`. Surfaced from
`docs-phcdevworks-com`'s app shell — full request: full-height sidebar with
no gap, visually distinguished section headers, and properly indented
parent/child nav links.

- [x] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.5.0`.

- [x] `SpSidebar`: no prop change needed. Decided, based on how
  `docs-phcdevworks-com`'s `DocsLayout.astro` actually composes its nav
  groups (plain `<span>` headers and `<nav>` link lists inside `SpStack`
  blocks in the default slot), to document and re-export
  `getSidebarHeaderClasses()` for consumer-composed `<span>`/`<p>` headers —
  same pattern this adapter already uses for the existing
  `getSidebarLinkClasses` re-export, not a new prop.

- [x] `getSidebarLinkClasses` re-export: the `level` option flows through
  automatically since `SidebarLinkRecipeOptions` is re-exported by reference;
  also re-exported the `SidebarLinkLevel` type for consumer typing.

- [x] Updated `tests/sp-sidebar.test.ts`, `tests/exports.test.ts`,
  `README.md` prop/recipe tables, and `astro-adapter.contract.json` for the
  new `getSidebarHeaderClasses` export and `SidebarLinkLevel` type.

### Downstream unblock

Once published, `docs-phcdevworks-com` needs to bump its
`@phcdevworks/spectre-ui-astro` dependency range and update
`DocsLayout.astro` to use the new header/indent classes for its sidebar nav
groups (Tokens, UI, UI Astro, Components, Base, Guides, Getting Started).

---

## Phase 10 — Form-Field Component Parity Gap: Delivered, prepared for npm release

Cross-repo audit (`spectre-ui-astro` vs. `spectre-components`) found this
adapter had no `SpCheckbox`, `SpFieldset`, `SpLabel`, `SpRadio`, `SpSelect`,
or `SpTextarea`, even though `SpInput` and `SpButton` exist and
`spectre-components` already ships Lit equivalents for all six. The gate
(`@phcdevworks/spectre-tokens` Phase 7 and `@phcdevworks/spectre-ui` Phase 4e
publishing the backing recipes) cleared with `@phcdevworks/spectre-ui@2.6.0`
(`getCheckboxClasses`, `getRadioClasses`, `getSelectClasses`,
`getTextareaClasses`, `getFieldsetClasses`/`getFieldsetLegendClasses`,
`getLabelClasses`). Run `npm run check` before release handoff.

### Components

- [x] `SpCheckbox`
  - `src/components/SpCheckbox.astro` calling `getCheckboxClasses`, recipe
    re-export in `src/recipes/index.ts`, export in `src/index.ts`, entrypoint
    in `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-checkbox.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.

- [x] `SpRadio`
  - Same delivery pattern as `SpCheckbox`, calling `getRadioClasses`,
    `tests/sp-radio.test.ts`.

- [x] `SpSelect`
  - `src/components/SpSelect.astro` calling `getSelectClasses`, with a
    default slot for `<option>` children. Same delivery pattern as above,
    `tests/sp-select.test.ts`.

- [x] `SpTextarea`
  - `src/components/SpTextarea.astro` calling `getTextareaClasses`. Same
    delivery pattern as above, `tests/sp-textarea.test.ts`.

- [x] `SpFieldset`
  - `src/components/SpFieldset.astro` calling `getFieldsetClasses`, rendering
    an optional `<legend>` via `getFieldsetLegendClasses()` when `legend` is
    non-empty (mirrors the `spectre-components` `sp-fieldset` legend
    pattern). Same delivery pattern as above, `tests/sp-fieldset.test.ts`.

- [x] `SpLabel`
  - `src/components/SpLabel.astro` calling `getLabelClasses`, with `htmlFor`
    mapped to the native `for` attribute (matching the Lit `sp-label`
    `htmlFor` → `for` convention). No accessibility-id association helper —
    association with a control's `id` is the consumer's responsibility, same
    as plain HTML. Same delivery pattern as above, `tests/sp-label.test.ts`.

### Release

- [x] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.6.0` and
  `peerDependencies["@phcdevworks/spectre-tokens"]` to `^3.2.0`, in both
  `package.json` and `astro-adapter.contract.json`.
- [x] Move changes from `CHANGELOG.md [Unreleased]` into the `3.3.0` release
  heading.
- [x] Prepare release handoff for Bradley Potts review, commit, tag, and
  publish.

---

## Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.
