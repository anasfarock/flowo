interface Product {
  id: string;
  title: string;
  shortDescription: string;
  price: string;
  rating?: number;
  reviews?: number;
}

interface ProductInfoCardProps {
  product: Product;
}

export default function ProductInfoCard({ product }: ProductInfoCardProps) {
  const renderStars = (rating?: number) => {
    if (!rating) return null;
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-0.5 text-yellow-500">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <span
                key={i}
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            );
          } else if (i === fullStars && hasHalf) {
            return (
              <span
                key={i}
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star_half
              </span>
            );
          } else {
            return (
              <span key={i} className="material-symbols-outlined text-lg">
                star
              </span>
            );
          }
        })}
      </div>
    );
  };

  const priceValue = product.price.split("/")[0]?.trim() || product.price;
  const pricePeriod = product.price.split("/")[1]?.trim() || "month";

  return (
    <div className="lg:col-span-2">
      <div className="flex flex-col gap-6 p-6 bg-card-light dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Page Heading */}
        <div className="flex flex-col gap-3">
          <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            {product.title}
          </p>
          <p className="text-text-secondary-light dark:text-gray-300 text-base font-normal leading-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-3 text-sm">
            {renderStars(product.rating)}
            <span className="font-bold text-text-light dark:text-white">
              {product.rating}
            </span>
            <span className="text-text-secondary-light dark:text-gray-400">
              ({product.reviews?.toLocaleString()} reviews)
            </span>
          </div>
        )}

        {/* Pricing */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="text-sm text-text-secondary-light dark:text-gray-400 mb-1">
            Starting from
          </p>
          <p className="text-4xl font-bold text-text-light dark:text-white">
            {priceValue}
            <span className="text-lg font-medium text-text-secondary-light dark:text-gray-400">
              /{pricePeriod}
            </span>
          </p>
          <a
            className="text-sm text-primary hover:underline mt-2 inline-block transition-all"
            href="#pricing"
          >
            View all pricing plans
          </a>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors">
            Request a Demo
          </button>
          <button className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 text-base font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}