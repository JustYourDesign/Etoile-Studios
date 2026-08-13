"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { hasWebGL } from "@/lib/webgl";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { RevealText } from "@/components/ui/reveal-text";
import { SceneErrorBoundary } from "@/components/3d/scene-error-boundary";

const GalleryScene = dynamic(() => import("@/components/3d/gallery-scene"), { ssr: false });

const fallbackImages = [
  "https://images-pw.pixieset.com/site/Nzxa6b/kLYQyq/_MG_3313-159cc4f1-1500.png",
  "https://images-pw.pixieset.com/site/Nzxa6b/l9jLDG/bothofacingview-2-c8dd681e-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/PrEb7y/DSC_0454-67abd68a-1500.jpg",
];

function StaticFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-4">
      {fallbackImages.map((src, i) => (
        <div
          key={src}
          className="relative aspect-[3/4] w-1/4 overflow-hidden rounded-sm"
          style={{ transform: `translateY(${i % 2 === 0 ? "-8%" : "8%"})` }}
        >
          <Image src={src} alt="Etoile Studios photography" fill sizes="25vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function Gallery3DSection() {
  const [canUse3D, setCanUse3D] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setCanUse3D(hasWebGL());
  }, []);

  return (
    <section data-nav-theme="dark" className="relative bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <RevealText as="h2" className="font-display mb-4 text-[10vw] leading-[0.9] tracking-tight md:text-[4.5vw]">
          A Gallery in Motion
        </RevealText>
        <p className="mb-12 max-w-md text-sm text-paper/60 md:mb-16">
          A handful of frames from across the studio&apos;s work, drifting through space.
        </p>
      </div>

      <div className="relative mx-auto h-[60vh] max-h-[560px] w-full max-w-[1600px]">
        {canUse3D && !reducedMotion ? (
          <SceneErrorBoundary fallback={<StaticFallback />}>
            <Suspense fallback={<StaticFallback />}>
              <GalleryScene />
            </Suspense>
          </SceneErrorBoundary>
        ) : (
          <StaticFallback />
        )}
      </div>
    </section>
  );
}
