"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";

const navItems = [
  { name: "Home", href: NAV_LINKS.home },
  { name: "About", href: NAV_LINKS.about },
  { name: "Skills", href: NAV_LINKS.skills },
  { name: "Projects", href: NAV_LINKS.projects },
  { name: "Contact", href: NAV_LINKS.contact },
];

export const NavLinks = () => {
  return (
    <div className="hidden md:flex md:items-center md:space-x-4">
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
      
    </div>
  );
};