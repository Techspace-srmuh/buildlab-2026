"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PRIZES, RECOGNITION } from "@/data/prizes";

export function Prizes() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  return (
    <Section id="prizes" className="bg-[var(--background)]">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
            08 / RECOGNITION
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-[-0.03em] leading-[0.92] text-[var(--foreground)]">
              BUILD IT. SHIP IT.
              <br />
              <span className="spectrum-gradient-text">GET RECOGNISED.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--foreground)] leading-relaxed font-medium">
              Exciting prizes to the winner from each track and credentials verified by TechSpace, SRM University, Sonepat.
            </p>
          </div>
        </div>

        {/* Three Editorial Prize Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PRIZES.map((prize, idx) => (
            <motion.div
              key={prize.track}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.1,
                ease: easeCurve,
              }}
              tabIndex={0}
              className="border border-[var(--border)] rounded-[18px] p-6 sm:p-8 bg-[var(--surface-card)] flex flex-col justify-between transition-all duration-300 hover:border-[var(--foreground)] hover:shadow-[4px_4px_0px_0px_var(--border)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]"
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--border)]">
                  <span className="font-mono text-xs font-bold text-[var(--muted-foreground)]">
                    TRACK / {prize.number}
                  </span>
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: prize.accentHex }}
                  />
                </div>

                {/* Track Name & Format */}
                <div className="space-y-1 mb-6">
                  <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[var(--foreground)]">
                    {prize.track}
                  </h3>
                  <div className="font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                    {prize.format} · {prize.teamSize}
                  </div>
                </div>
              </div>

              {/* Dominant Award Block (Visual Focal Point) */}
              <div className="pt-6 border-t border-[var(--border)]">
                <span className="font-mono text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest block mb-2">
                  TRACK RECOGNITION
                </span>
                <div className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight leading-tight spectrum-gradient-text group-hover:scale-[1.02] transition-transform origin-left">
                  {prize.award}
                </div>
                <p className="font-mono text-[11px] text-[var(--muted-foreground)] uppercase tracking-wider mt-2">
                  {prize.awardDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Data Block & Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 border border-[var(--border)] rounded-[18px] bg-[var(--surface-muted)]/50 font-mono">
          {/* Track Awards Statement */}
          <div className="md:col-span-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[var(--border)] pb-6 md:pb-0 md:pr-6">
            <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest block mb-1 font-semibold">
              TRACK AWARDS
            </span>
            <div className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight spectrum-gradient-text leading-tight">
              EXCITING PRIZES TO THE WINNER FROM EACH TRACK
            </div>
            <span className="text-[11px] text-[var(--muted-foreground)] mt-2">
              Awarded across Beginner, Intermediate & Advanced tracks
            </span>
          </div>

          {/* Certificates Statement */}
          <div className="md:col-span-6 flex flex-col justify-center pl-0 md:pl-4 space-y-2">
            <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest block font-semibold">
              CREDENTIALS & DOCUMENTATION
            </span>
            <h4 className="font-display font-black text-2xl uppercase tracking-tight text-[var(--foreground)]">
              COMPLETION & WINNER CERTIFICATES
            </h4>
            <p className="text-[13px] text-[var(--foreground)]/80 font-sans leading-relaxed max-w-xl">
              Official credentials awarded to verified project completers and track winners by
              TechSpace, SRM University, Sonepat.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
