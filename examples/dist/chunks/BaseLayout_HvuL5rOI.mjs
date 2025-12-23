import { c as createComponent, a as createAstro, f as renderHead, e as renderSlot, b as renderTemplate } from './astro/server_CfgvOo0p.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Spectre UI Astro Example" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderHead()}</head> <body> <main class="app-shell"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/workspaces/spectre-ui-astro/examples/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
