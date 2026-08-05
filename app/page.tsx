import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/patners";
import CTABand from "@/components/CTABand";
import Clients from "@/components/clients";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Clients />
      <HowItWorks />
      <CTABand />
    </>
  );
}
