# Spectre UI Astro Execution Todo

Phases 1 through 17 are complete — see [ROADMAP.md](ROADMAP.md) for the
delivered-phases summary and [CHANGELOG.md](CHANGELOG.md) for
release-by-release detail. Design-decision rationale that doesn't belong in a
changelog lives in git history for the commits that made those calls.

There is no other open implementation phase.

## Card Edge Accents

- [ ] Add card edge-accent adapter support after the corresponding
      `spectre-ui` recipe options publish. Expose and forward the shared accent
      color and `top | right | bottom | left` position options without local
      CSS or duplicated validation, preserve current output when omitted, and
      update adapter contract coverage, documentation, tests, and examples.
      The upstream request was filed on 2026-09-18 in
      [spectre-ui/TODO.md](../spectre-ui/TODO.md#requested-by-downstream).

## Explicitly Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.
