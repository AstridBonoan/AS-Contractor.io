import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://<user>.github.io/AS-Contractor.io/
// Build output goes to /docs for "Deploy from branch" → Branch: main, Folder: /docs
export default defineConfig({
  base: '/AS-Contractor.io/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
