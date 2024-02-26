import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      configs: `${path.resolve(__dirname, './src/configs/')}`,
      dataservices: `${path.resolve(__dirname, './src/dataservices/')}`,
      api: `${path.resolve(__dirname, './src/dataservices/api/')}`,
      slice: `${path.resolve(__dirname, './src/dataservices/slice/')}`,
      helpers: `${path.resolve(__dirname, './src/helpers/')}`,
      init: `${path.resolve(__dirname, './src/init/')}`,
      layouts: `${path.resolve(__dirname, './src/layouts/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      types: `${path.resolve(__dirname, './src/types/')}`,
      themes: `${path.resolve(__dirname, './src/themes/')}`,
      viewport: `${path.resolve(__dirname, './src/viewport/')}`,
    },
  },
});
