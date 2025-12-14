export type CardVariant = "elevated" | "outline" | "ghost";

export interface CardRecipeOptions {
  variant?: CardVariant;
  interactive?: boolean; // hover/focus styles
  padded?: boolean;      // apply default padding
  fullHeight?: boolean;
}

export function getCardClasses(opts: CardRecipeOptions = {}): string {
  const {
    variant = "elevated",
    interactive = false,
    padded = true,
    fullHeight = false,
  } = opts;

  const classes: string[] = ["sp-card"];

  const variantMap: Record<CardVariant, string> = {
    elevated: "sp-card--elevated",
    outline: "sp-card--outline",
    ghost: "sp-card--ghost",
  };
  classes.push(variantMap[variant]);

  if (interactive) classes.push("sp-card--interactive");
  if (padded) classes.push("sp-card--padded");
  if (fullHeight) classes.push("sp-card--full");

  return classes.join(" ").trim();
}
