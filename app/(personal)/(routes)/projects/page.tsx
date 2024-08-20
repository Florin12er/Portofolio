"use client";
// pages/projects.tsx
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Mock data for projects (replace with actual data from your GitHub)
const projectsData = [
  {
    id: 1,
    name: "NextJS Portfolio",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/nextjs-portfolio",
    liveUrl: "https://your-portfolio.com",
  },
  {
    id: 2,
    name: "React Task Manager",
    description: "A task management application with React and Redux.",
    tags: ["React", "Redux", "JavaScript"],
    githubUrl: "https://github.com/yourusername/react-task-manager",
    liveUrl: "https://your-task-manager.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the search query from the URL when the component mounts or the URL changes
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    // Update the URL with the new search term
    const params = new URLSearchParams(searchParams);
    params.set("search", newSearchTerm);
    router.push(`/projects?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      {/* Search Input */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search projects by name, description, or technology..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="max-w-md mx-auto"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(tag);
                      const params = new URLSearchParams(searchParams);
                      params.set("search", tag);
                      router.push(`/projects?${params.toString()}`);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/projects/${project.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
              <div className="flex space-x-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <FaGithub className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <FaExternalLinkAlt className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No projects found matching your search.
        </p>
      )}
    </div>
  );
}
