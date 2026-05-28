import type { Education } from "../_data/profile";
import { MotionItem } from "./motion-primitives";

export function EducationList({ education }: { education: Education[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      {education.map((item) => (
        <MotionItem as="article" key={item.school}>
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
        </MotionItem>
      ))}
    </div>
  );
}
