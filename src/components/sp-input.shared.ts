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
  | "fieldset";

interface SpInputBaseProps extends InputRecipeOptions {
  as?: SpInputElement;
  class?: string;
  disabled?: boolean;
  loading?: boolean;
  [key: string]: any;
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
}: Pick<SpInputProps, "id" | "label" | "helperText" | "errorMessage">) {
  const requiresStableId = Boolean(label || helperText || errorMessage);

  if (requiresStableId && !id) {
    throw new Error(
      "SpInput requires an explicit `id` when using `label`, `helperText`, or `errorMessage` so SSR markup remains deterministic.",
    );
  }

  const helperId = id && helperText ? `${id}-helper` : undefined;
  const errorId = id && errorMessage ? `${id}-error` : undefined;

  return {
    inputId: id,
    helperId,
    errorId,
    describedBy: errorId ?? helperId,
  };
}
