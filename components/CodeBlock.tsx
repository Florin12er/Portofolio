import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";

export const CodeBlock: React.FC<{
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ inline, className, children }) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";
  const code = String(children).replace(/\n$/, "");

  if (inline) {
    return (
      <code className="bg-gray-200 dark:bg-gray-800 text-inherit px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    );
  }

  if (!language) {
    return (
      <code className="bg-gray-200 dark:bg-gray-700 text-inherit px-1 py-0.5 rounded text-sm inline-block">
        {code}
      </code>
    );
  }
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-br px-2 py-1 text-xs font-mono">
        {language}
      </div>
      <CopyButton text={code} />
      <SyntaxHighlighter
        style={dracula}
        language={language}
        PreTag="div"
        customStyle={{
          background: "transparent",
          padding: "1rem",
          paddingTop: "2rem",
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
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
