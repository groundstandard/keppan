import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { COMPETITORS, KEPPAN_ADVANTAGES, getCompetitor } from "@/lib/compare-data";

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/compare/[slug]">) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return buildMetadata({ title: "Comparison", path: `/compare/${slug}` });
  return buildMetadata({
    title: `Keppan vs ${c.name}`,
    description: `An honest side-by-side comparison of Keppan and ${c.name} for martial arts schools and gyms — pricing, billing, attendance, and belt & rank tracking.`,
    path: `/compare/${c.slug}`,
  });
}

const ROWS: { label: string; keppan: string; note: string }[] = [
  { label: "Belt & rank tracking", keppan: "Native, all plans", note: "Stripes and promotion workflows built in." },
  { label: "Billing & autopay", keppan: "Included", note: "Smart retry on declined cards; family plans." },
  { label: "Attendance & check-in", keppan: "Included", note: "App check-in, streaks, absence alerts." },
  { label: "Setup fees", keppan: "None", note: "No long-term contract to start." },
  { label: "Migration", keppan: "Free", note: "We move you off your current tool." },
  { label: "Built for martial arts", keppan: "Yes, first-class", note: "Designed around how schools actually run." },
];

export default async function ComparePage({ params }: PageProps<"/compare/[slug]">) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  return (
    <>
      <section className="border-b border-card-border">
        <div className="container-k py-20">
          <p className="eyebrow">Comparison</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Keppan vs {c.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-2">
            An honest side-by-side comparison for martial arts schools and gyms.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            <span className="font-semibold text-foreground">{c.name}:</span> {c.blurb}
          </p>
        </div>
      </section>

      {/* At a glance table */}
      <section className="border-b border-card-border">
        <div className="container-k py-16">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">At a glance</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="py-3 pr-4 text-sm font-medium text-muted"> </th>
                  <th className="py-3 pr-4 font-display text-sm font-semibold text-accent">Keppan</th>
                  <th className="py-3 font-display text-sm font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-b border-card-border">
                    <td className="py-4 pr-4 text-sm font-medium text-foreground">{r.label}</td>
                    <td className="py-4 pr-4 text-sm text-foreground">{r.keppan}</td>
                    <td className="py-4 text-sm text-muted">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="border-b border-card-border">
        <div className="container-k py-16">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Why schools choose Keppan
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KEPPAN_ADVANTAGES.map((a) => (
              <div key={a.title} className="rounded-2xl border border-card-border bg-card p-6">
                <h3 className="font-display text-base font-medium text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-k py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance">
            See why schools switch from {c.name} to Keppan
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/demo" className="rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover">
              Book a Demo
            </Link>
            <Link href="/compare" className="rounded-lg border border-card-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card">
              All comparisons
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
