"use client";

import React, { useState, Suspense } from "react";
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
import { projectsData } from "@/data/projects";

interface SearchParamsHandlerProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchParamsHandler({ setSearchTerm }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams, setSearchTerm]);

  return null;
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

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
    router.push(`/projects?search=${encodeURIComponent(newSearchTerm)}`, {
      scroll: false,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler setSearchTerm={setSearchTerm} />
      </Suspense>

      {/* Search Input */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search projects..."
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
                      router.push(
                        `/projects?search=${encodeURIComponent(tag)}`,
                        { scroll: false },
                      );
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
