"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { BrowserWindow } from "@/components/BrowserWindow";
import { ProjectCard } from "@/components/ProjectCard";
import {
  PROJECTS,
  PROJECT_TRACK_FILTERS,
  ProjectTrack,
} from "@/data/projects";

export function Projects() {
  const [selectedTrack, setSelectedTrack] = useState<ProjectTrack>("all");
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  // Filter projects by track when populated
  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedTrack === "all") return true;
    return project.track === selectedTrack;
  });

  const hasProjects = PROJECTS.length > 0;

  return (
    <Section id="projects" className="bg-[var(--background)]">
      <Container>
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
              04 / PROJECTS
            </span>
          </div>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
            PROJECT CATALOGUE
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] uppercase tracking-[-0.03em] leading-[0.9] text-[var(--foreground)]">
              WHAT WILL
              <br />
              <span className="spectrum-gradient-text">YOU BUILD?</span>
            </h2>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--foreground)] leading-relaxed font-medium">
              Explore the projects available for BuildLab ’26.
            </p>
          </div>
        </div>

        {/* Filter Navigation Bar (Keyboard accessible) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-[var(--border)]">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)] font-semibold mr-2 hidden sm:inline-block">
            FILTER TRACK:
          </span>

          {PROJECT_TRACK_FILTERS.map((filter) => {
            const isActive = selectedTrack === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedTrack(filter.id)}
                aria-pressed={isActive}
                className={`font-mono text-[12px] md:text-[13px] uppercase tracking-widest px-4 py-2 rounded-[6px] transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] ${
                  isActive
                    ? "bg-[var(--foreground)] text-[color:var(--background)] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]"
                    : "bg-transparent text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)] font-medium"
                }`}
                style={isActive ? { color: "var(--background)" } : undefined}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Display Area */}
        {hasProjects ? (
          /* Render Populated Project Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* Intentional Pre-Launch Editorial Empty State */
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeCurve }}
          >
            <BrowserWindow
              title="CATALOGUE.REGISTRY // BL-2026"
              badge="PRE-LAUNCH"
              className="max-w-4xl mx-auto"
              bodyClassName="p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center"
            >
              {/* Geometric Dotted Matrix Icon Accent */}
              <div className="w-16 h-16 rounded-[12px] border border-[var(--border)] bg-[var(--surface-muted)] flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(8,8,8,0.1)] dark:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                <div className="grid grid-cols-3 gap-1.5 p-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--blue)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--cyan)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--green)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--yellow)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--foreground)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--blue)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--cyan)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--green)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--yellow)]" />
                </div>
              </div>

              {/* Dominant Editorial Heading */}
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] text-[var(--foreground)] leading-tight mb-3">
                PROJECT CATALOGUE
                <br />
                <span className="text-[var(--muted-foreground)]">COMING SOON</span>
              </h3>

              {/* Exact Confirmed Message */}
              <p className="font-sans text-[15px] sm:text-[17px] text-[var(--foreground)]/80 max-w-lg leading-relaxed mb-8">
                The BuildLab project catalogue will appear here once the official project list is
                published.
              </p>

              {/* Status Indicator Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-[var(--border)] w-full max-w-md font-mono text-[11px]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-card)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
                  <span className="text-[var(--foreground)] font-semibold uppercase">
                    STATUS: CURATION IN PROGRESS
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-card)] text-[var(--muted-foreground)] uppercase">
                  RELEASE: INAUGURATION DAY
                </div>
              </div>
            </BrowserWindow>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
