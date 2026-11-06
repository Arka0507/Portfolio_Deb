"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Interactive 3D Geometric Cube (Square) and Concentric Rings (Circle) System
function GeometricSquareAndCircleCore({
  mouse,
  isDesktop,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  isDesktop: boolean;
}) {
  const outerCubeRef = useRef<THREE.Mesh>(null!);
  const innerCubeRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    // 1. Moving 3D Cube (Square) rotations
    if (outerCubeRef.current) {
      outerCubeRef.current.rotation.x += delta * 0.22;
      outerCubeRef.current.rotation.y += delta * 0.32;
    }

    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x -= delta * 0.35;
      innerCubeRef.current.rotation.z += delta * 0.25;
    }

    // 2. Moving 3D Concentric Rings (Circles) gyroscopic rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.18;
      ring1Ref.current.rotation.y += delta * 0.38;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.22;
      ring2Ref.current.rotation.z += delta * 0.28;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z -= delta * 0.15;
      ring3Ref.current.rotation.x -= delta * 0.18;
    }

    // 3. Smooth Mouse-Responsive Parallax Tilting
    if (groupRef.current) {
      const targetPosX = isDesktop ? 1.8 + mouse.current.x * 0.6 : mouse.current.x * 0.4;
      const targetPosY = mouse.current.y * 0.5;

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPosX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPosY, 0.05);

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.current.y * 0.35, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.current.x * 0.35, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[isDesktop ? 1.8 : 0, 0, 0]}>
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.0}>
        {/* ================================================== */}
        {/* 1. MOVING 3D CUBE (SQUARE)                         */}
        {/* ================================================== */}

        {/* Outer Cybernetic Wireframe Cube (Square) */}
        <mesh ref={outerCubeRef}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshStandardMaterial
            wireframe
            color="#EF4444"
            emissive="#EF4444"
            emissiveIntensity={0.65}
            transparent
            opacity={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* Inner Counter-Rotating Cyan Wireframe Cube */}
        <mesh ref={innerCubeRef}>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshStandardMaterial
            wireframe
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Floating Solid Central Core */}
        <mesh>
          <octahedronGeometry args={[0.65, 0]} />
          <meshStandardMaterial
            color="#080808"
            emissive="#EF4444"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* ================================================== */}
        {/* 2. MOVING CONCENTRIC RINGS (CIRCLES)               */}
        {/* ================================================== */}

        {/* Primary Equatorial Circle Ring */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[3.3, 0.03, 16, 120]} />
          <meshStandardMaterial
            color="#EF4444"
            emissive="#EF4444"
            emissiveIntensity={0.85}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Secondary Inclined Circle Ring */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[3.0, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={0.9}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Tertiary Outer Orbital Circle Ring */}
        <mesh ref={ring3Ref} rotation={[-Math.PI / 3, 0, Math.PI / 6]}>
          <torusGeometry args={[3.7, 0.018, 16, 120]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Particle Constellation Cloud surrounding the geometric core
function DataParticleCloud({ count = 550 }: { count?: number }) {
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
      const r = Math.cbrt(Math.random()) * 6.0 + 1.2;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? cRed : Math.random() > 0.4 ? cCyan : cWhite;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
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

  // Lightweight CSS Fallback showing geometric square and circle moving
  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 overflow-hidden">
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
          <div className="absolute inset-10 border border-accent-red/60 animate-spin" style={{ animationDuration: "20s" }} />
          <div className="absolute inset-0 rounded-full border-2 border-accent-cyan/40 animate-pulse" />
          <div className="absolute inset-4 rounded-full border border-dashed border-white/20 animate-spin" style={{ animationDuration: "35s", animationDirection: "reverse" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-8, -8, -5]} intensity={2.2} color="#EF4444" />
        <pointLight position={[6, -6, 6]} intensity={1.4} color="#00E5FF" />

        <GeometricSquareAndCircleCore mouse={mouse} isDesktop={isDesktop} />
        <DataParticleCloud count={550} />
      </Canvas>
    </div>
  );
}
