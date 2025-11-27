import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import LocationMap from "../components/contact/LocationMap";

export const metadata = {
  title: "Contact Us - Flowo",
  description:
    "Get in touch with Flowo. Fill out the form and a Flowo expert will get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form & Info Section */}
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info & Map */}
            <div className="w-full lg:w-2/5 xl:w-1/3 space-y-8">
              <ContactInfo />
              <LocationMap />
            </div>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}