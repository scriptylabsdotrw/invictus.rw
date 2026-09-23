import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Highlight from "@/components/ui/Highlight";
import Pricing from "@/components/Pricing";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Pricing | Flexible Plans for Financial Institutions",
  description:
    "Flexible Invictus plans for growing institutions  Starter, Growth, and Enterprise. Tailored to microfinance institutions, SACCOs, banks, and lenders. Contact sales for a quote.",
  alternates: { canonical: "/pricing" },
};

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
