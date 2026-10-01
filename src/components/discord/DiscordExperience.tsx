"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  getChannelById,
  AUTO_DEMO_CHANNELS,
  BUILDLAB_WORKFLOW_STEPS,
  WorkflowStepId,
} from "@/data/discord";
import { BuildLabWorkflow } from "./BuildLabWorkflow";
import { DiscordDemoControls } from "./DiscordDemoControls";
import { DiscordSidebar } from "./DiscordSidebar";
import { DiscordChannelHeader } from "./DiscordChannelHeader";
import { DiscordPurposePanel } from "./DiscordPurposePanel";
import { DiscordMessageSequence } from "./DiscordMessageSequence";
import { DiscordTicketDemo } from "./DiscordTicketDemo";

export function DiscordExperience() {
  const [activeChannelId, setActiveChannelId] = useState<string>("getting-started");
  const [isPlayingDemo, setIsPlayingDemo] = useState<boolean>(false);
  const [demoStepIndex, setDemoStepIndex] = useState<number>(0);
  const [isTicketModeActive, setIsTicketModeActive] = useState<boolean>(false);

  const shouldReduceMotion = useReducedMotion();
  const activeChannel = getChannelById(activeChannelId);
  const demoTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Stop demo tour
  const handleStopDemo = useCallback(() => {
    setIsPlayingDemo(false);
    if (demoTimerRef.current) {
      clearTimeout(demoTimerRef.current);
      demoTimerRef.current = null;
    }
  }, []);

  // Pause demo tour
  const handlePauseDemo = useCallback(() => {
    setIsPlayingDemo(false);
    if (demoTimerRef.current) {
      clearTimeout(demoTimerRef.current);
      demoTimerRef.current = null;
    }
  }, []);

  // Start / Resume demo tour
  const handlePlayDemo = useCallback(() => {
    setIsPlayingDemo(true);
    setIsTicketModeActive(false);
    setActiveChannelId(AUTO_DEMO_CHANNELS[demoStepIndex]);
  }, [demoStepIndex]);

  // Auto-demo stepper logic
  useEffect(() => {
    if (!isPlayingDemo) return;

    demoTimerRef.current = setTimeout(() => {
      setDemoStepIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= AUTO_DEMO_CHANNELS.length) {
          setIsPlayingDemo(false);
          return 0;
        }
        setIsTicketModeActive(false);
        setActiveChannelId(AUTO_DEMO_CHANNELS[nextIndex]);
        return nextIndex;
      });
    }, 5500);

    return () => {
      if (demoTimerRef.current) {
        clearTimeout(demoTimerRef.current);
      }
    };
  }, [isPlayingDemo, demoStepIndex]);

  // When user clicks a channel manually, pause auto-demo if running
  const handleSelectChannel = (channelId: string) => {
    if (isPlayingDemo) {
      handlePauseDemo();
    }
    setIsTicketModeActive(false);
    setActiveChannelId(channelId);
    const tourIndex = AUTO_DEMO_CHANNELS.indexOf(channelId);
    if (tourIndex !== -1) {
      setDemoStepIndex(tourIndex);
    }
  };

  // When user clicks a workflow step, jump to its primary associated channel
  const handleSelectWorkflowStep = (stepId: WorkflowStepId) => {
    if (isPlayingDemo) {
      handlePauseDemo();
    }
    setIsTicketModeActive(false);
    const step = BUILDLAB_WORKFLOW_STEPS.find((s) => s.id === stepId);
    if (step && step.associatedChannels.length > 0) {
      setActiveChannelId(step.associatedChannels[0]);
    }
  };

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="space-y-6">
      {/* Layer 1: Animated "HOW BUILDLAB OPERATES" Interactive Workflow */}
      <BuildLabWorkflow
        activeStepId={activeChannel.workflowStep}
        onSelectStep={handleSelectWorkflowStep}
      />

      {/* Auto-Demo Tour Control Bar */}
      <DiscordDemoControls
        isPlaying={isPlayingDemo}
        onPlay={handlePlayDemo}
        onPause={handlePauseDemo}
        onStop={handleStopDemo}
        currentStepIndex={demoStepIndex}
        totalSteps={AUTO_DEMO_CHANNELS.length}
        currentChannelName={activeChannel.name}
      />

      {/* Layer 2: Discord Experience Window */}
      <div className="w-full border border-[var(--border)] rounded-[16px] md:rounded-[20px] bg-[var(--surface-card)] overflow-hidden shadow-[4px_4px_0px_0px_rgba(8,8,8,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.35)] select-none">
        {/* Title Bar with Window Controls */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface-muted)]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]/40 bg-[var(--foreground)]/15 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]/40 bg-[var(--foreground)]/15 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]/40 bg-[var(--foreground)]/15 inline-block" />
            </div>
            <span className="font-mono text-[11px] md:text-[12px] font-bold tracking-wider text-[var(--foreground)] uppercase ml-2">
              BUILDLAB DISCORD
            </span>
          </div>
        </div>

        {/* Window Body Grid: Sidebar & Chat Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
          {/* Sidebar Navigation */}
          <div className="md:col-span-4 lg:col-span-4">
            <DiscordSidebar
              activeChannelId={activeChannelId}
              onSelectChannel={handleSelectChannel}
            />
          </div>

          {/* Main Channel Message Canvas */}
          <div
            className="md:col-span-8 lg:col-span-8 flex flex-col justify-between bg-[var(--surface-card)]"
            role="tabpanel"
            id={`panel-${activeChannel.id}`}
            aria-labelledby={`tab-${activeChannel.id}`}
          >
            {/* Channel Top Header Bar */}
            <DiscordChannelHeader channel={activeChannel} />

            {/* Scrollable Message Content Area */}
            <div className="p-4 sm:p-6 flex-1 space-y-5 overflow-y-auto max-h-[500px]">
              {isTicketModeActive && activeChannel.id === "help" ? (
                /* Ticket System Demonstration View */
                <DiscordTicketDemo
                  onBackToChat={() => setIsTicketModeActive(false)}
                />
              ) : (
                /* Standard Channel View */
                <>
                  {/* Channel Purpose Banner */}
                  <DiscordPurposePanel channel={activeChannel} />

                  {/* Two-Sided Message Sequence */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeChannel.id}
                      initial={{
                        opacity: 0,
                        x: shouldReduceMotion ? 0 : -6,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: shouldReduceMotion ? 0 : 6,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.2,
                        ease: easeCurve,
                      }}
                    >
                      <DiscordMessageSequence
                        messages={activeChannel.demoMessages}
                        channelId={activeChannel.id}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Primary Entry Point: Ticket System Callout in #help */}
                  {activeChannel.id === "help" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="mt-6 border border-[var(--border)] rounded-[12px] p-4 bg-[var(--surface-muted)]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-0.5">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[var(--cyan)] block">
                          NEED MORE HELP?
                        </span>
                        <p className="font-sans text-[12px] sm:text-[13px] text-[var(--foreground)]/80">
                          Open a private support ticket for an issue that needs focused assistance.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsTicketModeActive(true)}
                        className="font-mono text-[11px] uppercase font-bold tracking-wider px-3.5 py-2 rounded-[6px] border border-[var(--cyan)]/50 bg-[var(--cyan)]/15 hover:bg-[var(--cyan)]/25 text-[var(--foreground)] transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                        aria-label="Open a private support ticket simulation"
                      >
                        <span>+</span>
                        <span>OPEN TICKET</span>
                      </button>
                    </motion.div>
                  )}
                </>
              )}
            </div>

            {/* Channel Message Input Bar */}
            <div className="p-3.5 border-t border-[var(--border)] bg-[var(--surface-muted)]/40 flex items-center justify-between gap-2 font-mono text-[11px] text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2 truncate flex-1">
                <div className="w-6 h-6 rounded-[4px] border border-[var(--border)] bg-[var(--surface-card)] flex items-center justify-center font-bold text-[var(--foreground)] shrink-0">
                  +
                </div>
                <div className="truncate px-3 py-1.5 rounded bg-[var(--surface-card)] border border-[var(--border)] text-[var(--muted-foreground)] flex-1 min-w-[200px]">
                  {isTicketModeActive && activeChannel.id === "help"
                    ? "Message #ticket-0042"
                    : `Message #${activeChannel.name}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
