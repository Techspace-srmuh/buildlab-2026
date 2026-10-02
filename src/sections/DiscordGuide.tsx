"use client";

import React from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { DiscordExperience } from "@/components/discord/DiscordExperience";
import { LINKS } from "@/data/links";

export function DiscordGuide() {
  return (
    <Section id="discord" className="bg-[var(--paper)]">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
            06 / THE COMMUNITY
          </span>
        </div>

        {/* Section Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-[-0.03em] leading-[0.92] text-[var(--foreground)]">
              EVERYTHING YOU NEED,
              <br />
              <span className="spectrum-gradient-text">IN ONE SERVER.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--foreground)] leading-relaxed font-medium">
              Discord is the operational workspace for BuildLab. Explore how participants onboard, coordinate tracks, troubleshoot with mentors, and submit project builds.
            </p>
          </div>
        </div>

        {/* Interactive Discord Experience Simulation */}
        <div className="mb-12">
          <DiscordExperience />
        </div>

        {/* Real Discord CTA Bar (Authoritative Links Only) */}
        <div className="pt-6 border-t border-[var(--border)]">
          <div className="p-6 sm:p-8 border border-[var(--border)] rounded-[14px] bg-[var(--surface-muted)]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[2px_2px_0px_0px_rgba(8,8,8,0.06)]">
            <div className="space-y-1 max-w-xl">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[var(--foreground)]">
                READY TO JOIN BUILDLAB?
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[var(--muted-foreground)] leading-relaxed">
                {LINKS.isDiscordAvailable
                  ? "Join the official TechSpace BuildLab '26 Discord server to meet mentors, coordinate with your team, and receive live announcements."
                  : "The official Discord invite link will be published to registered cohorts prior to the in-person kick-off at the 5th Floor Conference Room, Engineering Block."}
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              {LINKS.isDiscordAvailable && LINKS.discord ? (
                <Button
                  href={LINKS.discord}
                  target="_blank"
                  variant="primary"
                  size="md"
                  withArrow
                  arrowDirection="up-right"
                  className="w-full sm:w-auto"
                >
                  JOIN THE DISCORD
                </Button>
              ) : (
                <div className="flex flex-col items-start sm:items-end gap-1.5 w-full sm:w-auto">
                  <Button
                    disabled
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto cursor-not-allowed opacity-60"
                  >
                    JOIN THE DISCORD (PENDING)
                  </Button>
                  <span className="font-mono text-[10px] uppercase text-[var(--muted-foreground)] tracking-wider">
                    INVITE PUBLISHING PRIOR TO LAUNCH
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
