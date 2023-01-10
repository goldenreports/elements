import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@lib': 'src'
    }
  },
  build: {
    lib: {
      name: 'GoldenReportsElements',
      fileName: 'elements',
      entry: 'src/elements.ts',
      formats: ['es'],
    },
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external: [
        /^(@)?lit/,
        /^(@)?codemirror/,
        /^@cls/,
        /^@clr/,
        'interactjs',
        'yaml'
      ]
    },
  },
  server: {
    open: true
  }
});
