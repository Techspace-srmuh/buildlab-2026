"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({
  className = "",
  showLabel = true,
}: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`h-8 px-2.5 inline-flex items-center gap-1.5 border border-[var(--border)] rounded-[6px] bg-[var(--surface-muted)] opacity-60 ${className}`}
        aria-hidden="true"
      >
        <span className="w-3.5 h-3.5 rounded-full border border-[var(--border)] inline-block" />
        {showLabel && (
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-transparent select-none">
            LIGHT
          </span>
        )}
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`h-8 px-2.5 inline-flex items-center gap-1.5 border border-[var(--border)] rounded-[6px] bg-[var(--surface-card)] hover:border-[var(--foreground)] text-[var(--foreground)] font-mono text-[10px] md:text-[11px] uppercase tracking-wider transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] select-none hover:shadow-[2px_2px_0px_0px_var(--border)] ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Current: ${isDark ? "Dark" : "Light"} mode. Click to toggle.`}
    >
      <span className="text-[13px] leading-none inline-block text-[var(--foreground)]" aria-hidden="true">
        {isDark ? "◑" : "◐"}
      </span>
      {showLabel && (
        <span className="font-bold tracking-wider">
          {isDark ? "DARK" : "LIGHT"}
        </span>
      )}
    </button>
  );
}
