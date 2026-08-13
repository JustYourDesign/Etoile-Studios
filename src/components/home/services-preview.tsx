"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { servicePackages } from "@/data/services";
import { portfolioCategories } from "@/data/portfolio";
import { RevealText } from "@/components/ui/reveal-text";

const serviceImages: Record<string, string> = {
  event: portfolioCategories[0].teaserImage,
  "real-estate": portfolioCategories[3].teaserImage,
  graduation: portfolioCategories[2].teaserImage,
  "matric-dance": portfolioCategories[2].teaserImage,
  fashion: portfolioCategories[4].teaserImage,
  birthday: portfolioCategories[1].teaserImage,
};

export function ServicesPreview() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section data-nav-theme="dark" className="relative overflow-hidden bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered}
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={serviceImages[hovered]} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-ink/60" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-[1600px]">
        <RevealText as="h2" className="font-display mb-12 text-[12vw] leading-[0.9] tracking-tight md:mb-16 md:text-[6vw]">
          Services
        </RevealText>

        <div className="flex flex-col divide-y divide-paper/15 border-t border-paper/15">
          {servicePackages.map((pkg, i) => (
            <Link
              key={pkg.slug}
              href="/services"
              data-cursor="hidden"
              onMouseEnter={() => setHovered(pkg.slug)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-baseline justify-between py-6 transition-[padding] duration-300 hover:py-8 md:py-8 md:hover:py-10"
            >
              <span className="flex items-baseline gap-4 md:gap-8">
                <span className="text-xs tabular-nums text-paper/50">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                  {pkg.title}
                </span>
              </span>
              <span className="hidden text-xs uppercase tracking-[0.2em] text-paper/60 md:block">
                From R {pkg.tiers[0].startingFrom.toLocaleString("en-ZA")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
