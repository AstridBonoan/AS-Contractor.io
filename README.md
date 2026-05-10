# AS Contractor — HVAC marketing site

Mobile-first React + Tailwind site for premium HVAC and home services.

## GitHub Pages

1. In the repository **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow **Deploy to GitHub Pages** builds with `base: /AS-Contractor.io/` and publishes `dist` (including `404.html` for client-side routes).

Live URL: `https://astridbonoan.github.io/AS-Contractor.io/`

### Blank page or console 404 for `main.tsx`

That almost always means GitHub Pages is serving the **repository root** (the Vite *source* `index.html`) instead of the **built** files from `dist/`.

- In **Settings → Pages**, the source must be **GitHub Actions**, not “Deploy from a branch” with folder **`/` (root)**. The latter publishes raw `index.html`, which still points at `/src/main.tsx` — that file is never uploaded as a static script, so the app stays blank.
- After the first deploy, open the **Actions** tab and confirm **Deploy to GitHub Pages** completed. Then use the live URL above (include the `/AS-Contractor.io/` path).

To confirm the build locally: `npm run build && npm run preview`, then open the URL Vite prints (it respects `base`).

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```
