"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface ScrollTextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

function WordItem({
  word,
  index,
  totalWords,
  progress,
  isHighlight,
  highlightClassName,
}: {
  word: string;
  index: number;
  totalWords: number;
  progress: MotionValue<number>;
  isHighlight?: boolean;
  highlightClassName?: string;
}) {
  // Compute staggered progress range for each word
  // e.g., for 4 words: Word 0 (0 to 0.5), Word 1 (0.15 to 0.65), etc.
  const step = 0.5 / Math.max(totalWords, 1);
  const start = index * step;
  const end = Math.min(1, start + 0.5);

  const rawY = useTransform(progress, [start, end], [70, 0]);
  const rawOpacity = useTransform(progress, [start, end], [0, 1]);
  const rawBlur = useTransform(progress, [start, end], [8, 0]);

  const y = useSpring(rawY, { stiffness: 180, damping: 28 });
  const opacity = useSpring(rawOpacity, { stiffness: 180, damping: 28 });
  const blur = useTransform(rawBlur, (b) => `blur(${b}px)`);

  return (
    <span className="inline-block overflow-hidden py-1 mr-[0.25em] align-top">
      <motion.span
        style={{
          y,
          opacity,
          filter: blur,
        }}
        className={`inline-block will-change-transform ${
          isHighlight ? highlightClassName || "text-transparent bg-clip-text bg-gradient-to-r from-[#1557A6] via-[#4B9FE1] to-[#C88E23]" : ""
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function ScrollTextReveal({
  text,
  as: Component = "h2",
  className = "",
  highlightWords = [],
  highlightClassName = "",
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 88%", "start 35%"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className="inline-block w-full">
      <Component className={className}>
        {words.map((word, idx) => {
          const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
          const isHighlight = highlightWords.some(
            (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
          );

          return (
            <WordItem
              key={`${word}-${idx}`}
              word={word}
              index={idx}
              totalWords={words.length}
              progress={scrollYProgress}
              isHighlight={isHighlight}
              highlightClassName={highlightClassName}
            />
          );
        })}
      </Component>
    </div>
  );
}
