import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
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
