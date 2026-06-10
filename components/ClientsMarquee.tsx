import Image from 'next/image'
import type { Client, ClientAccent } from '../data/clients'
import { clientsRowOne, clientsRowTwo } from '../data/clients'
import Reveal from './ui/Reveal'

const pixel: Record<ClientAccent, string> = {
  orange: 'bg-orange-400',
  gold:   'bg-amber-300',
  sky:    'bg-sky-300',
  emerald:'bg-emerald-400',
}

const cells: string[] = [
  '', '', 'opacity-90', 'opacity-100',
  '', 'opacity-70', 'opacity-100', 'opacity-50',
  'opacity-80', 'opacity-60', 'opacity-40', '',
]

function CornerBlock({ accent }: { accent: ClientAccent }) {
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

function ClientCard({ client }: { client: Client }) {
  const { name, logo, badge, accent, website } = client

  const inner = (
    <div className="group relative w-80 shrink-0 overflow-hidden rounded-2xl border border-line bg-white p-8 transition-colors duration-300 hover:border-emerald-200">
      <CornerBlock accent={accent} />

      {/* Logo */}
      <div className="relative flex h-12 items-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={180}
          height={48}
          className="h-12 w-auto object-contain object-left"
        />
      </div>

      {/* Name + badge */}
      <div className="mt-7 flex items-start justify-between gap-3">
        <h3 className="text-base font-bold leading-snug text-ink">{name}</h3>
        <span className="mt-0.5 shrink-0 rounded bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
          {badge}
        </span>
      </div>

      {/* Website domain */}
      {website && (
        <p className="mt-3 text-sm text-muted/60">
          {new URL(website).hostname.replace('www.', '')}
        </p>
      )}
    </div>
  )

  if (website) {
    return (
      <a href={website} target="_blank" rel="noopener noreferrer" aria-label={name}>
        {inner}
      </a>
    )
  }

  return inner
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: Client[]
  direction: 'left' | 'right'
  duration: number
}) {
  const doubled = [...items, ...items]
  const animation = direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'

  return (
    <div className="mask-fade-x overflow-hidden">
      <div
        className={`flex w-max items-stretch gap-5 ${animation} hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((client, i) => (
          <ClientCard key={`${client.name}-${i}`} client={client} />
        ))}
      </div>
    </div>
  )
}

export default function ClientsMarquee() {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">Trusted by institutions</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl">
              Financial institutions growing with Invictus
            </h2>
            <p className="lead mt-6">
              From banks and microfinance institutions to SACCOs and cooperatives across Rwanda and
              East Africa.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="space-y-5">
        <MarqueeRow items={clientsRowOne} direction="right" duration={44} />
        <MarqueeRow items={clientsRowTwo} direction="left" duration={52} />
      </div>
    </section>
  )
}
