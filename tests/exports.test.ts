import { existsSync, readdirSync } from 'node:fs'
import { basename, resolve } from 'node:path'

import * as upstream from '@phcdevworks/spectre-ui'
import { describe, expect, it } from 'vitest'

import packageJson from '../package.json'
import manifestJson from '../spectre.manifest.json'
import * as adapter from '../src/index'

const repoRoot = resolve(import.meta.dirname, '..')
const componentsDir = resolve(repoRoot, 'src/components')
const upstreamContractPackage = '@phcdevworks/spectre-ui'
const upstreamPeerRange = packageJson.peerDependencies[upstreamContractPackage]
const astroHostPackage = 'astro'
const astroPeerRange = packageJson.peerDependencies[astroHostPackage]
const runtimeDependencies =
  (packageJson as { dependencies?: Record<string, string> }).dependencies ?? {}

function collectRuntimeExportPaths(exportsField: typeof packageJson.exports) {
  const runtimePaths = new Set<string>()

  for (const exportValue of Object.values(exportsField)) {
    if (typeof exportValue === 'string') {
      runtimePaths.add(exportValue)
      continue
    }

    for (const [condition, targetPath] of Object.entries(exportValue)) {
      if (condition !== 'types') {
        runtimePaths.add(targetPath)
      }
    }
  }

  return [...runtimePaths].sort()
}

const recipeRuntimeExports = [
  'getAccordionClasses',
  'getAccordionHeaderClasses',
  'getAccordionIconClasses',
  'getAccordionItemClasses',
  'getAccordionPanelClasses',
  'getAlertClasses',
  'getAlertDismissClasses',
  'getAlertIconClasses',
  'getAvatarClasses',
  'getBadgeClasses',
  'getButtonClasses',
  'getBreadcrumbClasses',
  'getBreadcrumbItemClasses',
  'getBreadcrumbLinkClasses',
  'getBreadcrumbSeparatorClasses',
  'getCardBleedClasses',
  'getCardClasses',
  'getCarouselCaptionClasses',
  'getCarouselClasses',
  'getCarouselControlClasses',
  'getCarouselIndicatorClasses',
  'getCarouselIndicatorsClasses',
  'getCarouselSlideClasses',
  'getCarouselViewportClasses',
  'getCheckboxClasses',
  'getChoiceCardClasses',
  'getContainerClasses',
  'getDatepickerClasses',
  'getDatepickerGridClasses',
  'getDatepickerHeaderClasses',
  'getDatepickerWeekdayClasses',
  'getDayClasses',
  'getDisplayClasses',
  'getDropdownClasses',
  'getDropdownDividerClasses',
  'getDropdownHeaderClasses',
  'getDropdownItemClasses',
  'getDropdownMenuClasses',
  'getExternalAuthButtonClasses',
  'getExternalAuthButtonIconClasses',
  'getFieldsetClasses',
  'getFieldsetLegendClasses',
  'getFileInputClasses',
  'getFooterClasses',
  'getFooterHeadingClasses',
  'getFooterTextClasses',
  'getFooterMutedClasses',
  'getFooterLinksClasses',
  'getFooterLinkClasses',
  'getFooterDividerClasses',
  'getFooterChipClasses',
  'getGridClasses',
  'getHeadingClasses',
  'getIconBoxClasses',
  'getInputClasses',
  'getInputErrorMessageClasses',
  'getInputGroupAddonClasses',
  'getInputGroupClasses',
  'getInputHelperTextClasses',
  'getInputLabelClasses',
  'getInputWrapperClasses',
  'getLabelClasses',
  'getLeadClasses',
  'getListGroupClasses',
  'getListGroupItemClasses',
  'getListGroupItemHeadingClasses',
  'getListGroupItemTextClasses',
  'getLogoCloudClasses',
  'getLogoCloudItemClasses',
  'getModalClasses',
  'getModalOverlayClasses',
  'getNavClasses',
  'getNavLinkClasses',
  'getNavLinksClasses',
  'getOffcanvasBackdropClasses',
  'getOffcanvasBodyClasses',
  'getOffcanvasClasses',
  'getOffcanvasFooterClasses',
  'getOffcanvasHeaderClasses',
  'getPaginationClasses',
  'getPaginationEllipsisClasses',
  'getPaginationItemClasses',
  'getPopoverArrowClasses',
  'getPopoverBodyClasses',
  'getPopoverClasses',
  'getPopoverHeaderClasses',
  'getPricingCardBadgeClasses',
  'getPricingCardClasses',
  'getPricingCardDescriptionClasses',
  'getPricingCardPriceClasses',
  'getPricingCardPriceContainerClasses',
  'getProgressBarClasses',
  'getProgressClasses',
  'getProgressLabelClasses',
  'getProseClasses',
  'getRadioClasses',
  'getRangeClasses',
  'getRatingClasses',
  'getRatingStarClasses',
  'getRatingStarsClasses',
  'getRatingTextClasses',
  'getSectionClasses',
  'getSelectClasses',
  'getSidebarBackdropClasses',
  'getSidebarClasses',
  'getSidebarGroupClasses',
  'getSidebarGroupSummaryClasses',
  'getSidebarHeaderClasses',
  'getSidebarLinkClasses',
  'getSidebarToggleClasses',
  'getSkeletonClasses',
  'getSpinnerClasses',
  'getStackClasses',
  'getStepperClasses',
  'getStepperIndicatorClasses',
  'getStepperLabelClasses',
  'getStepperStepClasses',
  'getSwitchClasses',
  'getTableClasses',
  'getTableRowClasses',
  'getTableWrapperClasses',
  'getTabsClasses',
  'getTabsItemClasses',
  'getTabsListClasses',
  'getTabsPanelClasses',
  'getTagClasses',
  'getTestimonialAuthorClasses',
  'getTestimonialAuthorInfoClasses',
  'getTestimonialAuthorNameClasses',
  'getTestimonialAuthorTitleClasses',
  'getTestimonialClasses',
  'getTestimonialQuoteClasses',
  'getTextClasses',
  'getTextareaClasses',
  'getToastClasses',
  'getToastIconClasses',
  'getTooltipClasses',
  'spectreBaseStylesPath',
  'spectreComponentsStylesPath',
  'spectreIndexStylesPath',
  'spectreStyles',
  'spectreUtilitiesStylesPath'
] as const

