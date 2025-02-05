import { ResponseForm } from "./ResponseForm";

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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
        {comment.name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{comment.content}</p>
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

      <ResponseForm
        commentId={comment.id}
        onSubmit={onSubmitResponse}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
