"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollTextMotionProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  translateY?: number;
}

export default function ScrollTextMotion({
  children,
  as: Component = "h2",
  className = "",
  translateY = 20,
}: ScrollTextMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 92%", "start 45%"],
  });

  // Reversible translateY (20px -> 0px on scroll down, 0px -> 20px on scroll up)
  const rawY = useTransform(scrollYProgress, [0, 1], [translateY, 0]);
  const y = useSpring(rawY, { stiffness: 160, damping: 28 });

  // Reversible opacity (0.75 -> 1.00 on scroll down, 1.00 -> 0.75 on scroll up)
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 160, damping: 28 });

  return (
    <div ref={containerRef} className="inline-block w-full">
      <Component className={className}>
        <motion.span
          style={{ y, opacity }}
          className="inline-block w-full will-change-transform"
        >
          {children}
        </motion.span>
      </Component>
    </div>
  );
}
