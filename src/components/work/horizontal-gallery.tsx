"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/portfolio";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function HorizontalGallery({
  images,
  onOpen,
}: {
  images: GalleryImage[];
  onOpen: (index: number) => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (prefersReducedMotion()) return;

      const distance = () => track.scrollWidth - section.offsetWidth;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.scrollTrigger?.kill();
    });

    return () => mm.revert();
  }, [images.length]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink">
      <div
        ref={trackRef}
        className="no-scrollbar flex w-max gap-4 overflow-x-auto px-6 py-16 md:snap-none md:overflow-visible md:px-10"
      >
        {images.map((image, i) => (
          <button
            key={image.id}
            type="button"
            onClick={() => onOpen(i)}
            data-cursor="view"
            className="group relative h-[60vh] max-h-[560px] w-[78vw] flex-shrink-0 snap-start overflow-hidden md:h-[65vh] md:w-[38vw]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 text-xs tabular-nums text-paper/80">
              {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
