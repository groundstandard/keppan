import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primary = { label: "Book a Demo", href: "/demo" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="border-b border-card-border">
      <div className="container-k py-20 md:py-24">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-lg text-muted-2">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={primary.href} className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="rounded-lg border border-card-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string;
  heading?: string;
  items: { title: string; detail: string; href?: string }[];
}) {
  return (
    <section className="border-b border-card-border">
      <div className="container-k py-16">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {heading && (
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
        )}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const inner = (
              <>
                <h3 className="font-display text-lg font-medium text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.detail}</p>
                {it.href && <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more →</span>}
              </>
            );
            return it.href ? (
              <Link key={it.title} href={it.href} className="rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50">
                {inner}
              </Link>
            ) : (
              <div key={it.title} className="rounded-2xl border border-card-border bg-card p-6">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  heading,
  subtitle,
  primary = { label: "Book a Demo", href: "/demo" },
}: {
  heading: string;
  subtitle?: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section>
      <div className="container-k py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
          {heading}
        </h2>
        {subtitle && <p className="mx-auto mt-4 max-w-lg text-muted-2">{subtitle}</p>}
        <div className="mt-8">
          <Link href={primary.href} className="inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover">
            {primary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
