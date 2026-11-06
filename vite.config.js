import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
        where: resolve(import.meta.dirname, 'where/index.html'),
        order: resolve(import.meta.dirname, 'order/index.html'),
      },
    },
  },
});
