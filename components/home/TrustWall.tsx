import Image from 'next/image'
import Reveal from '../ui/Reveal'
import { clients, partners } from '@/lib/constants'
import { cn } from '@/lib/utils'

type LogoItem = { name: string; logo: string; website?: string }

function LogoRow({ label, items }: { label: string; items: LogoItem[] }) {
  return (
    <div>
      <p className="border-b border-zinc-200 px-6 py-3 text-xs font-medium uppercase tracking-wider text-zinc-500 sm:px-8">
        {label}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => {
          const cell = (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-4 py-8 transition-colors hover:bg-zinc-50">
              <div className="relative h-14 w-full sm:h-16">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </div>
              <span className="text-center text-xs text-zinc-500">{item.name}</span>
            </div>
          )
          return (
            <Reveal
              key={item.name}
              delay={i * 80}
              className={cn(
                'border-b border-zinc-200',
                i % 2 === 0 ? 'border-r' : 'border-r-0',
                i === items.length - 1 ? 'md:border-r-0' : 'md:border-r',
              )}
            >
              {item.website ? (
                <a href={item.website} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {cell}
                </a>
              ) : (
                cell
              )}
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

/** Static logo wall: customers and partners in bordered cells. */
export default function TrustWall() {
  return (
    <section className="border-b border-zinc-200">
      <div className="mx-auto grid max-w-[1344px] border-zinc-200 lg:grid-cols-[0.85fr_2fr] lg:border-x">
        <div className="flex flex-col justify-center border-b border-zinc-200 px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r">
          <p className="text-sm font-medium text-primary-700">Trusted in Rwanda</p>
          <h2 className="mt-4 text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl">
            Our happy clients.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-zinc-600">
            Microfinance institutions across Rwanda run their business on Invictus, alongside the national institutions we work with.
          </p>
        </div>
        <div className="-mb-px">
          <LogoRow label="Customers" items={clients} />
          <LogoRow label="Partners" items={partners} />
        </div>
      </div>
    </section>
  )
}
