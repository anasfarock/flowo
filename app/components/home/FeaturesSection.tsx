import React from "react";

const features = [
  {
    icon: "trending_up",
    title: "Boost Productivity",
    description:
      "Automate repetitive tasks and free up your team to focus on high-value work.",
  },
  {
    icon: "task_alt",
    title: "Reduce Errors",
    description:
      "Eliminate human error in manual processes to ensure accuracy and consistency.",
  },
  {
    icon: "stacks",
    title: "Scale Operations",
    description:
      "Effortlessly handle growing workloads without increasing your headcount.",
  },
  {
    icon: "insights",
    title: "Gain Insights",
    description:
      "Leverage AI-driven analytics to make smarter, data-backed decisions.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Unlock the Power of Automation
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover how Flowo can revolutionize your business operations
              with intelligent automation solutions.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-gray-900/50 p-6 text-center items-center hover:border-primary/50 transition-colors"
              >
                {/* Icon */}
                <div className="text-primary bg-primary/10 p-3 rounded-full">
                  <span className="material-symbols-outlined text-3xl inline-block">
                    {feature.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}