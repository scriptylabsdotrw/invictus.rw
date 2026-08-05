import Image from 'next/image'
import type { Client } from '@/lib/constants'
import { clientsRowOne } from '@/lib/constants'
import Reveal from './ui/Reveal'

function ClientMark({ client }: { client: Client }) {
  const content = (
    <div className="group flex w-56 shrink-0 flex-col items-center gap-3 px-4 py-2 text-center sm:w-64">
      <Image
        src={client.logo}
        alt={client.name + ' logo'}
        width={180}
        height={80}
        className="h-16 w-auto max-w-[11rem] object-contain opacity-90 transition duration-300 group-hover:opacity-100"
      />
      <span className="text-xs font-medium text-muted">{client.name}</span>
    </div>
  )

  return client.website ? (
    <a href={client.website} target="_blank" rel="noopener noreferrer" aria-label={client.name}>
      {content}
    </a>
  ) : (
    content
  )
}

function MarqueeRow({ items, direction, duration }: { items: Client[]; direction: 'left' | 'right'; duration: number }) {
  const doubled = [...items, ...items]
  const animation = direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'

  return (
    <div className="mask-fade-x overflow-hidden">
      <div className={`flex w-max items-center gap-5 ${animation}`} style={{ animationDuration: duration + 's' }}>
        {doubled.map((client, index) => (
          <ClientMark key={client.name + '-' + index} client={client} />
        ))}
      </div>
    </div>
  )
}

export default function ClientsMarquee() {
  return (
    <section className="border-y border-line bg-white py-16 sm:py-20">
      <div className="container-px">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            <span className="h-px w-9 bg-muted" aria-hidden="true" />
            <span>Our clients</span>
          </div>
        </Reveal>
      </div>
      <div className="mt-12 sm:mt-16">
        <MarqueeRow items={clientsRowOne} direction="right" duration={44} />
      </div>
    </section>
  )
}
