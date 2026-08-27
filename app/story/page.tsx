import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Our story",
  description:
    "Keppan comes from Ground Standard, founded by Bobby Freda in Red Bank, New Jersey to fix a problem he kept seeing: great instructors with weak back-office systems.",
  path: "/story",
});

export default function StoryPage() {
  return (
    <>
      <section className="border-b border-card-border">
        <div className="container-k py-20 md:py-24">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Built by people who know the mat
          </h1>
        </div>
      </section>

      <section className="border-b border-card-border">
        <div className="container-k max-w-3xl py-16">
          <div className="space-y-6 text-lg leading-relaxed text-muted-2">
            <p>
              Bobby Freda launched Ground Standard in Red Bank, New Jersey to solve a problem he kept
              seeing firsthand: martial arts schools with great instructors and weak back-office systems.
            </p>
            <p>
              Starting locally, he built a team to handle marketing, communications, and advertising for
              academy owners who were spending too much time on administration and not enough time on the
              mat.
            </p>
            <p>
              Ground Standard also designs, develops, and manufactures its own martial arts products and
              equipment — so school owners get direct access to gear without the distributor markup.
            </p>
            <p>
              Keppan is the software half of that mission: the platform that runs the front desk, so
              instructors can get back to coaching.
            </p>
          </div>
          <p className="mt-10 text-sm font-medium text-muted">Bobby Freda — Founder, Keppan</p>
        </div>
      </section>

      <CTASection heading="See what we built for schools like yours" />
    </>
  );
}
