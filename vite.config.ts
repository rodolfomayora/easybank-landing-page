import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    svgr(),
  ],
  resolve: {
    alias: {
      '#components': '/src/components',
      '#assets': '/src/assets',
      '#styles': '/src/styles/utils',
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
  }
})