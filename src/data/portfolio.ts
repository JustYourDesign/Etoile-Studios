export type CategorySlug = "event" | "portrait" | "graduation" | "real-estate" | "fashion" | "cars" | "djs";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
};

export type PortfolioCategory = {
  slug: CategorySlug;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  heroImage: string;
  teaserImage: string;
  teaserCaption: string;
  comingSoon?: boolean;
  images: GalleryImage[];
};

function buildImages(
  categoryLabel: string,
  urls: string[],
  landscapeEvery = 4
): GalleryImage[] {
  return urls.map((src, i) => ({
    id: `${categoryLabel.toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
    src,
    alt: `Etoile Studios ${categoryLabel} photography, image ${i + 1} of ${urls.length}`,
    orientation: (i + 1) % landscapeEvery === 0 ? "landscape" : "portrait",
  }));
}

const eventUrls = [
  "https://images-pw.pixieset.com/site/Nzxa6b/kLYQyq/_MG_3313-159cc4f1-1500.png",
  "https://images-pw.pixieset.com/site/Nzxa6b/dyQ6WD/_MG_3285-fcd0962d-1500.png",
  "https://images-pw.pixieset.com/site/Nzxa6b/AA5q77/_MG_3290-41cf26c6-1500.png",
  "https://images-pw.pixieset.com/site/Nzxa6b/WZqOnv/_MG_4960-9228b5a8-1500.png",
  "https://images-pw.pixieset.com/site/Nzxa6b/bvR3p3/DSC_0276-cf8b7bb4-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/OrE1zl/IMG_9712-da6ac135-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Z0mGRl/_MG_5436-6439d6d7-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/8r8D4y/_MG_5431-32f716c9-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/aWv7Kx/_MG_5426-a2245e26-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/VrqbdK/_MG_5422-fac4c56c-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/JrLVAn/_MG_5441-7879e941-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/xGPqMW/_MG_5449-fe77f203-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Lr1n5D/_MG_5473-93cc1352-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/OrE1oX/_MG_5467-72bb8749-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/0RzDoo/_MG_5482-87dd139e-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/WZqpVp/_MG_5480-9fc8ed66-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/3dJr8v/_MG_5537-144f1757-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/7rxDWG/_MG_5535-d0a51420-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/jnLwxE/_MG_5554-d6a70ca1-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/4rwDQ1/_MG_5590-369f60e5-1500.jpg",
];

const portraitUrls = [
  "https://images-pw.pixieset.com/site/Nzxa6b/l9jLDG/bothofacingview-2-c8dd681e-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/OrE1ZX/tshesideview-e5c8b659-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/3dJ9Qv/DSC_0457-e0c4e5a9-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/5r0kOo/Maronahandcrown-ad6fd157-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/4rw1v0/DSC_0262-0fa7b564-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/YrnKdA/_MG_9773-10515462-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/rKQLVV/DSC_0492-2b037391-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Lr1Qm1/_MG_9713-dcf15083-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/MrRaqd/DSC_0234_1-2c405805-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/l9jQy5/tshefrontview-4c4571bc-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/VrqOOJ/_MG_0582-07da3b25-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/oOaV9d/_MG_0039-Enhanced-NR-b6d90aca-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/xGPWlx/_MG_1166-20ca259f-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/AA5XL1/_MG_1171-df8a4b36-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/v4nMKv/_MG_1872-bc6b3b73-1500.jpg",
];

const graduationUrls = [
  "https://images-pw.pixieset.com/site/Nzxa6b/PrEb7y/DSC_0454-67abd68a-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/bvOZ9M/DSC_0350-54da96bc-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/ye9vob/DSC_0540-e8d3b1df-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/MrRXbp/DSC_0232-a2ef4913-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/ye9vQn/DSC_1228-24a17d6a-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/OrEXVk/DSC_0216-34d88b19-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/WZqWlb/DSC_1231-818629e9-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Gr5Xd3/DSC_0553-c04f0ec5-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/YrnPxA/DSC_0305-2871dcc9-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Pro0Q0/DSC_1254-9b8df3c9-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Pro090/DSC_1192-c5c679d0-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/l9j4o3/DSC_0107-6d1ae4f4-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/8r8Xm1/DSC_0353-acf5266c-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/aWvLXm/DSC_1357-4557227e-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/ye9vmJ/DSC_0580-205bd686-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/qjr00r/DSC_0119-64001a74-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/z59PA6/DSC_1240-f84ef847-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/XrKvvA/DSC_0338-c94154c3-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/bvR9x8/DSC_0346-a0178904-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Gr5X34/DSC_1186-556c8e5e-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/3dJXvv/DSC_1156-f24e9954-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/OrEXPD/DSC_0454-ad6375e7-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/6Jobzk/_DSC0859-Recovered-890e6cf3-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/yVM5Xn/_DSC0897-Recovered-f5d1497c-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/XmeDKR/_DSC0955-2cbdba62-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Zz4Dmp/_DSC0819-Recovered-76b4bbca-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/7bonE1/_DSC0866-Recovered-8de2f7d6-1500.jpg",
];

const realEstateUrls = [
  "https://images-pw.pixieset.com/site/Nzxa6b/AAQ66z/Camrooproductionsrealestatephotography1-57212e86-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/6rGR8l/Camrooproductionsrealestatephotography3-b744d038-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/dydJJw/Camrooproductionsrealestatephotography-8cc1f983-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/z5vLax/Camrooproductionsrealestatephotography2-a27d6a2b-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/VrMJem/Camrooproductionsrealestatephotography4-9aabc1e2-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/9rJ7Ar/Camrooproductionsrealestatephotography1-aed89c1d-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/yeWnE0/Camrooproductionsrealestatephotography5-1b34bbfe-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/eQ4J9x/sweetgum-2-2ee7a699-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/PrE1Q3/sweetgumen-suite-3-4b6e6603-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/RrlOKw/sweetgum-7-a325f261-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/1Xzq74/sweetgum-3-f327fb24-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Z0Q5Da/sweetgum-4-33e26c83-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Jr3Yay/sweetgum-6-e922a8b2-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/pzyqOG/sweetgum-5-de407c09-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/WZwJbY/IMG_9869-9ce17cfb-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/7rEqdq/IMG_9864-d94b3f0c-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/PrE1bz/IMG_1637-ab08b42d-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/wqXVE4/IMG_98611-681c4311-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/Qr0mpb/IMG_9868-e983390d-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/7rE61O/IMG_9867-3a848932-1500.jpg",
  "https://images-pw.pixieset.com/site/Nzxa6b/pzyqnq/IMG_9880-d504fab6-1500.jpg",
];

const carUrls = [
  "/images/cars/m4-bmw-1.jpg",
  "/images/cars/m4-bmw-2.jpg",
  "/images/cars/tank-1.jpg",
  "/images/cars/tank-2.jpg",
];

const djUrls = [
  "/images/djs/dj-port-1.jpg",
  "/images/djs/dj-port-2.jpg",
  "/images/djs/dj-port-3.jpg",
];

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "event",
    title: "Event Photography",
    shortTitle: "Event",
    subtitle: "Late Night Ambiance",
    description:
      "Corporate functions, launches and late-night gatherings, documented as they unfold — the energy, the light, the room.",
    heroImage: "https://images-pw.pixieset.com/site/Nzxa6b/kLYQyq/_MG_3313-159cc4f1-1500.png",
    teaserImage: "https://images-pw.pixieset.com/site/Nzxa6b/5r0www/_MG_3313-5b12befc-1500.png",
    teaserCaption: "Late Night Ambiance",
    images: buildImages("Event", eventUrls),
  },
  {
    slug: "portrait",
    title: "Portrait Photography",
    shortTitle: "Portrait",
    subtitle: "Character & Presence",
    description:
      "Individual and group portraiture built around considered light and genuine expression.",
    heroImage: "https://images-pw.pixieset.com/site/Nzxa6b/l9jLDG/bothofacingview-2-c8dd681e-1500.jpg",
    teaserImage: "https://images-pw.pixieset.com/site/Nzxa6b/l9jLDG/bothofacingview-2-c8dd681e-1500.jpg",
    teaserCaption: "Portrait Session",
    images: buildImages("Portrait", portraitUrls),
  },
  {
    slug: "graduation",
    title: "Graduation & Matric Dance Photography",
    shortTitle: "Graduation & Matric Dance",
    subtitle: "Jaycee in Potchefstroom",
    description:
      "Capturing moments of hard work and dedication — graduation days and matric dance nights across campuses and cities.",
    heroImage: "https://images-pw.pixieset.com/site/Nzxa6b/PrEb7y/DSC_0454-67abd68a-1500.jpg",
    teaserImage: "https://images-pw.pixieset.com/site/Nzxa6b/VrqLap/DSC_0542-ffd39094-1500.jpg",
    teaserCaption: "Jaycee in Potchefstroom",
    images: buildImages("Graduation", graduationUrls),
  },
  {
    slug: "real-estate",
    title: "Real Estate & Restaurant Photography",
    shortTitle: "Real Estate & Restaurant",
    subtitle: "Spaces Meant to Be Captured",
    description:
      "Interiors, exteriors and hospitality spaces — Wildekrans Wine Estate, Jozi Gin Bryanston, and homes shot for the market.",
    heroImage: "https://images-pw.pixieset.com/site/Nzxa6b/AAQ66z/Camrooproductionsrealestatephotography1-57212e86-1500.jpg",
    teaserImage: "https://images-pw.pixieset.com/site/Nzxa6b/Qr4ajO/Camrooproductionsrealestatephotography1-76cbc67e-1500.jpg",
    teaserCaption: "Wildekrans Wine Estate",
    images: buildImages("Real Estate & Restaurant", realEstateUrls, 3),
  },
  {
    slug: "fashion",
    title: "Fashion & Portfolio Photography",
    shortTitle: "Fashion",
    subtitle: "SA Fashion Week",
    description:
      "Editorial and fashion portfolio work, on location and in studio. Full gallery from SA Fashion Week coming soon.",
    heroImage: "https://images-pw.pixieset.com/site/Nzxa6b/ProJE3/_MG_9674-07544993-1500.jpg",
    teaserImage: "https://images-pw.pixieset.com/site/Nzxa6b/ProJE3/_MG_9674-07544993-1500.jpg",
    teaserCaption: "SA Fashion Week",
    comingSoon: true,
    images: [],
  },
  {
    slug: "cars",
    title: "Automotive Photography",
    shortTitle: "Cars",
    subtitle: "RPI Cars",
    description:
      "Automotive portraiture — cars and custom builds shot for character, not just spec sheets.",
    heroImage: "/images/cars/m4-bmw-1.jpg",
    teaserImage: "/images/cars/m4-bmw-1.jpg",
    teaserCaption: "RPI Cars",
    images: buildImages("Cars", carUrls, 99),
  },
  {
    slug: "djs",
    title: "DJ & Performance Photography",
    shortTitle: "DJs",
    subtitle: "Behind The Decks",
    description:
      "DJ sets and live performance work, capturing the crowd, the light and the energy behind the decks.",
    heroImage: "/images/djs/dj-port-1.jpg",
    teaserImage: "/images/djs/dj-port-1.jpg",
    teaserCaption: "Behind The Decks",
    images: buildImages("DJs", djUrls, 99),
  },
];

export function getCategory(slug: string) {
  return portfolioCategories.find((c) => c.slug === slug);
}

export const aboutPortrait =
  "https://images-pw.pixieset.com/site/Nzxa6b/wqJAVj/687446523_18587747392043130_361509470188477936_n-0610d55d-1500.jpg";

export type FeaturedItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  tall?: boolean;
};

export const featuredWork: FeaturedItem[] = [
  { id: "fw-01", title: "Late Night Ambiance", category: "Event", image: eventUrls[4], href: "/work/event", tall: true },
  { id: "fw-02", title: "Character Study", category: "Portrait", image: portraitUrls[2], href: "/work/portrait" },
  { id: "fw-03", title: "Jaycee in Potchefstroom", category: "Graduation", image: graduationUrls[0], href: "/work/graduation" },
  { id: "fw-04", title: "Wildekrans Wine Estate", category: "Real Estate", image: realEstateUrls[7], href: "/work/real-estate", tall: true },
  { id: "fw-05", title: "The Room", category: "Event", image: eventUrls[10], href: "/work/event" },
  { id: "fw-06", title: "Sweetgum", category: "Real Estate", image: realEstateUrls[9], href: "/work/real-estate" },
];
