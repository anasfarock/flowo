interface Product {
  features: string[];
}

interface ProductFeaturesProps {
  product: Product;
}

export default function ProductFeatures({ product }: ProductFeaturesProps) {
  if (!product.features || product.features.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-8">
          Key Features
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700"
            >
              <span className="text-primary text-xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-text-light dark:text-text-dark">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}