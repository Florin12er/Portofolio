import { motion } from "framer-motion";
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Section, item } from "./Section";

export const HeroSection = () => {
  const t = useTranslations("Home");

  return (
    <Section className="text-center mb-40">
      <motion.h1
        variants={item}
        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-pulse"
      >
        {t("welcome")}
      </motion.h1>
      <motion.p
        variants={item}
        className="text-2xl text-gray-600 dark:text-gray-300 mb-8 italic"
      >
        <FaQuoteLeft className="inline-block mr-2 text-blue-500" />
        {t("subtitle")}
        <FaQuoteRight className="inline-block ml-2 text-blue-500" />
      </motion.p>
      <motion.div variants={item} className="flex justify-center items-center">
        <Link href="/contact">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(59, 130, 246)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg flex items-center justify-center hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            {t("getInTouch")} <FaArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </motion.div>
    </Section>
  );
};
