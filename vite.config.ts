
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
    
      ],
    },
  },
  base : 'https://Kiranjeet28.github.io/Portfolio',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
