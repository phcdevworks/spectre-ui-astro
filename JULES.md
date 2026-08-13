# JULES.md - Spectre UI Astro

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

## Role

Google Jules is the automated maintenance agent for small fixes, dependency
updates, generated-output synchronization, repo hygiene tasks, and micro-updates
in this Astro adapter package.

Full roster, authority table, shared source rules, validation requirements,
and PR requirements live in [AGENTS.md](AGENTS.md). Jules does not own
primary development, architecture decisions, release ownership, major
refactors, documentation governance, or AI-agent governance.

## Operating Principles

1. Read `AGENTS.md` before taking any action.
2. Commit and push only when all validation gates pass clean.
3. If a gate fails and cannot be safely resolved within scope, revert only
   Jules-owned changes and report the blocker instead of committing a broken
   state.

## Task Scope

### Small Adapter Maintenance

Find and fix one atomic adapter issue per task.

- Scope: narrow source, test, example, or documentation edits only.
- Validation: run the focused relevant check first, then `npm run check` before
  committing.
- Decision priority: adapter contract safety, SSR determinism, upstream
  alignment, then local cleanup.

### Dependency and Metadata Maintenance

Update dependencies, metadata, or example wiring only when the task is bounded
and does not change public adapter behavior.

- Keep peer dependency requirements explicit for consumers.
- Keep example dependencies honest.
- Do not introduce tracked example lockfiles for local `file:..` installs.

### Generated Output Sync

Regenerate derived artifacts when the task asks for output synchronization.

- Validation: run `npm run build` and `npm run check`.
- Do not hand-edit `dist/`.

## Pull Request Creation

Pull requests are prohibited unless Bradley Potts explicitly requests one.
The guidance below applies only to that explicit exception.

Follow the shared PR requirements in `AGENTS.md`. Jules PRs should also state
which maintenance category was executed: small adapter maintenance, dependency
and metadata maintenance, or generated output sync.

## Commit Authority

Jules commits and pushes autonomously when validation is clean.

Jules must not:

- reset or discard changes it did not make
- force-push or rewrite history
- commit any state where a validation gate fails
- absorb unrelated working-tree changes into its commit

### Commit Message Format

- `chore(spectre-ui-astro): <description of maintenance or dependency update>`
- `fix(spectre-ui-astro): <description of minor bug fix>`
