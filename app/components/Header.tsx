"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "/membership-plans" },
  { label: "Trainers", href: "/trainers" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-amber-400 px-4 sm:px-8 lg:px-16 py-3 sm:py-4 flex items-center justify-between shadow-md">
      {/* Logo + Brand Name */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <Image
          src="/gym-logo.png"
          alt="FitCore Gym Logo"
          width={60}
          height={60}
          className="rounded-full object-cover sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
        />
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-wide uppercase truncate">
          FitCore
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden z-20 text-black"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isSectionLink = ["About", "Services", "Contact"].includes(link.label);
            const href = isSectionLink && pathname !== "/" ? `/` + link.href : link.href;
            
            return (
              <li key={link.href}>
                <Link
                  href={href}
                  className={
                    isActive
                      ? "bg-amber-300 text-black text-sm sm:text-base lg:text-xl font-bold px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full transition-colors"
                      : "text-black text-sm sm:text-base lg:text-xl font-semibold px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full transition-colors hover:bg-amber-300"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Navigation - Mobile */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-amber-400 md:hidden">
          <ul className="flex flex-col border-t border-amber-500">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isSectionLink = ["About", "Services", "Contact"].includes(link.label);
              const href = isSectionLink && pathname !== "/" ? `/` + link.href : link.href;
              
              return (
                <li key={link.href} className="border-b border-amber-500">
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 text-black text-sm font-semibold transition-colors ${
                      isActive ? "bg-amber-300" : "hover:bg-amber-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
