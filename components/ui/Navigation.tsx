"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(700);

  const isHomePage = pathname === "/";

  // Calculate hero height based on screen size
  useEffect(() => {
    if (!isHomePage) return;

    const updateHeroHeight = () => {
      const height = window.innerWidth >= 768 ? 700 : 600;
      setHeroHeight(height);
    };

    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);
    return () => window.removeEventListener("resize", updateHeroHeight);
  }, [isHomePage]);

  // Track scroll position
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Calculate navigation position and opacity for home page
  const getNavStyles = () => {
    if (!isHomePage) {
      return {
        top: "0",
        opacity: 1,
        backgroundColor: "rgba(49, 36, 26, 0.95)", // coffee-900/95
      };
    }

    // 5% of hero shows above nav initially
    const initialOffset = heroHeight * 0.05;
    const navHeight = 64; // h-16 = 64px
    const heroEndPoint = heroHeight - navHeight - initialOffset;

    // If scrolled past hero section
    if (scrollY >= heroEndPoint) {
      return {
        top: "0",
        opacity: 1,
        backgroundColor: "rgba(49, 36, 26, 0.95)", // coffee-900/95
      };
    }

    // While in hero section - keep opacity at 70%
    // Start at 0.7 opacity when scrollY = 0
    // Stay at 0.7 opacity throughout hero section
    const opacity = 0.7; // Keep at 70% throughout hero section

    // Calculate top position - start at initialOffset, move to 0 as we scroll
    const progress = Math.min(1, scrollY / heroEndPoint);
    const topPosition = initialOffset - (initialOffset * progress);

    return {
      top: `${topPosition}px`,
      opacity: opacity,
      backgroundColor: `rgba(49, 36, 26, ${opacity * 0.95})`, // coffee-900 with opacity
    };
  };

  const navStyles = getNavStyles();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/careers", label: "Careers" },
    { href: "/reviews", label: "Reviews" },
    { href: "/locations", label: "Location" },
  ];

  return (
    <nav
      className={cn(
        "z-50 w-full backdrop-blur-sm border-b transition-all duration-300",
        isHomePage ? "fixed" : "sticky"
      )}
      style={{
        opacity: navStyles.opacity,
        backgroundColor: navStyles.backgroundColor,
        top: navStyles.top,
        borderColor: `rgba(113, 84, 64, ${navStyles.opacity})`, // coffee-800 with matching opacity
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Coffee className="h-6 w-6 text-honey-400 group-hover:text-honey-300 transition-colors" />
            <span className="text-xl font-serif font-bold text-white group-hover:text-honey-100 transition-colors">
              Milk & Honey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-honey-500 text-coffee-900"
                      : "text-white hover:bg-coffee-800 hover:text-honey-200"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-honey-200 p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-coffee-800 bg-coffee-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                      isActive
                        ? "bg-honey-500 text-coffee-900"
                        : "text-white hover:bg-coffee-800 hover:text-honey-200"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
