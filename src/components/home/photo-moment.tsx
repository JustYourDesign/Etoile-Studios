"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function PhotoMoment({
  image,
  alt,
  text,
}: {
  image: string;
  alt: string;
  text: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !imageRef.current || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative flex h-[80vh] min-h-[420px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <div ref={imageRef} className="absolute inset-0">
        <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/40" />
      </div>
      <p className="font-display relative z-10 max-w-2xl px-6 text-center text-3xl italic text-paper md:text-5xl">
        {text}
      </p>
    </section>
  );
}
