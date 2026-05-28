export const siteConfig = {
  name: "Chukwudi Eze",
  title: "Chukwudi Eze - Full-Stack Software Engineer",
  description:
    "Chukwudi Eze is a full-stack software engineer in Lagos building scalable digital platforms, enterprise systems, and AI-powered workflows with React, Next.js, TypeScript, NestJS, PostgreSQL, and cloud-native infrastructure.",
  url: "https://www.chukwudieze.com",
  email: "chukwudieze97@gmail.com",
  locale: "en_US",
  location: "Lagos, Nigeria",
  social: {
    github: "https://github.com/devchux",
    linkedin: "https://www.linkedin.com/in/chukwudi-eze-21994a1a3/",
  },
  keywords: [
    "Chukwudi Eze",
    "Software Engineer",
    "Full-Stack Software Engineer",
    "AI Engineer",
    "RAG Engineer",
    "Full-stack Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "AI Engineering",
    "RAG",
    "Lagos Software Engineer",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
