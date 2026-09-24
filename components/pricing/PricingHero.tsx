import Link from 'next/link'
import GridHero from '../sections/GridHero'

export default function PricingHero() {
  return (
    <GridHero eyebrow="Pricing" title="Simple plans that grow with your business.">
      <p>
        Jump to <a href="#plans">plans</a>, <a href="#compare">full comparison</a>, and <a href="#faq">FAQs</a>.
      </p>
      <p>Plans start at RWF 100K a month — start small, add branches and staff as you grow.</p>
      <p>
        Not sure which plan fits? <Link href="/contact">Book a demo ↗</Link> and we&apos;ll recommend one.
      </p>
    </GridHero>
  )
}
