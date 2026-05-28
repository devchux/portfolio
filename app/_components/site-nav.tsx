"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href;
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-5">
      <div className="flex items-center gap-4 rounded-full border border-rule px-4 py-2">
        {navLinks.map((link) => (
          <Link
            aria-current={isActive(pathname, link.href) ? "page" : undefined}
            className="nav-link font-heading text-[16px] font-semibold leading-none text-foreground"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}

