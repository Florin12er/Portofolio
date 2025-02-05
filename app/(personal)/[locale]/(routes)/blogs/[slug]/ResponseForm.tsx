import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

interface ResponseFormProps {
  commentId: string;
  onSubmit: (
    commentId: string,
    response: { name: string; content: string }
  ) => Promise<void>;
  isSubmitting: boolean;
}

export function ResponseForm({
  commentId,
  onSubmit,
  isSubmitting,
}: ResponseFormProps) {
  const t = useTranslations("Blog");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(commentId, {
      name: formData.get("name") as string,
      content: formData.get("content") as string,
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
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
  );
}
