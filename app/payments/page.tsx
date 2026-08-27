import { buildMetadata } from "@/lib/seo";
import { PageHero, FeatureGrid, CTASection } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Billing & payments for martial arts schools",
  description:
    "Billing that collects — autopay, family plans, freezes, renewals, and smart retry on declined cards. Collections without the chase.",
  path: "/payments",
});

export default function PaymentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Billing & payments"
        title="Billing that collects. Every month. Automatically."
        subtitle="Autopay, family plans, freezes, and renewals — with smart retry on declined cards so revenue doesn't slip."
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
      <FeatureGrid
        heading="Collections without the chase"
        items={[
          { title: "Autopay", detail: "Monthly and family plans on autopay by default." },
          { title: "Smart retry", detail: "Declined cards retried automatically to recover revenue." },
          { title: "Freezes & renewals", detail: "Handle pauses and renewals without manual work." },
          { title: "Family billing", detail: "One household, one invoice — handled cleanly." },
          { title: "Revenue reporting", detail: "Collection rate and retry queue on one dashboard." },
          { title: "Invoicing", detail: "Autopay, invoicing, and revenue reporting in one place." },
        ]}
      />
      <CTASection heading="Put your billing on autopilot" />
    </>
  );
}
