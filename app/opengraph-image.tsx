import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image Open Graph de marque, générée dynamiquement pour toutes les pages. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #071C2F 0%, #0D2540 45%, #0a3a6b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #0084FF 0%, #31B8FF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                background: "white",
                transform: "rotate(45deg)",
                borderRadius: "6px",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: "40px", fontWeight: 700, color: "white" }}>
            Propreté<span style={{ color: "#5EEAD4" }}>Pro</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            Le média expert de la propreté professionnelle
          </div>
          <div style={{ fontSize: "30px", color: "#9FB6CC", maxWidth: "900px" }}>
            Réglementation · Paie · Tarifs · Prix du nettoyage
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              padding: "10px 22px",
              borderRadius: "999px",
              background: "rgba(20,184,166,0.18)",
              border: "1px solid rgba(94,234,212,0.4)",
              color: "#5EEAD4",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            propretepro.fr
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
