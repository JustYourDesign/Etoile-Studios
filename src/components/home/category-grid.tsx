"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioCategories } from "@/data/portfolio";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";

export function CategoryGrid() {
  return (
    <section data-nav-theme="dark" className="bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <RevealText as="h2" className="font-display mb-16 text-[12vw] leading-[0.9] tracking-tight md:mb-20 md:text-[6vw]">
          The Categories
        </RevealText>

        <div className="grid grid-cols-1 gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCategories.map((cat, i) => (
            <FadeIn key={cat.slug} delay={(i % 3) * 0.08} className="bg-ink">
              <Link
                href={`/work/${cat.slug}`}
                data-cursor="explore"
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={cat.teaserImage}
                  alt={`${cat.title} by Etoile Studios — ${cat.teaserCaption}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-paper/70">{cat.teaserCaption}</span>
                  <span className="font-display mt-1 text-2xl">{cat.shortTitle}</span>
                  {cat.comingSoon && (
                    <span className="mt-2 w-fit rounded-full border border-paper/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-paper/70">
                      Gallery coming soon
                    </span>
                  )}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
