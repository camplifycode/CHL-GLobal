# Handoff: Project Hub — CHL Direct-to-Investor Portal

## Overview
Project Hub is a direct-to-investor platform for Camplify Holdings Limited (ASX: CHL), intended to live at **investors.chl.global**. It serves two audiences:

1. **Public investors** — browse announcements/research/webinars, register, verify their shareholding, claim shareholder rewards, ask questions.
2. **Internal IR/marketing team** — a separate admin console (`/admin`) to manage content, run campaigns, browse a CRM of investors joined to Automic register data, and analyse engagement→trading attribution.

This bundle contains a complete clickable wireframe prototype: **19 public/logged-in screens + 6 admin screens**, fully cross-linked.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended layout, flows, and behaviour. They are NOT production code to copy directly. The task is to **recreate these designs in the target codebase's environment** (per the original brief: likely Next.js/React with Supabase Auth) using its established patterns and libraries. If no environment exists yet, choose an appropriate modern stack (React/Next.js recommended given the SSR/SEO needs of a public investor site).

The `.dc.html` files use a proprietary streaming-component format: the markup between `<x-dc>` and `</x-dc>` is the design (plain HTML with inline styles + `{{ }}` template holes), and the `<script data-dc-script>` block at the bottom holds the interaction logic and placeholder data. Read them as annotated HTML wireframes. They open directly in a browser (keep the folder structure intact — they depend on `support.js` and `_ds/`).

## Fidelity
**Mid-fidelity wireframes.**
- **Canonical (follow exactly):** information architecture, navigation structure, page sections and their order, flows and gating rules, copy where it is written out (headlines, FAQ answers, reward mechanics), component choice (pill buttons, badges, cards).
- **Indicative (recreate with the real design system):** exact pixel dimensions, placeholder data ("X,XXX", "DD Mon YYYY", "Investor Name", Lorem ipsum), chart blocks (all charts are dashed placeholder boxes — implement with a real charting lib), image placeholders.
- All data marked `X`/`XX,XXX` is intentionally fake; wire to real sources listed under Integrations.

## Visual System — CHL Group Design System
Styling follows the CHL Group brand system (tokens included in `_ds/…/tokens/*.css`). Key values:

**Colors** (palette named after Australian landmarks):
- `#44B0BF` Great Barrier Reef Blue — primary brand teal (CTAs, links, highlights, active-nav underline)
- `#98DBE4` Bay of Fires Blue — light teal (logomark, accents, hover state of primary buttons)
- `#141623` Southern Forests Black — brand ink / dark navy (text, dark sections, admin sidebar, footers)
- `#F6F5F4` El Questro Cream — warm off-white page ground
- `#FFFFFF` white, `#E2E2E2` Mount Gambier Grey (borders/dividers), `#F0FAFB` Alice Springs Blue (pale teal tint surface)
- Derived: `#2E97A5` teal pressed, `#1E7B88` teal text on light, `rgba(20,22,35,.6/.4/.15)` ink opacities, `rgba(255,255,255,.75/.5/.1/.06)` on-dark opacities, `rgba(68,176,191,.15/.3)` teal tints
- Feedback: success `#2E9E6B`, warning `#E6A23C`, danger `#D9534F`
- Teal is an **accent, not a flood** — surfaces are white/cream/navy.

**Typography:** Poppins only (Google Fonts), weights 300–700. Page H1 36–56px/medium 500 with −1% letter-spacing; section H2 24–30px/semibold 600; body 14–16px/regular, line-height ~1.6; eyebrows/labels 11–12px uppercase with .12–.14em tracking. Headlines often emphasise one word in teal.

