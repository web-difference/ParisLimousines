import type { MetadataRoute } from "next";

const BASE = "https://www.star-limousine-paris.com";

const routes = [
  "",
  "/prestations",
  "/tarifs",
  "/contact",
  "/offres/deauville",
  "/offres/striptease",
  "/offres/disneyland",
  "/cgu",
  "/cgv",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/en",
  "/en/prestations",
  "/en/tarifs",
  "/en/contact",
  "/en/offres/deauville",
  "/en/offres/striptease",
  "/en/offres/disneyland",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: path ? `${BASE}${path}` : BASE,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.startsWith("/en") && path === "/en" ? 0.9 : 0.8,
  }));
}
