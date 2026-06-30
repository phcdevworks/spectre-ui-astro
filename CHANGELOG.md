# Changelog

All notable changes to this project will be documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning
reflects package releases published to npm.

## [Unreleased]

### Changed

- **`SpSelect`/`SpTextarea` full recipe option forwarding**: Both components
  now destructure and forward `size`, `state`, `fullWidth`, `pill`, and
  `loading` to `getSelectClasses`/`getTextareaClasses`, in addition to the
  existing `disabled`/`focused`. Previously only `disabled`/`focused` reached
  the recipe call, silently dropping size/shape options and the new
  invalid/success/loading states shipped in
  `@phcdevworks/spectre-ui@2.7.0`. Both components also gained an explicit
  `aria-invalid` prop (defaulting to `"true"` when `state="invalid"`) and
  `aria-busy` (set when `loading`), matching `SpInput`'s accessibility
  pattern.
- Bumped `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.7.0` and
  `peerDependencies["@phcdevworks/spectre-tokens"]` to `^3.3.1`, closing
  dependency drift against the current published `project-design` versions.
  `astro-adapter.contract.json` and `examples/package.json` updated to match.

## [3.3.0] - 2026-06-28

Release Title: Phase 10 Form-Field Component Parity

Contract change type: additive

### Added

- **Form-field components**: Added `SpCheckbox`, `SpRadio`, `SpSelect`,
  `SpTextarea`, `SpFieldset`, and `SpLabel`, closing the Phase 10 parity gap
  against `spectre-components`. Each wraps its corresponding
  `@phcdevworks/spectre-ui@2.6.0` recipe (`getCheckboxClasses`,
  `getRadioClasses`, `getSelectClasses`, `getTextareaClasses`,
  `getFieldsetClasses`/`getFieldsetLegendClasses`, `getLabelClasses`) with no
  local styling or accessibility-id association logic — association between
  `SpLabel`'s `for` and a control's `id` is the consumer's responsibility,
  same as plain HTML. All six are exported from the root package, declared
  in `astro-adapter.contract.json` as `stable`, and covered by dedicated SSR
  tests plus `tests/rendering.test.ts` coverage.

### Changed

- Bumped `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.6.0` and
  `peerDependencies["@phcdevworks/spectre-tokens"]` to `^3.2.0`, closing
  dependency drift against the current published `project-design` version.

## [3.2.0] - 2026-06-25

Release Title: Phase 9 Sidebar Composition Parity

Contract change type: additive

### Changed

- Bumped `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.5.0`.
- Re-exported `getSidebarHeaderClasses` and the `SidebarLinkLevel` type from
  `@phcdevworks/spectre-ui`, unblocking Phase 9 sidebar header and nested
  link indentation. Consumers compose section headers and indented child
  links directly in `SpSidebar`'s default slot using
  `getSidebarHeaderClasses()` and `getSidebarLinkClasses({ level: "child" })`,
  matching the existing consumer-composed pattern for `getSidebarLinkClasses`.

## [3.1.0] - 2026-06-24

Release Title: Phase 8 App Shell Hardening

Contract change type: additive

### Changed

- Bumped `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.4.0`.
- `SpSidebar` now applies `getSidebarToggleClasses()` to its toggle button
  instead of the hardcoded `sp-sidebar-toggle` string, fixing a z-index bug
  where the backdrop sat above the toggle button once the sidebar was open.
- `SpStack` gained an `align` prop (`"center" | "stretch"`) mapping to the
  upstream `getStackClasses({ align })` option, defaulting to `"center"` to
  match upstream's backward-compatible default.

## [3.0.0] - 2026-06-24

Release Title: Astro 7 Alignment

Contract change type: breaking

### Changed

- Bumped the Astro host-framework peer dependency from `^6.1.3` to `^7.0.0`.
- Aligned local development and the example app with Astro `^7.0.2`.

## [2.10.0] - 2026-06-19

Release Title: Phase 7 App Shell Layout

Contract change type: additive

### Added

- Added `SpSidebar` component. Renders as `<aside>` by default (also `"div"`,
  `"nav"`). Calls `getSidebarClasses`. The first adapter component to own
  interactive state: renders a wrapper with `data-sidebar-open="false"`
  (closed by default, SSR-safe), a hamburger toggle button, and a backdrop
  element (`getSidebarBackdropClasses`) that close the drawer on tap. Build
  sidebar links in the default slot using the re-exported
  `getSidebarLinkClasses` helper.
