// app/(personal)/(routes)/blog/[slug]/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import MarkdownRenderer from "@/components/markdown-renderer";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "@/components/ui/loader";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    content: string;
}

interface Comment {
    id: string;
    name: string;
    content: string;
    createdAt: string;
}

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState({ name: "", content: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const fetchComments = useCallback(async () => {
        const res = await fetch(`/api/comments?postSlug=${slug}`);
        if (res.ok) {
            const data = await res.json();
            setComments(data);
        }
    }, [slug]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/posts/${slug}`);
            if (res.ok) {
                const postData = await res.json();
                setPost(postData);
                fetchComments();
            } else {
                setError("Failed to load blog post");
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
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (!post)
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader />
            </div>
        );

    return (
        <article className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex justify-between items-center mb-8">
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <time className="text-sm text-gray-500">{post.date}</time>
            </div>
            <MarkdownRenderer content={post.content} />
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <form onSubmit={handleSubmitComment} className="mb-8">
                    <Input
                        type="text"
                        placeholder="Your Name"
                        value={newComment.name}
                        onChange={(e) =>
                            setNewComment({ ...newComment, name: e.target.value })
                        }
                        className="mb-2"
                        required
                    />
                    <Textarea
                        placeholder="Your Comment"
                        value={newComment.content}
                        onChange={(e) =>
                            setNewComment({ ...newComment, content: e.target.value })
                        }
                        className="mb-2"
                        required
                    />
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Comment"}
                    </Button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>

                <div className="space-y-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="bg-gray-100 dark:bg-gray-800 p-4 rounded"
                        >
                            <h3 className="font-bold">{comment.name}</h3>
                            <p>{comment.content}</p>
                            <time className="text-sm text-gray-500">
                                {new Date(comment.createdAt).toLocaleString()}
                            </time>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
