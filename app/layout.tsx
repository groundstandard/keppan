import type { Metadata } from "next";
import Script from "next/script";
import "./keppan.css";
import { SITE, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...buildMetadata(),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        {/* Same web fonts the original Keppan site uses (referenced by keppan.css). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&family=Inter:wght@400;600&family=Archivo+Black:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="/enhance.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
