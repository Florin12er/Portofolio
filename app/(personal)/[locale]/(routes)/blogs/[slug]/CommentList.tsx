import { CommentItem } from "./CommentItem";

interface CommentListProps {
  comments: Comment[];
  onSubmitResponse: (
    commentId: string,
    response: { name: string; content: string }
  ) => Promise<void>;
  isSubmitting: boolean;
}

export function CommentList({
  comments,
  onSubmitResponse,
  isSubmitting,
}: CommentListProps) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onSubmitResponse={onSubmitResponse}
          isSubmitting={isSubmitting}
        />
      ))}
    </div>
  );
}
