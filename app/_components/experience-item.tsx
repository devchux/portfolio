import type { Experience } from "../_data/profile";
import { ExternalLink } from "./external-link";
import { MotionItem } from "./motion-primitives";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <MotionItem as="article" className="grid gap-5 border-t border-rule py-7 first:border-t-0 first:pt-0 md:grid-cols-[240px_1fr] md:gap-12">
      <div>
        <h3 className="text-lg font-semibold leading-5 text-foreground lg:leading-snug">{experience.role}</h3>
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
    </MotionItem>
  );
}
