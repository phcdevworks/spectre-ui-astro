export type IconBoxVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info";
export type IconBoxSize = "sm" | "md" | "lg";
export interface IconBoxRecipeOptions {
    variant?: IconBoxVariant;
    size?: IconBoxSize;
    rounded?: boolean;
    circle?: boolean;
}
export declare function getIconBoxClasses(opts?: IconBoxRecipeOptions): string;
//# sourceMappingURL=iconbox.d.ts.map