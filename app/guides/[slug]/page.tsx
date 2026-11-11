import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3 } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { AdSlot } from "@/components/ads/AdSlot";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.meta.title,
    description: guide.meta.description,
    alternates: { canonical: `${siteConfig.url}/guides/${slug}` },
    openGraph: { title: guide.meta.title, description: guide.meta.description, type: "article", publishedTime: guide.meta.publishedAt, modifiedTime: guide.meta.updatedAt }
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="mt-10 text-2xl font-bold text-white" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="mt-7 text-xl font-bold text-white" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mt-4 leading-8 text-slate-300" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-300" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-300" {...props} />,
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-ocean-400 underline underline-offset-4" {...props} />,
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => <blockquote className="mt-6 border-l-2 border-ocean-500 pl-5 italic text-slate-400" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-bold text-white" {...props} />
};

export default async function GuideArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const { content } = await compileMDX({ source: guide.content, components: mdxComponents });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.meta.title,
    description: guide.meta.description,
    datePublished: guide.meta.publishedAt,
    dateModified: guide.meta.updatedAt,
    author: { "@type": "Organization", name: siteConfig.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/guides/${slug}`
  };
  return <Container className="py-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-ocean-400"><ArrowLeft size={15} /> All guides</Link>
    <div className="mx-auto mt-8 max-w-3xl">
      <p className="eyebrow">{guide.meta.category}</p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-white md:text-5xl">{guide.meta.title}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-400">{guide.meta.description}</p>
      <div className="mt-5 flex items-center gap-2 text-xs text-slate-500"><Clock3 size={14} /> {guide.meta.readingTime || "Guide"} <span>·</span> Updated {guide.meta.updatedAt}</div>
      <AdSlot />
      <article className="mt-8">{content}</article>
      <AdSlot />
      <div className="mt-12 rounded-2xl border border-white/10 bg-white/[.03] p-6"><h2 className="text-lg font-bold text-white">Keep exploring</h2><p className="mt-2 text-sm leading-6 text-slate-400">Visit the official game for the current experience. This guide is independently written and may not reflect every future update.</p><a href={siteConfig.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full bg-ocean-500 px-5 py-2.5 text-sm font-bold text-ocean-950 hover:bg-ocean-400">Play Krillion ↗</a></div>
    </div>
  </Container>;
}
