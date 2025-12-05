# Changelog

All notable changes to this project will be documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning reflects package releases published to npm.

## [Unreleased](https://github.com/phcdevworks/spectre-ui-astro/compare/v0.0.2...HEAD)

### Changed

- Refactored SpInput state handling to use correct `InputState` type from `@phcdevworks/spectre-ui` instead of non-existent `SpectreInputState` ([078750d](https://github.com/phcdevworks/spectre-ui-astro/commit/078750dc568077452b5f2f95e5ad66ffba2d2bd8)).
- Simplified SpInput error/valid state handling to align with Spectre UI's `default` | `error` | `success` states ([078750d](https://github.com/phcdevworks/spectre-ui-astro/commit/078750dc568077452b5f2f95e5ad66ffba2d2bd8)).
- Updated SpCard to use correct `CardVariant` type from `@phcdevworks/spectre-ui` ([09b5ecc](https://github.com/phcdevworks/spectre-ui-astro/commit/09b5ecc0cacfcd867dfec862e3041b545ac456f4)).

### Added

- Added basic Astro example project demonstrating component usage ([00ca959](https://github.com/phcdevworks/spectre-ui-astro/commit/00ca95982c272c5247091fb677429e594c0499d5)).
- Implemented comprehensive example with redesigned index page layout and sign-in form ([7ba3f40](https://github.com/phcdevworks/spectre-ui-astro/commit/7ba3f4076850ac5cd51fbbb7a8e29f76c05df768)).

### Fixed

- Removed invalid `aria-disabled` prop that wasn't in the SpInput type definition ([078750d](https://github.com/phcdevworks/spectre-ui-astro/commit/078750dc568077452b5f2f95e5ad66ffba2d2bd8)).
- Fixed disabled state handling in SpInput to properly use `disabledProp` ([078750d](https://github.com/phcdevworks/spectre-ui-astro/commit/078750dc568077452b5f2f95e5ad66ffba2d2bd8)).

## [0.0.2](https://github.com/phcdevworks/spectre-ui-astro/compare/v0.0.1...v0.0.2) - 2025-11-30

### Changed

- Updated dependency from npm package to GitHub source: `@phcdevworks/spectre-ui` now points to `github:phcdevworks/spectre-ui` ([fa030ae](https://github.com/phcdevworks/spectre-ui-astro/commit/fa030aeb554152810bf43e7430f43fed7cd50277)).
- Refactored SpButton component to use improved type safety with discriminated union props based on `as` prop ([9b1b994](https://github.com/phcdevworks/spectre-ui-astro/commit/9b1b994e2155f67fb8ad1741d19a1a7f755cd5c6), [87327b9](https://github.com/phcdevworks/spectre-ui-astro/commit/87327b99273594b50dd967fff149ae826cbefa8a)).
- Improved SpButton class handling with better disabled/loading state management ([87327b9](https://github.com/phcdevworks/spectre-ui-astro/commit/87327b99273594b50dd967fff149ae826cbefa8a)).
- Refactored SpButton to use conditional JSX rendering instead of computed props objects ([44587d7](https://github.com/phcdevworks/spectre-ui-astro/commit/44587d738eff7ae7be808cfb77c33ac4e1e10c88)).
- Updated package.json exports structure and added `typesVersions` for better TypeScript module resolution ([508309e](https://github.com/phcdevworks/spectre-ui-astro/commit/508309e9315a5e41806460e17e2e56a1401d9346)).
- Synchronized button, card, and input variants/states with upstream `@phcdevworks/spectre-ui` enums ([6c8507a](https://github.com/phcdevworks/spectre-ui-astro/commit/6c8507a6539979f21f3a407e5a9b96a8b2ca19a1)).

### Added

- Added Astro component files (SpButton, SpCard, SpInput) with proper type imports from `@phcdevworks/spectre-ui` ([57d3ed1](https://github.com/phcdevworks/spectre-ui-astro/commit/57d3ed117383f8d54d61891a96add47f4ba46d0e)).
- Enhanced type definitions with improved imports and re-exports ([57d3ed1](https://github.com/phcdevworks/spectre-ui-astro/commit/57d3ed117383f8d54d61891a96add47f4ba46d0e)).

## [0.0.1](https://github.com/phcdevworks/spectre-ui-astro/tree/v0.0.1) - 2025-11-28

### Added

- Initial Spectre UI Astro integration package with three core components: SpButton, SpCard, and SpInput ([f391981](https://github.com/phcdevworks/spectre-ui-astro/commit/f391981732a9254a4f423d3ff06b5bd487883030)).
- TypeScript type definitions for Button, Card, and Input components with comprehensive prop interfaces ([f78693a](https://github.com/phcdevworks/spectre-ui-astro/commit/f78693a8c2a15ae5c8d874cbf1afbcb9057c53e3)).
- Build configuration with tsup for bundling and type generation ([a503f46](https://github.com/phcdevworks/spectre-ui-astro/commit/a503f46d761343570339789155ba77b2d1050741)).
- Package configuration with proper exports, dependencies, and npm metadata ([a503f46](https://github.com/phcdevworks/spectre-ui-astro/commit/a503f46d761343570339789155ba77b2d1050741)).
- Repository infrastructure including LICENSE, README, and configuration files ([82248b0](https://github.com/phcdevworks/spectre-ui-astro/commit/82248b0d489e346704d1042ad7bf31b4b7f176ed)).
- Dev container configuration for Node.js and TypeScript development ([da6212f](https://github.com/phcdevworks/spectre-ui-astro/commit/da6212f0cce301587ad175ffd781244cbc5e5ce1)).
- VS Code workspace configuration file ([7add65d](https://github.com/phcdevworks/spectre-ui-astro/commit/7add65d16f03bdc4700b642d746b22d546b7fde8)).

### Features

- **SpButton**: Variants (primary, secondary, ghost, success, danger), sizes (sm, md, lg), render as button/anchor/span, full accessibility support.
- **SpCard**: Variants (base, elevated, flat), semantic HTML element options, slot-based content.
- **SpInput**: States (default, error, success), auto-generated IDs, label/helper/error text support, comprehensive validation attributes.
- Full TypeScript support with exported types for all component props.
- SSR-safe, framework-agnostic pure Astro components.
- Integration with `@phcdevworks/spectre-ui` for all styling (no style duplication).

  - Full HTML5 input types
  - Comprehensive validation attributes

### Design Principles

- No style reimplementation - all styling from `@phcdevworks/spectre-ui`
- Thin wrapper components around Spectre CSS classes
- Framework-agnostic (pure Astro)
- Fully typed with TypeScript
- SSR-compatible

[0.0.2]: https://github.com/phcdevworks/spectre-ui-astro/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/phcdevworks/spectre-ui-astro/releases/tag/v0.0.1
