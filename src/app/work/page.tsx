import type { Metadata } from "next";
import { CategoryGrid } from "@/components/home/category-grid";
import { RevealText } from "@/components/ui/reveal-text";

export const metadata: Metadata = {
  title: "The Work",
  description: "Event, portrait, graduation, real estate and fashion photography by Etoile Studios.",
};

export default function WorkPage() {
  return (
    <main>
      <section data-nav-theme="dark" className="flex min-h-[50vh] items-end bg-ink px-6 pb-16 pt-40 text-paper md:px-10">
        <RevealText as="h1" className="font-display text-[15vw] leading-[0.88] tracking-tight md:text-[8vw]">
          The Work
        </RevealText>
      </section>
      <CategoryGrid />
    </main>
  );
}
