// app/project/[id]/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { skills } from "@/data/technologies";
import { projectsData } from "@/data/projects";
// Mock data (replace with actual data fetching logic)
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  const [previewType, setPreviewType] = useState<"image" | "live">("image");

  if (!project) {
    notFound();
  }

  const projectTechnologies = skills.filter((tech) =>
    project.technologies.includes(tech.name),
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>

      {/* Project Image */}
      <div className="flex items-center space-x-2 mb-4">
        <Switch
          checked={previewType === "live"}
          onCheckedChange={(checked) =>
            setPreviewType(checked ? "live" : "image")
          }
        />
        <span>{previewType === "live" ? "Live Preview" : "Image Preview"}</span>
      </div>

      {/* Project Preview */}
      <div className="mb-8 relative h-[700px] overflow-hidden rounded-lg shadow-lg">
        {previewType === "image" ? (
          <Image
            src={project.imageUrl}
            alt={`Screenshot of ${project.name}`}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <iframe
            src={project.livePreviewUrl}
            className="w-full h-full border-0"
            title={`Live preview of ${project.name}`}
          />
        )}
      </div>

      {/* Project Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {project.longDescription}
        </p>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {projectTechnologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                <Icon
                  className={`text-4xl mb-2 mx-auto ${tech.color} transition-all duration-300 ${tech.animation}`}
                />
                <span className="text-lg font-medium">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Links */}
      <section className="flex space-x-4">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FaExternalLinkAlt className="mr-2 h-4 w-4" />
              View Live Project
            </Button>
          </Link>
        )}
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <FaGithub className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </Link>
      </section>
    </div>
  );
}
