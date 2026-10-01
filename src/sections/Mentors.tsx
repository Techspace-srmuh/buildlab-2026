"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { BrowserWindow } from "@/components/BrowserWindow";
import { MentorCard } from "@/components/MentorCard";
import { MENTORS } from "@/data/mentors";

export function Mentors() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const hasMentors = MENTORS.length > 0;

  return (
    <Section id="mentors" className="bg-[var(--paper)]">
      <Container>
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-[#CFCFC4] pb-3 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--ink)] inline-block" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--ink)]">
              05 / MENTORS
            </span>
          </div>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[var(--gray)]">
            PROGRAM GUIDANCE
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] uppercase tracking-[-0.03em] leading-[0.9] text-[var(--ink)]">
              BUILD
              <br />
              <span className="spectrum-gradient-text">TOGETHER.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#CFCFC4] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--ink)] leading-relaxed font-medium">
              People who help turn ideas into working projects.
            </p>
          </div>
        </div>

        {/* Dynamic Display: Mentor Grid or Polished Pre-Launch State */}
        {hasMentors ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {MENTORS.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: easeCurve,
                }}
              >
                <MentorCard mentor={mentor} index={index} />
              </motion.div>
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
              title="PERSONNEL.ROSTER // BL-2026"
              badge="PENDING ANNOUNCEMENT"
              className="max-w-4xl mx-auto"
              bodyClassName="p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center"
            >
              {/* Geometric Node Icon Motif */}
              <div className="w-16 h-16 rounded-[12px] border border-[var(--ink)] bg-[#EBEBE0]/60 flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(8,8,8,0.1)]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#1457D9]" />
                  <span className="w-3 h-3 rounded-full bg-[#18B8D4]" />
                  <span className="w-3 h-3 rounded-full bg-[#62C94A]" />
                  <span className="w-3 h-3 rounded-full bg-[#F3D21A]" />
                </div>
              </div>

              {/* Dominant Editorial Heading */}
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] text-[var(--ink)] leading-tight mb-3">
                MENTOR ROSTER
                <br />
                <span className="text-[var(--gray)]">COMING SOON</span>
              </h3>

              {/* Exact Confirmed Message */}
              <p className="font-sans text-[15px] sm:text-[17px] text-[var(--ink)]/80 max-w-lg leading-relaxed mb-8">
                Meet the mentors supporting BuildLab ’26.
              </p>

              {/* Confirmed Program Personnel Roles (Green Sheet Requirements) */}
              <div className="w-full max-w-2xl pt-8 border-t border-[#CFCFC4] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-[11px]">
                <div className="p-3.5 border border-[#CFCFC4] rounded-[8px] bg-[var(--paper)]">
                  <span className="block text-[var(--gray)] text-[10px] uppercase tracking-wider mb-1">
                    ROLE 01
                  </span>
                  <span className="font-bold text-[var(--ink)] uppercase block">
                    TRACK MENTORS
                  </span>
                  <span className="text-[var(--gray)] text-[10px] block mt-1">
                    PR reviews & architecture guidance
                  </span>
                </div>

                <div className="p-3.5 border border-[#CFCFC4] rounded-[8px] bg-[var(--paper)]">
                  <span className="block text-[var(--gray)] text-[10px] uppercase tracking-wider mb-1">
                    ROLE 02
                  </span>
                  <span className="font-bold text-[var(--ink)] uppercase block">
                    EVALUATION PANEL
                  </span>
                  <span className="text-[var(--gray)] text-[10px] block mt-1">
                    Live demo scoring & rubric evaluation
                  </span>
                </div>

                <div className="p-3.5 border border-[#CFCFC4] rounded-[8px] bg-[var(--paper)]">
                  <span className="block text-[var(--gray)] text-[10px] uppercase tracking-wider mb-1">
                    ROLE 03
                  </span>
                  <span className="font-bold text-[var(--ink)] uppercase block">
                    FACULTY COORDINATOR
                  </span>
                  <span className="text-[var(--gray)] text-[10px] block mt-1">
                    SRM University academic coordination
                  </span>
                </div>
              </div>

              {/* Status Pill Badge */}
              <div className="mt-6 font-mono text-[11px] text-[var(--gray)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#62C94A] animate-pulse" />
                <span className="uppercase font-semibold text-[var(--ink)]">
                  OFFICIAL ROSTER RELEASE PRIOR TO LAUNCH
                </span>
              </div>
            </BrowserWindow>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
