import Hero from '@/components/home/Hero'
import TrustWall from '@/components/home/TrustWall'
import PlatformCells from '@/components/home/PlatformCells'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustWall />
      <PlatformCells />
      <HowItWorks />
      <FAQ limit={5} />
      <CTABand />
    </>
  )
}
