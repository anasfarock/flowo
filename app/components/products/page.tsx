import { getAllProducts } from "@/app/lib/products";
import ProductsClientPage from "./ProductsClientPage";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

export const metadata = {
  title: "Products - Flowo",
  description: "Browse our collection of amazing products.",
};

// This is the new Server Component
export default async function ProductsPage() {
  // Fetch data on the server
  const products = getAllProducts() || [];
  const categories = [
    "All",
    ...Array.from(new Set(products?.map((p) => p.category) || [])),
  ];

  return (
    <>
      <Header />
      {/* Pass the fetched data as props to the Client Component */}
      <ProductsClientPage initialProducts={products} categories={categories} />
      <Footer />
    </>
  );
}