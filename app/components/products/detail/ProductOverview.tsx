interface Product {
  id: string;
  title: string;
  overview: string;
  features: string[];
}

interface ProductOverviewProps {
  product: Product;
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  return (
    <div className="md:col-span-2 prose prose-lg dark:prose-invert max-w-none">
      <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">
        Unlock Your Data Instantly
      </h3>
      <p className="text-text-secondary-light dark:text-gray-300">
        {product.overview}
      </p>
      {product.features && product.features.length > 0 && (
        <ul className="list-disc pl-5 space-y-2 mt-6">
          {product.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="text-text-secondary-light dark:text-gray-300">
              <strong className="text-text-light dark:text-white">
                {feature.split(":")[0]}
              </strong>
              {feature.includes(":") && `: ${feature.split(":")[1]}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}