**Shape & depth:** buttons/inputs/tags = full pill (100px radius); cards 16–24px radius, 1px `#E2E2E2` border, soft diffuse shadow `0 20px 40px rgba(20,22,35,.08)` and −4px lift on hover; on navy, "glass" cards `rgba(255,255,255,.06)` + `rgba(255,255,255,.1)` border. Primary button = teal fill with **navy** text (hover → light teal); dark button = navy fill/white text; outline = hairline border. Motion 150–200ms ease; respect `prefers-reduced-motion`.

**Icons:** single-outline style, stroke 1.5–2px, rounded joins (Lucide matches). No emoji in investor-facing UI. Never recolour/filter the CHL logomark — use provided files in `assets/`.

## Navigation Structure

**Public top nav** (sticky, white, blur): Logo + "INVESTOR HUB" label | Home · Why invest · About · Announcements · Research · Webinars · Q&A · Rewards | Sign in (dark pill button). Active item = navy text + 2px teal underline. When signed in, the Sign in button becomes Avatar + "My account".

**Signed-in sub-menu** (navy strip, 46px, below main nav — appears on all logged-in pages): "MY HUB" label | Overview · My account · Account settings · Pricing data · Key dates · AGMs · Reports | Automic portal ↗ (right-aligned, external → https://portal.automic.com.au/investor/home).

**Admin sidebar** (navy, 248px fixed, sticky full-height): CHL mark + "Admin" | Dashboard · Investors · Announcements · Campaigns · Q&A moderation (stub) · Rewards admin (stub) · Analytics · Settings (stub) | "← View public hub" pinned to bottom. Active item = glass background + teal border + teal icon.

**Footer** (navy): ASX: CHL · ABN · registered office | Key dates · AGMs · Reports · Governance · Privacy · Terms · Contact IR · Admin console | "Powered by Camplify Holdings" + Acknowledgement of Country (Awabakal and Worimi peoples).

## Screens

### Public
| File | Screen | Notes |
|---|---|---|
| `Home.dc.html` | Home (signed out) | Hero "Invest in the future of RV travel" + live share price band + **brand wordmark row** (Camplify, PaulCamper, MyWay, Club Camplify, Rent a Tent — replace with real logos), dismissable rewards banner, 3-card latest content (research card is sign-in-gated), about strip with map-shape motif, signup modal (opens from "Get investor updates"; suppress re-show for 7 days) |
| `Why Invest.dc.html` | Why invest | Navy hero + 4 proof stats, "Five reasons to own CHL" numbered list, CEO quote, dual CTA cards |
| `About.dc.html` | About | Group intro, 5 business summary cards, board of directors grid, "More about CHL" shortcut strip |
| `Announcements.dc.html` | Announcements & research | Filter tabs (All / ASX / Research & articles / Recordings), feed cards with type badge, SmallCaps attribution, view counts, video thumbs; **research items show "Sign in to read" chip and route to sign-in when logged out**; sidebar: email signup, upcoming webinar, top-3 most viewed |
| `Announcement Detail.dc.html` | Announcement detail | Type badge + date, share buttons (LinkedIn/X/copy), 16:9 video embed, teal "Summary from the CHL team" callout, rich-text body, downloadable PDF attachments with sizes; sidebar: share price, related content, ask-a-question CTA; bottom email CTA |
| `Webinars.dc.html` | Webinars | Navy upcoming-webinar hero card (CEO speaker, register CTA, add-to-calendar), past webinars grid with attendance counts |
| `Webinar Registration.dc.html` | Registration confirmation | Logged-in; success card with Zoom-link note, Google/Outlook/iCal buttons |
| `QA.dc.html` | Investor Q&A | **Gated: frosted lock overlay with sign-in CTA when logged out** (prototype uses `#signedin` URL hash to simulate auth). Ask-a-question card (public/private checkbox, 5-business-day review note), All/Answered/Unanswered tabs, answered items show teal answer callout with "Answered by CHL team" badge |
| `Rewards.dc.html` | Shareholder rewards | Navy hero, two benefit cards (Owner 10% off / Hirer $200 credit), 3-step how-it-works, eligibility checker shown in both signed-in (holding, promo code, shortfall) and signed-out states, FAQ (verification nightly via Automic; sell-down handling; stacking rules) |
| `Sign In.dc.html` | Sign up / sign in | Tabbed card; sign-up: email, name, "I am a…" dropdown, consent checkbox → onboarding; sign-in: passwordless magic link (Supabase Auth) → "check your email" state |
| `Onboarding.dc.html` | Onboarding (2 steps) | Step 1: welcome + public username + consents; Step 2: "Finish account setup" — shareholder + qualified investor (s708/professional) declarations, Submit/Skip → signed-in home |
| `Key Dates.dc.html` | Key dates | Financial calendar list, next event highlighted teal |
| `AGMs.dc.html` | AGMs | Table by year: notice, chair's address, CEO's address, results, webcast link; next-AGM banner |
| `Reports.dc.html` | Reports library | Annual report cover grid, financial reports list, external/SmallCaps research (sign-in-gated) |
| `Governance.dc.html` | Corporate governance | Committee cards, charters & policies download list |
| `Management.dc.html` | Management team | Exec profile grid |

### Logged-in
| File | Screen | Notes |
|---|---|---|
| `Home Signed In.dc.html` | Home (signed in) | Navy welcome strip: "Welcome back, [name]" + 4 glass tiles (holding, share price → Pricing data, rewards status + promo code, next webinar), "New since your last visit" cards. No rewards banner/signup modal for logged-in users |
| `My Account.dc.html` | My account | Profile header + badges + Account settings button; shareholding card (shares as-of date, first-invested from Automic `minFirstInvestmentDate`, holding-over-time chart from `holding_snapshots`, links to Pricing data + Automic portal); rewards status card with promo code + shortfall; communication preferences (email toggle, frequency tabs: every announcement/weekly/monthly, investor type); engagement (webinars attended, questions asked) |
| `Account Settings.dc.html` | Account settings | Left tab rail: **Account details** (read-only name/username/email, magic-link sign-in), **Investor status** (automatic nightly email-matching against Automic register — the chosen approach; "Holding not matching?" card directs user to update their email at the Automic portal; qualified-investor certificate upload), **Notification settings** (granular toggles + unsubscribe-all) |
| `Pricing Data.dc.html` | Pricing data | Live price header; today's stats row (Open/High/Low/Last/Change/%/Volume/Value); price chart with 1M/6M/1Y/5Y tabs; paginated historical prices table (date/OHLC/volume); "Manage your holdings" card → Automic portal |

### Admin (`/admin`, auth-gated, separate route)
| File | Screen | Notes |
|---|---|---|
| `Admin Dashboard.dc.html` | Dashboard | 4 metric cards (holders on register, registered hub investors + % of register, matched + %, active reward holders); register movement + hub engagement charts; recent activity feed; matching-queue card; quick actions |
| `Admin Investors.dc.html` | Investors CRM | Search, filter pills (segment/reward status/source), bulk actions (send campaign, export CSV); sortable table: name/email, holding, value, time held, engagement bar + count, reward badge, last active, matched ✓/✗; row → investor detail |
| `Admin Investor Detail.dc.html` | Investor detail | Header with badges + "View on register" (Automic); holdings card (chart overlaid with share price, transactions table: date/buy-sell/qty/price/broker); engagement timeline (email/page/webinar/Q&A/reward events); reward status bar |
| `Admin Announcements.dc.html` | Announcement management | List (date, title, type, status draft/published/distributed, views, opens+clicks) ↔ create/edit view (title, type dropdown, rich-text body, video URL, admin summary, source URL, attachments dropzone, publish toggle, Save draft / **Publish and distribute** = hub + email + LinkedIn + X) |
| `Admin Campaigns.dc.html` | Campaign builder | 4-step wizard with pill stepper: audience segments with counts → content pick + subject + email preview → channels (Email/LinkedIn/X) + schedule → review summary + confirm-send modal |
| `Admin Analytics.dc.html` | Analytics | Headline attribution banner ("XX% of engaged investors traded within 14 days"); events-vs-volume dual-axis chart; top content by post-engagement trading; registrations by source bars (SmallCaps/direct/social/organic/HotCopper); conversion funnel (impressions→visits→signups→matched→rewarded); register health (holder trend, top-20 holders, geo + broker breakdowns) |

## Interactions & Behaviour
- **Auth model:** passwordless magic link (Supabase Auth). The prototype simulates the signed-in state with separate pages (`Home.dc.html` vs `Home Signed In.dc.html`) and a `#signedin` hash on Q&A — in production this is one page with real session state.
- **Gating rules:** Q&A requires sign-in. SmallCaps research/articles require sign-in. ASX announcements, webinars listings, and all company pages are public.
- **Rewards mechanics:** 500 shares per Camplify membership (10% off, per van); 500+ shares → $200/yr hiring credit; both can stack if holding covers memberships + 500. Holdings verified **nightly** against the Automic register by email match; discounts adjust automatically on sell-down; promo code displayed with copy-to-clipboard.
- **Holding mismatch path:** direct user to update their registry email at https://portal.automic.com.au/investor/home (external, new tab). All "manage your holding" actions go to Automic — the hub never edits register data.
- **Email signup modal** on first visit (dismissable, 7-day suppression). **Rewards banner** on every page for logged-out visitors (dismissable).
- **Publish and distribute** (admin): one action = hub publish + email to opted-in investors + LinkedIn + X post.
- Hover: cards lift −4px with soft shadow; buttons lighten (teal→light teal); press scales ~0.97.
- Responsive: not designed (desktop 1240–1440px only). Stack columns and collapse nav/sidebar to hamburger on mobile.

## State Management (per original brief)
- Investor profile: name, email, username (immutable), investor type (owner/hirer/both/investor-only), consents, notification preferences (6 granular toggles + unsubscribe-all).
- Holding: current shares, value, first-invested date, nightly `holding_snapshots` series, matched boolean, transactions (from Automic API).
- Rewards: status (active/partial/none/revoked), memberships covered, promo code, shortfall-to-next-tier.
- Content: type (ASX/research/interview/recording), status (draft/published/distributed), video URL, admin summary, attachments, source URL, view counts.
- Q&A: question, public/private flag, status (pending/answered), answer.
- Campaigns: audience segment, content ref, subject, channels, schedule, sent stats.

## Integrations
- **Automic** — share registry: register data, top holders, transactions, `minFirstInvestmentDate`; investor self-service portal at https://portal.automic.com.au/investor/home
- **SmallCaps** — research content source + referral tracking
- **Supabase Auth** — passwordless magic-link auth
- Share price feed (ASX delayed quote) for the live widgets and pricing-data page
- Email (campaigns + notifications), LinkedIn + X posting for distribution

## Assets
- `assets/CHL-Group-Wide.svg` — primary logo lockup (light backgrounds)
- `assets/CHL-Mark.svg` — standalone Bay-of-Fires-blue map-shape mark (used on navy: admin sidebar, report covers). **Do not recolour or CSS-filter brand marks.**
- Brand logos for Camplify / PaulCamper / MyWay / Club Camplify / Rent a Tent are rendered as Poppins wordmark placeholders on the home page — replace with real logo files.
- All photos/thumbnails/charts are placeholders.
- Full CHL logo suite + brand photography exists in the CHL Group Design System (`_ds/` contains tokens + component bundle used by the prototypes).

## Files
- 25 `*.dc.html` design files (listed in the tables above)
- `support.js` — prototype runtime (required to open the .dc.html files; not for production)
- `_ds/chl-group-design-system-…/` — design tokens (`tokens/*.css`), compiled component bundle, global styles
- `assets/` — logo files
