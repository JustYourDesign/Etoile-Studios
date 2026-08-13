import { RevealText } from "@/components/ui/reveal-text";
import { ArrowButton } from "@/components/ui/arrow-button";

export function ContactCTA() {
  return (
    <section data-nav-theme="dark" className="bg-ink px-6 py-32 text-paper md:px-10 md:py-48">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center text-center">
        <RevealText
          as="h2"
          className="font-display text-balance text-[13vw] leading-[0.9] tracking-tight md:text-[7vw]"
        >
          Let's create something timeless.
        </RevealText>
        <div className="mt-10">
          <ArrowButton href="/contact" className="text-sm">
            Start A Project
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
