import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Terms of Use", "Terms of use for Krillion Guide.", "/terms");

export default function TermsPage() {
  return <Container className="py-16"><p className="eyebrow">Legal</p><h1 className="section-title mt-2">Terms of use</h1><p className="mt-3 text-xs text-slate-500">Template — review and adapt before launch.</p><div className="prose prose-invert mt-8 max-w-3xl"><h2>Independent fan resource</h2><p>Krillion Guide is an independent fan-made information resource. It is not affiliated with, endorsed by, or sponsored by Krillion or its creator.</p><h2>Accuracy</h2><p>Game features, modes, availability, and rules may change. Content is provided for general informational purposes and should be checked against the live official game.</p><h2>Intellectual property</h2><p>Third-party names and marks belong to their respective owners. Do not assume that this website has permission to reproduce official artwork, logos, game code, question banks, or other protected materials.</p><h2>External links</h2><p>Links to third-party websites are provided for convenience. We do not control their content or policies.</p><h2>Contact</h2><p>Replace hello@example.com with your real contact address before publication.</p></div></Container>;
}
