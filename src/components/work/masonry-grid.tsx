"use client";

import Image from "next/image";
import type { GalleryImage } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/fade-in";

export function MasonryGrid({
  images,
  startIndex,
  onOpen,
}: {
  images: GalleryImage[];
  startIndex: number;
  onOpen: (index: number) => void;
}) {
  return (
    <div className="columns-1 gap-4 px-6 py-16 sm:columns-2 lg:columns-3 md:px-10">
      {images.map((image, i) => (
        <FadeIn key={image.id} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
          <button
            type="button"
            onClick={() => onOpen(startIndex + i)}
            data-cursor="view"
            className="group relative block w-full overflow-hidden bg-paper/5"
          >
            <div className={image.orientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]"}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </button>
        </FadeIn>
      ))}
    </div>
  );
}
