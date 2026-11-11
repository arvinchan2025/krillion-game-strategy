import Link from "next/link";
import { Waves } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#05131d]">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-black tracking-wider text-white"><Waves className="text-ocean-400" /> {siteConfig.name}</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{siteConfig.description}</p>
          <p className="mt-4 max-w-sm text-xs leading-5 text-slate-500">Independent fan-made guide. Not affiliated with, endorsed by, or sponsored by Krillion or its creator.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Explore</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <Link href="/guides" className="hover:text-ocean-400">Game guides</Link>
            <Link href="/strategy" className="hover:text-ocean-400">Strategies</Link>
            <Link href="/modes" className="hover:text-ocean-400">Game modes</Link>
            <Link href="/faq" className="hover:text-ocean-400">FAQ</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Website</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <Link href="/about" className="hover:text-ocean-400">About</Link>
            <Link href="/contact" className="hover:text-ocean-400">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-ocean-400">Privacy policy</Link>
            <Link href="/terms" className="hover:text-ocean-400">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-slate-600">© {new Date().getFullYear()} {siteConfig.name}. Unofficial fan resource.</div>
    </footer>
  );
}
