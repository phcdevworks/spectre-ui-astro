# Changelog

All notable changes to this project will be documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the versioning reflects package releases published to npm.

## [Unreleased]

## [0.0.3] - 2025-12-08

### Added

- Enhanced example app with homepage design showcasing components, features grid, and contact form ([6ff4b80], [fdd8c9c]).
- Added comprehensive component demos in example app ([7c0bb22]).
- Integrated Astro v5 type declarations ([1aa5bd6], [35d3d11]).

### Changed

- Updated README with improved structure, component documentation, and Spectre Suite alignment ([1445f26]).
- Simplified CSS imports to use single `index.css` bundle from Spectre UI ([8afff37]).
- Refactored CHANGELOG formatting and link references ([8a61ab3]).
- Refactored components to simplify props and improve type clarity ([2bcdad4], [f4385fa]).
- Updated SpButton, SpCard, and SpInput to use cleaner prop handling and Astro best practices ([b3801e7], [bd5a03b], [8deed6a]).
- Simplified CSS imports to use direct Spectre UI paths instead of SPECTRE_CSS_PATHS ([fb0b94c], [ff03805]).
- Restructured example app: moved from `examples/basic/` to `examples/` root and removed unused documentation files ([9f906b3]).
- Updated type definitions to extend HTML element interfaces more cleanly ([3c0a1f2], [30243fb]).
- Refactored component files to remove unnecessary wrappers and improve readability ([08c6454], [637e481], [861eaef]).
- Updated `@phcdevworks/spectre-ui` to v0.0.5 ([f4385fa]).
- Updated `@phcdevworks/spectre-ui` to v0.0.3 ([5831b52]).
- Updated Astro to v5.16.4 ([7a8cc2d]).
- Updated peer dependencies to support Astro ^4.0.0 || ^5.0.0 ([47a3cd3]).

### Fixed

- Fixed CSS imports in BaseLayout to use Astro frontmatter imports instead of link tags ([fb0b94c]).
- Removed custom body background and text colors for better theme compatibility ([de09085]).

## [0.0.2] - 2025-11-30

### Added

- Added Astro component files (SpButton, SpCard, SpInput) with proper type imports from `@phcdevworks/spectre-ui` ([57d3ed1]).
- Enhanced type definitions with improved imports and re-exports ([57d3ed1]).

### Changed

- Updated dependency from npm package to GitHub source: `@phcdevworks/spectre-ui` now points to `github:phcdevworks/spectre-ui` ([fa030ae]).
- Refactored SpButton component to use improved type safety with discriminated union props based on `as` prop ([9b1b994], [87327b9]).
- Improved SpButton class handling with better disabled/loading state management ([87327b9]).
- Refactored SpButton to use conditional JSX rendering instead of computed props objects ([44587d7]).
- Updated package.json exports structure and added `typesVersions` for better TypeScript module resolution ([508309e]).
- Synchronized button, card, and input variants/states with upstream `@phcdevworks/spectre-ui` enums ([6c8507a]).

## [0.0.1] - 2025-11-28

### Added

- Initial Spectre UI Astro integration package with three core components: SpButton, SpCard, and SpInput ([f391981]).
- TypeScript type definitions for Button, Card, and Input components with comprehensive prop interfaces ([f78693a]).
- Build configuration with tsup for bundling and type generation ([a503f46]).
- Package configuration with proper exports, dependencies, and npm metadata ([a503f46]).
- Repository infrastructure including LICENSE, README, and configuration files ([82248b0]).
- Dev container configuration for Node.js and TypeScript development ([da6212f]).
- VS Code workspace configuration file ([7add65d]).
- Component features: SpButton (variants, sizes, polymorphic rendering), SpCard (variants, semantic HTML), SpInput (states, auto-IDs, validation).
- Full TypeScript support with exported types for all component props.
- SSR-safe, framework-agnostic pure Astro components.
- Integration with `@phcdevworks/spectre-ui` for all styling (no style duplication).

