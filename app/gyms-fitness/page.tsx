import { buildMetadata } from "@/lib/seo";
import { PageHero, FeatureGrid, CTASection } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Gym & fitness management software",
  description:
    "Keppan for gyms and fitness studios that keep members committed — scheduling, billing, memberships, attendance, and CRM in one platform.",
  path: "/gyms-fitness",
});

export default function GymsFitnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Gyms & fitness"
        title="Gym management for clubs that run on commitment"
        subtitle="Scheduling, billing, memberships, and attendance in one system — for gyms and studios that keep members showing up."
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
      <FeatureGrid
        heading="Everything your gym runs on"
        items={[
          { title: "Scheduling", detail: "Classes, bookings, waitlists, and reminders." },
          { title: "Billing & autopay", detail: "Memberships that collect automatically." },
          { title: "Attendance & check-in", detail: "App-based check-in and retention signals." },
          { title: "Member CRM", detail: "Every member's status and history in one view." },
          { title: "Memberships", detail: "Monthly and family plans, freezes, renewals." },
          { title: "Communication", detail: "Automated reminders and announcements." },
        ]}
      />
      <CTASection heading="See Keppan run your gym" />
    </>
  );
}
