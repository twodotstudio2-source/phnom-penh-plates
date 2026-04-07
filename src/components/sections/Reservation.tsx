"use client";

import React, { useState } from "react";
import { SectionWrapper, Button } from "@/components/ui";

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "var(--space-3) var(--space-4)",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-base)",
  color: "var(--color-foreground)",
  background: "var(--color-background)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-sm)",
  outline: "none",
  transition: "var(--transition-fast)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--weight-medium)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--color-foreground)",
  marginBottom: "var(--space-2)",
};

export function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    partySize: "",
    requests: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Submission logic goes here
  }

  return (
    <SectionWrapper id="contact">
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
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
          Book Your Visit
        </p>
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
          Make a Reservation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-16)]">
        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-6)]">
            <div>
              <label htmlFor="res-name" style={labelStyle}>Name</label>
              <input
                id="res-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="res-email" style={labelStyle}>Email</label>
              <input
                id="res-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="res-date" style={labelStyle}>Date</label>
              <input
                id="res-date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="res-time" style={labelStyle}>Time</label>
              <select
                id="res-time"
                name="time"
                value={form.time}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select a time</option>
                {["12:00", "13:00", "18:00", "19:00", "20:00", "21:00"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="res-party" style={labelStyle}>Party Size</label>
              <input
                id="res-party"
                name="partySize"
                type="number"
                min={1}
                max={20}
                value={form.partySize}
                onChange={handleChange}
                style={inputStyle}
                placeholder="2"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="res-requests" style={labelStyle}>Special Requests</label>
              <textarea
                id="res-requests"
                name="requests"
                rows={4}
                value={form.requests}
                onChange={handleChange}
                style={{ ...inputStyle, resize: "vertical" }}
                placeholder="Allergies, celebrations, accessibility needs…"
              />
            </div>
          </div>

          <div style={{ marginTop: "var(--space-8)" }}>
            <Button type="submit" size="lg">
              Confirm Reservation
            </Button>
          </div>
        </form>

        {/* Info column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-xl)",
                fontWeight: "var(--weight-bold)",
                marginBottom: "var(--space-3)",
                color: "var(--color-foreground)",
              }}
            >
              Address
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-muted-foreground)",
              }}
            >
              123 Placeholder Street
              <br />
              City, State 00000
            </p>
          </div>

          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-xl)",
                fontWeight: "var(--weight-bold)",
                marginBottom: "var(--space-3)",
                color: "var(--color-foreground)",
              }}
            >
              Hours
            </h3>
            <ul
              style={{
                listStyle: "none",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-muted-foreground)",
              }}
            >
              <li>Monday – Friday: 12pm – 10pm</li>
              <li>Saturday: 11am – 11pm</li>
              <li>Sunday: 11am – 9pm</li>
            </ul>
          </div>

          {/* Map placeholder */}
          <div
            style={{
              background: "var(--color-muted)",
              borderRadius: "var(--radius-md)",
              aspectRatio: "4/3",
              width: "100%",
            }}
            aria-label="Map placeholder"
            role="img"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
