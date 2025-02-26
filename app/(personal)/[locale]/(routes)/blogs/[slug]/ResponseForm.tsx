import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { MdEmojiEmotions } from "react-icons/md";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

declare module "emoji-picker-react" {
  interface PickerProps {
    theme?: "light" | "dark";
  }
}
interface ResponseFormProps {
  commentId: string;
  onSubmit: (
    commentId: string,
    response: { name: string; content: string; image: string },
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
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const { data } = useSession();
  const { theme } = useTheme();
  const isDark = theme === "dark";
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

  const handleEmojiClick = (emojiData: any) => {
    setContent(content + emojiData.emoji);
    setEmojiPickerOpen(false);
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

          <div className="relative">
            <Textarea
              name="content"
              placeholder={t("responsePlaceholder")}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-3"
              required
            />
            <Button
              type="button"
              onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
              className="absolute top-2 right-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 hidden xl:block hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <MdEmojiEmotions
                className="text-gray-500 dark:text-gray-400"
                size={20}
              />
            </Button>

            {emojiPickerOpen && (
              <div className="absolute bottom-[-100px] right-[-410px] hidden xl:block">
                <Picker
                  onEmojiClick={handleEmojiClick}
                  width={350}
                  theme={isDark ? "dark" : "light"}
                  height={350}
                />
              </div>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting || !content}>
            {isSubmitting ? t("submitting") : t("submitResponse")}
          </Button>
        </>
      )}
    </form>
  );
}
