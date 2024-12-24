"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

const navItems = [
  { name: "Home", href: NAV_LINKS.home },
  { name: "About", href: NAV_LINKS.about },
  { name: "Skills", href: NAV_LINKS.skills },
  { name: "Projects", href: NAV_LINKS.projects },
  { name: "Contact", href: NAV_LINKS.contact },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/80 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
};