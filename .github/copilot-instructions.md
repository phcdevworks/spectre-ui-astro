# GitHub Copilot Instructions for @phcdevworks/spectre-ui-astro

## Repository purpose

This repository publishes the Astro adapter for the Spectre design system. It is
Layer 3 of the Spectre stack and must stay downstream of
`@phcdevworks/spectre-ui`.

Use this package to deliver Astro-native components, Astro ergonomics, SSR-safe
markup, and adapter-level typing. Do not move design ownership, token logic, or
shared styling behavior into this repository.

## Authority and collaboration

When guidance overlaps, follow this order:

1. Human maintainer direction
2. `AGENTS.md`
3. `CLAUDE.md`
4. `CODEX.md`
5. Local conventions in source, tests, docs, and package metadata

Claude Code is the primary implementation agent. Codex provides documentation,
release, production stabilization, repo hygiene, config standardization, and
contract oversight. Google Jules, when configured, handles only bounded
automated maintenance. GitHub Copilot should support the team by making narrow,
production-safe changes and by keeping documentation and GitHub workflows in
sync with behavior.

## Non-negotiable rules

- Treat `@phcdevworks/spectre-ui` as the source of truth for recipe logic,
  classes, and styling contracts.
- Do not add local CSS, token definitions, Tailwind config, or alternate styling
  systems here.
- Keep Astro components thin and framework-native.
- Preserve SSR safety. Avoid nondeterministic IDs and unstable accessibility
  wiring.
- Keep exports, docs, tests, examples, and package metadata aligned whenever
  public behavior changes.
- Do not create git commits, tags, or releases.
- Do not own implementation direction, release decisions, or final handoff
  authority.

## Project layout

- `src/components/`: Astro components and shared adapter helpers
- `src/recipes/`: re-exports from `@phcdevworks/spectre-ui`
- `src/index.ts`: public package surface
- `tests/`: package contract, rendering, docs parity, and component tests
- `examples/`: Astro example app used for manual validation
- `scripts/`: build support and package contract validation
- `.github/workflows/ci.yml`: CI contract for pull requests and main

Read `CLAUDE.md` before changing implementation details and use it as the main
reference for component patterns, shared utilities, testing expectations, and
release workflow.

## Build and validation

Use Node versions supported by `package.json` engines.

Preferred command order:

1. `npm install`
2. `npm run build`
3. `npm run typecheck`
4. `npm test`
5. `npm run ci:verify` before release-ready handoff or when a change touches
   public behavior broadly

Useful focused commands:

- `npm run lint`
- `npm run build`
- `npm run typecheck`
- `npm test -- --runInBand` is not configured here; prefer targeted `vitest`
  file execution only if already supported by the task context
- `cd examples && npm install && npm run build` when example wiring changes

CI also installs and builds the example app. If your change affects examples,
exports, install steps, or package metadata, validate the example app locally.

## Change expectations

- Keep changes minimal and root-cause oriented.
- Update tests when behavior changes.
- Update `README.md`, `CHANGELOG.md`, and any relevant GitHub templates when
  public behavior or contribution workflow changes.
- Preserve the distinction between consumer docs (`README.md`), contributor docs
  (`CONTRIBUTING.md`), and agent docs (`AGENTS.md`, `CLAUDE.md`, `CODEX.md`).
- Prefer focused validation first, then broader verification.

## Source-specific reminders

- Interactive components use `resolveInteractiveAttrs` from
  `src/components/sp-interactive.shared.ts`.
- `SpInput` accessibility wiring is handled through
  `src/components/sp-input.shared.ts` and requires an explicit `id` when
  labeling or descriptive text is present.
- Adapter-consumed props must not leak to the DOM. Destructure them explicitly
  and spread only safe rest props.

## How Copilot should operate

- Trust the repository instructions before doing broad exploration.
- Search only when the instructions or nearby files are insufficient.
- Favor narrow diffs and existing patterns over new abstractions.
- Treat examples, tests, exports, and docs as part of the package contract, not
  optional follow-up work.
