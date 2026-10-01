import React from "react";

interface TechStackOptionsProps {
  options: string[];
  track?: "beginner" | "intermediate" | "advanced";
  className?: string;
}

export function TechStackOptions({
  options,
  track = "beginner",
  className = "",
}: TechStackOptionsProps) {
  if (!options || options.length === 0) return null;

  const trackTheme = {
    beginner: {
      accentText: "text-[var(--blue)]",
      badgeBg: "bg-[var(--blue-soft)]",
      borderHover: "hover:border-[var(--blue)]",
      numberActive: "group-hover:border-[var(--blue)] group-hover:text-[var(--blue)]",
    },
    intermediate: {
      accentText: "text-[#206313] dark:text-[var(--green)]",
      badgeBg: "bg-[var(--green-soft)]",
      borderHover: "hover:border-[var(--green)]",
      numberActive: "group-hover:border-[var(--green)] group-hover:text-[#206313] dark:group-hover:text-[var(--green)]",
    },
    advanced: {
      accentText: "text-[#6b5600] dark:text-[var(--yellow)]",
      badgeBg: "bg-[var(--yellow-soft)]",
      borderHover: "hover:border-[var(--yellow)]",
      numberActive: "group-hover:border-[var(--yellow)] group-hover:text-[#6b5600] dark:group-hover:text-[var(--yellow)]",
    },
  }[track];

  return (
    <div className={`space-y-3.5 ${className}`}>
      {/* Header with CHOOSE ONE message */}
      <div className="flex items-center gap-3 pb-2 border-b border-[var(--border)]/70">
        <span
          className="font-mono text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--foreground)] text-[color:var(--background)]"
          style={{ color: "var(--background)" }}
        >
          CHOOSE ONE
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted-foreground)]">
          Pick one implementation path
        </span>
      </div>

      <p className="font-sans text-[12.5px] text-[var(--muted-foreground)] leading-normal">
        Different cohorts build the same problem statement using different stacks. Pick exactly{" "}
        <strong className="text-[var(--foreground)] font-semibold underline underline-offset-2">one</strong> option below for your implementation.
      </p>

      {/* Alternative option blocks */}
      <div className="grid grid-cols-1 gap-2.5 pt-1">
        {options.map((option, idx) => {
          const optionNumber = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={idx}
              className={`group flex items-center justify-between gap-4 p-3.5 rounded-[10px] border border-[var(--border)] bg-[var(--surface-muted)]/40 transition-all duration-200 hover:-translate-x-0.5 ${trackTheme.borderHover} hover:bg-[var(--surface-card)] hover:shadow-[2px_2px_0px_0px_rgba(8,8,8,0.06)]`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Option Number Box */}
                <div
                  className={`w-9 h-8 rounded-[6px] shrink-0 border border-[var(--border)] bg-[var(--surface-card)] flex items-center justify-center font-mono text-[12px] font-black text-[var(--foreground)] transition-colors ${trackTheme.numberActive}`}
                >
                  {optionNumber}
                </div>

                {/* Stack Content */}
                <div className="min-w-0">
                  <span className="font-mono text-[13.5px] font-bold text-[var(--foreground)] tracking-tight break-words">
                    {option}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
