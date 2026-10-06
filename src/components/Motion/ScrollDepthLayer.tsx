"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export type DepthLayerPreset = "background" | "image" | "content" | "foreground";

interface ScrollDepthLayerProps {
  children?: React.ReactNode;
  preset?: DepthLayerPreset;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PRESET_SPEEDS: Record<DepthLayerPreset, number> = {
  background: 0.85,
  image: 0.95,
  content: 1.00,
  foreground: 1.05,
};

export default function ScrollDepthLayer({
  children,
  preset = "content",
  speed,
  className = "",
  style = {},
}: ScrollDepthLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const numericSpeed = speed !== undefined ? speed : PRESET_SPEEDS[preset];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate subtle offset range:
  // Speed 1.00 = 0px movement offset
  // Speed 0.85 = lags behind by -30px to +30px
  // Speed 1.05 = moves ahead by +10px to -10px
  const maxOffset = (1 - numericSpeed) * 60;

  const rawY = useTransform(scrollYProgress, [0, 1], [-maxOffset, maxOffset]);
  const y = useSpring(rawY, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      ref={ref}
      style={{ y, ...style }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
