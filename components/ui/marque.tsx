import Image from 'next/image'
import Reveal from './Reveal'

export interface Logo {
  name: string
  logo: string
  website?: string
}

function LogoMark({ item }: { item: Logo }) {
  const content = (
    <div className="group flex w-56 shrink-0 flex-col items-center gap-3 px-4 py-2 text-center sm:w-64">
      <Image
        src={item.logo}
        alt={item.name + ' logo'}
        width={180}
        height={80}
        className="h-16 w-auto max-w-[11rem] object-contain opacity-90 transition duration-300 group-hover:opacity-100"
      />
      <span className="text-xs font-medium text-muted">{item.name}</span>
    </div>
  )

  return item.website ? (
    <a href={item.website} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
      {content}
    </a>
  ) : (
    content
  )
}

export  function Marquee({
  label,
  items,
  direction = 'left',
  duration = 44,
}: {
  label: string
  items: Logo[]
  direction?: 'left' | 'right'
  duration?: number
}) {
  const doubled = [...items, ...items]
  const animation = direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'

  return (
    <section className="border-y border-line bg-white py-16 sm:py-20">
      <div className="container-px">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            <span className="h-px w-9 bg-muted" aria-hidden="true" />
            <span>{label}</span>
          </div>
        </Reveal>
      </div>
      <div className="mask-fade-x mt-12 overflow-hidden sm:mt-16">
        <div
          className={`flex w-max items-center gap-5 ${animation} hover:[animation-play-state:paused]`}
          style={{ animationDuration: duration + 's' }}
        >
          {doubled.map((item, index) => (
            <LogoMark key={item.name + '-' + index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
