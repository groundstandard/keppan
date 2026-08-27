import { buildMetadata } from "@/lib/seo";
import { LeadForm } from "@/components/lead-form";

export const metadata = buildMetadata({
  title: "Book a demo",
  description:
    "See Keppan run your martial arts school in 20 minutes — scheduling, billing, attendance, and belt & rank tracking mapped to how your school actually runs.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <section>
      <div className="container-k grid gap-12 py-20 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">Book a demo</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            See Keppan run your school in 20 minutes
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-2">
            A quick walkthrough of scheduling, billing, and rank tracking — mapped to how your school runs.
            Bobby walks you through onboarding personally.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground">
            {["No setup fees. No contracts.", "Free migration from your current software", "Direct founder access"].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">✓</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <LeadForm
            endpoint="/api/demo-request"
            fields={["name", "email", "school", "phone", "discipline", "message"]}
            submitLabel="Book my demo"
            successMessage="Thanks — we'll reach out to schedule your walkthrough."
          />
        </div>
      </div>
    </section>
  );
}
