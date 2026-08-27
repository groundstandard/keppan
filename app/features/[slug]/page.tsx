import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { PageHero, FeatureGrid, CTASection } from "@/components/sections";
import { FEATURES, getFeature } from "@/lib/features-data";

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/features/[slug]">) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) return buildMetadata({ title: "Feature", path: `/features/${slug}` });
  return buildMetadata({ title: f.name, description: f.intro, path: `/features/${f.slug}` });
}

export default async function FeaturePage({ params }: PageProps<"/features/[slug]">) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) notFound();

  return (
    <>
      <PageHero eyebrow="Feature" title={f.tagline} subtitle={f.intro} secondary={{ label: "All features", href: "/features" }} />
      <FeatureGrid heading={`What's included`} items={f.points} />
      <CTASection heading={`See ${f.name.toLowerCase()} in action`} />
    </>
  );
}
