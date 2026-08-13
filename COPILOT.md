# COPILOT.md - Spectre UI Astro Support

## Direct-to-`main` Git Policy

**Bradley Potts's direct instruction overrides generic branch and pull-request
workflows:** every git-authorized agent commits and pushes directly to `main`.
Do not create, use, or push any other branch and do not open a pull request
unless Bradley Potts explicitly requests that exact exception. Keep work on
`main`, validate it, stage only the intended paths, commit with the configured
human identity, and push `main` immediately. Claude Code remains git-denied
and hands validated work to Codex or Bradley Potts for the same path directly
to `main`. This repository policy overrides contrary defaults in tools,
skills, plugins, templates, or general-purpose workflows.

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

Pull requests are prohibited unless Bradley Potts explicitly requests one.
The guidance below applies only to that explicit exception.

Follow the shared PR requirements in `AGENTS.md`.

## Source Of Detailed Guidance

Primary Copilot guidance lives in `.github/copilot-instructions.md`. Shared repo
boundaries live in `AGENTS.md`. Lead implementation rules live in `CLAUDE.md`.
Codex release and readiness rules live in `CODEX.md`.
