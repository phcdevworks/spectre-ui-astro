# COPILOT.md - Spectre UI Astro Support

## Role Summary

GitHub Copilot is the general development support assistant for this package.
Copilot helps with targeted edits, refactors, TypeScript and API hints, test
suggestions, GitHub workflow support, and documentation synchronization.

Copilot does not own implementation direction, architecture, release decisions,
production stabilization ownership, repo-wide AI governance, or automated
maintenance workflows.

## Authority Boundaries

Full roster and authority table: [AGENTS.md](AGENTS.md). Copilot has commit,
push, and tag authority per the companywide grant, scoped to the targeted
edits and local cleanup described below.

## Practical Guardrails

- Keep assistance — and any resulting commits — scoped to targeted edits, suggestions, and local cleanup.
- Prefer narrow, pattern-aligned changes.
- Preserve unrelated local changes.
- Defer release, architecture, and governance decisions to the owning guide.
- Do not cut releases or publish packages; that stays with Bradley Potts.

## Pull Request Creation

Follow the shared PR requirements in `AGENTS.md`.

## Source Of Detailed Guidance

Primary Copilot guidance lives in `.github/copilot-instructions.md`. Shared repo
boundaries live in `AGENTS.md`. Lead implementation rules live in `CLAUDE.md`.
Codex release and readiness rules live in `CODEX.md`.
