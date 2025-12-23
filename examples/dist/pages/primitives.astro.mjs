import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CfgvOo0p.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_HvuL5rOI.mjs';
import { $ as $$SpBadge, a as $$SpIconBox } from '../chunks/SpIconBox_B5f0GU_A.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Primitives = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Primitives;
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/buttons", label: "Buttons" },
    { href: "/forms", label: "Forms" },
    { href: "/marketing", label: "Marketing" },
    { href: "/primitives", label: "Primitives" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Primitives \u2014 Spectre UI Astro", "data-astro-cid-j5m67w33": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page" data-astro-cid-j5m67w33> <nav class="nav" data-astro-cid-j5m67w33> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} data-astro-cid-j5m67w33>${link.label}</a>`)} </nav> <header class="header" data-astro-cid-j5m67w33> <div data-astro-cid-j5m67w33> <p class="eyebrow" data-astro-cid-j5m67w33>Spectre Examples</p> <h1 data-astro-cid-j5m67w33>Primitives</h1> <p class="subtitle" data-astro-cid-j5m67w33>Badge and IconBox variants and sizes.</p> </div> </header> <section class="grid" data-astro-cid-j5m67w33> <div class="panel stack" data-astro-cid-j5m67w33> <h2 data-astro-cid-j5m67w33>Badge Variants</h2> <div class="inline" data-astro-cid-j5m67w33> ${renderComponent($$result2, "SpBadge", $$SpBadge, { "variant": "primary", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate`Primary` })} ${renderComponent($$result2, "SpBadge", $$SpBadge, { "variant": "success", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate`Success` })} ${renderComponent($$result2, "SpBadge", $$SpBadge, { "variant": "warning", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate`Warning` })} ${renderComponent($$result2, "SpBadge", $$SpBadge, { "variant": "danger", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate`Danger` })} </div> </div> <div class="panel stack" data-astro-cid-j5m67w33> <h2 data-astro-cid-j5m67w33>Badge Sizes</h2> <div class="inline" data-astro-cid-j5m67w33> ${renderComponent($$result2, "SpBadge", $$SpBadge, { "variant": "primary", "size": "sm", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate`Small` })} ${renderComponent($$result2, "SpBadge", $$SpBadge, { "variant": "primary", "size": "md", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate`Medium` })} ${renderComponent($$result2, "SpBadge", $$SpBadge, { "variant": "primary", "size": "lg", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate`Large` })} </div> </div> </section> <section class="grid" data-astro-cid-j5m67w33> <div class="panel stack" data-astro-cid-j5m67w33> <h2 data-astro-cid-j5m67w33>IconBox Variants</h2> <div class="inline" data-astro-cid-j5m67w33> ${renderComponent($$result2, "SpIconBox", $$SpIconBox, { "variant": "primary", "size": "md", "aria-hidden": "true", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-j5m67w33> <path fill="currentColor" d="M5 3h14l-1.5 13h-11z" data-astro-cid-j5m67w33></path> </svg> ` })} ${renderComponent($$result2, "SpIconBox", $$SpIconBox, { "variant": "success", "size": "md", "aria-hidden": "true", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-j5m67w33> <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" data-astro-cid-j5m67w33></path> </svg> ` })} ${renderComponent($$result2, "SpIconBox", $$SpIconBox, { "variant": "warning", "size": "md", "aria-hidden": "true", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-j5m67w33> <path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2z" data-astro-cid-j5m67w33></path> </svg> ` })} ${renderComponent($$result2, "SpIconBox", $$SpIconBox, { "variant": "danger", "size": "md", "aria-hidden": "true", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-j5m67w33> <path fill="currentColor" d="M12 2 2 22h20z" data-astro-cid-j5m67w33></path> </svg> ` })} ${renderComponent($$result2, "SpIconBox", $$SpIconBox, { "variant": "info", "size": "md", "aria-hidden": "true", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-j5m67w33> <path fill="currentColor" d="M11 9h2v10h-2zm0-4h2v2h-2z" data-astro-cid-j5m67w33></path> </svg> ` })} </div> </div> <div class="panel stack" data-astro-cid-j5m67w33> <h2 data-astro-cid-j5m67w33>IconBox Sizes</h2> <div class="inline" data-astro-cid-j5m67w33> ${renderComponent($$result2, "SpIconBox", $$SpIconBox, { "variant": "primary", "size": "sm", "aria-hidden": "true", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-j5m67w33> <circle cx="12" cy="12" r="6" fill="currentColor" data-astro-cid-j5m67w33></circle> </svg> ` })} ${renderComponent($$result2, "SpIconBox", $$SpIconBox, { "variant": "primary", "size": "md", "aria-hidden": "true", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-j5m67w33> <circle cx="12" cy="12" r="6" fill="currentColor" data-astro-cid-j5m67w33></circle> </svg> ` })} ${renderComponent($$result2, "SpIconBox", $$SpIconBox, { "variant": "primary", "size": "lg", "aria-hidden": "true", "data-astro-cid-j5m67w33": true }, { "default": ($$result3) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-j5m67w33> <circle cx="12" cy="12" r="6" fill="currentColor" data-astro-cid-j5m67w33></circle> </svg> ` })} </div> </div> </section> </div> ` })} `;
}, "/workspaces/spectre-ui-astro/examples/src/pages/primitives.astro", void 0);

const $$file = "/workspaces/spectre-ui-astro/examples/src/pages/primitives.astro";
const $$url = "/primitives";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Primitives,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
