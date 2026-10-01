"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Arrow } from "@/components/Arrow";
import { TRACKS } from "@/data/tracks";
import { CATALOGUE_STATS } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" className="bg-[var(--background)]">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
            04 / PROBLEM STATEMENTS
          </span>
        </div>

        {/* Section Headline & Editorial Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] uppercase tracking-[-0.03em] leading-[0.9] text-[var(--foreground)]">
              WHAT WILL
              <br />
              <span className="spectrum-gradient-text">YOU BUILD?</span>
            </h2>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-4 lg:pt-0 lg:pl-8">
            <div className="space-y-2">
              <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-[var(--foreground)] block">
                {CATALOGUE_STATS.total} CURATED ENGINEERING PROBLEM STATEMENTS
              </span>
              <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--muted-foreground)] leading-relaxed font-medium">
                Choose the level that matches you. Explore problem statements across three focused tracks, then inspect their technical dossiers.
              </p>
            </div>
          </div>
        </div>

        {/* The Three Editorial Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRACKS.map((track) => {
            const trackStyles = {
              beginner: {
                accent: "var(--blue)",
                softBg: "bg-[var(--blue-soft)]",
                textAccent: "text-[var(--blue)]",
                borderHover: "hover:border-[var(--blue)]",
                marker: "bg-[var(--blue)]",
                route: "/projects/beginner",
                ctaLabel: "EXPLORE BEGINNER",
              },
              intermediate: {
                accent: "var(--green)",
                softBg: "bg-[var(--green-soft)]",
                textAccent: "text-[#206313] dark:text-[var(--green)]",
                borderHover: "hover:border-[var(--green)]",
                marker: "bg-[var(--green)]",
                route: "/projects/intermediate",
                ctaLabel: "EXPLORE INTERMEDIATE",
              },
              advanced: {
                accent: "var(--yellow)",
                softBg: "bg-[var(--yellow-soft)]",
                textAccent: "text-[#6b5600] dark:text-[var(--yellow)]",
                borderHover: "hover:border-[var(--yellow)]",
                marker: "bg-[var(--yellow)]",
                route: "/projects/advanced",
                ctaLabel: "EXPLORE ADVANCED",
              },
            }[track.id];

            return (
              <Link
                key={track.id}
                href={trackStyles.route}
                className={`group relative flex flex-col justify-between border border-[var(--border)] rounded-[14px] bg-[var(--surface-card)] p-6 sm:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(8,8,8,0.1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] ${trackStyles.borderHover} select-none`}
              >
                <div>
                  {/* Top Header: Track Number & Project Count */}
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-[2px] ${trackStyles.marker}`} />
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                        TRACK {track.number}
                      </span>
                    </div>

                    <span
                      className={`font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[4px] border border-[var(--border)] ${trackStyles.softBg} ${trackStyles.textAccent}`}
                    >
                      {track.count} PROJECTS
                    </span>
                  </div>

                  {/* Track Name */}
                  <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[var(--foreground)] mb-2 leading-none">
                    {track.name}
                  </h3>

                  {/* Format */}
                  <div className="mb-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                      FORMAT: <strong className="text-[var(--foreground)]">{track.teamSize} ({track.format})</strong>
                    </span>
                  </div>

                  {/* Editorial Description */}
                  <p className="font-sans text-[14px] text-[var(--foreground)]/80 leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="font-mono text-[12px] sm:text-[13px] font-black uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2 group-hover:underline underline-offset-4">
                    <span>{trackStyles.ctaLabel}</span>
                    <Arrow
                      direction="right"
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
