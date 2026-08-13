import Image from "next/image";
import type { PortfolioCategory } from "@/data/portfolio";
import { RevealText } from "@/components/ui/reveal-text";

export function CategoryHero({ category }: { category: PortfolioCategory }) {
  return (
    <section
      data-nav-theme="dark"
      className="relative flex h-[70vh] min-h-[440px] w-full items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src={category.heroImage}
          alt={`${category.title} by Etoile Studios`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      </div>

      <div className="relative z-10 w-full px-6 pb-14 text-paper md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-paper/70">{category.subtitle}</span>
        <RevealText
          as="h1"
          className="font-display mt-3 text-[13vw] leading-[0.9] tracking-tight md:text-[6.5vw]"
        >
          {category.shortTitle}
        </RevealText>
        <p className="mt-4 max-w-xl text-sm text-paper/75 md:text-base">{category.description}</p>
      </div>
    </section>
  );
}
