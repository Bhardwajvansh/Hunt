import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/linkedin': {
        target: 'https://api.generect.com',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  },
})
