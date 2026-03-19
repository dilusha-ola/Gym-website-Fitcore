"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

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
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-amber-400 dark:bg-orange-500 px-4 sm:px-8 lg:px-16 py-3 sm:py-4 flex items-center justify-between shadow-md transition-colors duration-300">
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

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm transition-colors duration-300 hover:opacity-80"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l.707.707m-12.728 0l-.707.707m12.728 12.728l.707.707m-12.728 0l-.707.707M12 6a6 6 0 100 12 6 6 0 000-12z" />
            </svg>
            <span>Light</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span>Dark</span>
          </>
        )}
      </button>

      {/* Mobile Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black transition-colors duration-300 hover:opacity-80 mr-2"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l.707.707m-12.728 0l-.707.707m12.728 12.728l.707.707m-12.728 0l-.707.707M12 6a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden z-20 text-black dark:text-white transition-colors duration-300"
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
                      ? "bg-amber-300 dark:bg-orange-600 text-black dark:text-black text-sm sm:text-base lg:text-xl font-bold px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full transition-colors duration-300"
                      : "text-black dark:text-black text-sm sm:text-base lg:text-xl font-semibold px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full transition-colors duration-300 hover:bg-amber-300 dark:hover:bg-orange-600"
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
        <nav className="absolute top-16 left-0 right-0 bg-amber-400 dark:bg-orange-500 md:hidden transition-colors duration-300">
          <ul className="flex flex-col border-t border-amber-500 dark:border-gray-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isSectionLink = ["About", "Services", "Contact"].includes(link.label);
              const href = isSectionLink && pathname !== "/" ? `/` + link.href : link.href;
              
              return (
                <li key={link.href} className="border-b border-amber-500 dark:border-gray-700">
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                      isActive 
                        ? "bg-amber-300 dark:bg-orange-600 text-black dark:text-black" 
                        : "text-black dark:text-black hover:bg-amber-300 dark:hover:bg-orange-600"
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
