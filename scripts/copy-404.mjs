import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), 'docs')
const index = join(outDir, 'index.html')
const notFound = join(outDir, '404.html')

if (!existsSync(index)) {
  console.error('copy-404: docs/index.html missing — run vite build first')
  process.exit(1)
}

copyFileSync(index, notFound)
console.log('copy-404: wrote docs/404.html (SPA fallback for GitHub Pages)')
