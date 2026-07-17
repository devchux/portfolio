export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  href?: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Education = {
  school: string;
  credential: string;
  period?: string;
};

export type Project = {
  name: string;
  href: string;
  summary: string;
};

export const experiences: Experience[] = [
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

export const skillGroups: SkillGroup[] = [
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

export const education: Education[] = [
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

export const projects: Project[] = [
  {
    name: "Megowa",
    href: "https://megowa.com/",
    summary: "Connects Nollywood talents with opportunities, resources, training, and industry stories across African film.",
  },
  {
    name: "Schoolmates",
    href: "https://newfountainportal.schoolmateglobal.com/auth",
    summary: "End-to-end school management system with role-based access and reporting tools.",
  },
  {
    name: "Viou Digital",
    href: "https://vioudigital.com",
    summary: "Connects clients with world-class visuals and storytellers, enhanced by AI-driven creative workflows.",
  },
  {
    name: "React Formid",
    href: "https://www.npmjs.com/package/react-formid",
    summary: "Minimal React hook for flexible form validations inspired by React Hook Form.",
  },
  {
    name: "Previous Portfolio",
    href: "https://www.chux.netlify.app/",
    summary: "Portfolio for full-stack engineering work across customer intelligence, fintech, enterprise systems, and AI workflows.",
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
