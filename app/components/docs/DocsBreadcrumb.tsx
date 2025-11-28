import Link from "next/link";
import { Doc } from "../../lib/docs";

interface DocsBreadcrumbProps {
  doc: Doc;
}

export default function DocsBreadcrumb({ doc }: DocsBreadcrumbProps) {
  const parts = doc.slug.split("/");
  const isRootDoc = parts.length === 1;

  return (
    <div className="sticky top-0 z-40 bg-card-light dark:bg-card-dark border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/docs"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-white transition-colors"
          >
            Docs
          </Link>

          {!isRootDoc && (
            <>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                /
              </span>
              <Link
                href={`/docs/${parts[0]}`}
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-white transition-colors capitalize"
              >
                {parts[0]}
              </Link>
            </>
          )}

          <span className="text-text-secondary-light dark:text-text-secondary-dark">
            /
          </span>
          <span className="text-text-light dark:text-white font-semibold">
            {doc.title}
          </span>
        </nav>
      </div>
    </div>
  );
}