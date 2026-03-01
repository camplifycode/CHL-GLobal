# CHL Group – Investor Hub

A static investor relations website for **Camplify Holdings Limited (ASX: CHL)**, designed to inform retail investors and drive email list sign-ups for shareholder updates.

Live URL: `https://chl-investor-hub.vercel.app` *(update once deployed)*

---

## What's on the page

| Section | Purpose |
|---|---|
| **Hero** | Investment value proposition, share price card, CEO video, and inline email subscribe form |
| **Key Metrics** | $315m+ paid to owners, 29,300+ vans, 4.5m+ nights, 7 countries |
| **News & Media** | Latest news fed from the Camplify blog |
| **Why Van Owners Should Invest** | Conversion section targeting Camplify's active owner community |
| **Subscribe** | Email sign-up with preference checkboxes (ASX, CEO video, quarterly reports) |
| **Investor Tools** | ASX announcements, shareholding login, prospectus, calendar, email alerts, governance |
| **Our Brands** | Camplify, PaulCamper, MyWay |
| **Meet the Team** | Tabbed section — Board of Directors and Executive Team with photos and bios |
| **Footer** | Navigation, brand links, acknowledgement of country |

---

## Tech stack

- Pure HTML & CSS — no framework, no build step
- [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts (matches CHL brand guidelines)
- Deployed via [Vercel](https://vercel.com) with automatic deploys on push to `main`

---

## Project structure

```
chl-investor-hub/
├── index.html      ← full page (all HTML, CSS and JS in one file)
├── vercel.json     ← Vercel config (clean URLs, security headers)
└── README.md       ← this file
```

---

## Local preview

No install required. Either:

**Option A — open directly in browser:**
```
Double-click index.html
```

**Option B — local server (recommended for testing):**
```bash
npx serve .
```
Then open `http://localhost:3000`

---

## Deploying to Vercel

This repo is connected to Vercel. Every push to `main` triggers an automatic redeploy.

**Manual deploy steps (first time):**
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import this repository
4. Leave all settings as default (Vercel auto-detects static HTML)
5. Click **Deploy**

---

## Custom domain

To point a domain like `investors.chl.global` at this site:

1. Vercel dashboard → your project → **Settings → Domains**
2. Add `investors.chl.global`
3. Copy the DNS records Vercel provides
4. Add them in your domain registrar (Cloudflare, GoDaddy, etc.)
5. SSL is provisioned automatically — no extra config needed

---

## Things to update before going live

### 1. Share price
The share price in the hero and ticker bar is currently hardcoded. To make it live, replace with a call to a financial data API such as:
- [Yahoo Finance (unofficial)](https://finance.yahoo.com/quote/CHL.AX)
- [Alpha Vantage](https://www.alphavantage.co/) (free tier available)
- [Open Exchange Rates / Marketstack](https://marketstack.com/)

### 2. CEO video
The video card is a placeholder. Replace the `video-thumb` div with a real YouTube or Vimeo embed:
```html



```

### 3. Subscribe form
The subscribe form currently doesn't post anywhere. Wire it to your email platform:
- **Mailchimp** — replace the `<form>` action with your Mailchimp embed URL
- **Loops** — use their API endpoint
- **ConvertKit / Kit** — use their embed form code

### 4. Team headshots
Photos use the most likely WordPress media library URL pattern. If any fail to load, they fall back to teal initials avatars. Verify the exact filenames in your WordPress media library (`chl.global/wp-admin/upload.php`) and update the `src` attributes in the team section if needed.

### 5. News cards
News is currently hardcoded with three articles. To pull live posts from the Camplify blog, fetch from the WordPress REST API and render dynamically:
```
https://www.camplify.com.au/wp-json/wp/v2/posts?categories=[NEWS_CATEGORY_ID]&per_page=3
```

---

## Brand reference

Full brand guidelines (colours, typography, patterns, logo usage) are documented in the CHL Brand Guidelines 2023 PDF.

| Token | Value |
|---|---|
| Primary teal | `#44B0BF` |
| Light teal | `#98DBE4` |
| Dark navy | `#141623` |
| Cream | `#F6F5F4` |
| Font | Poppins (Regular, SemiBold, Bold) |

---

## Maintainer

CHL Group internal team. For questions contact [chl.group@mail.com](mailto:chl.group@mail.com).

---

*© 2025 Camplify Holdings Limited (ASX: CHL)*
