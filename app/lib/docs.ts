"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface DocMetadata {
  title: string;
  description?: string;
  order?: number;
}

export interface Doc extends DocMetadata {
  slug: string;
  content: string;
  headings: DocHeading[];
}

export interface DocHeading {
  id: string;
  level: number;
  text: string;
}

export interface DocCategory {
  title: string;
  slug: string;
  docs: DocMetadata & { slug: string };
}

const docsDirectory = path.join(process.cwd(), "public/docs");

export async function getDocSlugs(): Promise<string[]> {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(docsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getDocBySlug(slug: string): Promise<Doc | null> {
  try {
    const filePath = path.join(docsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract headings from markdown
    const headings = extractHeadings(content);

    return {
      slug,
      content,
      headings,
      ...(data as DocMetadata),
    };
  } catch (error) {
    console.error(`Error reading doc file: ${slug}`, error);
    return null;
  }
}

export async function getAllDocs(): Promise<Doc[]> {
  const slugs = await getDocSlugs();
  const docs = await Promise.all(
    slugs.map((slug) => getDocBySlug(slug))
  );
  return docs
    .filter((doc) => doc !== null)
    .sort((a, b) => {
      const orderA = a?.order || 999;
      const orderB = b?.order || 999;
      return orderA - orderB;
    }) as Doc[];
}

export async function getDocsByCategory(category: string): Promise<Doc[]> {
  const docs = await getAllDocs();
  return docs.filter((doc) => doc.slug.startsWith(category));
}

export async function getCategories(): Promise<string[]> {
  const docs = await getAllDocs();
  const categories = new Set<string>();

  docs.forEach((doc) => {
    const parts = doc.slug.split("/");
    if (parts.length > 1) {
      categories.add(parts[0]);
    }
  });

  return Array.from(categories).sort();
}

function extractHeadings(markdown: string): DocHeading[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: DocHeading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ id, level, text });
  }

  return headings;
}

export async function groupDocsByCategory(): Promise<Record<string, Doc[]>> {
  const docs = await getAllDocs();
  const grouped: Record<string, Doc[]> = {};

  docs.forEach((doc) => {
    const parts = doc.slug.split("/");
    const category = parts.length > 1 ? parts[0] : "General";

    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(doc);
  });

  return grouped;
}