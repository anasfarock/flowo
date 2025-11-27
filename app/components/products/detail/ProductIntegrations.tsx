interface Product {
  integrations: string[];
}

interface ProductIntegrationsProps {
  product: Product;
}

export default function ProductIntegrations({
  product,
}: ProductIntegrationsProps) {
  if (!product.integrations || product.integrations.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-card-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-8">
          Integrations
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-background-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors"
            >
              <span className="material-symbols-outlined text-primary flex-shrink-0">
                check_circle
              </span>
              <span className="font-medium text-text-light dark:text-text-dark">
                {integration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}