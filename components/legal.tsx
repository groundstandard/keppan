export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="container-k max-w-3xl py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-2 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-foreground [&_h2]:mb-2 [&_a]:text-accent">
          {children}
        </div>
      </div>
    </section>
  );
}
