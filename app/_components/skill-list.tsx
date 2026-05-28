import type { SkillGroup } from "../_data/profile";
import { MotionItem } from "./motion-primitives";

export function SkillList({ group }: { group: SkillGroup }) {
  return (
    <MotionItem>
      <h3 className="text-[14px] leading-5 text-muted lg:text-[15px] lg:leading-6">{group.title}</h3>
      <ul className="mt-3 space-y-2 text-[14px] leading-6 text-foreground lg:mt-4 lg:text-[15px]">
        {group.skills.map((skill) => (
          <li className="relative pl-4 before:absolute before:left-0 before:top-[0.72em] before:size-1 before:rounded-full before:bg-foreground" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </MotionItem>
  );
}
