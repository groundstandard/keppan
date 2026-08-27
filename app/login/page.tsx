import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Log in",
  description: "Log in to your Keppan account to manage your school — scheduling, billing, attendance, and members.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <section>
      <div className="container-k flex min-h-[70vh] items-center justify-center py-20">
        <div className="w-full max-w-sm rounded-2xl border border-card-border bg-card p-8">
          <h1 className="font-display text-2xl font-bold text-foreground">Log in to Keppan</h1>
          <p className="mt-2 text-sm text-muted">Access your school dashboard.</p>
          <form className="mt-6 grid gap-4" action="/admin">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-muted-2">Email</span>
              <input type="email" required className="w-full rounded-lg border border-card-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-accent" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-muted-2">Password</span>
              <input type="password" required className="w-full rounded-lg border border-card-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-accent" />
            </label>
            <button type="submit" className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover">
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted">
            Don&rsquo;t have an account?{" "}
            <Link href="/demo" className="font-semibold text-accent">Book a demo</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
