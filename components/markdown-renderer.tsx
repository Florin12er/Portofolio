// components/markdown-renderer.tsx
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Alert } from "@/components/ui/alert";
import { InfoIcon, AlertTriangle, AlertCircle } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
}

const CodeBlock: React.FC<{
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ inline, className, children }) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  if (inline) {
    return (
      <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    );
  }

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-bl px-2 py-1 text-xs font-mono">
        {language}
      </div>
      <SyntaxHighlighter
        style={dracula}
        language={language}
        PreTag="div"
        customStyle={{
          background: "transparent",
          padding: "1rem",
          margin: "0.5rem 0",
          borderRadius: "0.375rem",
          border: "1px solid #475569",
        }}
        codeTagProps={{
          style: {
            fontSize: "0.875rem",
            lineHeight: "1.5",
          },
        }}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
};

const TipAlert: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Alert className="flex items-center bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-700 my-4">
    <InfoIcon className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-300" />
    <div>
      <h5 className="font-medium">Tip</h5>
      <div className="text-sm">{children}</div>
    </div>
  </Alert>
);

const ErrorAlert: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Alert className="flex items-center bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-100 border-red-200 dark:border-red-700 my-4">
    <AlertTriangle className="h-4 w-4 mr-2 text-red-500 dark:text-red-300" />
    <div>
      <h5 className="font-medium">Error</h5>
      <div className="text-sm">{children}</div>
    </div>
  </Alert>
);

const NoteAlert: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Alert className="flex items-center bg-yellow-50 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 border-yellow-200 dark:border-yellow-700 my-4">
    <AlertCircle className="h-4 w-4 mr-2 text-yellow-500 dark:text-yellow-300" />
    <div>
      <h5 className="font-medium">Note</h5>
      <div className="text-sm">{children}</div>
    </div>
  </Alert>
);
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code: CodeBlock as any, // Type assertion to avoid incompatible type error
        div: ({ node, className, children, ...props }) => {
          const classNames = className?.split(" ") || [];
          if (classNames.includes("tip"))
            return <TipAlert>{children}</TipAlert>;
          if (classNames.includes("error"))
            return <ErrorAlert>{children}</ErrorAlert>;
          if (classNames.includes("note"))
            return <NoteAlert>{children}</NoteAlert>;
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
          <Image
            src={props.src || ""}
            alt={props.alt || ""}
            width={500}
            height={300}
            className="max-w-full h-auto my-4 rounded-lg"
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
