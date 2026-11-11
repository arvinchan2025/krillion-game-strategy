import { Container } from "@/components/layout/Container";
import { GuideCard } from "@/components/guide/GuideCard";
import { AdSlot } from "@/components/ads/AdSlot";
import { getAllGuides } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Krillion Game Guides", "Browse beginner guides, rules, answer rarity explanations and practical strategies for Krillion.", "/guides");

export default function GuidesPage() {
  const guides = getAllGuides();
  return <Container className="py-16"><p className="eyebrow">Knowledge base</p><h1 className="section-title mt-2">Krillion game guides</h1><p className="mt-4 max-w-2xl leading-7 text-slate-400">Independent explainers to help you understand the game and think more deliberately about open-ended trivia prompts.</p><AdSlot /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{guides.map((guide, index) => <GuideCard key={guide.slug} guide={guide} index={index} />)}</div></Container>;
}
