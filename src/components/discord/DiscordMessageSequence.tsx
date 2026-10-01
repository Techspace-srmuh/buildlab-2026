"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DemoMessage } from "@/data/discord";
import { DiscordMessage } from "./DiscordMessage";

interface DiscordMessageSequenceProps {
  messages: DemoMessage[];
  channelId: string;
  className?: string;
}

export function DiscordMessageSequence({
  messages,
  channelId,
  className = "",
}: DiscordMessageSequenceProps) {
  const shouldReduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const effectiveVisibleCount = shouldReduceMotion ? messages.length : visibleCount;

  // Stagger messages appearance sequentially
  useEffect(() => {
    if (shouldReduceMotion || messages.length <= 1) return;

    let timeoutId: NodeJS.Timeout;
    let typingTimeoutId: NodeJS.Timeout;
    let current = 1;

    const showNext = () => {
      if (current < messages.length) {
        const nextMsg = messages[current];
        // Show typing indicator only for bot/mentor responses, or alternating turns
        const shouldShowTyping = nextMsg.role === "mentor" || nextMsg.role === "bot";

        if (shouldShowTyping) {
          setIsTyping(true);
          typingTimeoutId = setTimeout(() => {
            setIsTyping(false);
            current += 1;
            setVisibleCount(current);
            if (current < messages.length) {
              timeoutId = setTimeout(showNext, 1200);
            }
          }, 650);
        } else {
          current += 1;
          setVisibleCount(current);
          if (current < messages.length) {
            timeoutId = setTimeout(showNext, 1100);
          }
        }
      }
    };

    timeoutId = setTimeout(showNext, 800);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(typingTimeoutId);
    };
  }, [channelId, messages, shouldReduceMotion]);

  // Next message being typed
  const nextMessage = messages[effectiveVisibleCount];
  const nextIsRight = nextMessage
    ? (nextMessage.align ? nextMessage.align === "right" : nextMessage.role === "participant")
    : false;

  return (
    <div className={`space-y-4 ${className}`}>
      {messages.slice(0, effectiveVisibleCount).map((msg) => {
        const isRight = msg.align ? msg.align === "right" : msg.role === "participant";
        const initialX = shouldReduceMotion ? 0 : isRight ? 12 : -12;

        return (
          <motion.div
            key={msg.id}
            initial={{
              opacity: 0,
              x: initialX,
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
            <DiscordMessage message={msg} />
          </motion.div>
        );
      })}

      {/* Realistic Typing Indicator in context */}
      {isTyping && !shouldReduceMotion && nextMessage && (
        <motion.div
          initial={{ opacity: 0, x: nextIsRight ? 8 : -8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`flex w-full ${nextIsRight ? "justify-end" : "justify-start"}`}
        >
          <div className="max-w-[85%] sm:max-w-[70%] space-y-1">
            <div
              className={`flex items-center gap-2 text-[11px] ${
                nextIsRight ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-[var(--muted-foreground)] uppercase">
                {nextMessage.sender} IS TYPING
              </span>
            </div>
            <div
              className={`p-3 rounded-2xl shadow-sm transition-colors duration-200 ${
                nextIsRight
                  ? "bg-[var(--discord-msg-participant-bg)] border border-[var(--discord-msg-participant-border)] border-r-[3px] border-r-[var(--discord-msg-participant-accent)] rounded-tr-sm"
                  : nextMessage.role === "mentor"
                  ? "bg-[var(--discord-msg-mentor-bg)] border border-[var(--discord-msg-mentor-border)] border-l-[3px] border-l-[var(--discord-msg-mentor-accent)] rounded-tl-sm"
                  : "bg-[var(--discord-msg-bot-bg)] border border-[var(--discord-msg-bot-border)] border-l-[3px] border-l-[var(--discord-msg-bot-accent)] rounded-tl-sm"
              }`}
            >
              <div className="flex items-center gap-1.5 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--discord-msg-text)] animate-pulse" />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--discord-msg-text)] animate-pulse"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--discord-msg-text)] animate-pulse"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
