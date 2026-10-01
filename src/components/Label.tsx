import React from "react";

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "solid" | "outline" | "soft-blue" | "soft-green" | "soft-yellow";
  size?: "sm" | "md";
  className?: string;
}

export function Label({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: LabelProps) {
  const sizeStyles =
    size === "sm"
      ? "text-[11px] tracking-[0.14em] py-0.5 px-2"
      : "text-[12px] md:text-[13px] tracking-[0.16em] py-1 px-2.5";

  let variantStyles = "text-[var(--gray)] font-medium";

  switch (variant) {
    case "solid":
      variantStyles = "bg-[var(--ink)] text-[var(--paper)] font-semibold rounded-[4px]";
      break;
    case "outline":
      variantStyles =
        "border border-[var(--ink)] text-[var(--ink)] font-semibold rounded-[6px]";
      break;
    case "soft-blue":
      variantStyles =
        "bg-[var(--blue-soft)] text-[var(--blue)] font-semibold border border-[var(--blue)]/20 rounded-[6px]";
      break;
    case "soft-green":
      variantStyles =
        "bg-[var(--green-soft)] text-[#2d731e] font-semibold border border-[var(--green)]/30 rounded-[6px]";
      break;
    case "soft-yellow":
      variantStyles =
        "bg-[var(--yellow-soft)] text-[#7a6400] font-semibold border border-[var(--yellow)]/40 rounded-[6px]";
      break;
    default:
      variantStyles = "text-[var(--ink)] font-semibold";
  }

  return (
    <span
      className={`inline-flex items-center uppercase font-mono select-none ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
