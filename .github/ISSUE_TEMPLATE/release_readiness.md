---
name: Release readiness
about: Track release blockers, contract checks, and publication handoff work
labels: release
---

## Target version

## Summary

## Scope of included changes

## Contract checks

- [ ] Root exports match `src/index.ts`, `package.json`, and build output
- [ ] Component entry points match source and package exports
- [ ] Peer dependency ranges are still correct
- [ ] Example app dependencies and local `file:..` usage remain honest

## Validation

- [ ] `npm run ci:verify`
- [ ] `cd examples && npm install && npm run build`

## Documentation

- [ ] `README.md` reviewed
- [ ] `CHANGELOG.md` updated
- [ ] Contribution or GitHub workflow docs updated if needed

## Risks or blockers

## Handoff notes
