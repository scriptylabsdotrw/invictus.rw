import Image from 'next/image'
import Reveal from './ui/Reveal'

const partners = [
  { name: 'National Land Authority', logo: '/partners/NLA.png' },
  { name: 'National ID Agency', logo: '/partners/arms_Rwanda.png' },
  { name: 'Data Protection Office', logo: '/partners/logo.jpg' },
  { name: 'TransUnion', logo: '/partners/transunion-logo.png' },
]

function Partner({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="group flex w-56 shrink-0 flex-col items-center gap-3 px-4 py-2 text-center sm:w-64">
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={180}
        height={80}
        className="h-16 w-auto max-w-[11rem] object-contain opacity-90 transition duration-300 group-hover:opacity-100"
      />
      <span className="text-xs font-medium text-muted">{partner.name}</span>
    </div>
  )
}

export default function Partners() {
  const loopedPartners = [...partners, ...partners]

  return (
    <section className="border-y border-line bg-white py-16 sm:py-20">
      <div className="container-px">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            <span className="h-px w-9 bg-muted" aria-hidden="true" />
            <span>Our partners</span>
          </div>
        </Reveal>
      </div>
      <div className="mask-fade-x mt-12 overflow-hidden sm:mt-16">
        <div className="flex w-max items-center gap-5 animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: '44s' }}>
          {loopedPartners.map((partner, index) => (
            <Partner key={`${partner.name}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}
