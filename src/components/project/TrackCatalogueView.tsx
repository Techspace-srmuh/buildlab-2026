"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Project,
  getProjectsByTrack,
  getTrackCategories,
  getTrackLevels,
  CATALOGUE_STATS,
} from "@/data/projects";
import { TRACK_DETAILS } from "@/data/tracks";
import { ProjectIndexItem } from "./ProjectIndexItem";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectSearch } from "./ProjectSearch";

interface TrackCatalogueViewProps {
  trackId: "beginner" | "intermediate" | "advanced";
}

export function TrackCatalogueView({ trackId }: TrackCatalogueViewProps) {
  const trackInfo = TRACK_DETAILS[trackId];
  const allTrackProjects = useMemo(() => getProjectsByTrack(trackId), [trackId]);
  const categories = useMemo(() => getTrackCategories(trackId), [trackId]);
  const levels = useMemo(() => getTrackLevels(trackId), [trackId]);

  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedLevel, setSelectedLevel] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<Project | null>(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project")?.toLowerCase();

    if (projectId) {
      return (
        allTrackProjects.find(
          (p) =>
            p.id.toLowerCase() === projectId ||
            p.code.toLowerCase() === projectId ||
            p.id.toLowerCase() === projectId.replace("-", "")
        ) || null
      );
    }
    return null;
  });

  // Deep linking: Sync active project on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get("project")?.toLowerCase();

      if (projectId) {
        const match = allTrackProjects.find(
          (p) =>
            p.id.toLowerCase() === projectId ||
            p.code.toLowerCase() === projectId ||
            p.id.toLowerCase() === projectId.replace("-", "")
        );
        setActiveProject(match || null);
      } else {
        setActiveProject(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [allTrackProjects]);

  const handleOpenProject = useCallback((project: Project) => {
    setActiveProject(project);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("project", project.code.toLowerCase());
      window.history.pushState({}, "", url.toString());
    }
  }, []);

  const handleCloseProject = useCallback(() => {
    setActiveProject(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("project");
      window.history.pushState({}, "", url.toString());
    }
  }, []);

  // Filter & Search Logic operating STRICTLY on the current track's projects
  const filteredProjects = useMemo(() => {
    return allTrackProjects.filter((project) => {
      // Category match
      if (selectedCategory !== "ALL" && project.category !== selectedCategory) {
        return false;
      }

      // Level match
      if (selectedLevel !== "ALL" && project.level !== selectedLevel) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inCode = project.code.toLowerCase().includes(q);
        const inTitle = project.title.toLowerCase().includes(q);
        const inCategory = project.category.toLowerCase().includes(q);
        const inBrief = project.brief.toLowerCase().includes(q);
        const inTech = project.techStack.some((t) => t.toLowerCase().includes(q));
        const inRepo = project.repository?.toLowerCase().includes(q) || false;

        if (!inCode && !inTitle && !inCategory && !inBrief && !inTech && !inRepo) {
          return false;
        }
      }

      return true;
    });
  }, [allTrackProjects, selectedCategory, selectedLevel, searchQuery]);

  const isFiltered =
    selectedCategory !== "ALL" ||
    selectedLevel !== "ALL" ||
    Boolean(searchQuery.trim());

  const handleResetFilters = () => {
    setSelectedCategory("ALL");
    setSelectedLevel("ALL");
    setSearchQuery("");
  };

  const trackTabs: { id: "beginner" | "intermediate" | "advanced"; label: string; count: number }[] = [
    { id: "beginner", label: "BEGINNER", count: CATALOGUE_STATS.beginner },
    { id: "intermediate", label: "INTERMEDIATE", count: CATALOGUE_STATS.intermediate },
    { id: "advanced", label: "ADVANCED", count: CATALOGUE_STATS.advanced },
  ];

  return (
    <div className="space-y-8">
      {/* Top Track Switcher Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-[12px] border border-[var(--border)] bg-[var(--surface-muted)]/40">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)] font-bold mr-1">
            SELECT TRACK:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {trackTabs.map((tab) => {
              const isActive = tab.id === trackId;
              const tabMeta = TRACK_DETAILS[tab.id];

              return (
                <Link
                  key={tab.id}
                  href={`/projects/${tab.id}`}
                  className={`font-mono text-[12px] sm:text-[13px] uppercase tracking-wider px-3.5 py-1.5 rounded-[6px] transition-all duration-150 flex items-center gap-2 select-none ${
                    isActive
                      ? "bg-[var(--foreground)] text-[color:var(--background)] font-bold shadow-[2px_2px_0px_0px_rgba(8,8,8,0.15)]"
                      : "bg-[var(--surface-card)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)] font-medium"
                  }`}
                  style={isActive ? { color: "var(--background)" } : undefined}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[var(--cyan)]" : ""}`} style={{ backgroundColor: isActive ? undefined : tabMeta.accentHex }} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isActive
                        ? "bg-black/25 text-[color:var(--background)]"
                        : "bg-[var(--surface-muted)] text-[var(--muted-foreground)] border border-[var(--border)]"
                    }`}
                    style={isActive ? { color: "var(--background)" } : undefined}
                  >
                    {tab.count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Home breadcrumb / Return to home button */}
        <Link
          href="/#projects"
          className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)] px-3 py-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--foreground)] transition-colors self-start sm:self-auto flex items-center gap-1.5 shadow-[1px_1px_0px_0px_rgba(8,8,8,0.1)]"
        >
          <span>←</span>
          <span>RETURN TO HOME</span>
        </Link>
      </div>

      {/* Track Hero Banner */}
      <div className="border border-[var(--border)] rounded-[14px] p-6 sm:p-8 bg-[var(--surface-card)] shadow-[2px_2px_0px_0px_rgba(8,8,8,0.06)] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: trackInfo.accentHex }} />
            <span className="font-mono text-[12px] font-black uppercase tracking-[0.2em] text-[var(--foreground)]">
              TRACK {trackInfo.number} · {trackInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] uppercase font-bold text-[var(--muted-foreground)]">
            <span className="px-2.5 py-1 rounded bg-[var(--surface-muted)] border border-[var(--border)] text-[var(--foreground)]">
              {trackInfo.count} PROBLEM STATEMENTS
            </span>
            <span className="px-2.5 py-1 rounded bg-[var(--surface-muted)] border border-[var(--border)] text-[var(--foreground)]">
              FORMAT: {trackInfo.teamSize}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[var(--foreground)] leading-none">
            {trackInfo.headline}
          </h2>
          <p className="font-sans text-[14px] sm:text-[15px] text-[var(--foreground)]/80 max-w-2xl leading-relaxed">
            {trackInfo.description} Choose an authoritative statement below to inspect its Core scope, Stretch targets, and alternative tech stack paths.
          </p>
        </div>
      </div>

      {/* Search & Dynamic Track-Specific Filters */}
      <div className="space-y-4 border border-[var(--border)] rounded-[12px] bg-[var(--surface-card)] p-5 sm:p-6 shadow-[2px_2px_0px_0px_rgba(8,8,8,0.06)]">
        <ProjectSearch query={searchQuery} onChange={setSearchQuery} />

        <ProjectFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={categories}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          levels={levels}
          onResetFilters={handleResetFilters}
          isFiltered={isFiltered}
        />
      </div>

      {/* Results Status Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[var(--muted-foreground)] px-1">
        <span>
          SHOWING {filteredProjects.length} OF {allTrackProjects.length} {trackInfo.name.toUpperCase()} PROJECTS
        </span>
        {isFiltered && (
          <span className="text-[var(--foreground)] font-semibold">
            FILTERS ACTIVE
          </span>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <ProjectIndexItem
              key={project.id}
              project={project}
              onSelect={handleOpenProject}
            />
          ))}
        </div>
      ) : (
        /* Empty Track Filter Results */
        <div className="border border-dashed border-[var(--border)] rounded-[12px] p-10 sm:p-14 text-center bg-[var(--surface-muted)]/20">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)] block mb-2">
            00 {"//"} NO MATCHES FOUND
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[var(--foreground)] mb-3">
            NO {trackInfo.name.toUpperCase()} PROJECTS MATCH YOUR QUERY
          </h3>
          <p className="font-sans text-[14px] text-[var(--muted-foreground)] max-w-md mx-auto mb-6">
            Try adjusting your search terms or resetting filters to browse all {allTrackProjects.length} projects in this track.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center font-mono text-[12px] font-bold uppercase tracking-wider bg-[var(--foreground)] text-[color:var(--background)] px-4 py-2 rounded-[6px] hover:opacity-90 transition-opacity cursor-pointer"
            style={{ color: "var(--background)" }}
          >
            RESET FILTERS
          </button>
        </div>
      )}

      {/* Accessible Detail Dossier Modal Overlay */}
      <ProjectDetail project={activeProject} onClose={handleCloseProject} />
    </div>
  );
}
