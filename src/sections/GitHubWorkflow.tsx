"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { LINKS } from "@/data/links";

export function GitHubWorkflow() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const workflowSteps = [
    {
      num: "01",
      name: "IDEA",
      description: "Define problem scope and write the project specification.",
      accent: "#1457D9",
    },
    {
      num: "02",
      name: "REPOSITORY",
      description: "Initialize the project codebase under version control.",
      accent: "#1457D9",
    },
    {
      num: "03",
      name: "BRANCH",
      description: "Isolate feature development cleanly from the main branch.",
      accent: "#18B8D4",
    },
    {
      num: "04",
      name: "COMMIT",
      description: "Record clear, atomic changes with descriptive documentation.",
      accent: "#18B8D4",
    },
    {
      num: "05",
      name: "PULL REQUEST",
      description: "Open PR for peer inspection and review before merging.",
      accent: "#62C94A",
    },
    {
      num: "06",
      name: "REVIEW",
      description: "Iterate through peer feedback and mentor review suggestions.",
      accent: "#62C94A",
    },
    {
      num: "07",
      name: "MERGE",
      description: "Integrate verified code into the stable mainline release.",
      accent: "#F3D21A",
    },
  ];

  return (
    <Section id="workflow" className="bg-[var(--background)]">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
            07 / WORKFLOW
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-[-0.03em] leading-[0.92] text-[var(--foreground)]">
              FROM IDEA
              <br />
              <span className="spectrum-gradient-text">TO REPOSITORY.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--foreground)] leading-relaxed font-medium">
              BuildLab uses GitHub as part of the online project workflow.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP WORKFLOW SEQUENCE (Clean Horizontal Editorial Flow) */}
        {/* ========================================================================= */}
        <div className="hidden lg:block py-4 mb-12">
          <div className="border border-[var(--border)] rounded-[20px] p-8 lg:p-10 bg-[var(--surface-card)]">
            {/* Connecting Central Spine */}
            <div className="relative pt-6 pb-6">
              <div className="absolute top-[44px] left-6 right-6 h-[2px] bg-[var(--border)] z-0">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easeCurve }}
                  className="origin-left h-full spectrum-gradient-bg"
                />
              </div>

              {/* 7 Horizontal Workflow Nodes */}
              <div className="relative z-10 grid grid-cols-7 gap-3">
                {workflowSteps.map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.45,
                      delay: shouldReduceMotion ? 0 : idx * 0.07,
                      ease: easeCurve,
                    }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Node Dot with Accent Ring */}
                    <div className="w-10 h-10 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110">
                      <div
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: step.accent }}
                      />
                    </div>

                    {/* Step Number */}
                    <span className="font-mono text-[11px] text-[var(--muted-foreground)] font-bold tracking-widest uppercase mb-1">
                      {step.num}
                    </span>

                    {/* Step Name */}
                    <h3 className="font-display font-black text-lg uppercase tracking-tight text-[var(--foreground)] mb-2">
                      {step.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[12px] text-[var(--foreground)]/80 leading-relaxed font-sans max-w-[130px]">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TABLET WORKFLOW (2-3 Column Grid) */}
        {/* ========================================================================= */}
        <div className="hidden sm:block lg:hidden mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="border border-[var(--border)] rounded-[14px] p-5 bg-[var(--surface-card)] space-y-2.5"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
                  <span className="font-mono text-xs font-bold text-[var(--muted-foreground)]">
                    STEP {step.num}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-[var(--foreground)]">
                  {step.name}
                </h3>
                <p className="text-[13px] text-[var(--foreground)]/80 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE WORKFLOW (Vertical Editorial Sequence) */}
        {/* ========================================================================= */}
        <div className="sm:hidden mb-10">
          <div className="relative border-l-2 border-[var(--foreground)] ml-4 pl-6 space-y-6 py-2">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : idx * 0.05,
                  ease: easeCurve,
                }}
                className="relative"
              >
                {/* Node Marker Dot */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>

                <div className="border border-[var(--border)] rounded-[12px] p-4 bg-[var(--surface-card)] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[var(--muted-foreground)] font-bold tracking-widest uppercase">
                      STEP {step.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]" />
                  </div>

                  <h3 className="font-display font-black text-lg uppercase tracking-tight text-[var(--foreground)]">
                    {step.name}
                  </h3>

                  <p className="text-[12px] text-[var(--foreground)]/80 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Organization CTA Bar */}
        <div className="p-6 border border-[var(--border)] rounded-[14px] bg-[var(--surface-muted)]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[12px] md:text-[13px]">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[var(--blue)]" />
              <span className="font-bold text-[var(--foreground)] uppercase">
                TECHSPACE GITHUB ORGANIZATION
              </span>
            </div>
            <span className="text-[var(--muted-foreground)]">
              All approved projects utilize professional version control and code reviews.
            </span>
          </div>

          <div>
            <Button
              href={LINKS.githubOrg}
              target="_blank"
              variant="outline"
              size="md"
              withArrow
              arrowDirection="up-right"
            >
              VISIT TECHSPACE GITHUB
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
