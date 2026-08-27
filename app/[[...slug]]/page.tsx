import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import meta from "@/content/keppan/_meta.json";

type Meta = Record<string, { title: string; description: string; canonical?: string }>;
const META = meta as Meta;

const keyFromSlug = (slug?: string[]) => {
  const parts = slug ?? [];
  return parts.length ? parts.join("__") : "index";
};
const pathFromSlug = (slug?: string[]) => "/" + (slug ?? []).join("/");

export function generateStaticParams() {
  return Object.keys(META).map((k) => ({ slug: k === "index" ? [] : k.split("__") }));
}

export async function generateMetadata({ params }: PageProps<"/[[...slug]]">): Promise<Metadata> {
  const { slug } = await params;
  const m = META[keyFromSlug(slug)];
  const url = new URL(pathFromSlug(slug) || "/", SITE.url).toString();
  const title = m?.title || `${SITE.name} — ${SITE.tagline}`;
  const description = m?.description || SITE.description;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: SITE.name, title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function KeppanPage({ params }: PageProps<"/[[...slug]]">) {
  const { slug } = await params;
  const key = keyFromSlug(slug);
  if (!META[key]) notFound();

  let html = "";
  try {
    html = await readFile(join(process.cwd(), "content", "keppan", `${key}.html`), "utf8");
  } catch {
    notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
