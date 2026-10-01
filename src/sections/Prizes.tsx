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
    <Section id="prizes" className="bg-[var(--paper)]">
      <Container>
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-[#CFCFC4] pb-3 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--ink)] inline-block" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--ink)]">
              08 / RECOGNITION
            </span>
          </div>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[var(--gray)]">
            AWARDS & CERTIFICATES
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-[-0.03em] leading-[0.92] text-[var(--ink)]">
              BUILD IT. SHIP IT.
              <br />
              <span className="spectrum-gradient-text">GET RECOGNISED.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#CFCFC4] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--ink)] leading-relaxed font-medium">
              Official cash awards and credentials verified by TechSpace, SRM University, Sonepat.
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
              className="border border-[#CFCFC4] rounded-[18px] p-6 sm:p-8 bg-[var(--paper)] flex flex-col justify-between transition-all duration-300 hover:border-[var(--ink)] hover:shadow-[4px_4px_0px_0px_rgba(8,8,8,0.1)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#CFCFC4]">
                  <span className="font-mono text-xs font-bold text-[var(--gray)]">
                    TRACK / {prize.number}
                  </span>
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: prize.accentHex }}
                  />
                </div>

                {/* Track Name & Format */}
                <div className="space-y-1 mb-6">
                  <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[var(--ink)]">
                    {prize.track}
                  </h3>
                  <div className="font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--gray)]">
                    {prize.format} · {prize.teamSize}
                  </div>
                </div>
              </div>

              {/* Dominant Cash Amount (Visual Focal Point) */}
              <div className="pt-6 border-t border-[#CFCFC4]">
                <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest block mb-1">
                  TRACK PRIZE
                </span>
                <div className="font-display font-black text-5xl sm:text-6xl text-[var(--ink)] tracking-tight leading-none group-hover:scale-[1.02] transition-transform origin-left">
                  {prize.amount}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Data Block & Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 border border-[var(--ink)] rounded-[18px] bg-[#EBEBE0]/50 font-mono">
          {/* Total Cash Statement */}
          <div className="md:col-span-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#CFCFC4] pb-6 md:pb-0 md:pr-6">
            <span className="text-[10px] text-[var(--gray)] uppercase tracking-widest block mb-1 font-semibold">
              TOTAL CASH PRIZES
            </span>
            <div className="font-display font-black text-4xl sm:text-5xl text-[var(--ink)] tracking-tight">
              {RECOGNITION.totalCashPrizes}
            </div>
            <span className="text-[11px] text-[var(--gray)] mt-1">
              ₹1,000 allocated per track winner
            </span>
          </div>

          {/* Certificates Statement & Minimalist Certificate Icon Outline */}
          <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pl-0 md:pl-4">
            <div className="space-y-2">
              <span className="text-[10px] text-[var(--gray)] uppercase tracking-widest block font-semibold">
                CREDENTIALS & DOCUMENTATION
              </span>
              <h4 className="font-display font-black text-2xl uppercase tracking-tight text-[var(--ink)]">
                COMPLETION & WINNER CERTIFICATES
              </h4>
              <p className="text-[13px] text-[var(--ink)]/80 font-sans leading-relaxed max-w-md">
                Official credentials awarded to verified project completers and track winners by
                TechSpace, SRM University, Sonepat.
              </p>
            </div>

            {/* Document / Certificate Minimal Outline Graphic */}
            <div className="w-24 h-28 border border-[var(--ink)] rounded-[8px] bg-[var(--paper)] p-2.5 flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(8,8,8,0.1)] shrink-0 select-none">
              <div className="flex items-center justify-between border-b border-[#CFCFC4] pb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18B8D4]" />
                <span className="text-[7px] text-[var(--gray)]">CERT</span>
              </div>
              <div className="space-y-1">
                <div className="h-[2px] w-full bg-[var(--ink)]" />
                <div className="h-[2px] w-3/4 bg-[#CFCFC4]" />
                <div className="h-[2px] w-1/2 bg-[#CFCFC4]" />
              </div>
              <div className="pt-1 border-t border-[#CFCFC4] flex justify-end">
                <span className="w-2.5 h-2.5 rounded-full bg-[#62C94A]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