- Added `SpFooter` component. Renders as `<footer>` by default (also `"div"`,
  `"section"`). Supports `bordered` and `fullWidth`, mapped to
  `getFooterClasses`.
- Added `basis` prop to `SpStack`, mapped to `getStackClasses`. `"sidebar"`
  gives a flex child a fixed sidebar width.
- Added `maxWidth` prop to `SpContainer`, mapped to `getContainerClasses`.
  `"prose"` bounds content to a readable line length.
- Added `SpSidebar` and `SpFooter` to the adapter contract as stable families
  (Phase 7 — App Shell Layout).
- Bumped `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.3.0` and
  `peerDependencies["@phcdevworks/spectre-tokens"]` to `^3.1.0` to cover the
  Stack/Container option additions and Sidebar/Footer recipes.

## [2.9.0] - 2026-06-18

Release Title: Phase 6 Grid Component

Contract change type: additive

### Added

- Added `SpGrid` component. Renders as `<div>` by default (also `"section"`,
  `"ul"`, `"ol"`). Supports `columns` (`1 | 2 | 3 | 4 | 6 | 12`) and `gap`
  (`"sm" | "md" | "lg"`) mapped directly to `getGridClasses`.
- Added `SpGrid` to the adapter contract as a stable family (Phase 6 — Grid
  Component v1).
- Bumped `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.2.0` to cover the
  grid recipe.

## [2.8.0] - 2026-06-17

Release Title: Phase 5 Layout Component Expansion

Contract change type: additive

### Added

- Added `SpContainer` component. Renders as `<div>` by default (also
  `"section"`, `"main"`, `"article"`, `"aside"`). Calls `getContainerClasses`.
- Added `SpStack` component. Renders as `<div>` by default (also `"section"`,
  `"ul"`, `"ol"`, `"nav"`). Supports `direction` (`"vertical"` | `"horizontal"`)
  mapped to `getStackClasses`.
- Added `SpSection` component. Renders as `<section>` by default (also `"div"`,
  `"article"`, `"aside"`, `"main"`). Calls `getSectionClasses`.
- Added `SpContainer`, `SpStack`, and `SpSection` to the adapter contract as
  stable families (Phase 5 — Layout Components).
- Bumped `peerDependencies["@phcdevworks/spectre-tokens"]` to `^3.0.0` and
  `peerDependencies["@phcdevworks/spectre-ui"]` to `^2.1.0` to cover the layout
  recipes.

## [2.7.0] - 2026-06-10

Release Title: Phase 4 Component Expansion

Contract change type: additive

### Added

- Added `SpNav` component. Renders as `<nav>` by default (also `"div"`,
  `"header"`, `"section"`). Supports `bordered`, `sticky`, and `fullWidth`.
- Added `SpToast` component. Renders `role="status"`, `aria-live="polite"`, and
  `aria-atomic="true"` by default. Supports `variant`, `dismissed`, and
  `fullWidth`. A named `icon` slot is wrapped in `getToastIconClasses` styling
  when used.
- Added `SpTooltip` component. Renders `role="tooltip"` by default. Supports
  `placement` and `visible`.
- Added `SpDropdown` component. Renders the dropdown container. Supports
  `fullWidth`.
- Added `SpModal` component. Renders an overlay (`getModalOverlayClasses`)
  wrapping the modal element (`getModalClasses`) with `role="dialog"` and
  `aria-modal="true"`. Supports `open` and `fullWidth`.
- Re-exported `getNavLinksClasses`, `getNavLinkClasses`, `getToastIconClasses`,
  `getDropdownMenuClasses`, `getDropdownItemClasses`, and their option/variant
  types for building nav links, toast icons, and dropdown menus/items in
  component slots.
- Added `SpNav`, `SpToast`, `SpTooltip`, `SpDropdown`, and `SpModal` to the
  adapter contract as stable families (Phase 4).
- Bumped `peerDependencies["@phcdevworks/spectre-tokens"]` to `^2.9.0` and
  `peerDependencies["@phcdevworks/spectre-ui"]` to `^1.9.0`.

## [2.6.0] - 2026-06-07

