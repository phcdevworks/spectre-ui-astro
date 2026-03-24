# Changelog

All notable changes to this project will be documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning
reflects package releases published to npm.

## [Unreleased]

## [1.1.0] - 2026-03-22

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

### Added

- Promoted all Spectre UI components for Astro to v1.0.0 stable release.
- Added `SpPricingCard`, `SpRating`, and `SpTestimonial` components to the
  marketing example.
- Centralized example app navigation to `BaseLayout` to follow DRY principles.
- Cleaned up example documentation code for better readability and structure.

## [0.1.1] - 2026-01-04

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
