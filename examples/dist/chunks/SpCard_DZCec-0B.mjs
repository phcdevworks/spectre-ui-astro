import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, b as renderTemplate } from './astro/server_CfgvOo0p.mjs';
import { getButtonClasses, getCardClasses } from '@phcdevworks/spectre-ui';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$SpButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SpButton;
  const {
    as = "button",
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    disabled = false,
    iconOnly = false,
    class: className,
    ...rest
  } = Astro2.props;
  const isDisabled = disabled || loading;
  const classes = getButtonClasses({
    variant,
    size,
    fullWidth,
    loading,
    disabled: isDisabled,
    iconOnly
  });
  const finalClass = [classes, className].filter(Boolean).join(" ");
  delete rest.class;
  if (as === "a" && isDisabled) {
    delete rest.href;
    rest.tabindex = -1;
  }
  return renderTemplate`${as === "a" ? renderTemplate`${maybeRenderHead()}<a${addAttribute(finalClass, "class")}${addAttribute(isDisabled ? "true" : void 0, "aria-disabled")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</a>` : as === "span" ? renderTemplate`<span${addAttribute(finalClass, "class")}${addAttribute(isDisabled ? "true" : void 0, "aria-disabled")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`<button${addAttribute(finalClass, "class")}${addAttribute(isDisabled, "disabled")}${addAttribute(rest.type ?? "button", "type")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/workspaces/spectre-ui-astro/dist/components/SpButton.astro", void 0);

const $$Astro = createAstro();
const $$SpCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SpCard;
  const {
    variant = "elevated",
    interactive = false,
    padded = true,
    fullHeight = false,
    as = "div",
    class: className,
    ...rest
  } = Astro2.props;
  const classes = getCardClasses({ variant, interactive, padded, fullHeight });
  const finalClass = [classes, className].filter(Boolean).join(" ");
  delete rest.class;
  return renderTemplate`${as === "section" ? renderTemplate`${maybeRenderHead()}<section${addAttribute(finalClass, "class")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</section>` : as === "article" ? renderTemplate`<article${addAttribute(finalClass, "class")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</article>` : renderTemplate`<div${addAttribute(finalClass, "class")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "/workspaces/spectre-ui-astro/dist/components/SpCard.astro", void 0);

export { $$SpButton as $, $$SpCard as a };
