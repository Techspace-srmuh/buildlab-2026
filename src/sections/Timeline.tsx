"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Label } from "@/components/Label";
import { TIMELINE } from "@/data/timeline";

export function Timeline() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const startPoint = TIMELINE[0];
  const endPoint = TIMELINE[1];

  return (
    <Section id="timeline" className="bg-[var(--background)]">
      <Container>
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
              03 / TIMELINE
            </span>
          </div>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
            PROGRAM SCHEDULE
          </span>
        </div>

        {/* Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] uppercase tracking-[-0.03em] leading-[0.9] text-[var(--foreground)]">
              THREE WEEKS.
              <br />
              <span className="spectrum-gradient-text">ONE BUILD.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--foreground)] leading-relaxed font-medium">
              A project-based learning competition that starts in person and continues online
              through GitHub and Discord.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP TIMELINE (Horizontal Editorial Diagram) */}
        {/* ========================================================================= */}
        <div className="hidden md:block py-6">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: easeCurve }}
            className="border border-[var(--border)] rounded-[20px] p-8 lg:p-12 bg-[var(--surface-card)] shadow-[4px_4px_0px_0px_rgba(8,8,8,0.06)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
          >
            {/* Top Diagram Metadata Bar */}
            <div className="flex items-center justify-between font-mono text-[11px] text-[var(--muted-foreground)] uppercase tracking-widest pb-6 border-b border-[var(--border)]">
              <span>PHASE: 21 CALENDAR DAYS</span>
              <span>CONFIRMED EVENT ANCHORS</span>
              <span>SYNCHRONIZATION: GITHUB + DISCORD</span>
            </div>

            {/* Main Horizontal Timeline Structure */}
            <div className="relative pt-6 pb-6">
              {/* Milestones Horizontal Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-12">
                {/* 01. INAUGURATION (START) */}
                <div className="flex flex-col items-start pr-6">
                  {/* Dominant Date Typography */}
                  <div className="mb-4">
                    <span className="font-mono text-[11px] text-[var(--muted-foreground)] uppercase tracking-widest block mb-1">
                      DAY 01 // START
                    </span>
                    <div className="font-display font-black text-5xl lg:text-7xl uppercase tracking-tight text-[var(--foreground)] leading-none">
                      {startPoint.shortDate}
                      <span className="text-[var(--muted-foreground)] font-light text-3xl lg:text-5xl ml-1">
                        {startPoint.year}
                      </span>
                    </div>
                  </div>

                  {/* Marker Node */}
                  <div className="my-3 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--blue)]" />
                    </div>
                    <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[var(--foreground)]">
                      IN-PERSON KICK-OFF
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="mt-4 pt-4 border-t border-[var(--border)] w-full">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[var(--foreground)] mb-1">
                      {startPoint.title}
                    </h3>
                    <div className="font-mono text-[12px] font-bold text-[var(--foreground)] mb-2 flex flex-wrap gap-2">
                      <Label variant="solid" size="sm">
                        {startPoint.time}
                      </Label>
                      <Label variant="outline" size="sm">
                        {startPoint.location}
                      </Label>
                    </div>
                    <p className="text-[14px] text-[var(--foreground)]/80 leading-relaxed font-sans max-w-sm">
                      {startPoint.description}
                    </p>
                  </div>
                </div>

                {/* 02. PROGRAM CONCLUSION (END) */}
                <div className="flex flex-col items-start pl-6 border-l border-[var(--border)]/60">
                  {/* Dominant Date Typography */}
                  <div className="mb-4">
                    <span className="font-mono text-[11px] text-[var(--muted-foreground)] uppercase tracking-widest block mb-1">
                      DAY 21 // CONCLUSION
                    </span>
                    <div className="font-display font-black text-5xl lg:text-7xl uppercase tracking-tight text-[var(--foreground)] leading-none">
                      {endPoint.shortDate}
                      <span className="text-[var(--muted-foreground)] font-light text-3xl lg:text-5xl ml-1">
                        {endPoint.year}
                      </span>
                    </div>
                  </div>

                  {/* Marker Node */}
                  <div className="my-3 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--green)]" />
                    </div>
                    <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[var(--foreground)]">
                      FINAL EVALUATION
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="mt-4 pt-4 border-t border-[var(--border)] w-full">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[var(--foreground)] mb-1">
                      {endPoint.title}
                    </h3>
                    <div className="font-mono text-[12px] font-bold text-[var(--foreground)] mb-2 flex gap-2">
                      <Label variant="soft-green" size="sm">
                        3 WEEKS COMPLETED
                      </Label>
                    </div>
                    <p className="text-[14px] text-[var(--foreground)]/80 leading-relaxed font-sans max-w-sm">
                      {endPoint.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Readout */}
            <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center justify-between font-mono text-[11px] text-[var(--muted-foreground)]">
              <span>ONLINE PHASES: GITHUB COMMITS · PRD APPROVALS · CODE REVIEWS · DISCORD MENTORING</span>
              <span className="text-[var(--foreground)] font-semibold uppercase">TOTAL SPRINT: 3 WEEKS</span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE TIMELINE (Vertical Editorial Flow) */}
        {/* ========================================================================= */}
        <div className="md:hidden">
          <div className="relative border-l-2 border-[var(--foreground)] ml-4 pl-6 space-y-12 py-2">
            {/* 01. INAUGURATION */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeCurve }}
              className="relative"
            >
              {/* Marker Dot */}
              <div className="absolute -left-[33px] top-1.5 w-5 h-5 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--blue)]" />
              </div>

              <span className="font-mono text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest block mb-1">
                DAY 01 // KICK-OFF
              </span>

              <div className="font-display font-black text-4xl uppercase text-[var(--foreground)] leading-none mb-3">
                {startPoint.shortDate}
                <span className="text-[var(--muted-foreground)] font-light text-2xl ml-1">
                  {startPoint.year}
                </span>
              </div>

              <div className="border border-[var(--border)] rounded-[14px] p-5 bg-[var(--surface-card)] space-y-3">
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--foreground)]">
                  {startPoint.title}
                </h3>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="text-[var(--foreground)] font-semibold">
                    TIME: {startPoint.time}
                  </div>
                  <div className="text-[var(--muted-foreground)] font-medium">
                    VENUE: {startPoint.location}
                  </div>
                </div>
                <p className="text-[13px] text-[var(--foreground)]/85 leading-relaxed pt-2 border-t border-[var(--border)]">
                  {startPoint.description}
                </p>
              </div>
            </motion.div>

            {/* 02. CONCLUSION */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeCurve, delay: 0.1 }}
              className="relative"
            >
              {/* Marker Dot */}
              <div className="absolute -left-[33px] top-1.5 w-5 h-5 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--green)]" />
              </div>

              <span className="font-mono text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest block mb-1">
                DAY 21 // CONCLUSION
              </span>

              <div className="font-display font-black text-4xl uppercase text-[var(--foreground)] leading-none mb-3">
                {endPoint.shortDate}
                <span className="text-[var(--muted-foreground)] font-light text-2xl ml-1">
                  {endPoint.year}
                </span>
              </div>

              <div className="border border-[var(--border)] rounded-[14px] p-5 bg-[var(--surface-card)] space-y-3">
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--foreground)]">
                  {endPoint.title}
                </h3>
                <div className="font-mono text-[11px] text-[#2d731e] dark:text-[var(--green)] font-semibold">
                  FORMAT: THREE WEEKS COMPLETED
                </div>
                <p className="text-[13px] text-[var(--foreground)]/85 leading-relaxed pt-2 border-t border-[var(--border)]">
                  {endPoint.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
