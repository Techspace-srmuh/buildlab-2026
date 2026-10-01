import React from "react";
import { DiscordChannelData } from "@/data/discord";

interface DiscordPurposePanelProps {
  channel: DiscordChannelData;
  className?: string;
}

export function DiscordPurposePanel({
  channel,
  className = "",
}: DiscordPurposePanelProps) {
  return (
    <div
      className={`border border-[var(--border)] rounded-[12px] p-4 bg-[var(--surface-muted)]/40 ${className}`}
    >
      <div className="flex items-center gap-2 mb-1 text-[var(--muted-foreground)]">
        <span className="font-mono text-base font-black text-[var(--foreground)]">
          #
        </span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--foreground)]">
          {channel.name}
        </span>
      </div>

      <h4 className="font-mono font-bold text-[12px] sm:text-[13px] uppercase tracking-wider text-[var(--foreground)]">
        {channel.purpose}
      </h4>
      <p className="font-sans text-[12px] sm:text-[13px] text-[var(--foreground)]/80 leading-relaxed pt-1">
        {channel.description}
      </p>
    </div>
  );
}