const componentFiles = readdirSync(componentsDir)
  .filter((fileName) => fileName.endsWith('.astro'))
  .sort()

const componentExportNames = componentFiles.map((fileName) =>
  basename(fileName, '.astro')
)

describe('package export surface', () => {
  it('keeps declared built runtime entry points truthful', () => {
    const runtimePaths = collectRuntimeExportPaths(packageJson.exports)

    expect(packageJson.main).toBe('./dist/index.js')
    expect(packageJson.types).toBe('./dist/index.d.ts')
    expect(packageJson).not.toHaveProperty('module')
    expect(packageJson.exports['.']).toEqual({
      types: './dist/index.d.ts',
      import: './dist/index.js',
      default: './dist/index.js'
    })

    for (const targetPath of [
      packageJson.main,
      packageJson.types,
      ...runtimePaths
    ]) {
      expect(
        existsSync(resolve(repoRoot, targetPath)),
        `Expected declared package path to exist after build: ${targetPath}`
      ).toBe(true)
    }
  })

  it('keeps package.json component entry points aligned with actual Astro component files', () => {
    const exportKeys = Object.keys(packageJson.exports)
      .filter((key) => key.startsWith('./components/'))
      .sort()

    const expectedComponentKeys = componentFiles.map(
      (fileName) => `./components/${fileName}`
    )

    expect(exportKeys).toEqual(expectedComponentKeys)
  })

  it('keeps ecosystem manifest exports aligned with package.json', () => {
    const manifestExports =
      manifestJson.packages['@phcdevworks/spectre-ui-astro'].exports

    expect([...manifestExports].sort()).toEqual(
      Object.keys(packageJson.exports).sort()
    )
  })

  it('keeps the root runtime export surface intentional and stable', () => {
    const expectedRuntimeExports = [
      ...componentExportNames,
      ...recipeRuntimeExports
    ].sort()

    expect(Object.keys(adapter).sort()).toEqual(expectedRuntimeExports)
    expect(adapter).not.toHaveProperty('SPECTRE_UI_CSS')
  })

  it('passes upstream recipe helpers through without redefining them', () => {
    for (const exportName of recipeRuntimeExports) {
      expect(adapter[exportName]).toBe(upstream[exportName])
    }
  })

  it('declares @phcdevworks/spectre-ui as the upstream peer contract', () => {
    expect(upstreamPeerRange).toEqual(expect.any(String))
    expect(upstreamPeerRange.length).toBeGreaterThan(0)
    expect(runtimeDependencies).not.toHaveProperty(upstreamContractPackage)
  })

  it('declares Astro as the host framework peer contract', () => {
    expect(astroPeerRange).toEqual(expect.any(String))
    expect(astroPeerRange.length).toBeGreaterThan(0)
    expect(runtimeDependencies).not.toHaveProperty(astroHostPackage)
  })
})
