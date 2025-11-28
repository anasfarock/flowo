import { getAllDocs, groupDocsByCategory } from "../lib/docs";
import DocsSidebar from "../components/docs/DocsSidebar";
import DocsContent from "../components/docs/DocsContent";
import DocsBreadcrumb from "../components/docs/DocsBreadcrumb";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export const metadata = {
  title: "Documentation - Flowo",
  description: "Learn how to use Flowo with our comprehensive documentation.",
};

export default async function DocsPage() {
  const docs = await getAllDocs();
  const grouped = await groupDocsByCategory();
  const firstDoc = docs[0];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Sticky with independent scroll */}
            <div className="lg:w-64 lg:flex-shrink-0">
              <DocsSidebar docs={docs} grouped={grouped} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Breadcrumb */}
              {firstDoc && <DocsBreadcrumb doc={firstDoc} />}

              {/* Content Area */}
              <div className="flex-1">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  {firstDoc ? (
                    <DocsContent doc={firstDoc} />
                  ) : (
                    <div className="text-center py-12">
                      <h1 className="text-3xl font-bold text-text-light dark:text-white mb-4">
                        Documentation
                      </h1>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark">
                        No documentation found. Please create markdown files in
                        public/docs/
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}