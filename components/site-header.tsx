import Link from "next/link";

const NAV = [
  { label: "Features", href: "/features" },
  { label: "Martial Arts", href: "/martial-arts" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compare", href: "/compare" },
  { label: "Story", href: "/story" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/85 backdrop-blur">
      <div className="container-k flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          Keppan
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-2 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-muted-2 transition-colors hover:text-foreground sm:block"
          >
            Log in
          </Link>
          <Link
            href="/demo"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
