import { Hero } from "@/components/home/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { CategoryGrid } from "@/components/home/category-grid";
import { Gallery3DSection } from "@/components/home/gallery-3d-section";
import { PhotoMoment } from "@/components/home/photo-moment";
import { AboutPreview } from "@/components/home/about-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Gallery3DSection />
      <CategoryGrid />
      <PhotoMoment
        image="/images/moments/matric-dance-car.png"
        alt="Etoile Studios matric dance photography — a couple in a car before the dance"
        text="Moments become memories."
      />
      <AboutPreview />
      <ServicesPreview />
      <ContactCTA />
    </main>
  );
}
