import { buildMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/legal";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Keppan uses cookies and similar technologies.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="2026">
      <section>
        <h2>What cookies are</h2>
        <p>
          Cookies are small text files stored on your device that help websites function and understand
          how they are used.
        </p>
      </section>
      <section>
        <h2>How we use cookies</h2>
        <p>
          We use essential cookies to run the site and keep it secure, and analytics cookies to understand
          usage and improve the experience.
        </p>
      </section>
      <section>
        <h2>Managing cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Disabling some cookies may
          affect how the site works.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Questions about our use of cookies? Contact us through the website.</p>
      </section>
      <p className="text-xs text-muted">
        This is a general template and should be reviewed by legal counsel before launch.
      </p>
    </LegalLayout>
  );
}
