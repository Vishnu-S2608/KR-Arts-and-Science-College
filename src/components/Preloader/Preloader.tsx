"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter animation from 0 to 100% over 2.2 seconds
    const duration = 2200;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600); // Give time for exit curtain transition
          }, 300);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071A2F] text-[#F7F9FC] overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle Radial Gradient & Ambient Blue Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,87,166,0.25)_0%,rgba(7,26,47,0.95)_70%)] pointer-events-none" />

          {/* Floating Ambient Particles */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#4B9FE1] blur-[1px] animate-pulse" />
            <div className="absolute top-3/4 left-2/3 w-3 h-3 rounded-full bg-[#1557A6] blur-[2px] animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#D9A441] blur-[1px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/5 w-2.5 h-2.5 rounded-full bg-[#4B9FE1] blur-[1px] animate-pulse" />
          </div>

          {/* Main Hero Container */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4">
            
            {/* Logo Orbit & Spin Entrance */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-6">
              
              {/* Stage 2 — Orbit Ring 1 (Clockwise) */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#4B9FE1]/40 animate-spin-clockwise"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              />

              {/* Stage 2 — Orbit Ring 2 (Counter-Clockwise) */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-dotted border-[#D9A441]/30 animate-spin-counter"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              />

              {/* Central Soft Glow behind logo */}
              <div className="absolute inset-4 rounded-full bg-[#1557A6]/30 blur-xl animate-pulse" />

              {/* STAGE 3 — OFFICIAL LOGO ONE 360° SPIN ENTRANCE & SETTLE */}
              <motion.div
                className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-2xl border-2 border-[#4B9FE1]/60 bg-[#1557A6]"
                initial={{ scale: 0.75, opacity: 0, rotate: -180 }}
                animate={{ scale: [0.75, 1.04, 1], opacity: 1, rotate: [ -180, 360, 360 ] }}
                transition={{
                  duration: 0.85,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Official College Logo cropped to real circular emblem */}
                <CollegeLogo className="w-full h-full" />
              </motion.div>
            </div>

            {/* STAGE 4 — "K.R. ARTS & SCIENCE" RUN -> REVEAL -> LOCK */}
            <div className="overflow-hidden h-9 sm:h-10 flex items-center justify-center mb-2">
              <motion.h1
                className="text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-[#F7F9FC] drop-shadow-[0_0_12px_rgba(75,159,225,0.5)]"
                initial={{ x: "-100%", opacity: 0, filter: "blur(8px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                K.R. Arts & Science
              </motion.h1>
            </div>

            {/* STAGE 5 — BRAND LINE (0% -> 100% width) */}
            <motion.div
              className="h-[2px] w-48 sm:w-60 bg-gradient-to-r from-[#1557A6] via-[#4B9FE1] to-[#D9A441] rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.25, ease: "easeOut" }}
            />

            {/* STAGE 6 — LOADING INDICATOR & PROGRESS */}
            <motion.div
              className="flex flex-col items-center w-52 sm:w-64 space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
            >
              <div className="flex justify-between w-full text-xs font-semibold tracking-widest text-[#4B9FE1]">
                <span>LOADING</span>
                <span>{Math.round(progress)}%</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-full h-1.5 bg-[#0B2D52] rounded-full overflow-hidden p-[1px] border border-[#1557A6]/40">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#1557A6] via-[#4B9FE1] to-[#D9A441] rounded-full shadow-[0_0_8px_rgba(217,164,65,0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>

          {/* Curtain Split Effect on Exit */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-[#071A2F]"
            animate={isDone ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#071A2F]"
            animate={isDone ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
