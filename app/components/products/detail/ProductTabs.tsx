"use client";

import { useState } from "react";

interface Product {
  id: string;
  title: string;
  overview: string;
  features: string[];
  integrations: string[];
  content: string;
}

interface ProductTabsProps {
  product: Product;
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "use-cases", label: "Use Cases" },
  { id: "integrations", label: "Integrations" },
  { id: "reviews", label: "Reviews" },
];

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="mt-12 lg:mt-16">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav aria-label="Tabs" className="flex -mb-px space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base transition-colors ${
                activeTab === tab.id
                  ? "text-primary border-primary"
                  : "text-text-secondary-light dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {activeTab === "overview" && (
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">
              Unlock Your Data Instantly
            </h3>
            <div className="space-y-4 text-text-secondary-light dark:text-gray-300">
              <p>{product.overview}</p>
              <ul className="list-disc pl-5 space-y-2 mt-6">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.split(":")[0]}:</strong>{" "}
                    {feature.split(":")[1]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-text-light dark:text-white mb-6">
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <p className="text-text-light dark:text-text-dark">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "integrations" && (
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-text-light dark:text-white mb-6">
              Supported Integrations
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700"
                >
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="font-medium text-text-light dark:text-text-dark">
                    {integration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "use-cases" && (
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">
              Common Use Cases
            </h3>
            <div className="space-y-4 text-text-secondary-light dark:text-gray-300">
              <p>
                This product is designed for various use cases across different
                industries:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Finance & Accounting: Invoice and receipt processing</li>
                <li>HR & Recruitment: Resume and application screening</li>
                <li>
                  Legal: Contract review and data extraction
                </li>
                <li>Customer Service: Form and feedback processing</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">
              Customer Reviews
            </h3>
            <div className="space-y-4 text-text-secondary-light dark:text-gray-300">
              <p>
                Coming soon: Customer reviews and testimonials will appear here.
              </p>
            </div>
          </div>
        )}

        {/* Rating Summary Sidebar */}
        <div className="md:col-span-1">
          <RatingSummary product={product} />
        </div>
      </div>
    </div>
  );
}

function RatingSummary({ product }: { product: Product }) {
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