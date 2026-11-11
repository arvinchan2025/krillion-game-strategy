import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata("Krillion Game Modes", "An independent overview of the game modes currently linked from the official Krillion website.", "/modes");

const modes = [
  { name: "Daily Dive", slug: "daily-dive", desc: "The daily challenge entry point shown on the official Krillion homepage. Visit the game for the live prompt and current rules." },
  { name: "Unlimited", slug: "unlimited", desc: "An additional mode linked from the official site. Use it to explore more gameplay beyond the daily entry point." },
  { name: "Puffer Party", slug: "puffer-party", desc: "A party-style mode. The creator’s FAQ explains its shared countdown fuse and turn hand-off behavior." },
  { name: "Archive", slug: "archive", desc: "A navigation item on the official site for exploring earlier game content. Availability and details may change." },
  { name: "Themed Packs", slug: "themed-packs", desc: "The official site links to themed packs. The FAQ says new packs depend on continued work on answer-set curation and rarity selection." }
];

export default function ModesPage() {
  return <Container className="py-16"><p className="eyebrow">Explore the experience</p><h1 className="section-title mt-2">Krillion game modes</h1><p className="mt-4 max-w-2xl leading-7 text-slate-400">These mode names are based on navigation currently visible on the official Krillion site. This independent guide does not host the modes.</p><div className="mt-8 grid gap-4 md:grid-cols-2">{modes.map((m) => <article key={m.slug} className="rounded-2xl border border-white/10 bg-white/[.035] p-6"><h2 className="text-xl font-bold text-white">{m.name}</h2><p className="mt-3 text-sm leading-7 text-slate-400">{m.desc}</p><Link href={`/modes/${m.slug}`} className="mt-5 inline-flex text-sm font-bold text-ocean-400">Read mode notes →</Link></article>)}</div><a href={siteConfig.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-full bg-ocean-500 px-5 py-3 text-sm font-bold text-ocean-950">Open official Krillion ↗</a></Container>;
}
