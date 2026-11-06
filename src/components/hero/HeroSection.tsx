"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Sparkles, Terminal, Activity, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { sound } from "@/lib/utils";

// Lazy load 3D Canvas
const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const [telemetryAngle, setTelemetryAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryAngle((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 bg-radial-vignette overflow-hidden"
    >
      {/* 3D WebGL Canvas: Centered Moving Square (Cube), Sweeping Cyan Orbit Ring & Red Wireframe Sphere */}
      <Hero3DCanvas />

      {/* Cyber Grid Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-40 z-0" />

      {/* Swiss Architectural Corner Markers */}
      <div className="absolute top-24 left-6 md:left-12 font-mono text-[10px] text-white/30 pointer-events-none select-none">
        + [SYS_INIT // 01]
      </div>
      <div className="absolute top-24 right-6 md:right-12 font-mono text-[10px] text-white/30 pointer-events-none select-none">
        [GEOMETRY: CUBE_TORUS_LATTICE] +
      </div>

      {/* Top Telemetry HUD Status Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-4 py-2.5 border-b border-white/[0.12] text-[11px] font-mono text-secondary">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-ping" />
            <span className="tracking-widest font-semibold text-accent-red">SYSTEM: ONLINE</span>
          </div>
          <span className="text-white/20">|</span>
          <span className="tracking-wider hidden sm:inline">LOC: GREATER KOLKATA (22.5726° N, 88.3639° E)</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white/70 hidden md:flex">
            <Activity className="w-3.5 h-3.5 text-accent-red animate-pulse" />
            <span>HEADING // {telemetryAngle}°</span>
          </div>
          <span className="text-white/20 hidden md:inline">|</span>
          <div className="flex items-center gap-1.5 text-accent-cyan">
            <Sparkles className="w-3 h-3" />
            <span className="tracking-widest uppercase font-semibold">AVAILABLE IMMEDIATELY</span>
          </div>
        </div>
      </div>

      {/* Main Hero Center Content: Asymmetric Swiss Layout with 3D Centerpiece */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Oversized Swiss Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Technical Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.12] text-accent-red font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
                DATA SCIENCE / MACHINE LEARNING / ANALYTICS
              </div>
            </motion.div>

            {/* Oversized Typography */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-1 mb-5"
            >
              <h1 className="font-heading font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-[0.88] select-none">
                ARKA<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
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
              className="font-mono text-sm sm:text-base md:text-lg text-accent-cyan tracking-wide uppercase font-semibold max-w-xl mb-4"
            >
              TURNING COMPLEX DATA INTO ACTIONABLE BUSINESS STRATEGY.
            </motion.p>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-secondary text-sm sm:text-base max-w-lg font-normal leading-relaxed mb-8"
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
                className="group relative px-6 py-3.5 rounded bg-accent-red text-white font-mono text-xs tracking-widest uppercase font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95 interactive"
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
                className="group px-6 py-3.5 rounded border border-white/[0.15] bg-white/[0.03] text-white font-mono text-xs tracking-widest uppercase hover:border-white/50 hover:bg-white/[0.08] transition-all duration-300 flex items-center gap-2 active:scale-95 interactive"
              >
                <FileText className="w-4 h-4 text-secondary group-hover:text-accent-red transition-colors" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Status Indicator Pill */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/[0.12] bg-black/50 text-[11px] font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sleek Floating Editorial Telemetry (Matching Photo) */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-5 pl-4">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-lg border border-white/[0.12] bg-[#0c0c0c]/60 backdrop-blur-md relative"
            >
              {/* Corner tick marks */}
              <span className="absolute top-2 left-2 text-[10px] font-mono text-white/30">+</span>
              <span className="absolute top-2 right-2 text-[10px] font-mono text-white/30">+</span>
              <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/30">+</span>
              <span className="absolute bottom-2 right-2 text-[10px] font-mono text-white/30">+</span>

              <div className="flex items-center justify-between pb-3 border-b border-white/[0.1] mb-5 font-mono text-xs text-secondary">
                <div className="flex items-center gap-2 text-white">
                  <Terminal className="w-3.5 h-3.5 text-accent-red" />
                  <span className="tracking-widest">// THE DOSSIER</span>
                </div>
                <span className="text-accent-cyan tracking-wider">INDEX_01</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-secondary tracking-widest uppercase">DEGREE & HONORS</div>
                  <div className="text-white font-semibold text-sm mt-0.5">B.Tech in Computer Science</div>
                  <div className="text-neutral-400 text-xs">Amity University Noida (CGPA: 8.5)</div>
                </div>

                <div className="pt-2 border-t border-white/[0.06]">
                  <div className="text-[10px] text-secondary tracking-widest uppercase">SPECIALIZATION</div>
                  <div className="text-accent-cyan font-semibold text-sm mt-0.5">Machine Learning & Agentic AI</div>
                  <div className="text-neutral-400 text-xs">Distributed Learning & Clinical NLP</div>
                </div>

                <div className="pt-2 border-t border-white/[0.06]">
                  <div className="text-[10px] text-secondary tracking-widest uppercase">RESEARCH TRACK</div>
                  <div className="text-white font-semibold text-sm mt-0.5">ULAVI Technologies Singapore</div>
                  <div className="text-neutral-400 text-xs">AI & Agentic Architectures</div>
                </div>

                <div className="pt-3 border-t border-white/[0.1] flex items-center justify-between text-xs">
                  <span className="text-secondary">SECURITY STATUS:</span>
                  <span className="text-accent-red font-bold tracking-wider">VERIFIED // ACTIVE</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Spec Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded border border-white/[0.08] bg-[#0c0c0c]/50 backdrop-blur-sm">
                <div className="font-mono text-[10px] text-secondary">TECH DOMAIN</div>
                <div className="font-heading text-sm text-white font-bold mt-1">DATA SYSTEMS</div>
              </div>
              <div className="p-3.5 rounded border border-white/[0.08] bg-[#0c0c0c]/50 backdrop-blur-sm">
                <div className="font-mono text-[10px] text-secondary">TARGET ROLES</div>
                <div className="font-heading text-sm text-white font-bold mt-1">ANALYST / DS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats & Scroll-Down Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-6 border-t border-white/[0.12] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
          <div className="w-8 h-8 rounded-full border border-white/[0.15] flex items-center justify-center group-hover:border-accent-red group-hover:translate-y-1 transition-all duration-300">
            <ArrowDown className="w-3.5 h-3.5 text-secondary group-hover:text-accent-red" />
          </div>
        </button>
      </div>
    </section>
  );
}
