"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
  minOpacity?: number;
  translateYRange?: [number, number];
}

export default function ScrollSection({
  children,
  className = "",
  minScale = 0.94,
  maxScale = 1.04,
  minOpacity = 0.75,
  translateYRange = [25, 0],
}: ScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks section scroll progress through the viewport continuously
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 1. Reversible Scale: 0.94 when entering -> 1.00 in center -> 1.04 when exiting
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [minScale, 1.00, maxScale]
  );
  const scale = useSpring(rawScale, { stiffness: 140, damping: 28, restDelta: 0.001 });

  // 2. Reversible Opacity: 0.75 when entering -> 1.00 in center -> 0.85 when exiting
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85, 1],
    [minOpacity, 1.00, 1.00, 0.85]
  );
  const opacity = useSpring(rawOpacity, { stiffness: 140, damping: 28, restDelta: 0.001 });

  // 3. Reversible TranslateY: 25px when entering -> 0px in center -> -15px when exiting
  const rawY = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [translateYRange[0], translateYRange[1], -15]
  );
  const y = useSpring(rawY, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
