"use client";

import React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90",
  secondary:
    "border border-[var(--color-primary)] text-[var(--color-primary)]" +
    " hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)]",
  ghost: "text-[var(--color-primary)] hover:opacity-70",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-[var(--space-4)] py-[var(--space-2)] text-[var(--text-sm)]",
  md: "px-[var(--space-6)] py-[var(--space-3)] text-[var(--text-base)]",
  lg: "px-[var(--space-8)] py-[var(--space-4)] text-[var(--text-lg)]",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center cursor-pointer select-none uppercase" +
  " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]" +
  " focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const baseStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontWeight: "var(--weight-medium)",
  letterSpacing: "var(--tracking-button)",
  borderRadius: "var(--radius-none)",
  transition: "var(--transition-base)",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  className,
  disabled = false,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [BASE_CLASSES, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        onClick={disabled ? undefined : (onClick as React.MouseEventHandler<HTMLAnchorElement>)}
        className={classes}
        style={baseStyle}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={classes}
      style={baseStyle}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
