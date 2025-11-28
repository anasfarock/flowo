import { getDocBySlug, getDocSlugs, groupDocsByCategory } from "../../lib/docs";
import { notFound } from "next/navigation";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DocsSidebar from "../../components/docs/DocsSidebar";
import DocsContent from "../../components/docs/DocsContent";
import DocsBreadcrumb from "../../components/docs/DocsBreadcrumb";

export async function generateStaticParams() {
  const slugs = await getDocSlugs();
  return slugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = slug.join("/");
  const doc = await getDocBySlug(slugStr);

  if (!doc) {
    return {
      title: "Documentation Not Found - Flowo",
    };
  }

  return {
    title: `${doc.title} - Flowo Docs`,
    description: doc.description || `Documentation for ${doc.title}`,
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = slug.join("/");
  const doc = await getDocBySlug(slugStr);

  if (!doc) {
    notFound();
  }

  const grouped = await groupDocsByCategory();

  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 lg:flex-shrink-0">
              <DocsSidebar grouped={grouped} activeSlug={slugStr} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Breadcrumb */}
              <DocsBreadcrumb doc={doc} />

              {/* Content Area */}
              <div className="flex-1">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <DocsContent doc={doc} />
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
