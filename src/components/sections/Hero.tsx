"use client";

import React from "react";
import { Button } from "@/components/ui";
import { FadeInUp } from "@/components/ui";

export function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        background: "var(--color-background-dark)",
        color: "var(--color-foreground-dark)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "var(--space-8)",
      }}
    >
      <div style={{ maxWidth: "var(--max-content)" }}>
        <FadeInUp delay={0}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--weight-medium)",
              letterSpacing: "var(--tracking-widest)",
              textTransform: "uppercase",
              marginBottom: "var(--space-6)",
              opacity: 0.6,
            }}
          >
            Welcome to Demo Site
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(var(--text-4xl), 8vw, var(--text-7xl))",
              fontWeight: "var(--weight-bold)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "var(--space-6)",
            }}
          >
            Headline Goes Here
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-lg)",
              fontWeight: "var(--weight-regular)",
              lineHeight: "var(--leading-relaxed)",
              maxWidth: "560px",
              margin: "0 auto var(--space-10)",
              opacity: 0.75,
            }}
          >
            Subheadline placeholder — describe the essence of your brand or
            offering in one or two compelling sentences.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.45}>
          <Button size="lg">Reserve a Table</Button>
        </FadeInUp>
      </div>
    </section>
  );
}
