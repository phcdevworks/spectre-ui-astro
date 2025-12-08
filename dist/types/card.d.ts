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
    interactive?: boolean;
    padded?: boolean;
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
export declare function getCardClasses(opts?: CardRecipeOptions): string;
//# sourceMappingURL=card.d.ts.map