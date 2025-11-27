import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import OurJourney from "../components/about/OurJourney";
import CoreValues from "../components/about/CoreValues";
import TeamShowcase from "../components/about/TeamShowcase";
import CTABanner from "../components/about/CTABanner";

export const metadata = {
  title: "About Us - Flowo",
  description:
    "Flowo empowers businesses to achieve peak efficiency through intelligent automation solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="layout-content-container flex flex-col w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <AboutHero />

          {/* Mission & Vision */}
          <MissionVision />

          {/* Our Journey */}
          <OurJourney />

          {/* Core Values Section */}
          <CoreValues />

          {/* Team Showcase */}
          <TeamShowcase />

          {/* CTA Banner */}
          <CTABanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
