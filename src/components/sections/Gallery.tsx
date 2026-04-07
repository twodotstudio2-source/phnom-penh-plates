"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper, FadeInUp } from "@/components/ui";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
    alt: "Food close-up",
    height: 380,
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    alt: "Plated dish",
    height: 280,
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    alt: "Table spread",
    height: 460,
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    alt: "Restaurant interior",
    height: 320,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Dining atmosphere",
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    alt: "Kitchen candid",
    height: 300,
  },
  {
    src: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=600&q=80",
    alt: "Ingredients detail",
    height: 420,
  },
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    alt: "Herbs and spices",
    height: 260,
  },
  {
    src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80",
    alt: "Food detail",
    height: 360,
  },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + IMAGES.length) % IMAGES.length
        );
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % IMAGES.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  return (
    <SectionWrapper id="gallery">
      <style>{`
        @media (max-width: 767px) {
          .gallery-grid {
            column-gap: 8px !important;
          }
          .gallery-item {
            height: auto !important;
            aspect-ratio: 4 / 3;
            margin-bottom: 8px !important;
          }
          .gallery-item .h-full {
            height: 100%;
          }
        }
      `}</style>
      <div>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
        <FadeInUp>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              fontWeight: "var(--weight-medium)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "var(--space-3)",
              color: "var(--color-primary)",
            }}
          >
            Gallery
          </p>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 2.625rem)",
              fontWeight: "var(--weight-bold)",
              lineHeight: "var(--leading-tight)",
              color: "var(--color-foreground)",
            }}
          >
            The room. The food. The moment.
          </h2>
        </FadeInUp>
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gallery-grid" style={{ columnGap: "16px" }}>
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setSelectedIndex(i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              position: "relative",
              height: img.height,
              breakInside: "avoid",
              marginBottom: "16px",
              cursor: "pointer",
              outline:
                hoveredIndex === i
                  ? "1px solid var(--color-primary)"
                  : "1px solid transparent",
              transition: "var(--transition-base)",
            }}
          >
            <FadeInUp delay={Math.min(i * 0.08, 0.5)} className="h-full">
              <div style={{ position: "relative", height: "100%" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </FadeInUp>
          </div>
        ))}
      </div>
      </div>{/* end px-6 md:px-0 wrapper */}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.92)",
              zIndex: "var(--z-modal)" as unknown as number,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                lineHeight: 0,
              }}
              aria-label="Close"
            >
              <X size={32} color="var(--color-foreground-dark)" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + IMAGES.length) % IMAGES.length
                );
              }}
              style={{
                position: "absolute",
                left: 24,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                lineHeight: 0,
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={40} color="var(--color-foreground-dark)" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={IMAGES[selectedIndex].src}
                alt={IMAGES[selectedIndex].alt}
                width={1200}
                height={900}
                style={{
                  objectFit: "contain",
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  width: "auto",
                  height: "auto",
                  display: "block",
                }}
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % IMAGES.length);
              }}
              style={{
                position: "absolute",
                right: 24,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                lineHeight: 0,
              }}
              aria-label="Next image"
            >
              <ChevronRight size={40} color="var(--color-foreground-dark)" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
