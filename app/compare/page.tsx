import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { COMPETITORS } from "@/lib/compare-data";

export const metadata = buildMetadata({
  title: "Compare Keppan to other gym & martial arts software",
  description:
    "Honest side-by-side comparisons of Keppan versus Mindbody, Glofox, Zen Planner, Wodify, Kicksite, and more — built for martial arts schools.",
  path: "/compare",
});

export default function CompareIndex() {
  return (
    <>
      <section className="border-b border-card-border">
        <div className="container-k py-20">
          <p className="eyebrow">Compare</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            How Keppan compares
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-2">
            Honest, side-by-side comparisons against the platforms martial arts schools and gyms
            usually evaluate.
          </p>
        </div>
      </section>

      <section>
        <div className="container-k py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPETITORS.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-muted">{c.category}</span>
                <h2 className="mt-2 font-display text-lg font-medium text-foreground">
                  Keppan vs {c.name}
                </h2>
                <span className="mt-3 inline-block text-sm font-semibold text-accent">
                  View comparison →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
