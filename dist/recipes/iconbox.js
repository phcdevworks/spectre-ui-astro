function getIconBoxClasses(opts = {}) {
  const {
    variant = "primary",
    size = "md",
    rounded = false,
    circle = false
  } = opts;
  const classes = ["sp-iconbox"];
  const variantMap = {
    primary: "sp-iconbox--primary",
    secondary: "sp-iconbox--secondary",
    success: "sp-iconbox--success",
    danger: "sp-iconbox--danger",
    warning: "sp-iconbox--warning",
    info: "sp-iconbox--info"
  };
  classes.push(variantMap[variant]);
  const sizeMap = {
    sm: "sp-iconbox--sm",
    md: "sp-iconbox--md",
    lg: "sp-iconbox--lg"
  };
  classes.push(sizeMap[size]);
  if (rounded) classes.push("sp-iconbox--rounded");
  if (circle) classes.push("sp-iconbox--circle");
  return classes.join(" ").trim();
}
export {
  getIconBoxClasses
};
//# sourceMappingURL=iconbox.js.map