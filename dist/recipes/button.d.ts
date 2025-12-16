export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonRecipeOptions {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
    iconOnly?: boolean;
}
export declare function getButtonClasses(opts?: ButtonRecipeOptions): string;
//# sourceMappingURL=button.d.ts.map