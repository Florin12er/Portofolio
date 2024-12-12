// app/(personal)/(routes)/blog/[slug]/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import {
    TableOfContents,
    extractToc,
    TocItem,
} from "../_components/table-of-content";
import { useTranslations } from "next-intl";
import MarkdownRenderer from "@/components/markdown-renderer";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "@/components/ui/loader";
import {
    CalendarIcon,
    Clock,
    MessageCircle,
    ThumbsUp,
    Share2,
    BookOpen,
} from "lucide-react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/modal";
import EnlargeableImage from "@/components/ZoomebleImage";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    content: string;
    imageUrl?: string;
}

interface Comment {
    id: string;
    name: string;
    content: string;
    createdAt: string;
    likes: number;
    responses: Comment[];
}

export default function BlogPost() {
    const t = useTranslations("Blog");
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState({ name: "", content: "" });
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
    async function handleSubmitResponse(
        commentId: string,
        responseData: { name: string; content: string },
    ) {
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
    }
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

    async function handleSubmitComment(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...newComment, postSlug: slug }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to submit comment");
            }

            setNewComment({ name: "", content: "" });
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
    }

    async function handleLike() {
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
    }

    function handleShare() {
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
    }

    if (!post)
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
                <Loader size={48} className="text-primary" />
            </div>
        );

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="lg:flex lg:space-x-8">
                    <article className="lg:w-3/4">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
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
                                        {Math.ceil(post.content.split(" ").length / 200)}{" "}
                                        {t("minutesRead")}
                                    </span>
                                    <span className="flex items-center mr-4 mb-2 sm:mb-0">
                                        <MessageCircle className="w-4 h-4 mr-1" />
                                        {comments.length} {t("comments")}
                                    </span>
                                    <span className="flex items-center mb-2 sm:mb-0">
                                        <ThumbsUp className="w-4 h-4 mr-1" />
                                        {likes} {t("likes")}
                                    </span>
                                </div>
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
                                <div className="flex space-x-4">
                                    <Button
                                        onClick={handleLike}
                                        variant="transparent"
                                        className={`flex items-center ${hasLiked ? "bg-green-500 hover:bg-green-600" : ""}`}
                                        disabled={hasLiked}
                                    >
                                        <ThumbsUp className="w-4 h-4 mr-2" />
                                        {hasLiked ? "Liked" : "Like"} ({likes})
                                    </Button>
                                    <Button
                                        variant="transparent"
                                        onClick={handleShare}
                                        className="flex items-center"
                                    >
                                        <Share2 className="w-4 h-4 mr-2" />
                                        {t("share")}
                                    </Button>
                                </div>
                                <div className="mt-8 mb-16">
                                    {post.imageUrl && (
                                        <div className="mb-8 w-full h-96 md:h-96">
                                            <EnlargeableImage
                                                src={post.imageUrl as string}
                                                alt={post.title}
                                                width={600}
                                                height={600}
                                            />
                                        </div>
                                    )}
                                </div>
                            </header>
                            <div className="p-6 sm:p-8">
                                <div className="lg:hidden mb-4">
                                    <Button
                                        variant="link"
                                        onClick={() => setShowToc(!showToc)}
                                        className="mb-4"
                                    >
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        {t("tableOfContents")}
                                    </Button>
                                    {showToc && (
                                        <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                            <TableOfContents toc={toc} />
                                        </div>
                                    )}
                                </div>
                                <MarkdownRenderer content={post.content} />
                            </div>
                        </div>

                        <section className="mt-12">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                                {t("comments")}
                            </h2>
                            <form
                                onSubmit={handleSubmitComment}
                                className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                            >
                                <Input
                                    type="text"
                                    placeholder={t("name")}
                                    value={newComment.name}
                                    onChange={(e) =>
                                        setNewComment({ ...newComment, name: e.target.value })
                                    }
                                    className="mb-4 bg-gray-100 dark:bg-gray-700"
                                    required
                                />
                                <Textarea
                                    placeholder={t("commentPlaceholder")}
                                    value={newComment.content}
                                    onChange={(e) =>
                                        setNewComment({ ...newComment, content: e.target.value })
                                    }
                                    className="mb-4 bg-gray-100 dark:bg-gray-700"
                                    required
                                />
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? t("submitting") : t("submitComment")}
                                </Button>
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                            </form>

                            <div className="space-y-6">
                                {comments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4"
                                    >
                                        <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                                            {comment.name}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                                            {comment.content}
                                        </p>
                                        <time className="text-sm text-gray-500 dark:text-gray-400">
                                            {new Date(comment.createdAt).toLocaleString()}
                                        </time>

                                        {comment.responses.map((response) => (
                                            <div
                                                key={response.id}
                                                className="ml-8 mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded"
                                            >
                                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                                    {response.name}
                                                </h4>
                                                <p className="text-gray-600 dark:text-gray-300 mb-1">
                                                    {response.content}
                                                </p>
                                                <time className="text-xs text-gray-500 dark:text-gray-400">
                                                    {new Date(response.createdAt).toLocaleString()}
                                                </time>
                                            </div>
                                        ))}

                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                const formData = new FormData(e.currentTarget);
                                                handleSubmitResponse(comment.id, {
                                                    name: formData.get("name") as string,
                                                    content: formData.get("content") as string,
                                                });
                                            }}
                                            className="mt-4"
                                        >
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder={t("name")}
                                                className="mb-2"
                                                required
                                            />
                                            <Textarea
                                                name="content"
                                                placeholder={t("responsePlaceholder")}
                                                className="mb-2"
                                                required
                                            />
                                            <Button type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? t("submitting") : t("submitResponse")}
                                            </Button>
                                        </form>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </article>

                    <aside className="hidden lg:block lg:w-1/4">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <TableOfContents toc={toc} />
                        </div>
                    </aside>
                </div>
            </div>

            <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
                <Link href="/blogs" className="hover:underline">
                    ← {t("backToAllBlogs")}
                </Link>
            </footer>

            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{modalContent.title}</DialogTitle>
                        <DialogDescription>{modalContent.description}</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
