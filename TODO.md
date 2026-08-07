# Spectre UI Astro Execution Todo

Phases 1 through 15 are complete — see [ROADMAP.md](ROADMAP.md) for the
delivered-phases summary and [CHANGELOG.md](CHANGELOG.md) for
release-by-release detail. Design-decision rationale that doesn't belong in a
changelog lives in git history for the commits that made those calls.

## Phase 16: Production Layout Parity Audit

Gated on publication of the pending `spectre-ui` Footer, custom-track, and
wide-menu contracts.

- [ ] Compare each published upstream addition against `SpGrid`, `SpFooter`,
      `SpNav`, `SpNavItem`, and `SpDropdown`; add adapter props only where the
      upstream contract exposes a recipe option or typed surface.
- [ ] Re-export new upstream recipe types/helpers and update
      `astro-adapter.contract.json`, tests, examples, README, and changelog when
      adapter work is required.
- [ ] Record a no-change parity result when an upstream addition is a plain CSS
      utility/class requiring no Astro wrapper API; do not invent local CSS.

## Explicitly Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.
