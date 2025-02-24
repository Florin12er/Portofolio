import { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { MdEmojiEmotions } from "react-icons/md";
declare module "emoji-picker-react" {
  interface PickerProps {
    theme?: "light" | "dark";
  }
}

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

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
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const { data } = useSession();
  const { theme } = useTheme();
  const isDark = theme === "dark";

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

  const handleEmojiClick = (emojiData: any) => {
    setContent(content + emojiData.emoji);
    setEmojiPickerOpen(false);
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
        <div className="relative">
          <Textarea
            placeholder={t("commentPlaceholder")}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mb-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-3"
            required
          />

          <Button
            type="button"
            onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
            className="absolute top-2 right-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 hidden lg:block hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <MdEmojiEmotions
              className="text-gray-500 dark:text-gray-400"
              size={20}
            />
          </Button>

          {emojiPickerOpen && (
            <div className="absolute bottom-[-100px] right-[-390px] hidden lg:block">
              <Picker
                onEmojiClick={handleEmojiClick}
                width={350}
                theme={isDark ? "dark" : "light"}
                height={350}
              />
            </div>
          )}
        </div>
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
