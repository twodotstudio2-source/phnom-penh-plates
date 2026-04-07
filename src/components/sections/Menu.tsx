"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/ui";

const TABS = ["Starters", "Mains", "Desserts", "Drinks"];

const CARDS = [
  { title: "Item One", description: "A short description of this dish.", price: "$18" },
  { title: "Item Two", description: "A short description of this dish.", price: "$24" },
  { title: "Item Three", description: "A short description of this dish.", price: "$22" },
  { title: "Item Four", description: "A short description of this dish.", price: "$16" },
  { title: "Item Five", description: "A short description of this dish.", price: "$28" },
  { title: "Item Six", description: "A short description of this dish.", price: "$20" },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionWrapper id="menu" dark>
      {/* Section heading */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "var(--tracking-widest)",
            textTransform: "uppercase",
            marginBottom: "var(--space-4)",
            opacity: 0.6,
          }}
        >
          What We Offer
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(var(--text-3xl), 4vw, var(--text-5xl))",
            fontWeight: "var(--weight-bold)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          Our Menu
        </h2>
      </div>

      {/* Tab navigation */}
      <div
        className="flex gap-[var(--space-2)] mb-[var(--space-10)] overflow-x-auto"
        role="tablist"
        aria-label="Menu categories"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === i}
            onClick={() => setActiveTab(i)}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--weight-medium)",
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              padding: `var(--space-3) var(--space-5)`,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: activeTab === i ? "var(--color-foreground-dark)" : "var(--color-muted-foreground)",
              borderBottom: activeTab === i ? "2px solid var(--color-foreground-dark)" : "2px solid transparent",
              transition: "var(--transition-fast)",
              whiteSpace: "nowrap",
              marginBottom: "-1px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-6)]">
        {CARDS.map((card) => (
          <div
            key={card.title}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
            }}
          >
            {/* Image placeholder */}
            <div
              style={{
                background: "var(--color-muted)",
                aspectRatio: "3 / 2",
                opacity: 0.15,
              }}
              aria-hidden="true"
            />
            <div style={{ padding: "var(--space-5)" }}>
              <div
                className="flex items-start justify-between gap-[var(--space-4)]"
                style={{ marginBottom: "var(--space-2)" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                    fontWeight: "var(--weight-bold)",
                    color: "var(--color-foreground-dark)",
                  }}
                >
                  {card.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--weight-semibold)",
                    color: "var(--color-foreground-dark)",
                    flexShrink: 0,
                  }}
                >
                  {card.price}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--leading-relaxed)",
                  color: "var(--color-muted-foreground)",
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
