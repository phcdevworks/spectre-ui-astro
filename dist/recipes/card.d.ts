export type CardVariant = "elevated" | "outline" | "ghost";
export interface CardRecipeOptions {
    variant?: CardVariant;
    interactive?: boolean;
    padded?: boolean;
    fullHeight?: boolean;
}
export declare function getCardClasses(opts?: CardRecipeOptions): string;
//# sourceMappingURL=card.d.ts.map