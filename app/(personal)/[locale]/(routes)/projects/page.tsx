"use client";
import React, { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { SearchParamsHandler } from "./SearchParamsHandler";
import { SearchInput } from "./SearchInput";
import { ProjectCard } from "./ProjectCard";
import { projectsData, Project } from "@/data/projects";
import { useLocale } from "next-intl";
type Locale = "en" | "de";

type TagKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "javascript"
  | "html"
  | "nodejs"
  | "css"
  | "mongodb";

type TranslationsType = {
  [key in Locale]: {
    [tag in TagKey]: string;
  };
};

const tagTranslations: TranslationsType = {
  en: {
    react: "React",
    nextjs: "Next.js",
    typescript: "TypeScript",
    tailwind: "Tailwind CSS",
    javascript: "Javascript",
    html: "HTML",
    nodejs: "NodeJS",
    css: "CSS",
    mongodb: "MongoDB",
  },
  de: {
    react: "React",
    nextjs: "Next.js",
    typescript: "TypeScript",
    tailwind: "Tailwind CSS",
    javascript: "Javascript",
    html: "HTML",
    nodejs: "NodeJS",
    css: "CSS",
    mongodb: "MongoDB",
  },
};

const tagKeys: TagKey[] = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
  "javascript",
  "html",
  "nodejs",
  "css",
  "mongodb",
];

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const locale = useLocale() as Locale;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const router = useRouter();

  const tags = tagKeys.map((key) => tagTranslations[locale][key]);

  const filteredProjects = projectsData.filter(
    (project: Project) =>
      (project.name[locale as keyof typeof project.name]
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        project.description[locale as keyof typeof project.description]
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )) &&
      (!selectedTag || project.tags.includes(selectedTag))
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    router.push(
      `/${locale}/projects?search=${encodeURIComponent(newSearchTerm)}`,
      {
        scroll: false,
      }
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
      }
    );
  };
  const clearSearch = () => {
    router.push(`/${locale}/projects`, {
      scroll: false,
    });
    setSelectedTag(null);
    setSearchTerm("");
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

      <SearchInput
        value={searchTerm}
        onClear={clearSearch}
        onChange={handleSearchChange}
        placeholder={t("searchPlaceholder")}
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full border-2 hover:bg-blue-400 hover:text-white ${
              selectedTag === tag
                ? "bg-blue-500 text-white dark:bg-blue-400 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-500"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

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
              className="border-2 border-transparent"
              whileHover={{
                scale: 1.05,
                border: "2px solid #3674B5",
                borderRadius: "10px",
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                project={project}
                locale={locale}
                selectedTag={selectedTag}
                handleTagClick={handleTagClick}
              />
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
