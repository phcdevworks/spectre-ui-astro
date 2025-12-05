import type { HTMLAttributes } from "astro/types";
/**
 * Input state values exposed in the README.
 */
export type SpInputState = "default" | "focus" | "invalid" | "valid" | "disabled";
/**
 * Supported input types.
 */
export type SpInputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local";
/**
 * Props for SpInput component.
 */
export interface SpInputProps extends Omit<HTMLAttributes<"input">, "class" | "type"> {
    /**
     * Visual state of the input.
     * @default "default"
     */
    state?: SpInputState;
    /**
     * Input type attribute.
     * @default "text"
     */
    type?: SpInputType;
    /**
     * Input label text.
     */
    label?: string;
    /**
     * Error message to display when state is "invalid".
     */
    errorMessage?: string;
    /**
     * Helper text to display below the input.
     */
    helperText?: string;
    /**
     * Additional CSS classes.
     */
    class?: string;
}
//# sourceMappingURL=input.d.ts.map