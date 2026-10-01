import React from "react";
import Image from "next/image";
import { Arrow } from "@/components/Arrow";
import { Label } from "@/components/Label";
import { Mentor } from "@/data/mentors";

interface MentorCardProps {
  mentor: Mentor;
  index: number;
}

export function MentorCard({ mentor, index }: MentorCardProps) {
  const indexFormatted = String(index + 1).padStart(2, "0");

  const trackBadgeVariant = {
    Beginner: "soft-blue" as const,
    Intermediate: "soft-green" as const,
    Advanced: "soft-yellow" as const,
    "Cross-Track": "solid" as const,
  }[mentor.track || "Cross-Track"];

  return (
    <div
      tabIndex={0}
      className="group relative flex flex-col justify-between border border-[#CFCFC4] rounded-[18px] bg-[var(--paper)] overflow-hidden transition-all duration-300 hover:border-[var(--ink)] hover:shadow-[4px_4px_0px_0px_rgba(8,8,8,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
    >
      {/* Mentor Portrait Area */}
      <div className="relative aspect-[4/4.5] w-full bg-[#EBEBE0] overflow-hidden border-b border-[#CFCFC4]">
        {mentor.image ? (
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center grayscale contrast-110 transition-transform duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
          />
        ) : (
          /* Geometric Fallback Portrait Silhouette */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-[var(--gray)] select-none">
            <div className="w-20 h-20 rounded-full border border-[#CFCFC4] bg-[var(--paper)] flex items-center justify-center font-display font-black text-2xl text-[var(--ink)] mb-3">
              {mentor.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase() || "BL"}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--gray)]">
              PORTRAIT VERIFIED
            </span>
          </div>
        )}

        {/* Floating Track Tag */}
        {mentor.track && (
          <div className="absolute top-3 right-3">
            <Label variant={trackBadgeVariant} size="sm">
              {mentor.track}
            </Label>
          </div>
        )}
      </div>

      {/* Mentor Details Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Index & Header */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#CFCFC4]/60">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--gray)] uppercase">
              MENTOR / {indexFormatted}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
          </div>

          {/* Name & Role */}
          <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[var(--ink)] leading-snug mb-1">
            {mentor.name}
          </h3>

          {mentor.role && (
            <p className="font-mono text-[11px] font-semibold text-[var(--gray)] uppercase tracking-wider mb-3">
              {mentor.role}
            </p>
          )}

          {/* Bio */}
          {mentor.bio && (
            <p className="text-[13px] text-[var(--ink)]/85 leading-relaxed font-sans line-clamp-3 mb-4">
              {mentor.bio}
            </p>
          )}
        </div>

        {/* Social Links Footer (Only render if URL exists!) */}
        {(mentor.linkedin || mentor.github) && (
          <div className="pt-4 mt-2 border-t border-[#CFCFC4] flex items-center gap-4 font-mono text-[11px] uppercase tracking-wider font-bold">
            {mentor.linkedin && (
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--ink)] hover:underline underline-offset-4"
              >
                <span>LINKEDIN</span>
                <Arrow direction="up-right" className="w-3 h-3" />
              </a>
            )}

            {mentor.github && (
              <a
                href={mentor.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--ink)] hover:underline underline-offset-4"
              >
                <span>GITHUB</span>
                <Arrow direction="up-right" className="w-3 h-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
