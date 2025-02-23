import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";

interface ResponseFormProps {
  commentId: string;
  onSubmit: (
    commentId: string,
    response: { name: string; content: string; image: string }
  ) => Promise<void>;
  isSubmitting: boolean;
}

export function ResponseForm({
  commentId,
  onSubmit,
  isSubmitting,
}: ResponseFormProps) {
  const t = useTranslations("Blog");
  const [content, setContent] = useState("");
  const { data } = useSession();

  const isLoggedIn = !!data?.user?.name;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoggedIn) return;

    onSubmit(commentId, {
      name: data.user?.name,
      content,
      image: data.user?.image || "/images/avatar.png",
    });
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
    >
      {!isLoggedIn && (
        <div className="mb-4 text-red-500 text-center">
          <p>
            {t("loginRequiredMessage") ||
              "You must be logged in to comment or respond."}
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
        <>
          <div className="flex items-center gap-3 mb-3">
            <Image
              alt={data?.user?.name || "Avatar"}
              src={data?.user?.image || "/images/avatar.png"}
              width={40}
              height={40}
              className="rounded-full border border-gray-300 dark:border-gray-600"
            />
            <p className="font-semibold text-gray-900 dark:text-gray-200">
              {data?.user?.name || "Anonymous"}
            </p>
          </div>

          <Textarea
            name="content"
            placeholder={t("responsePlaceholder")}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mb-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-3"
            required
          />

          <Button type="submit" disabled={isSubmitting || !content}>
            {isSubmitting ? t("submitting") : t("submitResponse")}
          </Button>
        </>
      )}
    </form>
  );
}
