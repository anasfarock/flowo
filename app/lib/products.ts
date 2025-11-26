import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProductMetadata {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  thumbnail: string;
  overview: string;
  features: string[];
  integrations: string[];
  price: string;
  rating?: number;
  reviews?: number;
}

export interface Product extends ProductMetadata {
  content: string;
  slug: string;
}

const productsDirectory = path.join(process.cwd(), "public/products");

export function getProductSlugs(): string[] {
  if (!fs.existsSync(productsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(productsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getProductBySlug(slug: string): Product | null {
  try {
    const filePath = path.join(productsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as ProductMetadata),
    };
  } catch (error) {
    console.error(`Error reading product file: ${slug}`, error);
    return null;
  }
}

export function getAllProducts(): Product[] {
  const slugs = getProductSlugs();
  return slugs
    .map((slug) => getProductBySlug(slug))
    .filter((product) => product !== null) as Product[];
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getCategories(): string[] {
  const products = getAllProducts();
  const categories = new Set(products.map((p) => p.category));
  return Array.from(categories).sort();
}