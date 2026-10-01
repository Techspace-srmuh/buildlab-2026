"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BUILDLAB_WORKFLOW_STEPS,
  WorkflowStepId,
} from "@/data/discord";

interface BuildLabWorkflowProps {
  activeStepId: WorkflowStepId;
  onSelectStep: (stepId: WorkflowStepId) => void;
  className?: string;
}

export function BuildLabWorkflow({
  activeStepId,
  onSelectStep,
  className = "",
}: BuildLabWorkflowProps) {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  return (
    <div className={`space-y-3.5 ${className}`}>
      {/* Workflow Section Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[var(--foreground)]" />
          <span className="font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)]">
            HOW BUILDLAB OPERATES // WORKFLOW JOURNEY
          </span>
        </div>
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[var(--muted-foreground)]">
          CLICK ANY STEP TO NAVIGATE CHANNELS
        </span>
      </div>

      {/* Editorial Horizontal / Scrollable Process Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {BUILDLAB_WORKFLOW_STEPS.map((step) => {
          const isActive = step.id === activeStepId;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelectStep(step.id)}
              aria-current={isActive ? "step" : undefined}
              className={`relative text-left p-3 rounded-[8px] border transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] ${
                isActive
                  ? "bg-[var(--foreground)] text-[color:var(--background)] border-[var(--foreground)] shadow-[2px_2px_0px_0px_rgba(8,8,8,0.2)]"
                  : "bg-[var(--surface-card)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--foreground)]/60"
              }`}
              style={isActive ? { color: "var(--background)" } : undefined}
            >
              {/* Step Number & Live Indicator */}
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-current/20">
                <span className="font-mono text-[11px] font-bold tracking-widest opacity-80">
                  {step.number}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeWorkflowDot"
                    className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)]"
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.2,
                      ease: easeCurve,
                    }}
                  />
                )}
              </div>

              {/* Step Title */}
              <div className="font-display font-black text-[13px] sm:text-[14px] uppercase tracking-tight leading-tight mb-1">
                {step.title}
              </div>

              {/* Step Subtitle */}
              <div className="font-sans text-[11px] opacity-75 line-clamp-2 leading-snug">
                {step.subtitle}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
