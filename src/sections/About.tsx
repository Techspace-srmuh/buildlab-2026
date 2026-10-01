"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Label } from "@/components/Label";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const facts = [
    { label: "DATES", value: "05 OCT — 23 OCT 2026" },
    { label: "DURATION", value: "3 WEEKS" },
    { label: "ELIGIBILITY", value: "B.TECH CSE / BCA CS" },
    { label: "YEARS", value: "YEAR I — III" },
    { label: "FORMAT", value: "PROJECT-BASED LEARNING COMPETITION" },
    { label: "PLATFORMS", value: "GITHUB + DISCORD" },
    { label: "INAUGURATION", value: "05 OCT · 10:30 AM" },
    { label: "VENUE", value: "5TH FLOOR · CONFERENCE ROOM · EB" },
  ];

  return (
    <Section id="about" className="bg-[var(--background)]">
      <Container>
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
              01 / ABOUT
            </span>
          </div>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
            PROGRAM OVERVIEW
          </span>
        </div>

        {/* Editorial Layout: Asymmetric 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 md:pb-16 border-b border-[var(--border)]">
          {/* Left Column: Editorial Headline & Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Label variant="outline" size="sm">
                  TECHSPACE SRM UNIVERSITY SONEPAT
                </Label>
              </div>

              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[84px] uppercase tracking-[-0.03em] leading-[0.9] text-[var(--foreground)] mb-6 md:mb-8">
                LEARN BY
                <br />
                <span className="spectrum-gradient-text">BUILDING.</span>
              </h2>

              <p className="text-lg sm:text-xl md:text-[22px] text-[var(--foreground)] font-normal leading-relaxed max-w-2xl">
                TechSpace BuildLab ’26 is a three-week project-based learning competition by
                TechSpace, SRM University, Sonepat, for B.Tech CSE / BCA CS students from
                Year I to Year III.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)]/60">
              <p className="font-mono text-[13px] md:text-[14px] text-[var(--muted-foreground)] uppercase tracking-wider leading-relaxed">
                The program begins with an in-person inauguration and then runs online using
                GitHub and Discord.
              </p>
            </div>
          </div>

          {/* Right Column: Poster-Style Editorial Typographic Callout */}
          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-8 lg:pt-0 lg:pl-10">
            {/* Large Calendar Typography */}
            <div className="font-display uppercase select-none">
              <div className="text-[12px] font-mono text-[var(--muted-foreground)] tracking-[0.2em] mb-2 uppercase">
                CALENDAR WINDOW
              </div>
              <div className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[var(--foreground)] leading-[0.88]">
                05 OCT
              </div>
              <div className="text-3xl sm:text-4xl font-light text-[var(--muted-foreground)] my-1">
                —
              </div>
              <div className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[var(--foreground)] leading-[0.88]">
                23 OCT
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-[var(--muted-foreground)] mt-2">
                2026
              </div>
            </div>

            {/* Target Cohort Editorial Block */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] bg-[var(--surface-muted)] p-4 rounded-[12px]">
              <span className="block font-mono text-[10px] tracking-widest text-[var(--muted-foreground)] uppercase mb-2">
                CONFIRMED COHORT ELIGIBILITY
              </span>
              <div className="font-mono font-bold text-[14px] sm:text-[15px] text-[var(--foreground)] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)]" />
                  <span>YEAR I — III</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)]" />
                  <span>B.TECH CSE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
                  <span>BCA CS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Program Facts Grid */}
        <div className="pt-10 md:pt-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-semibold text-[var(--muted-foreground)]">
              CONFIRMED PROGRAM FACTS
            </span>
            <div className="h-[1px] flex-1 bg-[var(--border)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 font-mono">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                  ease: easeCurve,
                }}
                className="border border-[var(--border)] p-4 bg-[var(--surface-card)] rounded-[10px] flex flex-col justify-between hover:border-[var(--foreground)] transition-colors"
              >
                <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest mb-1.5 font-medium">
                  {fact.label}
                </span>
                <span className="text-[13px] md:text-[14px] font-bold text-[var(--foreground)] tracking-tight">
                  {fact.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
