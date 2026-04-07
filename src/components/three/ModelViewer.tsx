"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

/**
 * Placeholder 3D viewer.
 * Shows a slowly rotating wireframe block — stand-in for a real GLB.
 *
 * Performance notes:
 *   - The canvas is paused (frameloop="never") whenever it's off-screen,
 *     so scrolling past it doesn't burn GPU/CPU.
 *   - dpr is clamped low and antialias is off — fine for a wireframe,
 *     bump these back up if you swap in a textured GLB and need quality.
 *   - powerPreference is "low-power" to keep laptops on the integrated GPU.
 */

function PlaceholderBlock() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.25;
    ref.current.rotation.x += dt * 0.08;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.6, 1.0, 0.6]} />
      <meshBasicMaterial color="#232328" />
      <Edges color="#f3f3f5" threshold={1} />
    </mesh>
  );
}

export function ModelViewer({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "150px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] w-full border border-[var(--color-rule)] bg-[var(--color-paper-2)] ${className}`}
    >
      <Canvas
        camera={{ position: [2.4, 1.6, 2.4], fov: 35 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, powerPreference: "low-power" }}
        frameloop={visible ? "always" : "never"}
      >
        <ambientLight intensity={0.8} />
        <PlaceholderBlock />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
      <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
        placeholder · drag to rotate
      </div>
    </div>
  );
}
