// app/(personal)/(routes)/blogs/page.tsx
"use client";

import { useState, useEffect } from "react";
import BlogPostPreview from "./_components/blog-post-preview";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  rawContent: string;
}

export default function Blogs() {
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
        console.error("Error fetching blog posts:", error);
        setIsLoading(false);
      });
  }, []);

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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Blog Posts</h1>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader size={48} className="text-primary" />
        </div>
      ) : (
        <>
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500">
              No blog posts found matching your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogPostPreview key={post.slug} {...post} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
