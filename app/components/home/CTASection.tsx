import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="">
      <div className="">
        <div className="bg-primary/10 dark:bg-primary/20 p-8 md:p-16 text-center">
          <div className="max-w-2xl mx-auto flex flex-col py-12 items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Join hundreds of innovative companies automating their success
              with Flowo. Get started today and see the difference.
            </p>
            <Link href="/products">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-colors">
                Get Started with Flowo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}