"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { RevealText } from "@/components/ui/reveal-text";
import { portfolioCategories } from "@/data/portfolio";

const strip = portfolioCategories.map((cat) => ({
  src: cat.heroImage,
  alt: `Etoile Studios ${cat.title} — ${cat.teaserCaption}`,
  label: cat.shortTitle,
  href: `/work/${cat.slug}`,
}));

const loop = [...strip, ...strip];

export function FilmstripGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: strip.length * 6,
        ease: "none",
        repeat: -1,
      });

      const el = track;
      const pause = () => tween.timeScale(0.15);
      const resume = () => tween.timeScale(1);
      el.addEventListener("mouseenter", pause);
      el.addEventListener("mouseleave", resume);

      return () => {
        el.removeEventListener("mouseenter", pause);
        el.removeEventListener("mouseleave", resume);
      };
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <section data-nav-theme="dark" className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <RevealText as="h2" className="font-display mb-4 text-[10vw] leading-[0.9] tracking-tight md:text-[4.5vw]">
          A Gallery in Motion
        </RevealText>
        <p className="max-w-md text-sm text-paper/60">
          A handful of frames from across the studio&apos;s work, drifting past.
        </p>
      </div>

      <div className="relative mt-12 md:mt-16">
        <div ref={trackRef} className="flex w-max gap-4 px-6 md:gap-6 md:px-10">
          {loop.map((img, i) => (
            <Link
              key={`${img.href}-${i}`}
              href={img.href}
              data-cursor="explore"
              aria-hidden={i >= strip.length}
              tabIndex={i >= strip.length ? -1 : 0}
              className="group relative aspect-[3/4] h-[38vh] max-h-[420px] min-h-[260px] flex-shrink-0 overflow-hidden rounded-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 32vh, 38vh"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 text-[11px] uppercase tracking-[0.2em] text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent md:w-32" />
      </div>
    </section>
  );
}
