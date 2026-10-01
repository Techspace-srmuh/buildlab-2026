"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Arrow } from "@/components/Arrow";
import { TRACKS, Track } from "@/data/tracks";

// Minimal SVG scientific graphics designed specifically for each track
function TrackScientificGraphic({
  id,
  accentHex,
  isHovered,
}: {
  id: string;
  accentHex: string;
  isHovered: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (id === "beginner") {
    // Beginner: Simple molecule / orbital particle arrangement (Blue / Cyan)
    return (
      <svg
        viewBox="0 0 120 120"
        className="w-20 h-20 sm:w-24 sm:h-24 select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          r="42"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        {/* Orbital line */}
        <ellipse
          cx="60"
          cy="60"
          rx="48"
          ry="20"
          stroke="var(--foreground)"
          strokeWidth="1.2"
          transform="rotate(-25 60 60)"
        />
        {/* Central Particle */}
        <circle cx="60" cy="60" r="9" fill={accentHex} stroke="var(--foreground)" strokeWidth="2" />
        <circle cx="60" cy="60" r="3" fill="var(--background)" />
        {/* Satellite Node 1 (Cyan) */}
        <circle
          cx={isHovered && !shouldReduceMotion ? "24" : "20"}
          cy={isHovered && !shouldReduceMotion ? "40" : "44"}
          r="6"
          fill="var(--cyan)"
          stroke="var(--foreground)"
          strokeWidth="1.5"
          className="transition-all duration-300"
        />
        {/* Satellite Node 2 */}
        <circle
          cx={isHovered && !shouldReduceMotion ? "98" : "100"}
          cy={isHovered && !shouldReduceMotion ? "74" : "76"}
          r="5"
          fill="var(--foreground)"
          className="transition-all duration-300"
        />
        {/* Sparkle */}
        <path
          d="M85 30 Q 85 36 79 36 Q 85 36 85 42 Q 85 36 91 36 Q 85 36 85 30 Z"
          fill="var(--foreground)"
        />
      </svg>
    );
  }

  if (id === "intermediate") {
    // Intermediate: Connected dual molecular lattice (Green)
    return (
      <svg
        viewBox="0 0 120 120"
        className="w-20 h-20 sm:w-24 sm:h-24 select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Dual Node Connection Backbone */}
        <line
          x1="38"
          y1="60"
          x2="82"
          y2="60"
          stroke="var(--foreground)"
          strokeWidth="2.5"
        />
        <line
          x1="38"
          y1="60"
          x2="24"
          y2="34"
          stroke="var(--foreground)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <line
          x1="82"
          y1="60"
          x2="96"
          y2="86"
          stroke="var(--foreground)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />

        {/* Outer Ring */}
        <circle cx="60" cy="60" r="44" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Primary Core Node A */}
        <circle
          cx="38"
          cy="60"
          r="10"
          fill={accentHex}
          stroke="var(--foreground)"
          strokeWidth="2"
        />
        <circle cx="38" cy="60" r="3" fill="var(--background)" />

        {/* Primary Core Node B */}
        <circle
          cx="82"
          cy="60"
          r="10"
          fill={accentHex}
          stroke="var(--foreground)"
          strokeWidth="2"
        />
        <circle cx="82" cy="60" r="3" fill="var(--background)" />

        {/* Secondary Satellite Nodes */}
        <circle cx="24" cy="34" r="5" fill="var(--foreground)" />
        <circle cx="96" cy="86" r="5" fill="var(--foreground)" />
      </svg>
    );
  }

  // Advanced: Geometric Isometric Cube / Polyhedron Structure (Yellow)
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-20 h-20 sm:w-24 sm:h-24 select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer Alignment Grid */}
      <circle cx="60" cy="60" r="45" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Isometric Cube */}
      <g
        transform={`translate(60, 60) ${
          isHovered && !shouldReduceMotion ? "scale(1.05)" : "scale(1)"
        }`}
        className="transition-transform duration-300"
      >
        {/* Top Face */}
        <polygon
          points="0,-32 28,-16 0,0 -28,-16"
          fill="var(--yellow-soft)"
          stroke="var(--foreground)"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        {/* Left Face */}
        <polygon
          points="-28,-16 0,0 0,32 -28,16"
          fill="var(--background)"
          stroke="var(--foreground)"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        {/* Right Face */}
        <polygon
          points="0,0 28,-16 28,16 0,32"
          fill={accentHex}
          stroke="var(--foreground)"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />

        {/* Center Vertex Dot */}
        <circle cx="0" cy="0" r="3" fill="var(--foreground)" />
      </g>
    </svg>
  );
}

