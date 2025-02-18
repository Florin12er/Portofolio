Code : BlogCard : "use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight, CalendarIcon, Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  imageUrl?: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="relative w-full h-64 mb-4">
          <Link href={`/blogs/${post.slug}`}>
            <Image
              src={post.imageUrl || "/images/Jotion.png"}
              alt={post.title}
              className="rounded-t-lg"
              quality={100}
              fill
              sizes="(max-width: 680px) 101vw, (max-width: 790px) 52vw, 34vw"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {stripHtml(post.content).slice(0, 100)}...
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Link key={index} href={`/blogs?search=${encodeURIComponent(tag)}`}>
              <p>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded transition-colors ${
                    searchQuery === tag
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-300"
                  } hover:bg-blue-400 hover:text-white`}
                >
                  {tag}
                </span>
              </p>
            </Link>
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
            {Math.ceil(stripHtml(post.content).split(" ").length / 200)} min
            read
          </span>
        </div>
        <Link href={`/blogs/${post.slug}`}>
          <p className="text-blue-500 hover:text-blue-600 flex items-center">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </p>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;