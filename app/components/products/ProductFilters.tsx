"use client";

import React, { useState } from "react";

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy?: string;
  onSortChange?: (sort: string) => void;
}

const sortOptions = [
  { value: "popular", label: "Popularity" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy = "popular",
  onSortChange,
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8">
      {/* Full-width border line */}
      <div className="border-b border-gray-200/80 dark:border-gray-700/80 mb-6">
        <div className="container mx-auto px-4">
          {/* Header with Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6">
            <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">
              Explore Our Automations
            </h2>
            <div className="flex items-center gap-2 relative">
              <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                Sort by:
              </span>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-card-dark pl-4 pr-2 hover:bg-gray-300 dark:hover:bg-opacity-80 transition-colors"
                >
                  <p className="text-sm font-medium leading-normal">
                    {sortOptions.find((opt) => opt.value === sortBy)?.label ||
                      "Popularity"}
                  </p>
                  <span className="material-symbols-outlined text-base">
                    {isOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-card-light dark:bg-card-dark rounded-lg shadow-lg border border-gray-200/80 dark:border-gray-700/80 z-10">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          onSortChange?.(option.value);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                          sortBy === option.value
                            ? "bg-primary/10 dark:bg-primary/20 text-primary"
                            : ""
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <div className="container mx-auto px-4">
        <div className="flex gap-2 flex-wrap overflow-x-auto">
          <button
            onClick={() => onCategoryChange("All")}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors whitespace-nowrap ${
              selectedCategory === "All"
                ? "bg-primary/20 dark:bg-primary/30 text-primary dark:text-blue-300"
                : "bg-gray-200 dark:bg-card-dark hover:bg-gray-300 dark:hover:bg-opacity-80"
            }`}
          >
            <p className="text-sm font-medium leading-normal">All</p>
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-primary/20 dark:bg-primary/30 text-primary dark:text-blue-300"
                  : "bg-gray-200 dark:bg-card-dark hover:bg-gray-300 dark:hover:bg-opacity-80"
              }`}
            >
              <p className="text-sm font-medium leading-normal">{category}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}