Release Title: Phase 3 Component Completion and Ecosystem Manifest

### Added

- Added `SpSpinner` component. Renders as `<div role="status">` with a default
  `aria-label` of `"Loading"`. Supports `variant`, `size`, `disabled`, and
  `loading` props. `loading` implies disabled state and sets `aria-busy="true"`.
- Added `SpTag` component with polymorphic `as` prop (`"span"` default, also
  `"div"`, `"li"`, `"a"`, `"button"`). Supports `variant`, `size`,
  `dismissible`, `selected` (with `aria-pressed`), `interactive`, `fullWidth`,
  `disabled`, and `loading`. Follows the same interactive/ARIA guard pattern as
  `SpAlert`.
- Exported `SpinnerVariant` type from the package root and recipes barrel.
- Added `SpSpinner` and `SpTag` to the adapter contract as stable families.
- Added `@phcdevworks/spectre-manifest` as a devDependency.
  `spectre.manifest.json` at the repo root declares this package's ecosystem
  role, layer, exports, and allowed dependency targets. `check:ecosystem`
  validates it in the check pipeline.

### Fixed

- `SpAlert` now supports polymorphic rendering as `<a>` or `<button>` tags,
  automatically infers its interactive state from the tag, and implements proper
  accessibility guarding (role assignment and href suppression).

## [2.5.0] - 2026-06-03

Release Title: Contract Hardening and Accessibility Parity

### Fixed

- `SpBadge`, `SpButton`, `SpCard`, `SpIconBox`, `SpPricingCard`, `SpRating`, and
  `SpTestimonial` now pass through explicit `id` and `aria-describedby`
  attributes, improving deterministic accessible associations for SSR output.
- `SpInput` now uses upstream recipe helpers for its wrapper, label, helper
  text, and error message parts instead of local class strings, keeping the
  adapter thin and aligned with `@phcdevworks/spectre-ui`.
- `SpInput` now treats `state="loading"` as functionally equivalent to
  `loading={true}` and `state="disabled"` as functionally equivalent to
  `disabled={true}`, including disabled styling and ARIA behavior.
- `SpInput` now forwards disabled and loading state into the upstream input
  recipe so rendered classes match the functional input state.
- `SpTestimonial` now forwards `variant` to the upstream testimonial recipe
  without leaking the prop to rendered markup.

### Added

- Added `fullWidth` prop support for `SpIconBox`, forwarding the state to the
  upstream icon box recipe without leaking adapter-only props to rendered
  markup.
- Added `astro-adapter.contract.json` as the machine-readable adapter contract
  for root exports, component entrypoints, peer dependency expectations, stable
  component families, and thin-adapter invariants.
- `tests/upstream-parity.test.ts` — derives upstream component families from
  `@phcdevworks/spectre-ui` recipe exports and cross-references them against
  `astro-adapter.contract.json`. CI fails if upstream adds a recipe family not
  declared in `stable`, `provisional`, or `notYetSupported`, or if a stable
  family has no corresponding `.astro` component.
- `tests/smoke.test.ts` — exercises the built `dist/` artifacts directly:
  verifies `dist/index.js` component and helper exports, upstream pass-through
  identity, component entrypoint files in `dist/components/`, and
  `dist/index.d.ts` declarations.
- `scripts/validate-readme-contract.ts` — fails the build if any
  contract-declared component is missing a `### SpName` section in `README.md`,
  or if the CSS import guidance, peer dependency reference, recipe helpers
  section, or component family stability table entries drift from the manifest.
- `scripts/propose-version.ts` — proposes a release version from changelog
  classifications and dependency/package state.
- `astro-adapter.contract.json` `componentFamilies.notYetSupported` populated
  with `alert`, `avatar`, `spinner`, and `tag` — the four upstream recipe
  families available in `@phcdevworks/spectre-ui` ^1.7.0 that are not yet bound
  by this adapter.
- `examples/README.md` updated to document example app purpose, boundary rules
  (not a contract authority, stable components only, no local styling), and
  setup instructions.
- README component family stability table now lists the four `notYetSupported`
  families so consumers can see what is planned.
- `validate-package-contract.ts` now validates root exports and recipe
  helpers/types against `astro-adapter.contract.json`, so CI fails if
  `src/index.ts` or `src/recipes/index.ts` drift from the declared public
  surface.
