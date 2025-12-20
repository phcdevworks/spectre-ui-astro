function getBadgeClasses(opts = {}) {
  const {
    variant = "default",
    size = "md",
    outlined = false,
    pill = false
  } = opts;
  const classes = ["sp-badge"];
  const variantMap = {
    default: "sp-badge--default",
    primary: "sp-badge--primary",
    secondary: "sp-badge--secondary",
    success: "sp-badge--success",
    danger: "sp-badge--danger",
    warning: "sp-badge--warning",
    info: "sp-badge--info"
  };
  classes.push(variantMap[variant]);
  const sizeMap = {
    sm: "sp-badge--sm",
    md: "sp-badge--md",
    lg: "sp-badge--lg"
  };
  classes.push(sizeMap[size]);
  if (outlined) classes.push("sp-badge--outlined");
  if (pill) classes.push("sp-badge--pill");
  return classes.join(" ").trim();
}
export {
  getBadgeClasses
};
//# sourceMappingURL=badge.js.map