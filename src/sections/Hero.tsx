"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { BrowserWindow } from "@/components/BrowserWindow";
import { ScientificGraphic } from "@/components/ScientificGraphic";
import { LINKS } from "@/data/links";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants configured for restrained, elegant editorial motion
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: easeCurve,
      },
    },
  };

  const graphicVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.96,
      y: shouldReduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: easeCurve,
        delay: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  return (
    <section className="relative w-full border-b border-[#CFCFC4] overflow-hidden bg-[var(--paper)]">
      {/* Background subtle editorial grid lines */}
      <div className="absolute inset-0 grid-editorial pointer-events-none opacity-30" />

      {/* Hero Header Technical Strip */}
      <div className="border-b border-[#CFCFC4] py-2.5 relative z-10 bg-[var(--paper)]/80">
        <Container>
          <div className="flex items-center justify-between font-mono text-[11px] md:text-[12px] uppercase text-[var(--gray)] tracking-[0.16em]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1457D9] inline-block" />
              <span className="text-[var(--ink)] font-semibold">TECHSPACE</span>
              <span className="text-[#CFCFC4]">/</span>
              <span>SRM UNIVERSITY SONEPAT</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block">PROGRAM IDENTITY</span>
              <span className="text-[#CFCFC4] hidden sm:inline-block">/</span>
              <span className="text-[var(--ink)] font-semibold">01 // BUILD</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Hero Viewport Content */}
      <div className="relative z-10 pt-10 pb-14 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          >
            {/* Left 7 Columns: Editorial Headline, Subtitle, Details, CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Metadata Micro-header */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-5 md:mb-6">
                <Label variant="solid" size="sm">
                  PILOT COHORT ’26
                </Label>
                <span className="text-[#CFCFC4] font-mono text-xs">/</span>
                <span className="font-mono text-[12px] md:text-[13px] tracking-wider text-[var(--gray)] uppercase font-semibold">
                  THREE-WEEK PROJECT-BASED LEARNING COMPETITION
                </span>
              </motion.div>

              {/* Dominating Display Typography */}
              <motion.div variants={itemVariants} className="mb-5 md:mb-6">
                <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[118px] uppercase tracking-[-0.03em] leading-[0.88] text-[var(--ink)]">
                  BUILD
                  <br />
                  <span className="spectrum-gradient-text">LAB ’26</span>
                </h1>
              </motion.div>

              {/* Tagline / Subtitle */}
              <motion.div variants={itemVariants} className="space-y-3 mb-8 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-[var(--ink)]" />
                  <h2 className="font-mono font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-[0.1em] text-[var(--ink)]">
                    LEARN BY BUILDING.
                  </h2>
                </div>
                <p className="text-[15px] md:text-[17px] text-[var(--ink)]/85 leading-relaxed font-normal">
                  Turn ideas into production software through GitHub, structured PRD development,
                  peer code reviews, and active mentorship across a three-week engineering sprint.
                </p>
              </motion.div>

              {/* Verified Program Specs Row */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 my-2 border-y border-[#CFCFC4] font-mono"
              >
                <div>
                  <span className="block text-[10px] text-[var(--gray)] uppercase tracking-widest">
                    DATES
                  </span>
                  <span className="font-bold text-[13px] md:text-[14px] text-[var(--ink)] tracking-tight">
                    05 OCT — 23 OCT 2026
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-[var(--gray)] uppercase tracking-widest">
                    INAUGURATION
                  </span>
                  <span className="font-bold text-[13px] md:text-[14px] text-[var(--ink)] tracking-tight">
                    05 OCT · 10:30 AM (EB)
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] text-[var(--gray)] uppercase tracking-widest">
                    FORMAT & VENUE
                  </span>
                  <span className="font-bold text-[13px] md:text-[14px] text-[var(--ink)] tracking-tight">
                    5TH FL, CONF ROOM, EB
                  </span>
                </div>
              </motion.div>

              {/* Call to Actions */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-3.5 pt-4"
              >
                <Button
                  href={LINKS.explore}
                  variant="primary"
                  size="lg"
                  withArrow
                  arrowDirection="right"
                >
                  EXPLORE BUILDLAB
                </Button>

                <Button
                  href={LINKS.discord}
                  target="_blank"
                  variant="secondary"
                  size="lg"
                  withArrow
                  arrowDirection="up-right"
                >
                  JOIN DISCORD
                </Button>
              </motion.div>
            </div>

            {/* Right 5 Columns: Poster-inspired Scientific Graphic & Laboratory Window */}
            <motion.div
              variants={graphicVariants}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <BrowserWindow
                title="LAB.EXPERIMENT // BL-2026"
                badge="STAGE 01"
                className="w-full max-w-[460px]"
                bodyClassName="flex flex-col items-center justify-center p-4 sm:p-6"
              >
                {/* Central Scientific Graphic */}
                <ScientificGraphic variant="hero-composition" className="w-full" />

                {/* Laboratory Metric Readout Footer Inside Container */}
                <div className="w-full mt-4 pt-3.5 border-t border-[#CFCFC4] flex items-center justify-between font-mono text-[11px] text-[var(--gray)]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#18B8D4]" />
                    <span className="uppercase text-[var(--ink)] font-semibold">
                      METHOD: PRD → MERGE
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="uppercase font-medium">COHORT: 40–60 ENGRS</span>
                  </div>
                </div>
              </BrowserWindow>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Editorial Bottom Info Strip (Swiss Poster Reference Footnote Grid) */}
      <div className="border-t border-[#CFCFC4] bg-[#EBEBE0]/50 py-4 font-mono">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] md:text-[12px]">
            <div className="border-l-2 border-[#1457D9] pl-3">
              <span className="block text-[var(--gray)] uppercase tracking-wider text-[10px]">
                01 / TRACKS
              </span>
              <span className="font-semibold text-[var(--ink)]">
                Beginner · Intermediate · Advanced
              </span>
            </div>

            <div className="border-l-2 border-[#18B8D4] pl-3">
              <span className="block text-[var(--gray)] uppercase tracking-wider text-[10px]">
                02 / WORKFLOW
              </span>
              <span className="font-semibold text-[var(--ink)]">
                Issue → Branch → PR → Code Review
              </span>
            </div>

            <div className="border-l-2 border-[#62C94A] pl-3">
              <span className="block text-[var(--gray)] uppercase tracking-wider text-[10px]">
                03 / PLATFORMS
              </span>
              <span className="font-semibold text-[var(--ink)]">
                GitHub Org + Discord Community
              </span>
            </div>

            <div className="border-l-2 border-[#F3D21A] pl-3">
              <span className="block text-[var(--gray)] uppercase tracking-wider text-[10px]">
                04 / RECOGNITION
              </span>
              <span className="font-semibold text-[var(--ink)]">
                ₹3,000 Cash Pool + Certificates
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
