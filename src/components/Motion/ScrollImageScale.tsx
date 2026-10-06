"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollImageScaleProps {
  children?: React.ReactNode;
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  minScale?: number;
  midScale?: number;
  maxScale?: number;
}

export default function ScrollImageScale({
  children,
  src,
  alt = "",
  className = "",
  imageClassName = "",
  minScale = 1.00,
  midScale = 1.06,
  maxScale = 1.12,
}: ScrollImageScaleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [minScale, midScale, maxScale]
  );

  const scale = useSpring(rawScale, {
    stiffness: 120,
    damping: 24,
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
