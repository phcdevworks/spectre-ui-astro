function getInputClasses(opts = {}) {
  const { state = "default", size = "md", fullWidth = false } = opts;
  const classes = ["sp-input"];
  const sizeMap = {
    sm: "sp-input--sm",
    md: "sp-input--md",
    lg: "sp-input--lg"
  };
  classes.push(sizeMap[size]);
  if (state === "error") classes.push("sp-input--error");
  if (state === "success") classes.push("sp-input--success");
  if (fullWidth) classes.push("sp-input--full");
  return classes.join(" ").trim();
}
export {
  getInputClasses
};
//# sourceMappingURL=input.js.map