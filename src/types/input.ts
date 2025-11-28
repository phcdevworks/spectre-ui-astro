/**
 * Input state types matching Spectre UI design system
 */
export type SpInputState = "default" | "error" | "success";

/**
 * Input types
 */
export type SpInputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local";

/**
 * Props for SpInput component
 */
export interface SpInputProps {
  /**
   * Visual state of the input
   * @default "default"
   */
  state?: SpInputState;

  /**
   * Input type attribute
   * @default "text"
   */
  type?: SpInputType;

  /**
   * Label text
   */
  label?: string;

  /**
   * Error message to display when state is "error"
   */
  errorMessage?: string;

  /**
   * Helper text to display below input
   */
  helperText?: string;

  /**
   * ID attribute (auto-generated if not provided)
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
   * Default value attribute
   */
  defaultValue?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean;

  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the input is readonly
   * @default false
   */
  readonly?: boolean;

  /**
   * Autocomplete attribute
   */
  autocomplete?: string;

  /**
   * Min value (for number inputs)
   */
  min?: number | string;

  /**
   * Max value (for number inputs)
   */
  max?: number | string;

  /**
   * Step value (for number inputs)
   */
  step?: number | string;

  /**
   * Pattern for validation (regex)
   */
  pattern?: string;

  /**
   * Max length
   */
  maxlength?: number;

  /**
   * Min length
   */
  minlength?: number;

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
   * Aria invalid for accessibility
   */
  "aria-invalid"?: boolean;

  /**
   * Tab index
   */
  tabindex?: number;

  /**
   * Input event handler
   */
  oninput?: string;

  /**
   * Change event handler
   */
  onchange?: string;

  /**
   * Focus event handler
   */
  onfocus?: string;

  /**
   * Blur event handler
   */
  onblur?: string;
}
