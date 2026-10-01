"use client";

import React from "react";
import { DiscordChannelData } from "@/data/discord";

interface DiscordChannelHeaderProps {
  channel: DiscordChannelData;
  className?: string;
}

export function DiscordChannelHeader({
  channel,
  className = "",
}: DiscordChannelHeaderProps) {
  return (
    <div
      className={`px-4 sm:px-6 py-3 border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-3 bg-[var(--surface-card)] ${className}`}
    >
      {/* Channel Title & Prefix */}
      <div className="flex items-center gap-2.5">
        <span className="font-mono font-black text-xl sm:text-2xl text-[var(--foreground)]">
          #
        </span>
        <div>
          <h3 className="font-mono font-bold text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--foreground)] leading-tight">
            {channel.name}
          </h3>
          <p className="font-sans text-[11px] sm:text-[12px] text-[var(--muted-foreground)] line-clamp-1">
            {channel.description}
          </p>
        </div>
      </div>

      {/* Small Category Metadata */}
      <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px]">
        <span className="px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--muted-foreground)] uppercase font-semibold">
          {channel.category}
        </span>
      </div>
    </div>
  );
}
