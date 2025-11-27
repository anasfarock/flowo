import Link from "next/link";
import { getAllProducts } from "@/lib/products";

interface RelatedProductsProps {
  currentProductSlug: string;
}

export default async function RelatedProducts({
  currentProductSlug,
}: RelatedProductsProps) {
  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter((p) => p.slug !== currentProductSlug)
    .slice(0, 3);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-text-light dark:text-white mb-8">
        Related Automations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            <div className="h-full bg-card-light dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col hover:shadow-lg hover:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                description
              </span>
              <h3 className="text-xl font-bold text-text-light dark:text-white">
                {product.title}
              </h3>
              <p className="text-text-secondary-light dark:text-gray-300 mt-2 flex-grow">
                {product.shortDescription}
              </p>
              <span className="text-primary font-semibold mt-4 inline-block group-hover:translate-x-1 transition-transform">
                Learn More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}