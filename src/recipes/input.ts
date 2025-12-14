export type InputState = "default" | "error" | "success";
export type InputSize = "sm" | "md" | "lg";

export interface InputRecipeOptions {
  state?: InputState;
  size?: InputSize;
  fullWidth?: boolean;
}

export function getInputClasses(opts: InputRecipeOptions = {}): string {
  const { state = "default", size = "md", fullWidth = false } = opts;

  const classes: string[] = ["sp-input"];

  const sizeMap: Record<InputSize, string> = {
    sm: "sp-input--sm",
    md: "sp-input--md",
    lg: "sp-input--lg",
  };
  classes.push(sizeMap[size]);

  if (state === "error") classes.push("sp-input--error");
  if (state === "success") classes.push("sp-input--success");

  if (fullWidth) classes.push("sp-input--full");

  return classes.join(" ").trim();
}
