import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getAllGuides } from "@/lib/content";
import { GuideCard } from "@/components/guide/GuideCard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Krillion Strategy & Tips", "Practical thinking frameworks for open-ended trivia, answer discovery and Krillion strategy.", "/strategy");

export default function StrategyPage() {
  const guides = getAllGuides().filter((g) => g.category.toLowerCase().includes("strategy"));
  return <Container className="py-16"><p className="eyebrow">Play thoughtfully</p><h1 className="section-title mt-2">Strategy & tips</h1><p className="mt-4 max-w-2xl leading-7 text-slate-400">Build a repeatable brainstorming process. The goal is not to guess hidden answers, but to generate valid, less-obvious candidates while checking the prompt carefully.</p><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{guides.map((g, i) => <GuideCard key={g.slug} guide={g} index={i} />)}</div><div className="mt-12 rounded-2xl border border-ocean-500/20 bg-ocean-500/5 p-6"><h2 className="text-xl font-bold text-white">Try a structured brainstorm</h2><p className="mt-2 text-sm leading-6 text-slate-400">For any prompt, write down the obvious answers first, then deliberately switch domains: geography, biology, history, culture, specialist vocabulary and regional names.</p><Link href="/guides/rare-answer-strategy" className="mt-4 inline-flex text-sm font-bold text-ocean-400">Read the strategy guide →</Link></div></Container>;
}
