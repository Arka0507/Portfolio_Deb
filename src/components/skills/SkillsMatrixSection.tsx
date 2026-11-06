"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  BrainCircuit,
  Cpu,
  Layers,
  Terminal,
  Search,
  Filter,
  Check,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { sound } from "@/lib/utils";

const ICONS_MAP: Record<string, React.ElementType> = {
  Code2,
  BarChart3,
  BrainCircuit,
  Cpu,
  Layers,
  Terminal,
};

export default function SkillsMatrixSection() {
  const [filterProficiency, setFilterProficiency] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const proficiencyLevels = [
    { label: "ALL CAPABILITIES", value: "ALL" },
    { label: "PROJECT EXPERIENCE", value: "Project Experience" },
    { label: "WORKING KNOWLEDGE", value: "Working Knowledge" },
    { label: "FAMILIAR", value: "Familiar" },
  ];

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 bg-background border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent-red tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              SECTION // 05
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              MY TECHNICAL ECOSYSTEM.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-secondary max-w-md">
            Interactive capability matrix across 6 engineering layers. Realistically mapped across Project Experience, Working Knowledge, and Familiar tiers.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 p-3 rounded-lg glass-panel border border-white/10">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] text-secondary tracking-widest uppercase px-2 hidden md:inline">
              FILTER:
            </span>
            {proficiencyLevels.map((lvl) => (
              <button
                key={lvl.value}
                onClick={() => {
                  sound.playClick();
                  setFilterProficiency(lvl.value);
                }}
                className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider transition-colors duration-200 interactive ${
                  filterProficiency === lvl.value
                    ? "bg-accent-red text-white font-semibold shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                    : "bg-white/[0.03] text-secondary hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, e.g. Python..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded bg-black/60 border border-white/10 font-mono text-xs text-white placeholder-secondary/60 focus:outline-none focus:border-accent-red transition-colors"
            />
          </div>
        </div>

        {/* 6 Category Interactive Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = ICONS_MAP[cat.iconName] || Terminal;

            // Filter skills based on search & proficiency
            const filteredSkills = cat.skills.filter((sk) => {
              const matchesProficiency =
                filterProficiency === "ALL" || sk.proficiency === filterProficiency;
              const matchesSearch =
                searchQuery === "" ||
                sk.name.toLowerCase().includes(searchQuery.toLowerCase());
              return matchesProficiency && matchesSearch;
            });

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => sound.playHover()}
                className="group relative p-6 rounded-xl glass-panel border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden interactive"
              >
                {/* Subtle top glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent-red/5 rounded-full blur-2xl group-hover:bg-accent-red/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-accent-red group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-4 h-4 text-white group-hover:text-accent-red transition-colors" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-accent-red font-semibold">
                          CATEGORY // {cat.number}
                        </div>
                        <h3 className="font-heading font-bold text-base text-white">
                          {cat.category}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-secondary">
                      {filteredSkills.length} SKILLS
                    </span>
                  </div>

                  <p className="text-secondary text-xs leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Skills List with Proficiency Chips */}
                  <div className="space-y-2">
                    {filteredSkills.length > 0 ? (
                      filteredSkills.map((sk) => (
                        <div
                          key={sk.name}
                          className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5 hover:border-white/15 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                sk.highlight ? "bg-accent-red" : "bg-white/40"
                              }`}
                            />
                            <span className="font-mono text-xs text-white font-medium">
                              {sk.name}
                            </span>
                          </div>
                          <span
                            className={`font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider ${
                              sk.proficiency === "Project Experience"
                                ? "bg-accent-red/10 text-accent-red border border-accent-red/20 font-semibold"
                                : sk.proficiency === "Working Knowledge"
                                ? "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                                : "bg-white/[0.04] text-secondary border border-white/5"
                            }`}
                          >
                            {sk.proficiency}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6 font-mono text-xs text-secondary/60">
                        No matches for current filter
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer status line */}
                <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-secondary">
                  <span>LAYER // 0{idx + 1}</span>
                  <span className="text-white/40 group-hover:text-accent-red transition-colors">
                    INDEXED
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
