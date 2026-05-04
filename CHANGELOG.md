# Changelog

All notable changes to this project will be documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning
reflects package releases published to npm.

## [Unreleased]

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

- Improved `SpPricingCard` SSR output by rendering badge, price, and
  description wrapper elements only when their corresponding slots are provided.
- Improved `SpTestimonial` SSR output by conditionally rendering quote, author,
  author info, author name, and author title wrappers based on populated slots.
- Forwarded interactive state into shared attribute resolution for `SpButton`
  and `SpIconBox` so non-native interactive elements receive consistent
  tabindex guarding.
- Consolidated recipe re-exports through a single upstream
  `@phcdevworks/spectre-ui` export block while preserving the public adapter
  recipe surface.
- Updated the package to `2.3.0`, aligned the published peer and local
  development contract around `@phcdevworks/spectre-ui` `^1.5.0`, refreshed
  local development against Astro `6.2.2`, ESLint `10.3.0`, and
  TypeScript-ESLint `8.59.1`, and updated the example app dependencies and
  Node engine range to match the adapter contract.

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
