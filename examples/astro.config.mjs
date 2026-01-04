import { defineConfig } from "astro/config";

export default defineConfig({
  srcDir: "./src",
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
