import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/recipes/**/*.ts"],
  format: ["esm"],
  dts: false,
  sourcemap: true,
  clean: true,
  target: "esnext",
  bundle: false,
  splitting: false,
  outDir: "dist",
  external: ["astro", "@phcdevworks/spectre-ui"],
});
