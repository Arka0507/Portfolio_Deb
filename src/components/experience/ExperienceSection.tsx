"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Globe, Award, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";
import { sound } from "@/lib/utils";

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<string>(EXPERIENCES[0].id);

  const current = EXPERIENCES.find((e) => e.id === selectedExp) || EXPERIENCES[0];

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 bg-background border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent-red tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              SECTION // 03
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              EXPERIENCE & RESEARCH.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-secondary max-w-md">
            Formal technical research in Agentic AI architectures, international academic immersion, and conference operations.
          </p>
        </div>

        {/* Experience Interactive Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Tabs / Timeline */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === selectedExp;
              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedExp(exp.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`text-left p-5 rounded-lg border transition-all duration-300 relative interactive ${
                    isActive
                      ? "bg-surface-card border-accent-red/60 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                      : "bg-surface/30 border-white/[0.06] hover:border-white/20 hover:bg-surface/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] text-accent-cyan tracking-wider uppercase">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-white/10 text-neutral-400 bg-white/[0.02]">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white mb-1">
                    {exp.company}
                  </h3>
                  <div className="font-mono text-xs text-secondary truncate">
                    {exp.role}
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="expTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent-red rounded-l"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Detailed Dossier Panel */}
          <div className="lg:col-span-8">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 rounded-lg border border-white/10 relative overflow-hidden"
            >
              {/* Header metadata */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded bg-accent-red/10 border border-accent-red/30 text-accent-red font-mono text-[10px] tracking-widest font-semibold uppercase">
                      {current.badge}
                    </span>
                    <span className="font-mono text-xs text-secondary">
                      {current.location}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    {current.role}
                  </h3>
                  <div className="font-mono text-sm text-accent-cyan font-medium mt-1">
                    {current.company}
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded border border-white/10 bg-black/40 font-mono text-xs text-neutral-300">
                  {current.period}
                </div>
              </div>

              {/* Research Summary */}
              <div className="py-6 border-b border-white/10">
                <div className="font-mono text-xs text-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent-red" />
                  <span>CORE RESEARCH & SCOPE</span>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed">
                  {current.summary}
                </p>
              </div>

              {/* Key Contributions & Areas */}
              <div className="py-6 border-b border-white/10">
                <div className="font-mono text-xs text-secondary uppercase tracking-widest mb-4">
                  TECHNICAL DELIVERABLES & INVESTIGATIONS
                </div>
                <ul className="space-y-3">
                  {current.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Methodologies */}
              <div className="pt-6">
                <div className="font-mono text-xs text-secondary uppercase tracking-widest mb-3">
                  TECHNOLOGIES & DOMAINS
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-white/[0.03] border border-white/10 font-mono text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

