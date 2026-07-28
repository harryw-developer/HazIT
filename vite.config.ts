import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://<user>.github.io/HazIT/ in production,
// and from the root during local development.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/HazIT/' : '/',
  plugins: [react(), tailwindcss()],
}))
