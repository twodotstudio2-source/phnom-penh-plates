import { Camera } from "lucide-react";
import { Button } from "@/components/ui";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-background-dark)",
        color: "var(--color-foreground-dark)",
      }}
    >
      <style>{`
        .footer-social-link {
          display: flex;
          align-items: center;
          color: var(--color-muted);
          text-decoration: none;
          transition: var(--transition-base);
        }
        .footer-social-link:hover {
          color: var(--color-primary);
        }
        .footer-fb-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border: 1.5px solid currentColor;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          border-radius: 3px;
        }
      `}</style>

      {/* Main footer content */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "var(--max-content)",
          padding: "80px var(--space-6)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-16)]">

          {/* Column 1: Brand */}
          <div>
            {/* Logo lockup */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  fontWeight: "var(--weight-bold)",
                  color: "var(--color-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                Phnom Penh
              </p>
              <div
                style={{
                  height: "1px",
                  background: "var(--color-primary)",
                  margin: "var(--space-2) 0",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: "var(--weight-semibold)",
                  color: "var(--color-foreground-dark)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  lineHeight: 1,
                }}
              >
                Plates
              </p>
            </div>

            {/* Tagline */}
            <p
              style={{
                marginTop: "16px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--color-muted)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              Where Tradition Meets the Table
            </p>

            {/* Social icons */}
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                gap: "var(--space-4)",
              }}
            >
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Camera size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <span className="footer-fb-icon">f</span>
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--weight-medium)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                marginBottom: "24px",
              }}
            >
              Hours
            </p>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--color-muted)",
                lineHeight: 2,
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "var(--weight-medium)",
                    fontSize: "13px",
                    color: "var(--color-foreground-dark)",
                    lineHeight: 1.6,
                  }}
                >
                  Lunch
                </p>
                <p>Tue – Sun: 11:00 AM – 2:30 PM</p>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: "var(--weight-medium)",
                    fontSize: "13px",
                    color: "var(--color-foreground-dark)",
                    lineHeight: 1.6,
                  }}
                >
                  Dinner
                </p>
                <p>Tue – Sun: 5:30 PM – 10:30 PM</p>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: "var(--weight-medium)",
                    fontSize: "13px",
                    color: "var(--color-foreground-dark)",
                    lineHeight: 1.6,
                  }}
                >
                  Rooftop Bar
                </p>
                <p>Daily: 5:00 PM – 11:30 PM</p>
              </div>
              <p>Closed Mondays</p>
            </div>
          </div>

          {/* Column 3: Visit Us */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--weight-medium)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                marginBottom: "24px",
              }}
            >
              Visit Us
            </p>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--color-muted)",
                lineHeight: 2,
              }}
            >
              <p>Phnom Penh Plates</p>
              <p>Corner of Street 308 &amp; 57</p>
              <p>BKK1, Phnom Penh, Cambodia</p>
            </div>
            <div style={{ marginTop: "32px" }}>
              <Button variant="secondary" href="#reservation">
                Reserve Your Table
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(168, 159, 148, 0.2)" }}>
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: "var(--max-content)",
            padding: "24px var(--space-6)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-muted)",
            }}
          >
            © 2024 Phnom Penh Plates. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-muted)",
              opacity: 0.6,
            }}
          >
            A 2Dot Studio Demo
          </p>
        </div>
      </div>
    </footer>
  );
}
