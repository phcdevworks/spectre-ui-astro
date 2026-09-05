import ts from 'typescript'

interface RootExportContract {
  components: readonly string[]
  recipeHelpers: readonly string[]
  typeExports: readonly string[]
}

function collectExports(source: string) {
  const file = ts.createSourceFile(
    'exports.ts',
    source,
    ts.ScriptTarget.Latest,
    true
  )
  const runtime = new Set<string>()
  const types = new Set<string>()
  const barrels = new Set<string>()

  for (const statement of file.statements) {
    if (!ts.isExportDeclaration(statement)) continue

    if (!statement.exportClause) {
      if (
        !statement.isTypeOnly &&
        statement.moduleSpecifier &&
        ts.isStringLiteral(statement.moduleSpecifier)
      ) {
        barrels.add(statement.moduleSpecifier.text)
      }
      continue
    }

    if (!ts.isNamedExports(statement.exportClause)) continue
    for (const element of statement.exportClause.elements) {
      const names = statement.isTypeOnly || element.isTypeOnly ? types : runtime
      names.add(element.name.text)
    }
  }

  return { runtime, types, barrels }
}

export function assertContractRootExports(
  indexSource: string,
  recipesSource: string,
  contract: RootExportContract
): void {
  const index = collectExports(indexSource)
  const recipes = collectExports(recipesSource)

  const missingComponents = contract.components.filter(
    (name) => !index.runtime.has(name)
  )
  if (missingComponents.length > 0) {
    throw new Error(
      `Components declared in contract but missing from src/index.ts: ${missingComponents.join(', ')}`
    )
  }

  if (!index.barrels.has('./recipes/index')) {
    throw new Error('src/index.ts must re-export ./recipes/index.')
  }

  const missingHelpers = contract.recipeHelpers.filter(
    (name) => !recipes.runtime.has(name)
  )
  const missingTypes = contract.typeExports.filter(
    (name) => !recipes.types.has(name)
  )
  const missing = [...missingHelpers, ...missingTypes]
  if (missing.length > 0) {
    throw new Error(
      `Recipe helpers/types declared in contract but missing from src/recipes/index.ts: ${missing.join(', ')}`
    )
  }
}
