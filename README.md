# mohitsolanki.dev

Personal portfolio and landing page for Mohit Solanki, built with [Astro](https://astro.build).

## Stack

- **Astro** (static output, zero client-side JS)
- **TypeScript** (strict mode)
- **Plain CSS** with CSS custom properties (no Tailwind, no UI library)
- **Self-hosted fonts**: Instrument Serif + Instrument Sans via `@fontsource`
- **Astro Content Collections** for blog posts

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## Editing Content

**All copy, links, and data live in one file:**

```
src/data/site.ts
```

Open it and replace every `[bracketed placeholder]` with your real content:

| Field | What to fill in |
|-------|----------------|
| `role` | Your job title, e.g. `"Senior Software Engineer"` |
| `location` | City and country, e.g. `"Bangalore, India"` |
| `description` | One sentence for search engines / social previews |
| `hero.eyebrow` | Short label shown above the headline |
| `hero.headlineEm` | The italic word/phrase in your hero headline |
| `hero.headlineEnd` | The rest of the headline after the italic part |
| `hero.body` | 1–2 sentence intro paragraph |
| `about.statement` | 2–4 sentence bio in the About section |
| `about.facts` | Based in / Currently / Open to |
| `projects[]` | Your real project titles, categories, years, and URLs |
| `contact.email` | Your email address |
| `socials[]` | Replace `href: '#'` with your real profile URLs |

### Adding Blog Posts

Posts live in `src/content/writing/`. Create a new `.md` file:

```md
---
title: "Your Post Title"
date: "2026-10-09"
readingTime: "5 min read"
---

Your post content here in Markdown.
```

The filename becomes the URL slug. For example, `my-post.md` → `/writing/my-post`.

Posts are sorted by `date` (newest first) on both the homepage and the `/writing` index.

---

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro       # HTML shell, head, SEO, skip link
├── components/
│   ├── Header.astro           # Site name + nav
│   ├── Hero.astro             # Hero section
│   ├── About.astro            # About + facts grid
│   ├── Work.astro             # Selected projects list
│   ├── Writing.astro          # Latest 3 posts (from content collection)
│   ├── Contact.astro          # Full-bleed dark contact section
│   └── Footer.astro           # Semantic footer landmark
├── pages/
│   ├── index.astro            # Home page
│   └── writing/
│       ├── index.astro        # All posts index
│       └── [slug].astro       # Individual post page
├── content/
│   ├── config.ts              # Content collection schema
│   └── writing/
│       ├── first-post.md
│       ├── second-post.md
│       └── third-post.md
├── data/
│   └── site.ts                # All content and links (edit this!)
└── styles/
    └── global.css             # Design tokens, resets, shared utilities
public/
└── favicon.svg                # Monogram placeholder — swap with your own
```

---

## Deploying

### Vercel (recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Astro** — Vercel detects it automatically
4. Click **Deploy**

### Netlify
1. Run `npm run build` locally
2. Drag and drop the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

Or connect your GitHub repo → Build command: `npm run build` → Publish directory: `dist`

### Cloudflare Pages
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) → Create a project
2. Connect your GitHub repo
3. Build command: `npm run build`
4. Build output directory: `dist`

### GitHub Pages
Add this workflow to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v4
        with:
          folder: dist
```

Also set `base` in `astro.config.mjs` if deploying to a subdirectory (e.g., `base: '/repo-name'`).

---

## Customising the Design

All design tokens (colors, fonts) are CSS custom properties in `src/styles/global.css`. Change them once and they propagate everywhere:

```css
:root {
  --paper: #F4F4F0;   /* page background */
  --ink: #111111;     /* primary text + borders */
  --muted: #55554F;   /* secondary text */
  --accent: #2A3FD6;  /* hover color */
  /* ... */
}
```
