"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Github, Layers, Cpu, Eye, ExternalLink, Terminal } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";
import { sound } from "@/lib/utils";

// Interactive 3D Tilt Card Component
function ProjectCard({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: (p: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalizing between -10 and 10 degrees tilt
    const xPct = (mouseX / width - 0.5) * 14;
    const yPct = (mouseY / height - 0.5) * -14;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => sound.playHover()}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-xl glass-panel border border-white/10 hover:border-accent-red/50 transition-colors duration-500 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-red/[0.04] via-transparent to-accent-cyan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card Header & Preview Image */}
      <div>
        <div className="p-6 pb-4 flex items-center justify-between border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-red font-bold">
              // {project.number}
            </span>
            <span
              className={`font-mono text-[9px] px-2 py-0.5 rounded border uppercase tracking-wider ${
                project.status === "CURRENTLY BUILDING"
                  ? "border-amber-500/40 text-amber-400 bg-amber-500/10"
                  : "border-accent-cyan/40 text-accent-cyan bg-accent-cyan/10"
              }`}
            >
              {project.status}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onOpenDetails(project);
            }}
            aria-label={`View architecture for ${project.title}`}
            className="flex items-center gap-1.5 font-mono text-[11px] text-secondary hover:text-white transition-colors interactive"
          >
            <Layers className="w-3.5 h-3.5 text-accent-red" />
            <span className="hidden sm:inline">VIEW ARCHITECTURE</span>
          </button>
        </div>

        {/* Project Thumbnail Image with Zoom Effect */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-white/[0.06]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

          {/* Quick Metrics Bar overlay */}
          {project.metrics && (
            <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px]"
                >
                  <span className="text-secondary">{m.label}: </span>
                  <span className="text-white font-semibold">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-accent-red transition-colors duration-300 mb-1">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-accent-cyan mb-3">
            {project.tagline}
          </p>
          <p className="text-secondary text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/10 text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 flex items-center justify-between border-t border-white/[0.06] mt-auto">
        <button
          onClick={() => {
            sound.playClick();
            onOpenDetails(project);
          }}
          className="flex items-center gap-2 font-mono text-xs text-white hover:text-accent-red transition-colors py-2 interactive"
        >
          <Eye className="w-3.5 h-3.5 text-accent-red" />
          <span>INSPECT BLUEPRINT</span>
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/15 bg-white/[0.02] text-xs font-mono text-white hover:border-accent-red hover:bg-accent-red/10 transition-colors interactive"
        >
          <Github className="w-3.5 h-3.5 text-secondary group-hover:text-accent-red" />
          <span>CODE</span>
          <ArrowUpRight className="w-3 h-3 text-secondary" />
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 bg-surface/40 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent-red tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              SECTION // 04
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              SELECTED DEPLOYMENTS.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-secondary max-w-md">
            Engineered systems covering privacy-preserving federated AI, recommendation engines, operational intelligence dashboards, and self-correcting semantic RAG.
          </p>
        </div>

        {/* 2x2 Grid of Flagship Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
