"use client";

import { useState, useMemo } from "react";
import ProductHero from "../../components/products/ProductHero";
import ProductFilters from "../../components/products/ProductFilters";
import ProductGrid from "../../components/products/ProductGrid";
import ProductPagination from "../../components/products/ProductPagination";

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

interface ProductsPageProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ProductsPage({
  initialProducts,
  categories,
}: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const sortedProducts = useMemo(() => {
    let sorted = [...initialProducts];

    switch (sortBy) {
      case "newest":
        sorted = sorted.reverse();
        break;
      case "price-low":
        sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
          const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
          return priceA - priceB;
        });
        break;
      case "price-high":
        sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
          const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
          return priceB - priceA;
        });
        break;
      case "rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "popular":
      default:
        // Keep original order
        break;
    }

    return sorted;
  }, [initialProducts, sortBy]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return sortedProducts;
    }
    return sortedProducts.filter(
      (product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [sortedProducts, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="pb-16 sm:pb-24">
      <ProductHero />
      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <ProductGrid
        products={paginatedProducts}
        selectedCategory={selectedCategory}
      />
      {totalPages > 1 && (
        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}