"use client";

import React from "react";
import { GraduationCap, ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import CollegeLogo from "../Common/CollegeLogo";

interface AdmissionsCTAProps {
  onOpenApplyModal: () => void;
}

export default function AdmissionsCTA({ onOpenApplyModal }: AdmissionsCTAProps) {
  return (
    <section className="py-20 bg-[#0B2D52] text-white relative overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1557A6]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D9A441]/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D9A441] text-xs font-bold uppercase tracking-wider">
            <CollegeLogo className="w-6 h-6 border border-white/30" />
            <span>ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-2027</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F7F9FC]">
            Your Journey Starts Here.
          </h2>

          {/* Paragraph */}
          <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Take the first step toward academic brilliance and a rewarding career. Secure your seat at K.R. College of Arts & Science today.
          </p>

          {/* Value Bullet Points */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-200 pt-2">
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
              <span>Affordable Fee Structure</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
              <span>Merit Scholarships Available</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
              <span>Bus Fleet Across Districts</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={onOpenApplyModal}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-[#1557A6] text-white font-bold text-base shadow-xl hover:bg-white hover:text-[#0B2D52] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <GraduationCap className="w-5 h-5 text-[#D9A441]" />
              <span>Apply Online Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-base border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5 text-[#4B9FE1]" />
              <span>Contact Admissions Cell</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
