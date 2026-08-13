import type { Metadata } from "next";
import { servicePackages } from "@/data/services";
import { RevealText } from "@/components/ui/reveal-text";
import { PricingPackage } from "@/components/services/pricing-package";
import { FaqAccordion } from "@/components/services/faq-accordion";
import { ArrowButton } from "@/components/ui/arrow-button";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Photography packages from Etoile Studios — events, real estate, graduations, matric dance, fashion and birthday celebrations.",
};

export default function ServicesPage() {
  return (
    <main>
      <section data-nav-theme="dark" className="flex min-h-[45vh] flex-col justify-end bg-ink px-6 pb-14 pt-40 text-paper md:px-10">
        <span className="mb-4 text-xs uppercase tracking-[0.25em] text-paper/60">Capturing Timeless Moments</span>
        <RevealText as="h1" className="font-display text-[13vw] leading-[0.9] tracking-tight md:text-[6.5vw]">
          Photography Packages
        </RevealText>
      </section>

      <section data-nav-theme="light" className="bg-paper px-6 py-4 text-ink md:px-10">
        <div className="mx-auto max-w-[1600px]">
          {servicePackages.map((pkg, i) => (
            <PricingPackage key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>
      </section>

      <section data-nav-theme="light" className="bg-paper px-6 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <RevealText as="h2" className="font-display mb-10 text-[8vw] leading-[0.9] tracking-tight md:text-[3.5vw]">
            FAQ
          </RevealText>
          <FaqAccordion />
        </div>
      </section>

      <section data-nav-theme="dark" className="flex flex-col items-center gap-8 bg-ink px-6 py-28 text-center text-paper md:py-36">
        <RevealText as="h2" className="font-display text-balance text-[10vw] leading-[0.9] tracking-tight md:text-[5vw]">
          Ready to book your session?
        </RevealText>
        <ArrowButton href="/contact">Start A Project</ArrowButton>
      </section>
    </main>
  );
}
