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

    // Responsive 3D particle simulation constants
    const isMobile = window.innerWidth < 640;
    const PARTICLE_COUNT = isMobile ? 28 : 60;
    const FOCAL_LENGTH = isMobile ? 300 : 380;
    const BOUND_X = isMobile ? 320 : 520;
    const BOUND_Y = isMobile ? 240 : 320;
    const BOUND_Z = isMobile ? 300 : 400;

    // Deep Void Violet & Solar Amber Palette
    const colors = [
      "rgba(139, 92, 246, ",  // Electric Violet
      "rgba(167, 139, 250, ", // Luminous Lavender
      "rgba(245, 158, 11, ",  // Solar Amber
      "rgba(251, 191, 36, ",  // Radiant Sun Gold
      "rgba(192, 132, 252, ", // Amethyst Light
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

    // Mouse & ambient auto-drift for 3D rotation
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;
    let autoAngle = 0;

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

      // Subtle ambient continuous drift on mobile and desktop
      autoAngle += 0.002;
      const ambientY = Math.sin(autoAngle) * 0.08;

      // Smooth camera interpolation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += ((targetRotY + ambientY) - rotY) * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project particles to 2D
      const projected: Array<{
        x: number;
        y: number;
        z: number;
        scale: number;
        alpha: number;
        color: string;
        radius: number;
      }> = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate positions
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Bounce within 3D bounding box
        if (p.x < -BOUND_X || p.x > BOUND_X) p.vx *= -1;
        if (p.y < -BOUND_Y || p.y > BOUND_Y) p.vy *= -1;
        if (p.z < -BOUND_Z || p.z > BOUND_Z) p.vz *= -1;

        // Apply camera rotation
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + z2 + BOUND_Z);
        const projX = width / 2 + x1 * scale;
        const projY = height / 2 + y2 * scale;

        // Depth alpha fade
        const alpha = Math.min(0.9, Math.max(0.18, (scale - 0.35) * 1.6));

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
      const maxDistance = isMobile ? 85 : 120;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * Math.min(p1.alpha, p2.alpha) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = p.color.includes("245") || p.color.includes("251") ? "#F59E0B" : "#8B5CF6";
        ctx.shadowBlur = p.scale * 8;
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
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}
