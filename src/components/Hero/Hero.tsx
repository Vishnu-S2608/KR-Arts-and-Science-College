"use client";

import React, { useRef } from "react";
import { ArrowRight, GraduationCap, ShieldCheck, Award, Users, BookOpen } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";

interface HeroProps {
  onOpenApplyModal: () => void;
}

export default function Hero({ onOpenApplyModal }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  // Continuous scroll-linked reversible motion
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Background Parallax (-15px)
  const rawBgY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const bgY = useSpring(rawBgY, { stiffness: 140, damping: 28 });

  // Image Parallax (-25px) & Subtle Scale (1.00 -> 1.05)
  const rawImageY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const imageY = useSpring(rawImageY, { stiffness: 140, damping: 28 });

  const rawImageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.05]);
  const imageScale = useSpring(rawImageScale, { stiffness: 120, damping: 26 });

  // Text Content Parallax (-20px)
  const rawContentY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const contentY = useSpring(rawContentY, { stiffness: 140, damping: 28 });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.8]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F5F7F8] text-[#234052]"
    >
      {/* 1. Background Layer with College Entrance Image & Liquid Glass Gray Overlay */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Full-bleed College Entrance Background Photo */}
        <motion.img
          style={{ scale: imageScale }}
          src="/campus-hero.png"
          alt="KR Arts and Science College Background"
          className="w-full h-full object-cover object-center opacity-35 filter contrast-105"
        />
        
        {/* Liquid Glass Gray Color Overlay with Backdrop Blur */}
        <div className="absolute inset-0 bg-[#F5F7F8]/75 backdrop-blur-md" />
        
        {/* Subtle Liquid Glass Gradient Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F7F8]/90 via-[#F5F7F8]/65 to-[#F5F7F8]/90" />

        {/* Subtle Decorative Wave Pattern Lines */}
        <svg
          className="absolute left-0 top-1/4 w-full h-48 opacity-35 text-[#38A9E8]"
          viewBox="0 0 1200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 80 C 150 140, 350 20, 600 80 C 850 140, 1050 20, 1300 80"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-100 100 C 150 160, 350 40, 600 100 C 850 160, 1050 40, 1300 100"
            stroke="#35C7C2"
            strokeWidth="1.2"
          />
        </svg>

        {/* Ambient Light Accents */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#E8F8F6] opacity-60 filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#F2F9FC] opacity-70 filter blur-3xl pointer-events-none" />
      </motion.div>

      {/* 2. Intact Hero Section Layout with Proportional Trendy Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Trendy Proportional Editorial Typography */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="lg:col-span-6 flex flex-col items-start space-y-6 will-change-transform"
          >
            {/* Trendy Upper Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#EEF1F3] text-[#38A9E8] text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-sm"
            >
              <CollegeLogo className="w-5 h-5" />
              <span className="text-[#234052]">KR ARTS AND SCIENCE COLLEGE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#35C7C2]" />
              <span className="text-[#647887]">ESTD. 1997</span>
            </motion.div>

            {/* Proportional Trendy Headline (Outfit Font) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-extrabold text-[#234052] tracking-tight leading-[1.02]">
                BUILD YOUR FUTURE <br />
                <span className="text-[#38A9E8]">WITH EXCELLENCE</span>
              </h1>
            </motion.div>

            {/* Proportional Concise Sentence */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-[#526878] max-w-xl leading-relaxed font-medium"
            >
              Empowering young minds with world-class higher education, advanced AI labs, and 100% career placement support in Kovilpatti.
            </motion.p>

            {/* Thin Accent Separator Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "160px" }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="h-[2px] bg-[#38A9E8]"
            />

            {/* Proportional Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={onOpenApplyModal}
                className="group inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-[#38A9E8] hover:bg-[#0B5EA8] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-250 shadow-sm hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5 text-white" />
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-250" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#about"
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-white/90 backdrop-blur-md text-[#0B5EA8] font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-[#0B5EA8] hover:bg-[#F2F9FC] transition-colors duration-250 shadow-sm"
              >
                <BookOpen className="w-5 h-5 text-[#0B5EA8]" />
                <span>DISCOVER CAMPUS</span>
              </a>
            </motion.div>

            {/* Quality Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-[#EEF1F3] w-full text-xs font-bold text-[#234052]"
            >
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#EEF1F3] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#38A9E8]" />
                <span>NAAC Accredited</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#EEF1F3] shadow-sm">
                <Award className="w-4 h-4 text-[#35C7C2]" />
                <span>MSU Affiliated</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#EEF1F3] shadow-sm">
                <Users className="w-4 h-4 text-[#38A9E8]" />
                <span>3,500+ Students</span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Real Entrance Photography (Crisp & Framed) */}
          <motion.div
            style={{ y: imageY }}
            className="lg:col-span-6 relative flex flex-col justify-center space-y-4 will-change-transform"
          >
            {/* Geometric Accent Frame Behind Photo */}
            <div className="absolute -inset-2 rounded-3xl bg-white border border-[#EEF1F3] shadow-sm -rotate-1 pointer-events-none z-0" />
            <div className="absolute -right-3 -top-3 w-28 h-28 bg-[#E8F8F6] border border-[#35C7C2]/30 rounded-2xl rotate-6 pointer-events-none z-0" />

            {/* Real College Entrance Photo with Reveal Clip-Path */}
            <motion.div
              initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative z-10 rounded-2xl overflow-hidden border border-[#EEF1F3] shadow-md bg-white group"
            >
              <motion.div style={{ scale: imageScale }} className="w-full h-[360px] sm:h-[430px] overflow-hidden relative">
                <img
                  src="/campus-hero.png"
                  alt="KR Arts and Science College Entrance Architecture"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Small Accent Tag */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 px-3.5 py-1.5 rounded-full border border-[#EEF1F3] shadow-sm flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#35C7C2]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#234052]">
                    REAL CAMPUS ENTRANCE
                  </span>
                </div>
              </motion.div>

              {/* Caption Bar */}
              <div className="p-4 bg-white border-t border-[#EEF1F3] flex items-center justify-between text-[#234052]">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#38A9E8] block">
                    KR ARTS AND SCIENCE COLLEGE
                  </span>
                  <h3 className="text-sm font-bold text-[#234052]">
                    Main Institutional Entrance Arch • Kovilpatti
                  </h3>
                </div>
                <CollegeLogo className="w-9 h-9 border border-[#EEF1F3] shrink-0" />
              </div>
            </motion.div>

            {/* Stat Row */}
            <div className="relative z-10 grid grid-cols-2 gap-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#EEF1F3] shadow-sm">
              <div className="flex items-center space-x-3.5 pr-3 border-r border-[#EEF1F3]">
                <div className="w-10 h-10 rounded-xl bg-[#F2F9FC] text-[#38A9E8] flex items-center justify-center font-extrabold text-base shrink-0 border border-[#EEF1F3]">
                  95%
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-[#38A9E8] uppercase tracking-wider">Placement Support</p>
                  <h4 className="text-xs font-bold text-[#234052]">Recruited by Top MNCs</h4>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 pl-1">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F6] text-[#35C7C2] flex items-center justify-center font-extrabold text-base shrink-0 border border-[#E8F8F6]">
                  40+
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-[#35C7C2] uppercase tracking-wider">University Ranks</p>
                  <h4 className="text-xs font-bold text-[#234052]">MSU Academic Laureates</h4>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Minimal Scroll Indicator */}
        <div className="pt-12 flex flex-col items-center justify-center space-y-2 pointer-events-none text-center">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#647887]">
            SCROLL TO EXPLORE
          </span>
          <div className="w-0.5 h-6 bg-[#EEF1F3] relative overflow-hidden rounded-full">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-2.5 bg-[#38A9E8] rounded-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}



