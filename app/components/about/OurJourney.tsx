interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2021",
    title: "Flowo is Born",
    description:
      "A small team with a big idea starts building the future of automation.",
    icon: "flag",
  },
  {
    year: "2022",
    title: "First Major Client",
    description:
      "Our first enterprise partner validates our vision and technology.",
    icon: "handshake",
  },
  {
    year: "2023",
    title: "Series A Funding",
    description:
      "Secured investment to accelerate our growth and product development.",
    icon: "monitoring",
  },
  {
    year: "2024",
    title: "1,000+ Automations Deployed",
    description:
      "Celebrating a major milestone in driving efficiency for our customers.",
    icon: "verified",
  },
];

export default function OurJourney() {
  return (
    <div className="py-10">
      <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-8 pt-5 text-center">
        Our Journey So Far
      </h2>
      <div className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6 px-4">
        {timelineEvents.map((event, index) => (
          <div key={index}>
            {/* Timeline Marker */}
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="text-secondary">
                <span className="material-symbols-outlined">{event.icon}</span>
              </div>
              {index < timelineEvents.length - 1 && (
                <div className="w-[2px] bg-gray-200 dark:bg-gray-700 h-full grow"></div>
              )}
            </div>

            {/* Timeline Content */}
            <div
              className={`flex flex-1 flex-col ${
                index === 0
                  ? "pb-10 pt-2"
                  : index === timelineEvents.length - 1
                    ? "pt-10 pb-2"
                    : "py-10"
              }`}
            >
              <p className="text-text-light dark:text-text-dark text-sm sm:text-base font-medium leading-normal">
                {event.year}
              </p>
              <p className="text-primary dark:text-white text-base sm:text-lg font-medium leading-normal">
                {event.title}
              </p>
              <p className="text-text-light dark:text-text-dark text-base">
                {event.description}
              </p>
            </div>

            {/* Vertical Line for next event */}
            {index < timelineEvents.length - 1 && (
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-gray-200 dark:bg-gray-700 h-full grow"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}