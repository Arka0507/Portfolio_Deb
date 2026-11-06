"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { sound } from "@/lib/utils";

const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#080808]/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-3 group interactive"
          >
            <div className="w-8 h-8 rounded border border-white/20 bg-surface flex items-center justify-center group-hover:border-accent-red transition-colors duration-300">
              <Terminal className="w-4 h-4 text-accent-red group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-widest text-white group-hover:text-accent-red transition-colors">
                ARKA<span className="text-accent-red">.DEV</span>
              </span>
              <span className="font-mono text-[9px] tracking-wider text-secondary">
                DATA SYSTEMS / AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  onMouseEnter={() => sound.playHover()}
                  className="relative py-1 font-mono text-xs tracking-wider text-secondary hover:text-white transition-colors interactive group"
                >
                  <span className={isActive ? "text-white font-medium" : ""}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-red"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Status Badge & Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Live Availability Beacon */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-red"></span>
              </span>
              <span className="tracking-wider text-neutral-300">OPEN TO WORK</span>
            </div>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-white/15 bg-surface text-xs font-mono text-white hover:border-accent-red hover:bg-accent-red/10 transition-all duration-200 interactive"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent-red" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded border border-white/10 bg-surface text-white hover:text-accent-red interactive"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] z-30 bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-accent-red/30 bg-accent-red/5 w-fit">
                <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                <span className="font-mono text-xs text-neutral-200">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>

              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="font-heading text-2xl font-bold tracking-tight text-white hover:text-accent-red flex items-center justify-between border-b border-white/5 pb-3"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-secondary">0{idx + 1}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3 font-mono text-xs text-secondary">
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-white">GREATER KOLKATA, INDIA</span>
              </div>
              <div className="flex justify-between">
                <span>EDUCATION:</span>
                <span className="text-white">AMITY CSE (8.5 CGPA)</span>
              </div>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 rounded bg-accent-red text-white text-center font-bold tracking-wider hover:bg-accent-red/90 transition-colors"
              >
                CONNECT ON LINKEDIN
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
