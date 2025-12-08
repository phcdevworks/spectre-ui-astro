export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonTone = 'default' | 'success' | 'warning' | 'danger';
export type SpButtonVariant = ButtonVariant;
export type SpButtonSize = ButtonSize;
export interface SpButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    tone?: ButtonTone;
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
    iconOnly?: boolean;
    as?: 'button' | 'a' | 'span';
    href?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    rel?: string;
    type?: 'button' | 'submit' | 'reset';
    class?: string;
    [key: string]: any;
}
export interface ButtonRecipeOptions {
    variant?: ButtonVariant;
    size?: ButtonSize;
    tone?: ButtonTone;
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
    iconOnly?: boolean;
}
/**
 * Generate Spectre button classes.
 *
 * Rules:
 * - Base: "sp-btn"
 * - Variant: "sp-btn--primary" | "sp-btn--secondary" | "sp-btn--ghost" | "sp-btn--danger"
 *   - default: "primary"
 * - Size: "sp-btn--sm" | "sp-btn--md" | "sp-btn--lg"
 *   - default: "md"
 * - Tone (optional):
 *   - "default" => no tone class
 *   - "success" => "sp-btn--tone-success"
 *   - "warning" => "sp-btn--tone-warning"
 *   - "danger"  => "sp-btn--tone-danger"
 * - Flags:
 *   - fullWidth => "sp-btn--full"
 *   - loading   => "sp-btn--loading"
 *   - disabled  => "sp-btn--disabled"
 *   - iconOnly  => "sp-btn--icon"
 */
export declare function getButtonClasses(opts?: ButtonRecipeOptions): string;
//# sourceMappingURL=button.d.ts.map