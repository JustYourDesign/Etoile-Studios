import { Hero } from "@/components/home/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { CategoryGrid } from "@/components/home/category-grid";
import { FilmstripGallery } from "@/components/home/filmstrip-gallery";
import { PhotoMoment } from "@/components/home/photo-moment";
import { AboutPreview } from "@/components/home/about-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <FilmstripGallery />
      <CategoryGrid />
      <PhotoMoment
        image="/images/celebrations/celebration-03.jpg"
        alt="Etoile Studios celebrations photography — a portrait from Mischa's 21st birthday"
        text="Moments become memories."
      />
      <AboutPreview />
      <ServicesPreview />
      <ContactCTA />
    </main>
  );
}
