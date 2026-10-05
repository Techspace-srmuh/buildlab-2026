import React from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function About() {

  const facts = [
    { label: "DATES", value: "06 OCT — 23 OCT 2026" },
    { label: "DURATION", value: "3 WEEKS" },
    { label: "ELIGIBILITY", value: "B.TECH CSE / BCA CS" },
    { label: "YEARS", value: "YEAR I — III" },
    { label: "FORMAT", value: "PROJECT-BASED LEARNING COMPETITION" },
    { label: "PLATFORMS", value: "GITHUB + DISCORD" },
    { label: "INAUGURATION", value: "06 OCT · 10:30 AM" },
    { label: "VENUE", value: "WILL BE INFORMED IN THE WHATSAPP GROUP (MAKE SURE TO JOIN IT)" },
  ];

  return (
    <Section id="about" className="bg-[var(--background)]">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
            01 / ABOUT
          </span>
        </div>

        {/* Editorial Layout: 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[84px] uppercase tracking-[-0.03em] leading-[0.9] text-[var(--foreground)] mb-6 md:mb-8">
                LEARN BY
                <br />
                <span className="spectrum-gradient-text">BUILDING.</span>
              </h2>

              <p className="text-lg sm:text-xl md:text-[22px] text-[var(--foreground)] font-normal leading-relaxed max-w-2xl mb-6">
                TechSpace BuildLab ’26 is a three-week project-based learning competition by
                TechSpace, SRM University, Sonepat, for B.Tech CSE and BCA CS students from
                Year I to Year III.
              </p>

              <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
                The program begins with an in-person inauguration and then runs online through
                GitHub and Discord.
              </p>
            </div>
          </div>

          {/* Right Column: Confirmed Program Specifications */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-8 lg:pt-0 lg:pl-10">
            <div className="space-y-4 font-mono">
              <span className="font-mono text-[11px] text-[var(--muted-foreground)] uppercase tracking-widest block font-semibold mb-3">
                PROGRAM SPECIFICATIONS
              </span>

              <div className="divide-y divide-[var(--border)]">
                {facts.map((fact) => (
                  <div key={fact.label} className="py-3 flex items-start justify-between gap-4">
                    <span className="text-[11px] text-[var(--muted-foreground)] uppercase tracking-wider shrink-0">
                      {fact.label}
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-bold text-[var(--foreground)] text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
