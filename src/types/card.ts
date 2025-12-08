export type CardVariant = 'elevated' | 'outline' | 'ghost';

export interface CardProps {
  variant?: CardVariant;
  interactive?: boolean;
  padded?: boolean;
  fullHeight?: boolean;
  as?: 'div' | 'section' | 'article';
  class?: string;
  [key: string]: any;
}

export interface CardRecipeOptions {
  variant?: CardVariant;
  interactive?: boolean; // hover/focus styles
  padded?: boolean;      // apply default padding
  fullHeight?: boolean;
}

/**
 * Generate Spectre card classes.
 *
 * Rules:
 * - Base: "sp-card"
 * - Variant:
 *   - "elevated" => "sp-card--elevated" (default)
 *   - "outline"  => "sp-card--outline"
 *   - "ghost"    => "sp-card--ghost"
 * - interactive => "sp-card--interactive"
 * - padded      => "sp-card--padded"
 * - fullHeight  => "sp-card--full"
 */
export function getCardClasses(opts: CardRecipeOptions = {}): string {
  const {
    variant = 'elevated',
    interactive = false,
    padded = false,
    fullHeight = false,
  } = opts;

  const classes: string[] = [];

  // Base
  classes.push('sp-card');

  // Variant
  const variantMap: Record<CardVariant, string> = {
    elevated: 'sp-card--elevated',
    outline: 'sp-card--outline',
    ghost: 'sp-card--ghost',
  };
  classes.push(variantMap[variant]);

  // Flags
  if (interactive) classes.push('sp-card--interactive');
  if (padded) classes.push('sp-card--padded');
  if (fullHeight) classes.push('sp-card--full');

  return classes.filter(Boolean).join(' ').trim();
}
