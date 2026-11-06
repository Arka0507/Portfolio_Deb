"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Sparkles, Database, Terminal, Cpu } from "lucide-react";
import dynamic from "next/dynamic";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { sound } from "@/lib/utils";

// Lazy load 3D Canvas
const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick();
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-radial-vignette overflow-hidden"
    >
      {/* Interactive 3D WebGL Background Canvas */}
      <Hero3DCanvas />

      {/* Cyber Grid Subtle Texture */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-40 z-0" />

      {/* Top Telemetry HUD Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-4 py-2 border-b border-white/[0.08] text-[11px] font-mono text-secondary">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-ping" />
            <span className="tracking-widest">SYSTEM: ACTIVE</span>
          </div>
          <span className="text-white/20">|</span>
          <span className="tracking-wider hidden sm:inline">LOC: GREATER KOLKATA (22.5726° N, 88.3639° E)</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline tracking-wider">SPEC: DATA & AI ARCHITECTURES</span>
          <span className="text-white/20 hidden md:inline">|</span>
          <div className="flex items-center gap-1.5 text-accent-cyan">
            <Sparkles className="w-3 h-3" />
            <span className="tracking-widest uppercase">AVAILABLE IMMEDIATELY</span>
          </div>
        </div>
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Oversized Cinematic Typography */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-accent-red font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                DATA SCIENCE / MACHINE LEARNING / ANALYTICS
              </div>
            </motion.div>

            {/* Oversized Cinematic Typography */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-1 mb-6"
            >
              <h1 className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-[0.9]">
                ARKA<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                  DEB.
                </span>
              </h1>
              <div className="font-heading font-light text-2xl sm:text-3xl md:text-4xl tracking-tight text-white/50 pt-2">
                DATA SCIENCE <span className="text-accent-red font-mono font-medium text-xl sm:text-2xl">//</span> PORTFOLIO.
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-mono text-sm sm:text-base md:text-lg text-accent-cyan tracking-wide uppercase font-medium max-w-2xl mb-4"
            >
              TURNING COMPLEX DATA INTO ACTIONABLE BUSINESS STRATEGY.
            </motion.p>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-secondary text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8"
            >
              I transform data into intelligence through analytics, machine learning and AI-powered applications. Focused on engineering practical solutions with measurable value.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToProjects}
                onMouseEnter={() => sound.playHover()}
                className="group relative px-6 py-3.5 rounded bg-accent-red text-white font-mono text-xs tracking-widest uppercase font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] active:scale-95 interactive"
              >
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE PROJECTS
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <a
                href={PERSONAL_INFO.socials.resume}
                download="Arka_Deb_Resume.pdf"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group px-6 py-3.5 rounded border border-white/20 bg-white/[0.02] text-white font-mono text-xs tracking-widest uppercase hover:border-white/50 hover:bg-white/[0.08] transition-all duration-300 flex items-center gap-2 active:scale-95 interactive"
              >
                <FileText className="w-4 h-4 text-secondary group-hover:text-accent-red transition-colors" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Status Indicator Pill */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-black/40 text-[11px] font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Technical Metadata HUD Card */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-panel p-6 rounded-lg border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-red/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 font-mono text-xs text-secondary">
                <div className="flex items-center gap-2 text-white">
                  <Terminal className="w-4 h-4 text-accent-red" />
                  <span>CORE DOSSIER</span>
                </div>
                <span>NODE://01</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-secondary tracking-widest uppercase">DEGREE & HONORS</div>
                  <div className="text-white font-semibold mt-0.5">B.Tech in Computer Science</div>
                  <div className="text-neutral-400 text-[11px]">Amity University Noida (CGPA: 8.5)</div>
                </div>

                <div>
                  <div className="text-[10px] text-secondary tracking-widest uppercase">SPECIALIZATION</div>
                  <div className="text-accent-cyan font-semibold mt-0.5">Machine Learning & Agentic AI</div>
                  <div className="text-neutral-400 text-[11px]">Distributed Learning & Clinical NLP</div>
                </div>

                <div>
                  <div className="text-[10px] text-secondary tracking-widest uppercase">RESEARCH TRACK</div>
                  <div className="text-white font-semibold mt-0.5">ULAVI Technologies Singapore</div>
                  <div className="text-neutral-400 text-[11px]">AI & Agentic Architectures</div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-secondary">SECURITY STATUS:</span>
                  <span className="text-accent-red font-bold">VERIFIED</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Spec Badge */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-panel p-3.5 rounded border border-white/5">
                <div className="font-mono text-[10px] text-secondary">TECH DOMAIN</div>
                <div className="font-heading text-sm text-white font-bold mt-1">DATA SYSTEMS</div>
              </div>
              <div className="glass-panel p-3.5 rounded border border-white/5">
                <div className="font-mono text-[10px] text-secondary">TARGET ROLES</div>
                <div className="font-heading text-sm text-white font-bold mt-1">ANALYST / DS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats & Scroll-Down Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Authentic Stats Only */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 w-full md:w-auto">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="flex flex-col"
            >
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] text-secondary tracking-wider uppercase mt-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-neutral-400 font-sans mt-0.5">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-3 font-mono text-xs text-secondary hover:text-white transition-colors group interactive self-end md:self-auto"
        >
          <span className="tracking-widest">EXPLORE DOSSIER</span>
          <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-accent-red group-hover:translate-y-1 transition-all duration-300">
            <ArrowDown className="w-3.5 h-3.5 text-secondary group-hover:text-accent-red" />
          </div>
        </button>
      </div>
    </section>
  );
}

