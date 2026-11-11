import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Krillion FAQ – Game Questions & Answers", "Independent answers to common questions about Krillion, with links to the creator's official FAQ.", "/faq");

const questions = [
  ["How is the answer set curated?", "The creator says answer sets are assembled by aggregating and cleaning relevant datasets such as dictionaries, wiki pages and encyclopedias. The exact sources depend on the question."],
  ["How is rarity determined?", "According to the official FAQ, some prompts can be scored mechanically using a familiarity database. Other prompts need a combination of LLM assistance and manual review."],
  ["Why can the Krillion be less rare than another answer?", "The creator says the top answer is not selected by rarity alone. At deeper levels, fun factor and whether an answer is satisfying for players also matter."],
  ["Why might an answer not be listed?", "The creator acknowledges that a source can be missed, which can cause a fair answer to be absent from the accepted answer set."],
  ["Why does the Puffer Party timer feel random?", "The official FAQ says the default hidden fuse is randomly selected between 10 and 30 seconds. It is shared across the room and continues while the puffer is passed."],
  ["Do purchases remove ads?", "The official FAQ says that unlocking any pack turns ads off across the official site, and that linking a Google account carries the unlock to other devices."]
];

export default function FAQPage() {
  return <Container className="py-16"><p className="eyebrow">Questions answered</p><h1 className="section-title mt-2">Krillion FAQ</h1><p className="mt-4 max-w-2xl leading-7 text-slate-400">This summary is based on the creator’s <a className="text-ocean-400 underline" href="https://krillion.io/faq" target="_blank" rel="noopener noreferrer">official FAQ</a>. For the latest wording, refer to the source.</p><div className="mt-8 max-w-3xl divide-y divide-white/10 border-y border-white/10">{questions.map(([q, a]) => <section key={q} className="py-6"><h2 className="text-lg font-bold text-white">{q}</h2><p className="mt-3 leading-7 text-slate-400">{a}</p></section>)}</div><p className="mt-6 text-xs text-slate-500">Last checked: November 11, 2026. Game details may change.</p></Container>;
}
