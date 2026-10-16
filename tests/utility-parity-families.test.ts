import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import * as upstream from '@phcdevworks/spectre-ui'
import {
  getDividerClasses,
  getGridClasses,
  getLinkClasses,
  getSurfaceClasses,
  getTextClasses
} from '@phcdevworks/spectre-ui'
import { beforeAll, describe, expect, it } from 'vitest'

import contractJson from '../astro-adapter.contract.json'
import * as adapter from '../src/index'
import SpDivider from '../src/components/SpDivider.astro'
import SpGrid from '../src/components/SpGrid.astro'
import SpLink from '../src/components/SpLink.astro'
import SpSurface from '../src/components/SpSurface.astro'
import SpText from '../src/components/SpText.astro'

let container: AstroContainer

beforeAll(async () => {
  container = await AstroContainer.create()
})

describe('spectre-ui 5.7.0 components', () => {
  it('renders SpLink with tone, decoration, and underline offset', async () => {
    const html = await container.renderToString(SpLink, {
      props: {
        href: '/docs',
        tone: 'onInverse',
        decoration: 'thick',
        underlineOffset: 'lg'
      },
      slots: { default: 'Docs' }
    })

    expect(html).toContain(
      `class="${getLinkClasses({ tone: 'onInverse', decoration: 'thick', underlineOffset: 'lg' })}"`
    )
    expect(html).toContain('href="/docs"')
    expect(html).toContain('Docs')
    expect(html).not.toContain('tone=')
    expect(html).not.toContain('decoration=')
    expect(html).not.toContain('underlineOffset=')
  })

  it('renders the default SpLink and marks the current page', async () => {
    const html = await container.renderToString(SpLink, {
      props: { href: '/', current: true },
      slots: { default: 'Home' }
    })

    expect(html).toContain(`class="${getLinkClasses()}"`)
    expect(html).toContain('aria-current="page"')
    expect(html).not.toMatch(/\scurrent=/)
  })

  it('renders SpDivider as an hr', async () => {
    const html = await container.renderToString(SpDivider, {
      props: { class: 'extra', 'aria-hidden': 'true' }
    })

    expect(html).toContain('<hr')
    expect(html).toContain(`class="${getDividerClasses()} extra"`)
    expect(html).toContain('aria-hidden="true"')
  })

  it('renders SpSurface roles and interaction states', async () => {
    const html = await container.renderToString(SpSurface, {
      props: { as: 'section', surface: 'subtle', hover: true, selected: true },
      slots: { default: 'Panel' }
    })

    expect(html).toContain('<section')
    expect(html).toContain(
      `class="${getSurfaceClasses({ surface: 'subtle', hover: true, selected: true })}"`
    )
    expect(html).toContain('Panel')
    expect(html).not.toContain('hover=')
    expect(html).not.toContain('selected=')
  })

  it('renders the documented SpSurface override classes', async () => {
    for (const surface of ['input', 'inverse', 'hero'] as const) {
      const html = await container.renderToString(SpSurface, { props: { surface } })
      expect(html).toContain(`class="${getSurfaceClasses({ surface })}"`)
    }
  })

  it('omits the class attribute on a bare SpSurface', async () => {
    const html = await container.renderToString(SpSurface, {})

    expect(getSurfaceClasses()).toBe('')
    expect(html).not.toContain('class=')
  })
})

describe('spectre-ui 5.7.0 text and grid options', () => {
  it('forwards the new SpText options', async () => {
    const options = {
      fontSize: 48,
      tracking: 'wide',
      decoration: 'thick',
      underlineOffset: 'sm',
      tabularNums: true,
      balance: true
    } as const
    const html = await container.renderToString(SpText, {
      props: options,
      slots: { default: '1,234' }
    })

    expect(html).toContain(`class="${getTextClasses(options)}"`)
    expect(html).toContain('sp-font-size-48')
    for (const prop of ['fontSize', 'tracking', 'tabularNums', 'balance']) {
      expect(html).not.toContain(`${prop}=`)
    }
  })

  it('forwards the 7xl–9xl SpText sizes', async () => {
    const html = await container.renderToString(SpText, {
      props: { size: '9xl' },
      slots: { default: 'Hero' }
    })

    expect(html).toContain(`class="${getTextClasses({ size: '9xl' })}"`)
  })

  it('forwards responsive SpGrid columns', async () => {
    const columns = { base: 1, md: 2, lg: 4 } as const
    const html = await container.renderToString(SpGrid, {
      props: { columns },
      slots: { default: '<div>A</div>' }
    })

    expect(html).toContain(getGridClasses({ columns }))
    expect(html).toContain('sp-md-grid-cols-2')
    expect(html).toContain('sp-lg-grid-cols-4')
  })
})

describe('spectre-ui 5.7.0 utility helpers', () => {
  const utilityHelpers = [
    'getAspectRatioClasses',
    'getBorderClasses',
    'getChartColorClasses',
    'getColorClasses',
    'getElevationClasses',
    'getIconSizeClasses',
    'getLayoutClasses',
    'getMotionClasses',
    'getOpacityClasses',
    'getPaletteClasses',
    'getShadowClasses',
    'getSpacingClasses',
    'getZIndexClasses'
  ] as const

  it('re-exports each utility helper from the package root unchanged', () => {
    for (const name of utilityHelpers) {
      expect(adapter[name], name).toBe(upstream[name])
    }
  })

  it('declares one helper-only utility family per utility helper', () => {
    expect(contractJson.componentFamilies.utilityFamilies).toHaveLength(utilityHelpers.length)
  })

  it('re-exports the theme and density mode constants', () => {
    expect(adapter.spectreThemeModes).toBe(upstream.spectreThemeModes)
    expect(adapter.spectreDensityModes).toBe(upstream.spectreDensityModes)
    expect(adapter.spectreThemeModes).toContain('dark')
    expect(adapter.spectreDensityModes).toContain('compact')
  })
})
