"use client";

import Link from "next/link";
import { useState } from "react";
import { isActive, navLinks } from "./site-nav";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-start justify-end gap-4">
      <ThemeToggle />
      <button
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="font-heading text-[17px] font-semibold leading-5 text-foreground"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        Menu
      </button>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="absolute right-0 top-8 z-20 w-44 border border-rule bg-background p-3 shadow-[0_20px_60px_color-mix(in_oklab,var(--foreground)_18%,transparent)]"
        >
          {navLinks.map((link) => (
            <Link
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className="mobile-nav-link font-heading block px-2 py-2 text-[18px] font-semibold leading-5 text-foreground"
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
