"use client";

import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { sound } from "@/lib/utils";

export default function SoundToggle() {
  const [active, setActive] = useState(false);

  const toggleSound = () => {
    const next = !active;
    setActive(next);
    sound.setEnabled(next);
    if (next) {
      sound.playClick();
    }
  };

  return (
    <button
      onClick={toggleSound}
      onMouseEnter={() => sound.playHover()}
      aria-label={active ? "Mute interface audio feedback" : "Enable interface audio feedback"}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2 rounded-full glass-panel border border-white/10 hover:border-accent-red/50 text-xs font-mono text-secondary hover:text-white transition-all duration-300 shadow-lg group interactive"
    >
      {active ? (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <Volume2 className="w-3.5 h-3.5 text-accent-cyan" />
          <span className="hidden sm:inline tracking-wider">AUDIO ON</span>
        </>
      ) : (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <VolumeX className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
          <span className="hidden sm:inline tracking-wider">AUDIO OFF</span>
        </>
      )}
    </button>
  );
}

