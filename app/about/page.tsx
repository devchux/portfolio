import type { Metadata } from "next";
import { ExternalLink, PortfolioShell } from "../_components/profile-layout";
import { absoluteUrl, siteConfig } from "../seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Chukwudi Eze, a software engineer focused on scalable enterprise platforms, customer experience systems, and AI-powered knowledge workflows.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: absoluteUrl("/about"),
    title: `About - ${siteConfig.name}`,
    description:
      "Learn about Chukwudi Eze's engineering background, platform work, AI interests, and product philosophy.",
  },
  twitter: {
    title: `About - ${siteConfig.name}`,
    description:
      "Learn about Chukwudi Eze's engineering background, platform work, AI interests, and product philosophy.",
  },
};

const aboutParagraphs = [
  "I focus on building scalable digital platforms that solve complex operational and customer experience challenges. My work sits at the intersection of software engineering, enterprise systems, and emerging AI technologies, with a strong emphasis on building reliable products that deliver measurable business impact.",
  "Over the past several years, I have led and contributed to the development of high-impact platforms across fintech, insurance, and enterprise environments. My experience spans full-stack engineering, distributed systems, platform architecture, and modern frontend engineering using technologies such as TypeScript, React, Next.js, NestJS, PostgreSQL, Redis, and cloud-native infrastructure.",
  "I currently lead the engineering development of a multi-tenant Voice of Customer platform designed to centralize customer feedback, measure experience metrics at scale, and provide actionable insights for business decision-making across multiple subsidiaries. The platform processes large-scale deployments and analytics workflows while supporting role-based governance, automated survey distribution, and customer insight reporting.",
  "Beyond enterprise software, I am actively building AI-powered systems focused on retrieval-augmented generation (RAG), intelligent knowledge bases, and workflow automation. My growing interest in AI engineering is driven by a belief that intelligent systems will fundamentally reshape how organizations operate, learn, and engage with customers.",
  "My engineering philosophy is rooted in scalability, usability, and long-term thinking. I enjoy solving technically demanding problems, designing systems that can evolve with growth, and building products that balance technical excellence with real-world value.",
  "I am particularly motivated by opportunities to contribute to globally impactful technology ecosystems, collaborate with ambitious teams, and continue advancing work that combines software engineering, AI, and customer-centric innovation.",
];

export default function AboutPage() {
  return (
    <PortfolioShell>
      <div className="mt-8 lg:mt-37">
        <section className="section-rule grid gap-7 pb-20 md:grid-cols-[160px_1fr] md:gap-12 lg:pb-28">
          <h2 className="section-label">About Me</h2>

          <div className="max-w-115 leading-7 tracking-[-0.01em] text-foreground">
            {aboutParagraphs.map((paragraph) => (
              <p className="mb-6 last:mb-0 lg:mb-10" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="section-rule mt-28 scroll-mt-10 pb-16 lg:mt-52 lg:pb-24" id="contact">
          <h2 className="max-w-155 text-[26px] font-semibold leading-tight tracking-[-0.01em] text-foreground lg:text-[42px]">
            Contact me
          </h2>
          <p className="mt-4 max-w-150 text-[15px] leading-7 text-muted lg:mt-5 lg:text-[17px] lg:leading-8">
            Open to product engineering roles, senior frontend work, and full-stack systems where execution quality matters.
          </p>
          <div className="mt-8 text-[15px]">
            <ExternalLink href="mailto:chukwudieze97@gmail.com">Start a conversation</ExternalLink>
          </div>
        </section>
      </div>
    </PortfolioShell>
  );
}
