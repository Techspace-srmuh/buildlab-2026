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
    <Section id="workflow" className="bg-[var(--paper)]">
      <Container>
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-[#CFCFC4] pb-3 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--ink)] inline-block" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--ink)]">
              07 / BUILD IN PUBLIC
            </span>
          </div>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[var(--gray)]">
            RECOMMENDED WORKFLOW
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-[-0.03em] leading-[0.92] text-[var(--ink)]">
              FROM IDEA
              <br />
              <span className="spectrum-gradient-text">TO REPOSITORY.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#CFCFC4] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--ink)] leading-relaxed font-medium">
              BuildLab uses GitHub as part of the online project workflow.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP WORKFLOW SEQUENCE (Editorial Technical Diagram) */}
        {/* ========================================================================= */}
        <div className="hidden lg:block py-6 mb-12">
          <div className="border border-[#CFCFC4] rounded-[20px] p-8 lg:p-10 bg-[var(--paper)] shadow-[4px_4px_0px_0px_rgba(8,8,8,0.06)]">
            {/* Diagram Status Bar */}
            <div className="flex items-center justify-between font-mono text-[11px] text-[var(--gray)] uppercase tracking-widest pb-6 border-b border-[#CFCFC4]">
              <span>SPECIFICATION // GIT LIFECYCLE</span>
              <span>BRANCH → PR → CODE REVIEW</span>
              <span>ENGINEERING PROTOCOL</span>
            </div>

            {/* Connecting Central Spine */}
            <div className="relative pt-10 pb-6">
              <div className="absolute top-[68px] left-6 right-6 h-[2px] bg-[#CFCFC4] z-0">
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
                    <div className="w-10 h-10 rounded-full border-2 border-[var(--ink)] bg-[var(--paper)] flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110 shadow-[2px_2px_0px_0px_rgba(8,8,8,0.1)]">
                      <div
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: step.accent }}
                      />
                    </div>

                    {/* Step Number */}
                    <span className="font-mono text-[10px] text-[var(--gray)] font-bold tracking-widest uppercase mb-1">
                      STEP {step.num}
                    </span>

                    {/* Step Name */}
                    <h3 className="font-display font-black text-lg uppercase tracking-tight text-[var(--ink)] mb-2">
                      {step.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[12px] text-[var(--ink)]/80 leading-relaxed font-sans max-w-[130px]">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Diagram Footer */}
            <div className="mt-8 pt-4 border-t border-[#CFCFC4] flex items-center justify-between font-mono text-[11px] text-[var(--gray)]">
              <span>WORKFLOW GUIDANCE: ATOMIC COMMITS & PEER REVIEWS PRESERVE SYSTEM QUALITY</span>
              <span className="text-[var(--ink)] font-semibold uppercase">PLATFORM: GITHUB</span>
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
                className="border border-[#CFCFC4] rounded-[14px] p-5 bg-[var(--paper)] space-y-2.5"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#CFCFC4]">
                  <span className="font-mono text-xs font-bold text-[var(--gray)]">
                    STEP {step.num}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-[var(--ink)]">
                  {step.name}
                </h3>
                <p className="text-[13px] text-[var(--ink)]/80 leading-relaxed font-sans">
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
          <div className="relative border-l-2 border-[#080808] ml-4 pl-6 space-y-6 py-2">
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
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[var(--ink)] bg-[var(--paper)] flex items-center justify-center">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>

                <div className="border border-[#CFCFC4] rounded-[12px] p-4 bg-[var(--paper)] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[var(--gray)] font-bold tracking-widest uppercase">
                      STEP {step.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
                  </div>

                  <h3 className="font-display font-black text-lg uppercase tracking-tight text-[var(--ink)]">
                    {step.name}
                  </h3>

                  <p className="text-[12px] text-[var(--ink)]/80 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Organization CTA Bar */}
        <div className="p-6 border border-[#CFCFC4] rounded-[14px] bg-[#EBEBE0]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[12px] md:text-[13px]">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#1457D9]" />
              <span className="font-bold text-[var(--ink)] uppercase">
                TECHSPACE GITHUB ORGANIZATION
              </span>
            </div>
            <span className="text-[var(--gray)]">
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
