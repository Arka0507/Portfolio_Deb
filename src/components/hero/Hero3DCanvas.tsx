"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Interactive 3D Geometric Data Core
function GeometricDataCore({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const outerMesh = useRef<THREE.Mesh>(null!);
  const innerMesh = useRef<THREE.Mesh>(null!);
  const ringMesh = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    // Gentle autonomous rotation
    outerMesh.current.rotation.x += delta * 0.15;
    outerMesh.current.rotation.y += delta * 0.2;

    innerMesh.current.rotation.x -= delta * 0.25;
    innerMesh.current.rotation.z += delta * 0.3;

    ringMesh.current.rotation.z += delta * 0.1;
    ringMesh.current.rotation.x = Math.PI / 3 + mouse.current.y * 0.2;
    ringMesh.current.rotation.y = mouse.current.x * 0.2;

    // Smooth cursor responsiveness with lerp
    outerMesh.current.position.x = THREE.MathUtils.lerp(outerMesh.current.position.x, mouse.current.x * 0.6, 0.05);
    outerMesh.current.position.y = THREE.MathUtils.lerp(outerMesh.current.position.y, mouse.current.y * 0.6, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Outer Wireframe Icosahedron */}
        <mesh ref={outerMesh}>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshStandardMaterial
            wireframe
            color="#EF4444"
            emissive="#EF4444"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
            roughness={0.2}
          />
        </mesh>

        {/* Inner Solid-Glass Core */}
        <mesh ref={innerMesh}>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color="#080808"
            emissive="#00E5FF"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            wireframe
          />
        </mesh>

        {/* Orbiting Thin Gyroscope Ring */}
        <mesh ref={ringMesh}>
          <torusGeometry args={[3.2, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={0.6}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Particle Constellation Cloud
function DataPointConstellation({ count = 450 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c1 = new THREE.Color("#EF4444");
    const c2 = new THREE.Color("#00E5FF");
    const c3 = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 5 + 1.2;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? c1 : Math.random() > 0.5 ? c2 : c3;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
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

  useEffect(() => {
    setIsClient(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return null;

  // Lightweight CSS Cyberpunk Fallback for devices without WebGL
  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 overflow-hidden">
        <div className="w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full border border-accent-red/30 animate-spin" style={{ animationDuration: "25s" }}>
          <div className="w-full h-full rounded-full border-t-2 border-accent-cyan/60 animate-ping opacity-20" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#FFFFFF" />
        <pointLight position={[-8, -8, -5]} intensity={1.5} color="#EF4444" />
        <pointLight position={[5, -5, 5]} intensity={1.0} color="#00E5FF" />

        <GeometricDataCore mouse={mouse} />
        <DataPointConstellation count={400} />
      </Canvas>
    </div>
  );
}
