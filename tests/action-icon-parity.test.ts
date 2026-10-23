import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import {
  getButtonClasses,
  getFooterClasses,
  getIconBoxClasses,
  getIconSizeClasses,
  getProseClasses,
  getQuoteClasses,
  getSidebarGroupContentClasses,
  getSidebarGroupIconClasses,
  getSidebarGroupSummaryClasses,
  getSidebarToggleClasses,
  getStatClasses
} from '@phcdevworks/spectre-ui'
import { ChevronRight, House } from '@phcdevworks/spectre-ui/icons'
import { siGithub } from '@phcdevworks/spectre-ui/icons/brands'
import { faHouse } from '@phcdevworks/spectre-ui/icons/fa-solid'
import { mdiHome } from '@phcdevworks/spectre-ui/icons/mdi'
import { beforeAll, describe, expect, it } from 'vitest'

import SpButton from '../src/components/SpButton.astro'
import SpFooter from '../src/components/SpFooter.astro'
import SpIcon from '../src/components/SpIcon.astro'
import SpIconBox from '../src/components/SpIconBox.astro'
import SpProse from '../src/components/SpProse.astro'
import SpQuote from '../src/components/SpQuote.astro'
import SpSidebarGroup from '../src/components/SpSidebarGroup.astro'
import SpSidebarToggle from '../src/components/SpSidebarToggle.astro'
import SpStat from '../src/components/SpStat.astro'
import { resolveSpIconGlyph } from '../src/components/sp-icon.shared'

let container: AstroContainer

beforeAll(async () => {
  container = await AstroContainer.create()
})

describe('spectre-ui 5.8.0 action colour', () => {
  it('renders SpButton variant="action"', async () => {
    const html = await container.renderToString(SpButton, {
      props: { variant: 'action' },
      slots: { default: 'Go' }
    })

    expect(html).toContain(`class="${getButtonClasses({ variant: 'action' })}"`)
    expect(html).toContain('sp-btn--action')
  })

  it('renders SpStat unitTone without leaking it to the DOM', async () => {
    const html = await container.renderToString(SpStat, {
      props: { unitTone: 'action' },
      slots: { default: '98', unit: '%' }
    })

    expect(html).toContain(`class="${getStatClasses({ unitTone: 'action' })}"`)
    expect(html).toContain('sp-stat--unit-action')
    expect(html).not.toContain('unitTone=')
  })

  it('renders SpQuote accentColor="action"', async () => {
    const html = await container.renderToString(SpQuote, {
      props: { accentColor: 'action' },
      slots: { default: 'Quote' }
    })

    expect(html).toContain(
      `class="${getQuoteClasses({ accentColor: 'action' })}"`
    )
    expect(html).toContain('sp-quote--accent-action')
  })

  it('renders SpFooter surface="action"', async () => {
    const html = await container.renderToString(SpFooter, {
      props: { surface: 'action' },
      slots: { default: 'Footer' }
    })

    expect(html).toContain(`class="${getFooterClasses({ surface: 'action' })}"`)
    expect(html).toContain('sp-footer--surface-action')
  })
})

describe('spectre-ui 5.8.0 prose and icon-box sizing', () => {
  it('renders SpProse size', async () => {
    const html = await container.renderToString(SpProse, {
      props: { size: 'lg', accentMarkers: true },
      slots: { default: '<p>Body</p>' }
    })

    expect(html).toContain(
      `class="${getProseClasses({ size: 'lg', accentMarkers: true })}"`
    )
    expect(html).toContain('sp-prose--lg')
    expect(html).not.toMatch(/\ssize=/)
  })

  it('renders SpIconBox iconSize', async () => {
    const html = await container.renderToString(SpIconBox, {
      props: { variant: 'primary', iconSize: 'xl' },
      slots: { default: '<svg></svg>' }
    })

    expect(html).toContain(
      `class="${getIconBoxClasses({ variant: 'primary', iconSize: 'xl' })}"`
    )
    expect(html).toContain('sp-iconbox--icon-xl')
    expect(html).not.toContain('iconSize=')
  })
})

