"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../../_components/BlogCard";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Locale = "en" | "de";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  imageUrl?: string;
}

const FeaturedBlogs = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("Home");

  const locale = useLocale() as Locale;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?locale=${locale || "en"}`);
        const posts: BlogPost[] = await response.json();
        setAllPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [locale]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 3 >= allPosts.length) ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 3 < 0) ? Math.max(allPosts.length - 3, 0) : prevIndex - 3
    );
  };

  const visiblePosts = allPosts.slice(currentIndex, currentIndex + 3);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="mt-20"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        {t("featuredBlogs")}
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <motion.div
              key={post.slug}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
        {allPosts.length > 3 && (
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

export default FeaturedBlogs;
