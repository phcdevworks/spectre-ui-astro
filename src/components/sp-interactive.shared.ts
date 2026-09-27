export function resolveInteractiveAttrs({
  Tag,
  isDisabled,
  href,
  type,
  tabindex,
  interactive
}: {
  Tag: string
  isDisabled: boolean | undefined
  href?: string | undefined
  type?: 'button' | 'submit' | 'reset' | undefined
  tabindex?: number | undefined
  interactive?: boolean | undefined
}) {
  return {
    finalType: Tag === 'button' ? (type ?? 'button') : undefined,
    finalHref: Tag === 'a' && !isDisabled ? href : undefined,
    finalTabIndex:
      Tag !== 'button' && isDisabled
        ? -1
        : interactive && Tag !== 'button' && Tag !== 'a'
          ? (tabindex ?? 0)
          : tabindex
  }
}
