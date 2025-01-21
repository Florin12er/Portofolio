"use client";

import React, { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { projectsData, Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

type Locale = "en" | "de";

interface SearchParamsHandlerProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchParamsHandler({ setSearchTerm }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams, setSearchTerm]);

  return null;
}

export default function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale() as Locale;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const router = useRouter();

  const filteredProjects = projectsData.filter(
    (project: Project) =>
      (project.name[locale].toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description[locale]
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        )) &&
      (!selectedTag || project.tags.includes(selectedTag)),
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    router.push(
      `/${locale}/projects?search=${encodeURIComponent(newSearchTerm)}`,
      {
        scroll: false,
      },
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
    setSearchTerm("");
    router.push(
      `/${locale}/projects${
        tag === selectedTag ? "" : `?search=${encodeURIComponent(tag)}`
      }`,
      {
        scroll: false,
      },
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        {t("pageTitle")}
      </motion.h1>

      <Suspense fallback={<div>{t("loading")}</div>}>
        <SearchParamsHandler setSearchTerm={setSearchTerm} />
      </Suspense>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 relative max-w-md mx-auto"
      >
        <Input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </motion.div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project: Project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Link href={`/${locale}/projects/${project.id}`}>
                      <Image
                        src={project.imageUrl}
                        alt={project.name[locale]}
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
                    {project.name[locale]}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {project.description[locale]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs font-medium px-2.5 py-0.5 rounded cursor-pointer transition-colors duration-200 ${
                          tag === selectedTag
                            ? "bg-primary text-primary-foreground"
                            : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/${locale}/projects/${project.id}`}>
                    <Button variant="outline">{t("viewDetails")}</Button>
                  </Link>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("viewGitHub")}
                    >
                      <Button variant="ghost" size="icon">
                        <FaGithub className="h-5 w-5" />
                      </Button>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("viewLive")}
                    >
                      <Button variant="ghost" size="icon">
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-500 mt-8"
        >
          {t("noProjectsFound")}
        </motion.p>
      )}
    </div>
  );
}
