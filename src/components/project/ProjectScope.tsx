import React from "react";

interface ProjectScopeProps {
  core: string[];
  stretch?: string[];
  track?: "beginner" | "intermediate" | "advanced";
  className?: string;
}

export function ProjectScope({
  core,
  stretch,
  track = "beginner",
  className = "",
}: ProjectScopeProps) {
  const hasStretch = stretch && stretch.length > 0;

  const trackTheme = {
    beginner: {
      accentText: "text-[var(--blue)]",
      accentBg: "bg-[var(--blue)]",
      badgeBg: "bg-[var(--blue-soft)]",
      border: "border-[var(--blue)]/40",
      marker: "text-[var(--blue)]",
    },
    intermediate: {
      accentText: "text-[#206313] dark:text-[var(--green)]",
      accentBg: "bg-[var(--green)]",
      badgeBg: "bg-[var(--green-soft)]",
      border: "border-[var(--green)]/40",
      marker: "text-[var(--green)]",
    },
    advanced: {
      accentText: "text-[#6b5600] dark:text-[var(--yellow)]",
      accentBg: "bg-[var(--yellow)]",
      badgeBg: "bg-[var(--yellow-soft)]",
      border: "border-[var(--yellow)]/50",
      marker: "text-[var(--yellow)]",
    },
  }[track];

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Scope Subheader */}
      <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]/70">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
          IMPLEMENTATION SPECIFICATION
        </span>
        <span className="font-mono text-[10px] uppercase font-semibold text-[var(--muted-foreground)]">
          EVALUATION TARGETS
        </span>
      </div>

      <div
        className={`grid grid-cols-1 gap-5 ${
          hasStretch ? "md:grid-cols-2" : "md:grid-cols-1"
        }`}
      >
        {/* CORE: Mandatory Scope Card */}
        <div
          className={`p-5 rounded-[12px] border-2 bg-[var(--surface-card)] flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(8,8,8,0.06)] ${trackTheme.border}`}
        >
          <div>
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-[2px] ${trackTheme.accentBg}`} />
                <span className="font-mono text-[12px] font-black uppercase tracking-wider text-[var(--foreground)]">
                  CORE SCOPE
                </span>
              </div>
              <span
                className={`font-mono text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-[4px] border ${trackTheme.border} ${trackTheme.badgeBg} ${trackTheme.accentText}`}
              >
                REQUIRED TARGET
              </span>
            </div>

            <ul className="space-y-2.5 font-sans text-[13.5px] text-[var(--foreground)] leading-relaxed">
              {core.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span
                    className={`font-mono text-[13px] font-black select-none pt-0.5 shrink-0 ${trackTheme.marker}`}
                  >
                    ✓
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 mt-4 border-t border-[var(--border)]/60 flex items-center justify-between font-mono text-[10px] uppercase text-[var(--muted-foreground)]">
            <span>MANDATORY BENCHMARK</span>
            <span>CRITICAL PATH</span>
          </div>
        </div>

        {/* STRETCH: Optional Scope Card */}
        {hasStretch ? (
          <div className="p-5 rounded-[12px] border-2 border-dashed border-[var(--border)] bg-[var(--surface-muted)]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[var(--border)]/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]/60" />
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--foreground)]">
                    STRETCH SCOPE
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-[4px] border border-[var(--border)] bg-[var(--surface-card)] text-[var(--muted-foreground)]">
                  OPTIONAL · EXTRA MARKS
                </span>
              </div>

              <ul className="space-y-2.5 font-sans text-[13.5px] text-[var(--foreground)]/80 leading-relaxed">
                {stretch.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="font-mono text-[13px] font-bold text-[var(--muted-foreground)] select-none pt-0.5 shrink-0">
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border)]/60 flex items-center justify-between font-mono text-[10px] uppercase text-[var(--muted-foreground)]">
              <span>FOR TOP TIER EVALUATION</span>
              <span>ADDITIONAL MARKS</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
