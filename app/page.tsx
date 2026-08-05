import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Partners from '@/components/Partners'
import CTABand from '@/components/CTABand'
import ClientsMarquee from '@/components/ClientsMarquee'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Features limit={6} />
      <ClientsMarquee />
      <HowItWorks />
      <CTABand />
    </>
  )
}