- `validate-package-contract.ts` now validates component entrypoints
  bidirectionally against `astro-adapter.contract.json`, so CI fails if
  `package.json` exports and the contract manifest diverge.
- `validate-package-contract.ts` now enforces thin-adapter invariants by
  rejecting `<style>` blocks and CSS custom property definitions in
  `src/components/*.astro`, protecting against local CSS ownership drift.
- Added regression coverage for the new `id`, `aria-describedby`, `fullWidth`,
  testimonial variant, and `SpInput` state/recipe behavior.

### Changed

- Updated the peer dependency contract for `@phcdevworks/spectre-tokens` to
  `^2.6.0`, while refreshing local development against
  `@phcdevworks/spectre-tokens` `^2.7.0`, `@phcdevworks/spectre-ui` `^1.7.0`,
  Astro `6.4.3`, Vitest `4.1.8`, TypeScript-ESLint `8.60.1`, and npm `11.16.0`.
- README now documents component family stability directly from the adapter
  contract, including stable Astro families and upstream families that are not
  yet supported.
- `CONTRIBUTING.md` now includes a contract coverage map tying public adapter
  surfaces to their enforcing tests or validation scripts.
- `examples/README.md`, `ROADMAP.md`, and `TODO.md` were refreshed around the
  adapter contract boundary, example-app authority, and remaining follow-up
  priorities.
- `src/recipes/index.ts` now re-exports the upstream input sub-part recipe
  helpers used by `SpInput`.

## [2.4.0] - 2026-05-22

Release Title: Interactive State Inference and Adapter Readiness

### Fixed

- `SpBadge`, `SpIconBox`, `SpPricingCard`, `SpRating`, and `SpTestimonial` now
  automatically infer interactive state when rendered as `a` or `button` tags,
  so callers no longer need to pass `interactive` explicitly for native
  interactive elements.
- Tightened `disabled` attribute handling in `SpButton` so it aligns with the
  shared polymorphic interactive attribute contract.

### Added

- Added regression tests for interactive state inference across all affected
  components (`SpBadge`, `SpIconBox`, `SpPricingCard`, `SpRating`,
  `SpTestimonial`).

### Changed

- Synchronized components and re-exports with the latest upstream contracts from
  `@phcdevworks/spectre-ui` v1.5.0 and `@phcdevworks/spectre-tokens` v2.5.0.
- Clarified AI guidance and README layer language so this package is documented
  as the Astro adapter layer downstream of `@phcdevworks/spectre-ui`, while
  `@phcdevworks/spectre-components` owns framework-agnostic Lit web components.
- Added root Copilot support guidance to match the Spectre AI instruction
  structure used by `@phcdevworks/spectre-tokens`.
- Corrected README automation wording so Jules' bounded maintenance commit
  authority matches `JULES.md`.
- Refreshed README project badges and quick links so npm, CI, license, Node,
  code of conduct, changelog, roadmap, and security references are current.
- Updated shared agent guidance to reference the root Copilot support file.
- Updated devDependencies and `packageManager` field to reflect the current
  local development environment.

## [2.3.0] - 2026-05-05

Release Title: Slot Hygiene and Upstream Recipe Alignment

### Added

- Added `fullHeight` prop support for `SpPricingCard` and `SpTestimonial`,
  forwarding the state to the upstream recipe contract without leaking
  adapter-only props to rendered markup.
- Added `pill` prop support for `SpIconBox`, keeping the Astro wrapper aligned
  with upstream icon box recipe options.
- Added regression coverage for `SpButton`, `SpIconBox`, `SpPricingCard`, and
  `SpTestimonial` covering interactive tabindex behavior, recipe prop
  forwarding, slot wrapper rendering, and DOM prop leakage prevention.

### Changed

- Improved `SpPricingCard` SSR output by rendering badge, price, and description
  wrapper elements only when their corresponding slots are provided.
- Improved `SpTestimonial` SSR output by conditionally rendering quote, author,
  author info, author name, and author title wrappers based on populated slots.
- Forwarded interactive state into shared attribute resolution for `SpButton`
  and `SpIconBox` so non-native interactive elements receive consistent tabindex
  guarding.
- Consolidated recipe re-exports through a single upstream
  `@phcdevworks/spectre-ui` export block while preserving the public adapter
  recipe surface.
