import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

/// <reference types="vitest/config" />

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('swiper-'),
        },
      },
    }),
  ],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    coverage: {
      thresholds: { statements: 5, functions: 5, branches: 5, lines: 5 }, // TODO update to 80%...
    },
  },
});
