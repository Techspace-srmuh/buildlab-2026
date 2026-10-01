import React from "react";
import { Project } from "@/data/projects";
import { Arrow } from "@/components/Arrow";

interface ProjectIndexItemProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectIndexItem({ project, onSelect }: ProjectIndexItemProps) {
  const trackAccents = {
    beginner: {
      accentBorder: "hover:border-[var(--blue)]",
      indicator: "bg-[var(--blue)]",
      codeText: "text-[var(--blue)]",
      badgeText: "text-[var(--blue)]",
      badgeBg: "bg-[var(--blue-soft)]",
      badgeBorder: "border-[var(--blue)]/30",
    },
    intermediate: {
      accentBorder: "hover:border-[var(--green)]",
      indicator: "bg-[var(--green)]",
      codeText: "text-[#206313] dark:text-[var(--green)]",
      badgeText: "text-[#206313] dark:text-[var(--green)]",
      badgeBg: "bg-[var(--green-soft)]",
      badgeBorder: "border-[var(--green)]/30",
    },
    advanced: {
      accentBorder: "hover:border-[var(--yellow)]",
      indicator: "bg-[var(--yellow)]",
      codeText: "text-[#6b5600] dark:text-[var(--yellow)]",
      badgeText: "text-[#6b5600] dark:text-[var(--yellow)]",
      badgeBg: "bg-[var(--yellow-soft)]",
      badgeBorder: "border-[var(--yellow)]/40",
    },
  }[project.track];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`Open technical dossier for ${project.code}: ${project.title}`}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      className={`group relative flex flex-col justify-between border border-[var(--border)] rounded-[12px] bg-[var(--surface-card)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(8,8,8,0.1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] ${trackAccents.accentBorder}`}
    >
      <div>
        {/* Top Header: Project Code & Track / Team Info */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[var(--border)]/80">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-[2px] ${trackAccents.indicator} transition-transform duration-200 group-hover:scale-110`}
            />
            <span className={`font-mono text-[13px] font-black tracking-widest ${trackAccents.codeText}`}>
              {project.code}
            </span>
          </div>

          <div
            className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] border ${trackAccents.badgeBorder} ${trackAccents.badgeBg} ${trackAccents.badgeText}`}
          >
            <span>{project.track}</span>
            <span className="opacity-30 mx-1">/</span>
            <span>{project.teamSize}</span>
          </div>
        </div>

        {/* Project Title (Condensed editorial display font) */}
        <h3 className="font-display font-black text-xl sm:text-[22px] uppercase tracking-tight text-[var(--foreground)] mb-2 leading-snug group-hover:underline underline-offset-4 decoration-1">
          {project.title}
        </h3>

        {/* Short Brief excerpt */}
        <p className="font-sans text-[13px] text-[var(--foreground)]/80 leading-relaxed line-clamp-3 mb-4">
          {project.brief}
        </p>
      </div>

      {/* Footer Strip: Category, Level & Action */}
      <div className="pt-3 border-t border-[var(--border)]/70 flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[var(--surface-muted)] text-[var(--foreground)]">
            {project.category}
          </span>
          {project.level && (
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted-foreground)]">
              {project.level}
            </span>
          )}
        </div>

        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform shrink-0">
          <span>VIEW DOSSIER</span>
          <Arrow direction="right" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
