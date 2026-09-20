"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Slim gradient progress bar tracking scroll position, a common premium-SaaS touch.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
      aria-hidden="true"
    />
  );
}
