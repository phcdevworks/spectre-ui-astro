import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CfgvOo0p.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_HvuL5rOI.mjs';
import { $ as $$SpBadge, a as $$SpIconBox } from '../chunks/SpIconBox_B5f0GU_A.mjs';
import { $ as $$SpButton, a as $$SpCard } from '../chunks/SpCard_DZCec-0B.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Marketing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Marketing;
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/buttons", label: "Buttons" },
    { href: "/forms", label: "Forms" },
    { href: "/marketing", label: "Marketing" },
    { href: "/primitives", label: "Primitives" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Marketing \u2014 Spectre UI Astro", "data-astro-cid-lagil3am": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page" data-astro-cid-lagil3am> <nav class="nav" data-astro-cid-lagil3am> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} data-astro-cid-lagil3am>${link.label}</a>`)} </nav> <header class="header" data-astro-cid-lagil3am> <div data-astro-cid-lagil3am> <p class="eyebrow" data-astro-cid-lagil3am>Spectre Examples</p> <h1 data-astro-cid-lagil3am>Marketing</h1> <p class="subtitle" data-astro-cid-lagil3am>Hero and feature layouts with cards, badges, and icon boxes.</p> </div> </header> <section class="hero" data-astro-cid-lagil3am> <div class="feature" data-astro-cid-lagil3am> ${renderComponent($$result2, "SpBadge", $$SpBadge, { "variant": "warning", "data-astro-cid-lagil3am": true }, { "default": ($$result3) => renderTemplate`New release` })} <h2 class="hero-title" data-astro-cid-lagil3am>Launch faster with Spectre</h2> <p class="hero-copy" data-astro-cid-lagil3am>
Prebuilt tokens, UI recipes, and Astro adapters so you can ship consistent experiences quickly.
</p> <div class="actions" data-astro-cid-lagil3am> ${renderComponent($$result2, "SpButton", $$SpButton, { "variant": "primary", "size": "lg", "data-astro-cid-lagil3am": true }, { "default": ($$result3) => renderTemplate`Start free` })} ${renderComponent($$result2, "SpButton", $$SpButton, { "variant": "ghost", "size": "lg", "data-astro-cid-lagil3am": true }, { "default": ($$result3) => renderTemplate`View docs` })} </div> </div> ${renderComponent($$result2, "SpCard", $$SpCard, { "variant": "elevated", "data-astro-cid-lagil3am": true }, { "default": ($$result3) => renderTemplate` <div class="feature" data-astro-cid-lagil3am> <h3 class="card-title" data-astro-cid-lagil3am> ${renderComponent($$result3, "SpIconBox", $$SpIconBox, { "variant": "primary", "size": "sm", "aria-hidden": "true", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-lagil3am> <path fill="currentColor" d="M5 3h14l-1.5 13h-11zM9 21h6v-2H9z" data-astro-cid-lagil3am></path> </svg> ` })}
Reliability
</h3> <p data-astro-cid-lagil3am>Backed by type-safe recipes and a single CSS entry point.</p> <div class="badge-row" data-astro-cid-lagil3am> ${renderComponent($$result3, "SpBadge", $$SpBadge, { "variant": "primary", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate`Tokens` })} ${renderComponent($$result3, "SpBadge", $$SpBadge, { "variant": "success", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate`Recipes` })} ${renderComponent($$result3, "SpBadge", $$SpBadge, { "variant": "danger", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate`Adapters` })} </div> </div> ` })} </section> <section class="grid three" data-astro-cid-lagil3am> ${renderComponent($$result2, "SpCard", $$SpCard, { "variant": "elevated", "data-astro-cid-lagil3am": true }, { "default": ($$result3) => renderTemplate` <div class="feature" data-astro-cid-lagil3am> ${renderComponent($$result3, "SpIconBox", $$SpIconBox, { "variant": "primary", "size": "sm", "aria-hidden": "true", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-lagil3am> <path fill="currentColor" d="M12 2 2 7l10 5 10-5zm-7.5 9.5L12 17l7.5-5.5V17L12 22 4.5 17z" data-astro-cid-lagil3am></path> </svg> ` })} <h3 class="card-title" data-astro-cid-lagil3am>Composable</h3> <p data-astro-cid-lagil3am>Build cards, CTAs, and forms from the same primitives.</p> ${renderComponent($$result3, "SpButton", $$SpButton, { "variant": "primary", "size": "sm", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate`Learn more` })} </div> ` })} ${renderComponent($$result2, "SpCard", $$SpCard, { "variant": "outline", "data-astro-cid-lagil3am": true }, { "default": ($$result3) => renderTemplate` <div class="feature" data-astro-cid-lagil3am> ${renderComponent($$result3, "SpIconBox", $$SpIconBox, { "variant": "success", "size": "sm", "aria-hidden": "true", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-lagil3am> <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" data-astro-cid-lagil3am></path> </svg> ` })} <h3 class="card-title" data-astro-cid-lagil3am>Accessible</h3> <p data-astro-cid-lagil3am>Semantic markup with labeled inputs and aria-aware controls.</p> ${renderComponent($$result3, "SpButton", $$SpButton, { "variant": "ghost", "size": "sm", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate`Accessibility` })} </div> ` })} ${renderComponent($$result2, "SpCard", $$SpCard, { "variant": "ghost", "data-astro-cid-lagil3am": true }, { "default": ($$result3) => renderTemplate` <div class="feature" data-astro-cid-lagil3am> ${renderComponent($$result3, "SpIconBox", $$SpIconBox, { "variant": "warning", "size": "sm", "aria-hidden": "true", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate` <svg class="icon" viewBox="0 0 24 24" data-astro-cid-lagil3am> <path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2z" data-astro-cid-lagil3am></path> </svg> ` })} <h3 class="card-title" data-astro-cid-lagil3am>Transparent</h3> <p data-astro-cid-lagil3am>Clear separation of tokens, UI recipes, and Astro wrappers.</p> ${renderComponent($$result3, "SpButton", $$SpButton, { "variant": "secondary", "size": "sm", "data-astro-cid-lagil3am": true }, { "default": ($$result4) => renderTemplate`View roadmap` })} </div> ` })} </section> </div> ` })} `;
}, "/workspaces/spectre-ui-astro/examples/src/pages/marketing.astro", void 0);

const $$file = "/workspaces/spectre-ui-astro/examples/src/pages/marketing.astro";
const $$url = "/marketing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Marketing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
