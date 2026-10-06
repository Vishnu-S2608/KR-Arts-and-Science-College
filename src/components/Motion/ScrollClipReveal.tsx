"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export type ClipDirection = "horizontal" | "vertical" | "diagonal" | "inset-center";

interface ScrollClipRevealProps {
  children: React.ReactNode;
  direction?: ClipDirection;
  className?: string;
}

export default function ScrollClipReveal({
  children,
  direction = "horizontal",
  className = "",
}: ScrollClipRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 92%", "start 38%"],
  });

  const rawProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001,
  });

  const clipPathValue = useTransform(rawProgress, (p) => {
    const pct = Math.max(0, Math.min(100, (1 - p) * 100));
    
    switch (direction) {
      case "horizontal":
        // Inset from right to left
        return `inset(0% ${pct}% 0% 0%)`;
      case "vertical":
        // Inset from bottom to top
        return `inset(${pct}% 0% 0% 0%)`;
      case "diagonal":
        // Polygonal reveal from top-left to bottom-right
        const diagPct = Math.max(0, Math.min(100, p * 100));
        return `polygon(0 0, ${diagPct}% 0, ${diagPct}% ${diagPct}%, 0 ${diagPct}%)`;
      case "inset-center":
        // Shrinking inset border
        const centerPct = Math.max(0, Math.min(20, (1 - p) * 20));
        return `inset(${centerPct}% ${centerPct}% ${centerPct}% ${centerPct}%)`;
      default:
        return `inset(0% ${pct}% 0% 0%)`;
    }
  });

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ clipPath: clipPathValue }}
        className="w-full h-full will-change-[clip-path]"
      >
        {children}
      </motion.div>
    </div>
  );
}
