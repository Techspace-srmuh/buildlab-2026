"use client";

import React from "react";

interface ScientificGraphicProps {
  variant?: "hero-composition" | "flask" | "atom" | "molecule" | "badge";
  className?: string;
}

export function ScientificGraphic({
  variant = "hero-composition",
  className = "",
}: ScientificGraphicProps) {
  if (variant === "hero-composition") {
    return (
      <div
        aria-hidden="true"
        className={`relative w-full max-w-[420px] lg:max-w-[460px] aspect-[4/4] select-none ${className}`}
      >
        {/* Subtle Background Coordinate Grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 border border-[#CFCFC4] rounded-[18px] overflow-hidden pointer-events-none opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border-r border-b border-[#CFCFC4]" />
          ))}
        </div>

        {/* Technical Coordinate Badges */}
        <div className="absolute top-3 left-4 font-mono text-[10px] text-[var(--gray)] tracking-widest uppercase">
          FIG 01.A — LAB SYNTHESIS
        </div>
        <div className="absolute top-3 right-4 font-mono text-[10px] text-[var(--ink)] font-semibold tracking-widest uppercase">
          SEC // 26.BL
        </div>
        <div className="absolute bottom-3 left-4 font-mono text-[10px] text-[var(--gray)] tracking-wider">
          COORDINATES: 28.98° N, 77.06° E
        </div>
        <div className="absolute bottom-3 right-4 font-mono text-[10px] text-[var(--gray)] tracking-wider">
          STATUS: ACTIVE
        </div>

        {/* Center SVG Composition */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full relative z-10 p-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle Outer Measurement Circle */}
          <circle
            cx="200"
            cy="200"
            r="165"
            stroke="#CFCFC4"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Calibrated Tick Marks on Circle */}
          <line x1="200" y1="30" x2="200" y2="40" stroke="#080808" strokeWidth="1.5" />
          <line x1="200" y1="360" x2="200" y2="370" stroke="#080808" strokeWidth="1.5" />
          <line x1="30" y1="200" x2="40" y2="200" stroke="#080808" strokeWidth="1.5" />
          <line x1="360" y1="200" x2="370" y2="200" stroke="#080808" strokeWidth="1.5" />

          {/* Dotted Matrix Accent in Upper Right */}
          <g opacity="0.6">
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3].map((col) => (
                <circle
                  key={`dot-${row}-${col}`}
                  cx={270 + col * 12}
                  cy={90 + row * 12}
                  r="1.5"
                  fill="#080808"
                />
              ))
            )}
          </g>

          {/* Atomic Orbital Ring Ellipses */}
          <g className="origin-center">
            {/* Ellipse 1 */}
            <ellipse
              cx="200"
              cy="200"
              rx="135"
              ry="50"
              stroke="#080808"
              strokeWidth="1.5"
              transform="rotate(-28 200 200)"
            />
            {/* Ellipse 2 */}
            <ellipse
              cx="200"
              cy="200"
              rx="135"
              ry="50"
              stroke="#080808"
              strokeWidth="1.5"
              transform="rotate(32 200 200)"
            />
          </g>

          {/* Solid Geometric Laboratory Flask */}
          <g id="laboratory-flask" transform="translate(0, 10)">
            {/* Flask Lip & Neck */}
            <rect
              x="185"
              y="95"
              width="30"
              height="6"
              rx="2"
              fill="#080808"
            />
            {/* Flask Outer Contour */}
            <path
              d="M189 101 V 160 L 125 265 C 118 276 126 290 140 290 H 260 C 274 290 282 276 275 265 L 211 160 V 101 H 189 Z"
              fill="#F4F4E8"
              stroke="#080808"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* Liquid Fill Inside Flask with Spectrum Accent */}
            <path
              d="M142 245 L 132 262 C 127 271 133 282 144 282 H 256 C 267 282 273 271 268 262 L 258 245 Z"
              fill="url(#spectrumLiquid)"
            />

            {/* Liquid Surface Line */}
            <line
              x1="140"
              y1="245"
              x2="260"
              y2="245"
              stroke="#080808"
              strokeWidth="2"
              strokeDasharray="6 3"
            />

            {/* Measurement Graduations / Ticks on Flask */}
            <line x1="168" y1="230" x2="182" y2="230" stroke="#080808" strokeWidth="1.5" />
            <line x1="162" y1="210" x2="178" y2="210" stroke="#080808" strokeWidth="1.5" />
            <line x1="156" y1="190" x2="174" y2="190" stroke="#080808" strokeWidth="1.5" />
            <line x1="150" y1="170" x2="170" y2="170" stroke="#080808" strokeWidth="1.5" />

            {/* Bubbles / Reaction Spheres inside Flask */}
            <circle cx="180" cy="265" r="5" fill="#080808" />
            <circle cx="215" cy="258" r="7" fill="#F4F4E8" stroke="#080808" strokeWidth="2" />
            <circle cx="228" cy="272" r="3.5" fill="#080808" />
            <circle cx="195" cy="225" r="4" fill="#1457D9" />
            <circle cx="205" cy="180" r="3" fill="#18B8D4" />
          </g>

          {/* Spectrum Orbital Electron Nodes */}
          {/* Node 1: Blue (#1457D9) */}
          <circle cx="82" cy="136" r="9" fill="#1457D9" stroke="#080808" strokeWidth="2" />
          <circle cx="82" cy="136" r="3" fill="#F4F4E8" />

          {/* Node 2: Cyan (#18B8D4) */}
          <circle cx="318" cy="142" r="9" fill="#18B8D4" stroke="#080808" strokeWidth="2" />
          <circle cx="318" cy="142" r="3" fill="#F4F4E8" />

          {/* Node 3: Green (#62C94A) */}
          <circle cx="95" cy="275" r="8" fill="#62C94A" stroke="#080808" strokeWidth="2" />
          <circle cx="95" cy="275" r="2.5" fill="#F4F4E8" />

          {/* Node 4: Yellow (#F3D21A) */}
          <circle cx="305" cy="268" r="10" fill="#F3D21A" stroke="#080808" strokeWidth="2" />
          <circle cx="305" cy="268" r="3" fill="#080808" />

          {/* Geometric 4-Point Stars (Precision Laboratory Sparkles) */}
          {/* Top Star */}
          <path
            d="M125 90 Q 125 102 113 102 Q 125 102 125 114 Q 125 102 137 102 Q 125 102 125 90 Z"
            fill="#080808"
          />
          {/* Right Mid Star */}
          <path
            d="M335 200 Q 335 210 325 210 Q 335 210 335 220 Q 335 210 345 210 Q 335 210 335 200 Z"
            fill="#080808"
          />
          {/* Small Star near bottom */}
          <path
            d="M170 330 Q 170 336 164 336 Q 170 336 170 342 Q 170 336 176 336 Q 170 336 170 330 Z"
            fill="#080808"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="spectrumLiquid" x1="130" y1="245" x2="270" y2="282" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1457D9" />
              <stop offset="38%" stopColor="#18B8D4" />
              <stop offset="70%" stopColor="#62C94A" />
              <stop offset="100%" stopColor="#F3D21A" />
            </linearGradient>
          </defs>
        </svg>

        {/* Small floating technical pill label */}
        <div className="absolute -bottom-3 right-6 bg-[var(--paper)] border border-[var(--ink)] px-2.5 py-1 rounded-[6px] shadow-[2px_2px_0px_0px_rgba(8,8,8,0.15)] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#62C94A] inline-block animate-pulse" />
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--ink)]">
            BL-EXP // 2026
          </span>
        </div>
      </div>
    );
  }

  // Fallback / simple flask icon
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </svg>
  );
}
