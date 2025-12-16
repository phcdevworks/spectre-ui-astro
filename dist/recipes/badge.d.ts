export type BadgeVariant = "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info";
export type BadgeSize = "sm" | "md" | "lg";
export interface BadgeRecipeOptions {
    variant?: BadgeVariant;
    size?: BadgeSize;
    outlined?: boolean;
    pill?: boolean;
}
export declare function getBadgeClasses(opts?: BadgeRecipeOptions): string;
//# sourceMappingURL=badge.d.ts.map