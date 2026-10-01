import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navigation } from "@/sections/Navigation";
import { Footer } from "@/sections/Footer";
import { Container } from "@/components/Container";
import { TrackCatalogueView } from "@/components/project/TrackCatalogueView";
import { TRACK_DETAILS } from "@/data/tracks";

interface ProjectTrackPageProps {
  params: Promise<{
    track: string;
  }>;
}

const VALID_TRACKS = ["beginner", "intermediate", "advanced"] as const;

export async function generateStaticParams() {
  return VALID_TRACKS.map((track) => ({
    track,
  }));
}

export async function generateMetadata({
  params,
}: ProjectTrackPageProps): Promise<Metadata> {
  const { track } = await params;
  if (!VALID_TRACKS.includes(track as (typeof VALID_TRACKS)[number])) {
    return {
      title: "Projects — TechSpace BuildLab ’26",
    };
  }

  const trackInfo = TRACK_DETAILS[track as (typeof VALID_TRACKS)[number]];

  return {
    title: `${trackInfo.name} Track Projects (${trackInfo.count}) — TechSpace BuildLab ’26`,
    description: `Explore ${trackInfo.count} curated engineering problem statements in the ${trackInfo.name} track for BuildLab ’26. ${trackInfo.description}`,
  };
}

export default async function ProjectTrackPage({
  params,
}: ProjectTrackPageProps) {
  const { track } = await params;

  if (!VALID_TRACKS.includes(track as (typeof VALID_TRACKS)[number])) {
    notFound();
  }

  const trackId = track as (typeof VALID_TRACKS)[number];

  return (
    <main className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)]">
      <Navigation />
      {/* Prominent Return to Home Bar */}
      <div className="border-b border-[var(--border)] bg-[var(--surface-muted)]/60 py-3">
        <Container>
          <div className="flex items-center justify-between font-mono text-[11px] sm:text-[12px]">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-[var(--foreground)] hover:underline underline-offset-4"
            >
              <span>←</span>
              <span>RETURN TO BUILDLAB ’26 HOMEPAGE</span>
            </Link>
            <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-[var(--muted-foreground)] font-medium">
              CATALOGUE // {trackId.toUpperCase()} TRACK
            </span>
          </div>
        </Container>
      </div>

      <div className="flex-1 py-8 sm:py-12">
        <Container>
          <TrackCatalogueView trackId={trackId} />
        </Container>
      </div>
      <Footer />
    </main>
  );
}
