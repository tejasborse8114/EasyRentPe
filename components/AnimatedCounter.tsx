"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Renders "0" until scrolled into view, then counts up to the numeric part of values like "50+", "₹10L+".
export default function AnimatedCounter({ value }: { value: string }) {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[2]) : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  if (!match) return <span>{value}</span>;
  const [, prefix, , suffix] = match;

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
