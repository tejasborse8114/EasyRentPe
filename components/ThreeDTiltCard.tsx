"use client";

import React, { useRef, useState, useCallback, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

interface ThreeDTiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export default function ThreeDTiltCard({
  children,
  className = "",
  maxTilt = 14,
  scale = 1.02,
  glare = true,
}: ThreeDTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const springConfig = { damping: 20, stiffness: 260, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const cardScale = useSpring(1, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Normalized coordinates (-0.5 to 0.5)
      const xPct = (mouseX / width) - 0.5;
      const yPct = (mouseY / height) - 0.5;

      rotateX.set(-yPct * maxTilt);
      rotateY.set(xPct * maxTilt);

      if (glare) {
        setGlarePosition({
          x: (mouseX / width) * 100,
          y: (mouseY / height) * 100,
        });
      }
    },
    [maxTilt, rotateX, rotateY, glare]
  );

  const handleMouseEnter = useCallback(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsHovered(true);
    cardScale.set(scale);
  }, [cardScale, scale]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    cardScale.set(1);
  }, [rotateX, rotateY, cardScale]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale: cardScale,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform [perspective:1000px] ${className}`}
    >
      {/* Glare effect overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.15), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div style={{ transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
