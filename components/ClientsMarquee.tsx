import Image from 'next/image'
import type { Client } from '../data/clients'
import { clientsRowOne, clientsRowTwo } from '../data/clients'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'

function LogoChip({ client }: { client: Client }) {
  const { name, icon, logo } = client
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-white px-6 py-4 transition-colors duration-300 hover:border-emerald-200">
      {logo ? (
        // Real logo: grayscale at rest, full color on hover (Apple/Hostinger style).
        <Image
          src={logo}
          alt={`${name} logo`}
          width={132}
          height={28}
          className="h-7 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      ) : (
        // Placeholder: icon mark + wordmark until a real logo is provided.
        <>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutralbg text-muted transition-colors duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-700">
            <Icon icon={icon} size={18} />
          </span>
          <span className="whitespace-nowrap font-display text-base font-semibold tracking-tight text-muted transition-colors duration-300 group-hover:text-emerald-800">
            {name}
          </span>
        </>
      )}
    </div>
  )
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Client[]
  direction: 'left' | 'right'
}) {
  // Duplicate the set so the -50% translate loops seamlessly.
  const doubled = [...items, ...items]
  const animation = direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'

  return (
    <div className="mask-fade-x overflow-hidden">
      <div
        className={`flex w-max gap-4 ${animation} hover:[animation-play-state:paused]`}
      >
        {doubled.map((client, i) => (
          <LogoChip key={`${client.name}-${i}`} client={client} />
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
      <div className="space-y-4">
        <MarqueeRow items={clientsRowOne} direction="right" />
        <MarqueeRow items={clientsRowTwo} direction="left" />
      </div>

      <div className="container-px">
        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted/70">
          Placeholder logos — your brand could be here
        </p>
      </div>
    </section>
  )
}
