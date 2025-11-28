# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2025-11-28

### Added

- Initial release of `@phcdevworks/spectre-ui-astro`
- Core components:
  - `SpButton` - Flexible button component with multiple variants and sizes
  - `SpCard` - Simple card wrapper component
  - `SpInput` - Comprehensive input component with label, error, and helper text
- Full TypeScript support with exported types
- Comprehensive documentation and examples
- Integration with `@phcdevworks/spectre-ui` for all styling
- SSR-safe, framework-agnostic Astro components

### Features

- **SpButton**:

  - Variants: primary, secondary, ghost, success, danger
  - Sizes: sm, md, lg
  - Render as: button, anchor, span
  - States: default, disabled, loading
  - Full accessibility support

- **SpCard**:

  - Variants: default, elevated, outlined
  - Semantic HTML element options
  - Flexible slot-based content

- **SpInput**:
  - States: default, error, success
  - Auto-generated IDs
  - Label, helper text, and error message support
  - Full HTML5 input types
  - Comprehensive validation attributes

### Design Principles

- No style reimplementation - all styling from `@phcdevworks/spectre-ui`
- Thin wrapper components around Spectre CSS classes
- Framework-agnostic (pure Astro)
- Fully typed with TypeScript
- SSR-compatible

[0.0.1]: https://github.com/phcdevworks/spectre-ui-astro/releases/tag/v0.0.1
