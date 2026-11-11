
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  ExternalLink,
  Fish,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Trophy,
  Waves,
  HelpCircle,
  RotateCcw,
  Users,
  Layers,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { GuideCard } from "@/components/guide/GuideCard";
import { AdSlot } from "@/components/ads/AdSlot";
import { getAllGuides } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Krillion Game Strategy – Guides, Tips & Game Modes",
  "Explore Krillion game guides, answer strategies, game modes, rarity explanations, and practical tips."
);

const strategies = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Accuracy comes first",
    description:
      "An unusual answer is only useful when it genuinely fits the prompt. Understand the category before trying to find an unexpected answer.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Understand the answer set",
    description:
      "Krillion builds answer sets from sources such as dictionaries, encyclopedias, and other relevant datasets. Think about the exact scope of the question.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Look beyond the obvious",
    description:
      "Consider specific examples and less familiar possibilities, but do not assume that the rarest-sounding answer is automatically the best one.",
  },
];

const gameModes = [
  {
    icon: Waves,
    title: "Daily Dive",
    tag: "Daily challenge",
    description:
      "Take on the daily challenge and see how far your answers can take you.",
    href: siteConfig.officialUrl,
  },
  {
    icon: RotateCcw,
    title: "Unlimited",
    tag: "Keep exploring",
    description:
      "Continue playing beyond the daily challenge with the unlimited mode.",
    href: `${siteConfig.officialUrl}/unlimited`,
  },
  {
    icon: Users,
    title: "Puffer Party",
    tag: "Party game",
    description:
      "Pass the puffer around the room before its shared countdown reaches zero.",
    href: `${siteConfig.officialUrl}/puffer-party`,
  },
  {
    icon: BookOpen,
    title: "Archive",
    tag: "Past dives",
    description:
      "Return to previous daily challenges and revisit dives from the archive.",
    href: `${siteConfig.officialUrl}/archive`,
  },
  {
    icon: Layers,
    title: "Themed Packs",
    tag: "Topic-based play",
    description:
      "Explore themed collections covering subjects such as language, movies, sports, and geography.",
    href: `${siteConfig.officialUrl}/packs`,
  },
];

const faqs = [
  {
    question: "What is Krillion?",
    answer:
      "Krillion is a browser-based trivia game where you answer open-ended prompts. The game evaluates recognized answers and assigns rarity-based scores.",
  },
  {
    question: "How is answer rarity determined?",
    answer:
      "According to the creator, the method depends on the question. Some answer sets use familiarity data, while others involve AI assistance and manual review.",
  },
  {
    question: "Why can a very unusual answer score differently than expected?",
    answer:
      "Rarity is not the only consideration. The creator also considers whether an answer is enjoyable and satisfying as the top result.",
  },
  {
    question: "What is the Too Clever tier?",
    answer:
      "It is intended for answers that technically qualify but are not as uncommon as they might first appear.",
  },
];

