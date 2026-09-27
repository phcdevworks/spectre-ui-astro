import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import {
  getAccordionClasses,
  getAccordionHeaderClasses,
  getAccordionItemClasses,
  getBreadcrumbClasses,
  getCarouselClasses,
  getListGroupClasses,
  getListGroupItemClasses,
  getOffcanvasClasses,
  getPaginationClasses,
  getStepperClasses,
  getTableClasses,
  getTabsClasses,
  getTabsItemClasses,
  getTabsPanelClasses
} from '@phcdevworks/spectre-ui'
import { beforeAll, describe, expect, it } from 'vitest'

import SpAccordion from '../src/components/SpAccordion.astro'
import SpAccordionItem from '../src/components/SpAccordionItem.astro'
import SpBreadcrumb from '../src/components/SpBreadcrumb.astro'
import SpCarousel from '../src/components/SpCarousel.astro'
import SpListGroup from '../src/components/SpListGroup.astro'
import SpListGroupItem from '../src/components/SpListGroupItem.astro'
import SpOffcanvas from '../src/components/SpOffcanvas.astro'
import SpPagination from '../src/components/SpPagination.astro'
import SpStepper from '../src/components/SpStepper.astro'
import SpTabPanel from '../src/components/SpTabPanel.astro'
import SpTable from '../src/components/SpTable.astro'
import SpTabs from '../src/components/SpTabs.astro'

let container: AstroContainer

beforeAll(async () => {
  container = await AstroContainer.create()
})

describe('new upstream recipe families', () => {
  it('renders tabs and panels with deterministic accessible associations', async () => {
    const tabs = [
      { id: 'profile', label: 'Profile' },
      { id: 'billing', label: 'Billing', disabled: true }
    ]
    const html = await container.renderToString(SpTabs, {
      props: { tabs, activeId: 'profile', variant: 'pill', vertical: true }
    })

    expect(html).toContain(getTabsClasses({ variant: 'pill', vertical: true }))
    expect(html).toContain(
      getTabsItemClasses({ active: true, disabled: false })
    )
    expect(html).toContain('id="profile-tab"')
    expect(html).toContain('aria-controls="profile"')
    expect(html).toContain('aria-orientation="vertical"')

    const panel = await container.renderToString(SpTabPanel, {
      props: { id: 'profile', active: true }
    })
    expect(panel).toContain(getTabsPanelClasses())
    expect(panel).toContain('aria-labelledby="profile-tab"')
    expect(panel).not.toContain(' hidden')
  })

  it('renders native accordion details with upstream state classes', async () => {
    const accordion = await container.renderToString(SpAccordion, {
      props: { flush: true }
    })
    expect(accordion).toContain(getAccordionClasses({ flush: true }))

    const item = await container.renderToString(SpAccordionItem, {
      props: { open: true, disabled: true },
      slots: { header: 'Account', default: 'Account settings' }
    })
    expect(item).toContain(
      getAccordionItemClasses({ expanded: true, disabled: true })
    )
    expect(item).toContain(
      getAccordionHeaderClasses({ expanded: true, disabled: true })
    )
    expect(item).toContain('<details')
    expect(item).toContain('<summary')
    expect(item).toContain('aria-disabled="true"')
  })

  it('renders breadcrumb and list-group recipe structures', async () => {
    const breadcrumb = await container.renderToString(SpBreadcrumb, {
      props: {
        separator: '>',
        items: [
          { label: 'Home', href: '/' },
          { label: 'Docs', current: true }
        ]
      }
    })
    expect(breadcrumb).toContain(
      getBreadcrumbClasses({ customSeparator: true })
    )
    expect(breadcrumb).toContain('aria-current="page"')

    const group = await container.renderToString(SpListGroup, {
      props: { horizontal: true, accent: 'left', accentColor: 'brand' }
    })
    expect(group).toContain(
      getListGroupClasses({
        horizontal: true,
        accent: 'left',
        accentColor: 'brand'
      })
    )

    const item = await container.renderToString(SpListGroupItem, {
      props: { as: 'a', href: '/docs', active: true }
    })
    expect(item).toContain(
      getListGroupItemClasses({ interactive: true, active: true })
    )
    expect(item).toContain('href="/docs"')
  })

  it('renders offcanvas and carousel shells as controlled SSR output', async () => {
    const offcanvas = await container.renderToString(SpOffcanvas, {
      props: { open: true, placement: 'end', 'aria-label': 'Filters' }
    })
    expect(offcanvas).toContain(
      getOffcanvasClasses({ open: true, placement: 'end' })
    )
    expect(offcanvas).toContain('role="dialog"')
    expect(offcanvas).not.toContain(' hidden')

    const carousel = await container.renderToString(SpCarousel, {
      props: { fade: true, 'aria-label': 'Highlights' }
    })
    expect(carousel).toContain(getCarouselClasses({ fade: true }))
    expect(carousel).toContain('aria-roledescription="carousel"')
  })

  it('renders table, pagination, and stepper semantics', async () => {
    const table = await container.renderToString(SpTable, {
      props: { size: 'sm', striped: true, 'aria-label': 'Results' }
    })
    expect(table).toContain(getTableClasses({ size: 'sm', striped: true }))
    expect(table).toContain('role="region"')
    expect(table).toContain('<table')

    const pagination = await container.renderToString(SpPagination, {
      props: {
        page: 3,
        total: 8,
        hrefTemplate: '/items?page={page}',
        size: 'lg'
      }
    })
    expect(pagination).toContain(getPaginationClasses({ size: 'lg' }))
    expect(pagination).toContain('aria-current="page"')
    expect(pagination).toContain('/items?page=4')

    const stepper = await container.renderToString(SpStepper, {
      props: {
        current: 1,
        orientation: 'vertical',
        steps: [{ label: 'Details' }, { label: 'Review' }, { label: 'Done' }]
      }
    })
    expect(stepper).toContain(getStepperClasses({ orientation: 'vertical' }))
    expect(stepper).toContain('aria-current="step"')
    expect(stepper).toContain('data-state="done"')
  })
})
