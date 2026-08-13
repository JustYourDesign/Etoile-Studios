import type { Metadata } from "next";
import Image from "next/image";
import { aboutPortrait } from "@/data/portfolio";
import { siteInfo } from "@/data/site";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowButton } from "@/components/ui/arrow-button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Etoile Studios is a Johannesburg multimedia company founded by Lesedi Mokhunoane, specialising in photography, videography and content creation.",
};

export default function AboutPage() {
  return (
    <main>
      <section data-nav-theme="dark" className="flex min-h-[60vh] flex-col justify-end bg-ink px-6 pb-16 pt-40 text-paper md:px-10">
        <span className="mb-4 text-xs uppercase tracking-[0.25em] text-paper/60">
          Helping brands since {siteInfo.foundedYear}
        </span>
        <RevealText as="h1" className="font-display text-balance text-[13vw] leading-[0.92] tracking-tight md:text-[6.5vw]">
          We capture moments that deserve to be remembered.
        </RevealText>
      </section>

      <section data-nav-theme="light" className="bg-paper px-6 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-8">
          <FadeIn className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={aboutPortrait}
                alt={`${siteInfo.founder}, founder of Etoile Studios`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink/50">{siteInfo.founder}, Founder</p>
          </FadeIn>

          <div className="md:col-span-6 md:col-start-7">
            <FadeIn>
              <p className="font-display text-2xl leading-snug md:text-3xl">{siteInfo.description}</p>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-ink/70 md:text-base">
              <p>
                My name is {siteInfo.founder}, and I am the founder of {siteInfo.legalName}. What started as a
                focus on photography has grown into a multidisciplinary studio covering event, portrait,
                graduation, real estate and fashion work across Johannesburg.
              </p>
              <p>
                The studio is based in Sandton, working with clients across corporate events, graduations and
                matric dances, real estate and hospitality, and personal portrait sessions — always with an eye
                for light, story and detail.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-10 flex flex-wrap items-center gap-6">
              <ArrowButton href="/work" variant="dark">
                View The Work
              </ArrowButton>
              <ArrowButton href="/contact" variant="dark">
                Start A Project
              </ArrowButton>
            </FadeIn>
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-ink px-6 py-20 text-paper md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <RevealText as="h2" className="font-display mb-10 text-[8vw] leading-[0.9] tracking-tight md:text-[3.5vw]">
            What We Do
          </RevealText>
          <div className="grid grid-cols-1 gap-8 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Photography", "Videography", "Content Creation", "Design"].map((service, i) => (
              <FadeIn key={service} delay={i * 0.08}>
                <span className="text-xs tabular-nums text-paper/40">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display mt-2 text-xl">{service}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
