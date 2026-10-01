import React from "react";
import { Container } from "@/components/Container";
import { Arrow } from "@/components/Arrow";
import { LINKS } from "@/data/links";

export function Footer() {
  const internalNav = [
    { name: "Event", href: LINKS.explore },
    { name: "Tracks", href: LINKS.tracks },
    { name: "Timeline", href: LINKS.timeline },
    { name: "Projects", href: LINKS.projects },
    { name: "Mentors", href: LINKS.mentors },
    { name: "Community", href: LINKS.discordGuide },
    { name: "Prizes", href: LINKS.prizes },
  ];

  const externalLinks = [
    { name: "TechSpace Website", href: LINKS.techspaceWeb },
    { name: "TechSpace GitHub", href: LINKS.githubOrg },
    { name: "BuildLab GitHub", href: LINKS.githubRepo },
    {
      name: LINKS.isDiscordAvailable ? "Discord Server" : "Discord (Pending)",
      href: LINKS.isDiscordAvailable ? LINKS.discord : LINKS.discordGuide,
      isPending: !LINKS.isDiscordAvailable,
    },
  ];

  return (
    <footer className="w-full bg-[var(--paper)] border-t border-[#CFCFC4] pt-16 pb-12 mt-16 md:mt-24">
      <Container>
        {/* Top Header Block: Branding & Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#CFCFC4]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gray)] font-medium block mb-1">
              TECHSPACE
            </span>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[var(--ink)]">
                BUILDLAB ’26
              </span>
              <span className="w-2 h-2 rounded-full bg-[#18B8D4]" />
            </div>
          </div>

          <div>
            <p className="font-mono font-bold text-sm sm:text-base uppercase tracking-[0.14em] text-[var(--ink)]">
              LEARN BY BUILDING.
            </p>
          </div>
        </div>

        {/* Middle Navigation & External Links Grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#CFCFC4]">
          {/* Internal Page Anchor Links (7 cols) */}
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest block mb-4 font-bold">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[13px] uppercase tracking-wider">
              {internalNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[var(--ink)]/80 hover:text-[var(--ink)] hover:underline underline-offset-4 py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* External Links (5 cols) */}
          <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#CFCFC4] pt-6 md:pt-0 md:pl-8">
            <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest block mb-4 font-bold">
              OFFICIAL PLATFORMS
            </span>
            <div className="space-y-2.5 font-mono text-[13px] uppercase tracking-wider">
              {externalLinks.map((item) => {
                if (item.isPending) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-[var(--gray)] flex items-center justify-between py-1 group hover:text-[var(--ink)]"
                    >
                      <span>{item.name}</span>
                      <Arrow direction="down" className="w-3 h-3 text-[var(--gray)]" />
                    </a>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ink)]/80 hover:text-[var(--ink)] flex items-center justify-between py-1 group hover:underline underline-offset-4"
                  >
                    <span>{item.name}</span>
                    <Arrow direction="up-right" className="w-3 h-3 text-[var(--gray)] group-hover:text-[var(--ink)] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Attribution / Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[var(--gray)]">
          <div>
            <span>© 2026 TECHSPACE · SRM UNIVERSITY SONEPAT</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1457D9]" />
            <span>05.10.2026 — 23.10.2026</span>
            <span className="text-[#CFCFC4]">/</span>
            <span>THREE WEEKS</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
