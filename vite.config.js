import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.jsx",
    })
  ],
  optimizeDeps: {
    include: ['@mui/icons-material'],
  },
  server: {
    host: true,
    port: 80
  }
})