import type { MetadataRoute } from "next";
import { portfolioCategories } from "@/data/portfolio";

const base = "https://etoilestudios.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/services", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = portfolioCategories.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes];
}
