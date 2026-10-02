import React from "react";
import Image from "next/image";
import { Arrow } from "@/components/Arrow";
import { Mentor } from "@/data/mentors";

interface MentorCardProps {
  mentor: Mentor;
  index: number;
}

export function MentorCard({ mentor, index }: MentorCardProps) {
  const indexFormatted = String(index + 1).padStart(2, "0");

  const trackColor = {
    Beginner: "var(--blue)",
    Intermediate: "var(--green)",
    Advanced: "var(--yellow)",
    "Cross-Track": "var(--muted-foreground)",
  }[mentor.track || "Cross-Track"];

  const initials = mentor.name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "BL";

  const isFeatured = Boolean(mentor.featured);

  return (
    <article
      tabIndex={0}
      className={`group relative flex ${
        isFeatured ? "flex-col lg:flex-row" : "flex-col"
      } justify-between border border-[var(--border)] rounded-[8px] bg-[var(--surface-card)] overflow-hidden transition-all duration-300 hover:border-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] h-full`}
    >
      {/* Mentor Portrait Area */}
      <div
        className={`relative ${
          isFeatured
            ? "aspect-[4/5] lg:aspect-auto lg:w-1/2 w-full lg:border-r lg:border-b-0"
            : "aspect-[4/5] w-full"
        } bg-[var(--surface-muted)] overflow-hidden border-b border-[var(--border)]`}
      >
        {mentor.image ? (
          <Image
            src={mentor.image}
            alt={`${mentor.name} — BuildLab mentor`}
            fill
            sizes={
              isFeatured
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          /* Editorial Fallback Portrait Canvas */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 select-none bg-[var(--surface-muted)]/50 relative overflow-hidden min-h-[260px]">
            {/* Subtle editorial index watermark */}
            <span
              className="absolute top-4 left-4 font-mono text-[11px] font-bold tracking-widest text-[var(--muted-foreground)] uppercase"
              aria-hidden="true"
            >
              [{indexFormatted}]
            </span>

            {isFeatured && (
              <span className="absolute top-4 right-4 font-mono text-[10px] font-bold tracking-widest text-[var(--foreground)] bg-[var(--foreground)]/10 px-2 py-0.5 rounded-[4px] uppercase">
                FEATURED
              </span>
            )}

            <div className="w-24 h-24 rounded-[6px] border border-[var(--border)] bg-[var(--background)] flex items-center justify-center font-display font-black text-3xl md:text-4xl text-[var(--foreground)] mb-3 shadow-none">
              {initials}
            </div>

            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
              PORTRAIT VERIFIED
            </span>
          </div>
        )}
      </div>

      {/* Compact Mentor Information Underneath */}
      <div
        className={`p-5 md:p-6 flex flex-col flex-1 justify-between gap-4 ${
          isFeatured ? "lg:w-1/2 lg:p-8" : ""
        }`}
      >
        <div>
          {/* Track & Role Accent */}
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">
            {mentor.track && (
              <span
                className="w-2 h-2 rounded-full inline-block shrink-0"
                style={{ backgroundColor: trackColor }}
                aria-hidden="true"
              />
            )}
            <span>
              {mentor.role || "MENTOR"}
              {mentor.track ? ` · ${mentor.track}` : ""}
            </span>
          </div>

          {/* Person Name */}
          <h3
            className={`font-display font-black ${
              isFeatured
                ? "text-3xl sm:text-4xl md:text-4xl lg:text-5xl"
                : "text-2xl md:text-3xl"
            } uppercase tracking-[-0.02em] text-[var(--foreground)] leading-[1.02] transition-transform duration-200 group-hover:translate-x-1`}
          >
            {mentor.name}
          </h3>

          {/* Short Bio / Description */}
          {mentor.bio && (
            <p
              className={`font-sans text-[13px] md:text-[14px] text-[var(--foreground)]/80 leading-relaxed mt-2.5 ${
                isFeatured ? "line-clamp-5 text-[15px]" : "line-clamp-3"
              }`}
            >
              {mentor.bio}
            </p>
          )}
        </div>

        {/* Understated Social Links */}
        {(mentor.linkedin || mentor.github) && (
          <div className="pt-3 border-t border-[var(--border)] flex items-center gap-5 font-mono text-[11px] tracking-wider uppercase font-bold">
            {mentor.linkedin && (
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${mentor.name}'s LinkedIn profile`}
                className="group/link inline-flex items-center gap-1 text-[var(--foreground)] hover:text-[var(--blue)] transition-colors underline-offset-4 hover:underline"
              >
                <span>LINKEDIN</span>
                <Arrow
                  direction="up-right"
                  className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </a>
            )}

            {mentor.github && (
              <a
                href={mentor.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${mentor.name}'s GitHub profile`}
                className="group/link inline-flex items-center gap-1 text-[var(--foreground)] hover:text-[var(--blue)] transition-colors underline-offset-4 hover:underline"
              >
                <span>GITHUB</span>
                <Arrow
                  direction="up-right"
                  className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
