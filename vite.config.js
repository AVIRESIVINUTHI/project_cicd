import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Local dev server
  },
  build: {
    outDir: 'dist', // Vite default build output
  },
  base: '/', // important for Tomcat WAR context
})