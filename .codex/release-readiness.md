# Codex Release Readiness Checklist

Use this checklist when Bradley loops Codex in before a release, version bump,
tag, or npm publication handoff.

## Scope

- [ ] Confirm the target release version and intended release title.
- [ ] Review `git status --short` and identify unrelated existing changes.
- [ ] Confirm no generated `dist/` output, local caches, or example lockfiles
      are being added unintentionally.
- [ ] Confirm public behavior changes have matching tests and docs.

## Contract Integrity

- [ ] `src/index.ts` root exports match the documented public API.
- [ ] `package.json` export paths resolve to real published files.
- [ ] Component entrypoints under `components/*.astro` match source files in
      `src/components/`.
- [ ] Recipe helper exports remain sourced from `@phcdevworks/spectre-ui`.
- [ ] No token definitions, local CSS ownership, Tailwind helpers, or recipe
      reimplementations were introduced.

## Dependency And Example Checks

- [ ] `astro` is declared as a required host-framework peer dependency.
- [ ] `@phcdevworks/spectre-ui` is declared as the upstream UI peer dependency.
- [ ] Runtime `dependencies` stay empty unless a true published runtime
      dependency is required.
- [ ] `examples/package.json` declares every package it imports directly.
- [ ] Example apps use `npm install`, not lockfile-strict `npm ci`, when
      consuming the parent package through a local `file:..` dependency.

## SSR And Accessibility

- [ ] No unstable IDs or nondeterministic markup were added.
- [ ] Associated label/helper/error text behavior remains explicit and stable.
- [ ] Disabled and loading states suppress navigation or focus where required.
- [ ] Non-native interactive elements receive correct role and tabindex
      behavior.
- [ ] Adapter-only props do not leak to rendered DOM.

## Documentation And Release Notes

- [ ] `CHANGELOG.md` moves `[Unreleased]` items under the release version.
- [ ] `README.md` reflects public exports, usage, and component entrypoints.
- [ ] Examples remain aligned with documented imports and CSS ownership.
- [ ] PR template checklist is satisfied or has explicit reviewer notes.

## Required Validation

Run from the repository root:

```bash
npm ci
npm run build
npm run typecheck
npm test
```

Before release handoff, prefer:

```bash
npm run ci:verify
```

Record any command that cannot be run, including the reason and residual risk.

## Handoff Summary

Include these points in the release handoff:

- Version and release title
- Changed files by category
- Validation commands run and results
- Known risks or unresolved questions
- Confirmation that Bradley retains final review, commit, tag, and publish
  authority

