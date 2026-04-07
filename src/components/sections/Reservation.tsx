"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, MapPin, CheckCircle2, Minus, Plus } from "lucide-react";
import { SectionWrapper, Button, FadeInUp } from "@/components/ui";
import { submitReservation } from "@/app/actions/reservation";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.union([z.string().email("Invalid email address"), z.literal("")]),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Please select a time"),
  party_size: z.number().min(1).max(20),
  requests: z.string(),
});

type FormData = z.infer<typeof schema>;

const TIME_OPTIONS = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM",
  "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "13px",
  fontWeight: "var(--weight-medium)" as React.CSSProperties["fontWeight"],
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "var(--color-muted)",
  marginBottom: "8px",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-xs)",
  color: "var(--color-accent)",
  marginTop: "4px",
};

const fieldStyle: React.CSSProperties = {
  marginBottom: "var(--space-6)",
};

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      party_size: 2,
      requests: "",
    },
  });

  const partySize = watch("party_size");

  async function onSubmit(data: FormData) {
    setServerError(null);
    const result = await submitReservation(data);
    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error);
    }
  }

  return (
    <SectionWrapper id="reservation">
      <style>{`
        .res-input {
          display: block;
          width: 100%;
          padding: var(--space-3) 0;
          font-family: var(--font-body);
          font-size: var(--text-base);
          color: var(--color-foreground);
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(200, 169, 110, 0.4);
          border-radius: 0;
          outline: none;
          transition: var(--transition-fast);
        }
        .res-input:focus {
          border-bottom-color: var(--color-primary);
        }
        .res-select option {
          background: var(--color-background);
          color: var(--color-foreground);
        }
        .stepper-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: transparent;
          border: 1px solid rgba(200, 169, 110, 0.4);
          border-radius: 0;
          color: var(--color-foreground);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .stepper-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .stepper-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>

      <div>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              fontWeight: "var(--weight-medium)" as React.CSSProperties["fontWeight"],
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              marginBottom: "var(--space-4)",
            }}
          >
            Reservations
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(var(--text-3xl), 4vw, var(--text-5xl))",
              fontWeight: "var(--weight-bold)" as React.CSSProperties["fontWeight"],
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-foreground)",
            }}
          >
            Reserve your table.
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-16)]">
          {/* Left: Form + Telegram CTA */}
          <FadeInUp delay={0.1}>
          <div>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "var(--space-12) 0",
                  gap: "var(--space-4)",
                }}
              >
                <CheckCircle2 size={48} color="var(--color-primary)" />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-2xl)",
                    fontWeight: "var(--weight-bold)" as React.CSSProperties["fontWeight"],
                    color: "var(--color-foreground)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  Reservation received.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-muted)",
                  }}
                >
                  We&apos;ll see you at the table.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Name */}
                <div style={fieldStyle}>
                  <label htmlFor="res-name" style={labelStyle}>Name</label>
                  <input
                    id="res-name"
                    type="text"
                    autoComplete="name"
                    className="res-input"
                    placeholder="Your full name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p style={errorStyle}>{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div style={fieldStyle}>
                  <label htmlFor="res-email" style={labelStyle}>Email</label>
                  <input
                    id="res-email"
                    type="email"
                    autoComplete="email"
                    className="res-input"
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p style={errorStyle}>{errors.email.message}</p>
                  )}
                </div>

                {/* Date */}
                <div style={fieldStyle}>
                  <label htmlFor="res-date" style={labelStyle}>Date</label>
                  <input
                    id="res-date"
                    type="date"
                    min={today}
                    className="res-input"
                    {...register("date")}
                  />
                  {errors.date && (
                    <p style={errorStyle}>{errors.date.message}</p>
                  )}
                </div>

                {/* Time */}
                <div style={fieldStyle}>
                  <label htmlFor="res-time" style={labelStyle}>Time</label>
                  <select
                    id="res-time"
                    className="res-input res-select"
                    {...register("time")}
                  >
                    <option value="">Select a time</option>
                    {TIME_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && (
                    <p style={errorStyle}>{errors.time.message}</p>
                  )}
                </div>

                {/* Party Size */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Party Size</label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-4)",
                      paddingBottom: "var(--space-3)",
                      borderBottom: "1px solid rgba(200, 169, 110, 0.4)",
                    }}
                  >
                    <button
                      type="button"
                      className="stepper-btn"
                      disabled={partySize <= 1}
                      onClick={() => setValue("party_size", Math.max(1, partySize - 1))}
                      aria-label="Decrease party size"
                    >
                      <Minus size={14} />
                    </button>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-base)",
                        color: "var(--color-foreground)",
                        minWidth: "2ch",
                        textAlign: "center",
                      }}
                    >
                      {partySize}
                    </span>
                    <button
                      type="button"
                      className="stepper-btn"
                      disabled={partySize >= 20}
                      onClick={() => setValue("party_size", Math.min(20, partySize + 1))}
                      aria-label="Increase party size"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Special Requests */}
                <div style={fieldStyle}>
                  <label htmlFor="res-requests" style={labelStyle}>Special Requests</label>
                  <textarea
                    id="res-requests"
                    rows={4}
                    className="res-input"
                    placeholder="Allergies, celebrations, accessibility needs…"
                    style={{ resize: "vertical" }}
                    {...register("requests")}
                  />
                </div>

                {/* Submit */}
                <div style={{ marginTop: "var(--space-8)" }}>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending…" : "Reserve Your Table"}
                  </Button>
                  {serverError && (
                    <p style={{ ...errorStyle, marginTop: "var(--space-3)", textAlign: "center" }}>
                      {serverError}
                    </p>
                  )}
                </div>
              </form>
            )}

            {/* Telegram CTA */}
            <div style={{ marginTop: "var(--space-8)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-4)",
                  margin: "var(--space-6) 0",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: "var(--color-border)",
                    opacity: 0.3,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                  }}
                >
                  or
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: "var(--color-border)",
                    opacity: 0.3,
                  }}
                />
              </div>
              <a
                href="https://t.me/PhnomPenhPlates"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "var(--space-3)",
                  width: "100%",
                  padding: "var(--space-4) var(--space-6)",
                  background: "#2D4A3E",
                  color: "#FAF6F0",
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--weight-medium)" as React.CSSProperties["fontWeight"],
                  fontSize: "var(--text-base)",
                  letterSpacing: "var(--tracking-button)",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "var(--transition-base)",
                }}
              >
                <Send size={16} />
                Message us on Telegram
              </a>
            </div>
          </div>
          </FadeInUp>

          {/* Right: Info column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Address */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-xl)",
                  fontWeight: "var(--weight-bold)" as React.CSSProperties["fontWeight"],
                  color: "var(--color-foreground)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Phnom Penh Plates
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-muted)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                Corner of Street 308 &amp; 57
                <br />
                BKK1, Phnom Penh, Cambodia
              </p>
            </div>

            {/* Hours */}
            <div style={{ marginTop: "var(--space-10)" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--weight-medium)" as React.CSSProperties["fontWeight"],
                  color: "var(--color-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-widest)",
                  marginBottom: "var(--space-4)",
                }}
              >
                Hours
              </p>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--color-muted)",
                  lineHeight: "var(--leading-relaxed)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                }}
              >
                <p>Lunch: Tuesday – Sunday, 11:00 AM – 2:30 PM</p>
                <p>Dinner: Tuesday – Sunday, 5:30 PM – 10:30 PM</p>
                <p>Rooftop Bar: 5:00 PM – 11:30 PM</p>
                <p>Closed Mondays</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                marginTop: "var(--space-10)",
                background: "var(--color-background-dark)",
                height: "240px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--space-2)",
                color: "var(--color-muted)",
              }}
              aria-label="Map placeholder — BKK1, Phnom Penh"
              role="img"
            >
              <MapPin size={20} />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                }}
              >
                BKK1, Phnom Penh
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
