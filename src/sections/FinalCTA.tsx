import React from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { LINKS } from "@/data/links";

export function FinalCTA() {
  return (
    <Section id="final-cta" className="bg-[var(--background)] border-b-0 pb-0">
      <Container>
        {/* Large Editorial Poster Conclusion Block */}
        <div className="relative border border-[var(--border)] rounded-[22px] md:rounded-[28px] bg-[var(--surface-card)] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-[6px_6px_0px_0px_var(--border)]">
          {/* Background Technical Grid Accent */}
          <div className="absolute inset-0 grid-editorial pointer-events-none opacity-20" />

          {/* Top Header */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px] md:text-[12px] uppercase text-[var(--muted-foreground)] tracking-[0.18em] pb-6 mb-8 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--cyan)]" />
              <span className="font-bold text-[var(--foreground)]">TECHSPACE BUILDLAB ’26</span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Dominating Headline */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[104px] uppercase tracking-[-0.03em] leading-[0.88] text-[var(--foreground)]">
                LEARN
                <br />
                BY
                <br />
                <span className="spectrum-gradient-text">BUILDING.</span>
              </h2>

              <p className="text-lg sm:text-xl md:text-[22px] text-[var(--foreground)] font-normal leading-relaxed max-w-xl">
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
                    stroke="var(--border)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="88"
                    ry="35"
                    stroke="var(--foreground)"
                    strokeWidth="1.5"
                    transform="rotate(-30 100 100)"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="88"
                    ry="35"
                    stroke="var(--foreground)"
                    strokeWidth="1.5"
                    transform="rotate(30 100 100)"
                  />

                  {/* Spectrum Node Dots */}
                  <circle cx="28" cy="60" r="6" fill="var(--blue)" stroke="var(--foreground)" strokeWidth="1.5" />
                  <circle cx="172" cy="62" r="6" fill="var(--cyan)" stroke="var(--foreground)" strokeWidth="1.5" />
                  <circle cx="34" cy="144" r="6" fill="var(--green)" stroke="var(--foreground)" strokeWidth="1.5" />
                  <circle cx="166" cy="140" r="7" fill="var(--yellow)" stroke="var(--foreground)" strokeWidth="1.5" />

                  {/* Center Solid Emblem */}
                  <circle cx="100" cy="100" r="28" fill="var(--foreground)" />
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fill="var(--background)"
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
      </Container>
    </Section>
  );
}
