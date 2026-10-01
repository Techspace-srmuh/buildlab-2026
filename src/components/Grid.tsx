import React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Grid({ children, className = "", ...props }: GridProps) {
  return (
    <div
      className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
