import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("About Krillion Guide", "Learn about this independent Krillion fan guide and its editorial approach.", "/about");

export default function AboutPage() {
  return <Container className="py-16"><p className="eyebrow">About this project</p><h1 className="section-title mt-2">An independent guide for curious players</h1><div className="prose prose-invert mt-7 max-w-3xl"><p>Krillion Guide is an independently operated fan resource. Its purpose is to explain publicly visible game concepts, summarize official help information with attribution, and publish original learning strategies for open-ended trivia.</p><h2>Editorial approach</h2><p>We distinguish verified statements from general strategy suggestions. When a rule is not confirmed by the official game or its FAQ, we avoid presenting it as fact. We do not claim access to private game data, hidden answer keys, or internal scoring systems.</p><h2>Independence</h2><p>This website is not affiliated with, endorsed by, or sponsored by Krillion or its creator. Krillion is referenced only to identify the game being discussed.</p></div></Container>;
}
