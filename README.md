# Stephen Smith

Static personal website for [thestephensmith.com](https://thestephensmith.com), prepared for Git-backed Cloudflare Pages deployment.

## Cloudflare Pages settings

- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Root directory: leave blank

Every commit pushed to `main` becomes the source for a new Cloudflare Pages production deployment after the repository is connected in Cloudflare.

## Structure

- `index.html` — single-page website
- `assets/css/styles-v10.css` — site styling
- `assets/js/site.js` — navigation and interface behavior
- `assets/img/` — portrait and signature logo
- `favicon.svg`, `favicon.ico`, and `apple-touch-icon.png` — browser and device icons
- `_headers` — Cloudflare Pages security and cache headers
- `_redirects` — canonical hostname redirect
