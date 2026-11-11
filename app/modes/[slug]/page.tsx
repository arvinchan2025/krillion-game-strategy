import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

const modeData: Record<string, { title: string; description: string; details: string[] }> = {
  "daily-dive": { title: "Daily Dive", description: "Daily Dive is one of the primary modes linked from the official Krillion homepage.", details: ["Open the official Krillion site to see the current daily experience.", "This guide does not publish live answers or claim to know the hidden answer set.", "Check the in-game instructions because rules and presentation can change."] },
  "unlimited": { title: "Unlimited", description: "Unlimited is a mode linked from the official Krillion navigation.", details: ["Use the official game interface for current availability and rules.", "Treat each prompt as an exercise in careful reading and broad brainstorming.", "This page intentionally avoids making unsupported claims about round counts or scoring."] },
  "puffer-party": { title: "Puffer Party", description: "Puffer Party is a party-style mode. The official FAQ describes a shared random fuse timer.", details: ["Under the default settings, the hidden fuse is randomly set between 10 and 30 seconds.", "The timer is shared across the room and continues counting down when the puffer is passed.", "If fewer than 8 seconds remain when it is passed, the next turn starts with 8 seconds.", "After a pop, a new random fuse begins.", "The creator says lag or Wi-Fi delay can make the on-screen timer appear out of sync."] },
  "archive": { title: "Archive", description: "Archive appears as a navigation destination on the official Krillion homepage.", details: ["Open the official site to inspect the current archive experience.", "Archived content and access rules may change.", "This independent guide does not mirror the official archive."] },
  "themed-packs": { title: "Themed Packs", description: "The official site links to themed packs, and its FAQ discusses future pack development.", details: ["The creator says the current focus includes improving answer-set curation and rarity selection.", "The FAQ indicates more packs may follow that work.", "For current pack availability and purchase terms, use the official site."] }
};

export function generateStaticParams() { return Object.keys(modeData).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const mode = modeData[slug];
  return mode ? { title: `${mode.title} Guide`, description: mode.description, alternates: { canonical: `${siteConfig.url}/modes/${slug}` } } : {};
}

export default async function ModePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mode = modeData[slug];
  if (!mode) notFound();
  return <Container className="py-16"><p className="eyebrow">Game mode</p><h1 className="section-title mt-2">{mode.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">{mode.description}</p><div className="mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[.035] p-6"><h2 className="text-lg font-bold text-white">What we can verify</h2><ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-300">{mode.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div><p className="mt-8 text-sm text-slate-500">Source: <a className="text-ocean-400 underline" href="https://krillion.io/faq" target="_blank" rel="noopener noreferrer">Official Krillion FAQ</a> and official site navigation. Please verify current details in-game.</p><a href={siteConfig.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-ocean-500 px-5 py-3 text-sm font-bold text-ocean-950">Visit official game ↗</a></Container>;
}