describe('spectre-ui 5.8.0 sidebar recipes', () => {
  it('renders a SpSidebarGroup chevron through the group icon recipe', async () => {
    const html = await container.renderToString(SpSidebarGroup, {
      props: { label: 'Guides' },
      slots: { default: '<a href="/">Intro</a>' }
    })

    expect(html).toContain(
      `<span class="${getSidebarGroupIconClasses()}" aria-hidden="true">`
    )
    expect(html).toContain(resolveSpIconGlyph(ChevronRight)!.body)
    expect(html).not.toContain(getSidebarGroupContentClasses())
  })

  it('lets the icon slot replace the default chevron', async () => {
    const html = await container.renderToString(SpSidebarGroup, {
      props: { label: 'Guides' },
      slots: { icon: '+' }
    })

    expect(html).toContain(
      `<span class="${getSidebarGroupIconClasses()}" aria-hidden="true">+</span>`
    )
    expect(html).not.toContain('<svg')
  })

  it('wraps the content slot in the group content recipe', async () => {
    const html = await container.renderToString(SpSidebarGroup, {
      props: { label: 'Guides' },
      slots: { content: '<a href="/">Intro</a>' }
    })

    expect(html).toContain(
      `<div class="${getSidebarGroupContentClasses()}"><a href="/">Intro</a></div>`
    )
  })

  it('forwards hovered and focused to the group summary', async () => {
    const html = await container.renderToString(SpSidebarGroup, {
      props: { label: 'Guides', hovered: true, focused: true }
    })

    expect(html).toContain(
      `class="${getSidebarGroupSummaryClasses({ hovered: true, focused: true })}"`
    )
    expect(html).toContain('is-hover')
    expect(html).toContain('is-focus')
    expect(html).not.toMatch(/\shovered/)
    expect(html).not.toMatch(/\sfocused/)
  })

  it('forwards hovered and focused to SpSidebarToggle', async () => {
    const html = await container.renderToString(SpSidebarToggle, {
      props: { for: 'docs', hovered: true, focused: true }
    })

    expect(html).toContain(
      `class="${getSidebarToggleClasses({ hovered: true, focused: true })}"`
    )
    expect(html).not.toMatch(/\shovered/)
    expect(html).not.toMatch(/\sfocused/)
  })
})

describe('SpIcon', () => {
  it('renders a decorative Lucide outline icon at 1em', async () => {
    const html = await container.renderToString(SpIcon, {
      props: { icon: House }
    })

    expect(html).toContain('<svg')
    expect(html).toContain('viewBox="0 0 24 24"')
    expect(html).toContain('fill="none"')
    expect(html).toContain('stroke="currentColor"')
    expect(html).toContain('stroke-width="2"')
    expect(html).toContain('width="1em"')
    expect(html).toContain('height="1em"')
    expect(html).toContain('aria-hidden="true"')
    expect(html).not.toContain('role="img"')
    expect(html).toContain(resolveSpIconGlyph(House)!.body)
  })

  it('sizes through getIconSizeClasses and drops the 1em fallback', async () => {
    const html = await container.renderToString(SpIcon, {
      props: { icon: House, size: 'lg', class: 'extra' }
    })

    expect(html).toContain(
      `class="${getIconSizeClasses({ size: 'lg' })} extra"`
    )
    expect(html).not.toMatch(/\swidth=/)
    expect(html).not.toMatch(/\sheight=/)
    expect(html).not.toMatch(/\ssize=/)
  })

  it('labels the icon as an image when label is set', async () => {
    const html = await container.renderToString(SpIcon, {
      props: { icon: House, label: 'Home', title: 'Home page' }
    })

    expect(html).toContain('role="img"')
    expect(html).toContain('aria-label="Home"')
    expect(html).not.toContain('aria-hidden')
    expect(html).toContain('<title>Home page</title>')
    expect(html).not.toMatch(/\slabel=/)
  })

  it('renders filled MDI, Font Awesome, and Simple Icons glyphs', async () => {
    const mdi = await container.renderToString(SpIcon, {
      props: { icon: mdiHome }
    })
    expect(mdi).toContain('viewBox="0 0 24 24"')
    expect(mdi).toContain('fill="currentColor"')
    expect(mdi).not.toContain('stroke=')
    expect(mdi).toContain(`<path d="${mdiHome}"></path>`)

    const fa = await container.renderToString(SpIcon, {
      props: { icon: faHouse }
    })
    expect(fa).toContain(`viewBox="0 0 ${faHouse.icon[0]} ${faHouse.icon[1]}"`)
    expect(fa).toContain('fill="currentColor"')

    const brand = await container.renderToString(SpIcon, {
      props: { icon: siGithub }
    })
    expect(brand).toContain('fill="currentColor"')
    expect(brand).toContain(`<path d="${siGithub.path}"></path>`)
  })

  it('renders nothing for unrecognised icon data', async () => {
    const html = await container.renderToString(SpIcon, {
      props: { icon: { nope: true } as never }
    })

    expect(html).not.toContain('<svg')
  })

  it('escapes path data so it cannot break out of the attribute', () => {
    const glyph = resolveSpIconGlyph('M0 0"/><script>x</script>')
    expect(glyph!.body).not.toContain('<script>')
    expect(glyph!.body).toContain('&quot;')
  })
})
