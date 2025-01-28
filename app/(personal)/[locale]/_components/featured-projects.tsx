"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Locale = "en" | "de";

interface Project {
  id: string;
  name: { [key in Locale]: string };
  description: { [key in Locale]: string };
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("Projects");
  const locale = useLocale() as Locale;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 3 >= projects.length) ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 3 < 0) ? Math.max(projects.length - 3, 0) : prevIndex - 3
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="mt-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
        {t("featuredProjects")}
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <CardTitle className="text-xl font-bold">{project.name[locale]}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {project.description[locale]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
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
        </div>
        {projects.length > 3 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
            >
              <ChevronRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </button>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
