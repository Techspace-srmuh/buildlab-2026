"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TICKET_DEMO_DATA, TicketStatus, DemoMessage } from "@/data/discord";
import { DiscordMessage } from "./DiscordMessage";

interface DiscordTicketDemoProps {
  onBackToChat: () => void;
  className?: string;
}

const CREATION_STEPS = [
  "OPENING SUPPORT REQUEST",
  "PROVISIONING PRIVATE THREAD",
  "ASSIGNING ON-CALL MENTOR",
];

export function DiscordTicketDemo({
  onBackToChat,
  className = "",
}: DiscordTicketDemoProps) {
  const shouldReduceMotion = useReducedMotion();
  const [ticketStage, setTicketStage] = useState<"creating" | "active">(() =>
    shouldReduceMotion ? "active" : "creating"
  );
  const [creationStep, setCreationStep] = useState<number>(0);
  const [visibleMessageCount, setVisibleMessageCount] = useState<number>(() =>
    shouldReduceMotion ? TICKET_DEMO_DATA.messages.length : 1
  );
  const [currentStatus, setCurrentStatus] = useState<TicketStatus>(() =>
    shouldReduceMotion ? "RESOLVED" : "OPEN"
  );

  // Stage 1: Ticket creation transition (approx 1.8 seconds total, skipped if reduced motion)
  useEffect(() => {
    if (shouldReduceMotion || ticketStage === "active") return;

    const stepInterval = setInterval(() => {
      setCreationStep((prev) => {
        if (prev < CREATION_STEPS.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        setTimeout(() => {
          setTicketStage("active");
        }, 500);
        return prev;
      });
    }, 450);

    return () => clearInterval(stepInterval);
  }, [shouldReduceMotion, ticketStage]);

  // Stage 2: Sequential message progression and status transitions
  useEffect(() => {
    if (ticketStage !== "active" || shouldReduceMotion) return;

    let timer: NodeJS.Timeout;
    let count = 1;

    const advance = () => {
      if (count < TICKET_DEMO_DATA.messages.length) {
        count += 1;
        setVisibleMessageCount(count);

        // Update status based on message sequence
        if (count >= 6) {
          setCurrentStatus("RESOLVED");
        } else if (count >= 3) {
          setCurrentStatus("IN PROGRESS");
        } else {
          setCurrentStatus("OPEN");
        }

        if (count < TICKET_DEMO_DATA.messages.length) {
          timer = setTimeout(advance, 1400);
        }
      }
    };

    timer = setTimeout(advance, 1200);

    return () => clearTimeout(timer);
  }, [ticketStage, shouldReduceMotion]);

  // Restart replay
  const handleReplay = () => {
    setCreationStep(0);
    setVisibleMessageCount(1);
    setCurrentStatus("OPEN");
    setTicketStage("creating");
  };

  // Convert ticket messages to DemoMessage format for DiscordMessage component
  const formatTicketMessage = (msg: (typeof TICKET_DEMO_DATA.messages)[0]): DemoMessage => ({
    id: msg.id,
    sender: msg.sender,
    role: msg.role,
    align: msg.align,
    avatarText: msg.avatarText,
    timestamp: msg.timestamp,
    content: msg.content,
  });

  const getStatusColor = (status: TicketStatus) => {
    switch (status) {
      case "OPEN":
        return "bg-[var(--cyan)]/15 border-[var(--cyan)] text-[var(--cyan)]";
      case "IN PROGRESS":
        return "bg-[var(--yellow)]/15 border-[var(--yellow)] text-[var(--yellow)]";
      case "RESOLVED":
        return "bg-[var(--green)]/15 border-[var(--green)] text-[var(--green)]";
      case "CLOSED":
        return "bg-[var(--surface-muted)] border-[var(--border)] text-[var(--muted-foreground)]";
    }
  };

  return (
    <div className={`space-y-5 ${className}`}>
      <AnimatePresence mode="wait">
        {ticketStage === "creating" ? (
          <motion.div
            key="creating"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="p-8 border border-[var(--border)] rounded-[14px] bg-[var(--surface-muted)]/50 text-center space-y-4"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--surface-card)] border border-[var(--cyan)]/40 text-[var(--cyan)] mx-auto flex items-center justify-center font-mono font-bold text-base animate-pulse">
              #
            </div>
            <div className="space-y-1">
              <h4 className="font-mono text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-[var(--foreground)]">
                CREATING SUPPORT TICKET
              </h4>
              <p className="font-mono text-[11px] text-[var(--cyan)]">
                {CREATION_STEPS[creationStep]}
              </p>
            </div>
            <div className="flex justify-center gap-1.5 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-ping" />
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-ping"
                style={{ animationDelay: "200ms" }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-ping"
                style={{ animationDelay: "400ms" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="active"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            {/* Ticket Header & Status Banner */}
            <div className="border border-[var(--border)] rounded-[14px] p-4 sm:p-5 bg-[var(--surface-muted)]/30 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-lg text-[var(--cyan)]">
                      {TICKET_DEMO_DATA.ticketNumber}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-card)] text-[var(--foreground)]">
                      PRIVATE SUPPORT
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--muted-foreground)]">
                      SIMULATED TICKET
                    </span>
                  </div>
                  <h4 className="font-mono text-[13px] sm:text-[14px] font-semibold text-[var(--foreground)] pt-1">
                    {TICKET_DEMO_DATA.issueTitle}
                  </h4>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] border flex items-center gap-1.5 ${getStatusColor(
                      currentStatus
                    )}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current" />
                    STATUS: {currentStatus}
                  </span>
                </div>
              </div>

              {/* Status Timeline Progression */}
              <div className="flex items-center justify-between gap-1 overflow-x-auto py-1 font-mono text-[10px]">
                {TICKET_DEMO_DATA.statuses.map((status, idx) => {
                  const isActive =
                    (status === "OPEN" && ["OPEN", "IN PROGRESS", "RESOLVED", "CLOSED"].includes(currentStatus)) ||
                    (status === "IN PROGRESS" && ["IN PROGRESS", "RESOLVED", "CLOSED"].includes(currentStatus)) ||
                    (status === "RESOLVED" && ["RESOLVED", "CLOSED"].includes(currentStatus)) ||
                    (status === "CLOSED" && currentStatus === "CLOSED");

                  const isCurrent = currentStatus === status;

                  return (
                    <div key={status} className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full transition-colors ${
                            isCurrent
                              ? "bg-[var(--cyan)] ring-2 ring-[var(--cyan)]/30"
                              : isActive
                              ? "bg-[var(--foreground)]"
                              : "bg-[var(--muted-foreground)]/30"
                          }`}
                        />
                        <span
                          className={`uppercase font-bold tracking-wider ${
                            isCurrent
                              ? "text-[var(--cyan)] font-extrabold"
                              : isActive
                              ? "text-[var(--foreground)]"
                              : "text-[var(--muted-foreground)]/50"
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                      {idx < TICKET_DEMO_DATA.statuses.length - 1 && (
                        <div
                          className={`w-6 sm:w-10 h-[1px] ${
                            isActive ? "bg-[var(--foreground)]/40" : "bg-[var(--border)]"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* HOW SUPPORT WORKS - Concise Explanation Grid */}
              <div className="pt-2 border-t border-[var(--border)]/70">
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] block mb-2">
                  HOW SUPPORT WORKS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
                  {TICKET_DEMO_DATA.steps.map((st) => (
                    <div
                      key={st.number}
                      className="p-2 rounded-[6px] bg-[var(--surface-card)] border border-[var(--border)]/80 space-y-0.5"
                    >
                      <div className="font-mono text-[9px] font-bold text-[var(--cyan)]">
                        {st.number} {"//"} {st.title}
                      </div>
                      <p className="font-sans text-[10px] text-[var(--muted-foreground)] leading-tight">
                        {st.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Private Conversation Stream */}
            <div className="space-y-4 pt-1">
              {TICKET_DEMO_DATA.messages
                .slice(0, visibleMessageCount)
                .map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{
                      opacity: 0,
                      x: shouldReduceMotion ? 0 : msg.align === "right" ? 12 : -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <DiscordMessage message={formatTicketMessage(msg)} />
                  </motion.div>
                ))}
            </div>

            {/* Bottom Controls: Replay & Return to Help Chat */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border)]">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReplay}
                  className="font-mono text-[11px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-card)] hover:bg-[var(--surface-muted)] text-[var(--foreground)] transition-colors flex items-center gap-1.5 cursor-pointer"
                  aria-label="Replay ticket simulation"
                >
                  <span>↻</span>
                  <span>REPLAY TICKET</span>
                </button>
                {currentStatus === "RESOLVED" && (
                  <span className="font-mono text-[10px] uppercase font-bold text-[var(--green)]">
                    ✓ TICKET RESOLVED
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onBackToChat}
                className="font-mono text-[11px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-muted)] hover:bg-[var(--surface-card)] text-[var(--foreground)] transition-colors flex items-center gap-1.5 cursor-pointer"
                aria-label="Return to public #help channel conversation"
              >
                <span>←</span>
                <span>BACK TO #HELP CHAT</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
