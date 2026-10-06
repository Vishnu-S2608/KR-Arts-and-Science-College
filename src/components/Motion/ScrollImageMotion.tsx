"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollImageMotionProps {
  children?: React.ReactNode;
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  minScale?: number;
  maxScale?: number;
}

export default function ScrollImageMotion({
  children,
  src,
  alt = "",
  className = "",
  imageClassName = "",
  minScale = 1.00,
  maxScale = 1.05,
}: ScrollImageMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Reversible scale: 1.00 when entering -> 1.05 when scrolling down through section
  const rawScale = useTransform(
    scrollYProgress,
    [0, 1],
    [minScale, maxScale]
  );

  const scale = useSpring(rawScale, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div style={{ scale }} className="w-full h-full will-change-transform">
        {src ? (
          <img src={src} alt={alt} className={`w-full h-full object-cover ${imageClassName}`} />
        ) : (
          children
        )}
      </motion.div>
    </div>
  );
}
