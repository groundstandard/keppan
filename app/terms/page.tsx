import { buildMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/legal";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of Keppan.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="2026">
      <section>
        <h2>Agreement</h2>
        <p>
          These Terms of Service govern your access to and use of Keppan. By using the service, you agree
          to these terms.
        </p>
      </section>
      <section>
        <h2>Accounts</h2>
        <p>
          You are responsible for maintaining the security of your account and for all activity under it.
          You must provide accurate information and keep it up to date.
        </p>
      </section>
      <section>
        <h2>Billing</h2>
        <p>
          Paid plans are billed on a recurring, month-to-month basis. There are no setup fees and no
          long-term contracts; you may cancel at any time. Founding 100 members retain their founding rate
          for the life of their subscription.
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>
          You agree not to misuse the service, interfere with its operation, or use it to violate any law
          or the rights of others.
        </p>
      </section>
      <section>
        <h2>Termination</h2>
        <p>
          You may cancel at any time. We may suspend or terminate access for violations of these terms.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Questions about these terms? Contact us through the website.</p>
      </section>
      <p className="text-xs text-muted">
        This is a general template and should be reviewed by legal counsel before launch.
      </p>
    </LegalLayout>
  );
}
