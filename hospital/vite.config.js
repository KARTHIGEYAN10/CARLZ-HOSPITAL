import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // Load env variables (so vite.config.js can see them)

  return {
    plugins: [
      tailwindcss(),
      react(),
    ],
    server: {
      proxy: {
        '/api': {
          target:"http://localhost:3000", // ✅ use env
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
