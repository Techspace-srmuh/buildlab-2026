"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { MentorCard } from "@/components/MentorCard";
import { MENTORS } from "@/data/mentors";

export function Mentors() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const hasMentors = MENTORS.length > 0;
  const hasFeatured = MENTORS.some((m) => m.featured);
  const isLastPairCentered = !hasFeatured && MENTORS.length % 3 === 2;
  const isLastSingleCentered = !hasFeatured && MENTORS.length % 3 === 1;

  return (
    <Section id="mentors" className="bg-[var(--background)]">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
            05 / MENTORS
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] uppercase tracking-[-0.03em] leading-[0.9] text-[var(--foreground)]">
              BUILD
              <br />
              <span className="spectrum-gradient-text">TOGETHER.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--foreground)] leading-relaxed font-medium">
              People who help turn ideas into working projects.
            </p>
          </div>
        </div>

        {/* Dynamic Display: Editorial Mentor Grid or Deliberate Editorial Empty State */}
        {hasMentors ? (
          <div>
            {/* 6-column flexible desktop grid optimized for 3-col equal, 3-3-2 centered, or featured 2-col span */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
              {MENTORS.map((mentor, index) => {
                let colClasses = "lg:col-span-2";

                if (mentor.featured) {
                  colClasses = "md:col-span-2 lg:col-span-4";
                } else if (isLastPairCentered && index === MENTORS.length - 2) {
                  colClasses = "lg:col-span-2 lg:col-start-2";
                } else if (isLastSingleCentered && index === MENTORS.length - 1) {
                  colClasses = "lg:col-span-2 lg:col-start-3";
                }

                return (
                  <motion.div
                    key={mentor.id}
                    className={`${colClasses} flex flex-col h-full`}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : index * 0.07,
                      ease: easeCurve,
                    }}
                  >
                    <MentorCard mentor={mentor} index={index} />
                  </motion.div>
                );
              })}
            </div>

            {/* Editorial Closing Line */}
            <div className="mt-14 md:mt-20 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              <span>BUILD WITH GUIDANCE.</span>
              <span>SHIP WITH CONFIDENCE.</span>
            </div>
          </div>
        ) : (
          /* Restrained Editorial Empty State */
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeCurve }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-8 md:py-12 border-t border-b border-[var(--border)]">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--muted-foreground)] block mb-3">
                  ROSTER ANNOUNCEMENT
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] text-[var(--foreground)] leading-[0.95] mb-4">
                  MENTOR ROSTER
                  <br />
                  <span className="text-[var(--muted-foreground)]">COMING SOON.</span>
                </h3>
                <p className="font-sans text-[14px] sm:text-[15px] text-[var(--foreground)]/80 leading-relaxed max-w-sm mb-6">
                  The 8-mentor cohort supporting BuildLab ’26 across Beginner, Intermediate, and Advanced tracks will be announced before launch.
                </p>
                <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)] inline-block" />
                  <span>8 Verified Mentors · PRD Approvals · Technical Reviews</span>
                </div>
              </div>

              {/* Editorial Abstract Portrait Placeholders */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  { id: "01 / 08", track: "Beginner", domain: "Web & Core Systems" },
                  { id: "02 / 08", track: "Intermediate", domain: "Fullstack & Cloud" },
                  { id: "03 / 08", track: "Advanced", domain: "Distributed & ML" },
                ].map((slot) => (
                  <div
                    key={slot.id}
                    className="border border-[var(--border)] rounded-[8px] bg-[var(--surface-muted)]/30 p-5 flex flex-col justify-between aspect-[4/5] select-none"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--muted-foreground)] uppercase">
                      <span>[{slot.id}]</span>
                      <span>ROSTER</span>
                    </div>

                    <div className="my-auto flex flex-col items-center justify-center opacity-40">
                      <div className="w-14 h-16 rounded-[4px] border border-dashed border-[var(--foreground)] flex items-center justify-center">
                        <span className="font-mono text-[9px] text-[var(--muted-foreground)] uppercase tracking-wider">
                          PORTRAIT
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-mono text-[10px] uppercase tracking-wider font-semibold text-[var(--foreground)]">
                        {slot.track}
                      </div>
                      <div className="font-sans text-[11px] text-[var(--muted-foreground)]">
                        {slot.domain}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Closing Line */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              <span>BUILD WITH GUIDANCE.</span>
              <span>SHIP WITH CONFIDENCE.</span>
            </div>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
