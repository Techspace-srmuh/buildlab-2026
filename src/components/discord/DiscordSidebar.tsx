"use client";

import React, { useState } from "react";
import { DISCORD_CATEGORIES } from "@/data/discord";

interface DiscordSidebarProps {
  activeChannelId: string;
  onSelectChannel: (channelId: string) => void;
  className?: string;
}

export function DiscordSidebar({
  activeChannelId,
  onSelectChannel,
  className = "",
}: DiscordSidebarProps) {
  const [mobileCategoryFilter, setMobileCategoryFilter] = useState<string>("ALL");

  return (
    <aside
      className={`border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--surface-muted)]/40 flex flex-col ${className}`}
      aria-label="Discord Server Channels"
    >
      {/* Server Header Branding */}
      <div className="p-3.5 border-b border-[var(--border)] bg-[var(--surface-card)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-[4px] bg-[var(--foreground)] text-[color:var(--background)] flex items-center justify-center font-mono font-black text-[10px]" style={{ color: "var(--background)" }}>
            BL
          </div>
          <span className="font-mono text-[11px] sm:text-[12px] font-black uppercase tracking-wider text-[var(--foreground)] truncate">
            BUILDLAB ’26 SERVER
          </span>
        </div>
        <span className="w-2 h-2 rounded-full bg-[var(--green)] inline-block animate-pulse" title="Server Online" />
      </div>

      {/* Mobile Category Quick Switcher (visible on small screens) */}
      <div className="md:hidden p-2.5 border-b border-[var(--border)] bg-[var(--surface-muted)]/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setMobileCategoryFilter("ALL")}
          className={`px-2.5 py-1 rounded-[4px] font-mono text-[10px] uppercase font-bold shrink-0 transition-colors ${
            mobileCategoryFilter === "ALL"
              ? "bg-[var(--foreground)] text-[color:var(--background)]"
              : "bg-[var(--surface-card)] text-[var(--muted-foreground)] border border-[var(--border)]"
          }`}
          style={mobileCategoryFilter === "ALL" ? { color: "var(--background)" } : undefined}
        >
          ALL
        </button>
        {DISCORD_CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            type="button"
            onClick={() => setMobileCategoryFilter(cat.name)}
            className={`px-2.5 py-1 rounded-[4px] font-mono text-[10px] uppercase font-bold shrink-0 transition-colors ${
              mobileCategoryFilter === cat.name
                ? "bg-[var(--foreground)] text-[color:var(--background)]"
                : "bg-[var(--surface-card)] text-[var(--muted-foreground)] border border-[var(--border)]"
            }`}
            style={mobileCategoryFilter === cat.name ? { color: "var(--background)" } : undefined}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Scrollable Channels List */}
      <div className="p-3 space-y-4 overflow-y-auto max-h-[220px] sm:max-h-[300px] md:max-h-[580px] flex-1">
        {DISCORD_CATEGORIES.filter(
          (cat) => mobileCategoryFilter === "ALL" || mobileCategoryFilter === cat.name
        ).map((category) => (
          <div key={category.name} className="space-y-1">
            {/* Category Title */}
            <div className="px-2 py-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest font-bold text-[var(--muted-foreground)] select-none">
              <span className="flex items-center gap-1">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
              <span className="text-[9px] opacity-60">
                {category.channels.length}
              </span>
            </div>

            {/* Channels within category */}
            <div className="space-y-0.5" role="tablist" aria-orientation="vertical">
              {category.channels.map((ch) => {
                const isActive = ch.id === activeChannelId;

                return (
                  <button
                    key={ch.id}
                    type="button"
                    role="tab"
                    id={`tab-${ch.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${ch.id}`}
                    onClick={() => onSelectChannel(ch.id)}
                    className={`w-full flex items-center justify-between text-left px-2.5 py-1.5 rounded-[6px] font-mono text-[12px] transition-all duration-150 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] ${
                      isActive
                        ? "bg-[var(--foreground)] text-[color:var(--background)] font-bold shadow-[2px_2px_0px_0px_rgba(8,8,8,0.15)]"
                        : "text-[var(--foreground)]/80 hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
                    }`}
                    style={isActive ? { color: "var(--background)" } : undefined}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span
                        className={`font-mono ${
                          isActive ? "text-[var(--cyan)] font-black" : "text-[var(--muted-foreground)]"
                        }`}
                      >
                        #
                      </span>
                      <span className="truncate">{ch.name}</span>
                    </span>

                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] inline-block shrink-0 ml-1"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
