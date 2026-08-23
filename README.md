# Invictus — Loan Management Marketing Site

The public-facing marketing website for **Invictus**, a loan management platform built for microfinance institutions, SACCOs, and lenders in Rwanda and East Africa. Institutions get their own branded portal at `yourbank.invictus.rw`.

---

## Overview

Invictus is a product of **ScriptyLabs Inc** (`scriptylabs.com`). This repository contains the marketing site — a fast, fully responsive Next.js application covering the product's features, pricing, how it works, and a contact/demo request flow.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with animated hero, dashboard preview, features strip, clients marquee, testimonials, and CTA |
| `/features` | Full capabilities showcase across four pillars |
| `/how-it-works` | Four-step onboarding flow explained |
| `/pricing` | Plan comparison table with FAQ |
| `/contact` | Demo request form |
| `/login` | Institution admin login (wired to platform API) |
| `/faq` | Standalone FAQ |
| `/privacy` | Privacy Policy — aligned with Rwanda Law N° 058/2021 |
| `/terms` | Terms & Conditions |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | HugeIcons (`@hugeicons/core-free-icons`) |
| Charts | Recharts |
| Runtime | React 19 |

---

## Project Structure

```
invictus.rw/
├── app/                    # Next.js App Router pages and layouts
│   ├── page.tsx            # Homepage
│   ├── features/
│   ├── how-it-works/
│   ├── pricing/
│   ├── contact/
│   ├── login/
│   ├── faq/
│   ├── privacy/
│   └── terms/
├── components/             # Page-level section components
│   ├── ui/                 # Reusable primitives (Icon, Logo, Highlight, etc.)
│   └── ...
├── lib/
│   └── icons.ts            # Central HugeIcons registry
├── public/
│   └── logos/              # Brand assets (full logos + icon variants)
└── tailwind.config.ts
```

---

## Getting Started

**Prerequisites:** Node.js 20+, npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site runs at `http://localhost:3000`.

```bash
# Production build
npm run build
npm start
```

---

## Design System

**Colors**

| Token | Value | Usage |
|---|---|---|
| `emerald-950` | `#022C22` | Hero backgrounds, sidebar |
| `emerald-600` | `#059669` | Primary accent |
| `orange-700` | `#C2410C` | Highlight underline accent |
| `ink` | `#0F172A` | Body text |
| `muted` | `#64748B` | Secondary text |
| `line` | `#E2E8F0` | Borders and dividers |

**Typography**

- Display / headings — Space Grotesk
- Body — Inter / SF Pro Text

**Key components**

- `Highlight` — Wraps a word in orange-700 with an artistic SVG wavy underline. Used in all page heroes.
- `DashboardMockup` — Fully custom animated banking dashboard preview. No external screenshots. Animated counters, sparklines, staggered rows.
- `PageHero` — Clean dark hero band for inner pages (title + subtitle, no extra widgets).
- `PageHeader` — Legal-page variant with an icon badge above the title.
- `Reveal` — Intersection Observer wrapper for scroll-triggered fade-ins.

---

## Brand Assets

Logo files live in `public/logos/` with light and dark variants:

```
public/logos/
├── full_logos/
│   ├── Invictus_FullLogo_EmeraldOrange_on_White.png   (light backgrounds)
│   └── Invictus_FullLogo_WhiteOrange_on_Emerald.png   (dark backgrounds)
└── icons/
    └── Invictus_Icon_WhiteOrange_on_Emerald.png
```

---

## Environment

No environment variables are required to run the marketing site locally. The institution admin login at `/login` calls the Invictus platform API — configure the endpoint there if needed.

---

## Legal

- Privacy Policy complies with **Rwanda Law N° 058/2021** on the protection of personal data and privacy.
- All content and branding are property of **ScriptyLabs Inc**.
