"use client";

import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import { sound } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand & Year */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded border border-white/20 bg-surface flex items-center justify-center">
            <Terminal className="w-3 h-3 text-accent-red" />
          </div>
          <span className="font-mono text-xs text-neutral-400">
            © 2026 ARKA DEB. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center Tagline */}
        <div className="font-mono text-[11px] text-secondary tracking-wider text-center">
          TURNING DATA INTO INTELLIGENT EXPERIENCES.
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 hover:border-accent-red bg-surface font-mono text-xs text-secondary hover:text-white transition-all interactive group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-secondary group-hover:text-accent-red group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

