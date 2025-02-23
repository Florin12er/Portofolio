import { useSession } from "@/lib/auth-client";
import { ResponseForm } from "./ResponseForm";
import Image from "next/image";
import { Comment } from "./types";

interface CommentItemProps {
  comment: Comment;
  onSubmitResponse: (
    commentId: string,
    response: { name: string; content: string }
  ) => Promise<void>;
  isSubmitting: boolean;
}

export function CommentItem({
  comment,
  onSubmitResponse,
  isSubmitting,
}: CommentItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Image
          alt={comment.name || "Avatar"}
          src={comment.image || "/images/avatar.png"}
          width={48}
          height={48}
          className="rounded-full border border-gray-300 dark:border-gray-600"
          unoptimized
        />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            {comment.name}
          </h3>
          <time className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(comment.createdAt).toLocaleString()}
          </time>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{comment.content}</p>

      {comment.responses.length > 0 && (
        <div className="mt-4 space-y-4">
          {comment.responses.map((response) => (
            <div
              key={response.id}
              className="ml-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <Image
                  alt={response.name || "Avatar"}
                  src={response.image || "/images/avatar.png"}
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-300 dark:border-gray-600"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {response.name}
                  </h4>
                  <time className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(response.createdAt).toLocaleString()}
                  </time>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {response.content}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Response Form */}
      <ResponseForm
        commentId={comment.id}
        onSubmit={onSubmitResponse}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
