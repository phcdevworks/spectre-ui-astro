export type BadgeVariant = "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeRecipeOptions {
  variant?: BadgeVariant;
  size?: BadgeSize;
  outlined?: boolean;
  pill?: boolean;
}

export function getBadgeClasses(opts: BadgeRecipeOptions = {}): string {
  const {
    variant = "default",
    size = "md",
    outlined = false,
    pill = false,
  } = opts;

  const classes: string[] = ["sp-badge"];

  const variantMap: Record<BadgeVariant, string> = {
    default: "sp-badge--default",
    primary: "sp-badge--primary",
    secondary: "sp-badge--secondary",
    success: "sp-badge--success",
    danger: "sp-badge--danger",
    warning: "sp-badge--warning",
    info: "sp-badge--info",
  };
  classes.push(variantMap[variant]);

  const sizeMap: Record<BadgeSize, string> = {
    sm: "sp-badge--sm",
    md: "sp-badge--md",
    lg: "sp-badge--lg",
  };
  classes.push(sizeMap[size]);

  if (outlined) classes.push("sp-badge--outlined");
  if (pill) classes.push("sp-badge--pill");

  return classes.join(" ").trim();
}
