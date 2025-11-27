"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  thumbnail: string;
  price: string;
  rating?: number;
  reviews?: number;
  slug: string;
}

interface ProductGridProps {
  products: Product[];
  selectedCategory?: string;
}

export default function ProductGrid({
  products,
  selectedCategory = "All",
}: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter(
      (product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [products, selectedCategory]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className="flex flex-col bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
        >
          {/* Product Image */}
          <div className="w-full relative aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Product Content */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-start justify-between gap-2 mb-2">
              <p className="text-base font-bold leading-normal text-text-light dark:text-text-dark flex-1">
                {product.title}
              </p>
              {product.rating && (
                <div className="flex items-center gap-1 text-sm flex-shrink-0">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{product.rating}</span>
                </div>
              )}
            </div>

            <p className="text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark mb-1">
              {product.category}
            </p>

            <p className="text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark mt-1 mb-4 flex-grow">
              {product.shortDescription}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-base font-bold text-primary">
                {product.price}
              </span>
              {product.reviews && (
                <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                  {product.reviews} reviews
                </span>
              )}
            </div>

            <button className="mt-4 w-full flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              View Details
            </button>
          </div>
        </Link>
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}