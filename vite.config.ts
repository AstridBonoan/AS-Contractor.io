import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://<user>.github.io/AS-Contractor.io/
export default defineConfig({
  base: '/AS-Contractor.io/',
  plugins: [react(), tailwindcss()],
})
