"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
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

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        {t("featuredBlogs")}
      </h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        className="custom-carousel"
      >
        {allPosts.map((post) => (
          <div key={post.slug} className="px-2">
            <BlogCard post={post} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedBlogs;
