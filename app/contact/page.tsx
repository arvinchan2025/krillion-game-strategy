import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Contact Krillion Guide", "Contact the editorial team about corrections, feedback, or website questions.", "/contact");

export default function ContactPage() {
  return <Container className="py-16"><p className="eyebrow">Get in touch</p><h1 className="section-title mt-2">Contact</h1><p className="mt-5 max-w-2xl leading-7 text-slate-400">For corrections, feedback, or editorial questions, replace the placeholder address below with an email address you control before publishing.</p><a className="mt-6 inline-flex rounded-full border border-ocean-400/30 bg-ocean-500/10 px-5 py-3 text-sm font-bold text-ocean-300" href="mailto:hello@example.com">hello@example.com</a><p className="mt-4 text-xs text-slate-500">Important: update this email address before production deployment.</p></Container>;
}
