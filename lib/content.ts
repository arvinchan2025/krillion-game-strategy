import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type GuideMeta = {
  title: string;
  description: string;
  slug: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime?: string;
  featured?: boolean;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getAllGuides(): GuideMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((name) => name.endsWith(".mdx"));
  return files.map((file) => {
    const source = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data } = matter(source);
    return data as GuideMeta;
  }).sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getGuideBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  return { meta: data as GuideMeta, content };
}

export function getAllGuideSlugs() {
  return getAllGuides().map((guide) => guide.slug);
}
