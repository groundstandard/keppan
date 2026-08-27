import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Keppan is in its founding round: Founding 100 members lock $100/mo for life — everything included, no setup fees, no contracts. Standard tiers scale with member count.",
  path: "/pricing",
});

const INCLUDED = [
  "Belt & rank tracking (all plans)",
  "Billing, autopay & failed-payment recovery",
  "Attendance & app check-in",
  "Class & private scheduling",
  "Member CRM & family billing",
  "Automated communication",
  "Free migration from your current software",
  "Direct founder access",
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-card-border">
        <div className="container-k py-20 md:py-24">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            One founding price. Everything included.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-2">
            Keppan is currently in its founding round. Flat monthly rates by member count — no per-student
            fees, no surprise add-ons.
          </p>
        </div>
      </section>

      <section className="border-b border-card-border">
        <div className="container-k py-16">
          <div className="mx-auto max-w-lg rounded-3xl border border-accent/40 bg-card p-8">
            <p className="eyebrow">Founding 100</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-5xl font-bold text-foreground">$100</span>
              <span className="text-muted">/mo, locked for life</span>
            </div>
            <p className="mt-3 text-sm text-muted">
              Month-to-month. No setup fees. No contracts. Cancel any time. Standard tiers scale with
              member count and are announced at launch.
            </p>
            <Link
              href="/founding-100"
              className="mt-6 block rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Claim your founding spot
            </Link>
            <ul className="mt-8 space-y-3">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-0.5 text-accent">✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <p className="mx-auto mt-6 max-w-lg text-center text-xs text-muted">
            Is the $100/month founding rate really locked forever? Yes — founding seats are $100/month,
            locked for life from day one.
          </p>
        </div>
      </section>

      <CTASection heading="Join while founding seats are still available" primary={{ label: "Claim a founding seat", href: "/founding-100" }} />
    </>
  );
}
