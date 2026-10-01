"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Project } from "@/data/projects";
import { Arrow } from "@/components/Arrow";
import { ProjectScope } from "./ProjectScope";
import { TechStackOptions } from "./TechStackOptions";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Store previously focused element and lock body scroll
  useEffect(() => {
    if (project) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        dialogRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        }

        // Trap focus inside modal
        if (e.key === "Tab" && dialogRef.current) {
          const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        clearTimeout(timer);
        previouslyFocusedElement.current?.focus();
      };
    }
  }, [project, onClose]);

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const trackTheme = project
    ? {
        beginner: {
          accentColor: "var(--blue)",
          accentBg: "bg-[var(--blue)]",
          softBg: "bg-[var(--blue-soft)]",
          border: "border-[var(--blue)]/40",
          text: "text-[var(--blue)]",
          barGradient: "from-[var(--blue)] to-[var(--cyan)]",
          label: "BEGINNER",
        },
        intermediate: {
          accentColor: "var(--green)",
          accentBg: "bg-[var(--green)]",
          softBg: "bg-[var(--green-soft)]",
          border: "border-[var(--green)]/40",
          text: "text-[#206313] dark:text-[var(--green)]",
          barGradient: "from-[var(--green)] to-[var(--cyan)]",
          label: "INTERMEDIATE",
        },
        advanced: {
          accentColor: "var(--yellow)",
          accentBg: "bg-[var(--yellow)]",
          softBg: "bg-[var(--yellow-soft)]",
          border: "border-[var(--yellow)]/50",
          text: "text-[#6b5600] dark:text-[var(--yellow)]",
          barGradient: "from-[var(--yellow)] to-[var(--green)]",
          label: "ADVANCED",
        },
      }[project.track]
    : null;

  return (
    <AnimatePresence>
      {project && trackTheme && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden"
          role="presentation"
        >
          {/* Backdrop with restrained dimming & slight blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-[2px] cursor-pointer"
            aria-hidden="true"
          />

          {/* Centered Editorial Technical Dossier Panel */}
          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dossier-title"
            aria-describedby="dossier-brief"
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.98,
              y: shouldReduceMotion ? 0 : 14,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.98,
              y: shouldReduceMotion ? 0 : 14,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
              ease: easeCurve,
            }}
            className="relative w-full h-full sm:h-auto sm:max-h-[92vh] max-w-4xl bg-[var(--background)] border-0 sm:border border-[var(--border)] sm:rounded-[16px] shadow-[0px_24px_70px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden z-10 focus:outline-none"
          >
            {/* Top Color Accent Line */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${trackTheme.barGradient}`} />

            {/* Dossier Control Header Strip */}
            <div className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-[var(--border)] bg-[var(--surface-muted)]/70">
              <div className="flex items-center gap-2.5">
                <span className={`w-2.5 h-2.5 rounded-full ${trackTheme.accentBg}`} />
                <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--foreground)]">
                  {project.code} · {trackTheme.label}
                </span>
              </div>

              {/* Close Button with Keyboard Hint */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project dossier"
                className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--foreground)] px-2.5 py-1 rounded-[6px] border border-[var(--border)] hover:border-[var(--foreground)] bg-[var(--surface-card)] transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]"
              >
                <span>CLOSE</span>
                <span className="text-[10px] opacity-60 hidden sm:inline">[ESC]</span>
                <span className="text-[13px] leading-none ml-0.5">✕</span>
              </button>
            </div>

            {/* Scrollable Dossier Technical Body */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 sm:py-8 space-y-8">
              {/* Dossier Title & Metadata Hero */}
              <div className="space-y-4">
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <div
                    className={`inline-flex items-center gap-2 font-mono text-[12px] font-black uppercase tracking-wider px-3 py-1 rounded-[4px] border ${trackTheme.border} ${trackTheme.softBg} ${trackTheme.text}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${trackTheme.accentBg}`} />
                    <span>{trackTheme.label}</span>
                    <span className="opacity-30">/</span>
                    <span>{project.teamSize}</span>
                  </div>

                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground)]">
                    {project.category}
                  </span>

                  {project.level && (
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] border border-[var(--border)] bg-transparent text-[var(--muted-foreground)]">
                      LEVEL: {project.level}
                    </span>
                  )}
                </div>

                {/* Project Title with Code Flag */}
                <div className="space-y-1">
                  <h2
                    id="dossier-title"
                    className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] text-[var(--foreground)] leading-[0.95]"
                  >
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* PROJECT BRIEF */}
              <section className="space-y-3 border-t border-[var(--border)] pt-6">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)] block">
                  PROJECT BRIEF
                </span>

                <div className="p-4 sm:p-5 rounded-[12px] border border-[var(--border)] bg-[var(--surface-muted)]/30">
                  <p
                    id="dossier-brief"
                    className="font-sans text-[14.5px] sm:text-[15.5px] text-[var(--foreground)]/90 leading-relaxed max-w-3xl"
                  >
                    {project.brief}
                  </p>
                </div>
              </section>

              {/* THE BUILD */}
              <section className="space-y-3 border-t border-[var(--border)] pt-6">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)] block">
                  THE BUILD
                </span>

                <ProjectScope
                  core={project.core}
                  stretch={project.stretch}
                  track={project.track}
                />
              </section>

              {/* TECH STACK */}
              <section className="space-y-3 border-t border-[var(--border)] pt-6">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)] block">
                  TECH STACK
                </span>

                <TechStackOptions
                  options={project.techStack}
                  track={project.track}
                />
              </section>

              {/* REPOSITORY */}
              <section className="space-y-3 border-t border-[var(--border)] pt-6">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)] block">
                  REPOSITORY
                </span>

                <div className="p-4 sm:p-5 rounded-[12px] border border-[var(--border)] bg-[var(--surface-muted)]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {project.repository ? (
                    <>
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">
                          BASE REPOSITORY (GITHUB ORGANIZATION)
                        </span>
                        <div className="font-mono text-[13px] font-bold text-[var(--foreground)]">
                          {project.repository}
                        </div>
                      </div>

                      <a
                        href={`https://github.com/Techspace-srmuh/${project.repository}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wider bg-[var(--foreground)] text-[color:var(--background)] hover:opacity-90 px-5 py-2.5 rounded-[6px] transition-all select-none cursor-pointer shadow-[2px_2px_0px_0px_rgba(8,8,8,0.15)] shrink-0"
                        style={{ color: "var(--background)" }}
                      >
                        <span>VIEW REPOSITORY</span>
                        <Arrow direction="up-right" className="w-3.5 h-3.5" />
                      </a>
                    </>
                  ) : (
                    <div className="font-mono text-[12px] text-[var(--muted-foreground)] italic">
                      Repository will be provisioned directly upon PRD approval.
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Dossier Bottom Action Footer */}
            <div className="shrink-0 px-5 sm:px-8 py-3.5 border-t border-[var(--border)] bg-[var(--surface-muted)]/70 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
              <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                <span>{project.code}</span>
                <span>•</span>
                <span className="uppercase">{project.track}</span>
                <span>•</span>
                <span className="uppercase">{project.teamSize}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)] hover:underline underline-offset-4 cursor-pointer"
                >
                  ← BACK TO CATALOGUE
                </button>
                <span className="text-[var(--border)]">•</span>
                <Link
                  href="/#projects"
                  className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:underline underline-offset-4"
                >
                  RETURN TO HOME
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
