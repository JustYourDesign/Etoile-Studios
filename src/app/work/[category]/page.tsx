import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCategory, portfolioCategories } from "@/data/portfolio";
import { CategoryHero } from "@/components/work/category-hero";
import { GalleryExperience } from "@/components/work/gallery-experience";
import { ArrowButton } from "@/components/ui/arrow-button";

export function generateStaticParams() {
  return portfolioCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[category]">): Promise<Metadata> {
  const { category: slug } = await props.params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    openGraph: { title: `${category.title} — Etoile Studios`, description: category.description },
  };
}

export default async function CategoryPage(props: PageProps<"/work/[category]">) {
  const { category: slug } = await props.params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <main>
      <CategoryHero category={category} />

      {category.comingSoon ? (
        <div data-nav-theme="dark" className="flex flex-col items-center gap-6 bg-ink px-6 py-32 text-center text-paper">
          <p className="max-w-md text-sm text-paper/70">
            The full {category.title.toLowerCase()} gallery is being prepared. Get in touch to see recent work
            or start a project in the meantime.
          </p>
          <ArrowButton href="/contact">Start A Project</ArrowButton>
        </div>
      ) : (
        <GalleryExperience images={category.images} />
      )}
    </main>
  );
}
