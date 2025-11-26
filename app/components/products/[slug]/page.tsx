import { getProductBySlug, getProductSlugs } from "../../../lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

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

export default async function ProductPage({
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
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 dark:from-primary/5 to-transparent py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 text-sm font-medium"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            Back to Products
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Product Info */}
            <div className="flex-1">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 dark:bg-primary/20 text-primary">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
                {product.title}
              </h1>

              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-6">
                {product.shortDescription}
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {product.price}
                  </p>
                </div>

                {product.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(product.rating!)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold">
                        {product.rating}
                        <span className="text-gray-500 text-sm">/5</span>
                      </p>
                      {product.reviews && (
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          ({product.reviews} reviews)
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors">
                <span>Get Started</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            {/* Right: Product Image */}
            <div className="flex-1 w-full">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-10 bg-card-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed whitespace-pre-wrap">
              {product.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-card-light dark:bg-card-dark">
                <span className="text-primary text-xl font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-text-light dark:text-text-dark">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-10 bg-card-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Integrations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.integrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-background-light dark:bg-card-dark border border-gray-200 dark:border-gray-700"
              >
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <span className="font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-primary/10 dark:bg-primary/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
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

      {/* Markdown Content */}
      {product.content && (
        <section className="py-12 px-4 sm:px-6 lg:px-10 bg-card-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto prose dark:prose-invert max-w-none">
            <ReactMarkdown>{product.content}</ReactMarkdown>
          </div>
        </section>
      )}
    </main>
  );
}