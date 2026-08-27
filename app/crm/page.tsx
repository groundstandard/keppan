import { buildMetadata } from "@/lib/seo";
import { PageHero, FeatureGrid, CTASection } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Member CRM for martial arts schools",
  description:
    "Keppan's CRM keeps every member's status, attendance, rank, and payments in one place — so retention is something you can see and act on.",
  path: "/crm",
});

export default function CrmPage() {
  return (
    <>
      <PageHero
        eyebrow="Member CRM"
        title="Every member, in one view"
        subtitle="Status, attendance, rank, and payments together — retention you can actually see."
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
      <FeatureGrid
        heading="Built around your members"
        items={[
          { title: "Member profiles", detail: "Status, history, and payments in one place." },
          { title: "Billing status", detail: "Active membership and billing status at a glance." },
          { title: "Attendance & rank", detail: "Attendance history and belt/rank records per student." },
          { title: "Family accounts", detail: "Household and family billing handled together." },
          { title: "Retention signals", detail: "Spot at-risk members before they cancel." },
          { title: "Notes & tags", detail: "Keep context on every student and lead." },
        ]}
      />
      <CTASection heading="See your whole roster in Keppan" />
    </>
  );
}
