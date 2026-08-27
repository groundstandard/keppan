import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { COMPETITORS } from "@/lib/compare-data";
import { DISCIPLINES } from "@/lib/martial-arts-data";
import { FEATURES } from "@/lib/features-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/features",
    "/martial-arts",
    "/compare",
    "/pricing",
    "/demo",
    "/founding-100",
    "/why-keppan",
    "/story",
    "/gyms-fitness",
    "/crm",
    "/payments",
    "/scheduling",
    "/memberships",
    "/login",
    "/privacy",
    "/terms",
    "/cookie-policy",
  ];

  const dynamicPaths = [
    ...COMPETITORS.map((c) => `/compare/${c.slug}`),
    ...DISCIPLINES.map((d) => `/martial-arts/${d.slug}`),
    ...FEATURES.map((f) => `/features/${f.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: new URL(path, SITE.url).toString(),
    lastModified: new Date("2026-08-28"),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
