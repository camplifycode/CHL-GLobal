# CHL Group — Design System

A brand design system for **CHL Group** (Camplify Holdings Limited, ASX: CHL) — the parent company of **Camplify**, **PaulCamper** and **MyWay**. CHL is a global adventure-travel technology group operating peer-to-peer RV-sharing marketplaces and travel insurance across Australia, New Zealand, the UK, Spain, Germany, Austria and the Netherlands.

> **Purpose:** To make the outdoors accessible to all through innovative and scalable tech solutions.
> **Positioning:** Serious and trustworthy for investors, yet adventurous and warm — "innovative, empowering and adventurous… not rigid or overly corporate."

This system exists so designers and agents can produce on-brand CHL interfaces, decks, and marketing assets quickly and consistently.

---

## Sources this system was built from

All ground-truth inputs (the reader may not have access — stored here for reference):

- **Brand Guidelines 2023** — `CHL Brand Book.pdf` (57pp). Definitive source for colors, typography scale, UI kit, patterns, illustrations, imagery. Named palette, Poppins type scale, the "map shape" motif, outline-illustration style.
- **Logo Book** — `CHL Logo Book.pdf`. Logo variants and usage.
- **`CHL Group - Brand identity_.docx`** — company description, purpose/vision/mission, values, brand stories (Camplify, PaulCamper, MyWay).
- **`QA _ CHL Brand idenity.docx`** — the rebrand discovery questionnaire: audiences, tone, competitors, colour/typography direction, website intent. Extremely useful for CONTENT FUNDAMENTALS.
- **GitHub repo** — `github.com/camplifycode/CHL-GLobal` (CHL Investor Hub static site). Real logos (`public/logos/*`), photography (`public/images/*`), and a full investor-relations `index.html` that this system's UI kit recreates. Live brand tokens confirmed here: teal `#44B0BF`, light teal `#98DBE4`, navy `#141623`, cream `#F6F5F4`.
- **Website:** https://chl.global

Logo & photo assets imported into `assets/`.

---

## The three brands

- **Camplify** — the group's flagship: one of the world's largest, most-trusted peer-to-peer van/motorhome-sharing marketplaces. Founded in Newcastle, NSW by Justin Hales. AU · NZ · UK · ES. Warm, playful, "g'day" voice.
- **PaulCamper** — Berlin-based European van-sharing platform (grown from a single campervan named Paul). DE · AT · NL.
- **MyWay** — the group's global travel-insurance division (Managing General Agency), underpinning both marketplaces.

CHL Group is the **parent brand**: more corporate and investor-facing than its subsidiaries, but still adventurous. Note: CHL's own visual identity does **not** draw on PaulCamper's identity, and only lightly echoes Camplify (shared Poppins typeface, a kindred blue/teal).

---

## CONTENT FUNDAMENTALS — how CHL writes

**Voice:** Confident, warm, plain-spoken. Optimistic and adventurous without being gimmicky. For the CHL parent brand specifically, dial *up* credibility and calm authority (the audience is investors, prospective staff and finance media) while keeping a human, outdoorsy warmth. Never rigid or "overly corporate."

**Person & address:** Speaks as **"we"** (the group) and addresses the reader as **"you."** Camplify's own voice is chattier and first-person ("Hey. We're Camplify."); CHL parent copy is a notch more measured but still personable.

**Casing:** Sentence case for headlines and UI ("Numbers that tell our story", "Why van owners should invest"). Eyebrows/kickers and tiny labels are UPPERCASE with wide tracking ("PERFORMANCE", "NEWS & MEDIA"). Australian/British spelling — **colour, organise, centre, programme** — not US spelling.

**Headlines:** Short, declarative, often two lines, frequently with **one word emphasised in teal** ("future of *adventure* travel"). Big and bold — the design language leans on large type.

**Numbers as proof:** Copy leans on hard metrics stated crisply — "$315m+ paid to owners", "29,300+ vans", "4.5m+ nights under the stars", "7 countries". Format the figure large and highlight the unit/suffix in teal.

**Tone examples (real):**
- "Adventure travel reimagined." (brand line candidate)
- "More people outside, more often. That's the dream."
- "There's nothing we love more than driving headfirst into new experiences."
- "Invest in the future of adventure travel."
- "You're already part of the journey. Now own a piece of it."

**Tagline:** Not finally landed. Working candidates: *"Adventure travel reimagined,"* *"Whatever drives you."* Do not present any single tagline as official.

