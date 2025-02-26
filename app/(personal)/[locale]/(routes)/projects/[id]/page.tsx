"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import ProjectPreview from "./ProjectPreview";
import ProjectDescription from "./ProjectDescription";
import TechnologiesUsed from "./TechnologiesUsed";
import ProjectLinks from "./ProjectLinks";
import { getProjects } from "@/lib/project";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { skills } from "@/data/technologies";
import { Project } from "../types";
import { Loader } from "@/components/ui/loader";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const t = useTranslations("ProjectPage");
  const locale = useLocale();
  const [project, setProject] = useState<Project | null>(null);
  const [previewType, setPreviewType] = useState<"image" | "live">("image");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fetch the projects and find the one by ID
  useEffect(() => {
    async function fetchProject() {
      try {
        const projects = await getProjects();
        const selectedProject = projects.find(
          (p: { id: string }) => p.id === params.id,
        );
        if (!selectedProject) {
          notFound();
        } else {
          setProject(selectedProject);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        notFound();
      }
    }

    fetchProject();
  }, [params.id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  const projectTechnologies = skills.filter((tech) =>
    project?.technologies.includes(tech.name),
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">
        {project?.name[locale as keyof typeof project.name]}
      </h1>

      <ProjectPreview
        previewType={previewType}
        setPreviewType={setPreviewType}
        projectImageUrl={project?.imageUrl || ""}
        livePreviewUrl={project?.livePreviewUrl}
        projectName={project?.name[locale as keyof typeof project.name] || ""}
        isMobile={isMobile}
        t={t}
      />

      <ProjectDescription
        description={
          project?.longDescription[
            locale as keyof typeof project.longDescription
          ]
        }
        t={t}
      />

      <TechnologiesUsed projectTechnologies={projectTechnologies} />

      <ProjectLinks
        liveUrl={project?.liveUrl}
        githubUrl={project?.githubUrl}
        t={t}
      />
    </div>
  );
}
