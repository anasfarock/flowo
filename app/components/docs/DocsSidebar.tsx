"use client";

import Link from "next/link";
import { useState } from "react";
import { Doc } from "../../lib/docs";

interface DocsSidebarProps {
  docs: Doc[];
  activeSlug?: string;
  grouped: Record<string, Doc[]>;
}

export default function DocsSidebar({ docs, activeSlug, grouped }: DocsSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(
      activeSlug
        ? [activeSlug.split("/")[0]]
        : Object.keys(grouped).length > 0
          ? [Object.keys(grouped)[0]]
          : []
    )
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const isDocActive = (slug: string) => {
    return activeSlug === slug;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 lg:inset-auto w-64 bg-card-light dark:bg-card-dark border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40 transform transition-transform duration-300 lg:h-screen lg:sticky lg:top-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Sidebar Content */}
        <div className="p-4 lg:p-6 pt-12 lg:pt-6">
          <div className="mb-6">
            <h2 className="text-sm font-bold text-text-light dark:text-white uppercase tracking-wider">
              Documentation
            </h2>
          </div>

          <nav className="space-y-1">
            {Object.entries(grouped).map(([category, categoryDocs]) => (
              <div key={category}>
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-text-light dark:text-white font-semibold"
                >
                  <span>{category}</span>
                  <span
                    className={`material-symbols-outlined text-lg transform transition-transform ${
                      expandedCategories.has(category) ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {/* Category Docs */}
                {expandedCategories.has(category) && (
                  <div className="ml-2 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-2">
                    {categoryDocs.map((doc) => (
                      <Link
                        key={doc.slug}
                        href={`/docs/${doc.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className={`block p-2 rounded-lg text-sm transition-colors ${
                          isDocActive(doc.slug)
                            ? "bg-primary/10 text-primary dark:bg-primary/20 font-semibold"
                            : "text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        {doc.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
        />
      )}
    </>
  );
}