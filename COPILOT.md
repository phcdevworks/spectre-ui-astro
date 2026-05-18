# COPILOT.md - Spectre UI Astro Support

## Role Summary

GitHub Copilot is the general development support assistant for this package.
Copilot helps with targeted edits, refactors, TypeScript/API hints, test
suggestions, GitHub workflow support, and documentation synchronization.

Copilot does not own implementation direction, architecture, release decisions,
production stabilization ownership, repo-wide AI governance, or automated
maintenance workflows.

## Authority Boundaries

- Claude Code remains lead implementation owner (`CLAUDE.md`).
- Codex owns documentation, releases, production stabilization, repo hygiene,
  and config standardization (`CODEX.md`).
- Jules owns bounded automated maintenance (`JULES.md`).

## Practical Guardrails

- Keep this package as the Astro adapter for the upstream
  `@phcdevworks/spectre-ui` contract.
- Do not add local token definitions, CSS ownership, Tailwind helpers, or
  recipe reimplementations.
- Preserve SSR-safe output, deterministic accessibility wiring, examples,
  tests, package exports, and dependency classification.
- Keep framework-agnostic Lit component behavior in
  `@phcdevworks/spectre-components`.
- Use `npm run ci:verify` as the full validation gate for non-trivial changes.

## Source Of Detailed Guidance

Primary Copilot guidance lives in `.github/copilot-instructions.md`.
Shared repo boundaries live in `AGENTS.md`.
