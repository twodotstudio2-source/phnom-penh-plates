"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, FadeInUp } from "@/components/ui";

// ── Types ────────────────────────────────────────────────────────

interface MenuItem {
  khmer:       string;
  english:     string;
  description: string;
  price:       string;
}

interface MenuCategory {
  label: string;
  items: MenuItem[];
}

// ── Data ─────────────────────────────────────────────────────────

const CATEGORIES: MenuCategory[] = [
  {
    label: "Small Plates",
    items: [
      {
        khmer:       "ចំណីតូច",
        english:     "Spring Rolls",
        description: "Fresh rice paper, herbs, peanut sauce",
        price:       "$5",
      },
      {
        khmer:       "សាឡាត់ស្វាយ",
        english:     "Green Mango Salad",
        description: "Shredded mango, dried shrimp, lime",
        price:       "$6",
      },
      {
        khmer:       "ផ្កាចេក",
        english:     "Fried Banana Blossom",
        description: "Crispy blossom, sweet chili dip",
        price:       "$7",
      },
    ],
  },
  {
    label: "Soups & Noodles",
    items: [
      {
        khmer:       "គុយទាវ",
        english:     "Kuy Teav",
        description: "Rice noodle soup, pork broth, fresh herbs",
        price:       "$6",
      },
      {
        khmer:       "សម្លកកូរ",
        english:     "Samlor Korko",
        description: "Fermented fish, vegetables, roasted rice",
        price:       "$8",
      },
      {
        khmer:       "នំបញ្ចុក",
        english:     "Num Banh Chok",
        description: "Rice noodles, green fish curry, banana flower",
        price:       "$7",
      },
    ],
  },
  {
    label: "Mains",
    items: [
      {
        khmer:       "អាម៉ុកត្រី",
        english:     "Fish Amok",
        description: "Steamed fish curry, coconut, kroeung paste",
        price:       "$14",
      },
      {
        khmer:       "លុកឡាក់",
        english:     "Lok Lak",
        description: "Wok-tossed beef, lime pepper sauce, fried egg",
        price:       "$13",
      },
      {
        khmer:       "ក្តាម",
        english:     "Kampot Pepper Crab",
        description: "Fresh crab, green Kampot pepper",
        price:       "$18",
      },
      {
        khmer:       "ជំនីបង្គង់",
        english:     "Grilled Pork Ribs",
        description: "Lemongrass marinade, pickled vegetables",
        price:       "$15",
      },
    ],
  },
  {
    label: "Rice & Sides",
    items: [
      {
        khmer:       "បាយ",
        english:     "Jasmine Rice",
        description: "Steamed jasmine rice",
        price:       "$2",
      },
      {
        khmer:       "ត្រកូន",
        english:     "Stir-Fried Morning Glory",
        description: "Garlic, oyster sauce",
        price:       "$4",
      },
      {
        khmer:       "នំជូរ",
        english:     "Pickled Vegetables",
        description: "Seasonal, house pickled",
        price:       "$3",
      },
    ],
  },
  {
    label: "Desserts",
    items: [
      {
        khmer:       "បាយដំណើប",
        english:     "Sticky Rice & Mango",
        description: "Coconut sticky rice, fresh mango",
        price:       "$6",
      },
      {
        khmer:       "គ្រែម",
        english:     "Palm Sugar Crème",
        description: "Palm sugar custard, toasted coconut",
        price:       "$5",
      },
      {
        khmer:       "នំខ្មែរ",
        english:     "Coconut Pandan Cake",
        description: "Pandan sponge, coconut cream",
        price:       "$5",
      },
    ],
  },
  {
    label: "Drinks",
    items: [
      {
        khmer:       "កាហ្វេខ្មែរ",
        english:     "Khmer Iced Coffee",
        description: "Dark roast, sweetened condensed milk",
        price:       "$3",
      },
      {
        khmer:       "សូដាផ្លែស្វាយចន្ទី",
        english:     "Passion Fruit Soda",
        description: "Fresh passion fruit, soda water",
        price:       "$4",
      },
      {
        khmer:       "ស្រាបៀរ",
        english:     "Local Craft Beer",
        description: "Cambodian craft selection",
        price:       "$4",
      },
      {
        khmer:       "គុជស្ករ",
        english:     "Signature Cocktail",
        description: "Ask your server for today's creation",
        price:       "$8",
      },
    ],
  },
];

// ── Image placeholder with gold shimmer ──────────────────────────

