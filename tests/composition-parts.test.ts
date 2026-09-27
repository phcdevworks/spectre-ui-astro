import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import {
  getCardBleedClasses,
  getCarouselIndicatorClasses,
  getCarouselSlideClasses,
  getDropdownDividerClasses,
  getDropdownHeaderClasses,
  getDropdownItemClasses,
  getDropdownMenuClasses,
  getFooterDividerClasses,
  getFooterHeadingClasses,
  getFooterLinksClasses,
  getFooterMutedClasses,
  getFooterTextClasses,
  getNavLinksClasses,
  getSidebarGroupClasses,
  getSidebarGroupSummaryClasses,
  getSidebarHeaderClasses,
  getTableRowClasses
} from '@phcdevworks/spectre-ui'
import { beforeAll, describe, expect, it } from 'vitest'

import SpCardBleed from '../src/components/SpCardBleed.astro'
import SpCarouselIndicator from '../src/components/SpCarouselIndicator.astro'
import SpCarouselSlide from '../src/components/SpCarouselSlide.astro'
import SpDropdownDivider from '../src/components/SpDropdownDivider.astro'
import SpDropdownHeader from '../src/components/SpDropdownHeader.astro'
import SpDropdownItem from '../src/components/SpDropdownItem.astro'
import SpDropdownMenu from '../src/components/SpDropdownMenu.astro'
import SpFooterDivider from '../src/components/SpFooterDivider.astro'
import SpFooterHeading from '../src/components/SpFooterHeading.astro'
import SpFooterLinks from '../src/components/SpFooterLinks.astro'
import SpFooterText from '../src/components/SpFooterText.astro'
import SpNavLinks from '../src/components/SpNavLinks.astro'
import SpSidebarGroup from '../src/components/SpSidebarGroup.astro'
import SpSidebarHeader from '../src/components/SpSidebarHeader.astro'
import SpTableRow from '../src/components/SpTableRow.astro'

let container: AstroContainer

beforeAll(async () => {
  container = await AstroContainer.create()
})

describe('card parts', () => {
  it('renders SpCardBleed with edges and padding step', async () => {
    const html = await container.renderToString(SpCardBleed, {
      props: { edges: ['top', 'left', 'right'], padded: 'lg', as: 'figure' },
      slots: { default: "<img alt='' />" }
    })

    expect(html).toContain(
      getCardBleedClasses({ edges: ['top', 'left', 'right'], padded: 'lg' })
    )
    expect(html).toContain('<figure')
    expect(html).not.toContain('edges=')
    expect(html).not.toContain('padded=')
  })
})

describe('dropdown parts', () => {
  it('renders SpDropdownMenu with forwarded menu options', async () => {
    const html = await container.renderToString(SpDropdownMenu, {
      props: {
        open: true,
        placement: 'bottom-end',
        accent: 'top',
        'aria-label': 'Actions'
      }
    })

    expect(html).toContain(
      getDropdownMenuClasses({
        open: true,
        placement: 'bottom-end',
        accent: 'top'
      })
    )
    expect(html).toContain('aria-label="Actions"')
    expect(html).not.toContain('placement=')
  })

  it('renders SpDropdownItem as a link when href is set', async () => {
    const html = await container.renderToString(SpDropdownItem, {
      props: { href: '/settings', selected: true },
      slots: { default: 'Settings' }
    })

    expect(html).toContain(getDropdownItemClasses({ selected: true }))
    expect(html).toContain('<a')
    expect(html).toContain('href="/settings"')
    expect(html).toContain('aria-current="page"')
  })

  it('renders SpDropdownItem as a disabled button without an href', async () => {
    const html = await container.renderToString(SpDropdownItem, {
      props: { disabled: true },
      slots: { default: 'Archive' }
    })

    expect(html).toContain(getDropdownItemClasses({ disabled: true }))
    expect(html).toContain('<button')
    expect(html).toContain('type="button"')
    expect(html).toContain('aria-disabled="true"')
  })

  it('suppresses href on a disabled link item', async () => {
    const html = await container.renderToString(SpDropdownItem, {
      props: { as: 'a', href: '/gone', disabled: true }
    })

    expect(html).not.toContain('href="/gone"')
    expect(html).toContain('tabindex="-1"')
  })

  it('renders SpDropdownHeader and SpDropdownDivider', async () => {
    const header = await container.renderToString(SpDropdownHeader, {
      slots: { default: 'Account' }
    })
    expect(header).toContain(`class="${getDropdownHeaderClasses()}"`)

    const divider = await container.renderToString(SpDropdownDivider, {})
    expect(divider).toContain('<hr')
    expect(divider).toContain(`class="${getDropdownDividerClasses()}"`)
  })
})

