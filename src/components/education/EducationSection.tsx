"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle, ExternalLink, Calendar, MapPin, Globe } from "lucide-react";
import { EDUCATION_DATA, CERTIFICATIONS } from "@/data/portfolioData";
import { sound } from "@/lib/utils";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-28 px-6 md:px-12 bg-surface/30 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent-red tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              SECTION // 06
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              LEARNING NEVER STOPS.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-secondary max-w-md">
            Formal engineering degree from Amity University, global academic exposure in London, and government-backed NPTEL technical certifications.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Degree & Academic Programs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-secondary tracking-widest uppercase mb-2">
              <GraduationCap className="w-4 h-4 text-accent-red" />
              ACADEMIC CREDENTIALS
            </div>

            {EDUCATION_DATA.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent-red/10 border border-accent-red/30 text-accent-red uppercase tracking-wider font-semibold">
                      DEGREE OF DISTINCTION
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-white mt-2">
                      {edu.degree}
                    </h3>
                    <div className="font-mono text-sm text-accent-cyan mt-1">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-heading font-extrabold text-3xl text-white tracking-tight">
                      {edu.score}
                    </div>
                    <div className="font-mono text-[10px] text-secondary tracking-wider">
                      CUMULATIVE CGPA
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-secondary mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-red" />
                    <span>{edu.location}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Global Academic Immersion Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl glass-panel border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    Three Continent Global Immersion (London, UK)
                  </h4>
                  <p className="font-mono text-xs text-secondary mt-0.5">
                    International tech exposure to global engineering curricula and distributed research cohorts.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded bg-white/5 border border-white/10 text-neutral-300 shrink-0">
                UK IMMERSION
              </span>
            </motion.div>
          </div>

          {/* Right Column: NPTEL & Technical Certifications */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-secondary tracking-widest uppercase mb-2">
              <Award className="w-4 h-4 text-accent-cyan" />
              VERIFIED CERTIFICATIONS
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => sound.playHover()}
                  className="p-6 rounded-xl glass-panel border border-white/10 hover:border-accent-cyan/40 transition-colors interactive"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan uppercase tracking-wider font-semibold">
                        NPTEL VERIFIED
                      </span>
                      <h4 className="font-heading font-bold text-lg text-white mt-1.5">
                        {cert.title}
                      </h4>
                      <div className="font-mono text-xs text-secondary mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse mt-2" />
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/[0.06]">
                    {cert.skills.map((sk) => (
                      <span
                        key={sk}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/5 text-neutral-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Conference Engagement Card */}
              <div className="p-6 rounded-xl glass-panel border border-white/10 bg-white/[0.01]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-accent-red/10 border border-accent-red/30 text-accent-red uppercase tracking-wider font-semibold">
                    VOLUNTEER & COORDINATION
                  </span>
                  <span className="font-mono text-xs text-secondary">2025</span>
                </div>
                <h4 className="font-heading font-bold text-base text-white">
                  ICETM 2025 International Conference
                </h4>
                <p className="font-mono text-xs text-secondary mt-1">
                  Coordinated digital presentation infrastructure and assisted international keynote researchers in emerging computational domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
