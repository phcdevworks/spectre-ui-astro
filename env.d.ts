/// <reference types="astro/client" />

declare module "*.astro" {
  import type { AstroComponentFactory } from "astro/runtime";
  const component: AstroComponentFactory;
  export default component;
}
