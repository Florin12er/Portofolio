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

  return (
    <Link href={`/blogs/${slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {isClient ? (
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: content.slice(0, 80) + "...",
              }}
            />
          ) : (
            <div className="flex justify-center items-center h-24">
              <Loader size={32} className="text-primary" />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-blue-800">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