export default function HomePage() {
  const guides = getAllGuides()
    .filter((guide) => guide.featured)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_25%,rgba(40,185,168,.2),transparent_38%),radial-gradient(ellipse_at_10%_90%,rgba(23,75,97,.5),transparent_45%)]" />
        <div className="absolute -right-28 top-12 -z-10 h-96 w-96 rounded-full border border-ocean-400/10" />

        <Container className="grid min-h-[590px] items-center gap-10 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-ocean-400/25 bg-ocean-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.17em] text-ocean-400">
              <Sparkles size={13} />
              Independent fan-made guide
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
              Dive deeper.
              <br />
              <span className="text-ocean-400">Think smarter.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Your independent companion to Krillion. Learn how the game
              works, explore its different modes, understand answer rarity,
              and develop a more thoughtful approach to trivia prompts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#guides"
                className="inline-flex items-center gap-2 rounded-full bg-ocean-500 px-6 py-3 font-bold text-ocean-950 transition hover:bg-ocean-400"
              >
                Explore the guides
                <ArrowRight size={17} />
              </Link>

              <a
                href={siteConfig.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-ocean-400/50 hover:text-ocean-400"
              >
                Play official game
                <ExternalLink size={16} />
              </a>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Not affiliated with or endorsed by Krillion or its creator.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[490px]">
            <div className="absolute inset-8 rounded-full bg-ocean-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#16465b] via-[#0b2c40] to-[#071b29] p-6 shadow-glow">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[.2em] text-ocean-100/70">
                <span>Deep sea thinking</span>
                <Waves size={18} />
              </div>

              <div className="relative my-7 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_50%_90%,rgba(40,185,168,.35),transparent_55%),linear-gradient(180deg,#0b2d43,#061a29)]">
                <div className="absolute bottom-0 h-20 w-full bg-[linear-gradient(180deg,transparent,rgba(3,15,24,.8))]" />

                <div className="absolute left-8 top-10 h-2 w-2 rounded-full bg-ocean-400/70 shadow-[0_0_20px_8px_rgba(86,214,194,.2)]" />
                <div className="absolute right-14 top-20 h-1.5 w-1.5 rounded-full bg-white/70" />
                <div className="absolute bottom-12 left-16 h-1 w-1 rounded-full bg-white/50" />

                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-ocean-300/30 bg-ocean-500/10 shadow-[0_0_50px_rgba(40,185,168,.2)]">
                  <Fish
                    size={76}
                    strokeWidth={1.1}
                    className="text-ocean-300"
                  />
                  <span className="absolute -bottom-3 rounded-full border border-ocean-300/30 bg-ocean-900 px-3 py-1 text-[10px] font-bold tracking-widest text-ocean-300">
                    STAY CURIOUS
                  </span>
                </div>

                <div className="absolute bottom-5 right-5 text-right">
                  <div className="text-2xl font-black text-white">∞</div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-400">
                    possibilities
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                {["Explore", "Connect", "Discover"].map((word) => (
                  <div
                    key={word}
                    className="rounded-xl border border-white/10 bg-white/[.04] py-3 text-xs font-semibold text-slate-300"
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Advertisement */}
      <Container className="py-10">
        <AdSlot label="Advertisement" />
      </Container>

      {/* Guides */}
      <section id="guides" className="scroll-mt-24 border-b border-white/10">
        <Container className="py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Learn the game</p>
              <h2 className="section-title">Krillion guides</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                Start with the fundamentals, then explore detailed explanations
                of game mechanics, answer recognition, and rarity.
              </p>
            </div>

            <Link
              href="/guides"
              className="hidden items-center gap-2 text-sm font-bold text-ocean-400 hover:text-ocean-300 sm:flex"
            >
              All guides
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {guides.map((guide, index) => (
              <GuideCard
                key={guide.slug}
                guide={guide}
                index={index}
              />
            ))}
          </div>

          <Link
            href="/guides"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ocean-400 sm:hidden"
          >
            Browse all guides
            <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      {/* Strategy */}
      <section id="strategy" className="scroll-mt-24 border-b border-white/10 bg-white/[.02]">
        <Container className="py-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Play with intention</p>
            <h2 className="section-title">Think beyond the obvious</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              A good Krillion answer is not simply an obscure word. It must
              match the prompt, make sense in context, and be recognized by
              the game.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {strategies.map(({ icon: Icon, number, title, description }) => (
              <article
                key={number}
                className="rounded-2xl border border-white/10 bg-[#0b2433]/70 p-6 transition hover:border-ocean-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ocean-500/10 text-ocean-400">
                    <Icon size={22} />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-slate-600">
                    {number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/strategy"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-ocean-400 hover:text-ocean-300"
          >
            Explore strategy articles
            <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      {/* Game Modes */}
      <section id="modes" className="scroll-mt-24 border-b border-white/10">
        <Container className="py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Choose your dive</p>
              <h2 className="section-title">Explore game modes</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                Krillion offers different ways to play, from the daily
                challenge to themed collections and party-style gameplay.
              </p>
            </div>

            <Link
              href="/modes"
              className="hidden items-center gap-2 text-sm font-bold text-ocean-400 sm:flex"
            >
              All modes
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gameModes.map(({ icon: Icon, title, tag, description, href }) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[.035] p-6 transition hover:border-ocean-500/40 hover:bg-white/[.06]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ocean-500/10 text-ocean-400">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
                  {description}
                </p>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ocean-400 transition group-hover:text-ocean-300"
                >
                  Explore mode
                  <ExternalLink size={14} />
                </a>
              </article>
            ))}
          </div>

          <Link
            href="/modes"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-ocean-400 sm:hidden"
          >
            Explore all game modes
            <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 border-b border-white/10 bg-white/[.02]">
        <Container className="py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Good to know</p>
              <h2 className="section-title">Frequently asked questions</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                A few important details about how Krillion works.
              </p>
            </div>

            <Link
              href="/faq"
              className="hidden items-center gap-2 text-sm font-bold text-ocean-400 sm:flex"
            >
              All questions
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map(({ question, answer }) => (
              <article
                key={question}
                className="rounded-2xl border border-white/10 bg-[#0b2433]/70 p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle
                    size={19}
                    className="mt-0.5 shrink-0 text-ocean-400"
                  />
                  <div>
                    <h3 className="font-bold text-white">{question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/faq"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-ocean-400 sm:hidden"
          >
            Read all FAQs
            <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      {/* Official game CTA */}
      <Container className="py-16">
        <div className="grid gap-8 rounded-3xl border border-ocean-400/20 bg-gradient-to-br from-ocean-800/60 to-ocean-900/30 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="eyebrow">Ready to dive in?</p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Play the original game.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Visit Krillion’s official website to play. This guide is an
              independent learning resource and does not host or reproduce
              the game.
            </p>
          </div>

          <a
            href={siteConfig.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ocean-500 px-6 py-3 font-bold text-ocean-950 hover:bg-ocean-400"
          >
            Visit Krillion
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-8 flex items-start gap-3 text-xs leading-5 text-slate-500">
          <ShieldCheck
            size={17}
            className="mt-0.5 shrink-0 text-ocean-400"
          />
          <p>
            This is an independent fan-made guide. Game features and
            descriptions may change. Always refer to the official website
            for the latest rules and available modes.
          </p>
        </div>
      </Container>
    </>
  );
}
