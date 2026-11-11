import {Container} from "@/components/layout/Container";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata("Privacy Policy", "Privacy policy for Krillion Guide.", "/privacy-policy");

export default function PrivacyPage() {
  return <Container className="py-16"><p className="eyebrow">Legal</p><h1 className="section-title mt-2">Privacy
    policy</h1><p className="mt-3 text-xs text-slate-500">Template — review and adapt before launch.</p>
    <div className="prose prose-invert mt-8 max-w-3xl"><h2>Information we collect</h2><p>This website may collect basic
      usage information through analytics tools if configured. Do not enable analytics until you have reviewed the
      applicable consent and privacy requirements for your audience.</p><h2>Cookies and analytics</h2><p>If Google
      Analytics is enabled, Google may use cookies or similar technologies to measure website usage. Configure consent
      controls where required by applicable law.</p><h2>Advertising</h2><p>If Google AdSense is enabled, Google and its
      partners may use cookies or similar technologies to serve, measure, and personalize ads, subject to user consent
      and applicable settings. Advertising is disabled in this starter project by default.</p><h2>Third-party links</h2>
      <p>This site links to the official Krillion website and other third-party resources. Their privacy practices are
        governed by their own policies.</p><h2>Contact</h2><p>Replace hello@example.com with your real contact address
        before publication.</p><h2>Updates</h2><p>Update this policy whenever your data collection, analytics,
        advertising, or legal obligations change.</p></div>
  </Container>;
}
