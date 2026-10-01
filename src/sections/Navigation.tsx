"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { LINKS } from "@/data/links";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: LINKS.explore },
    { name: "Tracks", href: LINKS.tracks },
    { name: "Projects", href: LINKS.projects },
    { name: "Mentors", href: LINKS.mentors },
    { name: "Timeline", href: LINKS.timeline },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b border-[#CFCFC4] ${
        isScrolled
          ? "bg-[#F4F4E8]/92 backdrop-blur-md py-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
          : "bg-[#F4F4E8] py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
          >
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[var(--gray)] font-medium group-hover:text-[var(--ink)] transition-colors">
              TECHSPACE
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl md:text-2xl tracking-tight uppercase text-[var(--ink)]">
                BUILDLAB ’26
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#18B8D4]" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-[12px] lg:text-[13px] uppercase tracking-[0.12em] font-medium text-[var(--ink)]/80 hover:text-[var(--ink)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--ink)] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action / Discord CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={LINKS.discord}
              target="_blank"
              size="sm"
              variant="primary"
              withArrow
              arrowDirection="up-right"
            >
              JOIN DISCORD
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--ink)] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-[var(--ink)] transition-all duration-200 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[var(--ink)] transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[var(--ink)] transition-all duration-200 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-[#CFCFC4] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm uppercase tracking-wider text-[var(--ink)] hover:underline py-1.5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <Button
                href={LINKS.discord}
                target="_blank"
                size="md"
                variant="primary"
                withArrow
                arrowDirection="up-right"
                className="w-full"
              >
                JOIN DISCORD
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
