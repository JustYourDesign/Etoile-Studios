"use client";

import { useState } from "react";
import type { GalleryImage } from "@/data/portfolio";
import { HorizontalGallery } from "@/components/work/horizontal-gallery";
import { MasonryGrid } from "@/components/work/masonry-grid";
import { Lightbox } from "@/components/work/lightbox";

export function GalleryExperience({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const horizontalCount = Math.min(8, images.length);
  const horizontalImages = images.slice(0, horizontalCount);
  const restImages = images.slice(horizontalCount);

  return (
    <div data-nav-theme="dark">
      <HorizontalGallery images={horizontalImages} onOpen={(i) => setOpenIndex(i)} />
      {restImages.length > 0 && (
        <MasonryGrid images={restImages} startIndex={horizontalCount} onOpen={(i) => setOpenIndex(i)} />
      )}
      <Lightbox
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={(i) => setOpenIndex(i)}
      />
    </div>
  );
}
