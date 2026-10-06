"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export type ParallaxSpeedPreset = "background" | "main-image" | "content" | "text" | "decorative";

interface ParallaxLayerProps {
  children?: React.ReactNode;
  speed?: number | ParallaxSpeedPreset;
  className?: string;
  style?: React.CSSProperties;
}

const SPEED_PRESETS: Record<ParallaxSpeedPreset, number> = {
  background: 0.2,
  "main-image": 0.5,
  content: 0.8,
  text: 1.0,
  decorative: 1.1,
};

export default function ParallaxLayer({
  children,
  speed = "content",
  className = "",
  style = {},
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const numericSpeed = typeof speed === "number" ? speed : SPEED_PRESETS[speed];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate pixel movement range according to speed ratio
  // Speed 1.0 = normal scroll (0px offset relative to document flow)
  // Speed < 1.0 = slower than scroll (lags behind, moves upwards slower)
  // Speed > 1.0 = faster than scroll (moves upwards faster)
  const yOffsetMax = (1 - numericSpeed) * 120;
  
  const rawY = useTransform(scrollYProgress, [0, 1], [-yOffsetMax, yOffsetMax]);
  const y = useSpring(rawY, { stiffness: 150, damping: 25, restDelta: 0.001 });

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