- Updated the package to `2.3.0`, aligned the published peer and local
  development contract around `@phcdevworks/spectre-ui` `^1.5.0`, refreshed
  local development against Astro `6.2.2`, ESLint `10.3.0`, and
  TypeScript-ESLint `8.59.1`, and updated the example app dependencies and Node
  engine range to match the adapter contract.

## [2.2.0] - 2026-04-25

Release Title: Interactive State Parity and Shared Attribute Guarding

### Added

- Added `active` prop support for `SpInput`, forwarding the state to the
  upstream input recipe without leaking adapter-only props to rendered markup.
- Added interactive, hovered, focused, and active state forwarding for
  `SpPricingCard`, `SpRating`, and `SpTestimonial`, keeping Astro output aligned
  with the upstream `@phcdevworks/spectre-ui` recipe contract.
- Added shared interactive attribute resolution for component wrappers so
  disabled links, non-native interactive elements, default button types, and
  fallback tabindex behavior are handled consistently.

### Changed

- Improved `SpBadge`, `SpButton`, `SpCard`, `SpIconBox`, `SpPricingCard`,
  `SpRating`, and `SpTestimonial` accessibility behavior by centralizing `href`,
  `type`, and `tabindex` guarding while preserving native button and anchor
  semantics.
- Improved `SpPricingCard`, `SpRating`, and `SpTestimonial` SSR output by
  applying `role="button"` only when interactive non-native elements need it.
- Consolidated component regression tests into stable per-component test files
  covering recipe state forwarding, attribute leakage prevention, disabled
  behavior, role handling, and tabindex guarding.
- Updated the package to `2.2.0`, aligned the published peer contract around
  `@phcdevworks/spectre-ui` `^1.3.0`, refreshed local development against
  `@phcdevworks/spectre-ui` `^1.4.0`, Astro `6.1.9`, Vitest `4.1.5`, and
  TypeScript-ESLint `8.59.0`, and kept example dependencies honest for the
  upstream UI package and Astro host framework.
- Included `.ts` shared component helper files in the component copy step so
  published Astro component entrypoints can resolve their adapter helper
  modules.
- Declared an explicit empty `dependencies` object to keep runtime dependency
  classification intentional and adapter boundaries visible.

## [2.1.0] - 2026-04-18

Release Title: Accessibility Parity and Upstream Alignment

### Added

- Added `size` prop support for `SpRating`.
- Added regression coverage for `SpBadge`, `SpButton`, `SpCard`, `SpInput`,
  `SpPricingCard`, and `SpTestimonial` accessibility and prop-forwarding
  behavior.
- Added `ROADMAP.md` and `TODO.md` to track adapter contract parity, packaging
  validation, and follow-on Astro adapter priorities.

### Changed

- Improved prop forwarding and attribute guarding for `SpBadge`, `SpButton`, and
  `SpInput` so state props such as `active`, `focused`, and `hovered` reach
  upstream recipes without leaking invalid DOM attributes.
- Improved disabled and loading accessibility behavior for `SpCard`,
  `SpPricingCard`, and `SpTestimonial`, aligning non-native interactive tabindex
  handling with library standards while preserving native button behavior.
- Updated the `@phcdevworks/spectre-ui` peer dependency to `^1.2.0` and
  refreshed local development tooling and lockfile coverage around
  `@phcdevworks/spectre-ui` `^1.3.0`, Astro `6.1.7`, TypeScript `6.0.3`,
  Prettier `3.8.3`, TypeScript-ESLint `8.58.2`, and ESLint `10.2.1`.

## [2.0.3] - 2026-04-11

Release Title: Accessibility Hardening and Release Workflow Cleanup

### Added

- Added loading support and improved accessibility behavior for SpPricingCard,
  and added loading, hovered, and focused states to SpCard.
- Added stronger accessibility and prop-forwarding support across SpBadge,
  SpButton, SpIconBox, SpRating, and SpTestimonial, including tabindex,
  aria-label, and tighter attribute guarding where appropriate.
- Added package export validation, copied-component validation, and expanded SSR
  coverage for SpPricingCard, SpRating, and standalone SpInput rendering.

### Changed

- Declared Astro as a peer dependency and aligned the adapter around the Astro
  6.1.x toolchain.
