"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { ArrowButton } from "@/components/ui/arrow-button";
import { siteInfo } from "@/data/site";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const delay = reduced ? 0 : 1.7;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay });

      tl.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 1.6, ease: "power2.out" })
        .fromTo(
          titleRef.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, ease: "power4.out" },
          "-=1.1"
        )
        .fromTo(subRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");

      if (!reduced) {
        gsap.to(bgRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative flex h-[100svh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 30%, rgba(61,111,158,0.55), rgba(13,27,45,0.95) 60%, rgba(6,12,21,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(6,14,26,0) 0%, rgba(6,14,26,0.3) 60%, rgba(6,14,26,0.9) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-paper">
        <span className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-paper/80">
          Photography / Videography / Visual Storytelling
        </span>

        <h1 className="font-display leading-[0.95] tracking-tight">
          <span className="block overflow-hidden">
            <span
              ref={titleRef}
              className="inline-block whitespace-nowrap will-change-transform"
              style={{ fontSize: "clamp(2.75rem, 10vw, 9.5rem)" }}
            >
              Etoile Studios
            </span>
          </span>
        </h1>

        <div ref={subRef} className="mt-6 text-sm font-light italic text-paper/85 md:text-base">
          {siteInfo.heroSub}
        </div>

        <div ref={ctaRef} className="mt-10">
          <ArrowButton href="/work">View The Work</ArrowButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-paper/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-paper/40" />
      </div>
    </section>
  );
}
