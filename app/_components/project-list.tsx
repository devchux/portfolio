import type { Project } from "../_data/profile";
import { ExternalLink } from "./external-link";
import { MotionItem } from "./motion-primitives";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-0 md:grid-cols-2 md:gap-x-10">
      {projects.map((project) => (
        <MotionItem as="article" className="border-t border-rule py-5 lg:py-6" key={project.name}>
          <h3 className="text-[15px] font-semibold text-foreground">
            <ExternalLink href={project.href}>{project.name}</ExternalLink>
          </h3>
          <p className="mt-2 text-[14px] leading-6 text-muted lg:mt-3 lg:text-[15px] lg:leading-7">{project.summary}</p>
        </MotionItem>
      ))}
    </div>
  );
}
