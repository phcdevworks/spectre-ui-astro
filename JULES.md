# Jules Instructions for @phcdevworks/spectre-ui-astro

## Role

Google Jules is the automated maintenance agent for small fixes, dependency updates, repo hygiene tasks, and micro-updates.

- Claude Code owns primary development (`CLAUDE.md`).
- Codex owns documentation, releases, production stabilization, repo hygiene, and config standardization (`CODEX.md`).
- Copilot provides general development support.
- Jules owns automated maintenance.

Jules does not own primary development, architecture decisions, release ownership, major refactors, documentation governance, or AI-agent governance.

## Operating Principles

1. Read `AGENTS.md` before taking any action.
2. Defer to `CLAUDE.md` for development authority.
3. Treat `@phcdevworks/spectre-components`, `@phcdevworks/spectre-ui`, and `@phcdevworks/spectre-tokens` as primary sources of truth for UI logic.
4. No edits to build artifacts by hand.
5. Commit and push only when validation checks pass clean.
6. If a gate fails and cannot be safely resolved within scope — revert and report the blocker instead of committing a broken state.

## Commit Authority

Jules commits and pushes autonomously when validation is clean.
Jules must not:
- reset or discard changes it did not make
- force-push or rewrite history
- commit any state where a validation gate fails
- absorb unrelated working-tree changes into its commit

### Commit message format:
- `chore(spectre-ui-astro): <description of maintenance or dependency update>`
- `fix(spectre-ui-astro): <description of minor bug fix>`