- Refined CI and release automation with a Buildkite pipeline, updated GitHub
  Actions workflow configuration, npm-based example installs, and example
  lockfile handling changes.
- Updated development tooling and dependencies, including TypeScript 6.0.2,
  Vitest 4.1.4, Prettier 3.8.2, and current ESLint and Node type packages.
- Removed Node.js runtime validation and devDependency alignment checks while
  tightening package contract enforcement and adapter guidance.

## [2.0.2] - 2026-04-05

Release Title: Loading Support and Adapter Guardrails

### Added

- Added `loading` prop support across `SpBadge`, `SpIconBox`, `SpRating`,
  `SpTestimonial`, and `SpInput`.
- Added `aria-label` and `tabindex` support to `SpCard` for improved
  accessibility control.
- Added Vitest coverage, canonical package/repository name checks, and a GitHub
  Actions CI workflow.

### Changed

- Declared `@phcdevworks/spectre-ui` as a peer dependency and removed the local
  CSS export to keep the adapter strictly downstream of upstream styling.
- Required an explicit `id` for `SpInput` SSR usage to avoid unstable generated
  identifiers.
- Clarified Astro adapter guardrails and package rules in repo guidance and test
  coverage.
- Updated the expected `@phcdevworks/spectre-ui` peer version to `^1.1.2` for
  the `2.0.2` release line.

## [2.0.1] - 2026-03-29

Release Title: Polymorphism Expansion Across Astro Components

### Added

- Expanded polymorphic rendering and attribute guarding support for `SpButton`,
  `SpPricingCard`, `SpInput`, `SpTestimonial`, `SpRating`, and `SpBadge`.
- Added explicit `disabled` and `aria-disabled` handling for `SpInput`.

### Changed

- Simplified and refreshed the examples scaffold, README, AGENTS guidance, and
  general repository documentation.
- Updated editor, formatting, and repository tooling configuration for the Astro
  adapter workspace.
- Updated `@phcdevworks/spectre-ui` to `^1.1.1`.

## [2.0.0] - 2026-03-22

Release Title: Astro 6 and Node 22 Alignment

### Changed

- Bumped the package to `2.0.0` and aligned the adapter with Astro `^6.0.8`.
- Raised the Node.js engine requirement to `>=22.0.0`.
- Updated `@phcdevworks/spectre-ui` to `^1.1.0`.
- Refreshed the lockfile and supporting toolchain dependencies for the v2
  release baseline, including Astro and Shiki-related packages.

## [1.1.0] - 2026-03-22

Release Title: Component Parity and Polymorphic Refinement

### Added

- **Component States**: Implemented `disabled` props across `SpCard`, `SpBadge`,
  `SpIconBox`, and `SpPricingCard` components, syncing with Spectre UI v1.1.0
  logic.
- **Pill Variant**: Added `pill` prop support for `SpInput` component.
- **Polymorphic Refinement**: Improved `disabled` and `aria-disabled` attribute
  handling for polymorphic components.

### Changed

- **Dependencies**: Updated `@phcdevworks/spectre-ui` to `^1.1.0`.
- **Maintenance**: Synchronized project configurations and linting rules with
  the Spectre suite.

## [1.0.0] - 2026-03-17

Release Title: Stable Astro Release

### Added

- Promoted all Spectre UI components for Astro to v1.0.0 stable release.
- Added `SpPricingCard`, `SpRating`, and `SpTestimonial` components to the
  marketing example.
- Centralized example app navigation to `BaseLayout` to follow DRY principles.
- Cleaned up example documentation code for better readability and structure.

## [0.1.1] - 2026-01-04

Release Title: Badge Expansion and Example Coverage

### Added

- Added server configuration to Astro config for Docker container compatibility.
- Added validation for SpBadge variant and size props.
- Added SpBadge and SpIconBox components.
- Added example pages for buttons, forms, marketing, and primitives.

### Changed

- Updated `@phcdevworks/spectre-ui` to v0.4.0.
- Updated `@phcdevworks/spectre-ui` to v0.2.2.
- Updated `@phcdevworks/spectre-ui` to v0.2.1.
- Updated `@emnapi/runtime` dependency.
- Refactored components to use spectre-ui package exports.
- Refactored class handling in SpBadge and SpIconBox.
- Refactored to use Spectre UI CSS from spectreStyles.
- Updated BaseLayout to use improved Spectre UI CSS import.
- Updated Astro example build and dependencies.
- Updated Astro config and types references.
- Revised documentation and guidelines for clarity.

