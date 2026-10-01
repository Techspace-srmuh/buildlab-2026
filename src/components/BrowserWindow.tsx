import React from "react";

interface BrowserWindowProps {
  children: React.ReactNode;
  title?: string;
  badge?: string;
  className?: string;
  bodyClassName?: string;
}

export function BrowserWindow({
  children,
  title,
  badge,
  className = "",
  bodyClassName = "",
}: BrowserWindowProps) {
  return (
    <div
      className={`border border-[var(--ink)] rounded-[18px] md:rounded-[22px] bg-[var(--paper)] overflow-hidden shadow-[4px_4px_0px_0px_rgba(8,8,8,0.08)] ${className}`}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--line)] bg-[#EBEBE0]/60 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full border border-[var(--ink)]/40 bg-[var(--ink)]/10 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full border border-[var(--ink)]/40 bg-[var(--ink)]/10 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full border border-[var(--ink)]/40 bg-[var(--ink)]/10 inline-block" />
        </div>

        {title && (
          <span className="text-[11px] md:text-[12px] font-mono font-medium text-[var(--gray)] tracking-wider uppercase truncate max-w-[200px] sm:max-w-xs">
            {title}
          </span>
        )}

        {badge ? (
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--ink)] text-[var(--paper)]">
            {badge}
          </span>
        ) : (
          <div className="w-8" />
        )}
      </div>

      {/* Window Body */}
      <div className={`p-4 md:p-6 ${bodyClassName}`}>{children}</div>
    </div>
  );
}
