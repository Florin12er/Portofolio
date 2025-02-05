"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  Clock,
  MessageCircle,
  ThumbsUp,
  Share2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import EnlargeableImage from "@/components/ZoomebleImage";

interface BlogHeaderProps {
  post: BlogPost;
  likes: number;
  commentsCount: number;
  hasLiked: boolean;
  onLike: () => void;
  onShare: () => void;
}
export default function BlogHeader({
  post,
  likes,
  commentsCount,
  hasLiked,
  onLike,
  onShare,
}: BlogHeaderProps) {
  const t = useTranslations("Blog");

  return (
    <header className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>
      <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span className="flex items-center mr-4 mb-2 sm:mb-0">
          <CalendarIcon className="w-4 h-4 mr-1" />
          {post.date}
        </span>
        <span className="flex items-center mr-4 mb-2 sm:mb-0">
          <Clock className="w-4 h-4 mr-1" />
          {Math.ceil(post.content.split(" ").length / 200)} {t("minutesRead")}
        </span>
        <span className="flex items-center mr-4 mb-2 sm:mb-0">
          <MessageCircle className="w-4 h-4 mr-1" />
          {commentsCount} {t("comments")}
        </span>
        <span className="flex items-center mb-2 sm:mb-0">
          <ThumbsUp className="w-4 h-4 mr-1" />
          {likes} {t("likes")}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <Button
          onClick={onLike}
          variant="transparent"
          className={`flex items-center ${
            hasLiked ? "bg-green-500 hover:bg-green-600" : ""
          }`}
          disabled={hasLiked}
        >
          <ThumbsUp className="w-4 h-4 mr-2" />
          {hasLiked ? "Liked" : "Like"} ({likes})
        </Button>
        <Button
          variant="transparent"
          onClick={onShare}
          className="flex items-center"
        >
          <Share2 className="w-4 h-4 mr-2" />
          {t("share")}
        </Button>
      </div>

      {/* Image (moved out of buttons for better positioning) */}
      {post.imageUrl && (
        <div className="w-full max-w-3xl mx-auto mt-8">
          <EnlargeableImage
            src={post.imageUrl}
            alt={post.title}
            width={600}
            height={600}
          />
        </div>
      )}
    </header>
  );
}
