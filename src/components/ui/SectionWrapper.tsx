import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  dark = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      style={{
        background: dark ? "var(--color-background-dark)" : "var(--color-background)",
        color: dark ? "var(--color-foreground-dark)" : "var(--color-foreground)",
      }}
      className={className}
    >
      <div
        className="mx-auto py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)]"
        style={{ maxWidth: "var(--max-content)" }}
      >
        {children}
      </div>
    </section>
  );
}
