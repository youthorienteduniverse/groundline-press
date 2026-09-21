# Groundline Press — Website

Static website for **groundlinepress.com**

Book: *Why AI Makes Work Harder* — PDF ebook, delivered via Payhip.

---

## Before going live — replace these three placeholders

Open `js/main.js` and update the CONFIG object at the top:

```js
const CONFIG = {
  CHECKOUT_URL:      "PAYHIP_CHECKOUT_URL_HERE",         // India ₹299
  CHECKOUT_URL_INTL: "PAYHIP_CHECKOUT_URL_INTL_HERE",   // International $5.99
  FREE_CHAPTER_URL:  "FREE_CHAPTER_URL_HERE",            // Chapter 1 PDF link
  ...
};
```

All buy/chapter buttons across the site use these variables — change once, updates everywhere.

---

## Deployment

### GitHub Pages

1. Create a repository (e.g. `groundline-press`)
2. Push all files to `main` (the files at the ZIP root — no subfolder needed)
3. Settings → Pages → Source: `main` / `/ (root)`
4. `CNAME` file is already present — point your domain DNS:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME `www` → `<your-github-username>.github.io`

### Netlify / Cloudflare Pages

- Connect repo, no build command needed, publish directory: `/`
- Set custom domain in platform settings

---

## File structure

```
groundline-press/
├── index.html              Homepage (main landing page)
├── about.html              About Groundline Press
├── books.html              Catalogue
├── privacy.html            Privacy Policy
├── terms.html              Terms of Sale
├── refund.html             Refund Policy
├── CNAME                   groundlinepress.com
├── favicon.svg             Site favicon (approved mark)
│
├── css/
│   └── styles.css          All styles — single shared file
│
├── js/
│   └── main.js             All JS + CONFIG variables — single shared file
│
└── assets/
    ├── logo-mark.svg        Approved Groundline Press mark (burgundy)
    ├── logo-mark-white.svg  Approved mark — white variant for dark bg
    ├── book-cover.webp      Flat ebook cover (catalogue pages)
    ├── book-cover.jpg       Flat cover JPEG fallback
    ├── book-mockup.webp     3-D hardcover presentation (homepage hero)
    ├── book-mockup.jpg      3-D mockup JPEG fallback
    └── og-image.webp        Open Graph preview image (1200 × 630)
```

---

## Asset usage

| Asset | Used where |
|-------|-----------|
| `book-mockup.webp` | Homepage hero only |
| `book-cover.webp` | Books/About catalogue pages |
| `logo-mark.svg` | Header (all pages) |
| `logo-mark-white.svg` | Footer (all pages) |
| `favicon.svg` | Browser tab |
| `og-image.webp` | Social share preview |

---

## Remaining placeholders (launch blockers)

| File | Key | Replace with |
|------|-----|-------------|
| `js/main.js` | `PAYHIP_CHECKOUT_URL_HERE` | Payhip product URL — India ₹299 |
| `js/main.js` | `PAYHIP_CHECKOUT_URL_INTL_HERE` | Payhip URL — International $5.99 |
| `js/main.js` | `FREE_CHAPTER_URL_HERE` | Direct link to Chapter 1 PDF |

---

© 2026 Groundline Press
