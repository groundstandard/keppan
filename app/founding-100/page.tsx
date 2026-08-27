import { buildMetadata } from "@/lib/seo";
import { LeadForm } from "@/components/lead-form";

export const metadata = buildMetadata({
  title: "Join the Founding 100",
  description:
    "Keppan is in its founding round. Founding 100 members lock $100/mo for life — everything included, no setup fees, no contracts. Reserve your founding spot.",
  path: "/founding-100",
});

export default function Founding100Page() {
  return (
    <section>
      <div className="container-k grid gap-12 py-20 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">Now accepting founding members</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Lock $100/mo for life
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-2">
            Keppan is currently in its founding round. Founding 100 members lock $100/mo for life —
            everything included, from day one.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground">
            {[
              "Founding rate: $100/mo locked for life",
              "Everything included — no hidden tier walls for rank tracking",
              "No setup fees. No contracts. Cancel any time.",
              "Free migration + direct founder access",
              "A Keppan founding certificate",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">✓</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <LeadForm
            endpoint="/api/founding-seat"
            fields={["name", "email", "school", "phone", "discipline"]}
            submitLabel="Reserve my founding spot"
            successMessage="You're on the list — we'll confirm your founding seat shortly."
          />
        </div>
      </div>
    </section>
  );
}
