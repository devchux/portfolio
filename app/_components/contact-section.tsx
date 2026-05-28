import { MotionSection } from "./motion-primitives";
import { ExternalLink } from "./external-link";

export function ContactSection({
  children,
  className = "section-rule scroll-mt-10 pb-16 pt-20 lg:pb-24",
}: {
  children: string;
  className?: string;
}) {
  return (
    <MotionSection className={className} id="contact">
      <h2 className="max-w-155 text-[26px] font-semibold leading-tight tracking-[-0.01em] text-foreground lg:text-[42px]">
        Contact me
      </h2>
      <p className="mt-4 max-w-150 text-[15px] leading-7 text-muted lg:mt-5 lg:text-[17px] lg:leading-8">{children}</p>
      <div className="mt-8 text-[15px]">
        <ExternalLink href="mailto:chukwudieze97@gmail.com">Start a conversation</ExternalLink>
      </div>
    </MotionSection>
  );
}
