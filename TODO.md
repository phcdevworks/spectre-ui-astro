# Spectre UI Astro Execution Todo

Phases 1 through 12 are complete — see [ROADMAP.md](ROADMAP.md) for the
delivered-phases summary and [CHANGELOG.md](CHANGELOG.md) for
release-by-release detail. Design-decision rationale that doesn't belong in a
changelog lives in git history for the commits that made those calls.

No active work is currently open. `SpText` (Phase 4g parity, requested by
`spectre-base`) was implemented and merged into `[Unreleased]` in
`CHANGELOG.md`, closing the last `notYetSupported` gap in
`astro-adapter.contract.json`. Cutting the release (version bump, changelog
versioning, tag, GitHub Release) is Codex's job per `CODEX.md`.

## Explicitly Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.
