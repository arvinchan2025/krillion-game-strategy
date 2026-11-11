import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, Lightbulb, Waves } from "lucide-react";
import type { GuideMeta } from "@/lib/content";

const icons = [BookOpen, Lightbulb, Compass, Waves];

export function GuideCard({ guide, index = 0 }: { guide: GuideMeta; index?: number }) {
  const Icon = icons[index % icons.length];
  return (
    <Link href={`/guides/${guide.slug}`} className="group rounded-2xl border border-white/10 bg-white/[.035] p-5 transition hover:-translate-y-1 hover:border-ocean-500/50 hover:bg-white/[.06]">
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ocean-500/10 text-ocean-400"><Icon size={21} /></span>
        <ArrowUpRight className="text-slate-600 transition group-hover:text-ocean-400" size={18} />
      </div>
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-ocean-400">{guide.category}</p>
      <h3 className="mt-2 text-lg font-bold text-white">{guide.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{guide.description}</p>
      <p className="mt-4 text-xs text-slate-500">{guide.readingTime || "Guide"} · Updated {guide.updatedAt}</p>
    </Link>
  );
}
