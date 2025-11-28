import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/types/button.ts", "src/types/card.ts", "src/types/input.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist/types",
  external: ["astro", "@phcdevworks/spectre-ui"],
});