function TrackCard({ track }: { track: Track }) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      className="group relative flex flex-col justify-between border border-[var(--border)] rounded-[16px] md:rounded-[20px] bg-[var(--surface-card)] p-6 sm:p-8 lg:p-8 min-h-[380px] sm:min-h-[420px] transition-all duration-300 hover:border-[var(--foreground)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.12)] dark:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]"
    >
      {/* Top Card Bar: Track Number & Technical Tag */}
      <div>
        <div className="flex items-start justify-between border-b border-[var(--border)] pb-4 mb-6">
          <div className="flex items-baseline gap-2">
            <span
              className="font-display font-black text-3xl sm:text-4xl text-[var(--foreground)] tracking-tight transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              {track.number}
            </span>
            <span className="font-mono text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest">
              / TRACK
            </span>
          </div>

          <span
            className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-[4px] border"
            style={{
              backgroundColor: isHovered ? track.softHex : "transparent",
              color: isHovered ? "var(--foreground)" : "var(--muted-foreground)",
              borderColor: isHovered ? track.accentHex : "var(--border)",
            }}
          >
            {track.symbol}
          </span>
        </div>

        {/* Track Title and Team Format (Primary Hierarchy) */}
        <div className="space-y-2">
          <h3 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl uppercase tracking-[-0.02em] text-[var(--foreground)] leading-[0.9]">
            {track.name}
          </h3>

          <div className="pt-2 flex items-center gap-2">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: track.accentHex }}
            />
            <span className="font-mono font-bold text-base sm:text-lg uppercase tracking-wider text-[var(--foreground)]">
              {track.format}
            </span>
            {track.teamSize && (
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                · {track.teamSize}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Center Scientific Graphic */}
      <div className="py-6 flex items-center justify-center my-auto">
        <TrackScientificGraphic
          id={track.id}
          accentHex={track.accentHex}
          isHovered={isHovered}
        />
      </div>

      {/* Bottom Card Bar: Expanding Accent Line & Directional Arrow */}
      <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--muted-foreground)] font-medium">
          <span>SELECT TRACK</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Subtle Dynamic Accent Line */}
          <div
            className="h-[2px] transition-all duration-300 rounded-full"
            style={{
              width: isHovered && !shouldReduceMotion ? "36px" : "16px",
              backgroundColor: track.accentHex,
            }}
          />

          <span
            className="transition-transform duration-200 group-hover:translate-x-1.5 text-[var(--foreground)]"
          >
            <Arrow direction="right" className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function Tracks() {
  const shouldReduceMotion = useReducedMotion();

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  return (
    <Section id="tracks" className="bg-[var(--background)]">
      <Container>
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--foreground)] inline-block" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--foreground)]">
              02 / TRACKS
            </span>
          </div>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
            PROGRAM FORMATS
          </span>
        </div>

        {/* Section Title & Supporting Editorial Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] uppercase tracking-[-0.03em] leading-[0.9] text-[var(--foreground)]">
              CHOOSE
              <br />
              <span className="spectrum-gradient-text">YOUR TRACK.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-4 lg:pt-0 lg:pl-8">
            <p className="font-mono text-[14px] sm:text-[15px] uppercase tracking-wider text-[var(--foreground)] leading-relaxed font-medium">
              Three formats. Three levels of project scope. Choose the format that matches your
              experience and team size.
            </p>
          </div>
        </div>

        {/* Three Large Editorial Track Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {TRACKS.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: easeCurve,
              }}
            >
              <TrackCard track={track} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
