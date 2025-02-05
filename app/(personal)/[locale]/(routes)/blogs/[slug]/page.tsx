"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Loader } from "@/components/ui/loader";
import { extractToc, TocItem } from "../_components/table-of-content";
import { PostContent } from "./PostContent";
import BlogHeader from "./BlogHeader";
import NotificationModal from "./NotificationModal";
import TocSidebar from "./TocSidebar";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

export default function BlogPost() {
  const t = useTranslations("Blog");
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });
  const [toc, setToc] = useState<TocItem[]>([]);

  const fetchComments = useCallback(async () => {
    const res = await fetch(`/api/comments?postSlug=${slug}`);
    if (res.ok) {
      const data = await res.json();
      setComments(data);
    }
  }, [slug]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        if (res.ok) {
          const postData = await res.json();
          setPost(postData);
          setToc(extractToc(postData.content));
          await fetchComments();

          const likesRes = await fetch(`/api/likes/${slug}`);
          if (likesRes.ok) {
            const likesData = await likesRes.json();
            setLikes(likesData.likes);
            setHasLiked(likesData.hasLiked);
          }
        } else {
          setError("Failed to load blog post");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while loading the blog post");
      }
    }
    fetchData();
  }, [slug, fetchComments]);

  const handleSubmitComment = async (commentData: {
    name: string;
    content: string;
  }) => {
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...commentData, postSlug: slug }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit comment");
      }

      fetchComments();
      setModalContent({
        title: t("commentAdded"),
        description: t("commentAddedDescription"),
      });
      setModalOpen(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitResponse = async (
    commentId: string,
    responseData: { name: string; content: string }
  ) => {
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/responses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...responseData, commentId }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit response");
      }

      fetchComments();
      setModalContent({
        title: t("responseAdded"),
        description: t("responseAddedDescription"),
      });
      setModalOpen(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = async () => {
    const res = await fetch(`/api/likes/${slug}`, { method: "POST" });
    if (res.ok) {
      const data = await res.json();
      setLikes(data.likes);
      setHasLiked(true);
      setModalContent({
        title: t("likeAdded"),
        description: t("likeAddedDescription"),
      });
      setModalOpen(true);
    } else {
      setModalContent({
        title: t("likeFailed"),
        description: t("likeFailedDescription"),
      });
      setModalOpen(true);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post?.title,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setModalContent({
        title: t("linkCopied"),
        description: t("linkCopiedDescription"),
      });
      setModalOpen(true);
    }
  };

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <Loader size={48} className="text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="lg:flex lg:space-x-8">
          <article className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <BlogHeader
                post={post}
                likes={likes}
                commentsCount={comments.length}
                hasLiked={hasLiked}
                onLike={handleLike}
                onShare={handleShare}
              />
              <PostContent
                content={post.content}
                imageUrl={post.imageUrl}
                toc={toc}
                showToc={showToc}
                setShowToc={setShowToc}
              />
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {t("comments")}
              </h2>
              <CommentForm
                onSubmit={handleSubmitComment}
                isSubmitting={isSubmitting}
                error={error}
              />
              <CommentList
                comments={comments}
                onSubmitResponse={handleSubmitResponse}
                isSubmitting={isSubmitting}
              />
            </section>
          </article>
          <TocSidebar toc={toc} />
        </div>
      </div>

      <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <Link href="/blogs" className="hover:underline">
          ← {t("backToAllBlogs")}
        </Link>
      </footer>
      <NotificationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        content={modalContent}
      />
    </div>
  );
}
