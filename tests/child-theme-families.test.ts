import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import {
  getButtonClasses,
  getCardClasses,
  getProseClasses,
  getQuoteAttributionClasses,
  getQuoteAttributionNameClasses,
  getQuoteAttributionRoleClasses,
  getQuoteClasses,
  getQuoteTextClasses,
  getSectionHeadClasses,
  getSectionHeadLeadClasses,
  getSectionHeadTitleClasses,
  getStatClasses,
  getStatFigureClasses,
  getStatLabelClasses,
  getStatUnitClasses,
  getStepperStepClasses,
  getTextClasses
} from '@phcdevworks/spectre-ui'
import { beforeAll, describe, expect, it } from 'vitest'

import SpButton from '../src/components/SpButton.astro'
import SpCard from '../src/components/SpCard.astro'
import SpProse from '../src/components/SpProse.astro'
import SpQuote from '../src/components/SpQuote.astro'
import SpSectionHead from '../src/components/SpSectionHead.astro'
import SpStat from '../src/components/SpStat.astro'
import SpStepper from '../src/components/SpStepper.astro'
import SpText from '../src/components/SpText.astro'

let container: AstroContainer

beforeAll(async () => {
  container = await AstroContainer.create()
})

describe('spectre-ui 5.5.0 child-theme options', () => {
  it('forwards SpText leading and the accent variants', async () => {
    const html = await container.renderToString(SpText, {
      props: { size: 'xl', leading: 'tight', variant: 'onInverseAccent' },
      slots: { default: 'Statement' }
    })

    expect(html).toContain(
      `class="${getTextClasses({ size: 'xl', leading: 'tight', variant: 'onInverseAccent' })}"`
    )
    expect(html).toContain('sp-text--leading-tight')
    expect(html).not.toContain('leading=')
  })

  it('renders the accentOutline SpButton variant', async () => {
    const html = await container.renderToString(SpButton, {
      props: { variant: 'accentOutline' },
      slots: { default: 'Talk to us' }
    })

    expect(html).toContain(getButtonClasses({ variant: 'accentOutline' }))
    expect(html).toContain('sp-btn--accent-outline')
  })

  it('accepts the accent rail colour', async () => {
    const html = await container.renderToString(SpCard, {
      props: { accent: 'left', accentColor: 'accent' }
    })

    expect(html).toContain(getCardClasses({ accent: 'left', accentColor: 'accent' }))
  })

  it('applies SpStepper tone to every step and leaves steps unchanged without it', async () => {
    const steps = [{ label: 'One' }, { label: 'Two' }]
    const toned = await container.renderToString(SpStepper, {
      props: { steps, current: 1, tone: 'accent' }
    })

    expect(toned).toContain(getStepperStepClasses({ state: 'done', tone: 'accent' }))
    expect(toned).toContain(getStepperStepClasses({ state: 'active', tone: 'accent' }))
    expect(toned).not.toContain('tone=')

    const plain = await container.renderToString(SpStepper, {
      props: { steps, current: 1 }
    })

    expect(plain).toContain(`class="${getStepperStepClasses({ state: 'done' })}"`)
    expect(plain).not.toContain('sp-stepper__step--tone')
  })

  it('forwards SpProse accentMarkers', async () => {
    const html = await container.renderToString(SpProse, {
      props: { accentMarkers: true },
      slots: { default: '<ul><li>Item</li></ul>' }
    })

    expect(html).toContain(`class="${getProseClasses({ accentMarkers: true })}"`)
    expect(html).not.toContain('accentMarkers')

    const plain = await container.renderToString(SpProse)
    expect(plain).toContain(`class="${getProseClasses()}"`)
  })
})

