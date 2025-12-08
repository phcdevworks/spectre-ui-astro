export type InputState = 'default' | 'error' | 'success';
export type InputSize = 'sm' | 'md' | 'lg';
export interface InputProps {
    label?: string;
    state?: InputState;
    size?: InputSize;
    fullWidth?: boolean;
    helperText?: string;
    errorMessage?: string;
    id?: string;
    class?: string;
    [key: string]: any;
}
export interface InputRecipeOptions {
    state?: InputState;
    size?: InputSize;
    fullWidth?: boolean;
}
/**
 * Generate Spectre input classes.
 *
 * Rules:
 * - Base: "sp-input"
 * - State:
 *   - "default" => no state modifier
 *   - "error"   => "sp-input--error"
 *   - "success" => "sp-input--success"
 * - Size:
 *   - "sm" => "sp-input--sm"
 *   - "md" => "sp-input--md" (default)
 *   - "lg" => "sp-input--lg"
 * - fullWidth => "sp-input--full"
 */
export declare function getInputClasses(opts?: InputRecipeOptions): string;
//# sourceMappingURL=input.d.ts.map