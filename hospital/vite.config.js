import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://carlz-hospital-server-karthigeyans-projects-5bc7c4d8.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