describe('SpQuote', () => {
  it('renders a figure with the quote text and a full attribution', async () => {
    const html = await container.renderToString(SpQuote, {
      props: {
        size: 'xl',
        surface: 'inverse',
        accent: 'mark',
        accentColor: 'brand',
        align: 'center',
        cite: 'https://example.com/source',
        id: 'q1'
      },
      slots: {
        default: '<p>Quoted</p>',
        avatar: '<img alt="" src="/a.png">',
        name: 'Product lead',
        role: 'Engineering',
        organization: 'A production consumer'
      }
    })

    expect(html).toMatch(/^<figure/)
    expect(html).toContain(
      `class="${getQuoteClasses({ size: 'xl', surface: 'inverse', accent: 'mark', accentColor: 'brand', align: 'center' })}"`
    )
    expect(html).toContain(`<blockquote class="${getQuoteTextClasses()}" cite="https://example.com/source">`)
    expect(html).toContain(`<figcaption class="${getQuoteAttributionClasses({ avatar: true })}">`)
    expect(html).toContain(`class="${getQuoteAttributionNameClasses()}"`)
    expect(html).toMatch(
      new RegExp(
        `class="${getQuoteAttributionRoleClasses()}">\\s*Engineering\\s*,\\s*A production consumer`
      )
    )
    expect(html).toContain('id="q1"')
    for (const prop of ['size=', 'surface=', 'accent=', 'accentColor=', 'align=']) {
      expect(html).not.toContain(prop)
    }
  })

  it('omits the figcaption without attribution slots and the separator with one role line', async () => {
    const bare = await container.renderToString(SpQuote, {
      slots: { default: 'Quoted' }
    })

    expect(bare).toContain(`class="${getQuoteClasses()}"`)
    expect(bare).not.toContain('<figcaption')

    const roleOnly = await container.renderToString(SpQuote, {
      slots: { default: 'Quoted', name: 'Product lead', organization: 'A production consumer' }
    })

    expect(roleOnly).toContain(`<figcaption class="${getQuoteAttributionClasses({ avatar: false })}">`)
    expect(roleOnly).not.toContain(', ')
  })
})

describe('SpStat', () => {
  it('renders the figure, unit, and label parts', async () => {
    const html = await container.renderToString(SpStat, {
      props: { size: 'xl', align: 'center', surface: 'inverse', 'aria-label': 'Uptime' },
      slots: { default: '99.9', unit: '%', label: 'Uptime' }
    })

    expect(html).toContain(
      `class="${getStatClasses({ size: 'xl', align: 'center', surface: 'inverse' })}"`
    )
    expect(html).toContain('role="group"')
    expect(html).toMatch(
      new RegExp(`<p class="${getStatFigureClasses()}">99\\.9<span class="${getStatUnitClasses()}">%</span>`)
    )
    expect(html).toContain(`<p class="${getStatLabelClasses()}">`)
  })

  it('omits the unit, label, and group role when not provided', async () => {
    const html = await container.renderToString(SpStat, {
      slots: { default: '42' }
    })

    expect(html).toContain(`class="${getStatClasses()}"`)
    expect(html).not.toContain(getStatUnitClasses())
    expect(html).not.toContain(getStatLabelClasses())
    expect(html).not.toContain('role=')
  })
})

describe('SpSectionHead', () => {
  it('renders the title and lead parts from their slots', async () => {
    const html = await container.renderToString(SpSectionHead, {
      props: { layout: 'split', as: 'header' },
      slots: {
        eyebrow: '<span>Eyebrow</span>',
        title: '<h2>Title</h2>',
        default: '<p>Lead</p>',
        actions: '<a href="/x">Go</a>'
      }
    })

    expect(html).toMatch(/^<header/)
    expect(html).toContain(`class="${getSectionHeadClasses({ layout: 'split' })}"`)
    expect(html).toMatch(
      new RegExp(`<div class="${getSectionHeadTitleClasses()}">\\s*<span>Eyebrow</span>\\s*<h2>Title</h2>`)
    )
    expect(html).toMatch(
      new RegExp(`<div class="${getSectionHeadLeadClasses()}">\\s*<p>Lead</p>\\s*<a href="/x">Go</a>`)
    )
    expect(html).not.toContain('layout=')
  })

  it('renders only the populated parts and sets the group role on a labelled div', async () => {
    const html = await container.renderToString(SpSectionHead, {
      props: { align: 'center', 'aria-label': 'Intro' },
      slots: { title: '<h2>Title</h2>' }
    })

    expect(html).toContain(`class="${getSectionHeadClasses({ align: 'center' })}"`)
    expect(html).toContain('role="group"')
    expect(html).toContain(getSectionHeadTitleClasses())
    expect(html).not.toContain(getSectionHeadLeadClasses())
  })
})
