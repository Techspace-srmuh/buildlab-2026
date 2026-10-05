"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ScientificGraphic } from "@/components/ScientificGraphic";
import { LINKS } from "@/data/links";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeCurve,
      },
    },
  };

  const graphicVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: easeCurve,
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <section className="relative w-full border-b border-[var(--border)] overflow-hidden bg-[var(--background)]">
      {/* Background subtle editorial grid lines */}
      <div className="absolute inset-0 grid-editorial pointer-events-none opacity-25" />

      {/* Hero Header Technical Strip */}
      <div className="border-b border-[var(--border)] py-2.5 relative z-10 bg-[var(--surface-muted)]/60">
        <Container>
          <div className="flex items-center justify-between font-mono text-[11px] md:text-[12px] uppercase text-[var(--muted-foreground)] tracking-[0.16em]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm bg-black flex items-center justify-center p-0.5 border border-[var(--border)] overflow-hidden shrink-0">
                <img
                  src="/techspace-logo.png"
                  alt="TechSpace Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <a
                href={LINKS.techspaceWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--foreground)] font-semibold hover:underline"
              >
                TECHSPACE
              </a>
              <span className="text-[var(--border)]">/</span>
              <span>SRM UNIVERSITY SONEPAT</span>
            </div>
            <div className="font-semibold text-[var(--foreground)]">
              06 OCT — 23 OCT 2026
            </div>
          </div>
        </Container>
      </div>

      {/* Main Hero Viewport Content */}
      <div className="relative z-10 pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left 7 Columns: Editorial Headline, Subtitle, CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              {/* Dominating Display Typography */}
              <motion.div variants={itemVariants}>
                <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[108px] xl:text-[120px] uppercase tracking-[-0.03em] leading-[0.88] text-[var(--foreground)]">
                  BUILD
                  <br />
                  <span className="spectrum-gradient-text">LAB ’26</span>
                </h1>
              </motion.div>

              {/* Tagline / Subtitle */}
              <motion.div variants={itemVariants} className="space-y-3 max-w-xl">
                <h2 className="font-mono font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-[0.1em] text-[var(--foreground)]">
                  LEARN BY BUILDING.
                </h2>
                <p className="text-[16px] md:text-[18px] text-[var(--foreground)]/85 leading-relaxed font-normal">
                  Three weeks. Three tracks. Turn ideas into production software through GitHub, structured PRD development, and active mentorship.
                </p>
              </motion.div>

              {/* Call to Actions */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Button
                  href={LINKS.registration}
                  target="_blank"
                  variant="primary"
                  size="lg"
                  withArrow
                  arrowDirection="up-right"
                >
                  REGISTER NOW
                </Button>

                <Button
                  href={LINKS.projects}
                  variant="secondary"
                  size="lg"
                  withArrow
                  arrowDirection="right"
                >
                  EXPLORE TRACKS
                </Button>

                <Button
                  href={LINKS.discord || LINKS.discordGuide}
                  target={LINKS.discord ? "_blank" : undefined}
                  variant="outline"
                  size="lg"
                  withArrow
                  arrowDirection={LINKS.discord ? "up-right" : "right"}
                >
                  DISCORD
                </Button>
              </motion.div>
            </div>

            {/* Right 5 Columns: Clean Framed Scientific Graphic */}
            <motion.div
              variants={graphicVariants}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-[460px] border border-[var(--border)] rounded-[18px] bg-[var(--surface-card)] p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(8,8,8,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.35)] flex flex-col items-center justify-center">
                <ScientificGraphic variant="hero-composition" className="w-full" />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Single Authoritative Factual Anchor Strip */}
      <div className="border-t border-[var(--border)] bg-[var(--surface-muted)]/70 py-4 font-mono">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[11px] md:text-[12px]">
            <div className="border-l-2 border-[var(--blue)] pl-3">
              <span className="block text-[var(--muted-foreground)] uppercase tracking-wider text-[10px]">
                INAUGURATION
              </span>
              <span className="font-semibold text-[var(--foreground)]">
                06 OCT · 10:30 AM
              </span>
            </div>

            <div className="border-l-2 border-[var(--cyan)] pl-3">
              <span className="block text-[var(--muted-foreground)] uppercase tracking-wider text-[10px]">
                VENUE
              </span>
              <span className="font-semibold text-[var(--foreground)] block text-[11px] leading-tight">
                Will be informed in the WhatsApp group, make sure to join it
              </span>
            </div>

            <div className="border-l-2 border-[var(--green)] pl-3">
              <span className="block text-[var(--muted-foreground)] uppercase tracking-wider text-[10px]">
                FORMATS
              </span>
              <span className="font-semibold text-[var(--foreground)]">
                Beginner · Intermediate · Advanced
              </span>
            </div>

            <div className="border-l-2 border-[var(--yellow)] pl-3">
              <span className="block text-[var(--muted-foreground)] uppercase tracking-wider text-[10px]">
                RECOGNITION
              </span>
              <span className="font-semibold text-[var(--foreground)]">
                Exciting Prizes + Certificates
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
