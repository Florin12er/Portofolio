"use client";

import React, { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "@/components/Spinner";
import BlogCard from "@/app/(personal)/_components/BlogCard";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { useLocale } from "next-intl";

type Locale = "en" | "de";

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
}: {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
    const searchParams = useSearchParams();

    useEffect(() => {
        const search = searchParams.get("search");
        if (search) {
            setSearchTerm(search);
        }
    }, [searchParams, setSearchTerm]);

    return null;
}

export default function Blogs() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const router = useRouter();
    const locale = useLocale() as Locale;

    // Fetch blog posts from an API or database based on locale
    useEffect(() => {
        fetch(`/api/posts?locale=${locale || "en"}`) // Adjust locale as needed
            .then((response) => response.json())
            .then((fetchedPosts: BlogPost[]) => {
                setPosts(fetchedPosts);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, [locale]);

    // Filter posts based on the search term
    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
    );

    // Handle search input change and update the search query in the URL
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        router.push(`/blogs?search=${encodeURIComponent(newSearchTerm)}`, {
            scroll: false,
        });
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
                    placeholder="Search..."
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
                    {filteredPosts.map((post) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <BlogCard post={post} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
