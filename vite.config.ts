import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'app': path.resolve(__dirname, './app'),
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    historyApiFallback: true,
    fs: {
      strict: false,
      allow: ['..']
    }
  },
});
