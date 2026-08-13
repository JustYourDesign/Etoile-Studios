import Image from "next/image";
import { aboutPortrait } from "@/data/portfolio";
import { siteInfo } from "@/data/site";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowButton } from "@/components/ui/arrow-button";

export function AboutPreview() {
  return (
    <section data-nav-theme="light" className="bg-paper px-6 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <RevealText as="h2" className="font-display text-balance text-[11vw] leading-[0.95] tracking-tight md:text-[4.5vw]">
            We capture moments that deserve to be remembered.
          </RevealText>

          <FadeIn delay={0.15} className="mt-8 max-w-lg text-sm leading-relaxed text-ink/70 md:text-base">
            <p>{siteInfo.description}</p>
            <p className="mt-4">
              Founded by {siteInfo.founder} in {siteInfo.foundedYear}, Etoile Studios is based in Sandton,
              Johannesburg, working across events, portraiture, graduations, real estate and fashion.
            </p>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-10">
            <ArrowButton href="/about" variant="dark">
              More About Us
            </ArrowButton>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={aboutPortrait}
              alt={`${siteInfo.founder}, founder of Etoile Studios`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
