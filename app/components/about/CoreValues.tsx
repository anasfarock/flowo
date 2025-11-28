interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    icon: "groups",
    title: "Customer-Centricity",
    description:
      "Our customers' success is our success. We listen, learn, and build solutions that deliver real value.",
  },
  {
    icon: "emoji_objects",
    title: "Relentless Innovation",
    description:
      "We constantly push the boundaries of what's possible, exploring new technologies to create better solutions.",
  },
  {
    icon: "shield",
    title: "Unwavering Integrity",
    description:
      "We operate with transparency and honesty, building trust with our clients, partners, and team.",
  },
  {
    icon: "hub",
    title: "Radical Collaboration",
    description:
      "The best ideas come from working together. We foster a culture of teamwork and shared purpose.",
  },
];

export default function CoreValues() {
  return (
    <div className="py-16 sm:py-20">
      <div className="flex flex-col gap-4 text-center mb-12">
        <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight">
          Our Core Values
        </h2>
        <p className="text-text-light dark:text-text-dark text-lg max-w-2xl mx-auto">
          The principles that guide our work, our partnerships, and our
          commitment to excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-gray-900/50 p-6 text-center items-center hover:border-primary/50 transition-colors"
          >
            <span className="material-symbols-outlined !text-3xl text-secondary">
              {value.icon}
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary dark:text-white text-lg font-bold">{value.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}