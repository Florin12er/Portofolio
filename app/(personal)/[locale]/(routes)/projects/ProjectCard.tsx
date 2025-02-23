import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tag } from "./Tag";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  locale: string;
  selectedTag: string | null;
  handleTagClick: (tag: string) => void;
}

export function ProjectCard({
  project,
  locale,
  selectedTag,
  handleTagClick,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="relative w-full h-48 mb-4">
          <Link href={`/${locale}/projects/${project.id}`}>
            <Image
              src={project.imageUrl}
              alt={project.name[locale as keyof typeof project.name]}
              className="rounded-t-lg"
              quality={100}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
        <CardTitle className="text-xl font-bold">
          {project.name[locale as keyof typeof project.name]}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {project.description[locale as keyof typeof project.description]}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Tag
              key={index}
              tag={tag}
              selectedTag={selectedTag}
              onClick={handleTagClick}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/${locale}/projects/${project.id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
        <div className="flex space-x-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub"
          >
            <Button variant="ghost" size="icon">
              <FaGithub className="h-5 w-5" />
            </Button>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Live"
          >
            <Button variant="ghost" size="icon">
              <FaExternalLinkAlt className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
