import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay with Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 -z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                Automate Your Workflow, Unleash Your Potential.
              </h1>
              <h2 className="text-lg md:text-xl text-gray-100">
                Harness the power of AI to streamline repetitive tasks and
                drive business growth.
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-colors">
                Explore Automations
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/20 backdrop-blur-md text-white text-base font-bold tracking-wide hover:bg-white/30 transition-colors border border-white/30">
                Watch a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}