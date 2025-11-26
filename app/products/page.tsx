import { getAllProducts, getCategories } from "../lib/products";
import ProductsPageClient from "../components/products/ProductsPageClient";

export default async function ProductsPage() {
  const products = getAllProducts();
  const categories = ["All", ...getCategories()];

  return (
    <ProductsPageClient initialProducts={products} categories={categories} />
  );
}
