'use client'

import Image from 'next/image'
import Reveal from './ui/Reveal'

type Accent = 'orange' | 'gold' | 'sky' | 'emerald'

interface PartnerCard {
  /** Logo image. Falls back to the monogram if omitted. */
  logo?: string
  logoW?: number
  logoH?: number
  initials: string
  name: string
  badge: string
  text: string
  accent: Accent
}

// National systems Invictus integrates with, plus our data-protection certification.
const compliance: PartnerCard[] = [
  {
    logo: '/partners/NLA.png',
    logoW: 1254,
    logoH: 1254,
    initials: 'NLA',
    name: 'National Land Authority',
    badge: 'Integration',
    text: 'Verify land titles and collateral directly against the national land registry.',
    accent: 'orange',
  },
  {
    logo: '/partners/arms_Rwanda.png',
    logoW: 879,
    logoH: 960,
    initials: 'NIDA',
    name: 'NIDA',
    badge: 'Integration',
    text: "Confirm customer identity in real time against Rwanda's national ID system.",
    accent: 'gold',
  },
  {
    logo: '/partners/logo.jpg',
    logoW: 4142,
    logoH: 2023,
    initials: 'DPO',
    name: 'Data Controller & Data Processor',
    badge: 'Certification',
    text: "Certified to collect, store, and process data under Rwanda's data protection law.",
    accent: 'sky',
  },
  {
    logo: '/partners/transunion-logo.png',
    logoW: 440,
    logoH: 280,
    initials: 'TU',
    name: 'TransUnion',
    badge: 'Integration',
    text: 'Pull credit reports and scores to assess borrowers before you lend.',
    accent: 'emerald',
  },
]

// Monogram placeholder colours, used until a real logo is supplied.
const monogram: Record<Accent, string> = {
  orange: 'bg-orange-50 text-orange-600',
  gold: 'bg-amber-50 text-amber-600',
  sky: 'bg-sky-50 text-sky-700',
  emerald: 'bg-emerald-50 text-emerald-700',
}

// The little pixel/gradient block in each card's top-right corner.
const pixel: Record<Accent, string> = {
  orange: 'bg-orange-400',
  gold: 'bg-amber-300',
  sky: 'bg-sky-300',
  emerald: 'bg-emerald-400',
}

// Descending staircase pattern → the faded pixel look. '' = empty cell.
const cells: string[] = [
  '', '', 'opacity-90', 'opacity-100',
  '', 'opacity-70', 'opacity-100', 'opacity-50',
  'opacity-80', 'opacity-60', 'opacity-40', '',
]

function CornerBlock({ accent }: { accent: Accent }) {
  return (
    <div aria-hidden className="absolute right-6 top-6 grid grid-cols-4 gap-[3px]">
      {cells.map((o, i) => (
        <span
          key={i}
          className={`h-2.5 w-2.5 rounded-[2px] ${o ? `${pixel[accent]} ${o}` : 'bg-transparent'}`}
        />
      ))}
    </div>
  )
}

function Card({ card }: { card: PartnerCard }) {
  return (
    <div className="relative p-8 lg:p-10">
      <CornerBlock accent={card.accent} />

      {/* Logo (real) or monogram placeholder */}
      <div className="relative flex h-12 items-center">
        {card.logo ? (
          <Image
            src={card.logo}
            alt={`${card.name} logo`}
            width={card.logoW ?? 160}
            height={card.logoH ?? 40}
            className="h-12 w-auto object-contain object-left"
          />
        ) : (
          <span
            className={`inline-flex h-12 min-w-12 items-center justify-center rounded-lg px-2.5 text-sm font-extrabold ${monogram[card.accent]}`}
          >
            {card.initials}
          </span>
        )}
      </div>

      {/* Name + badge */}
      <div className="mt-7 flex items-start justify-between gap-3">
        <h3 className="text-base font-bold leading-snug text-ink">{card.name}</h3>
        <span className="mt-0.5 shrink-0 rounded bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
          {card.badge}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{card.text}</p>
    </div>
  )
}

export default function Partners() {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal>
          <div className="border border-line">
            {/* Heading row */}
            <div className="p-8 lg:p-10">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
                  Integrations &amp; Compliance
                </span>
                <h2 className="display mt-5 text-4xl text-ink sm:text-5xl">
                  Connected to Rwanda&apos;s core systems
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                  Invictus integrates directly with the national identity, land, and credit systems
                  your institution relies on — and is certified to handle your data.
                </p>
              </div>
            </div>

            {/* Cards row — hairline dividers between cells, like the reference */}
            <div className="grid border-t border-line divide-y divide-line lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {compliance.map((c) => (
                <Card key={c.name} card={c} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
