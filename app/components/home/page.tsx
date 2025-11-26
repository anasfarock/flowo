import Header from "../common/Header";
import HeroSection from "./HeroSection";
import TrustedBy from "./TrustedBy";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";
import Footer from "../common/Footer";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}