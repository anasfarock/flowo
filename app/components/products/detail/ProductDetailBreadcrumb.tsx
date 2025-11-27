import Link from "next/link";

interface ProductDetailBreadcrumbProps {
  productTitle: string;
}

export default function ProductDetailBreadcrumb({
  productTitle,
}: ProductDetailBreadcrumbProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 items-center">
        <Link
          href="/"
          className="text-text-secondary-light dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors"
        >
          Home
        </Link>
        <span className="text-text-secondary-light dark:text-gray-400 text-sm font-medium leading-normal">
          /
        </span>
        <Link
          href="/products"
          className="text-text-secondary-light dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors"
        >
          Products
        </Link>
        <span className="text-text-secondary-light dark:text-gray-400 text-sm font-medium leading-normal">
          /
        </span>
        <span className="text-text-light dark:text-white text-sm font-medium leading-normal">
          {productTitle}
        </span>
      </div>
    </div>
  );
}