describe('footer parts', () => {
  it('renders heading, links, and divider parts', async () => {
    const heading = await container.renderToString(SpFooterHeading, {
      props: { as: 'h3' },
      slots: { default: 'Company' }
    })
    expect(heading).toContain(`class="${getFooterHeadingClasses()}"`)
    expect(heading).toContain('<h3')

    const links = await container.renderToString(SpFooterLinks, {
      props: { 'aria-label': 'Company links' }
    })
    expect(links).toContain(`class="${getFooterLinksClasses()}"`)
    expect(links).toContain('<ul')

    const divider = await container.renderToString(SpFooterDivider, {})
    expect(divider).toContain(`class="${getFooterDividerClasses()}"`)
  })

  it('switches SpFooterText between body and muted recipes', async () => {
    const text = await container.renderToString(SpFooterText, {
      slots: { default: 'Built with Spectre.' }
    })
    expect(text).toContain(`class="${getFooterTextClasses()}"`)

    const muted = await container.renderToString(SpFooterText, {
      props: { muted: true, as: 'small' }
    })
    expect(muted).toContain(`class="${getFooterMutedClasses()}"`)
    expect(muted).toContain('<small')
    expect(muted).not.toContain('muted=')
  })
})

describe('nav and sidebar parts', () => {
  it('renders SpNavLinks', async () => {
    const html = await container.renderToString(SpNavLinks, {
      props: { as: 'ul' }
    })
    expect(html).toContain(`class="${getNavLinksClasses()}"`)
    expect(html).toContain('<ul')
  })

  it('renders SpSidebarGroup as native details with a styled summary', async () => {
    const html = await container.renderToString(SpSidebarGroup, {
      props: { label: 'Guides', open: true },
      slots: { default: "<a href='#'>Intro</a>" }
    })

    expect(html).toContain(`class="${getSidebarGroupClasses()}"`)
    expect(html).toContain('<details')
    expect(html).toContain(' open')
    expect(html).toContain(`class="${getSidebarGroupSummaryClasses()}"`)
    expect(html).toContain('Guides')
  })

  it('renders SpSidebarHeader', async () => {
    const html = await container.renderToString(SpSidebarHeader, {
      slots: { default: 'Workspace' }
    })
    expect(html).toContain(`class="${getSidebarHeaderClasses()}"`)
  })
})

describe('table and carousel parts', () => {
  it('renders SpTableRow with variant and selection', async () => {
    const html = await container.renderToString(SpTableRow, {
      props: { variant: 'warning', selected: true },
      slots: { default: '<td>Row</td>' }
    })

    expect(html).toContain(
      getTableRowClasses({ variant: 'warning', selected: true })
    )
    expect(html).toContain('<tr')
    expect(html).toContain('aria-selected="true"')
  })

  it('renders a plain SpTableRow without an empty class', async () => {
    const html = await container.renderToString(SpTableRow, {})
    expect(html).toContain('<tr')
    expect(html).not.toContain('class=""')
    expect(html).not.toContain('aria-selected')
  })

  it('renders SpCarouselSlide with slide semantics', async () => {
    const html = await container.renderToString(SpCarouselSlide, {
      props: { active: true, 'aria-label': '1 of 3' }
    })

    expect(html).toContain(getCarouselSlideClasses({ active: true }))
    expect(html).toContain('role="group"')
    expect(html).toContain('aria-roledescription="slide"')
    expect(html).toContain('aria-label="1 of 3"')
  })

  it('renders SpCarouselIndicator as a labelled button', async () => {
    const html = await container.renderToString(SpCarouselIndicator, {
      props: { active: true, 'aria-label': 'Go to slide 1', target: 'slide-1' }
    })

    expect(html).toContain(getCarouselIndicatorClasses({ active: true }))
    expect(html).toContain('type="button"')
    expect(html).toContain('aria-current="true"')
    expect(html).toContain('aria-controls="slide-1"')
  })
})
