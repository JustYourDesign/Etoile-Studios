import type { ServicePackage } from "@/data/services";
import { formatZAR } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

export function PricingPackage({ pkg, index }: { pkg: ServicePackage; index: number }) {
  return (
    <div id={pkg.slug} className="border-t border-ink/10 py-12 first:border-t-0 md:py-16">
      <div className="mb-8 flex items-baseline gap-4">
        <span className="text-xs tabular-nums text-ink/40">{String(index + 1).padStart(2, "0")}</span>
        <h2 className="font-display text-3xl tracking-tight md:text-5xl">{pkg.title}</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {pkg.tiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.08} className="flex flex-col border border-ink/10 p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-ink/50">{tier.name}</span>
            <span className="font-display mt-2 text-2xl">{formatZAR(tier.startingFrom)}</span>
            <span className="mb-4 text-xs text-ink/40">Starting from</span>
            <ul className="mt-2 flex flex-col gap-2 text-sm leading-relaxed text-ink/70">
              {tier.includes.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-ink/30">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
