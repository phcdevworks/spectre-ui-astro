type IconAttributeValue = string | number | undefined

type LucideIconData = readonly (readonly [
  string,
  Readonly<Record<string, IconAttributeValue>>
])[]

interface FontAwesomeIconData {
  readonly iconName: string
  readonly icon: readonly [
    number,
    number,
    readonly unknown[],
    string,
    string | readonly string[]
  ]
}

interface SimpleIconData {
  readonly slug: string
  readonly path: string
}

/**
 * Icon data in any shape `@phcdevworks/spectre-ui/icons` re-exports: a Lucide
 * `IconNode`, a Material Design Icons path string (`mdi*` exports), a Font
 * Awesome icon definition, or a Simple Icons brand object.
 */
export type SpIconData =
  LucideIconData | string | FontAwesomeIconData | SimpleIconData

export interface SpIconGlyph {
  viewBox: string
  outline: boolean
  body: string
}

function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function pathElements(paths: readonly string[]): string {
  return paths.map((d) => `<path d="${escapeAttribute(d)}"></path>`).join('')
}

function isLucideIconData(value: unknown): value is LucideIconData {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (node) =>
        Array.isArray(node) &&
        typeof node[0] === 'string' &&
        typeof node[1] === 'object' &&
        node[1] !== null
    )
  )
}

function isFontAwesomeIconData(value: unknown): value is FontAwesomeIconData {
  const candidate = value as Partial<FontAwesomeIconData> | null
  return (
    typeof candidate === 'object' &&
    candidate !== null &&
    typeof candidate.iconName === 'string' &&
    Array.isArray(candidate.icon) &&
    typeof candidate.icon[0] === 'number' &&
    typeof candidate.icon[1] === 'number'
  )
}

function isSimpleIconData(value: unknown): value is SimpleIconData {
  const candidate = value as Partial<SimpleIconData> | null
  return (
    typeof candidate === 'object' &&
    candidate !== null &&
    typeof candidate.slug === 'string' &&
    typeof candidate.path === 'string'
  )
}

function lucideBody(nodes: LucideIconData): string {
  return nodes
    .filter(([tag]) => /^[a-zA-Z]+$/.test(tag))
    .map(([tag, attributes]) => {
      const rendered = Object.entries(attributes)
        .filter(([name, value]) => value !== undefined && name !== 'key')
        .filter(([name]) => /^[a-zA-Z][a-zA-Z0-9-]*$/.test(name))
        .map(([name, value]) => `${name}="${escapeAttribute(String(value))}"`)
        .join(' ')
      return `<${tag} ${rendered}></${tag}>`
    })
    .join('')
}

// Mirrors the spectre-components `sp-icon` normalization so both adapters draw
// the same SVG for the same upstream icon export.
export function resolveSpIconGlyph(icon: unknown): SpIconGlyph | null {
  if (isLucideIconData(icon)) {
    return { viewBox: '0 0 24 24', outline: true, body: lucideBody(icon) }
  }
  if (typeof icon === 'string') {
    if (!icon.trim()) return null
    return { viewBox: '0 0 24 24', outline: false, body: pathElements([icon]) }
  }
  if (isFontAwesomeIconData(icon)) {
    const [width, height, , , pathData] = icon.icon
    const paths = typeof pathData === 'string' ? [pathData] : [...pathData]
    return {
      viewBox: `0 0 ${width} ${height}`,
      outline: false,
      body: pathElements(paths)
    }
  }
  if (isSimpleIconData(icon)) {
    return {
      viewBox: '0 0 24 24',
      outline: false,
      body: pathElements([icon.path])
    }
  }
  return null
}
