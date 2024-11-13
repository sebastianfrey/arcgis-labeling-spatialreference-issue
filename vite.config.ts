import { defineConfig } from "vite";

// vite.config.js
export default defineConfig({
  base: '',
  build: {
    outDir: './dist',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  }
});
