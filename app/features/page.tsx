import { buildMetadata } from "@/lib/seo";
import { FeatureGrid, CTASection } from "@/components/sections";
import { FEATURES } from "@/lib/features-data";

export const metadata = buildMetadata({
  title: "Features",
  description:
    "Everything it takes to run a martial arts school or gym: scheduling, billing, attendance, belt & rank tracking, members CRM, and communication — in one platform.",
  path: "/features",
});

export default function FeaturesIndex() {
  return (
    <>
      <section className="border-b border-card-border">
        <div className="container-k py-20 md:py-24">
          <p className="eyebrow">One platform</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Everything it takes to run the front desk
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-2">
            Scheduling, billing, attendance, belt &amp; rank tracking, members, and communication — one system.
          </p>
        </div>
      </section>

      <FeatureGrid
        items={FEATURES.map((f) => ({ title: f.name, detail: f.tagline, href: `/features/${f.slug}` }))}
      />

      <CTASection heading="See the whole platform in 20 minutes" />
    </>
  );
}
