"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { DiscordMockup } from "@/components/DiscordMockup";
import { LINKS } from "@/data/links";

export function DiscordGuide() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const onboardingSteps = [
    {
      step: "01",
      title: "JOIN",
      description: "Join the BuildLab Discord community.",
      accent: "#1457D9",
    },
    {
      step: "02",
      title: "READ",
      description: "Start with the information channels and understand the event structure.",
      accent: "#18B8D4",
    },
    {
      step: "03",
      title: "CHOOSE",
      description: "Find the channel corresponding to your track.",
      accent: "#62C94A",
    },
    {
      step: "04",
      title: "BUILD",
      description: "Use the community and support channels while working on your project.",
      accent: "#F3D21A",
    },
  ];

  return (
    <Section id="discord" className="bg-[var(--paper)]">
      <Container>
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-[#CFCFC4] pb-3 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--ink)] inline-block" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--ink)]">
              06 / THE COMMUNITY
            </span>
          </div>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[var(--gray)]">
            DISCORD HUB
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-[-0.03em] leading-[0.92] text-[var(--ink)]">
              EVERYTHING YOU NEED,
              <br />
              <span className="spectrum-gradient-text">IN ONE SERVER.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#CFCFC4] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--ink)] leading-relaxed font-medium">
              After the inauguration, BuildLab continues online through GitHub and Discord.
            </p>
          </div>
        </div>

        {/* Discord UI Mockup Display */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: easeCurve }}
          className="mb-14 md:mb-16"
        >
          <DiscordMockup />
        </motion.div>

        {/* 4-Step Onboarding Flow & Server CTA Bar */}
        <div className="pt-8 border-t border-[#CFCFC4]">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-semibold text-[var(--gray)]">
              ONBOARDING SEQUENCE
            </span>
            <div className="h-[1px] flex-1 bg-[#CFCFC4]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {onboardingSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: easeCurve,
                }}
                className="border border-[#CFCFC4] rounded-[14px] p-5 bg-[var(--paper)] flex flex-col justify-between hover:border-[var(--ink)] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#CFCFC4]">
                    <span className="font-display font-black text-2xl text-[var(--ink)]">
                      {step.step}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: step.accent }}
                    />
                  </div>

                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-[var(--ink)] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[13px] text-[var(--ink)]/80 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Row */}
          <div className="p-6 border border-[var(--ink)] rounded-[14px] bg-[#EBEBE0]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-[12px] md:text-[13px]">
              <span className="font-bold text-[var(--ink)] uppercase block">
                SERVER INVITATION
              </span>
              <span className="text-[var(--gray)]">
                Official Discord invite link will be published prior to event launch.
              </span>
            </div>

            <div>
              {LINKS.isDiscordAvailable && LINKS.discord ? (
                <Button
                  href={LINKS.discord}
                  target="_blank"
                  variant="primary"
                  size="md"
                  withArrow
                  arrowDirection="up-right"
                >
                  JOIN THE DISCORD
                </Button>
              ) : (
                <Button
                  disabled
                  variant="primary"
                  size="md"
                  title="Official invite URL pending announcement"
                >
                  JOIN THE DISCORD (PENDING)
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
