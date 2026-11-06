"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Send, Copy, Check, Clock, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { sound } from "@/lib/utils";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Live Kolkata Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setFormStatus("sending");

    // Compose mailto as guaranteed direct delivery
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.socials.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-background border-t border-white/[0.08] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-red/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-accent-red tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
          SECTION // 07
        </div>

        {/* Massive Editorial Heading */}
        <div className="mb-16">
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl text-white tracking-tighter leading-[0.95]">
            LET&apos;S BUILD<br />
            SOMETHING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-white to-accent-cyan">
              INTELLIGENT.
            </span>
          </h2>
          <p className="font-mono text-base sm:text-lg text-secondary max-w-2xl mt-6">
            Interested in data, AI, machine learning and building meaningful technology? Let&apos;s connect.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Transmission Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-xl glass-panel border border-white/10 relative overflow-hidden">
              <div className="font-mono text-xs text-secondary uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>DIRECT PROTOCOL</span>
                <span className="text-accent-cyan">AVAILABLE</span>
              </div>
              <div className="font-mono text-sm sm:text-base text-white font-semibold break-all mb-4">
                {PERSONAL_INFO.socials.email}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded bg-accent-red text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-accent-red/90 transition-colors flex items-center gap-2 interactive"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>EMAIL ME</span>
                </a>

                <button
                  onClick={copyEmail}
                  onMouseEnter={() => sound.playHover()}
                  className="px-4 py-2 rounded border border-white/15 bg-white/[0.04] text-white font-mono text-xs tracking-wider uppercase hover:border-white/40 transition-colors flex items-center gap-2 interactive"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-cyan" />
                      <span className="text-accent-cyan">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-secondary" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="p-4 rounded-lg glass-panel border border-white/10 hover:border-accent-cyan/60 transition-all flex items-center justify-between group interactive"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-accent-cyan group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-white">LINKEDIN</div>
                    <div className="font-mono text-[10px] text-secondary">/in/arkadeb-das</div>
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="p-4 rounded-lg glass-panel border border-white/10 hover:border-accent-red/60 transition-all flex items-center justify-between group interactive"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                    <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-white">GITHUB</div>
                    <div className="font-mono text-[10px] text-secondary">/Arka0507</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Resume Download Card */}
            <a
              href="/resume.pdf"
              download="Arkadeb_Das_Resume.pdf"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="p-5 rounded-lg glass-panel border border-white/10 hover:border-white/30 flex items-center justify-between group interactive"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent-red group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <div className="font-heading font-bold text-base text-white">
                    CURRICULUM VITAE
                  </div>
                  <div className="font-mono text-xs text-secondary">
                    Download Official Engineering Resume (PDF)
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs text-accent-red font-semibold tracking-wider uppercase hidden sm:inline">
                GET PDF →
              </span>
            </a>

            {/* Live Telemetry: Kolkata Clock */}
            <div className="p-4 rounded-lg border border-white/5 bg-black/40 flex items-center justify-between font-mono text-xs text-secondary">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent-red" />
                <span>KOLKATA TIME (IST):</span>
              </div>
              <span className="text-white font-semibold">{currentTime || "11:30 AM IST"}</span>
            </div>
          </div>

          {/* Right Column: Terminal Transmission Interface */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/10 relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs text-secondary">
                <div className="flex items-center gap-2 text-white">
                  <Terminal className="w-4 h-4 text-accent-red" />
                  <span>TRANSMISSION_TERMINAL // PORT_507</span>
                </div>
                <span className="text-accent-cyan">SECURE LINK</span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-secondary uppercase tracking-widest mb-2">
                    YOUR IDENTIFIER / FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe / Hiring Manager"
                    className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 font-mono text-sm text-white placeholder-secondary/50 focus:outline-none focus:border-accent-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-secondary uppercase tracking-widest mb-2">
                    YOUR ELECTRONIC MAIL (REPLY-TO)
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 font-mono text-sm text-white placeholder-secondary/50 focus:outline-none focus:border-accent-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-secondary uppercase tracking-widest mb-2">
                    MESSAGE / OPPORTUNITY DETAILS
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe project requirements, full-time opportunities, or collaboration scope..."
                    className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 font-mono text-sm text-white placeholder-secondary/50 focus:outline-none focus:border-accent-red transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-4 rounded bg-accent-red text-white font-mono text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 hover:bg-accent-red/90 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] active:scale-[0.99] interactive disabled:opacity-50"
                >
                  {formStatus === "sending" ? (
                    <span>DISPATCHING MESSAGE...</span>
                  ) : formStatus === "sent" ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>TRANSMISSION COMPLETE</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>DISPATCH TRANSMISSION</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

