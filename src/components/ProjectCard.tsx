import React from "react";
import { Project } from "@/data/projects";
import { ProjectIndexItem } from "@/components/project/ProjectIndexItem";

export { ProjectIndexItem };

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <ProjectIndexItem
      project={project}
      onSelect={(p) => {
        onSelect?.(p);
      }}
    />
  );
}
