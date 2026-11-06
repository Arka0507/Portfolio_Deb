"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Interactive 3D Geometric Centerpiece: Sweeping Orbit Ring (Circle) + Wireframe Mesh + Rotating Cube (Square)
function CenterpieceGeometry({
  mouse,
  isDesktop,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  isDesktop: boolean;
}) {
  const outerSphereMesh = useRef<THREE.Mesh>(null!);
  const wireframeCube = useRef<THREE.Mesh>(null!);
  const sweepingCyanRing = useRef<THREE.Mesh>(null!);
  const secondaryRedRing = useRef<THREE.Mesh>(null!);
  const innerCore = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    // 1. Rotating wireframe cube (square)
    if (wireframeCube.current) {
      wireframeCube.current.rotation.x += delta * 0.35;
      wireframeCube.current.rotation.y += delta * 0.45;
      wireframeCube.current.rotation.z += delta * 0.2;
    }

    // 2. Rotating red wireframe geometric sphere
    if (outerSphereMesh.current) {
      outerSphereMesh.current.rotation.x += delta * 0.15;
      outerSphereMesh.current.rotation.y += delta * 0.2;
    }

    // 3. Sweeping cyan elliptical orbit ring (large sweeping circle)
    if (sweepingCyanRing.current) {
      sweepingCyanRing.current.rotation.z += delta * 0.12;
      sweepingCyanRing.current.rotation.x = Math.PI / 3 + mouse.current.y * 0.25;
      sweepingCyanRing.current.rotation.y = Math.PI / 6 + mouse.current.x * 0.25;
    }

    // 4. Secondary red ring
    if (secondaryRedRing.current) {
      secondaryRedRing.current.rotation.y -= delta * 0.25;
      secondaryRedRing.current.rotation.z -= delta * 0.18;
    }

    // 5. Inner glowing core
    if (innerCore.current) {
      innerCore.current.rotation.x -= delta * 0.4;
      innerCore.current.rotation.y -= delta * 0.3;
    }

    // 6. Smooth Mouse Parallax tracking
    if (groupRef.current) {
      // In the middle/center: slight offset of +0.3 on desktop to sit between text & telemetry
      const targetPosX = isDesktop ? 0.3 + mouse.current.x * 0.45 : mouse.current.x * 0.3;
      const targetPosY = mouse.current.y * 0.4;

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPosX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPosY, 0.05);

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.current.y * 0.25, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.current.x * 0.25, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[isDesktop ? 0.3 : 0, 0, 0]}>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.8}>
        {/* ========================================================= */}
        {/* 1. LARGE SWEEPING CYAN ORBIT RING (THE SWEEPING CIRCLE)   */}
        {/* ========================================================= */}
        <mesh ref={sweepingCyanRing} rotation={[Math.PI / 3.2, Math.PI / 6, 0]}>
          <torusGeometry args={[3.8, 0.03, 16, 140]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={1.2}
            transparent
            opacity={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Secondary Inclined Red Orbit Ring */}
        <mesh ref={secondaryRedRing} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[3.2, 0.02, 16, 120]} />
          <meshStandardMaterial
            color="#EF4444"
            emissive="#EF4444"
            emissiveIntensity={0.8}
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* ========================================================= */}
        {/* 2. CRIMSON RED WIREFRAME SPHERE / ICOSAHEDRON MESH        */}
        {/* ========================================================= */}
        <mesh ref={outerSphereMesh}>
          <icosahedronGeometry args={[2.3, 2]} />
          <meshStandardMaterial
            wireframe
            color="#EF4444"
            emissive="#EF4444"
            emissiveIntensity={0.7}
            transparent
            opacity={0.55}
            roughness={0.2}
          />
        </mesh>

        {/* ========================================================= */}
        {/* 3. ROTATING WIREFRAME CUBE (THE SQUARE)                   */}
        {/* ========================================================= */}
        <mesh ref={wireframeCube}>
          <boxGeometry args={[1.7, 1.7, 1.7]} />
          <meshStandardMaterial
            wireframe
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={1.0}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Inner Solid-Obsidian Core */}
        <mesh ref={innerCore}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#080808"
            emissive="#EF4444"
            emissiveIntensity={0.6}
            metalness={0.95}
            roughness={0.1}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

// Particle Constellation Cloud surrounding the center
function CenterParticleField({ count = 500 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cRed = new THREE.Color("#EF4444");
    const cCyan = new THREE.Color("#00E5FF");
    const cWhite = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 6.2 + 1.2;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? cCyan : Math.random() > 0.4 ? cRed : cWhite;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.035;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DCanvas() {
  const mouse = useRef({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setIsDesktop(window.innerWidth >= 1024);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isClient) return null;

  // Lightweight CSS Fallback for non-WebGL devices
  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 overflow-hidden">
        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
          <div className="absolute inset-16 border-2 border-accent-cyan/80 animate-spin" style={{ animationDuration: "16s" }} />
          <div className="absolute inset-4 rounded-full border-2 border-accent-red/60 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-dashed border-accent-cyan/50 animate-spin" style={{ animationDuration: "28s", animationDirection: "reverse" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.6} color="#FFFFFF" />
        <pointLight position={[-8, -8, -5]} intensity={2.4} color="#EF4444" />
        <pointLight position={[6, 6, 6]} intensity={1.8} color="#00E5FF" />

        <CenterpieceGeometry mouse={mouse} isDesktop={isDesktop} />
        <CenterParticleField count={500} />
      </Canvas>
    </div>
  );
}
