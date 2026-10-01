import React from "react";
import { DemoMessage } from "@/data/discord";

interface DiscordMessageProps {
  message: DemoMessage;
  className?: string;
}

export function DiscordMessage({ message, className = "" }: DiscordMessageProps) {
  const isRight = message.align ? message.align === "right" : message.role === "participant";

  // Semantic, theme-aware bubble styles: Light in light mode, dark charcoal in dark mode
  const getBubbleStyle = () => {
    if (isRight) {
      // PARTICIPANT:
      return "bg-[var(--discord-msg-participant-bg)] border border-[var(--discord-msg-participant-border)] border-r-[3px] border-r-[var(--discord-msg-participant-accent)] rounded-2xl rounded-tr-sm text-[var(--discord-msg-text)]";
    }
    if (message.role === "mentor") {
      // MENTOR:
      return "bg-[var(--discord-msg-mentor-bg)] border border-[var(--discord-msg-mentor-border)] border-l-[3px] border-l-[var(--discord-msg-mentor-accent)] rounded-2xl rounded-tl-sm text-[var(--discord-msg-text)]";
    }
    if (message.role === "bot") {
      // BOT:
      return "bg-[var(--discord-msg-bot-bg)] border border-[var(--discord-msg-bot-border)] border-l-[3px] border-l-[var(--discord-msg-bot-accent)] rounded-2xl rounded-tl-sm text-[var(--discord-msg-text)]";
    }
    // TEAM / Other left-aligned:
    return "bg-[var(--discord-msg-participant-bg)] border border-[var(--discord-msg-participant-border)] border-l-[3px] border-l-[var(--foreground)] rounded-2xl rounded-tl-sm text-[var(--discord-msg-text)]";
  };

  const getRoleBadge = () => {
    if (message.role === "participant") {
      return (
        <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[var(--discord-msg-participant-badge-bg)] text-[var(--discord-msg-participant-badge-text)] border border-[var(--discord-msg-participant-accent)]/40 transition-colors">
          PARTICIPANT
        </span>
      );
    }
    if (message.role === "mentor") {
      return (
        <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[var(--discord-msg-mentor-badge-bg)] text-[var(--discord-msg-mentor-badge-text)] border border-[var(--discord-msg-mentor-accent)]/40 transition-colors">
          MENTOR
        </span>
      );
    }
    if (message.role === "bot") {
      return (
        <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[var(--discord-msg-bot-badge-bg)] text-[var(--discord-msg-bot-badge-text)] border border-[var(--discord-msg-bot-accent)]/40 transition-colors">
          BOT
        </span>
      );
    }
    return (
      <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[var(--surface-muted)] text-[var(--foreground)] border border-[var(--border)] transition-colors">
        TEAM
      </span>
    );
  };

  const getAvatar = () => {
    if (isRight) {
      return (
        <div className="w-6 h-6 rounded-[6px] bg-[var(--discord-msg-participant-badge-bg)] text-[var(--discord-msg-participant-badge-text)] border border-[var(--discord-msg-participant-accent)]/40 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 transition-colors">
          {message.avatarText}
        </div>
      );
    }
    if (message.role === "bot") {
      return (
        <div className="w-6 h-6 rounded-[3px] bg-[var(--discord-msg-bot-badge-bg)] text-[var(--discord-msg-bot-badge-text)] border border-[var(--discord-msg-bot-accent)]/40 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 transition-colors">
          {message.avatarText}
        </div>
      );
    }
    if (message.role === "mentor") {
      return (
        <div className="w-6 h-6 rounded-[6px] bg-[var(--discord-msg-mentor-badge-bg)] text-[var(--discord-msg-mentor-badge-text)] border border-[var(--discord-msg-mentor-accent)]/50 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 transition-colors">
          {message.avatarText}
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-[6px] bg-[var(--surface-muted)] border border-[var(--border)] text-[var(--foreground)] font-mono font-bold text-[10px] flex items-center justify-center shrink-0 transition-colors">
        {message.avatarText}
      </div>
    );
  };

  return (
    <div
      className={`w-full flex ${
        isRight ? "justify-end" : "justify-start"
      } ${className}`}
    >
      <div className="max-w-[90%] sm:max-w-[72%] space-y-1">
        {/* Message Header Bar */}
        <div
          className={`flex items-center gap-2 text-[11px] ${
            isRight ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {getAvatar()}
          <span className="font-mono text-[12px] font-bold text-[var(--foreground)] transition-colors">
            {message.sender}
          </span>
          {getRoleBadge()}
          <span className="font-mono text-[10px] text-[var(--muted-foreground)] transition-colors">
            {message.timestamp}
          </span>
        </div>

        {/* Message Bubble - Automatically Theme-Aware */}
        <div className={`p-3.5 sm:p-4 shadow-sm transition-colors duration-200 ${getBubbleStyle()}`}>
          <div className="space-y-1.5 font-sans text-[13px] sm:text-[14px] leading-relaxed text-[var(--discord-msg-text)]">
            {message.content.map((paragraph, idx) => (
              <p key={idx} className="break-words text-[var(--discord-msg-text)]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Optional Code Snippet Block */}
          {message.codeSnippet && (
            <div className="mt-2.5 rounded-[8px] border border-[var(--discord-msg-code-border)] bg-[var(--discord-msg-code-bg)] p-3 font-mono text-[11px] sm:text-[12px] overflow-x-auto text-[var(--discord-msg-text)] transition-colors">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[var(--discord-msg-code-header)] text-[10px] uppercase text-[var(--discord-msg-code-meta)] font-semibold">
                <span>{message.codeSnippet.language.toUpperCase()}</span>
              </div>
              <pre className="font-mono leading-snug whitespace-pre-wrap text-[var(--discord-msg-text)]">
                <code>{message.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Optional Status Badge */}
          {message.statusBadge && (
            <div className="pt-2">
              <span
                className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-[4px] border ${
                  message.statusBadge.variant === "success"
                    ? "bg-[var(--green-soft)] border-[var(--green)]/40 text-[#1b5e14] dark:text-[var(--green)]"
                    : message.statusBadge.variant === "info"
                    ? "bg-[var(--blue-soft)] border-[var(--blue)]/40 text-[#0f44ad] dark:text-[var(--blue)]"
                    : "bg-[var(--surface-muted)] border-[var(--border)] text-[var(--muted-foreground)]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>{message.statusBadge.text}</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
