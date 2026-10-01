import React, { useRef } from "react";

interface ProjectSearchProps {
  query: string;
  onChange: (query: string) => void;
  className?: string;
}

export function ProjectSearch({ query, onChange, className = "" }: ProjectSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Search Icon */}
      <div className="absolute left-3.5 pointer-events-none flex items-center text-[var(--muted-foreground)]">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Input Field */}
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects by title, code, domain, or technology..."
        aria-label="Search project catalogue"
        className="w-full bg-[var(--surface-muted)]/50 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] font-mono text-[13px] pl-10 pr-20 py-2.5 rounded-[8px] border border-[var(--border)] focus:outline-none focus:border-[var(--foreground)] focus:bg-[var(--surface-card)] transition-colors"
      />

      {/* Trailing Control: Clear button or Keyboard Shortcut badge */}
      <div className="absolute right-2.5 flex items-center gap-1.5">
        {query ? (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search input"
            className="font-mono text-[11px] font-bold px-1.5 py-0.5 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--border)]/40 transition-colors cursor-pointer"
          >
            CLEAR
          </button>
        ) : (
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]/60 px-1.5 py-0.5 rounded border border-[var(--border)]/60 bg-[var(--surface-card)]">
            SEARCH
          </span>
        )}
      </div>
    </div>
  );
}
