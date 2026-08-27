import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gym & martial arts management software",
  description:
    "Keppan runs your martial arts school end to end — scheduling, billing that collects automatically, attendance, belt & rank tracking, and member CRM in one platform.",
  path: "/",
});

const FEATURES = [
  { title: "Scheduling", href: "/scheduling", desc: "Classes, private lessons, and open mat — booking, confirmations, and reminders built in." },
  { title: "Billing that collects", href: "/payments", desc: "Autopay, invoicing, and smart retry on declined cards. Every month, automatically." },
  { title: "Attendance & check-in", href: "/features/attendance", desc: "App-based check-in and streaks. Absence alerts before students drift away." },
  { title: "Belt & rank tracking", href: "/features/ranks", desc: "Belt ranks, stripes, and promotion workflows — native, at every plan level." },
  { title: "Member CRM", href: "/crm", desc: "Every member's status, history, and payments in one place. Retention you can see." },
  { title: "Memberships", href: "/memberships", desc: "Autopay for monthly and family plans, freezes, renewals — without the chase." },
];

const DISCIPLINES = [
  { label: "BJJ", href: "/martial-arts/bjj" },
  { label: "Muay Thai", href: "/martial-arts/muay-thai" },
  { label: "Boxing", href: "/martial-arts/boxing" },
  { label: "Karate", href: "/martial-arts/karate" },
  { label: "Taekwondo", href: "/martial-arts/taekwondo" },
  { label: "MMA", href: "/martial-arts/mma" },
  { label: "Judo", href: "/martial-arts/judo" },
  { label: "All disciplines", href: "/martial-arts" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-card-border">
        <div className="container-k py-20 md:py-28">
          <p className="eyebrow">Gym &amp; martial arts management</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl">
            Run your school. Not your admin.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-2">
            Keppan is the all-in-one platform for martial arts schools and gyms — scheduling, billing,
            attendance, belt &amp; rank tracking, and member CRM in one system.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/demo"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-card-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-card-border">
        <div className="container-k py-20">
          <p className="eyebrow">One platform</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            Everything it takes to run the front desk
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="group rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50"
              >
                <h3 className="font-display text-lg font-medium text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="border-b border-card-border">
        <div className="container-k py-20">
          <p className="eyebrow">Built for every discipline</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Browse Keppan by discipline
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {DISCIPLINES.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="rounded-full border border-card-border px-5 py-2.5 text-sm font-medium text-muted-2 transition-colors hover:border-accent hover:text-foreground"
              >
                {d.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="border-b border-card-border">
        <div className="container-k py-20">
          <blockquote className="max-w-3xl font-display text-2xl font-light leading-snug text-foreground text-balance md:text-3xl">
            &ldquo;I built Keppan because running a school shouldn&rsquo;t mean chasing payments and
            drowning in spreadsheets. The software should handle the busywork — so you can coach.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-medium text-muted">Bobby Freda — Founder, Keppan</p>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="container-k py-24 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
            See Keppan run your school in 20 minutes
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-2">
            A quick walkthrough of scheduling, billing, and rank tracking — mapped to how your school actually runs.
          </p>
          <div className="mt-8">
            <Link
              href="/demo"
              className="inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
