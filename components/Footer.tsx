import Link from 'next/link'
import Logo from './ui/Logo'
import Icon, { type IconSvgElement } from './ui/Icon'
import Button from './ui/Button'
import {
  ArrowUpRight01Icon,
  Call02Icon,
  Location01Icon,
  Mail01Icon,
  WhatsappIcon,
} from '@hugeicons/core-free-icons'
import { CONTACT_EMAIL, CONTACT_PHONE, LOGIN_URL, WHATSAPP_URL } from '@/lib/site'

type FooterLinkItem = { label: string; href: string; icon?: IconSvgElement }

const columns: { title: string; links: FooterLinkItem[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Request a demo', href: '/contact' },
      { label: 'Log in', href: LOGIN_URL },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'ScriptyLabs', href: 'https://scriptylabs.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: Mail01Icon },
      { label: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}`, icon: Call02Icon },
      { label: 'WhatsApp', href: WHATSAPP_URL, icon: WhatsappIcon },
      { label: 'Kigali, Rwanda', href: '/contact', icon: Location01Icon },
    ],
  },
]

function FooterLink({ item }: { item: FooterLinkItem }) {
  const external = item.href.startsWith('http')
  const cls = 'group inline-flex items-center gap-2.5 text-[15px] text-zinc-400 transition-colors hover:text-white'
  const content = (
    <>
      {item.icon && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-white/5 text-primary-400 transition-colors group-hover:bg-primary-400/15">
          <Icon icon={item.icon} size={15} />
        </span>
      )}
      <span>{item.label}</span>
      {external && !item.icon && (
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
          <Icon icon={ArrowUpRight01Icon} size={13} />
        </span>
      )}
    </>
  )
  if (item.href.startsWith('/')) {
    return (
      <Link href={item.href} className={cls}>
        {content}
      </Link>
    )
  }
  return (
    <a href={item.href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {content}
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-1000 text-zinc-400">
      {/* Columns */}
      <div className="mx-auto max-w-[1344px] px-6 pb-4 pt-16 sm:px-10 sm:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Invictus home" className="-ml-4 -mt-5 block w-fit">
              <Logo light className="h-24" />
            </Link>
            <p className="-mt-2 max-w-xs text-[15px] leading-relaxed text-zinc-400">
              Loan management for microfinance institutions, SACCOs and lenders in Rwanda.
            </p>
            <div className="mt-8 max-w-[15rem]">
              <Button href="/contact" variant="light" full>
                Request a demo
              </Button>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className={col.title === 'Contact' ? 'col-span-2 sm:col-span-1' : undefined}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">{col.title}</h3>
              <ul className="mt-6 space-y-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink item={l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width wordmark */}
      <div className="overflow-hidden px-2 pt-6 sm:px-4" aria-hidden="true">
        <svg viewBox="0 0 1000 176" className="block w-full select-none" role="presentation">
          <text
            x="500"
            y="168"
            textAnchor="middle"
            textLength="990"
            lengthAdjust="spacingAndGlyphs"
            fontSize="218"
            fontWeight="900"
            fill="rgb(255 255 255 / 0.07)"
            style={{ fontFamily: 'var(--font-geist), sans-serif', letterSpacing: '-0.02em' }}
          >
            INVICTUS
          </text>
        </svg>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-[1344px] flex-col gap-3 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>© {year} Invictus. All rights reserved.</span>
        <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms
          </Link>
          <span>
            Product of{' '}
            <a
              href="https://scriptylabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition-colors hover:text-primary-300"
            >
              ScriptyLabs Inc
            </a>
          </span>
        </span>
      </div>
    </footer>
  )
}
