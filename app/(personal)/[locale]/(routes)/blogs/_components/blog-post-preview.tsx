// app/[locale]/blogs/_components/blog-post-preview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";

interface BlogPostProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  imageUrl?: string;
}

function stripHtml(html: string) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const placeholderImage = "/images/Jotion.png";

export default function BlogPostPreview({
  slug,
  title,
  date,
  tags,
  content,
  imageUrl,
}: BlogPostProps) {
  const readTime = Math.ceil(content.split(" ").length / 200);
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative w-full h-48">
          <Image
            src={(imageUrl as string) || placeholderImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {stripHtml(content).slice(0, 150)}...
          </div>
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