function CardImage() {
  return (
    <div
      style={{
        aspectRatio: "4 / 3",
        background:  "var(--color-background-dark)",
        position:    "relative",
        overflow:    "hidden",
      }}
      aria-hidden="true"
    >
      {/*
       * A gradient strip sweeps across from left to right, creating
       * a warm gold shimmer effect over the dark placeholder.
       */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
        style={{
          position:   "absolute",
          inset:      0,
          background: "linear-gradient(90deg, transparent 0%, rgba(200,169,110,0.09) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

// ── Individual menu card ─────────────────────────────────────────
//
// Two-div pattern: outer handles staggered entrance (opacity + y),
// inner handles hover lift so whileHover never inherits the stagger
// delay from the entrance transition.

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        style={{
          background: "var(--color-card)",
          overflow:   "hidden",
          height:     "100%",
        }}
      >
        <CardImage />

        <div className="menu-card-body" style={{ padding: "20px" }}>
          {/* Khmer script name */}
          <p
            style={{
              fontFamily:   "var(--font-khmer)",
              fontSize:     "14px",
              color:        "var(--color-primary)",
              marginBottom: "4px",
              lineHeight:   1.4,
            }}
          >
            {item.khmer}
          </p>

          {/* English name */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: "var(--weight-semibold)",
              fontSize:   "16px",
              color:      "var(--color-foreground-dark)",
              lineHeight: 1.3,
            }}
          >
            {item.english}
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: "var(--weight-regular)",
              fontSize:   "13px",
              color:      "var(--color-muted)",
              marginTop:  "8px",
              lineHeight: 1.5,
            }}
          >
            {item.description}
          </p>

          {/* Price */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: "var(--weight-medium)",
              fontSize:   "14px",
              color:      "var(--color-primary)",
              marginTop:  "12px",
              textAlign:  "right",
            }}
          >
            {item.price}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Section ──────────────────────────────────────────────────────

export function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionWrapper id="menu" dark>
      <style>{`
        @media (max-width: 767px) {
          .menu-tab-list {
            justify-content: flex-start !important;
            -webkit-overflow-scrolling: touch;
          }
          .menu-tab-list::-webkit-scrollbar {
            display: none;
          }
          .menu-card-body {
            padding: 16px !important;
          }
        }
      `}</style>

      {/* ── Section heading ────────────────────────────────────── */}
      <div style={{ textAlign: "center" }}>
        <FadeInUp delay={0}>
          <p
            style={{
              fontFamily:    "var(--font-body)",
              fontWeight:    "var(--weight-medium)",
              fontSize:      "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color:         "var(--color-primary)",
              marginBottom:  "var(--space-4)",
            }}
          >
            The Menu
          </p>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--weight-bold)",
              fontSize:   "clamp(32px, 4vw, 42px)",
              lineHeight: "var(--leading-tight)",
              color:      "#FAF6F0",
            }}
          >
            Every plate. A Khmer story.
          </h2>
        </FadeInUp>
      </div>

      {/* ── Tab navigation ─────────────────────────────────────── */}
      {/*
       * Each tab button is position: relative so the layoutId
       * underline can absolutely position itself within it.
       * overflow-x: auto + whitespace: nowrap handles 6 tabs on
       * narrow viewports without wrapping.
       */}
      <FadeInUp delay={0.2}>
      <div
        role="tablist"
        aria-label="Menu categories"
        className="menu-tab-list"
        style={{
          display:        "flex",
          justifyContent: "center",
          gap:            "8px",
          marginTop:      "48px",
          overflowX:      "auto",
          paddingBottom:  "1px", // prevents underline clipping
          scrollbarWidth: "none",
        }}
      >
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat.label}
            role="tab"
            aria-selected={activeTab === i}
            onClick={() => setActiveTab(i)}
            style={{
              position:      "relative",
              fontFamily:    "var(--font-body)",
              fontWeight:    "var(--weight-medium)",
              fontSize:      "13px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding:       "12px 24px",
              background:    "none",
              border:        "none",
              cursor:        "pointer",
              color:
                activeTab === i
                  ? "var(--color-foreground-dark)"
                  : "var(--color-muted)",
              transition:    `color var(--transition-base)`,
              whiteSpace:    "nowrap",
              flexShrink:    0,
            }}
          >
            {cat.label}

            {/*
             * layoutId causes Framer Motion to treat all instances
             * of this span as the same element, smoothly translating
             * the underline from tab to tab on state change.
             */}
            {activeTab === i && (
              <motion.span
                layoutId="tab-indicator"
                style={{
                  position:   "absolute",
                  bottom:     0,
                  left:       0,
                  right:      0,
                  height:     "2px",
                  background: "var(--color-primary)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
          </button>
        ))}
      </div>
      </FadeInUp>

      {/* ── Tab panels — cross-fade on switch ─────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          role="tabpanel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: "48px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES[activeTab].items.map((item, i) => (
              <MenuCard key={item.english} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

    </SectionWrapper>
  );
}
