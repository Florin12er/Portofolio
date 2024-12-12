"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../../_components/BlogCard";
import { useLocale, useTranslations } from "next-intl";
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
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const t = useTranslations("Home");

  const locale = useLocale() as Locale;
  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await fetch(`/api/posts?locale=${locale || "en"}`); // Fetch posts based on locale
        const posts: BlogPost[] = await response.json();
        setFeaturedPosts(posts.slice(0, 3)); // Select first three posts as featured
      } catch (error) {
        console.error("Error fetching featured posts:", error);
      }
    };

    fetchFeaturedPosts();
  }, [locale]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <motion.div
            key={post.slug}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedBlogs;
