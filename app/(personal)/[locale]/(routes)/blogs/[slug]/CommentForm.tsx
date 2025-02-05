import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CommentFormProps {
  onSubmit: (comment: { name: string; content: string }) => Promise<void>;
  isSubmitting: boolean;
  error?: string;
}

export function CommentForm({
  onSubmit,
  isSubmitting,
  error,
}: CommentFormProps) {
  const t = useTranslations("Blog");
  const [newComment, setNewComment] = useState({ name: "", content: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(newComment);
    setNewComment({ name: "", content: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <Input
        type="text"
        placeholder={t("name")}
        value={newComment.name}
        onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
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
  );
}
