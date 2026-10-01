"use client";

import React, { useState } from "react";
import { TrackCatalogueView } from "./TrackCatalogueView";

interface ProjectCatalogueProps {
  initialTrack?: "beginner" | "intermediate" | "advanced";
}

export function ProjectCatalogue({ initialTrack = "beginner" }: ProjectCatalogueProps) {
  const [track] = useState<"beginner" | "intermediate" | "advanced">(initialTrack);
  return <TrackCatalogueView trackId={track} />;
}
