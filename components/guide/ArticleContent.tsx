import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";

const components = {
  h2: (props: { children?: ReactNode }) => <h2 className="mt-10 scroll-mt-24 text-2xl font-bold text-white" {...props} />,
  h3: (props: { children?: ReactNode }) => <h3 className="mt-7 text-xl font-bold text-white" {...props} />,
  p: (props: { children?: ReactNode }) => <p className="mt-4 leading-8 text-slate-300" {...props} />,
  ul: (props: { children?: ReactNode }) => <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-300" {...props} />,
  ol: (props: { children?: ReactNode }) => <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-300" {...props} />,
  li: (props: { children?: ReactNode }) => <li {...props} />,
  a: (props: { href?: string; children?: ReactNode }) => <a className="text-ocean-400 underline decoration-ocean-500/40 underline-offset-4 hover:text-ocean-300" {...props} />,
  blockquote: (props: { children?: ReactNode }) => <blockquote className="mt-6 border-l-2 border-ocean-500 pl-5 italic text-slate-400" {...props} />,
  strong: (props: { children?: ReactNode }) => <strong className="font-bold text-white" {...props} />
};

export async function ArticleContent({ source }: { source: string }) {
  const { content } = await compileMDX({ source, components });
  return <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24">{content}</div>;
}
