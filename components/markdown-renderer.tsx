// components/markdown-renderer.tsx
import React from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkEmoji from "remark-emoji";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "@/components/CodeBlock";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import {
  TipAlert,
  ErrorAlert,
  NoteAlert,
  Accordion,
  SuccessCallout,
  WarningCallout,
  InfoCallout,
} from "@/components/CustomHtml";
import EnlargeableImage from "./ZoomebleImage";

interface MarkdownRendererProps {
  content: string;
}
type CustomDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  "data-title"?: string;
  "data-tabs"?: string;
  node?: any;
};
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkEmoji, remarkMath]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={{
        code: CodeBlock as any, // Type assertion to avoid incompatible type error
        div: ({ node, className, children, ...props }: CustomDivProps) => {
          const classNames = className?.split(" ") || [];
          if (classNames.includes("tip"))
            return <TipAlert>{children}</TipAlert>;
          if (classNames.includes("error"))
            return <ErrorAlert>{children}</ErrorAlert>;
          if (classNames.includes("success-callout"))
            return <SuccessCallout>{children}</SuccessCallout>;
          if (classNames.includes("warning-callout"))
            return <WarningCallout>{children}</WarningCallout>;
          if (classNames.includes("info-callout"))
            return <InfoCallout>{children}</InfoCallout>;
          if (classNames.includes("note"))
            return <NoteAlert>{children}</NoteAlert>;
          if (classNames.includes("accordion")) {
            const title = props["data-title"] || "Accordion";
            return <Accordion title={title}>{children}</Accordion>;
          }
          return (
            <div className={className} {...props}>
              {children}
            </div>
          );
        },

        h1: ({ node, ...props }) => (
          <h1
            id={props.children
              ?.toString()
              .toLowerCase()
              .replace(/[^\w]+/g, "-")}
            className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100"
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            id={props.children
              ?.toString()
              .toLowerCase()
              .replace(/[^\w]+/g, "-")}
            className="text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200"
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            id={props.children
              ?.toString()
              .toLowerCase()
              .replace(/[^\w]+/g, "-")}
            className="text-xl font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        h4: ({ node, ...props }) => (
          <h4
            id={props.children
              ?.toString()
              .toLowerCase()
              .replace(/[^\w]+/g, "-")}
            className="text-lg font-medium mt-3 mb-2 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        h5: ({ node, ...props }) => (
          <h5
            id={props.children
              ?.toString()
              .toLowerCase()
              .replace(/[^\w]+/g, "-")}
            className="text-base font-medium mt-3 mb-1 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        h6: ({ node, ...props }) => (
          <h6
            id={props.children
              ?.toString()
              .toLowerCase()
              .replace(/[^\w]+/g, "-")}
            className="text-sm font-medium mt-3 mb-1 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <p className="my-2 text-gray-600 dark:text-gray-400" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul
            className="list-disc list-inside my-4 text-gray-600 dark:text-gray-400"
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol
            className="list-decimal list-inside my-4 text-gray-600 dark:text-gray-400"
            {...props}
          />
        ),
        li: ({ node, ...props }) => <li className="my-1" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic text-gray-600 dark:text-gray-400"
            {...props}
          />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-4">
            <table
              className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              {...props}
            />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td
            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
            {...props}
          />
        ),
        img: ({ node, ...props }) => (
          <EnlargeableImage
            src={props.src || ""}
            alt={props.alt || ""}
            width={750}
            height={750}
          />
        ),
        hr: ({ node, ...props }) => (
          <hr
            className="my-8 border-t border-gray-300 dark:border-gray-700"
            {...props}
          />
        ),
      }}
      className="prose dark:prose-invert max-w-none"
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
