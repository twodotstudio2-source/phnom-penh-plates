"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui";
import { FadeInUp } from "@/components/ui";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: image travels -150px over the full hero viewport height
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Scroll indicator fades out once user scrolls past 100px
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position:        "relative",
        height:          "100svh",
        overflow:        "hidden",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        textAlign:       "center",
      }}
    >
      {/* ── Background image with parallax ──────────────────────── */}
      {/*
       * Container is 150px taller than the section so the image always
       * covers it fully across the entire parallax range (0 → -150px).
       */}
      <motion.div
        style={{
          position: "absolute",
          top:      0,
          left:     0,
          right:    0,
          height:   "calc(100% + 150px)",
          y:        imageY,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Elegant fine-dining restaurant interior"
          fill
          preload
          sizes="100vw"
          style={{
            objectFit:      "cover",
            objectPosition: "center",
          }}
        />
      </motion.div>

      {/* ── Gradient overlay ─────────────────────────────────────── */}
      <div
        style={{
          position:   "absolute",
          inset:      0,
          background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%)",
          zIndex:     1,
        }}
      />

      {/* ── Hero content ─────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex:   2,
          padding:  "var(--space-8)",
          width:    "100%",
        }}
      >
        {/* Location label */}
        <FadeInUp delay={0.2}>
          <p
            style={{
              fontFamily:    "var(--font-body)",
              fontWeight:    "var(--weight-medium)",
              fontSize:      "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color:         "var(--color-primary)",
              marginBottom:  "var(--space-6)",
            }}
          >
            BKK1, Phnom Penh
          </p>
        </FadeInUp>

        {/* Main headline */}
        <FadeInUp delay={0.4}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--weight-bold)",
              fontSize:   "clamp(36px, 6vw, 64px)",
              lineHeight: "var(--leading-tight)",
              color:      "#FAF6F0",
              maxWidth:   "800px",
              margin:     "0 auto",
            }}
          >
            Every dish tells a story.
            <br />
            Ours begin in Cambodia.
          </h1>
        </FadeInUp>

        {/* Subheadline */}
        <FadeInUp delay={0.6}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: "var(--weight-regular)",
              fontSize:   "clamp(16px, 2vw, 20px)",
              lineHeight: "var(--leading-relaxed)",
              color:      "rgba(250, 246, 240, 0.8)",
              maxWidth:   "560px",
              margin:     "24px auto 0",
            }}
          >
            Rooted in Khmer tradition. Refined for tonight&apos;s table.
          </p>
        </FadeInUp>

        {/* Primary CTA */}
        <FadeInUp delay={0.8}>
          <div style={{ marginTop: "40px" }}>
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("reservation")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Reserve Your Table
            </Button>
          </div>
        </FadeInUp>

        {/* Tagline */}
        <FadeInUp delay={0.9}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: "var(--weight-regular)",
              fontSize:   "13px",
              color:      "var(--color-muted)",
              marginTop:  "16px",
            }}
          >
            Walk-ins welcome. Reservations ensure your seat.
          </p>
        </FadeInUp>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom:   "var(--space-8)",
          left:     0,
          right:    0,
          display:  "flex",
          justifyContent: "center",
          zIndex:   2,
        }}
      >
        <motion.div style={{ opacity: indicatorOpacity }}>
          {/*
           * Dim track line with a bright pulse that animates downward,
           * creating the "liquid drop" scroll cue.
           */}
          <div
            style={{
              width:    "1px",
              height:   "48px",
              background: "rgba(200, 169, 110, 0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeIn" }}
              style={{
                position:   "absolute",
                top:        0,
                left:       0,
                width:      "100%",
                height:     "50%",
                background: "var(--color-primary)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
