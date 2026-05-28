import type { ReactNode } from "react";
import { MotionSection } from "./motion-primitives";

export function Section({
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
    <MotionSection className={`section-rule ${className}`} id={id} labelledBy={sectionId}>
      <h2 id={sectionId} className="section-label">
        {title}
      </h2>
      {children}
    </MotionSection>
  );
}
