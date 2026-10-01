import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  withGrid?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  bordered = true,
  withGrid = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-16 md:py-24 lg:py-28 ${
        id ? "scroll-mt-16 md:scroll-mt-20" : ""
      } ${bordered ? "border-b border-[var(--border)]" : ""} ${
        withGrid ? "grid-editorial" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
