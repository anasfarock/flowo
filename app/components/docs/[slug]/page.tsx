
import { getDocBySlug, getDocSlugs, getAllDocs } from "@/lib/docs";
import { notFound } from "next/navigation";
import DocsSidebar from "../../../components/docs/DocsSidebar";
import DocsContent from "../../../components/docs/DocsContent";
import DocsBreadcrumb from "../../../components/docs/DocsBreadcrumb";

export async function generateStaticParams() {
  const slugs = getDocSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const allDocs = getAllDocs();

  return (
    <main className="flex-grow">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <DocsSidebar docs={allDocs} activeSlug={slug} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Breadcrumb */}
          <DocsBreadcrumb doc={doc} />

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <DocsContent doc={doc} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}