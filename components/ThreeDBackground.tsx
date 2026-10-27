"use client";

import React, { useEffect, useRef } from "react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
}

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // 3D particle simulation constants
    const PARTICLE_COUNT = 60;
    const FOCAL_LENGTH = 380;
    const BOUND_X = 520;
    const BOUND_Y = 320;
    const BOUND_Z = 400;

    // Midnight Cyber Aurora Palette: Mint Emerald & Electric Cyan
    const colors = [
      "rgba(16, 185, 129, ", // Mint Emerald
      "rgba(52, 211, 153, ", // Mint Emerald light
      "rgba(6, 182, 212, ",  // Electric Cyan
      "rgba(56, 189, 248, ", // Sky Cyan
    ];

    const particles: Particle3D[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * BOUND_X * 2,
        y: (Math.random() - 0.5) * BOUND_Y * 2,
        z: (Math.random() - 0.5) * BOUND_Z * 2,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Mouse tracking for 3D rotation
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / width - 0.5;
      const my = (e.clientY - rect.top) / height - 0.5;
      targetRotY = mx * 0.45;
      targetRotX = -my * 0.45;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected: { x: number; y: number; z: number; scale: number; alpha: number; color: string; radius: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate particles
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Soft bounce at 3D bounding box boundaries
        if (p.x > BOUND_X || p.x < -BOUND_X) p.vx *= -1;
        if (p.y > BOUND_Y || p.y < -BOUND_Y) p.vy *= -1;
        if (p.z > BOUND_Z || p.z < -BOUND_Z) p.vz *= -1;

        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Camera distance shift
        const cameraZ = z2 + 650;
        if (cameraZ <= 50) continue;

        const scale = FOCAL_LENGTH / cameraZ;
        const projX = x1 * scale + width / 2;
        const projY = y1 * scale + height / 2;

        // Depth cue: alpha falls off with distance
        const depthFactor = Math.max(0.1, Math.min(1, (z2 + BOUND_Z) / (BOUND_Z * 2)));
        const alpha = depthFactor * 0.8;

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          scale,
          alpha,
          color: p.color,
          radius: p.radius * scale,
        });
      }

      // Draw connection lines in 3D
      const maxDistance = 115;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = p.color.includes("16, 185, 129") || p.color.includes("52, 211, 153") ? "#10B981" : "#06B6D4";
        ctx.shadowBlur = p.scale * 10;
        ctx.fill();
      }
      ctx.shadowBlur = 0; // Reset shadow

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-65"
      aria-hidden="true"
    />
  );
}
