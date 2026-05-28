import type { ReactNode } from "react";
import { IdentityPanel } from "./identity-panel";
import { MobileNav } from "./mobile-nav";
import { MotionMount } from "./motion-primitives";
import { DesktopNav } from "./site-nav";

export function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid w-full gap-10 px-6 py-8 lg:max-w-7xl lg:grid-cols-[340px_1fr] lg:gap-12 lg:px-20 lg:py-16">
        <MotionMount as="header" className="flex min-h-12 items-start justify-between lg:hidden">
          <div aria-hidden="true" className="hidden lg:block" />
          <div>
            <p className="font-heading text-2xl font-semibold text-foreground">
              Chukwudi Eze,
            </p>
            <h1 className="text-lg font-normal leading-5 tracking-[-0.01em] text-muted">
              Software Engineer
            </h1>
          </div>
          <MobileNav />
        </MotionMount>

        <IdentityPanel />

        <div>
          <MotionMount as="header" className="hidden min-h-14 items-start justify-between gap-4 lg:flex">
            <div aria-hidden="true" />
            <DesktopNav />
          </MotionMount>

          {children}
        </div>
      </div>
    </main>
  );
}
