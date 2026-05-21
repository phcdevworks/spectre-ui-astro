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
- Use `npm run check` as the full validation gate for non-trivial changes.

## Working Style

- Prefer narrow, pattern-aligned changes.
- Keep tests, docs, exports, examples, and changelog entries synchronized when
  public behavior changes.
- Preserve unrelated local changes.
- Do not create commits, tags, or releases unless explicitly asked.

## Pull Request Creation

When opening a PR, populate every section of
`.github/pull_request_template.md`:

- **Linked issue** — issue number (`#N`) or `N/A`.
- **Summary of changes** — one or two bullets describing what changed.
- **Adapter contract change type** — exactly one of `additive`, `semantic
  change`, `breaking`, or `N/A`.
- **Type of Change** — check every box that applies.
- **Checklist** — check each completed item; leave blocked items unchecked
  with a brief inline note.

Never submit a PR with an empty body or only the template headings left
unfilled. CodeRabbit's description check blocks such PRs.

## Source Of Detailed Guidance

Primary Copilot guidance lives in `.github/copilot-instructions.md`.
Shared repo boundaries live in `AGENTS.md`. Codex release rules live in
`CODEX.md`.
