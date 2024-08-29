// app/[locale]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { skills } from "@/data/technologies";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {t("welcome")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t("subtitle")}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold flex items-center justify-center hover:bg-blue-700 transition duration-300"
            >
              {t("getInTouch")} <FaArrowRight className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {t("aboutMe")}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/3"
          >
            <Image
              src="/images/profile.jpg"
              alt={t("profileAlt")}
              width={300}
              height={300}
              className="rounded-full shadow-lg hover:shadow-xl transition duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-2/3"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("aboutDescription")}
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{t("skillsFrontend")}</li>
              <li>{t("skillsBackend")}</li>
              <li>{t("skillsDatabases")}</li>
              <li>{t("skillsDevOps")}</li>
            </ul>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              {t("collaborationInvitation")}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {t("skills")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/projects?search=${encodeURIComponent(skill.name)}`}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col items-center justify-center h-full"
                >
                  <Icon
                    className={`text-4xl mb-2 ${skill.color} transition-all duration-300 ${skill.animation}`}
                  />
                  <span className="text-sm font-medium">{skill.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}
