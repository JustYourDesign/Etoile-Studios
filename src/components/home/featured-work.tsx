"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredWork } from "@/data/portfolio";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";

export function FeaturedWork() {
  return (
    <section data-nav-theme="light" className="bg-paper px-6 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <RevealText as="h2" className="font-display text-[12vw] leading-[0.9] tracking-tight md:text-[6vw]">
            Selected Work
          </RevealText>
          <p className="max-w-xs text-sm text-ink/60">
            A running edit of recent frames across events, portraits, graduations, real estate and fashion.
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {featuredWork.map((item, i) => (
            <FadeIn key={item.id} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
              <Link
                href={item.href}
                data-cursor="view"
                className="group relative block overflow-hidden bg-ink/5"
              >
                <div className={item.tall ? "aspect-[3/4]" : "aspect-[4/5]"}>
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.category} photography by Etoile Studios`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-5 text-paper opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-[0.2em]">{item.category}</span>
                  <span className="text-xs tabular-nums">
                    {String(i + 1).padStart(2, "0")} / {String(featuredWork.length).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
