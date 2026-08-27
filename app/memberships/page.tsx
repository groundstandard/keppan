import { buildMetadata } from "@/lib/seo";
import { PageHero, FeatureGrid, CTASection } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Membership management for martial arts schools",
  description:
    "Autopay memberships for monthly and family plans, freezes, and renewals — members who stay current, without the chase.",
  path: "/memberships",
});

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Memberships"
        title="Members who stay current"
        subtitle="Autopay for monthly and family plans, freezes, and renewals — membership that runs itself."
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
      <FeatureGrid
        heading="Membership on autopilot"
        items={[
          { title: "Monthly & family plans", detail: "Autopay for individual and household memberships." },
          { title: "Freezes", detail: "Pause and resume memberships in a click." },
          { title: "Renewals", detail: "Automatic renewals with no manual follow-up." },
          { title: "Plan management", detail: "Change plans, add-ons, and pricing per member." },
          { title: "Failed-payment recovery", detail: "Smart retry on declined cards keeps members active." },
          { title: "Sign-up flows", detail: "Convert leads to paying members quickly." },
        ]}
      />
      <CTASection heading="Keep every membership current" />
    </>
  );
}
