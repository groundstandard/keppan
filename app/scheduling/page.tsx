import { buildMetadata } from "@/lib/seo";
import { PageHero, FeatureGrid, CTASection } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Class scheduling software for gyms & martial arts",
  description:
    "Recurring class schedules, private lessons, and open mat — with booking, waitlists, capacity limits, confirmations, and reminders.",
  path: "/scheduling",
});

export default function SchedulingPage() {
  return (
    <>
      <PageHero
        eyebrow="Scheduling"
        title="Classes, privates, and open mat — handled"
        subtitle="Set your timetable once and let Keppan run the bookings, waitlists, and reminders."
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
      <FeatureGrid
        heading="Scheduling that runs itself"
        items={[
          { title: "Recurring schedules", detail: "Set your weekly timetable once; Keppan runs it." },
          { title: "Waitlists & capacity", detail: "Automatic waitlists and per-class capacity limits." },
          { title: "Private lessons", detail: "Book and bill privates alongside group classes." },
          { title: "Confirmations", detail: "Booking confirmation and reminder notifications." },
          { title: "Open mat", detail: "Manage open mat and drop-ins without the mess." },
          { title: "Instructor views", detail: "Reports by class, instructor, or time period." },
        ]}
      />
      <CTASection heading="See your timetable run itself" />
    </>
  );
}
