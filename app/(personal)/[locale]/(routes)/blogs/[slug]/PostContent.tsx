import MarkdownRenderer from "@/components/markdown-renderer";
import EnlargeableImage from "@/components/ZoomebleImage";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { TableOfContents, TocItem } from "../_components/table-of-content";

interface PostContentProps {
  content: string;
  imageUrl?: string;
  toc: TocItem[];
  showToc: boolean;
  setShowToc: (value: boolean) => void;
}

export function PostContent({
  content,
  imageUrl,
  toc,
  showToc,
  setShowToc,
}: PostContentProps) {
  return (
    <div className="p-6 sm:p-8">
      <div className="lg:hidden mb-4">
        <Button
          variant="link"
          onClick={() => setShowToc(!showToc)}
          className="mb-4"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Table of Contents
        </Button>
        {showToc && (
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <TableOfContents toc={toc} />
          </div>
        )}
      </div>
      <MarkdownRenderer content={content} />
    </div>
  );
}
