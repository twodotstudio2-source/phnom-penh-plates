import React from "react";
import { SectionWrapper, FadeInUp } from "@/components/ui";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-16)] items-center">
        {/* Left: text */}
        <div>
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
              Our Story
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
                marginBottom: "var(--space-6)",
                color: "var(--color-foreground)",
              }}
            >
              About Us Headline
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-muted-foreground)",
                marginBottom: "var(--space-4)",
              }}
            >
              Placeholder paragraph one. Describe the origin, mission, or
              philosophy of this project. Real copy goes here once content is
              ready.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-muted-foreground)",
              }}
            >
              Placeholder paragraph two. Add a second supporting point or
              expand on what makes this place unique.
            </p>
          </FadeInUp>
        </div>

        {/* Right: image placeholder */}
        <FadeInUp delay={0.15}>
          <div
            style={{
              background: "var(--color-muted)",
              borderRadius: "var(--radius-md)",
              aspectRatio: "4 / 5",
              width: "100%",
            }}
            aria-hidden="true"
          />
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
