import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CfgvOo0p.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_HvuL5rOI.mjs';
import { a as $$SpCard, $ as $$SpButton } from '../chunks/SpCard_DZCec-0B.mjs';
import { $ as $$SpInput } from '../chunks/SpInput_BuO4FPCG.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Forms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Forms;
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/buttons", label: "Buttons" },
    { href: "/forms", label: "Forms" },
    { href: "/marketing", label: "Marketing" },
    { href: "/primitives", label: "Primitives" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Forms \u2014 Spectre UI Astro", "data-astro-cid-npe3l3zs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page" data-astro-cid-npe3l3zs> <nav class="nav" data-astro-cid-npe3l3zs> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} data-astro-cid-npe3l3zs>${link.label}</a>`)} </nav> <header class="header" data-astro-cid-npe3l3zs> <div data-astro-cid-npe3l3zs> <p class="eyebrow" data-astro-cid-npe3l3zs>Spectre Examples</p> <h1 data-astro-cid-npe3l3zs>Forms</h1> <p class="subtitle" data-astro-cid-npe3l3zs>
Input states, sizes, and a composed form built with Spectre primitives.
</p> </div> </header> <section class="grid two" data-astro-cid-npe3l3zs> <div class="panel stack" data-astro-cid-npe3l3zs> <h2 data-astro-cid-npe3l3zs>Input States</h2> ${renderComponent($$result2, "SpInput", $$SpInput, { "label": "Email", "type": "email", "placeholder": "you@example.com", "helperText": "We'll never share your email.", "data-astro-cid-npe3l3zs": true })} ${renderComponent($$result2, "SpInput", $$SpInput, { "label": "Display Name", "value": "Spectre User", "state": "success", "helperText": "Looks good!", "data-astro-cid-npe3l3zs": true })} ${renderComponent($$result2, "SpInput", $$SpInput, { "label": "Password", "type": "password", "state": "error", "errorMessage": "Password must be at least 8 characters.", "data-astro-cid-npe3l3zs": true })} ${renderComponent($$result2, "SpInput", $$SpInput, { "label": "API Key", "type": "text", "value": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "state": "disabled", "disabled": true, "data-astro-cid-npe3l3zs": true })} </div> <div class="panel stack" data-astro-cid-npe3l3zs> <h2 data-astro-cid-npe3l3zs>Sizes</h2> ${renderComponent($$result2, "SpInput", $$SpInput, { "label": "Small", "size": "sm", "placeholder": "sm input", "data-astro-cid-npe3l3zs": true })} ${renderComponent($$result2, "SpInput", $$SpInput, { "label": "Medium", "size": "md", "placeholder": "md input", "data-astro-cid-npe3l3zs": true })} ${renderComponent($$result2, "SpInput", $$SpInput, { "label": "Large", "size": "lg", "placeholder": "lg input", "data-astro-cid-npe3l3zs": true })} </div> </section> <section class="panel stack" data-astro-cid-npe3l3zs> <h2 data-astro-cid-npe3l3zs>Card Form</h2> ${renderComponent($$result2, "SpCard", $$SpCard, { "variant": "elevated", "data-astro-cid-npe3l3zs": true }, { "default": ($$result3) => renderTemplate` <form class="stack" style="margin: 0;" data-astro-cid-npe3l3zs> ${renderComponent($$result3, "SpInput", $$SpInput, { "label": "Full Name", "name": "fullName", "placeholder": "Jane Doe", "required": true, "data-astro-cid-npe3l3zs": true })} ${renderComponent($$result3, "SpInput", $$SpInput, { "label": "Work Email", "type": "email", "name": "email", "placeholder": "you@company.com", "required": true, "data-astro-cid-npe3l3zs": true })} ${renderComponent($$result3, "SpInput", $$SpInput, { "label": "Phone", "type": "tel", "name": "phone", "placeholder": "+1 (555) 123-4567", "helperText": "Optional", "data-astro-cid-npe3l3zs": true })} <div class="inline" data-astro-cid-npe3l3zs> ${renderComponent($$result3, "SpButton", $$SpButton, { "variant": "primary", "type": "submit", "data-astro-cid-npe3l3zs": true }, { "default": ($$result4) => renderTemplate`Submit` })} ${renderComponent($$result3, "SpButton", $$SpButton, { "variant": "ghost", "type": "reset", "data-astro-cid-npe3l3zs": true }, { "default": ($$result4) => renderTemplate`Reset` })} </div> </form> ` })} </section> </div> ` })} `;
}, "/workspaces/spectre-ui-astro/examples/src/pages/forms.astro", void 0);

const $$file = "/workspaces/spectre-ui-astro/examples/src/pages/forms.astro";
const $$url = "/forms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Forms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
