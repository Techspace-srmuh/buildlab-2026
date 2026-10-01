"use client";

import React from "react";

interface DiscordDemoControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  currentStepIndex: number;
  totalSteps: number;
  currentChannelName: string;
  className?: string;
}

export function DiscordDemoControls({
  isPlaying,
  onPlay,
  onPause,
  onStop,
  currentStepIndex,
  totalSteps,
  currentChannelName,
  className = "",
}: DiscordDemoControlsProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 p-3 sm:p-3.5 rounded-[10px] border border-[var(--border)] bg-[var(--surface-muted)]/50 ${className}`}
    >
      {/* Demo Description & Status */}
      <div className="flex items-center gap-2.5">
        <span
          className={`w-2 h-2 rounded-full ${
            isPlaying ? "bg-[var(--cyan)] animate-pulse" : "bg-[var(--muted-foreground)]"
          }`}
        />
        <div className="font-mono text-[11px] sm:text-[12px]">
          <span className="font-bold text-[var(--foreground)] uppercase mr-2">
            GUIDED DEMO:
          </span>
          {isPlaying ? (
            <span className="text-[var(--foreground)]">
              SHOWING STEP {currentStepIndex + 1}/{totalSteps} (
              <strong className="text-[var(--cyan)]">#{currentChannelName}</strong>)
            </span>
          ) : (
            <span className="text-[var(--muted-foreground)]">
              Walk through the 5 essential BuildLab channels automatically
            </span>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-2 font-mono text-[11px] sm:text-[12px]">
        {isPlaying ? (
          <>
            <button
              type="button"
              onClick={onPause}
              aria-label="Pause automated demo"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] border border-[var(--foreground)] bg-[var(--foreground)] text-[color:var(--background)] font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[2px_2px_0px_0px_rgba(8,8,8,0.15)]"
              style={{ color: "var(--background)" }}
            >
              <span>⏸</span>
              <span>PAUSE</span>
            </button>
            <button
              type="button"
              onClick={onStop}
              aria-label="Stop automated demo"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-card)] text-[var(--foreground)] font-semibold hover:border-[var(--foreground)] transition-colors cursor-pointer"
            >
              <span>⏹</span>
              <span>STOP</span>
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label="Play automated demo tour"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] border border-[var(--foreground)] bg-[var(--foreground)] text-[color:var(--background)] font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[2px_2px_0px_0px_rgba(8,8,8,0.15)]"
            style={{ color: "var(--background)" }}
          >
            <span>▶</span>
            <span>PLAY DEMO TOUR</span>
          </button>
        )}
      </div>
    </div>
  );
}
