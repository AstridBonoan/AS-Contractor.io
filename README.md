# AS Contractor — HVAC marketing site

Mobile-first React + Tailwind site for premium HVAC and home services.

## GitHub Pages (deploy from branch)

1. Build and refresh the static site in **`docs/`** (this folder is what GitHub serves):

   ```bash
   npm install
   npm run build
   ```

2. Commit and push the updated **`docs/`** folder whenever you change the site.

3. In the repository **Settings → Pages**:
   - **Source**: Deploy from a branch  
   - **Branch**: `main`  
   - **Folder**: `/docs`  

Live URL: `https://astridbonoan.github.io/AS-Contractor.io/`

### Blank page or 404 for `main.tsx`

You are looking at an old deploy or the wrong folder. The live site must come from the **built** files under **`docs/`** (with `/assets/*.js`), not the repo-root `index.html` that references `/src/main.tsx`.

### Wrong asset paths

`vite.config.ts` sets `base: '/AS-Contractor.io/'` so URLs match a **project** Pages site. If you rename the repository, update `base` and `basename` usage (see `src/main.tsx` and `src/components/Seo.tsx`) to match.

## Local development

```bash
npm install
npm run dev
```

Preview the production build (serves `docs/`):

```bash
npm run build
npm run preview
```
