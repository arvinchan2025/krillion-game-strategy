import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/guides", "/strategy", "/modes", "/faq", "/about", "/contact", "/privacy-policy", "/terms"];
  const guideRoutes = getAllGuides().map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  const modeRoutes = ["daily-dive", "unlimited", "puffer-party", "archive", "themed-packs"].map((slug) => ({
    url: `${siteConfig.url}/modes/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.6 })),
    ...guideRoutes,
    ...modeRoutes
  ];
}
