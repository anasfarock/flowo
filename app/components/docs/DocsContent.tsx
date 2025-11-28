"use client";

import { Doc } from "../../lib/docs";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

interface DocsContentProps {
  doc: Doc;
}

export default function DocsContent({ doc }: DocsContentProps) {
  const [activeHeading, setActiveHeading] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("[data-heading-id]");
      let current = "";

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          current = heading.getAttribute("data-heading-id") || "";
        }
      });

      setActiveHeading(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-black text-text-light dark:text-white mb-4 break-words">
            {doc.title}
          </h1>

          {doc.description && (
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-8">
              {doc.description}
            </p>
          )}

          {/* Markdown Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownContent content={doc.content} />
          </div>
        </article>
      </div>

      {/* Table of Contents */}
      {doc.headings.length > 0 && (
        <aside className="hidden xl:block w-48 flex-shrink-0">
          <div className="sticky top-20">
            <h3 className="text-sm font-semibold text-text-light dark:text-white mb-4">
              On this page
            </h3>
            <nav className="space-y-2">
              {doc.headings
                .filter((heading) => heading.level <= 3)
                .map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm transition-colors ${
                      activeHeading === heading.id
                        ? "text-primary font-semibold"
                        : "text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-white"
                    }`}
                    style={{
                      paddingLeft: `${(heading.level - 1) * 0.75}rem`,
                    }}
                  >
                    {heading.text}
                  </a>
                ))}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}

function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1
            className="text-3xl font-bold text-text-light dark:text-white mt-8 mb-4"
            data-heading-id={getHeadingId(String(children))}
            id={getHeadingId(String(children))}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2
            className="text-2xl font-bold text-text-light dark:text-white mt-6 mb-3"
            data-heading-id={getHeadingId(String(children))}
            id={getHeadingId(String(children))}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            className="text-xl font-bold text-text-light dark:text-white mt-4 mb-2"
            data-heading-id={getHeadingId(String(children))}
            id={getHeadingId(String(children))}
          >
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-semibold text-text-light dark:text-white mt-3 mb-2">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
            {children}
          </p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-primary hover:underline transition-colors"
          >
            {children}
          </a>
        ),
        code: ({ inline, children }) =>
          inline ? (
            <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm text-text-light dark:text-text-dark font-mono">
              {children}
            </code>
          ) : (
            <code className="block bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm text-text-light dark:text-text-dark font-mono">
              {children}
            </code>
          ),
        pre: ({ children }) => (
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            {children}
          </pre>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 text-text-secondary-light dark:text-text-secondary-dark">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-2 text-text-secondary-light dark:text-text-secondary-dark">
            {children}
          </ol>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary-light dark:text-text-secondary-dark">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-left font-semibold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

function getHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}