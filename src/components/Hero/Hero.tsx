"use client";

import React from "react";
import { ArrowRight, GraduationCap, ShieldCheck, Award, Users, Sparkles, BookOpen, ChevronRight, Zap, Trophy, Star } from "lucide-react";
import { motion } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";

interface HeroProps {
  onOpenApplyModal: () => void;
}

export default function Hero({ onOpenApplyModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#FDFBF7] text-[#071A2F]">
      
      {/* 1. Subtle Warm Ivory, Sky Blue & Gold Radial Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#4B9FE1]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#D9A441]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#1557A6]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Animated Ambient Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/5 w-3 h-3 rounded-full bg-[#4B9FE1]/40 blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-[#D9A441]/40 blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-[#1557A6]/30 blur-[1px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Flying Text Entrance & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            
            {/* Flying Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-[#1557A6]/20 text-[#1557A6] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md shadow-[#1557A6]/5"
            >
              <CollegeLogo className="w-6 h-6 border border-[#D9A441]/60" />
              <span className="text-[#071A2F]">K.R. COLLEGE OF ARTS & SCIENCE • ESTD. 1997</span>
            </motion.div>

            {/* Flying Headline with Gold & Royal Blue Accents */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#071A2F] tracking-tight leading-[1.08]"
            >
              Empowering Minds. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1557A6] via-[#0B75D4] to-[#C88E23]">
                Building Futures.
              </span>
            </motion.h1>

            {/* Flying Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
              className="text-base sm:text-lg text-[#26384A] max-w-2xl leading-relaxed font-medium"
            >
              K.R. College of Arts & Science delivers world-class higher education, state-of-the-art AI & Biotechnology research labs, and 100% career placement support in Kovilpatti.
            </motion.p>

            {/* Flying Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-2"
            >
              <button
                onClick={onOpenApplyModal}
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#1557A6] via-[#4B9FE1] to-[#1557A6] text-white font-extrabold text-base uppercase tracking-wider shadow-xl shadow-[#1557A6]/30 hover:shadow-[#4B9FE1]/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/40"
              >
                <GraduationCap className="w-5 h-5 text-[#D9A441]" />
                <span>Admissions Open 2026-27</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-white/90 backdrop-blur-xl text-[#071A2F] font-extrabold text-base border border-[#1557A6]/25 hover:bg-white hover:border-[#1557A6] hover:shadow-lg transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 text-[#1557A6]" />
                <span>Explore Campus</span>
              </a>
            </motion.div>

            {/* Flying Accreditation Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[#1557A6]/15 w-full text-xs font-bold text-[#071A2F]"
            >
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-[#1557A6]/20 shadow-sm backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-[#1557A6]" />
                <span>NAAC Accredited</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-[#D9A441]/40 shadow-sm backdrop-blur-md">
                <Award className="w-4 h-4 text-[#C88E23]" />
                <span>MSU Affiliated</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-[#1557A6]/20 shadow-sm backdrop-blur-md">
                <Users className="w-4 h-4 text-[#1557A6]" />
                <span>3,500+ Students</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Flying 3D Card Stack */}
          <div className="lg:col-span-5 relative flex flex-col justify-center space-y-6">
            
            {/* Flying Main Campus Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border-2 border-white shadow-[0_20px_50px_rgba(7,26,47,0.12)] bg-[#071A2F] group"
            >
              <img
                src="/campus-hero.png"
                alt="K.R. College Campus Architecture"
                className="w-full h-[320px] sm:h-[360px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/30 to-transparent" />

              {/* Overlay Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#D9A441] bg-[#071A2F]/80 px-3 py-1 rounded-full border border-[#D9A441]/40 mb-1.5">
                  <Sparkles className="w-3 h-3 text-[#D9A441]" />
                  <span>K.R. NAGAR, KOVILPATTI</span>
                </div>
                <h3 className="text-xl font-extrabold text-white leading-snug">
                  Inspiring Academic Ambience & Lush Green Campus
                </h3>
              </div>
            </motion.div>

            {/* Flying Glass Card 1 (95% Placement) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="bg-white/90 backdrop-blur-2xl p-5 rounded-2xl border border-[#1557A6]/15 shadow-xl shadow-[#071A2F]/5 flex items-center space-x-4 hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#1557A6] to-[#4B9FE1] text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-[#1557A6]/30 shrink-0 border border-white/50">
                95%
              </div>
              <div>
                <p className="text-xs font-extrabold text-[#C88E23] uppercase tracking-wider">Top Placement Record</p>
                <h4 className="text-base font-bold text-[#071A2F]">Career Placement Track</h4>
                <p className="text-xs text-[#4A5D6E]">Recruited by TCS, Cognizant, Wipro & Zoho</p>
              </div>
            </motion.div>

            {/* Flying Glass Card 2 (40+ Ranks) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="bg-white/90 backdrop-blur-2xl p-4 px-5 rounded-2xl border border-[#1557A6]/15 shadow-xl shadow-[#071A2F]/5 flex items-center space-x-3.5 hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <CollegeLogo className="w-10 h-10 border border-[#D9A441]/60 shadow-md shrink-0 bg-white" />
              <div className="text-left">
                <p className="text-xs font-extrabold text-[#1557A6] uppercase tracking-wider">Academic Distinction</p>
                <h4 className="text-base font-bold text-[#071A2F]">40+ University Rank Laureates</h4>
                <p className="text-[11px] text-[#4A5D6E]">Manonmaniam Sundaranar University Ranks</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
