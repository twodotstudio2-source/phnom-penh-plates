import React from "react";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-background-dark)",
        color: "var(--color-foreground-dark)",
      }}
    >
      <div
        className="mx-auto px-[var(--space-6)] pt-[var(--space-20)] pb-[var(--space-12)]"
        style={{ maxWidth: "var(--max-content)" }}
      >
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-12)] mb-[var(--space-16)]">
          {/* Column 1: Logo + tagline */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-xl)",
                fontWeight: "var(--weight-bold)",
                letterSpacing: "var(--tracking-wide)",
                marginBottom: "var(--space-4)",
              }}
            >
              DEMO SITE
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-muted-foreground)",
                maxWidth: "260px",
              }}
            >
              A short tagline or brand description goes here. Replace with real
              copy when content is ready.
            </p>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                marginBottom: "var(--space-5)",
                color: "var(--color-foreground-dark)",
              }}
            >
              Hours
            </h4>
            <ul
              style={{
                listStyle: "none",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-muted-foreground)",
              }}
            >
              <li>Mon – Fri: 12pm – 10pm</li>
              <li>Saturday: 11am – 11pm</li>
              <li>Sunday: 11am – 9pm</li>
            </ul>
          </div>

          {/* Column 3: Social links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                marginBottom: "var(--space-5)",
                color: "var(--color-foreground-dark)",
              }}
            >
              Follow Us
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--weight-medium)",
                      letterSpacing: "var(--tracking-wide)",
                      color: "var(--color-muted-foreground)",
                      textDecoration: "none",
                      transition: "var(--transition-fast)",
                    }}
                    className="hover:opacity-100"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "var(--space-6)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-muted-foreground)",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            © {new Date().getFullYear()} Demo Site. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
