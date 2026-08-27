/** Martial arts discipline pages → /martial-arts/<slug>. */

export type Discipline = {
  slug: string;
  name: string;
  built: string; // "Built for ..."
  intro: string;
};

export const DISCIPLINES: Discipline[] = [
  { slug: "bjj", name: "BJJ", built: "Built for BJJ academies", intro: "Brazilian Jiu-Jitsu school management with belt and stripe tracking, attendance tied to grading, and billing that runs itself." },
  { slug: "muay-thai", name: "Muay Thai", built: "Built for Muay Thai camps and clubs", intro: "Run your Muay Thai camp end to end — class scheduling, membership billing, and attendance that drives retention." },
  { slug: "boxing", name: "Boxing", built: "Built for boxing clubs and studios", intro: "Boxing gym software for clubs and studios — memberships, autopay, and check-in without the front-desk chaos." },
  { slug: "karate", name: "Karate", built: "Built for karate schools with complex rank structures", intro: "Karate dojo management with full belt and rank tracking, grading workflows, and family billing." },
  { slug: "taekwondo", name: "Taekwondo", built: "Built for TKD schools", intro: "Taekwondo school software with rank progression, testing management, and automated membership billing." },
  { slug: "mma", name: "MMA", built: "Built for MMA gyms", intro: "MMA gym management across every class type — scheduling, billing, attendance, and member CRM in one platform." },
  { slug: "judo", name: "Judo", built: "Built for judo clubs", intro: "Judo club management with belt and rank records, attendance history, and hands-off membership billing." },
];

export function getDiscipline(slug: string) {
  return DISCIPLINES.find((d) => d.slug === slug);
}

const SHARED = [
  { title: "Belt & rank tracking", detail: "Ranks, stripes, and promotion workflows configured per your school." },
  { title: "Attendance & check-in", detail: "App-based check-in, streaks, and attendance tied to grading requirements." },
  { title: "Billing that collects", detail: "Autopay, family plans, freezes, and smart retry on declined cards." },
  { title: "Scheduling", detail: "Classes, private lessons, and open mat with reminders and waitlists." },
  { title: "Member CRM", detail: "Every student's status, history, and payments in one view." },
  { title: "Communication", detail: "Automated reminders and absence alerts to keep students on the mat." },
];

export const DISCIPLINE_FEATURES = SHARED;
