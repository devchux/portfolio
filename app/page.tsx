import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ExternalLink, PortfolioShell } from "./_components/profile-layout";
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

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  href?: string;
  highlights: string[];
};

type SkillGroup = {
  title: string;
  skills: string[];
};

type Education = {
  school: string;
  credential: string;
  period?: string;
};

type Project = {
  name: string;
  href: string;
  summary: string;
};

const experiences: Experience[] = [
  {
    company: "Leadway",
    role: "Software Engineer",
    location: "Lagos, Nigeria",
    period: "December 2023 - Present",
    href: "https://www.leadway.com/",
    highlights: [
      "Architected and delivered a multi-tenant Voice of Customer platform used by 200K+ customers, improving feedback analysis turnaround by 75%.",
      "Automated survey ingestion and scoring workflows using NestJS and PostgreSQL, increasing team productivity by 60%.",
      "Led Customer.io integration for automated messaging, reducing email delivery errors by 40%.",
    ],
  },
  {
    company: "Viou",
    role: "Software Engineer",
    location: "Lagos, Nigeria",
    period: "January 2022 - December 2023",
    href: "https://vioudigital.com",
    highlights: [
      "Shipped a v1.0 AI-driven content management system, enabling 500+ creatives to access and deliver content with Next.js and Go.",
      "Designed and implemented an interactive GSAP-powered website, boosting user engagement by 30%.",
      "Built an internal analytics dashboard with React, cutting reporting time by 50% and accelerating decision-making.",
      "Implemented SEO improvements that increased organic traffic by 40% in 6 months.",
    ],
  },
  {
    company: "Herconomy",
    role: "Front-end Engineer",
    location: "Lagos, Nigeria",
    period: "February 2020 - March 2022",
    href: "https://herconomy.com",
    highlights: [
      "Developed an enterprise fintech savings application that grew to 100K+ users within the first year.",
      "Integrated an in-house wallet system using React.js, Next.js, and a monorepo architecture to streamline payments.",
      "Improved engagement by 30% through an account statement feature for transaction history summaries.",
    ],
  },
  {
    company: "Clinify EMR",
    role: "Frontend Engineer (Contract)",
    location: "Calgary, Alberta",
    period: "March 2021 - August 2021",
    href: "https://myclinify.com",
    highlights: [
      "Collaborated on an electronic medical record system that improved healthcare provider efficiency by 30%.",
      "Used TypeScript, Node.js, React, Next.js, and Apollo Client across product workflows and documentation.",
      "Reduced support queries by 50% by writing clear technical documentation for product usage and handoff.",
    ],
  },
  {
    company: "Andela (BuildForSDG Cohort 2)",
    role: "Software Engineer (Bootcamp)",
    location: "Remote",
    period: "August 2020 - October 2020",
    href: "https://andela.com",
    highlights: [
      "Co-created a CRM system for managing customer interactions using React, Redux, Node.js, Express, and MongoDB.",
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "GSAP"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express", "Go", "Firebase", "Apollo", "TypeORM"],
  },
  {
    title: "Databases & Infrastructure",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "CI/CD", "AWS"],
  },
  {
    title: "Engineering Practice",
    skills: ["Unit Testing", "Performance Optimization", "SEO", "Agile", "Responsive Design"],
  },
];

const education: Education[] = [
  {
    school: "University of Nigeria, Nsukka",
    credential: "B.Eng. Agricultural and Bioresources Engineering",
    period: "2015 - 2021",
  },
  {
    school: "Google Africa Developer Scholarship (GADS)",
    credential: "Mobile Web Specialist",
    period: "2020",
  },
];

const projects: Project[] = [
  {
    name: "Schoolmates",
    href: "https://newfountainportal.schoolmateglobal.com/auth",
    summary: "End-to-end school management system with role-based access and reporting tools.",
  },
  {
    name: "Viou Digital",
    href: "https://vioudigital.com",
    summary: "Interactive digital studio website with GSAP-powered motion and a polished content-driven experience.",
  },
  {
    name: "React Formid",
    href: "https://www.npmjs.com/package/react-formid",
    summary: "Lightweight schema-based form validation library for React.",
  },
  {
    name: "Previous Portfolio",
    href: "https://www.chukwudieze.com/",
    summary: "Personal portfolio showcasing earlier frontend work, interaction experiments, and selected web projects.",
  },
  {
    name: "PS4",
    href: "https://playstation4.netlify.app/",
    summary: "Pixel-perfect interactive clone of the PlayStation 4 launch page using GSAP and Tailwind.",
  },
  {
    name: "Vinci",
    href: "https://byvinvi.io/",
    summary: "Blockchain platform for content creators; contributed frontend repository and wallet integrations.",
  },
];

