"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface ScrollFullscreenTransformProps {
  imageSrc: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
  stats?: { label: string; value: string }[];
}

export default function ScrollFullscreenTransform({
  imageSrc = "/campus-hero.png",
  badgeText = "EXPLORE CAMPUS ARCHITECTURE",
  title = "World-Class Infrastructure & Inspiring Environment",
  subtitle = "Designed to nurture academic brilliance, multi-disciplinary research, and physical well-being across 25+ acres in Kovilpatti.",
  stats = [
    { label: "Campus Acreage", value: "25+ Acres" },
    { label: "Research Labs", value: "12+ Labs" },
    { label: "Digital Books", value: "30,000+" },
    { label: "Placement Rate", value: "95%" },
  ],
}: ScrollFullscreenTransformProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  // Transform parameters
  const containerWidthPct = useTransform(smoothProgress, [0, 1], [82, 100]);
  const borderRadiusPx = useTransform(smoothProgress, [0, 1], [32, 0]);
  const imgScale = useTransform(smoothProgress, [0, 1], [1.2, 1.0]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.4, 1], [0, 0.3, 0.85]);
  const textY = useTransform(smoothProgress, [0.3, 1], [60, 0]);
  const textOpacity = useTransform(smoothProgress, [0.3, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative py-16 lg:py-24 flex flex-col items-center justify-center overflow-hidden bg-[#071A2F]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1557A6]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D9A441]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Expandable Image Container */}
      <motion.div
        style={{
          width: useTransform(containerWidthPct, (v) => `${v}%`),
          borderRadius: useTransform(borderRadiusPx, (v) => `${v}px`),
        }}
        className="relative h-[65vh] sm:h-[75vh] min-h-[500px] max-w-[1920px] overflow-hidden shadow-2xl transition-all duration-100 will-change-transform border border-white/20"
      >
        {/* Inner Scaling Image */}
        <motion.img
          src={imageSrc}
          alt={title}
          style={{ scale: imgScale }}
          className="w-full h-full object-cover will-change-transform"
        />

        {/* Dynamic Dark Gradient Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/40 to-transparent pointer-events-none"
        />

        {/* Cinematic Content Layer */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-end text-white z-10"
        >
          <div className="max-w-4xl space-y-4">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-[#D9A441] text-xs font-extrabold uppercase tracking-wider shadow-lg">
              <Sparkles className="w-4 h-4 text-[#D9A441]" />
              <span>{badgeText}</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
              {title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-medium max-w-2xl drop-shadow">
              {subtitle}
            </p>

            {/* Stats Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/20">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
                  <p className="text-xl sm:text-2xl font-extrabold text-[#D9A441]">{stat.value}</p>
                  <p className="text-xs text-slate-200 font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
