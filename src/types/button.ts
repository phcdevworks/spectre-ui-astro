/**
 * Button variant types matching Spectre UI design system
 */
export type SpButtonVariant = "primary" | "secondary" | "ghost" | "success" | "danger";

/**
 * Button size types
 */
export type SpButtonSize = "sm" | "md" | "lg";

/**
 * Button state types
 */
export type SpButtonState = "default" | "disabled" | "loading";

/**
 * Valid HTML elements for button rendering
 */
export type SpButtonElement = "button" | "a" | "span";

/**
 * Props for SpButton component
 */
export interface SpButtonProps {
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
   * HTML element to render as
   * @default "button"
   */
  as?: SpButtonElement;

  /**
   * Href for anchor elements (only when as="a")
   */
  href?: string;

  /**
   * Target for anchor elements (only when as="a")
   */
  target?: "_blank" | "_self" | "_parent" | "_top";

  /**
   * Rel for anchor elements (only when as="a")
   */
  rel?: string;

  /**
   * Button type attribute (only when as="button")
   * @default "button"
   */
  type?: "button" | "submit" | "reset";

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
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Additional CSS classes
   */
  class?: string;

  /**
   * Additional inline styles
   */
  style?: string;

  /**
   * Aria label for accessibility
   */
  "aria-label"?: string;

  /**
   * Aria describedby for accessibility
   */
  "aria-describedby"?: string;

  /**
   * ID attribute
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Value attribute
   */
  value?: string;

  /**
   * Tab index
   */
  tabindex?: number;

  /**
   * Click handler attribute
   */
  onclick?: string;
}
