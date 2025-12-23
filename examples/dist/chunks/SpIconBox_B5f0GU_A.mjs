import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, b as renderTemplate } from './astro/server_CfgvOo0p.mjs';
import { getBadgeClasses, getIconBoxClasses } from '@phcdevworks/spectre-ui';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$SpBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SpBadge;
  const {
    variant,
    size,
    class: className,
    ...attrs
  } = Astro2.props;
  const classes = getBadgeClasses({ variant, size, className });
  const finalClass = className ? [classes, className].filter(Boolean).join(" ") : classes;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(finalClass, "class")}${spreadAttributes(attrs)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/workspaces/spectre-ui-astro/dist/components/SpBadge.astro", void 0);

const $$Astro = createAstro();
const $$SpIconBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SpIconBox;
  const {
    variant,
    size,
    as = "span",
    class: className,
    ...attrs
  } = Astro2.props;
  const classes = getIconBoxClasses({ variant, size, className });
  const finalClass = className ? [classes, className].filter(Boolean).join(" ") : classes;
  return renderTemplate`${as === "div" ? renderTemplate`${maybeRenderHead()}<div${addAttribute(finalClass, "class")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<span${addAttribute(finalClass, "class")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>`}`;
}, "/workspaces/spectre-ui-astro/dist/components/SpIconBox.astro", void 0);

export { $$SpBadge as $, $$SpIconBox as a };
