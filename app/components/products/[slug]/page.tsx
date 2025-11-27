import { getProductBySlug, getProductSlugs } from "../../../lib/products";
import { notFound } from "next/navigation";
import ProductDetailBreadcrumb from "../../../components/products/detail/ProductDetailBreadcrumb";
import ProductMediaGallery from "../../../components/products/detail/ProductMediaGallery";
import ProductInfoCard from "../../../components/products/detail/ProductInfo";
import ProductOverview from "../../../components/products/detail/ProductOverview";
import ProductFeatures from "../../../components/products/detail/ProductFeatures";
import ProductIntegrations from "../../../components/products/detail/ProductIntegrations";
import ProductCTA from "../../../components/products/detail/ProductCTA";
import RelatedProducts from "../../../components/products/detail/RelatedProducts";

export async function generateStaticParams() {
  const slugs = getProductSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} - Flowo`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <ProductDetailBreadcrumb productTitle={product.title} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column: Media Gallery (Sticky) */}
          <ProductMediaGallery product={product} />

          {/* Right Column: Product Info */}
          <ProductInfoCard product={product} />
        </div>

        {/* Tabbed Information Section */}
        <ProductTabs product={product} />
      </div>

      {/* Related Products Section */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-16">
          <RelatedProducts currentProductSlug={slug} />
        </div>
      </div>
    </main>
  );
}

function ProductTabs({ product }: { product: any }) {
  return (
    <div className="mt-12 lg:mt-16">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav aria-label="Tabs" className="flex -mb-px space-x-8">
          <a
            aria-current="page"
            className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base text-primary border-primary"
            href="#"
          >
            Overview
          </a>
          <a
            className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base text-text-secondary-light dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500"
            href="#"
          >
            Features
          </a>
          <a
            className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base text-text-secondary-light dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500"
            href="#"
          >
            Use Cases
          </a>
          <a
            className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base text-text-secondary-light dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500"
            href="#"
          >
            Integrations
          </a>
          <a
            className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base text-text-secondary-light dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500"
            href="#"
          >
            Reviews
          </a>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProductOverview product={product} />
        <RatingSummary product={product} />
      </div>
    </div>
  );
}

function RatingSummary({ product }: { product: any }) {
  const ratingData = [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="bg-card-light dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <p className="text-lg font-bold text-text-light dark:text-white mb-4">
        Customer Ratings
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            {product.rating?.toFixed(1) || "N/A"}
          </p>
          <div className="flex gap-0.5 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-lg"
                style={{
                  fontVariationSettings:
                    i < Math.floor(product.rating || 0) ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                star
              </span>
            ))}
          </div>
          <p className="text-text-light dark:text-gray-300 text-base font-normal leading-normal">
            {product.reviews?.toLocaleString()} reviews
          </p>
        </div>
        <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
          {ratingData.map((data) => (
            <div key={data.stars} className="contents">
              <p className="text-text-light dark:text-gray-300 text-sm font-normal leading-normal">
                {data.stars}
              </p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700">
                <div
                  className="rounded-full bg-primary"
                  style={{ width: `${data.percentage}%` }}
                ></div>
              </div>
              <p className="text-text-secondary-light dark:text-gray-400 text-sm font-normal leading-normal text-right">
                {data.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}