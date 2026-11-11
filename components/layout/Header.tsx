import Link from "next/link";
import { Waves, Menu } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ocean-950/90 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Krillion Guide home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ocean-500 text-ocean-950 shadow-glow">
            <Waves size={21} strokeWidth={2.5} />
          </span>
          <span className="font-black tracking-[.13em] text-white">KRILLION <span className="text-ocean-400">GAME STRATEGY</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-ocean-400">
              {item.label}
            </Link>
          ))}
          <a href={siteConfig.officialUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ocean-500 px-4 py-2 text-sm font-bold text-ocean-950 transition hover:bg-ocean-400">
            Play Krillion ↗
          </a>
        </nav>
        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 text-white">
            <Menu size={20} />
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-2xl border border-white/10 bg-ocean-900 p-3 shadow-2xl">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5">{item.label}</Link>)}
            <a href={siteConfig.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-lg bg-ocean-500 px-3 py-2 text-center text-sm font-bold text-ocean-950">Play Krillion ↗</a>
          </div>
        </details>
      </div>
    </header>
  );
}
