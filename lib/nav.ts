export interface NavLink {
  label: string
  href: string
}

/** Primary navigation — multi-page routes (Hostinger-style structure). */
export const navLinks: NavLink[] = [
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]