## [0.1.0] - 2025-12-16

Release Title: Export Cleanup and Accessibility Improvements

### Added

- Added CODE_OF_CONDUCT and SECURITY policies.
- Added `iconOnly` prop to SpButton for icon-only button support.
- Added Astro example build output and types.
- Exported all types from types module.

### Changed

- Refactored exports for improved clarity and structure.
- Refactored CSS entrypoint export and naming with new `SPECTRE_UI_CSS`
  constant.
- Refactored recipes and types structure for better organization.
- Refactored Spectre CSS export to new styles module.
- Renamed exported types with `Sp` prefix for consistency.
- Updated BaseLayout to use `SPECTRE_UI_CSS` import.
- Updated Astro module declaration in env.d.ts.
- Updated SpButton to improve link handling and disabled anchor behavior.
- Updated card padding default.

### Improved

- Improved SpInput accessibility.
- Improved accessibility in components.

## [0.0.3] - 2025-12-08

Release Title: Example App Refresh

### Added

- Enhanced example app with homepage design showcasing components, features
  grid, and contact form.
- Added comprehensive component demos in example app.
- Integrated Astro v5 type declarations.

### Changed

- Updated README with improved structure, component documentation, and Spectre
  Suite alignment.
- Simplified CSS imports to use single `index.css` bundle from Spectre UI.
- Refactored CHANGELOG formatting and link references.
- Refactored components to simplify props and improve type clarity.
- Updated SpButton, SpCard, and SpInput to use cleaner prop handling and Astro
  best practices.
- Simplified CSS imports to use direct Spectre UI paths instead of
  SPECTRE_CSS_PATHS.
- Restructured example app: moved from `examples/basic/` to `examples/` root and
  removed unused documentation files.
- Updated type definitions to extend HTML element interfaces more cleanly.
- Refactored component files to remove unnecessary wrappers and improve
  readability.
- Updated `@phcdevworks/spectre-ui` to v0.0.5.
- Updated `@phcdevworks/spectre-ui` to v0.0.3.
- Updated Astro to v5.16.4.
- Updated peer dependencies to support Astro ^4.0.0 || ^5.0.0.

### Fixed

- Fixed CSS imports in BaseLayout to use Astro frontmatter imports instead of
  link tags.
- Removed custom body background and text colors for better theme compatibility.

## [0.0.2] - 2025-11-30

Release Title: Typed Astro Foundations

### Added

- Added Astro component files (SpButton, SpCard, SpInput) with proper type
  imports from `@phcdevworks/spectre-ui`.
- Enhanced type definitions with improved imports and re-exports.

### Changed

- Updated dependency from npm package to GitHub source:
  `@phcdevworks/spectre-ui` now points to `github:phcdevworks/spectre-ui`.
- Refactored SpButton component to use improved type safety with discriminated
  union props based on `as` prop.
- Improved SpButton class handling with better disabled/loading state
  management.
- Refactored SpButton to use conditional JSX rendering instead of computed props
  objects.
- Updated package.json exports structure and added `typesVersions` for better
  TypeScript module resolution.
- Synchronized button, card, and input variants/states with upstream
  `@phcdevworks/spectre-ui` enums.

## [0.0.1] - 2025-11-28

Release Title: Initial Astro Adapter Release

### Added

- Initial Spectre UI Astro integration package with three core components:
  SpButton, SpCard, and SpInput.
- TypeScript type definitions for Button, Card, and Input components with
  comprehensive prop interfaces.
- Build configuration with tsup for bundling and type generation.
- Package configuration with proper exports, dependencies, and npm metadata.
- Repository infrastructure including LICENSE, README, and configuration files.
- Dev container configuration for Node.js and TypeScript development.
- VS Code workspace configuration file.
- Component features: SpButton (variants, sizes, polymorphic rendering), SpCard
  (variants, semantic HTML), SpInput (states, auto-IDs, validation).
- Full TypeScript support with exported types for all component props.
- SSR-safe, framework-agnostic pure Astro components.
- Integration with `@phcdevworks/spectre-ui` for all styling (no style
  duplication).
