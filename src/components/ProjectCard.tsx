import React from "react";
import { Arrow } from "@/components/Arrow";
import { Label } from "@/components/Label";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const trackAccentStyles = {
    beginner: {
      accent: "#1457D9",
      soft: "#DCEBFF",
      border: "hover:border-[#1457D9]",
      badge: "soft-blue" as const,
    },
    intermediate: {
      accent: "#62C94A",
      soft: "#E5F4D8",
      border: "hover:border-[#62C94A]",
      badge: "soft-green" as const,
    },
    advanced: {
      accent: "#F3D21A",
      soft: "#FFF3B8",
      border: "hover:border-[#F3D21A]",
      badge: "soft-yellow" as const,
    },
  }[project.track];

  return (
    <div
      tabIndex={0}
      className={`group relative flex flex-col justify-between border border-[#CFCFC4] rounded-[16px] bg-[var(--paper)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(8,8,8,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] ${trackAccentStyles.border}`}
    >
      <div>
        {/* Top Header: Project Code & Status */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#CFCFC4]">
          <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--gray)] uppercase">
            PROJECT / {project.code || project.id}
          </span>

          <Label variant={trackAccentStyles.badge} size="sm">
            {project.track}
          </Label>
        </div>

        {/* Project Name */}
        <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[var(--ink)] mb-2 group-hover:text-[var(--ink)] leading-snug">
          {project.name}
        </h3>

        {/* Short Description */}
        <p className="text-[14px] text-[var(--ink)]/80 leading-relaxed font-sans line-clamp-3 mb-4">
          {project.shortDescription}
        </p>

        {/* Metadata Tags: Track & Domain */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.domain && (
            <span className="font-mono text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-[#EBEBE0] text-[var(--ink)]">
              {project.domain}
            </span>
          )}
          {project.difficulty && (
            <span className="font-mono text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded border border-[#CFCFC4] text-[var(--gray)]">
              {project.difficulty}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 mt-6 border-t border-[#CFCFC4] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect?.(project)}
          className="font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2 group-hover:underline underline-offset-4 cursor-pointer"
        >
          <span>VIEW PROJECT</span>
          <Arrow direction="right" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
