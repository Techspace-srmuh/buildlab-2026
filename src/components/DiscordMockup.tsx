"use client";

import React, { useState } from "react";
import { Label } from "@/components/Label";

interface ChannelCategory {
  name: string;
  channels: { id: string; name: string; description: string }[];
}

const CATEGORIES: ChannelCategory[] = [
  {
    name: "📌 INFORMATION",
    channels: [
      { id: "getting-started", name: "getting-started", description: "Official participant onboarding, program overview, and essential resources." },
      { id: "announcements", name: "announcements", description: "Key program notices, workshop schedules, and official updates from TechSpace." },
      { id: "rules", name: "rules", description: "Competition guidelines, PRD requirements, and community conduct." },
      { id: "faq", name: "faq", description: "Frequently asked questions regarding tracks, repos, and Discord workflows." },
    ],
  },
  {
    name: "🧭 BUILDLAB",
    channels: [
      { id: "project-discussion", name: "project-discussion", description: "Brainstorming project scopes, ideas, and architecture with fellow participants." },
      { id: "weekly-updates", name: "weekly-updates", description: "Share your milestone progress and commit achievements across the 3 weeks." },
      { id: "submissions", name: "submissions", description: "Official PRD links, demo videos, and final repository submission anchors." },
    ],
  },
  {
    name: "💬 COMMUNITY",
    channels: [
      { id: "general", name: "general", description: "General chatter, discussions, and networking with participants across SRM University." },
      { id: "introductions", name: "introductions", description: "Introduce yourself, your engineering interests, and your cohort year." },
    ],
  },
  {
    name: "🛠 SUPPORT",
    channels: [
      { id: "help", name: "help", description: "General technical queries, blocker resolution, and mentor Q&A." },
      { id: "github-help", name: "github-help", description: "Assistance with Git branches, PR conflicts, code reviews, and repo hygiene." },
      { id: "debugging", name: "debugging", description: "Peer and mentor code diagnostics for compiler errors and runtime exceptions." },
    ],
  },
  {
    name: "👨‍💻 TRACKS",
    channels: [
      { id: "beginner", name: "beginner", description: "Solo participants learning Git fundamentals and building their first core prototype." },
      { id: "intermediate", name: "intermediate", description: "Duo teams collaborating on multi-feature systems via PR reviews." },
      { id: "advanced", name: "advanced", description: "Squad teams (3–4 members) implementing complex architecture and stretch goals." },
    ],
  },
];

