import React from "react";

interface ProjectFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categories: string[];
  selectedLevel: string;
  onSelectLevel: (level: string) => void;
  levels: string[];
  onResetFilters: () => void;
  isFiltered: boolean;
  className?: string;
}

export function ProjectFilters({
  selectedCategory,
  onSelectCategory,
  categories,
  selectedLevel,
  onSelectLevel,
  levels,
  onResetFilters,
  isFiltered,
  className = "",
}: ProjectFiltersProps) {
  // Rule 8: If a filter would only contain 'ALL' or has no options, do not render it!
  const hasCategories = categories.length > 0;
  const hasMultipleLevels = levels.length > 1;

  if (!hasCategories && !hasMultipleLevels && !isFiltered) {
    return null;
  }

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[var(--border)]/70 ${className}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        {/* Category Filter (Only rendered if track has categories) */}
        {hasCategories && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)] font-bold">
              CATEGORY:
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => onSelectCategory(e.target.value)}
              aria-label="Filter by project category"
              className="font-mono text-[12px] uppercase tracking-wider bg-[var(--surface-card)] text-[var(--foreground)] border border-[var(--border)] rounded-[6px] px-3 py-1.5 focus:outline-none focus:border-[var(--foreground)] cursor-pointer"
            >
              <option value="ALL">ALL CATEGORIES ({categories.length})</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Level Filter (ONLY rendered if track contains >= 2 distinct levels) */}
        {hasMultipleLevels && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)] font-bold">
              LEVEL:
            </span>
            <select
              value={selectedLevel}
              onChange={(e) => onSelectLevel(e.target.value)}
              aria-label="Filter by project level"
              className="font-mono text-[12px] uppercase tracking-wider bg-[var(--surface-card)] text-[var(--foreground)] border border-[var(--border)] rounded-[6px] px-3 py-1.5 focus:outline-none focus:border-[var(--foreground)] cursor-pointer"
            >
              <option value="ALL">ALL LEVELS</option>
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Clear Filters CTA if any filter is active */}
      {isFiltered && (
        <button
          type="button"
          onClick={onResetFilters}
          className="self-start sm:self-auto font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline underline-offset-4 cursor-pointer"
        >
          RESET FILTERS ✕
        </button>
      )}
    </div>
  );
}
