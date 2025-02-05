import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TypewriterText from "@/components/TypeWriter";
import { Section, item } from "./Section";

export const AboutSection = () => {
  const t = useTranslations("Home");

  return (
    <Section className="rounded-xl">
      <motion.h2
        variants={item}
        className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400"
      >
        {t("aboutMe")}
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div variants={item} className="md:w-1/3">
          <Image
            src="/images/Florin.png"
            alt={t("profileAlt")}
            width={320}
            height={400}
            className="shadow-lg rounded-xl hover:shadow-xl transition duration-300 transform hover:scale-105"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </motion.div>
        <motion.div variants={item} className="md:w-2/3">
          <TypewriterText text={t("aboutDescription")} />
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition duration-300 shadow-md"
            >
              {t("viewProjects")}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};
