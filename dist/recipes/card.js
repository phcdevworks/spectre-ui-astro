function getCardClasses(opts = {}) {
  const {
    variant = "elevated",
    interactive = false,
    padded = false,
    fullHeight = false
  } = opts;
  const classes = ["sp-card"];
  const variantMap = {
    elevated: "sp-card--elevated",
    outline: "sp-card--outline",
    ghost: "sp-card--ghost"
  };
  classes.push(variantMap[variant]);
  if (interactive) classes.push("sp-card--interactive");
  if (padded) classes.push("sp-card--padded");
  if (fullHeight) classes.push("sp-card--full");
  return classes.join(" ").trim();
}
export {
  getCardClasses
};
//# sourceMappingURL=card.js.map