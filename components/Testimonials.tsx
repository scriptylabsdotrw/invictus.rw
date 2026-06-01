import { testimonials } from '../data/testimonials'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { QuoteUpIcon } from '@/lib/icons'

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Trusted by institutions</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Built for how banking teams actually work
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-neutralbg p-7">
                <span className="text-emerald-300">
                  <Icon icon={QuoteUpIcon} size={28} />
                </span>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-800 text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
