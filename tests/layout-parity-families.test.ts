import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import {
  getDropdownClasses,
  getFooterClasses,
  getLogoCloudClasses,
  getLogoCloudItemClasses,
  getSectionClasses,
  getSkeletonClasses,
  getStackClasses,
  getTextClasses
} from '@phcdevworks/spectre-ui'
import { beforeAll, describe, expect, it } from 'vitest'

import SpFooter from '../src/components/SpFooter.astro'
import SpNavItem from '../src/components/SpNavItem.astro'
import SpLogoCloud from '../src/components/SpLogoCloud.astro'
import SpLogoCloudItem from '../src/components/SpLogoCloudItem.astro'
import SpSection from '../src/components/SpSection.astro'
import SpSkeleton from '../src/components/SpSkeleton.astro'
import SpStack from '../src/components/SpStack.astro'
import SpText from '../src/components/SpText.astro'

let container: AstroContainer

beforeAll(async () => {
  container = await AstroContainer.create()
})

describe('spectre-ui 5.4.0 families and options', () => {
  it('renders SpSkeleton as an aria-hidden placeholder', async () => {
    const html = await container.renderToString(SpSkeleton, {
      props: { shape: 'circle', animated: true, class: 'sp-w-48' }
    })

    expect(html).toContain(
      `class="${getSkeletonClasses({ shape: 'circle', animated: true })} sp-w-48"`
    )
    expect(html).toContain('aria-hidden="true"')
    expect(html).not.toContain('shape=')
    expect(html).not.toContain('animated=')
  })

  it('defaults SpSkeleton to the text shape', async () => {
    const html = await container.renderToString(SpSkeleton)

    expect(html).toContain(`class="${getSkeletonClasses()}"`)
    expect(html).toMatch(/^<div/)
  })

  it('renders SpLogoCloud and SpLogoCloudItem with recipe classes', async () => {
    const cloud = await container.renderToString(SpLogoCloud, {
      props: { as: 'ul', size: 'lg', fill: 'card', muted: true, 'aria-label': 'Partners' },
      slots: { default: '<li>Mark</li>' }
    })

    expect(cloud).toMatch(/^<ul/)
    expect(cloud).toContain(
      getLogoCloudClasses({ size: 'lg', fill: 'card', muted: true })
    )
    expect(cloud).toContain('aria-label="Partners"')
    expect(cloud).not.toContain('muted=')
    expect(cloud).not.toContain('fill=')

    const item = await container.renderToString(SpLogoCloudItem, {
      props: { as: 'a', href: '/partners/example', 'aria-label': 'Partner' }
    })

    expect(item).toMatch(/^<a/)
    expect(item).toContain(`class="${getLogoCloudItemClasses()}"`)
    expect(item).toContain('href="/partners/example"')
  })

  it('drops href from non-anchor SpLogoCloudItem roots', async () => {
    const item = await container.renderToString(SpLogoCloudItem, {
      props: { as: 'li', href: '/ignored' }
    })

    expect(item).toMatch(/^<li/)
    expect(item).not.toContain('href=')
  })

  it('forwards SpFooter appearance and surface', async () => {
    const html = await container.renderToString(SpFooter, {
      props: { appearance: 'light', surface: 'subtle' }
    })

    expect(html).toContain(
      getFooterClasses({ appearance: 'light', surface: 'subtle' })
    )
    expect(html).not.toContain('appearance=')
    expect(html).not.toContain('surface=')
  })

  it('forwards SpSection hero and attached', async () => {
    const html = await container.renderToString(SpSection, {
      props: { hero: 'lg', attached: true, gap: '2xl' }
    })

    expect(html).toContain(
      getSectionClasses({ hero: 'lg', attached: true, gap: '2xl' })
    )
    expect(html).not.toContain('hero=')
    expect(html).not.toContain('attached=')
  })

  it('forwards SpText weight', async () => {
    const html = await container.renderToString(SpText, {
      props: { size: 'sm', weight: 700 }
    })

    expect(html).toContain(getTextClasses({ size: 'sm', weight: 700 }))
    expect(html).not.toContain('weight=')
  })

  it('passes the extended layout steps through to the recipes', async () => {
    const html = await container.renderToString(SpStack, {
      props: { gap: '4xl' }
    })

    expect(html).toContain(getStackClasses({ gap: '4xl' }))
  })

  it('forwards SpNavItem fullWidth to the dropdown wrapper', async () => {
    const html = await container.renderToString(SpNavItem, {
      props: { dropdown: true, label: 'Products', fullWidth: true }
    })

    expect(html).toContain(getDropdownClasses({ fullWidth: true }))
    expect(html).not.toContain('fullWidth=')
  })
})
