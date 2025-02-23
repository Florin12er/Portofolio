import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";

interface CommentFormProps {
  onSubmit: (comment: {
    name: string;
    content: string;
    image: string;
  }) => Promise<void>;
  isSubmitting: boolean;
  error?: string;
}

export function CommentForm({
  onSubmit,
  isSubmitting,
  error,
}: CommentFormProps) {
  const t = useTranslations("Blog");
  const [content, setContent] = useState("");
  const { data } = useSession();

  const isLoggedIn = !!data?.user?.name;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) return;

    await onSubmit({
      name: data.user.name,
      content,
      image: data.user.image || "/images/avatar.png",
    });
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      {!isLoggedIn && (
        <div className="mb-4 text-red-500 text-center">
          <p>
            {t("loginRequiredMessage") || "You must be logged in to comment."}
          </p>
          <Button
            onClick={() => (window.location.href = "/sign-in")}
            className="mt-2"
          >
            {t("signIn")}
          </Button>
        </div>
      )}

      {isLoggedIn && (
        <div className="flex items-center gap-3 mb-4">
          <Image
            alt={data?.user?.name || "Avatar"}
            src={data?.user?.image || "/images/avatar.png"}
            width={48}
            height={48}
            className="rounded-full border border-gray-300 dark:border-gray-600"
          />
          <p className="font-semibold text-gray-900 dark:text-gray-200">
            {data?.user?.name || "Anonymous"}
          </p>
        </div>
      )}
      {isLoggedIn && (
        <Textarea
          placeholder={t("commentPlaceholder")}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-3"
          required
        />
      )}

      {isLoggedIn && (
        <Button
          type="submit"
          disabled={isSubmitting || !content}
          className="w-full"
        >
          {isSubmitting ? t("submitting") : t("submitComment")}
        </Button>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
