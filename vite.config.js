// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: './dist',
    rollupOptions: {
      output: {
        assetFileNames: "airchicago-web/[name].[ext]",
        chunkFileNames: "[name].[ext]",
        entryFileNames: "airchicago-web/[name].js",
      },
    },
  },
});