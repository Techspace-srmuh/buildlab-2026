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
          /* Clean Pre-Launch Editorial State */
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeCurve }}
            className="border border-[var(--border)] rounded-[20px] p-10 sm:p-16 md:p-20 bg-[var(--surface-card)] text-center flex flex-col items-center justify-center max-w-3xl mx-auto"
          >
            {/* Geometric Node Icon Motif */}
            <div className="w-14 h-14 rounded-[12px] border border-[var(--border)] bg-[var(--surface-muted)] flex items-center justify-center mb-6">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--blue)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--cyan)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--green)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--yellow)]" />
              </div>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] text-[var(--foreground)] leading-tight mb-3">
              MENTOR ROSTER
              <br />
              <span className="text-[var(--muted-foreground)]">COMING SOON</span>
            </h3>

            <p className="font-sans text-[15px] sm:text-[17px] text-[var(--foreground)]/80 max-w-md leading-relaxed">
              Meet the mentors supporting BuildLab ’26.
            </p>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
