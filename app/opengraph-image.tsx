import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo";

export const alt = "Keppan — gym & martial arts management software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#131313",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 20, height: 20, borderRadius: 4, background: "#db3b2b" }} />
          <div style={{ color: "#fdfcfa", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            Keppan
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#db3b2b",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Gym &amp; martial arts management
          </div>
          <div style={{ color: "#fdfcfa", fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            Run your school. Not your admin.
          </div>
        </div>

        <div style={{ color: "#a6a6a6", fontSize: 26 }}>{SITE.url.replace("https://", "")}</div>
      </div>
    ),
    { ...size }
  );
}
