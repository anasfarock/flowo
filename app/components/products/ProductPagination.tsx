"use client";

import React from "react";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      if (startPage > 2) pages.push("...");
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (endPage < totalPages - 1) pages.push("...");

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center size-9 rounded-lg border border-gray-300 dark:border-gray-700 text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-200 dark:hover:bg-card-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="text-text-secondary-light dark:text-text-secondary-dark px-2">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(Number(page))}
                  className={`flex items-center justify-center size-9 rounded-lg font-medium transition-colors ${
                    page === currentPage
                      ? "bg-primary text-white"
                      : "hover:bg-gray-200 dark:hover:bg-card-dark text-text-light dark:text-text-dark"
                  }`}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center size-9 rounded-lg border border-gray-300 dark:border-gray-700 text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-200 dark:hover:bg-card-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}