import { buildMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/legal";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Keppan collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="2026">
      <section>
        <h2>Overview</h2>
        <p>
          This Privacy Policy explains how Keppan (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and
          protects information when you use our website and software. By using Keppan, you agree to the
          practices described here.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <p>
          We collect information you provide directly — such as your name, email, phone, and school
          details when you request a demo or create an account — and standard technical data (like device
          and usage information) to operate and improve the service.
        </p>
      </section>
      <section>
        <h2>How we use information</h2>
        <p>
          We use your information to provide and improve Keppan, respond to your requests, process
          payments, send service communications, and keep the platform secure.
        </p>
      </section>
      <section>
        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. We share it only with service providers who help us
          run Keppan (such as payment and hosting providers), and where required by law.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information. Contact us
          to make a request.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Questions about this policy? Contact us through the website.</p>
      </section>
      <p className="text-xs text-muted">
        This is a general template and should be reviewed by legal counsel before launch.
      </p>
    </LegalLayout>
  );
}
