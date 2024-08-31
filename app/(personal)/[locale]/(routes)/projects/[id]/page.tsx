"use client";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { skills } from "@/data/technologies";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

type Locale = "en" | "de";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const t = useTranslations("ProjectPage");
  const locale = useLocale() as Locale;
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

  const projectTechnologies = skills.filter((tech) =>
    project.technologies.includes(tech.name),
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        {project.name[locale]}
      </motion.h1>

      {/* Project Preview Toggle */}
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Switch
          checked={previewType === "live"}
          onCheckedChange={(checked) =>
            setPreviewType(checked ? "live" : "image")
          }
        />
        <span className="text-sm font-medium">
          {previewType === "live" ? t("livePreview") : t("imagePreview")}
        </span>
      </div>

      {/* Project Preview */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative overflow-hidden shadow-lg mx-auto"
        style={{
          height: isMobile ? "400px" : "800px",
          maxWidth: "1200px",
        }}
      >
        {previewType === "image" && !isMobile ? (
          <Image
            src={project.imageUrl}
            alt={t("projectScreenshot", { projectName: project.name[locale] })}
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
          />
        ) : project.livePreviewUrl ? (
          <iframe
            src={project.livePreviewUrl}
            className="w-full h-full border-0"
            title={t("livePreviewTitle", { projectName: project.name[locale] })}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
              <FaLock className="mx-auto text-4xl mb-4 text-gray-400" />
              <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                {t("livePreviewNotAvailable")}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {t("livePreviewNotAvailableDescription")}
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Project Description */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-semibold mb-4">
          {t("projectDescription")}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.longDescription[locale]}
        </p>
      </motion.section>

      {/* Technologies Used */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-6">{t("technologiesUsed")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {projectTechnologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
              >
                <Icon
                  className={`text-4xl mb-2 mx-auto ${tech.color} transition-all duration-300 ${tech.animation}`}
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Project Links */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
      >
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:w-auto">
              <FaExternalLinkAlt className="mr-2 h-4 w-4" />
              {t("viewLiveProject")}
            </Button>
          </Link>
        )}
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full sm:w-auto">
            <FaGithub className="mr-2 h-5 w-5" />
            {t("viewOnGitHub")}
          </Button>
        </Link>
      </motion.section>
    </motion.div>
  );
}
