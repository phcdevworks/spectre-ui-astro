import { defineConfig } from 'astro/config'

// Keep local `file:..` package installs resolved through the symlinked package path
// so the example app exercises the adapter the same way CI installs it.
export default defineConfig({
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  }
})
