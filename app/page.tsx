import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ClientsMarquee from '@/components/ClientsMarquee'
import ProblemSection from '@/components/ProblemSection'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import CTABand from '@/components/CTABand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <Features
        limit={6}
        showViewAll
        subheading="A complete core banking toolkit — explore a few highlights, then see everything Invictus can do."
      />
      <HowItWorks />
      <Testimonials />
      <ClientsMarquee />
      <CTABand />
    </>
  )
}
