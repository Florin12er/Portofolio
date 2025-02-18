"use client";
import React, { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "@/components/Spinner";
import BlogCard from "@/app/(personal)/_components/BlogCard";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { SearchInput } from "../projects/SearchInput";
type Locale = "en" | "de";

type TagKey =
  | "programming"
  | "react"
  | "typescript"
  | "webdev"
  | "javascript"
  | "python"
  | "tutorial";

type TranslationsType = {
  [key in Locale]: {
    [tag in TagKey]: string;
  };
};

const tagTranslations: TranslationsType = {
  en: {
    programming: "Programming",
    react: "React",
    typescript: "TypeScript",
    webdev: "Web Development",
    javascript: "Javascript",
    python: "Python",
    tutorial: "Tutorial",
  },
  de: {
    programming: "Programmierung",
    react: "React",
    typescript: "TypeScript",
    webdev: "Webentwicklung",
    javascript: "Javascript",
    python: "Python",
    tutorial: "Tutorial",
  },
};

const tagKeys: TagKey[] = [
  "programming",
  "react",
  "typescript",
  "webdev",
  "javascript",
  "python",
  "tutorial",
];

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  imageUrl?: string;
}

function SearchParamsHandler({
  setSearchTerm,
  setSelectedTag,
  locale,
  tagTranslations,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
  locale: Locale;
  tagTranslations: TranslationsType;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");

    if (search) {
      setSearchTerm(search);
      const tagValues = Object.values(tagTranslations[locale]);
      if (tagValues.includes(search)) {
        setSelectedTag(search);
      } else {
        setSelectedTag(null);
      }
    } else {
      setSearchTerm("");
      setSelectedTag(null);
    }
  }, [searchParams, setSearchTerm, setSelectedTag, locale, tagTranslations]);

  return null;
}

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const router = useRouter();
  const locale = useLocale() as Locale;
  const tags = tagKeys.map((key) => tagTranslations[locale][key]);
  const t = useTranslations("Blogs");
 

  useEffect(() => {
    fetch(`/api/posts?locale=${locale || "en"}`)
      .then((response) => response.json())
      .then((fetchedPosts: BlogPost[]) => {
        setPosts(fetchedPosts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, [locale]);

  const filteredPosts = posts.filter(
    (post) =>
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        )) &&
      (!selectedTag || post.tags.includes(selectedTag)),
  );

  const updateURL = (newValue: string) => {
    if (newValue) {
      router.push(`/${locale}/blogs?search=${encodeURIComponent(newValue)}`, {
        scroll: false,
      });
    } else {
      router.push(`/${locale}/blogs`, { scroll: false });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (selectedTag && newSearchTerm !== selectedTag) {
      setSelectedTag(null);
    }

    updateURL(newSearchTerm);
  };

  const handleTagClick = (tag: string) => {
    if (tag === selectedTag) {
      setSelectedTag(null);
      setSearchTerm("");
      updateURL("");
    } else {
      setSelectedTag(tag);
      setSearchTerm(tag);
      updateURL(tag);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedTag(null);
    updateURL("");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Blog Posts
      </motion.h1>

      <Suspense fallback={<Spinner />}>
        <SearchParamsHandler
          setSearchTerm={setSearchTerm}
          setSelectedTag={setSelectedTag}
          locale={locale}
          tagTranslations={tagTranslations}
        />
      </Suspense>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 relative max-w-md mx-auto"
      >
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder= {t("searchPlaceholder")}
          onClear={clearSearch}
        />
      </motion.div>

      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full border-2 hover:bg-blue-400 hover:text-white  ${
              selectedTag === tag
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-transparent"
              whileHover={{
                scale: 1.05,
                border: "2px solid #3674B5",
                borderRadius: "10px",
                transition: { duration: 0.3 },
              }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredPosts.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-500 mt-8"
        >
         {t("noPostsFound")}
        </motion.p>
      )}
    </div>
  );
}