import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  clean?: boolean; // If true, removes side padding
}

export function Container({
  children,
  className = "",
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] ${
        clean ? "" : "px-4 sm:px-6 md:px-8 lg:px-12"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
