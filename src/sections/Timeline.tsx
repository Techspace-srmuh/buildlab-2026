"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TIMELINE } from "@/data/timeline";

export function Timeline() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const startPoint = TIMELINE[0];
  const endPoint = TIMELINE[1];

  return (
    <Section id="timeline" className="bg-[var(--background)]">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
            03 / TIMELINE
          </span>
        </div>

        {/* Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
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
        {/* DESKTOP TIMELINE (Clean 2-Anchor Editorial Spread) */}
        {/* ========================================================================= */}
        <div className="hidden md:block py-4">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeCurve }}
            className="border border-[var(--border)] rounded-[20px] p-8 lg:p-12 bg-[var(--surface-card)]"
          >
            <div className="grid grid-cols-2 gap-12 lg:gap-16">
              {/* 01. INAUGURATION */}
              <div className="flex flex-col items-start pr-6">
                <div className="mb-4">
                  <div className="font-display font-black text-5xl lg:text-7xl uppercase tracking-tight text-[var(--foreground)] leading-none">
                    {startPoint.shortDate}
                    <span className="text-[var(--muted-foreground)] font-light text-3xl lg:text-5xl ml-2">
                      {startPoint.year}
                    </span>
                  </div>
                </div>

                <div className="my-2 flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[var(--blue)]" />
                  <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[var(--muted-foreground)]">
                    KICK-OFF
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-[var(--border)] w-full">
                  <h3 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-[var(--foreground)] mb-2">
                    {startPoint.title}
                  </h3>
                  <div className="font-mono text-[12px] font-semibold text-[var(--foreground)] mb-3">
                    {startPoint.time} · {startPoint.location}
                  </div>
                  <p className="text-[14px] text-[var(--foreground)]/80 leading-relaxed font-sans max-w-sm">
                    {startPoint.description}
                  </p>
                </div>
              </div>

              {/* 02. PROGRAM CONCLUSION */}
              <div className="flex flex-col items-start pl-6 border-l border-[var(--border)]">
                <div className="mb-4">
                  <div className="font-display font-black text-5xl lg:text-7xl uppercase tracking-tight text-[var(--foreground)] leading-none">
                    {endPoint.shortDate}
                    <span className="text-[var(--muted-foreground)] font-light text-3xl lg:text-5xl ml-2">
                      {endPoint.year}
                    </span>
                  </div>
                </div>

                <div className="my-2 flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[var(--green)]" />
                  <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[var(--muted-foreground)]">
                    CONCLUSION
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-[var(--border)] w-full">
                  <h3 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-[var(--foreground)] mb-2">
                    {endPoint.title}
                  </h3>
                  <div className="font-mono text-[12px] font-semibold text-[#2d731e] dark:text-[var(--green)] mb-3">
                    Three Weeks Completed
                  </div>
                  <p className="text-[14px] text-[var(--foreground)]/80 leading-relaxed font-sans max-w-sm">
                    {endPoint.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE TIMELINE (Vertical Flow) */}
        {/* ========================================================================= */}
        <div className="md:hidden">
          <div className="relative border-l-2 border-[var(--foreground)] ml-3 pl-6 space-y-10 py-2">
            {/* 01. INAUGURATION */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeCurve }}
              className="relative"
            >
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--blue)]" />
              </div>

              <div className="font-display font-black text-4xl uppercase text-[var(--foreground)] leading-none mb-3">
                {startPoint.shortDate}
                <span className="text-[var(--muted-foreground)] font-light text-2xl ml-1">
                  {startPoint.year}
                </span>
              </div>

              <div className="border border-[var(--border)] rounded-[14px] p-5 bg-[var(--surface-card)] space-y-2">
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--foreground)]">
                  {startPoint.title}
                </h3>
                <div className="font-mono text-[11px] text-[var(--muted-foreground)]">
                  {startPoint.time} · {startPoint.location}
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
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
              </div>

              <div className="font-display font-black text-4xl uppercase text-[var(--foreground)] leading-none mb-3">
                {endPoint.shortDate}
                <span className="text-[var(--muted-foreground)] font-light text-2xl ml-1">
                  {endPoint.year}
                </span>
              </div>

              <div className="border border-[var(--border)] rounded-[14px] p-5 bg-[var(--surface-card)] space-y-2">
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--foreground)]">
                  {endPoint.title}
                </h3>
                <div className="font-mono text-[11px] text-[#2d731e] dark:text-[var(--green)] font-semibold">
                  Three Weeks Completed
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
