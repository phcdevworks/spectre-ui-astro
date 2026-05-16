import type { InputRecipeOptions } from "@phcdevworks/spectre-ui";

type SpInputElement =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "main"
  | "form"
  | "fieldset"
  | "li"
  | "nav";

interface SpInputBaseProps extends InputRecipeOptions {
  as?: SpInputElement;
  class?: string;
  disabled?: boolean;
  loading?: boolean;
  focused?: boolean;
  hovered?: boolean;
  active?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling";
  [key: string]: unknown;
}

type SpInputAssociatedProps = {
  id: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
};

type SpInputStandaloneProps = {
  id?: string;
  label?: undefined;
  helperText?: undefined;
  errorMessage?: undefined;
};

export type SpInputProps = SpInputBaseProps &
  (SpInputAssociatedProps | SpInputStandaloneProps);

export function resolveSpInputAccessibility({
  id,
  label,
  helperText,
  errorMessage,
  "aria-describedby": ariaDescribedby,
}: Pick<
  SpInputProps,
  "id" | "label" | "helperText" | "errorMessage" | "aria-describedby"
>) {
  const requiresStableId = Boolean(label || helperText || errorMessage);

  if (requiresStableId && !id) {
    throw new Error(
      "SpInput requires an explicit `id` when using `label`, `helperText`, or `errorMessage` so SSR markup remains deterministic.",
    );
  }

  const helperId = id && helperText ? `${id}-helper` : undefined;
  const errorId = id && errorMessage ? `${id}-error` : undefined;

  // Follow the rendering logic in SpInput.astro: errorMessage suppresses helperText.
  const activeGeneratedId = errorId ?? helperId;
  const mergedDescribedBy = [ariaDescribedby, activeGeneratedId]
    .filter(Boolean)
    .join(" ");

  return {
    inputId: id,
    helperId,
    errorId,
    describedBy: mergedDescribedBy || undefined,
  };
}