export function DiscordMockup() {
  const [activeChannelId, setActiveChannelId] = useState("getting-started");

  // Find active channel info
  let activeChannel = {
    name: "getting-started",
    description: "Official participant onboarding, program overview, and essential resources.",
  };

  for (const cat of CATEGORIES) {
    const found = cat.channels.find((c) => c.id === activeChannelId);
    if (found) {
      activeChannel = found;
      break;
    }
  }

  return (
    <div className="w-full border border-[var(--border)] rounded-[18px] md:rounded-[22px] bg-[var(--surface-card)] overflow-hidden shadow-[4px_4px_0px_0px_var(--border)] select-none">
      {/* Discord Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface-muted)]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]/40 bg-[var(--foreground)]/15 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]/40 bg-[var(--foreground)]/15 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]/40 bg-[var(--foreground)]/15 inline-block" />
          </div>
          <span className="font-mono text-[11px] md:text-[12px] font-bold tracking-wider text-[var(--foreground)] uppercase ml-2">
            TECHSPACE BUILDLAB ’26
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--green)] inline-block animate-pulse" />
          <span className="font-mono text-[10px] uppercase font-semibold text-[var(--muted-foreground)]">
            COMMUNITY // ONLINE
          </span>
        </div>
      </div>

      {/* Main Window Split View */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
        {/* Left Channels Sidebar (5 cols desktop) */}
        <div className="md:col-span-5 lg:col-span-5 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--surface-muted)]/50 p-3 sm:p-4 overflow-y-auto max-h-[300px] md:max-h-[500px]">
          <div className="space-y-4">
            {CATEGORIES.map((category) => (
              <div key={category.name} className="space-y-1">
                {/* Category Header */}
                <span className="font-mono text-[10px] tracking-wider text-[var(--muted-foreground)] font-bold uppercase block px-2 py-0.5">
                  {category.name}
                </span>

                {/* Channel List */}
                <div className="space-y-0.5">
                  {category.channels.map((ch) => {
                    const isActive = ch.id === activeChannelId;
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => setActiveChannelId(ch.id)}
                        className={`w-full flex items-center justify-between text-left px-2 py-1.5 rounded-[6px] font-mono text-[12px] transition-all duration-150 cursor-pointer ${
                          isActive
                            ? "bg-[var(--foreground)] text-[color:var(--background)] font-bold shadow-[2px_2px_0px_0px_var(--border)]"
                            : "text-[var(--foreground)]/80 hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
                        }`}
                        style={isActive ? { color: "var(--background)" } : undefined}
                      >
                        <span className="flex items-center gap-1.5 truncate">
                          <span className={isActive ? "text-[var(--cyan)]" : "text-[var(--muted-foreground)]"}>
                            #
                          </span>
                          <span className="truncate">{ch.name}</span>
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] inline-block" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Chat Preview Area (7 cols desktop) */}
        <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-between bg-[var(--surface-card)]">
          {/* Channel Header Bar */}
          <div className="px-5 py-3 border-b border-[var(--border)] flex items-center justify-between bg-[var(--surface-card)]">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-lg text-[var(--foreground)]">#</span>
              <span className="font-mono font-bold text-[14px] uppercase text-[var(--foreground)] tracking-wider">
                {activeChannel.name}
              </span>
            </div>
            <Label variant="outline" size="sm">
              SERVER CHANNEL
            </Label>
          </div>

          {/* Active Channel Message Canvas */}
          <div className="p-5 sm:p-6 flex-1 space-y-5">
            {/* System Welcome Message */}
            <div className="border border-[var(--border)] rounded-[12px] p-4 bg-[var(--surface-muted)]/40 font-mono text-[11px] space-y-2">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--blue)]" />
                  <span className="font-bold text-[var(--foreground)] uppercase">
                    TECHSPACE BOT // BL-2026
                  </span>
                </div>
                <span className="text-[10px] text-[var(--muted-foreground)]">CHANNEL SPEC</span>
              </div>
              <p className="text-[12px] font-sans text-[var(--foreground)] leading-relaxed pt-1">
                {activeChannel.description}
              </p>
            </div>

            {/* Simulated Server Guide Post */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full bg-[var(--foreground)] text-[color:var(--background)] flex items-center justify-center font-mono font-black text-xs"
                  style={{ color: "var(--background)" }}
                >
                  TS
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-[var(--foreground)] uppercase">
                      TechSpace Hub
                    </span>
                    <span className="text-[10px] font-mono text-[var(--muted-foreground)]">
                      OCT 2026
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-9 space-y-2.5">
                <div className="p-4 border border-[var(--border)] rounded-[10px] bg-[var(--surface-card)] space-y-2">
                  <h4 className="font-display font-black text-lg uppercase tracking-tight text-[var(--foreground)]">
                    BuildLab ’26 Participant Workspace
                  </h4>
                  <p className="text-[13px] text-[var(--foreground)]/85 leading-relaxed font-sans">
                    After the in-person kick-off on 05 October (10:30 AM, 5th Floor, Conference Room, EB),
                    this server acts as your operational engineering hub throughout the three-week sprint.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 font-mono text-[10px]">
                    <span
                      className="px-2 py-0.5 rounded bg-[var(--foreground)] text-[color:var(--background)] font-bold"
                      style={{ color: "var(--background)" }}
                    >
                      # GITHUB INTEGRATION
                    </span>
                    <span className="px-2 py-0.5 rounded border border-[var(--border)] text-[var(--foreground)] font-semibold">
                      # MENTOR SYNC
                    </span>
                    <span className="px-2 py-0.5 rounded border border-[var(--border)] text-[var(--foreground)] font-semibold">
                      # PEER REVIEW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Read-Only Interactive Channel Notice Input Strip */}
          <div className="p-4 border-t border-[var(--border)] bg-[var(--surface-muted)]/30 font-mono text-[11px] flex items-center justify-between text-[var(--muted-foreground)]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted-foreground)]" />
              <span>CLICK SIDEBAR CHANNELS TO INSPECT SERVER TOPICS</span>
            </span>
            <span className="text-[10px] uppercase font-bold text-[var(--foreground)]">
              # {activeChannel.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