**Emoji:** Used sparingly and informally in Camplify-flavoured contexts and flag chips (🚐 🏕️ 🇦🇺). For serious investor/CHL-parent material, **avoid emoji** — prefer the outline icon set and the map motif. When in doubt, leave them out.

**Acknowledgement of Country:** CHL was founded in Newcastle, NSW, on the traditional Country of the Awabakal and Worimi peoples — an acknowledgement appears in footers.

---

## VISUAL FOUNDATIONS

**Overall vibe:** Serious-but-adventurous. Cool teal + deep navy do the corporate/trustworthy work; warm, natural lifestyle photography (vans, roads, families, the outdoors) supplies the adventure and humanity. Lots of air, big confident headings, soft rounded geometry.

**Colour** (palette named after Australian natural landmarks):
- **Great Barrier Reef Blue `#44B0BF`** — primary brand teal. CTAs, links, highlights, the teal "subscribe" band.
- **Bay of Fires Blue `#98DBE4`** — light teal. The logomark fill, accents, chips, illustration strokes.
- **Southern Forests Black `#141623`** — brand ink / near-black navy. Text on light, and the signature dark sections.
- **El Questro Cream `#F6F5F4`** — warm off-white ground for calm sections.
- **Whitsundays White `#FFFFFF`**, **Mount Gambier Grey `#E2E2E2`** (borders/dividers), **Alice Springs Blue `#F0FAFB`** (pale teal tint surface).
- Usage: teal is an **accent**, not a flood — most surfaces are white / cream / navy, with teal for emphasis and action. On dark navy, text is white at 75%/50% opacity and hairlines are white at ~10%.

**Typography:** **Poppins** only (shared with Camplify & MyWay; sourced from Google Fonts). Scale from the guidelines: Display 84px/120% Medium · Headline 60px/130% Medium · Title 30px/140% SemiBold · Body 18px/140% Regular · Label 16px/140% Medium. Headings tighten letter-spacing slightly (−1 to −2%); body is comfortable (~140–165%). Weights 300–700.

**Backgrounds:** Solid grounds, not gradients — white, cream, or deep navy sections alternate to create rhythm. Photography is used full-bleed or masked into the **map shape**. Subtle radial teal glows appear only on dark navy heroes (very low opacity). No noisy textures. Avoid heavy gradient fills.

**The map-shape motif:** CHL's core design element is a **folded-map / journey shape** (the same form as the logomark — an irregular parallelogram evoking a folded paper map and "endless possibilities"). Uses: mask a photo into it, lay sharp map-lines/paths over an image, put contrasting text on a filled shape, or use a small filled shape as an accent behind an important message. Implemented as the `MapShape` component.

**Illustrations:** Single-weight **outline** style only (thin line, teal), never filled/isometric. The outline globe (`assets/logos/Globe.svg`) exemplifies CHL's "holistic, global" story. An internal world map (`Internal Map - Blue/Light`) is used **internally only** — playful, not for external comms. The client explicitly disliked cheap isometric drawings.

**Iconography:** Simple, minimal, **single-outline** icons (stroke ~1.5–2px, rounded joins) — chosen deliberately "because we use big, bold text, we keep our icons simple." See ICONOGRAPHY below.

**Imagery:** Real library photography conveying travelling and open possibility — nature, roads, families, friends, outdoor activities, and the vans. Warm and natural in tone (sunlight, timber, cream interiors, earthy textiles) — a deliberate warm counterpoint to the cool teal/navy UI. Show diversity of people and life stages. See `assets/images/`.

**Corner radii:** Rounded and friendly. Buttons, inputs, tags, chips = full **pill** (100px). Cards = 16–24px. Small tiles/icon wells = 12–14px. Avatars/dots = full circle.

**Cards:** White (or glass-on-navy) surfaces, ~20px radius, a 1px hairline border (`#E2E2E2` on light, white-10% on dark), and a **soft, low, diffuse** shadow (`0 20px 40px rgba(20,22,35,.08)` on hover). Interactive cards **lift −4px** on hover. On dark sections, cards are translucent "glass" (`rgba(255,255,255,.04)` + `backdrop-filter: blur(10px)`) and gain a **teal border** on hover.

**Buttons & states:** Pill-shaped. Primary = teal fill with **navy text** (not white) → **lighter (Bay of Fires) on hover**. Dark = navy fill / white text → slightly lighter navy on hover. Outline = transparent, hairline border → teal border + tint fill on hover. Press state **shrinks to ~0.97** (icon buttons 0.94). Focus shows a **teal ring** (`0 0 0 4px rgba(68,176,191,.3)`).

