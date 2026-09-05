import { readFileSync } from 'node:fs'

import { describe, expect, it } from 'vitest'

import contract from '../astro-adapter.contract.json'
import { assertContractRootExports } from '../scripts/validate-root-exports'

const index = readFileSync(new URL('../src/index.ts', import.meta.url), 'utf8')
const recipes = readFileSync(
  new URL('../src/recipes/index.ts', import.meta.url),
  'utf8'
)

describe('root export contract validation', () => {
  it('accepts the current public exports', () => {
    expect(() =>
      assertContractRootExports(index, recipes, contract.rootExports)
    ).not.toThrow()
  })

  it('rejects a missing component even when its name remains in a comment and path', () => {
    const changed = index.replace(
      'default as SpButton',
      'default as SpButtonReplacement'
    )
    expect(() =>
      assertContractRootExports(
        `// SpButton\n${changed}`,
        recipes,
        contract.rootExports
      )
    ).toThrow('missing from src/index.ts: SpButton')
  })

  it('rejects a helper renamed to a longer identifier', () => {
    const changed = recipes.replace(
      'getButtonClasses,',
      'getButtonClasses as getButtonClassesReplacement,'
    )
    expect(() =>
      assertContractRootExports(index, changed, contract.rootExports)
    ).toThrow('missing from src/recipes/index.ts: getButtonClasses')
  })

  it('rejects runtime helpers exported only as types', () => {
    const changed = recipes.replace(
      'getButtonClasses,',
      'type getButtonClasses,'
    )
    expect(() =>
      assertContractRootExports(index, changed, contract.rootExports)
    ).toThrow('getButtonClasses')
  })

  it('rejects commented-out type exports', () => {
    const changed = recipes.replace(
      'type ButtonRecipeOptions,',
      '/* type ButtonRecipeOptions, */'
    )
    expect(() =>
      assertContractRootExports(index, changed, contract.rootExports)
    ).toThrow('ButtonRecipeOptions')
  })

  it('accepts declaration-level type exports', () => {
    const changed =
      recipes.replace('type ButtonRecipeOptions,', '') +
      '\nexport type { ButtonRecipeOptions } from "@phcdevworks/spectre-ui";'
    expect(() =>
      assertContractRootExports(index, changed, contract.rootExports)
    ).not.toThrow()
  })

  it('rejects a missing recipe barrel even when the declaration remains in a comment', () => {
    const changed = index.replace(
      'export * from "./recipes/index";',
      '// export * from "./recipes/index";'
    )
    expect(() =>
      assertContractRootExports(changed, recipes, contract.rootExports)
    ).toThrow('must re-export ./recipes/index')
  })
})
