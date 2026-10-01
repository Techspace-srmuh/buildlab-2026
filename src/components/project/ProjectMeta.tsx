import React from "react";
import { Project } from "@/data/projects";

interface ProjectMetaProps {
  project: Project;
  className?: string;
  showAll?: boolean;
}

export function ProjectMeta({ project, className = "", showAll = true }: ProjectMetaProps) {
  const trackAccents = {
    beginner: {
      border: "border-[var(--blue)]/40",
      bg: "bg-[var(--blue-soft)]",
      text: "text-[var(--blue)]",
      dot: "bg-[var(--blue)]",
      label: "BEGINNER",
    },
    intermediate: {
      border: "border-[var(--green)]/40",
      bg: "bg-[var(--green-soft)]",
      text: "text-[#206313] dark:text-[var(--green)]",
      dot: "bg-[var(--green)]",
      label: "INTERMEDIATE",
    },
    advanced: {
      border: "border-[var(--yellow)]/50",
      bg: "bg-[var(--yellow-soft)]",
      text: "text-[#6b5600] dark:text-[var(--yellow)]",
      dot: "bg-[var(--yellow)]",
      label: "ADVANCED",
    },
  }[project.track];

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {/* Track & Team Size Badge */}
      <span
        className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] border ${trackAccents.border} ${trackAccents.bg} ${trackAccents.text}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${trackAccents.dot}`} />
        <span>{trackAccents.label}</span>
        <span className="opacity-40">/</span>
        <span>{project.teamSize}</span>
      </span>

      {/* Category Tag */}
      <span className="inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-[4px] border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground)]">
        {project.category}
      </span>

      {/* Level Tag (if present) */}
      {showAll && project.level && (
        <span className="inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-wider px-2 py-1 rounded-[4px] border border-[var(--border)] bg-transparent text-[var(--muted-foreground)]">
          LEVEL: {project.level}
        </span>
      )}
    </div>
  );
}
