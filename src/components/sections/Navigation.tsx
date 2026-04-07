"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui";

const NAV_LINKS = ["Home", "About", "Menu", "Gallery", "Contact"];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: "var(--z-sticky)",
        background: scrolled ? "var(--color-background)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 var(--color-border)" : "none",
        transition: "var(--transition-base)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-[var(--space-6)] h-16"
        style={{ maxWidth: "var(--max-content)" }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--weight-bold)",
            fontSize: "var(--text-lg)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--color-foreground)",
          }}
        >
          DEMO SITE
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-[var(--space-8)]" style={{ listStyle: "none" }}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--weight-medium)",
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--color-foreground)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "var(--transition-fast)",
                }}
                className="hover:opacity-60"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm">Reserve</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{ background: "none", border: "none" }}
        >
          <span
            className="block w-6 h-0.5"
            style={{ background: "var(--color-foreground)" }}
          />
          <span
            className="block w-6 h-0.5"
            style={{ background: "var(--color-foreground)" }}
          />
          <span
            className="block w-6 h-0.5"
            style={{ background: "var(--color-foreground)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul
          className="md:hidden flex flex-col px-[var(--space-6)] pb-[var(--space-6)]"
          style={{
            listStyle: "none",
            background: "var(--color-background)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  paddingTop: "var(--space-4)",
                  paddingBottom: "var(--space-4)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--weight-medium)",
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--color-foreground)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {link}
              </a>
            </li>
          ))}
          <li style={{ paddingTop: "var(--space-4)" }}>
            <Button size="sm">Reserve</Button>
          </li>
        </ul>
      )}
    </nav>
  );
}
