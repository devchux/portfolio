import type { Metadata } from "next";
import { ContactSection } from "./_components/contact-section";
import { EducationList } from "./_components/education-list";
import { ExperienceItem } from "./_components/experience-item";
import { MotionPage } from "./_components/motion-primitives";
import { PortfolioShell } from "./_components/portfolio-shell";
import { ProjectList } from "./_components/project-list";
import { Section } from "./_components/section";
import { SkillList } from "./_components/skill-list";
import { education, experiences, projects, skillGroups } from "./_data/profile";
import { absoluteUrl } from "./seo";

export const metadata: Metadata = {
  title: "Chukwudi Eze - Full-Stack Software Engineer",
  description:
    "Chukwudi Eze is a full-stack software engineer in Lagos building scalable customer intelligence platforms, fintech products, enterprise systems, and AI-powered workflows with React, Next.js, TypeScript, NestJS, and PostgreSQL.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: absoluteUrl("/"),
    title: "Chukwudi Eze - Full-Stack Software Engineer",
    description:
      "Explore the full-stack software engineering experience, React and Next.js projects, TypeScript skills, and AI engineering work of Chukwudi Eze.",
  },
  twitter: {
    title: "Chukwudi Eze - Full-Stack Software Engineer",
    description:
      "Explore the full-stack software engineering experience, React and Next.js projects, TypeScript skills, and AI engineering work of Chukwudi Eze.",
  },
};

export default function Home() {
  return (
    <PortfolioShell>
      <MotionPage className="mt-8 space-y-14 lg:mt-37 lg:space-y-16">
        <Section title="Experience">
          <div>
            {experiences.map((experience) => (
              <ExperienceItem experience={experience} key={`${experience.company}-${experience.period}`} />
            ))}
          </div>
        </Section>

        <Section title="Projects" className="scroll-mt-10" id="projects">
          <ProjectList projects={projects} />
        </Section>

        <Section title="Skills">
          <div className="grid grid-cols-2 gap-8 md:gap-x-14 md:gap-y-12">
            {skillGroups.map((group) => (
              <SkillList group={group} key={group.title} />
            ))}
          </div>
        </Section>

        <Section title="Education">
          <EducationList education={education} />
        </Section>

        <ContactSection>
          I am interested in full-stack software engineering roles where speed, craft, and thoughtful systems matter.
        </ContactSection>
      </MotionPage>
    </PortfolioShell>
  );
}
