interface Product {
  title: string;
}

interface ProductCTAProps {
  product: Product;
}

export default function ProductCTA({ product }: ProductCTAProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto bg-primary/10 dark:bg-primary/5 rounded-xl p-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-text-light dark:text-white mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-8">
          Join hundreds of companies using {product.title}
        </p>
        <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors">
          <span>Request a Demo</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}