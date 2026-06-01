import Reveal from './ui/Reveal'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
}

/** Top band for inner pages — clears the fixed navbar and sets the page tone. */
export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-neutralbg pt-36 pb-14 sm:pt-44 sm:pb-20">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="display mt-5 text-5xl text-ink sm:text-6xl lg:text-7xl">{title}</h1>
            {subtitle && <p className="lead mt-6">{subtitle}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
