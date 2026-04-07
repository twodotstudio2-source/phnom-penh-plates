import React from "react";
import { SectionWrapper, FadeInUp } from "@/components/ui";

// Varying heights for masonry feel
const ITEMS = [
  { id: 1, aspect: "3/4" },
  { id: 2, aspect: "4/3" },
  { id: 3, aspect: "1/1" },
  { id: 4, aspect: "4/3" },
  { id: 5, aspect: "3/4" },
  { id: 6, aspect: "4/3" },
  { id: 7, aspect: "1/1" },
  { id: 8, aspect: "3/4" },
  { id: 9, aspect: "4/3" },
];

export function Gallery() {
  return (
    <SectionWrapper id="gallery">
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
        <FadeInUp>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--weight-medium)",
              letterSpacing: "var(--tracking-widest)",
              textTransform: "uppercase",
              marginBottom: "var(--space-4)",
              color: "var(--color-muted-foreground)",
            }}
          >
            A Visual Story
          </p>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(var(--text-3xl), 4vw, var(--text-5xl))",
              fontWeight: "var(--weight-bold)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-foreground)",
            }}
          >
            Gallery
          </h2>
        </FadeInUp>
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gap-[var(--space-4)]">
        {ITEMS.map((item, i) => (
          <FadeInUp key={item.id} delay={i * 0.05}>
            <div
              style={{
                background: "var(--color-muted)",
                aspectRatio: item.aspect,
                borderRadius: "var(--radius-sm)",
                marginBottom: "var(--space-4)",
                width: "100%",
                breakInside: "avoid",
              }}
              aria-hidden="true"
            />
          </FadeInUp>
        ))}
      </div>
    </SectionWrapper>
  );
}
