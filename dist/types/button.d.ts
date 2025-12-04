import type { HTMLAttributes } from "astro/types";
import type { ButtonSize, ButtonVariant } from "@phcdevworks/spectre-ui";
/**
 * Button variant types matching Spectre UI design system, plus "success"
 * which is provided via utility classes.
 */
export type SpButtonVariant = ButtonVariant | "success";
/**
 * Button size types
 */
export type SpButtonSize = ButtonSize;
interface ButtonElementProps extends Omit<HTMLAttributes<"button">, "class" | "type"> {
    as?: "button";
    type?: "button" | "submit" | "reset";
}
interface AnchorElementProps extends Omit<HTMLAttributes<"a">, "class" | "href" | "target" | "rel"> {
    as: "a";
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string;
}
interface SpanElementProps extends Omit<HTMLAttributes<"span">, "class"> {
    as: "span";
}
interface SpButtonBaseProps {
    /**
     * Visual variant of the button
     * @default "primary"
     */
    variant?: SpButtonVariant;
    /**
     * Size of the button
     * @default "md"
     */
    size?: SpButtonSize;
    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the button is in a loading state
     * @default false
     */
    loading?: boolean;
    /**
     * Whether the button should take the full width of its container
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Additional CSS classes
     */
    class?: string;
}
export type SpButtonProps = SpButtonBaseProps & (ButtonElementProps | AnchorElementProps | SpanElementProps);
export {};
//# sourceMappingURL=button.d.ts.map