import Button from './ui/Button'
import Reveal from './ui/Reveal'

interface CTABandProps {
  title?: string
  body?: string
  cta?: { label: string; href: string }
}

export default function CTABand({
  title = 'Run your business on Invictus.',
  body = 'See your own products, rates and approval steps in a private demo. No commitment.',
  cta = { label: 'Request a demo', href: '/contact' },
}: CTABandProps) {
  return (
    <section className="bg-primary-1000">
      <div className="container-narrow py-20 text-center sm:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-4xl leading-[1.1] text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">{body}</p>
          <div className="mt-9">
            <Button href={cta.href} variant="accent" className="min-w-[14rem]">
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
