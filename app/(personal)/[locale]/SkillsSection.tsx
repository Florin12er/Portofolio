import Link from "next/link";
import { motion } from "framer-motion";
import { skills } from "@/data/technologies";
import { Section, container, item } from "./Section";
import { useTranslations } from "next-intl";

export const SkillsSection = () => {
  const t = useTranslations("Home");

  return (
    <Section className="p-8">
      <motion.h2
        variants={item}
        className="text-4xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400"
      >
        {t("skills")}
      </motion.h2>
      <motion.div
        variants={container}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/projects?search=${encodeURIComponent(skill.name)}`}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl flex flex-col items-center justify-center h-full border-2 border-transparent hover:border-blue-500"
              >
                <Icon
                  className={`text-5xl mb-4 ${skill.color} transition-all duration-300`}
                />
                <span className="text-lg font-medium">{skill.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};
