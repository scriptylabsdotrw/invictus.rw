import Image from 'next/image'
import type { Client, ClientAccent } from '../data/clients'
import { clientsRowOne, clientsRowTwo } from '../data/clients'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'

// Monogram placeholder colours, used until a real logo is supplied.
const monogram: Record<ClientAccent, string> = {
  orange: 'bg-orange-50 text-orange-600',
  gold: 'bg-amber-50 text-amber-600',
  sky: 'bg-sky-50 text-sky-700',
  emerald: 'bg-emerald-50 text-emerald-700',
}

// The little pixel/gradient block in each card's top-right corner.
const pixel: Record<ClientAccent, string> = {
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

function CornerBlock({ accent }: { accent: ClientAccent }) {
  return (
    <div aria-hidden className="absolute right-5 top-5 grid grid-cols-4 gap-[3px]">
      {cells.map((o, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-[2px] ${o ? `${pixel[accent]} ${o}` : 'bg-transparent'}`}
        />
      ))}
    </div>
  )
}

function ClientCard({ client }: { client: Client }) {
  const { name, icon, logo, badge, accent } = client
  return (
    <div className="relative flex h-full w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition-colors duration-300 hover:border-emerald-200">
      <CornerBlock accent={accent} />

      {/* Logo (real) or monogram placeholder */}
      <div className="relative flex h-10 items-center">
        {logo ? (
          <div className="relative h-10 w-36">
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              sizes="150px"
              className="object-contain object-left"
            />
          </div>
        ) : (
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${monogram[accent]}`}
          >
            <Icon icon={icon} size={20} />
          </span>
        )}
      </div>

      {/* Name + badge */}
      <div className="mt-6 flex items-center justify-between gap-2">
        <h3 className="truncate text-sm font-bold text-ink">{name}</h3>
        <span className="shrink-0 rounded bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
          {badge}
        </span>
      </div>
    </div>
  )
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
  // Duplicate the set so the -50% translate loops seamlessly.
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

      {/* Full-bleed rows for an edge-to-edge marquee */}
      <div className="space-y-5">
        <MarqueeRow items={clientsRowOne} direction="right" duration={42} />
        <MarqueeRow items={clientsRowTwo} direction="left" duration={50} />
      </div>
    </section>
  )
}
