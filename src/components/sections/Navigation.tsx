"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";

const NAV_LINKS = [
  { label: "Menu",    id: "menu" },
  { label: "About",   id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Reserve", id: "reservation" },
] as const;

// ── Hamburger line — reused three times ──────────────────────────
function HamburgerLine({
  animate,
}: {
  animate: Parameters<typeof motion.span>[0]["animate"];
}) {
  return (
    <motion.span
      animate={animate}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        display: "block",
        width: "24px",
        height: "1.5px",
        background: "currentColor",
        transformOrigin: "center",
        flexShrink: 0,
      }}
    />
  );
}

export function Navigation() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeLang, setActiveLang] = useState<"EN" | "KM">("EN");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Track scroll position
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleNavClick(id: string) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  // Derived colors
  const textColor = scrolled ? "var(--color-foreground)" : "#FAF6F0";

  return (
    <>
      {/* ── Fixed nav bar ──────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: "var(--z-sticky)",
          background: scrolled ? "var(--color-background)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 var(--color-border)" : "none",
          transition:
            "background var(--transition-slow), box-shadow var(--transition-slow)",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between px-6"
          style={{
            maxWidth: "var(--max-content)",
            paddingTop:    scrolled ? "16px" : "24px",
            paddingBottom: scrolled ? "16px" : "24px",
            transition:
              "padding-top var(--transition-slow), padding-bottom var(--transition-slow)",
          }}
        >
          {/* ── Logo ─────────────────────────────────────────── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Phnom Penh Plates – scroll to top"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textAlign: "left",
              color: textColor,
              transition: "color var(--transition-slow)",
            }}
          >
            <div
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    "var(--weight-bold)",
                fontSize:      "var(--text-sm)",
                letterSpacing: "var(--tracking-widest)",
                lineHeight:    1,
                textTransform: "uppercase",
              }}
            >
              PHNOM PENH
            </div>
            {/* Gold divider */}
            <div
              style={{
                height:     "1px",
                background: "var(--color-primary)",
                margin:     "4px 0",
              }}
            />
            <div
              style={{
                fontFamily:    "var(--font-body)",
                fontWeight:    "var(--weight-semibold)",
                fontSize:      "var(--text-xs)",
                letterSpacing: "var(--tracking-widest)",
                lineHeight:    1,
                textTransform: "uppercase",
              }}
            >
              PLATES
            </div>
          </button>

          {/* ── Desktop nav links (center) ────────────────────── */}
          <ul
            className="hidden md:flex items-center gap-8"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    background:    "none",
                    border:        "none",
                    cursor:        "pointer",
                    padding:       0,
                    fontFamily:    "var(--font-body)",
                    fontWeight:    "var(--weight-medium)",
                    fontSize:      "13px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color:
                      hoveredLink === link.id
                        ? "var(--color-primary)"
                        : textColor,
                    transition: "color var(--transition-slow)",
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Desktop right: language pill + CTA ───────────── */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle pill */}
            <div
              style={{
                display:      "flex",
                alignItems:   "center",
                border:       "1px solid var(--color-primary)",
                borderRadius: "var(--radius-full)",
                overflow:     "hidden",
              }}
            >
              {(["EN", "KM"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  aria-pressed={activeLang === lang}
                  style={{
                    background:    "none",
                    border:        "none",
                    cursor:        "pointer",
                    padding:       "4px 10px",
                    fontFamily:    "var(--font-body)",
                    fontWeight:
                      activeLang === lang
                        ? "var(--weight-bold)"
                        : "var(--weight-medium)",
                    fontSize:      "12px",
                    letterSpacing: "0.5px",
                    color:         textColor,
                    transition:    "color var(--transition-slow)",
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Primary CTA */}
            <Button size="sm" onClick={() => handleNavClick("reservation")}>
              Reserve Your Table
            </Button>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────── */}
          <button
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              background:     "none",
              border:         "none",
              cursor:         "pointer",
              padding:        "8px",
              width:          "40px",
              height:         "40px",
              display:        "flex",
              flexDirection:  "column",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "5px",
              color:          textColor,
              transition:     "color var(--transition-slow)",
            }}
          >
            {/*
             * gap=5px → center-to-center between adjacent lines = 1.5+5 = 6.5px
             * Line 1 sits 6.5px above center → needs y: +6.5 to form X
             * Line 3 sits 6.5px below center → needs y: -6.5 to form X
             */}
            <HamburgerLine
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              style={{
                display:         "block",
                width:           "24px",
                height:          "1.5px",
                background:      "currentColor",
                transformOrigin: "center",
                flexShrink:      0,
              }}
            />
            <HamburgerLine
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ──────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position:       "fixed",
              inset:          0,
              zIndex:         199, // sits just below nav (200)
              background:     "var(--color-background-dark)",
              display:        "flex",
              flexDirection:  "column",
              alignItems:     "center",
              justifyContent: "center",
              padding:        "var(--space-8)",
            }}
          >
            {/* Staggered nav links */}
            <ul
              style={{
                listStyle:      "none",
                margin:         0,
                padding:        0,
                flex:           1,
                display:        "flex",
                flexDirection:  "column",
                alignItems:     "center",
                justifyContent: "center",
                gap:            "var(--space-8)",
                textAlign:      "center",
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay:    0.05 + i * 0.07,
                    duration: 0.4,
                    ease:     "easeOut",
                  }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      background:    "none",
                      border:        "none",
                      cursor:        "pointer",
                      padding:       0,
                      fontFamily:    "var(--font-display)",
                      fontSize:      "32px",
                      fontWeight:    "var(--weight-regular)",
                      color:         "var(--color-foreground-dark)",
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wide)",
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Full-width reserve CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <Button
                size="lg"
                className="w-full"
                onClick={() => handleNavClick("reservation")}
              >
                Reserve Your Table
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