function Section({
  title,
  children,
  className = "",
  id,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const sectionId = id ?? title.toLowerCase().replaceAll(" ", "-");

  return (
    <section className={`section-rule ${className}`} aria-labelledby={sectionId} id={id}>
      <h2 id={sectionId} className="section-label">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article className="grid gap-5 border-t border-rule py-7 first:border-t-0 first:pt-0 md:grid-cols-[240px_1fr] md:gap-12">
      <div>
        <h3 className="text-[15px] font-semibold leading-5 text-foreground lg:leading-snug">{experience.role}</h3>
        <p className="mt-3 text-[14px] leading-6 text-muted lg:mt-4 lg:text-[15px]">
          {experience.href ? <ExternalLink href={experience.href}>{experience.company}</ExternalLink> : experience.company}
          <br />
          {experience.period}
          <br />
          {experience.location}
        </p>
      </div>
      <ul className="space-y-3 text-[14px] leading-6 text-foreground lg:text-[15px] lg:leading-7">
        {experience.highlights.map((highlight) => (
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.78em] before:size-1 before:rounded-full before:bg-foreground" key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SkillList({ group }: { group: SkillGroup }) {
  return (
    <div>
      <h3 className="text-[14px] leading-5 text-muted lg:text-[15px] lg:leading-6">{group.title}</h3>
      <ul className="mt-3 space-y-2 text-[14px] leading-6 text-foreground lg:mt-4 lg:text-[15px]">
        {group.skills.map((skill) => (
          <li className="relative pl-4 before:absolute before:left-0 before:top-[0.72em] before:size-1 before:rounded-full before:bg-foreground" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectList() {
  return (
    <div className="grid gap-0 md:grid-cols-2 md:gap-x-10">
      {projects.map((project) => (
        <article className="border-t border-rule py-5 lg:py-6" key={project.name}>
          <h3 className="text-[15px] font-semibold text-foreground">
            <ExternalLink href={project.href}>{project.name}</ExternalLink>
          </h3>
          <p className="mt-2 text-[14px] leading-6 text-muted lg:mt-3 lg:text-[15px] lg:leading-7">{project.summary}</p>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <PortfolioShell>
      <div className="mt-8 space-y-14 lg:mt-37 lg:space-y-16">
            <Section title="Experience">
              <div>
                {experiences.map((experience) => (
                  <ExperienceItem experience={experience} key={`${experience.company}-${experience.period}`} />
                ))}
              </div>
            </Section>

            <Section title="Skills">
              <div className="grid gap-8 grid-cols-2 md:gap-x-14 md:gap-y-12">
                {skillGroups.map((group) => (
                  <SkillList group={group} key={group.title} />
                ))}
              </div>
            </Section>

            <Section title="Education">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                {education.map((item) => (
                  <article key={item.school}>
                    <h3 className="text-[15px] leading-6 text-foreground lg:text-[17px] lg:leading-7">{item.school}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-muted lg:text-[16px] lg:leading-7">
                      {item.credential}
                      {item.period ? (
                        <>
                          <br />
                          {item.period}
                        </>
                      ) : null}
                    </p>
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Projects" className="scroll-mt-10" id="projects">
              <ProjectList />
            </Section>

            <section className="section-rule scroll-mt-10 pb-16 pt-20 lg:pb-24" id="contact">
              <h2 className="max-w-155 text-[26px] font-semibold leading-tight tracking-[-0.01em] text-foreground lg:text-[42px]">
                Contact me
              </h2>
              <p className="mt-4 max-w-150 text-[15px] leading-7 text-muted lg:mt-5 lg:text-[17px] lg:leading-8">
                I am interested in full-stack software engineering roles where speed, craft, and thoughtful systems matter.
              </p>
              <div className="mt-8 text-[15px]">
                <ExternalLink href="mailto:chukwudieze97@gmail.com">Start a conversation</ExternalLink>
              </div>
            </section>
      </div>
    </PortfolioShell>
  );
}
