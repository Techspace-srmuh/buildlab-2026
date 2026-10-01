"use client";

import React from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { LINKS } from "@/data/links";

export function FinalCTA() {

  return (
    <Section id="final-cta" className="bg-[var(--paper)] border-b-0 pb-0">
      <Container>
        {/* Large Editorial Poster Conclusion Block */}
        <div className="relative border border-[var(--ink)] rounded-[22px] md:rounded-[28px] bg-[var(--paper)] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-[6px_6px_0px_0px_rgba(8,8,8,0.12)]">
          {/* Background Technical Grid Accent */}
          <div className="absolute inset-0 grid-editorial pointer-events-none opacity-20" />

          {/* Top Status Header */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px] md:text-[12px] uppercase text-[var(--gray)] tracking-[0.18em] pb-6 mb-8 border-b border-[#CFCFC4]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#18B8D4]" />
              <span className="font-bold text-[var(--ink)]">TECHSPACE BUILDLAB ’26</span>
            </div>
            <span>YEAR I — III // B.TECH CSE & BCA CS</span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Dominating Headline */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-block">
                <Label variant="solid" size="sm">
                  REGISTRATION & ONBOARDING
                </Label>
              </div>

              <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[104px] uppercase tracking-[-0.03em] leading-[0.88] text-[var(--ink)]">
                LEARN
                <br />
                BY
                <br />
                <span className="spectrum-gradient-text">BUILDING.</span>
              </h2>

              <p className="text-lg sm:text-xl md:text-[22px] text-[var(--ink)] font-normal leading-relaxed max-w-xl">
                Three weeks. Three tracks. Build something real.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  href={LINKS.discord || LINKS.discordGuide}
                  target={LINKS.discord ? "_blank" : undefined}
                  variant="primary"
                  size="lg"
                  withArrow
                  arrowDirection={LINKS.discord ? "up-right" : "right"}
                >
                  JOIN THE BUILD
                </Button>

                <Button
                  href={LINKS.explore}
                  variant="outline"
                  size="lg"
                  withArrow
                  arrowDirection="right"
                >
                  EXPLORE BUILDLAB
                </Button>
              </div>
            </div>

            {/* Right Side: Geometric Orbital / Polyhedron Scientific Seal */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-48 h-48 sm:w-56 sm:h-56 relative select-none flex items-center justify-center">
                {/* Outer Dashed Orbit */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="84"
                    stroke="#CFCFC4"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="88"
                    ry="35"
                    stroke="#080808"
                    strokeWidth="1.5"
                    transform="rotate(-30 100 100)"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="88"
                    ry="35"
                    stroke="#080808"
                    strokeWidth="1.5"
                    transform="rotate(30 100 100)"
                  />

                  {/* Spectrum Node Dots */}
                  <circle cx="28" cy="60" r="6" fill="#1457D9" stroke="#080808" strokeWidth="1.5" />
                  <circle cx="172" cy="62" r="6" fill="#18B8D4" stroke="#080808" strokeWidth="1.5" />
                  <circle cx="34" cy="144" r="6" fill="#62C94A" stroke="#080808" strokeWidth="1.5" />
                  <circle cx="166" cy="140" r="7" fill="#F3D21A" stroke="#080808" strokeWidth="1.5" />

                  {/* Center Solid Emblem */}
                  <circle cx="100" cy="100" r="28" fill="#080808" />
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fill="#F4F4E8"
                    fontFamily="monospace"
                    fontWeight="bold"
                    fontSize="11"
                    letterSpacing="0.1em"
                  >
                    ’26
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Compact Event Fact Strip */}
        <div className="mt-10 border border-[#CFCFC4] rounded-[14px] bg-[#EBEBE0]/40 p-4 font-mono text-[11px] md:text-[12px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="border-b sm:border-b-0 sm:border-r border-[#CFCFC4] pb-2 sm:pb-0 pr-2">
              <span className="block text-[10px] text-[var(--gray)] uppercase tracking-widest font-semibold">
                START DATE
              </span>
              <span className="font-bold text-[var(--ink)]">05 OCT 2026 · 10:30 AM</span>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r border-[#CFCFC4] pb-2 sm:pb-0 pr-2">
              <span className="block text-[10px] text-[var(--gray)] uppercase tracking-widest font-semibold">
                END DATE
              </span>
              <span className="font-bold text-[var(--ink)]">23 OCT 2026</span>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r border-[#CFCFC4] pb-2 sm:pb-0 pr-2">
              <span className="block text-[10px] text-[var(--gray)] uppercase tracking-widest font-semibold">
                DURATION
              </span>
              <span className="font-bold text-[var(--ink)]">3 WEEKS</span>
            </div>

            <div>
              <span className="block text-[10px] text-[var(--gray)] uppercase tracking-widest font-semibold">
                TRACK FORMATS
              </span>
              <span className="font-bold text-[var(--ink)]">SOLO · DUO · SQUAD</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
