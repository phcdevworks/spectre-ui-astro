# GitHub Copilot Instructions for @phcdevworks/spectre-ui-astro

## Role

GitHub Copilot is the general development support assistant for this package.

- Claude Code owns implementation leadership (`CLAUDE.md`).
- Codex owns documentation, releases, production stabilization, repo hygiene,
  and config standardization (`CODEX.md`).
- Jules owns bounded automated maintenance when configured.
- Copilot supports targeted edits, refactors, tests, TypeScript/API hints, and
  IDE productivity.

Copilot does not own architecture direction, release decisions, or final
handoff authority.

## Package Conventions

- Keep this package downstream of `@phcdevworks/spectre-ui`.
- Keep Astro components thin and framework-native.
- Do not add local token definitions, styling systems, or competing CSS
  ownership here.
- Preserve SSR-safe and deterministic accessibility wiring.
- Keep exports, docs, tests, examples, and metadata aligned when public behavior
  changes.

## Working Style

- Prefer small, contract-safe changes over broad rewrites.
- Follow existing source patterns before introducing new abstractions.
- Preserve unrelated local changes.
- Do not create commits, tags, or releases unless explicitly asked.

## Validation

- Focused checks first: `npm run lint`, `npm run build`, `npm run typecheck`,
  `npm test`.
- Use `npm run ci:verify` for release-scoped or broad contract-impact changes.
- If examples are affected, validate the example app build in `examples/`.

## References

- Shared boundaries: `AGENTS.md`
- Lead implementation rules: `CLAUDE.md`
- Release/readiness rules: `CODEX.md`
- Scoped task instructions: `.github/instructions/`
