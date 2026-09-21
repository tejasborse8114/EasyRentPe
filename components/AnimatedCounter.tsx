"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

// Animates "50+", "₹10L+", "300+" etc. by counting up just the numeric portion on scroll into view.
export default function AnimatedCounter({ value }: { value: string }) {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const target = match ? parseFloat(match[2]) : 0;
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.2, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    if (!ref.current) return;
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });
  }, [spring]);

  if (!match) return <span>{value}</span>;
  const [, prefix, , suffix] = match;

  return (
    <span>
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
