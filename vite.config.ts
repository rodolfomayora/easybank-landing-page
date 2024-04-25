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
      '#assets': '/src/assets',
      '#components': '/src/components',
      '#config': '/src/config/',
      '#helpers': '/src/helpers/',
      '#icons': '/src/assets/icons',
      '#layouts': '/src/layouts',
      '#pages': '/src/pages',
      '#styles': '/src/styles/utils',
      '#utils': '/src/utils/',
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
  base: '/easybank-landing-page', // for Github Pages
  // base: '/', // for Nginx with Docker
})
