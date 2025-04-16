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
        "rewrites": [
          {
            "source": "/api/linkedin/:path*",
            "destination": "https://api.generect.com/api/linkedin/:path*"
          }
        ]
      },
      '/api/linkedin/email_finder': {
        target: 'https://api.generect.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/linkedin\/email_finder/, '/api/linkedin/email_finder')
      }
    }
  },
})