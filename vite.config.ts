import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('firebase')) {
              return 'firebase';
            }
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
})
