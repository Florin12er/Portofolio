// app/[locale]/blogs/page.tsx
"use client";

import { useState, useEffect } from "react";
import BlogPostPreview from "./_components/blog-post-preview";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  rawContent: string;
}

export default function Blogs() {
  const t = useTranslations("Blogs");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((fetchedPosts: BlogPost[]) => {
        setPosts(fetchedPosts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(t("fetchError"), error);
        setIsLoading(false);
      });
  }, [t]);

  // Filter posts based on title and tags
  const filteredPosts = posts.filter((post) => {
    const titleMatch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const tagsMatch = post.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return titleMatch || tagsMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        {t("pageTitle")}
      </motion.h1>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8 relative max-w-md mx-auto"
      >
        <Input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </motion.div>

      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center h-64"
        >
          <Loader size={48} className="text-primary" />
        </motion.div>
      ) : (
        <AnimatePresence>
          {filteredPosts.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-gray-500"
            >
              {t("noPostsFound")}
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogPostPreview {...post} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