**Hover / press language:** Hover generally *lightens* (teal→light-teal, navy→lighter-navy) and lifts cards; it does not darken. Links darken slightly to a deep teal. Press = subtle scale-down. Motion is quick and gentle — 150–200ms, standard ease; a slow ease-out for card lifts. The only looping animation in the brand is a soft "live" pulse dot on status tags. Respect `prefers-reduced-motion`.

**Transparency & blur:** Reserved for dark navy contexts — glass cards, a blurred sticky nav (`rgba(20,22,35,.95)` + blur), teal glass chips (`rgba(68,176,191,.15)` fill / `.3` border).

**Layout rules:** 1440px desktop design width; generous 80px section padding, 60px gutters (24px on mobile). Sticky top nav. Content measure ~720px. 4px spacing grid. Metric bands use a 4-up grid with hairline dividers.

---

## ICONOGRAPHY

- **Style:** simple, minimal, **single-outline** line icons — thin, consistent stroke (~1.5–2px), rounded caps/joins, no fills, no duotone. This is a deliberate brand rule so icons stay quiet next to the big, bold headings.
- **In practice:** the brand's own materials and the Investor Hub site use inline **outline SVG** icons (feather/Lucide-esque: home, globe, users, file, calendar, mail, download, trending-up, clock, shield). There is **no bundled icon font**.
- **Recommendation for this system:** use **[Lucide](https://lucide.dev)** (successor to Feather) via CDN — it matches CHL's outline weight and rounded-join style almost exactly. This is a **substitution** for a closest-match set, since the source ships no icon library of its own. *(Flagged — see CAVEATS.)* Keep stroke width 1.5–2 and color icons in navy or teal.
- **Illustrations vs icons:** larger conceptual art (globe, maps) uses the same single-outline language at a bigger scale — see `assets/logos/Globe.svg`.
- **Emoji as icons:** avoid in CHL-parent/investor material; acceptable only in casual Camplify-flavoured chips (flags, 🚐). Do not use unicode dingbats as UI icons.
- **Brand marks are not icons:** never redraw the logomark; use the provided files in `assets/logos/` or the `MapShape` component for the motif.

---

## Assets

- `assets/logos/` — full CHL logo suite (SVG + PNG): wide, stacked, icon-only, filled, outline, with/without tagline; plus the outline **Globe** illustration, the **Internal Map** (internal use only), and the standalone tagline lockup. Colours: mark in Bay of Fires Blue `#98DBE4`, wordmark in Southern Forests Black `#141623`.
- `assets/images/` — real CHL/Camplify library photography (van interiors, retro RVs, aerial/drone road shots). Warm, natural, lifestyle.
- **No new logo was created** — all marks are the client's own. Where a mark isn't available, render "CHL Group" in Poppins.

---

## Component index

Reusable React primitives (compiled to `window.CHLGroupDesignSystem_a19f76`). Each has a `.d.ts` contract and `.prompt.md` usage note.

- **`components/core/`** — **Button**, **IconButton**, **Badge**, **Card**, **Avatar**, **Eyebrow**, **Stat**
- **`components/forms/`** — **TextField**
- **`components/navigation/`** — **Tabs**
- **`components/feedback/`** — **Newsletter**
- **`components/brand/`** — **MapShape** (signature folded-map motif)

## Foundations (Design System tab)

Specimen cards live throughout the repo, tagged `@dsCard` and grouped: **Colors**, **Type**, **Spacing**, **Brand**, **Components**. Tokens are defined in `tokens/` and shipped via `styles.css`.

## UI kits

- **`ui_kits/investor_hub/`** — interactive recreation of the CHL Group Investor Hub website (hero + share price, key metrics, news, why-invest, subscribe, investor tools, brands, team). Composes the components above.

## Slides

- **`slides/`** — CHL-branded sample slide templates (title, section, metrics, quote, brands) at 1280×720.

## Files at a glance

- `styles.css` — global entry (import this one file). Pulls in `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `base.css`.
- `tokens/` — all design tokens (CSS custom properties).
- `components/` — reusable primitives (`.jsx` + `.d.ts` + `.prompt.md` + card).
- `ui_kits/`, `slides/` — full-surface recreations & templates.
- `assets/` — logos, illustrations, photography.
- `SKILL.md` — Agent-Skill wrapper for using this system in Claude Code.

---

*© Camplify Holdings Limited (ASX: CHL). Brand assets belong to CHL Group.*
