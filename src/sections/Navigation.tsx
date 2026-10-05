"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { LINKS } from "@/data/links";

import { ThemeToggle } from "@/components/ThemeToggle";

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
    { name: "Timeline", href: LINKS.timeline },
    { name: "Projects", href: LINKS.projects },
    { name: "Mentors", href: LINKS.mentors },
    { name: "Community", href: LINKS.discordGuide },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b border-[var(--border)] ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md py-3 shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          : "bg-[var(--background)] py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black flex items-center justify-center p-1 border border-[var(--border)] overflow-hidden shrink-0 group-hover:border-[var(--foreground)] transition-all">
              <img
                src="/techspace-logo.png"
                alt="TechSpace Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[var(--muted-foreground)] font-medium group-hover:text-[var(--foreground)] transition-colors">
                TECHSPACE
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl md:text-2xl tracking-tight uppercase text-[var(--foreground)]">
                  BUILDLAB ’26
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--cyan)]" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-[12px] lg:text-[13px] uppercase tracking-[0.12em] font-medium text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--foreground)] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action / Theme Toggle / Discord CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Theme Toggle button */}
            <ThemeToggle />

            <div className="hidden sm:block">
              <Button
                href={LINKS.registration}
                target="_blank"
                size="sm"
                variant="primary"
                withArrow
                arrowDirection="up-right"
              >
                REGISTER
              </Button>
            </div>

            <div className="hidden md:block">
              <Button
                href={LINKS.discord || LINKS.discordGuide}
                target={LINKS.discord ? "_blank" : undefined}
                size="sm"
                variant="secondary"
                withArrow
                arrowDirection={LINKS.discord ? "up-right" : "right"}
              >
                DISCORD
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] rounded"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-[var(--foreground)] transition-all duration-200 ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-[var(--foreground)] transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-[var(--foreground)] transition-all duration-200 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-[var(--border)] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm uppercase tracking-wider text-[var(--foreground)] hover:underline py-1.5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-[var(--border)] flex flex-col gap-3">
              <Button
                href={LINKS.registration}
                target="_blank"
                size="md"
                variant="primary"
                withArrow
                arrowDirection="up-right"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                REGISTER NOW
              </Button>
              <Button
                href={LINKS.discord || LINKS.discordGuide}
                target={LINKS.discord ? "_blank" : undefined}
                size="md"
                variant="secondary"
                withArrow
                arrowDirection={LINKS.discord ? "up-right" : "right"}
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
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
