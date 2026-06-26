import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { NavItem } from "@/components/ui/NavItem";
import { STUDIO_SHORT } from "@/constants/brand";
import { C } from "@/constants/colors";
import logoSrc from "@/images/logo.PNG";
import type { Page } from "@/types";

interface FooterProps {
  go: (p: Page) => void;
}


export function Footer({ go }: FooterProps) {
  const navigate = (p: Page) => {
    go(p);
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{ background: C.rifleGreen }}>
      <div
        className="mx-auto"
        style={{ maxWidth: "1280px", padding: "64px 32px 40px" }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10">
          <button
            onClick={() => navigate("home")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
            aria-label="Alpana S. Design — Home"
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: C.merino,
                padding: "6px 16px",
              }}
            >
              <ImageWithFallback
                src={logoSrc}
                alt="Alpana S. Design wordmark"
                style={{
                  height: "28px",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
            </span>
          </button>
          <div className="flex items-center gap-8">
            {(["work", "studio", "contact"] as Page[]).map((p) => (
              <NavItem
                key={p}
                label={p.charAt(0).toUpperCase() + p.slice(1)}
                active={false}
                onClick={() => navigate(p)}
                light
              />
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/alpana_sukerkar_interiors?utm_source=qr&igsh=OHkxZ2dpZXExOWFm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.oyster,
                cursor: "pointer",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
            >
              Instagram
            </a>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.oyster,
                cursor: "pointer",
                transition: "color 0.2s",
              }}
            >
              LinkedIn
            </span>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.borderFade}`, paddingTop: "24px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: C.oyster,
            }}
          >
            © 2025 {STUDIO_SHORT}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


