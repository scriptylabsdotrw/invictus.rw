# Invictus — Loan Management Marketing Site

The public-facing marketing website for **Invictus**, a loan management platform built for microfinance institutions, SACCOs, and lenders in Rwanda and East Africa. Institutions get their own branded portal at `yourbank.invictus.rw`.

---

## Overview

Invictus is a product of **ScriptyLabs Inc** (`scriptylabs.com`). This repository contains the marketing site — a fast, fully responsive Vite + React Router application covering the product's features, pricing, how it works, and a contact/demo request flow.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with animated hero, dashboard preview, features strip, clients marquee, and CTA |
| `/pricing` | Plan comparison table |
| `/contact` | Demo request form (Cal.com integration) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework / Bundler | Vite 8 + React Router 7 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | HugeIcons (`@hugeicons/core-free-icons`) |
| Runtime | React 19 |

---

## Project Structure

```
invictus.rw/
├── index.html
├── src/
│   ├── App.tsx               # Route definitions
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Tailwind CSS & global styles
│   ├── components/           # UI components & sections
│   │   ├── ui/               # Reusable primitives (Icon, Logo, Highlight, etc.)
│   │   └── ...
│   ├── pages/                # Page route components
│   │   ├── Home.tsx
│   │   ├── Pricing.tsx
│   │   └── Contact.tsx
│   └── lib/                  # Utilities and constants
├── public/                   # Static assets & brand logos
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

**Prerequisites:** Node.js 20+, pnpm

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site runs at `http://localhost:5173`.

```bash
# Production build & preview
pnpm build
pnpm preview
```

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

## Legal

- Privacy Policy complies with **Rwanda Law N° 058/2021** on the protection of personal data and privacy.
- All content and branding are property of **ScriptyLabs Inc**.
