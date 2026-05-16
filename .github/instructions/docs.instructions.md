---
applyTo: 'README.md,CHANGELOG.md,CONTRIBUTING.md,AGENTS.md,CLAUDE.md,CODEX.md,.github/**/*.md'
---

Documentation and GitHub workflow text should stay standardized by audience.

When editing docs:

- Keep `README.md` consumer-facing.
- Keep `CONTRIBUTING.md` contributor-facing.
- Keep `AGENTS.md`, `CLAUDE.md`, and `CODEX.md` agent-facing and role-specific.
- Avoid copying detailed implementation guidance from `CLAUDE.md` into other
  files unless that duplication is required for the audience.
- When public behavior or contributor workflow changes, update the related docs,
  GitHub templates, and changelog together.
