import type { HTMLAttributes } from "astro/types";
/**
 * Card variant types exposed in the README.
 */
export type SpCardVariant = "base" | "elevated" | "flat";
/**
 * Valid HTML elements for card rendering.
 */
export type SpCardElement = "div" | "section" | "article";
type CardElementAttributes<T extends SpCardElement> = Omit<HTMLAttributes<T>, "class">;
type SpCardElementProps = ({
    as?: "div";
} & CardElementAttributes<"div">) | ({
    as: "section";
} & CardElementAttributes<"section">) | ({
    as: "article";
} & CardElementAttributes<"article">);
/**
 * Props for SpCard component.
 */
export type SpCardProps = SpCardElementProps & {
    /**
     * Visual variant of the card.
     * @default "base"
     */
    variant?: SpCardVariant;
    /**
     * Additional CSS classes.
     */
    class?: string;
};
export {};
//# sourceMappingURL=card.d.ts.map