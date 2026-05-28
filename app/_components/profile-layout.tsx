import type { ReactNode } from "react";
import { DesktopNav, MobileNav } from "./site-nav";

type ContactLink = {
  label: string;
  href: string;
};

const contactLinks: ContactLink[] = [
  { label: "chukwudieze97@gmail.com", href: "mailto:chukwudieze97@gmail.com" },
  { label: "+234 9035122388", href: "tel:+2349035122388" },
  { label: "GitHub", href: "https://github.com/devchux" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chukwudi-eze-21994a1a3/" },
  { label: "Twitter (X)", href: "https://x.com/devchux" },
];

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="animated-underline inline-flex items-baseline gap-1 text-foreground"
      href={href}
      rel="noreferrer"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
      <span aria-hidden="true" className="text-[0.72em] text-subtle">
        &#8599;
      </span>
    </a>
  );
}

export function IdentityPanel() {
  return (
    <aside className="lg:sticky lg:top-14 lg:h-[calc(100svh-7rem)]">
      <div className="flex min-h-full flex-col">
        <div className="hidden lg:block">
          <p className="font-heading text-4xl font-semibold text-foreground">Chukwudi Eze,</p>
          <h1 className="max-w-77.5 text-2xl font-normal leading-[1.08] tracking-[-0.01em] text-muted sm:text-[34px] lg:text-[38px]">
            Software Engineer
          </h1>
        </div>

        <div className="mt-16 border-t border-rule pt-5 lg:mt-32 lg:pt-7">
          <p className="max-w-82 text-[15px] leading-6 text-foreground lg:max-w-75 lg:text-[16px] lg:leading-7">
            Software engineer specializing in scalable enterprise customer intelligence systems and AI-powered knowledge platforms.
          </p>
        </div>

        <div className="mt-10 grid max-w-82.5 gap-3 text-xs leading-5 lg:mt-auto">
          {contactLinks.map((link) => (
            <ExternalLink href={link.href} key={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function PortfolioShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid w-full gap-10 px-6 py-8 lg:max-w-7xl lg:grid-cols-[340px_1fr] lg:gap-12 lg:px-20 lg:py-16">
        <header className="flex justify-between min-h-12 items-start lg:hidden">
          <div aria-hidden="true" className="hidden lg:block" />
          <div>
            <p className="font-heading text-[18px] font-semibold leading-5 text-foreground">Chukwudi Eze,</p>
            <h1 className="text-[17px] font-normal leading-5 tracking-[-0.01em] text-muted">Software Engineer</h1>
          </div>
          <MobileNav />
        </header>

        <IdentityPanel />

        <div>
          <header className="hidden min-h-14 items-start justify-between gap-4 lg:flex">
            <div aria-hidden="true" />
            <DesktopNav />
          </header>

          {children}
        </div>
      </div>
    </main>
  );
}