[unreleased]: https://github.com/phcdevworks/spectre-ui-astro/compare/v0.0.2...HEAD
[0.0.2]: https://github.com/phcdevworks/spectre-ui-astro/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/phcdevworks/spectre-ui-astro/tree/v0.0.1
[1445f26]: https://github.com/phcdevworks/spectre-ui-astro/commit/1445f26
[7a8cc2d]: https://github.com/phcdevworks/spectre-ui-astro/commit/7a8cc2d
[2bcdad4]: https://github.com/phcdevworks/spectre-ui-astro/commit/2bcdad4
[f4385fa]: https://github.com/phcdevworks/spectre-ui-astro/commit/f4385fa
[6ff4b80]: https://github.com/phcdevworks/spectre-ui-astro/commit/6ff4b80
[b3801e7]: https://github.com/phcdevworks/spectre-ui-astro/commit/b3801e7
[bd5a03b]: https://github.com/phcdevworks/spectre-ui-astro/commit/bd5a03b
[8deed6a]: https://github.com/phcdevworks/spectre-ui-astro/commit/8deed6a
[fb0b94c]: https://github.com/phcdevworks/spectre-ui-astro/commit/fb0b94c
[ff03805]: https://github.com/phcdevworks/spectre-ui-astro/commit/ff03805
[de09085]: https://github.com/phcdevworks/spectre-ui-astro/commit/de09085
[fdd8c9c]: https://github.com/phcdevworks/spectre-ui-astro/commit/fdd8c9c
[9f906b3]: https://github.com/phcdevworks/spectre-ui-astro/commit/9f906b3
[5831b52]: https://github.com/phcdevworks/spectre-ui-astro/commit/5831b52
[47a3cd3]: https://github.com/phcdevworks/spectre-ui-astro/commit/47a3cd3
[7c0bb22]: https://github.com/phcdevworks/spectre-ui-astro/commit/7c0bb22
[3c0a1f2]: https://github.com/phcdevworks/spectre-ui-astro/commit/3c0a1f2
[30243fb]: https://github.com/phcdevworks/spectre-ui-astro/commit/30243fb
[08c6454]: https://github.com/phcdevworks/spectre-ui-astro/commit/08c6454
[637e481]: https://github.com/phcdevworks/spectre-ui-astro/commit/637e481
[861eaef]: https://github.com/phcdevworks/spectre-ui-astro/commit/861eaef
[1aa5bd6]: https://github.com/phcdevworks/spectre-ui-astro/commit/1aa5bd6
[35d3d11]: https://github.com/phcdevworks/spectre-ui-astro/commit/35d3d11
[fa030ae]: https://github.com/phcdevworks/spectre-ui-astro/commit/fa030ae
[9b1b994]: https://github.com/phcdevworks/spectre-ui-astro/commit/9b1b994
[87327b9]: https://github.com/phcdevworks/spectre-ui-astro/commit/87327b9
[44587d7]: https://github.com/phcdevworks/spectre-ui-astro/commit/44587d7
[508309e]: https://github.com/phcdevworks/spectre-ui-astro/commit/508309e
[6c8507a]: https://github.com/phcdevworks/spectre-ui-astro/commit/6c8507a
[57d3ed1]: https://github.com/phcdevworks/spectre-ui-astro/commit/57d3ed1
[f391981]: https://github.com/phcdevworks/spectre-ui-astro/commit/f391981
[f78693a]: https://github.com/phcdevworks/spectre-ui-astro/commit/f78693a
[a503f46]: https://github.com/phcdevworks/spectre-ui-astro/commit/a503f46
[82248b0]: https://github.com/phcdevworks/spectre-ui-astro/commit/82248b0
[da6212f]: https://github.com/phcdevworks/spectre-ui-astro/commit/da6212f
[7add65d]: https://github.com/phcdevworks/spectre-ui-astro/commit/7add65d
