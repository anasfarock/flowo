import React from "react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 md:p-16 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Join hundreds of innovative companies automating their success
              with Flowo. Get started today and see the difference.
            </p>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-colors">
              Get Started with Flowo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}