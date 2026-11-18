# "The Shutter" — Personal Portfolio of MD. Zeaul Hoque Zihad

A fast, typography-driven, static portfolio built with **Astro**, **TypeScript**, and **Vanilla CSS**.

The aesthetic concept is inspired by Bangladeshi shop-front motifs: ribbed roll-up steel shutters with stencil-painted details, and the *khata* (ledger).

---

## Architecture & Features

- **Framework:** Astro 5 (Static Site Generation)
- **Zero Heavy Runtime:** Pure CSS layout & animations, no external animation libraries. Total client JS is under 2 KB inline.
- **Design System:** Ink (`#0b0b0a`), Bone (`#ece7dc`), Muted (`#8d887d`), and a single Amber accent (`#ffb000`) for the Live status indicator, underlines, and stencil highlights.
- **Typography:** Instrument Serif (display), Inter Tight (body), JetBrains Mono (ledger/meta), Big Shoulders Stencil Display (shutter paint).
- **Single Source of Truth:** All content (bio, education, stack, projects, contact channels) lives in `src/content/site.json`.
- **Accessibility:** Semantic landmarks, skip-to-content link, WCAG AAA contrast ratio, keyboard-operable ledger rows (`aria-expanded`), and full `prefers-reduced-motion` compliance.

---

## Project Structure

```text
/
├── public/
│   └── favicon.svg           # Minimal typographic SVG favicon
├── src/
│   ├── content/
│   │   └── site.json         # All text & project content
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout, SEO meta, JSON-LD Person schema, grain overlay
│   ├── components/
│   │   ├── ShutterIntro.astro# 1.1s roll-up shutter (gated via sessionStorage)
│   │   ├── HeaderNav.astro   # Scroll-aware sticky navigation
│   │   ├── Hero.astro        # High-impact serif headline and metadata
│   │   ├── About.astro       # Two-column narrative, education, and stack
│   │   ├── WorkLedger.astro  # Hairline tabular ledger with expandable detail panels
│   │   └── FooterShutter.astro # Scroll-linked steel shutter with stencil contacts
│   ├── styles/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   └── shutter.css
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Local Development & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates production static HTML and assets in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## How to Edit Content (`src/content/site.json`)

To update any copy, projects, or links, open `src/content/site.json`:
- **Bio & Summary:** Update `person.bioParagraphs` and `person.headline`.
- **Add or Edit Projects:** Add a new item to the `work` array with:
  ```json
  {
    "id": "project-slug",
    "index": "06",
    "title": "Project Title",
    "summary": "One-line description",
    "stack": "Tech 1, Tech 2",
    "status": "Live",
    "statusType": "live",
    "year": "2026",
    "url": "https://example.com",
    "bullets": [
      "Key engineering contribution 1",
      "Key engineering contribution 2"
    ]
  }
  ```
- **Update Contact Info:** Update `contact.phone`, `contact.email`, `contact.github`, or `contact.linkedin`.

---

## Deploying to Cloudflare Pages

### Option A: Git Integration (Recommended)
1. Push this repository to GitHub.
2. In the **Cloudflare Dashboard**, navigate to **Compute (Workers & Pages)** > **Create** > **Pages** > **Connect to Git**.
3. Select your repository and configure build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**.

### Option B: Direct CLI Deployment via Wrangler
```bash
npx wrangler pages deploy dist --project-name=zihad-portfolio
```
