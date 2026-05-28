import { ExternalLink } from "./external-link";
import { MotionMount } from "./motion-primitives";

type ContactLink = {
  label: string;
  href: string;
};

const contactLinks: ContactLink[] = [
  { label: "chukwudieze97@gmail.com", href: "mailto:chukwudieze97@gmail.com" },
  { label: "GitHub", href: "https://github.com/devchux" },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1Ssn6UDNSa9Fp3hnco01D4pT6cf00e5jJMUOfWHWQkS8/edit?usp=sharing",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chukwudi-eze-21994a1a3/",
  },
  { label: "Twitter (X)", href: "https://x.com/devchux" },
];

export function IdentityPanel() {
  return (
    <MotionMount as="aside" className="lg:sticky lg:top-14 lg:h-[calc(100svh-7rem)]">
      <div className="flex min-h-full flex-col">
        <div className="hidden lg:block">
          <p className="font-heading text-4xl font-semibold text-foreground">
            Chukwudi Eze,
          </p>
          <h1 className="max-w-77.5 text-2xl font-normal leading-[1.08] tracking-[-0.01em] text-muted sm:text-[34px] lg:text-[38px]">
            Software Engineer
          </h1>
        </div>

        <div className="mt-16 border-t border-rule pt-5 lg:mt-32 lg:pt-7">
          <p className="max-w-82 text-[15px] leading-6 text-foreground lg:max-w-75 lg:text-[16px] lg:leading-7">
            Software engineer specializing in scalable enterprise customer
            intelligence systems and AI-powered knowledge platforms.
          </p>
        </div>

        <div className="mt-10 grid max-w-82.5 gap-3 text-sm lg:mt-auto">
          {contactLinks.map((link) => (
            <ExternalLink href={link.href} key={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </MotionMount>
  );
}
