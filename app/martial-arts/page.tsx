import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections";
import { DISCIPLINES } from "@/lib/martial-arts-data";

export const metadata = buildMetadata({
  title: "Martial arts school software by discipline",
  description:
    "Keppan is built for martial arts — BJJ, Muay Thai, boxing, karate, taekwondo, MMA, and judo. Belt & rank tracking, billing, scheduling, and attendance in one platform.",
  path: "/martial-arts",
});

export default function MartialArtsIndex() {
  return (
    <>
      <section className="border-b border-card-border">
        <div className="container-k py-20 md:py-24">
          <p className="eyebrow">Built for every discipline</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Software built for how martial arts schools actually run
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-2">
            Belt ranks, grading, attendance, and billing — native to your discipline, not bolted on.
          </p>
        </div>
      </section>

      <section className="border-b border-card-border">
        <div className="container-k py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DISCIPLINES.map((d) => (
              <Link key={d.slug} href={`/martial-arts/${d.slug}`} className="group rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50">
                <h2 className="font-display text-lg font-medium text-foreground">{d.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.built}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="See Keppan built for your discipline" subtitle="A 20-minute walkthrough mapped to how your school runs." />
    </>
  );
}
