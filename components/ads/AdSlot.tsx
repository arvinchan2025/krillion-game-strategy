"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * AdSense placeholder is intentionally disabled by default.
 * Enable only after site approval, add a real ad slot ID, and review consent requirements.
 */
export function AdSlot({ slot, label = "Advertisement" }: { slot?: string; label?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" && Boolean(client && slot);

  useEffect(() => {
    if (!enabled) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers and consent tools may prevent the ad request; do not interrupt page content.
    }
  }, [enabled]);

  if (!enabled) {
    return (
      <div className="my-8 rounded-2xl border border-dashed border-white/10 bg-white/[.02] px-4 py-5 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-600">{label} · placeholder</span>
      </div>
    );
  }

  return (
    <div className="my-8 overflow-hidden text-center">
      <span className="mb-2 block text-[10px] uppercase tracking-widest text-slate-600">{label}</span>
      <ins className="adsbygoogle block" style={{ display: "block" }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
    </div>
  );
}
