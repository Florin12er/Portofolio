"use client";

import React, { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FaSearch } from "react-icons/fa";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Spinner } from "@/components/Spinner";

type Locale = "en" | "de";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  imageUrl?: string;
}

interface SearchParamsHandlerProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchParamsHandler({ setSearchTerm }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams, setSearchTerm]);

  return null;
}

function stripHtml(html: string) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const placeholderImage = "/images/Jotion.png";

export default function Blogs() {
  const t = useTranslations("Blogs");
  const locale = useLocale() as Locale;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const router = useRouter();
  useEffect(() => {
    fetch(`/api/posts?locale=${locale}`)
      .then((response) => response.json())
      .then((fetchedPosts: BlogPost[]) => {
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.error(t("fetchError"), error);
      });
  }, [locale, t]);

  const filteredPosts = posts.filter(
    (post: BlogPost) =>
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stripHtml(post.content)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        )) &&
      (!selectedTag || post.tags.includes(selectedTag)),
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    router.push(
      `/${locale}/blogs?search=${encodeURIComponent(newSearchTerm)}`,
      {
        scroll: false,
      },
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
    setSearchTerm("");
    router.push(
      `/${locale}/blogs${
        tag === selectedTag ? "" : `?search=${encodeURIComponent(tag)}`
      }`,
      {
        scroll: false,
      },
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        {t("pageTitle")}
      </motion.h1>

      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <SearchParamsHandler setSearchTerm={setSearchTerm} />
      </Suspense>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 relative max-w-md mx-auto"
      >
        <Input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post: BlogPost) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Link href={`/blogs/${post.slug}`}>
                      <Image
                        src={post.imageUrl || placeholderImage}
                        alt={post.title}
                        className="rounded-t-lg"
                        quality={100}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {stripHtml(post.content).slice(0, 100)}...
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs font-medium px-2.5 py-0.5 rounded cursor-pointer transition-colors duration-200 ${
                          tag === selectedTag
                            ? "bg-primary text-primary-foreground"
                            : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <span className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {Math.ceil(
                        stripHtml(post.content).split(" ").length / 200,
                      )}{" "}
                      min read
                    </span>
                  </div>
                  <Link href={`/blogs/${post.slug}`}>
                    <Button variant="outline">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
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
          No posts found
        </motion.p>
      )}
    </div>
  );
}
