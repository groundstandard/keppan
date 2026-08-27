import { buildMetadata } from "@/lib/seo";
import { PageHero, FeatureGrid, CTASection } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Why Keppan",
  description:
    "Keppan is built for martial arts first — belt & rank tracking native, billing that collects, and attendance that drives retention. No setup fees, no contracts.",
  path: "/why-keppan",
});

export default function WhyKeppanPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Keppan"
        title="Built for the mat, not bolted on"
        subtitle="Most gym software treats martial arts as an afterthought. Keppan is built around how schools actually run."
        secondary={{ label: "Compare Keppan", href: "/compare" }}
      />
      <FeatureGrid
        heading="What sets Keppan apart"
        items={[
          { title: "Martial arts first", detail: "Belt ranks, stripes, and promotions are native — at every plan level." },
          { title: "Billing that collects", detail: "Autopay with smart retry so revenue doesn't slip." },
          { title: "Retention you can see", detail: "Attendance, streaks, and absence alerts before students leave." },
          { title: "Transparent pricing", detail: "No setup fees, no contracts, no hidden rank-tracking walls." },
          { title: "Free migration", detail: "We move you off your current software at no cost." },
          { title: "Direct founder access", detail: "Bobby walks you through onboarding personally." },
        ]}
      />
      <CTASection heading="See why schools switch to Keppan" />
    </>
  );
}
