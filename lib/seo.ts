import type { Metadata } from "next";

/**
 * The whole reason for this rebuild: real, server-rendered meta tags so link
 * previews (Facebook, X, LinkedIn, iMessage) show a title, description, and
 * image. Every page calls buildMetadata() to get consistent OG + Twitter tags.
 */

export const SITE = {
  name: "Keppan",
  url: "https://www.keppan.com",
  tagline: "Gym & martial arts management software",
  description:
    "Keppan is all-in-one gym and martial arts management software — scheduling, billing, attendance, belt & rank tracking, and member CRM in one platform.",
  ogImage: "/og/keppan-default.jpg",
  twitter: "@keppan",
} as const;

type PageSeo = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata({ title, description, path = "/", image }: PageSeo = {}): Metadata {
  const url = new URL(path, SITE.url).toString();
  const desc = description ?? SITE.description;
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;

  // og:image / twitter:image are provided site-wide by app/opengraph-image.tsx
  // (Next file convention). Pass `image` only to override for a specific page.
  const imageOverride = image ? { images: [{ url: image, width: 1200, height: 630, alt: SITE.name }] } : {};

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: fullTitle,
      description: desc,
      url,
      ...imageOverride,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      ...(image ? { images: [image] } : {}),
    },
  };
}
