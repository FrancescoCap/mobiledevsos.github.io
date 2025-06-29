import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist', // Questa è la cartella di output di default di Vite
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
