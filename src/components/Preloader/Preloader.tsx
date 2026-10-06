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
    // Progress counter animation from 0 to 100% over 1.8 seconds
    const duration = 1800;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 400); // Give time for clean fade exit
          }, 200);
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5FBFE] text-[#234052] overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center px-4">
            
            {/* Logo Emblem Entrance */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center mb-6">
              <motion.div
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-sm border border-[#E3F0F6] bg-white p-1"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CollegeLogo className="w-full h-full" />
              </motion.div>
            </div>

            {/* College Title */}
            <div className="overflow-hidden h-8 flex items-center justify-center mb-2">
              <motion.h1
                className="text-lg sm:text-xl font-extrabold uppercase tracking-[0.2em] text-[#234052]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                K.R. Arts & Science
              </motion.h1>
            </div>

            {/* Brand Line */}
            <motion.div
              className="h-[2px] w-40 bg-[#38A9E8] rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            />

            {/* Progress Bar */}
            <motion.div
              className="flex flex-col items-center w-48 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="flex justify-between w-full text-xs font-extrabold tracking-widest text-[#38A9E8]">
                <span>LOADING</span>
                <span>{Math.round(progress)}%</span>
              </div>
              
              <div className="w-full h-1.5 bg-[#EAF7FD] rounded-full overflow-hidden border border-[#E3F0F6]">
                <div
                  className="h-full bg-[#38A9E8] rounded-full transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
