/**
 * Comparison pages data. One entry per competitor → /compare/keppan-vs-<slug>.
 * Blurbs describe each competitor fairly; the shared Keppan advantages come from
 * the site's real positioning (martial-arts-first, belt/rank native, billing that
 * collects, transparent pricing, free migration).
 */

export type Competitor = {
  slug: string; // full path slug: keppan-vs-<x>
  name: string;
  blurb: string;
  category: "Martial arts" | "General gym & fitness" | "CrossFit" | "Boutique fitness";
};

export const COMPETITORS: Competitor[] = [
  { slug: "keppan-vs-mindbody", name: "Mindbody", category: "General gym & fitness", blurb: "Enterprise-grade, multi-platform ecosystem with a global presence — strong for large chains and franchises that need one vendor across many product categories." },
  { slug: "keppan-vs-glofox", name: "Glofox", category: "Boutique fitness", blurb: "Clean, modern UI designed for boutique fitness studio operators and their members." },
  { slug: "keppan-vs-zen-planner", name: "Zen Planner", category: "General gym & fitness", blurb: "Broad gym and studio software often considered alongside martial arts options." },
  { slug: "keppan-vs-wodify", name: "Wodify", category: "CrossFit", blurb: "Clean CrossFit-native platform with strong programming and WOD management, plus scheduling, POS, CRM, and staff tools." },
  { slug: "keppan-vs-gymdesk", name: "GymDesk", category: "Martial arts", blurb: "Martial-arts-friendly gym management with membership, billing, and attendance." },
  { slug: "keppan-vs-pushpress", name: "PushPress", category: "CrossFit", blurb: "Gym management built around membership, billing, and check-in for functional-fitness gyms." },
  { slug: "keppan-vs-kicksite", name: "Kicksite", category: "Martial arts", blurb: "Martial arts school management with attendance, billing, and communication tools." },
  { slug: "keppan-vs-martialytics", name: "Martialytics", category: "Martial arts", blurb: "Martial arts attendance and grading analytics with rank tracking." },
  { slug: "keppan-vs-wellnessliving", name: "WellnessLiving", category: "General gym & fitness", blurb: "All-in-one platform with POS, booking, marketing automation, and membership management." },
  { slug: "keppan-vs-mystudio", name: "MyStudio", category: "Martial arts", blurb: "Studio management with membership sales, scheduling, and payments for martial arts and fitness." },
  { slug: "keppan-vs-clubwise", name: "ClubWise", category: "General gym & fitness", blurb: "Established UK gym and leisure management platform with multi-facility capabilities." },
  { slug: "keppan-vs-gymmaster", name: "GymMaster", category: "General gym & fitness", blurb: "UK gym management with membership, access control, and multi-facility support for leisure centres and clubs." },
  { slug: "keppan-vs-rhinofit", name: "RhinoFit", category: "General gym & fitness", blurb: "Affordably positioned gym management for budget-conscious gym owners." },
  { slug: "keppan-vs-teamup", name: "TeamUp", category: "General gym & fitness", blurb: "Class scheduling and booking software with recurring schedules, waitlists, and capacity limits." },
  { slug: "keppan-vs-abc-fitness", name: "ABC Fitness", category: "General gym & fitness", blurb: "Enterprise fitness management suite for large gyms and multi-location operators." },
  { slug: "keppan-vs-exercise-com", name: "Exercise.com", category: "General gym & fitness", blurb: "Custom-branded fitness business platform with workout delivery and payments." },
  { slug: "keppan-vs-spark-membership", name: "Spark Membership", category: "Martial arts", blurb: "Martial arts and fitness membership management with CRM and billing." },
  { slug: "keppan-vs-kombat-evolve", name: "Kombat Evolve", category: "Martial arts", blurb: "Martial arts club management with membership and scheduling tools." },
  { slug: "keppan-vs-bjj-link", name: "BJJ Link", category: "Martial arts", blurb: "Brazilian Jiu-Jitsu school management with attendance and belt tracking." },
  { slug: "keppan-vs-wod-guru", name: "WOD Guru", category: "CrossFit", blurb: "Gym and box management with scheduling, payments, and member check-in." },
];

/** Keppan's real, consistent advantages shown on every comparison page. */
export const KEPPAN_ADVANTAGES: { title: string; detail: string }[] = [
  { title: "Built for martial arts first", detail: "Belt ranks, stripes, and promotion workflows are native — not bolted on." },
  { title: "Billing that collects", detail: "Autopay with smart retry on declined cards, family plans, freezes, and renewals." },
  { title: "Attendance that drives retention", detail: "App check-in, streaks, and absence alerts before students drift away." },
  { title: "Transparent pricing", detail: "No setup fees and no long-term contracts to get started." },
  { title: "Free migration", detail: "We move you off your current software at no cost." },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
