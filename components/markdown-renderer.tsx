// components/markdown-renderer.tsx
"use client";

import React, { ComponentPropsWithoutRef } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";

interface BlogContentProps {
  content: string;
}

type CodeProps = ComponentPropsWithoutRef<"code"> & { inline?: boolean };

const CodeBlock: React.FC<CodeProps> = ({ className, children, inline }) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  if (inline) {
    return <code className={className}>{children}</code>;
  }

  return (
    <SyntaxHighlighter
      style={dracula}
      language={language}
      PreTag="div"
      customStyle={{
        backgroundColor: "transparent",
        border: "none",
        padding: "0",
      }}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        code: CodeBlock as Components["code"],
      }}
      className="prose dark:prose-invert max-w-none"
    >
      {content}
    </ReactMarkdown>
  );
};

export default BlogContent;
