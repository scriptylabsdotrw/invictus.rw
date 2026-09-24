import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Highlight from "@/components/ui/Highlight";
import Pricing from "@/components/Pricing";
import CTABand from "@/components/CTABand";

export default function PricingPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Plans built for institutions like <Highlight>yours</Highlight>
          </>
        }
        subtitle="Start where you are and scale as you grow. Talk to us for a quote that fits."
      />
      <Pricing />
      <CTABand />
    </>
  );
}
