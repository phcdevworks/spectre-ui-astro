import { CardVariant } from '@phcdevworks/spectre-ui';

/**
 * Card variant types matching Spectre UI design system
 */
type SpCardVariant = CardVariant;
/**
 * Valid HTML elements for card rendering
 */
type SpCardElement = "div" | "section" | "article";
/**
 * Props for SpCard component
 */
interface SpCardProps {
    /**
     * Visual variant of the card
     * @default "base"
     */
    variant?: SpCardVariant;
    /**
     * HTML element to render as
     * @default "div"
     */
    as?: SpCardElement;
    /**
     * Additional CSS classes
     */
    class?: string;
    /**
     * Additional inline styles
     */
    style?: string;
    /**
     * ID attribute
     */
    id?: string;
    /**
     * Role attribute for accessibility
     */
    role?: string;
    /**
     * Aria label for accessibility
     */
    "aria-label"?: string;
    /**
     * Aria labelledby for accessibility
     */
    "aria-labelledby"?: string;
}

export type { SpCardElement, SpCardProps, SpCardVariant };
