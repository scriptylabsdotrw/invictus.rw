"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./ui/Logo";

const socials: { label: string; href: string; path: string }[] = [
  {
    label: "X (Twitter)",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Request Demo", href: "/contact" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Customers & Accounts", href: "/features" },
      { label: "Deposits & Transactions", href: "/features" },
      { label: "Branded Portals", href: "/features" },
      { label: "Reports & Ledger", href: "/features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Core Banking", href: "/features" },
      { label: "For SACCOs", href: "/features" },
      { label: "For Microfinance", href: "/features" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "demo@invictus.rw", href: "/contact" },
      { label: "+250 780 226 666", href: "/contact" },
      { label: "Kigali, Rwanda", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/login") return null;

  return (
    <footer className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="h-px w-full bg-brand-orange/50" />

      <div className="container-px relative z-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo light className="h-24" />
            <p className="mt-5 text-sm leading-relaxed text-emerald-100/70">
              The multi-tenant core banking platform for microfinance
              institutions, SACCOs, banks, and lenders.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`${s.label} (placeholder)`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-emerald-100 transition-colors hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-emerald-100/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="pointer-events-none mt-10 select-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1000 230"
            className="block w-full"
            role="presentation"
          >
            <text
              x="0"
              y="188"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fontSize="230"
              className="font-display font-bold"
              style={{ fill: "rgba(255,255,255,0.06)" }}
            >
              INVICTUS
            </text>
          </svg>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 -mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-emerald-100/70 sm:justify-start">
            <span>© 2026 Invictus. All rights reserved.</span>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link
              href="/cookies"
              className="transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
            <Link
              href="/acceptable-use"
              className="transition-colors hover:text-white"
            >
              Acceptable Use
            </Link>
          </div>

          <p className="flex items-center gap-2 text-sm text-emerald-100/70">
            Product of
            <a
              href="https://scriptylabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold tracking-tight text-white transition-colors hover:text-brand-orange"
            >
              ScriptyLabs Inc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
