"use client";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import ProjectPreview from "./ProjectPreview";
import ProjectDescription from "./ProjectDescription";
import TechnologiesUsed from "./TechnologiesUsed";
import ProjectLinks from "./ProjectLinks";
import { projectsData } from "@/data/projects";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { skills } from "@/data/technologies"; // Import the skills data

export default function ProjectPage({ params }: { params: { id: string } }) {
  const t = useTranslations("ProjectPage");
  const locale = useLocale();
  const project = projectsData.find((p) => p.id === params.id);
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

  if (!project) {
    notFound();
  }

  // Map project technologies to the Skill objects
  const projectTechnologies = skills.filter((tech) =>
    project?.technologies.includes(tech.name)
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

      <TechnologiesUsed projectTechnologies={projectTechnologies} t={t} />

      <ProjectLinks
        liveUrl={project?.liveUrl}
        githubUrl={project?.githubUrl}
        t={t}
      />
    </div>
  );
}
