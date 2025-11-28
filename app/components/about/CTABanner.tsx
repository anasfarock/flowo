import Link from "next/link";

export default function CTABanner() {
  return (
    <div className="w-full my-16 sm:my-24">
      <div className="flex flex-col items-center justify-between gap-8 rounded-xl bg-primary text-white p-10 text-center md:flex-row md:text-left">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 max-w-2xl">
            See how Flowo's intelligent automation can drive growth, efficiency,
            and innovation for your team.
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <Link href="/products">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <span className="truncate">See Our Solutions</span>
            </button>
          </Link>
          {/* <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/20 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/30 transition-colors">
            <span className="truncate">Get a Demo</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}