import Link from "next/link";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Scheduling", href: "/scheduling" },
      { label: "Billing & Payments", href: "/payments" },
      { label: "Memberships", href: "/memberships" },
      { label: "CRM", href: "/crm" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Martial Arts",
    links: [
      { label: "BJJ", href: "/martial-arts/bjj" },
      { label: "Muay Thai", href: "/martial-arts/muay-thai" },
      { label: "Boxing", href: "/martial-arts/boxing" },
      { label: "Karate", href: "/martial-arts/karate" },
      { label: "Taekwondo", href: "/martial-arts/taekwondo" },
      { label: "MMA", href: "/martial-arts/mma" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/story" },
      { label: "Why Keppan", href: "/why-keppan" },
      { label: "Book a Demo", href: "/demo" },
      { label: "Compare", href: "/compare" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-card-border">
      <div className="container-k py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-lg font-bold text-foreground">
              Keppan
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Gym & martial arts management software — scheduling, billing, and belt tracking in one place.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-medium text-foreground">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-card-border pt-6 text-sm text-muted">
          © {new Date().getFullYear()} Keppan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
