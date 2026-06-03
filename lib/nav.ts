export interface NavLink {
  label: string
  href: string
}

/** Primary navigation — multi-page routes (Hostinger-style structure). */
export const navLinks: NavLink[] = [
  { label: 'Product', href: '/product' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]
