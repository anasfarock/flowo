import React from "react";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                Automate Your Workflow, Unleash Your Potential.
              </h1>
              <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Harness the power of AI to streamline repetitive tasks and
                drive business growth.
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-colors">
                Explore Automations
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-base font-bold tracking-wide hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                Watch a Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBP42Wg2x3oirW0Efg0HNleD0SnSNmqxp3wPowqwRG0GezlXtacqaN7gZZov5F_D_F8zY7bGhhgzJUv1p5r1iJDOQqfEvE5nyy0O5XRW46LF51jnqwYHpDavfLqAa3xApsYlnmZTpCqn2GL4-Zj2UUsTjzy3DgHNfCcv-pKsWSFMEQWY6RTYPATB_oqWaoEY_qoClxXTblkqQ3_v5SZuLzOAyxv1N3jobhHIx7aPUyyxTFmteQo3H7t4rzd2Ljs9eTHCwOAOLCyZj0")',
            }}
            aria-label="Abstract graphic representing data flow and automation"
          />
        </div>
      </div>
    </section>
  );
}