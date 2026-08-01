import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from the root of the custom domain (hazit.co.uk).
// public/CNAME tells GitHub Pages which domain to serve on.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
