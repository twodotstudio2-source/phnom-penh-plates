"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper, FadeInUp } from "@/components/ui";

const STATS = [
  { label: "2019", caption: "Est. in Phnom Penh" },
  { label: "40+",  caption: "Khmer dishes on the menu" },
] as const;

export function About() {
  return (
    <SectionWrapper id="about">
      <style>{`
        @media (max-width: 767px) {
          .about-image-outer {
            padding-right: 0 !important;
            padding-bottom: 0 !important;
          }
          .about-image-inner {
            box-shadow: none !important;
          }
        }
      `}</style>
      {/*
       * gap-10 = 40px (mobile) · gap-20 = 80px (desktop)
       * DOM order: text first → image second, so on mobile the
       * image naturally stacks below the text.
       * px-6 md:px-0 = 24px horizontal padding on mobile only.
       */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* ── Text column ───────────────────────────────────────── */}
        <div>
          {/* "Our Story" label */}
          <FadeInUp delay={0}>
            <p
              style={{
                fontFamily:    "var(--font-body)",
                fontWeight:    "var(--weight-medium)",
                fontSize:      "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color:         "var(--color-primary)",
                marginBottom:  "24px",
              }}
            >
              Our Story
            </p>
          </FadeInUp>

          {/* Headline */}
          <FadeInUp delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--weight-bold)",
                fontSize:   "clamp(32px, 4vw, 42px)",
                lineHeight: "var(--leading-tight)",
                color:      "var(--color-foreground)",
                maxWidth:   "480px",
              }}
            >
              Cambodian food given the stage it deserves.
            </h2>
          </FadeInUp>

          {/* Gold rule */}
          <FadeInUp delay={0.2}>
            <div
              style={{
                width:      "48px",
                height:     "1px",
                background: "var(--color-primary)",
                margin:     "32px 0",
              }}
            />
          </FadeInUp>

          {/* Pull quote */}
          <FadeInUp delay={0.3}>
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontStyle:  "italic",
                fontSize:   "22px",
                lineHeight: "var(--leading-relaxed)",
                color:      "var(--color-primary)",
                margin:     0,
                padding:    0,
              }}
            >
              &ldquo;The Kuy Teav our grandmothers woke up early to make.
              The Amok that tastes like home no matter where you are.&rdquo;
            </blockquote>
          </FadeInUp>

          {/* Body copy */}
          <FadeInUp delay={0.4}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: "var(--weight-regular)",
                fontSize:   "var(--text-base)",
                lineHeight: "var(--leading-relaxed)",
                color:      "var(--color-muted)",
                marginTop:  "24px",
              }}
            >
              We don&apos;t reinvent these dishes. We give them the room, the
              light, and the table they&apos;ve always deserved.
            </p>
          </FadeInUp>

          {/* Stats */}
          <FadeInUp delay={0.5}>
            <div
              style={{
                display:   "flex",
                gap:       "var(--space-10)",
                marginTop: "48px",
              }}
            >
              {STATS.map((stat) => (
                <div key={stat.caption}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: "var(--weight-bold)",
                      fontSize:   "36px",
                      lineHeight: 1,
                      color:      "var(--color-primary)",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--weight-regular)",
                      fontSize:   "13px",
                      lineHeight: "var(--leading-relaxed)",
                      color:      "var(--color-muted)",
                      marginTop:  "var(--space-2)",
                    }}
                  >
                    {stat.caption}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

        {/* ── Image column ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/*
           * Outer wrapper adds right + bottom space so the
           * box-shadow "offset border" has room to render.
           * box-shadow on an overflow:hidden element is NOT
           * clipped — it renders correctly alongside fill images.
           */}
          <div className="about-image-outer" style={{ paddingRight: "12px", paddingBottom: "12px" }}>
            <div
              className="about-image-inner"
              style={{
                position:    "relative",
                aspectRatio: "4 / 5",
                overflow:    "hidden",
                boxShadow:   "12px 12px 0 0 var(--color-primary)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                alt="Beautifully plated Cambodian cuisine"
                fill
                preload
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit:      "cover",
                  objectPosition: "center",
                }}
              />
              {/* Warm gold overlay */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "rgba(200, 169, 110, 0.08)",
                  zIndex:     1,
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
