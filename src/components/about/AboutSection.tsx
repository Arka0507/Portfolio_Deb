"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Brain, Cpu, Code2, MapPin, GraduationCap, Award, Compass } from "lucide-react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { sound } from "@/lib/utils";

const PILLARS = [
  {
    number: "01",
    title: "DATA ANALYTICS",
    subtitle: "Turning raw information into meaningful insights.",
    description:
      "Transforming complex, unstructured datasets into structured statistical evidence, identifying trends, operational bottlenecks, and strategic levers.",
    icon: BarChart3,
    color: "#EF4444",
  },
  {
    number: "02",
    title: "MACHINE LEARNING",
    subtitle: "Building predictive and intelligent systems.",
    description:
      "Engineering end-to-end predictive pipelines—from rigorous feature engineering and cross-validation to distributed federated model training.",
    icon: Brain,
    color: "#00E5FF",
  },
  {
    number: "03",
    title: "ARTIFICIAL INTELLIGENCE",
    subtitle: "Exploring LLMs, NLP and intelligent applications.",
    description:
      "Investigating Transformer backbones, BioBERT embeddings, Agentic multi-tool workflows, and stateful semantic Retrieval-Augmented Generation.",
    icon: Cpu,
    color: "#EF4444",
  },
  {
    number: "04",
    title: "SOFTWARE DEVELOPMENT",
    subtitle: "Developing practical solutions with Python and modern frameworks.",
    description:
      "Designing clean modular services with FastAPI, relational Postgres schemas, and intuitive dashboard interfaces with modern web standards.",
    icon: Code2,
    color: "#00E5FF",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-surface/60 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent-red tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              SECTION // 02
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              BEYOND THE DATA.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-secondary max-w-md">
            Bridging analytical precision with engineering pragmatism. Transforming raw data entropy into actionable business strategy.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Narrative & Profile Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* Bio & Philosophy Block */}
            <div className="space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-white font-medium text-xl leading-snug">
                I am a Computer Science graduate passionate about data analytics, machine learning, artificial intelligence and building intelligent applications.
              </p>
              <p className="text-secondary text-base">
                Data without structure is noise; data without action is overhead. My engineering philosophy revolves around demystifying complex data distributions and translating them into verifiable strategic advantages.
              </p>
              <p className="text-secondary text-base">
                Whether researching multi-agent architectures for dynamic itinerary formulation at ULAVI Technologies Singapore, or training privacy-preserving transformer models across distributed hospital clients, I focus on clean technical conceptualization and pragmatic execution.
              </p>
            </div>

            {/* Profile Image & Identification Dossier */}
            <div className="glass-panel p-6 rounded-lg border border-white/10 relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Profile Photo */}
                <div className="sm:col-span-5 relative aspect-[3/4] sm:aspect-square rounded-lg overflow-hidden border border-white/20 bg-black/40 group shadow-xl">
                  <Image
                    src="/images/arka-deb-profile.jpg"
                    alt="Arka Deb - Data Scientist and ML Developer"
                    fill
                    priority
                    className="object-cover object-top brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 bg-black/80 backdrop-blur-md rounded border border-white/15 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-white font-semibold">ARKA DEB</span>
                    <span className="text-accent-red font-medium">ID://DEV-0507</span>
                  </div>
                </div>

                {/* Key Background Facts */}
                <div className="sm:col-span-7 flex flex-col justify-between space-y-4 font-mono text-xs">
                  <div>
                    <div className="flex items-center gap-1.5 text-secondary text-[11px] mb-1">
                      <GraduationCap className="w-3.5 h-3.5 text-accent-red" />
                      <span>ACADEMIC FOUNDATION</span>
                    </div>
                    <div className="text-white font-semibold text-sm">B.Tech in Computer Science</div>
                    <div className="text-neutral-400 text-xs">Amity University Noida (CGPA: 8.5)</div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-secondary text-[11px] mb-1">
                      <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>LOCATION</span>
                    </div>
                    <div className="text-white font-medium">Greater Kolkata Area, India</div>
                    <div className="text-neutral-400 text-[11px]">Immediate Full-Time Availability</div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-secondary text-[11px] mb-1">
                      <Compass className="w-3.5 h-3.5 text-accent-red" />
                      <span>GLOBAL EXPOSURE</span>
                    </div>
                    <div className="text-white font-medium">Three Continent Program (London)</div>
                    <div className="text-neutral-400 text-[11px]">International Tech Curricula</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Technical Identity Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => sound.playHover()}
                  className="group relative p-6 rounded-lg glass-panel border border-white/[0.08] hover:border-white/20 transition-all duration-300 interactive overflow-hidden"
                >
                  {/* Subtle Accent Glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: pillar.color }}
                  />

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded border border-white/10 bg-black/40 flex items-center justify-center group-hover:border-accent-red group-hover:bg-accent-red/10 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-neutral-300 group-hover:text-accent-red transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-accent-red font-semibold mr-2">
                          {pillar.number}.
                        </span>
                        <h3 className="font-heading font-bold text-lg text-white group-hover:text-accent-cyan transition-colors inline">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-neutral-300 font-medium mb-2 pl-13">
                    {pillar.subtitle}
                  </div>
                  <p className="text-secondary text-sm leading-relaxed pl-13">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

