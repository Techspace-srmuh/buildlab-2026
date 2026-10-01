import React from "react";
import Link from "next/link";
import { Arrow } from "./Arrow";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  arrowDirection?: "right" | "up-right";
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  arrowDirection = "right",
  className = "",
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-mono font-medium tracking-[0.08em] transition-all duration-200 active:scale-[0.98] select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-[12px] uppercase px-3.5 py-2 rounded-[6px] gap-2",
    md: "text-[13px] md:text-[14px] uppercase px-5 py-3 rounded-[8px] gap-2.5",
    lg: "text-[14px] md:text-[15px] uppercase px-6 py-4 rounded-[10px] gap-3 font-semibold",
  }[size];

  const variantStyles = {
    primary:
      "bg-[var(--ink)] text-[var(--paper)] border border-[var(--ink)] hover:bg-[#1a1a1a] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[var(--ink)] border border-[var(--line)] hover:border-[var(--ink)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[var(--ink)] hover:bg-[var(--line)]/30 hover:underline underline-offset-4",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
          <Arrow direction={arrowDirection} className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none shadow-none hover:translate-y-0";

  if (href && !props.disabled) {
    const isExternal = href.startsWith("http") || target === "_blank";
    return (
      <Link
        href={href}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${
        props.disabled ? disabledStyles : ""
      } ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
