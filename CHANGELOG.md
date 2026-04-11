# Changelog

All notable changes to this project will be documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning
reflects package releases published to npm.

## [Unreleased]

## [2.0.3] - 2026-04-11

Release Title: Accessibility Hardening and Release Workflow Cleanup

### Added

- Added loading support and improved accessibility behavior for SpPricingCard, and added loading, hovered, and focused states to SpCard.
- Added stronger accessibility and prop-forwarding support across SpBadge, SpButton, SpIconBox, SpRating, and SpTestimonial, including tabindex, aria-label, and tighter attribute guarding where appropriate.
- Added package export validation, copied-component validation, and expanded SSR coverage for SpPricingCard, SpRating, and standalone SpInput rendering.

### Changed

- Declared Astro as a peer dependency and aligned the adapter around the Astro 6.1.x toolchain.
- Refined CI and release automation with a Buildkite pipeline, updated GitHub Actions workflow configuration, npm-based example installs, and example lockfile handling changes.
- Updated development tooling and dependencies, including TypeScript 6.0.2, Vitest 4.1.4, Prettier 3.8.2, and current ESLint and Node type packages.
- Removed Node.js runtime validation and devDependency alignment checks while tightening package contract enforcement and adapter guidance.

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
