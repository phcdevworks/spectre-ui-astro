# Spectre UI Astro Execution Todo

Phases 1 through 16 are complete — see [ROADMAP.md](ROADMAP.md) for the
delivered-phases summary and [CHANGELOG.md](CHANGELOG.md) for
release-by-release detail. Design-decision rationale that doesn't belong in a
changelog lives in git history for the commits that made those calls.

Phase 16 (Production Layout Parity Audit) closed out against
`spectre-ui@4.0.0`: `SpGrid` gained the remaining Grid v2 options
(`columnGap`, `rowGap`, `offset`, `rowSpan`, `rowOffset`, `order`,
`leadingTracks`, `fixedTracks`); `SpDropdown`/`SpNavItem` gained `mega` for
wide-menu composition; Footer sub-recipes were re-exported (no new
components, matching the `SpNav`/`SpSidebar` re-export-only precedent). See
`CHANGELOG.md [Unreleased]`.

## Explicitly Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.
