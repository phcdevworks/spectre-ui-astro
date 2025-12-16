export type IconBoxVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info";
export type IconBoxSize = "sm" | "md" | "lg";

export interface IconBoxRecipeOptions {
  variant?: IconBoxVariant;
  size?: IconBoxSize;
  rounded?: boolean;
  circle?: boolean;
}

export function getIconBoxClasses(opts: IconBoxRecipeOptions = {}): string {
  const {
    variant = "primary",
    size = "md",
    rounded = false,
    circle = false,
  } = opts;

  const classes: string[] = ["sp-iconbox"];

  const variantMap: Record<IconBoxVariant, string> = {
    primary: "sp-iconbox--primary",
    secondary: "sp-iconbox--secondary",
    success: "sp-iconbox--success",
    danger: "sp-iconbox--danger",
    warning: "sp-iconbox--warning",
    info: "sp-iconbox--info",
  };
  classes.push(variantMap[variant]);

  const sizeMap: Record<IconBoxSize, string> = {
    sm: "sp-iconbox--sm",
    md: "sp-iconbox--md",
    lg: "sp-iconbox--lg",
  };
  classes.push(sizeMap[size]);

  if (rounded) classes.push("sp-iconbox--rounded");
  if (circle) classes.push("sp-iconbox--circle");

  return classes.join(" ").trim();
}
