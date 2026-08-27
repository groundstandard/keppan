/** Feature detail pages → /features/<slug>. */

export type Feature = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  points: { title: string; detail: string }[];
};

export const FEATURES: Feature[] = [
  {
    slug: "scheduling",
    name: "Scheduling",
    tagline: "Classes, privates, and open mat — handled",
    intro: "Recurring class schedules, private lessons, and open mat with booking, waitlists, confirmations, and reminders.",
    points: [
      { title: "Recurring schedules", detail: "Set your weekly timetable once; Keppan runs it." },
      { title: "Waitlists & capacity", detail: "Automatic waitlists and capacity limits per class." },
      { title: "Booking confirmations", detail: "Confirmation and reminder notifications built in." },
      { title: "Private lessons", detail: "Book and bill private sessions alongside group classes." },
    ],
  },
  {
    slug: "billing",
    name: "Billing & payments",
    tagline: "Billing that collects. Every month. Automatically.",
    intro: "Autopay, invoicing, family plans, freezes, and renewals — with smart retry on declined cards so revenue doesn't slip.",
    points: [
      { title: "Autopay", detail: "Monthly and family plans on autopay by default." },
      { title: "Smart retry", detail: "Declined cards retried automatically to recover revenue." },
      { title: "Freezes & renewals", detail: "Handle pauses and renewals without the chase." },
      { title: "Revenue reporting", detail: "Collection rate and retry queue on one dashboard." },
    ],
  },
  {
    slug: "attendance",
    name: "Attendance & check-in",
    tagline: "Attendance is the earliest signal retention sends",
    intro: "App-based member check-in, attendance history across every class type, streaks, and absence alerts before students drift away.",
    points: [
      { title: "App check-in", detail: "Fast, app-based member check-in at the front desk." },
      { title: "Attendance history", detail: "Full history across all class types, per member." },
      { title: "Streaks", detail: "Attendance streaks that keep students motivated to show up." },
      { title: "Absence alerts", detail: "Get alerted before an at-risk student drifts away." },
    ],
  },
  {
    slug: "ranks",
    name: "Belt & rank tracking",
    tagline: "Belt ranks and progression, native",
    intro: "Belt ranks, stripes, and promotion workflows configured per your school — with attendance tied to grading requirements.",
    points: [
      { title: "Ranks & stripes", detail: "Belt ranks with stripes, configured per your school." },
      { title: "Promotion workflows", detail: "Grading and promotion management built in at all plans." },
      { title: "Grading requirements", detail: "Attendance tracking to validate grading requirements." },
      { title: "Promotion history", detail: "Belt rank and promotion history per student." },
    ],
  },
  {
    slug: "members",
    name: "Members & CRM",
    tagline: "Every member, in one view",
    intro: "Active membership and billing status, attendance, and rank history — a complete member record that makes retention visible.",
    points: [
      { title: "Member profiles", detail: "Status, history, and payments in one place." },
      { title: "Billing status", detail: "Active membership and billing status at a glance." },
      { title: "Family accounts", detail: "Family billing and household management." },
      { title: "Retention signals", detail: "See who's at risk before they cancel." },
    ],
  },
  {
    slug: "communication",
    name: "Communication",
    tagline: "Keep students on the mat",
    intro: "Automated reminders, booking confirmations, and absence alerts that keep members engaged and showing up.",
    points: [
      { title: "Automated reminders", detail: "Class and booking reminders sent automatically." },
      { title: "Absence alerts", detail: "Reach out before a student drifts away." },
      { title: "Announcements", detail: "Message members by class, rank, or status." },
      { title: "Confirmations", detail: "Booking and payment confirmations built in." },
    ],
  },
];

export function getFeature(slug: string) {
  return FEATURES.find((f) => f.slug === slug);
}
