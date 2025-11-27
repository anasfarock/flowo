export default function MissionVision() {
  return (
    <div className="flex flex-col gap-10 py-10 @container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Card */}
        <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-primary/10 p-6 flex-col">
          <div className="text-secondary">
            <span className="material-symbols-outlined !text-4xl">
              rocket_launch
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary dark:text-white text-xl font-bold leading-tight">
              Our Mission
            </h2>
            <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed">
              To empower organizations of all sizes to automate their most
              complex processes, freeing up human potential to focus on
              creativity, strategy, and high-value growth.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-primary/10 p-6 flex-col">
          <div className="text-secondary">
            <span className="material-symbols-outlined !text-4xl">
              visibility
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary dark:text-white text-xl font-bold leading-tight">
              Our Vision
            </h2>
            <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed">
              To create a world where intelligent automation is seamlessly
              integrated into every business, fostering a new era of
              productivity, innovation, and human achievement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}