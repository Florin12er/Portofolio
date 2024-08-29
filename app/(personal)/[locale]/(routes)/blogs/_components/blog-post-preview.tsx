"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader } from "@/components/ui/loader";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";

interface BlogPostProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

export default function BlogPostPreview({
  slug,
  title,
  date,
  tags,
  content,
}: BlogPostProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const readTime = Math.ceil(content.split(" ").length / 200); // Assuming 200 words per minute reading speed

  return (
    <Link href={`/blogs/${slug}`} className="block">
      <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isClient ? (
            <>
              <div
                className="prose dark:prose-invert max-w-none text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: content.slice(0, 150) + "...",
                }}
              />
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                <span className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {new Date(date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {readTime} min read
                </span>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-24">
              <Loader size={32} className="text-primary" />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <span className="text-sm text-blue-600 dark:text-blue-400 flex items-center hover:underline">
            Read more <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
