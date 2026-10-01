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
      variantStyles = "bg-[var(--foreground)] text-[color:var(--background)] font-semibold rounded-[4px]";
      break;
    case "outline":
      variantStyles =
        "border border-[var(--foreground)] text-[var(--foreground)] font-semibold rounded-[6px]";
      break;
    case "soft-blue":
      variantStyles =
        "bg-[var(--blue-soft)] text-[var(--blue)] font-semibold border border-[var(--blue)]/30 rounded-[6px]";
      break;
    case "soft-green":
      variantStyles =
        "bg-[var(--green-soft)] text-[#206313] dark:text-[var(--green)] font-semibold border border-[var(--green)]/30 rounded-[6px]";
      break;
    case "soft-yellow":
      variantStyles =
        "bg-[var(--yellow-soft)] text-[#6b5600] dark:text-[var(--yellow)] font-semibold border border-[var(--yellow)]/40 rounded-[6px]";
      break;
    default:
      variantStyles = "text-[var(--foreground)] font-semibold";
  }

  const labelStyle: React.CSSProperties = {
    ...(variant === "solid" ? { color: "var(--background)" } : {}),
    ...props.style,
  };

  return (
    <span
      className={`inline-flex items-center uppercase font-mono select-none ${sizeStyles} ${variantStyles} ${className}`}
      style={labelStyle}
      {...props}
    >
      {children}
    </span>
  );
}
