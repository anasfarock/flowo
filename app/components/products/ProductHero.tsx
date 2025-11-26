import React from "react";

export default function ProductHero() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 text-center">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl text-text-light dark:text-text-dark">
            Automate Your Business. Amplify Your Results.
          </h1>
          <h2 className="text-base font-normal leading-normal sm:text-lg text-text-secondary-light dark:text-text-secondary-dark">
            Discover pre-built AI automations designed to streamline your
            workflows and boost productivity.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
          <span className="truncate">Explore Automations</span>
        </button>
      </div>
    </div>
  );
}