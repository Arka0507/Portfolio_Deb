"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Server, Layers } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import { sound } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel-glow bg-[#0f0f0f] border border-white/20 rounded-xl p-6 sm:p-8 shadow-2xl text-left"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            onMouseEnter={() => sound.playHover()}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-accent-red/20 hover:border-accent-red text-white transition-colors interactive"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pb-6 border-b border-white/10 pr-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-accent-red font-semibold">
                SYSTEM ARCHITECTURE // {project.number}
              </span>
              <span
                className={`font-mono text-[10px] px-2.5 py-0.5 rounded border uppercase tracking-wider ${
                  project.status === "CURRENTLY BUILDING"
                    ? "border-amber-500/40 text-amber-400 bg-amber-500/10"
                    : "border-accent-cyan/40 text-accent-cyan bg-accent-cyan/10"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              {project.title}
            </h2>
            <p className="font-mono text-sm text-secondary mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10 mb-8 bg-black">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Architecture Overview */}
          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-xs text-secondary tracking-widest uppercase mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-red" />
                SYSTEM TOPOLOGY & DESIGN OVERVIEW
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed bg-white/[0.02] p-4 rounded border border-white/5">
                {project.architecture.overview}
              </p>
            </div>

            {/* Architecture Components Breakdown */}
            <div>
              <h3 className="font-mono text-xs text-secondary tracking-widest uppercase mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-cyan" />
                ARCHITECTURAL SUB-SYSTEMS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.architecture.components.map((comp, i) => (
                  <div key={i} className="p-3.5 rounded bg-white/[0.03] border border-white/10">
                    <div className="font-mono text-xs font-bold text-white mb-1">
                      {comp.name}
                    </div>
                    <div className="text-xs text-secondary leading-snug">
                      {comp.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights / Engineering Details */}
            <div>
              <h3 className="font-mono text-xs text-secondary tracking-widest uppercase mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-red" />
                KEY ENGINEERING IMPLEMENTATIONS
              </h3>
              <ul className="space-y-2.5">
                {project.keyDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-red shrink-0 mt-2" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-mono text-xs text-secondary tracking-widest uppercase mb-2">
                STACK ENVIRONMENT
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded bg-white/[0.04] border border-white/10 font-mono text-xs text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-5 py-2.5 rounded bg-white text-black font-mono text-xs tracking-wider uppercase font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 interactive"
              >
                <Github className="w-4 h-4" />
                <span>INSPECT REPOSITORY</span>
              </a>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="px-5 py-2.5 rounded border border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan font-mono text-xs tracking-wider uppercase font-bold hover:bg-accent-cyan/20 transition-colors flex items-center gap-2 interactive"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VIEW LIVE DEMO</span>
                </a>
              ) : (
                <div className="px-4 py-2 rounded border border-white/10 font-mono text-xs text-secondary bg-white/[0.02]">
                  {project.status === "CURRENTLY BUILDING" ? "IN ACTIVE DEVELOPMENT" : "LOCAL / REPO EXPERIMENT"}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
