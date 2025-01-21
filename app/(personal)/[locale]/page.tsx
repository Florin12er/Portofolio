"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { skills } from "@/data/technologies";
import { HobbyChart } from "./_components/bar-chart";
import FeaturedBlogs from "./_components/featured-blogs";

export default function Home() {
    const t = useTranslations("Home");

    return (
        <div className="container mx-auto px-6 py-12">
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-40"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-pulse">
                    {t("welcome")}
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 italic">
                    <FaQuoteLeft className="inline-block mr-2 text-blue-500" />
                    {t("subtitle")}
                    <FaQuoteRight className="inline-block ml-2 text-blue-500" />
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center items-center"
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
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
            </motion.section>
            <FeaturedBlogs />
            <br/>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-40 rounded-xl"
            >
                <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
                    {t("aboutMe")}
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:w-1/3"
                    >
                        <Image
                            src="/images/Florin.png"
                            alt={t("profileAlt")}
                            width={320}
                            height={400}
                            className="shadow-lg rounded-xl hover:shadow-xl transition duration-300 transform hover:scale-105"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="md:w-2/3"
                    >
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            {t("aboutDescription")}
                        </p>
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
            </motion.section>

            {/* Skills Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-8 mb-40"
            >
                <h2 className="text-4xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400">
                    {t("skills")}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
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
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="p-8"
            >
                <h2 className="text-4xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400">
                    {t("myHobbies")}
                </h2>
                <HobbyChart />
            </motion.section>
        </div>
    );
}
