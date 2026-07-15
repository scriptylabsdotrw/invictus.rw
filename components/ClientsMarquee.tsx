import Image from 'next/image'
import type { Client } from '../data/clients'
import { clientsRowOne, clientsRowTwo } from '../data/clients'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { ArrowRight01Icon } from '@/lib/icons'

function ClientCard({ client }: { client: Client }) {
  const { name, logo, badge, website } = client

  const inner = (
    <div className="group flex h-full w-80 shrink-0 flex-col rounded-2xl bg-neutralbg transition-colors duration-300 hover:bg-emerald-50/60">
      <div className="flex flex-1 flex-col p-7">
        {/* Logo */}
        <div className="flex h-11 items-center rounded-xl bg-white px-4">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={160}
            height={40}
            className="h-7 w-auto object-contain object-left"
          />
        </div>

        {/* Name + badge */}
        <div className="mt-6">
          <h3 className="text-base font-bold leading-snug text-ink">{name}</h3>
          <span className="mt-2 inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-muted">
            {badge}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between px-7 py-4">
        <p className="truncate text-sm text-muted/70">
          {website ? new URL(website).hostname.replace('www.', '') : 'Invictus client'}
        </p>
        {website && (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-muted transition-colors duration-300 group-hover:text-emerald-700">
            <Icon icon={ArrowRight01Icon} size={14} className="-rotate-45" />
          </span>
        )}
      </div>
    </div>
  )

  if (website) {
    return (
      <a href={website} target="_blank" rel="noopener noreferrer" aria-label={name} className="flex h-full">
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
